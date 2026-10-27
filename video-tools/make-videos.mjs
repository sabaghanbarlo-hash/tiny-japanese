// Makes one short silent lesson video per course lesson, straight from the course data.
//   node video-tools/make-videos.mjs                  all courses
//   node video-tools/make-videos.mjs katakana-starter  one course
//   node video-tools/make-videos.mjs hiragana-starter 02-k-row   one lesson (match on the file-name part)
// Needs: Node, Playwright (chromium), ffmpeg, a Japanese font (Noto Sans CJK JP), and Python with pyopenjtalk for the narration (see tts.py). Output: videos/<course>/<NN-lesson>.mp4 and .jpg poster.
// Kana stroke order comes from KanjiVG (c) Ulrich Apel, CC BY-SA 3.0, http://kanjivg.tagaini.net (see strokes.json, build-strokes.py).
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..");
const { courses } = await import(pathToFileURL(path.join(root, "data/courses.js")).href);
const strokes = JSON.parse(fs.readFileSync(path.join(here, "strokes.json"), "utf8"));

const [, , onlyCourse, onlyLesson] = process.argv;
const W = 1280, H = 720, FPS = 15;
const SKIP = new Set(["ぢ", "づ", "ヂ", "ヅ", "ヴ"]);
const pad = (n) => String(n).padStart(2, "0");
// Hiragana -> katakana, so single characters like は and へ are read as sounds, not as grammar particles.
const kata = (t) => [...t].map((c) => (c >= "\u3041" && c <= "\u3096" ? String.fromCharCode(c.charCodeAt(0) + 0x60) : c)).join("");
const say = (text, voice = "mika", speed = 0.85) => ({ text, voice, speed });

const PAGE = `<!doctype html><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}
html,body{width:${W}px;height:${H}px;overflow:hidden}
body{background:#fbf6ee;color:#2d2a2e;font-family:"Noto Sans CJK JP","Noto Sans JP",sans-serif;position:relative}
#bar{position:absolute;left:0;right:0;bottom:0;height:56px;display:flex;align-items:center;gap:14px;padding:0 40px;background:#fff;border-top:2px solid #f0e6d8;font-weight:700;font-size:20px;color:#6b6168}
#bar .seal{width:34px;height:34px;border-radius:50%;background:#b8475c;color:#fff;display:grid;place-items:center;font-size:20px;font-weight:900}
#bar .fill{margin-left:auto;width:260px;height:10px;border-radius:99px;background:#f0e6d8;overflow:hidden}
#bar .fill i{display:block;height:100%;background:#b8475c;border-radius:99px}
.center{position:absolute;inset:0 0 56px 0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 90px}
.eyebrow{font-size:28px;font-weight:800;color:#b8475c;letter-spacing:.04em;margin-bottom:18px}
.big{font-size:74px;font-weight:900;line-height:1.15;max-width:1050px}
.sub{font-size:34px;color:#6b6168;margin-top:26px;max-width:960px;line-height:1.4;font-weight:600}
.chip{display:inline-block;background:#f7dfe3;color:#8a2f43;border-radius:99px;padding:6px 22px;font-size:26px;font-weight:800}
.chip.green{background:#dcebd8;color:#32502f}
.stage{position:absolute;inset:0 0 56px 0;display:flex;align-items:center;gap:56px;padding:0 90px}
.card{width:540px;height:540px;background:#fff;border-radius:36px;box-shadow:0 14px 40px #2d2a2e14;display:grid;place-items:center;flex:none}
.card svg{width:480px;height:480px}
.side{flex:1;display:flex;flex-direction:column;align-items:flex-start;gap:10px}
.romaji{font-size:190px;font-weight:900;color:#b8475c;line-height:1}
.print{font-size:96px;font-weight:700;line-height:1.1;color:#2d2a2e}
.note{font-size:30px;font-weight:700;color:#6b6168;min-height:40px}
.ja{font-size:92px;font-weight:700;line-height:1.25;max-width:1080px}
.ro{font-size:42px;font-weight:700;color:#b8475c;margin-top:22px;max-width:1080px;line-height:1.3}
.en{font-size:44px;font-weight:600;color:#4a4249;margin-top:18px;max-width:1080px;line-height:1.3}
.hide{visibility:hidden}
</style><div id="root"></div><div id="bar"></div>
<script>
const NS="http://www.w3.org/2000/svg";
const esc=s=>String(s==null?"":s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const ease=t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
function bar(s){
  const pct=Math.round(100*(s.done||0));
  document.getElementById("bar").innerHTML='<span class="seal">日</span><span>Tiny Japanese</span><span style="color:#b8a9a0">·</span><span>'+esc(s.footer||"")+'</span><span class="fill"><i style="width:'+pct+'%"></i></span>';
}
function charSVG(d,p){
  let g='<svg viewBox="0 0 109 109" xmlns="'+NS+'"><rect x="1" y="1" width="107" height="107" rx="10" fill="none" stroke="#efe4d6" stroke-width="1"/><path d="M54.5 4V105M4 54.5H105" stroke="#e8dccd" stroke-width=".8" stroke-dasharray="3 3"/>';
  d.forEach(x=>{g+='<path d="'+x+'" fill="none" stroke="#efe6da" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>';});
  const nums=[];
  d.forEach((x,i)=>{
    if(p<=i) return;
    const cur=p<i+1, f=cur?ease(p-i):1;
    const tmp=document.createElementNS(NS,"path"); tmp.setAttribute("d",x);
    const L=tmp.getTotalLength();
    const col=cur?"#b8475c":"#2d2a2e";
    g+='<path d="'+x+'" fill="none" stroke="'+col+'" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="'+L+'" stroke-dashoffset="'+(L*(1-f))+'"/>';
    const st=tmp.getPointAtLength(0); nums.push([i+1,st.x,st.y,cur]);
  });
  nums.forEach(n=>{
    const cx=Math.min(102,Math.max(7,n[1]-5)), cy=Math.min(102,Math.max(7,n[2]-5));
    g+='<circle cx="'+cx+'" cy="'+cy+'" r="4.6" fill="'+(n[3]?"#b8475c":"#8a2f43")+'"/><text x="'+cx+'" y="'+(cy+1.7)+'" text-anchor="middle" font-size="5.6" font-weight="800" fill="#fff" font-family="sans-serif">'+n[0]+'</text>';
  });
  return g+'</svg>';
}
window.draw=function(s){
  bar(s); const r=document.getElementById("root");
  if(s.type==="title"){
    r.innerHTML='<div class="center"><div class="eyebrow">'+esc(s.eyebrow)+'</div><div class="big">'+esc(s.title)+'</div><div class="sub">'+esc(s.sub||"")+'</div></div>';
  } else if(s.type==="char"){
    const n=s.d.length, drawing=s.p>0&&s.p<n;
    const note=s.p<=0?"Watch the strokes":(drawing?"Stroke "+(Math.floor(s.p)+1)+" of "+n:n+(n===1?" stroke":" strokes")+" in total");
    r.innerHTML='<div class="stage"><div class="card">'+charSVG(s.d,s.p)+'</div><div class="side"><span class="chip">'+esc(s.label||"")+'</span><div class="romaji">'+esc(s.romaji)+'</div><div class="print">'+esc(s.ch)+'</div><div class="note">'+esc(note)+'</div></div></div>';
  } else if(s.type==="card"){
    r.innerHTML='<div class="center"><div class="eyebrow">'+esc(s.label||"")+'</div><div class="ja" style="font-size:'+(s.ja.length>6?110:170)+'px">'+esc(s.ja)+'</div><div class="ro">'+esc(s.romaji)+'</div><div class="en'+(s.stage<2?" hide":"")+'">'+esc(s.en||"")+'</div></div>';
  } else if(s.type==="phrase"){
    r.innerHTML='<div class="center"><div class="eyebrow">'+esc(s.label||"")+'</div><div style="margin-bottom:22px"><span class="chip'+(s.who==="Alex"?" green":"")+'">'+esc(s.who)+'</span></div><div class="ja">'+esc(s.ja)+'</div><div class="ro'+(s.stage<2?" hide":"")+'">'+esc(s.romaji)+'</div><div class="en'+(s.stage<3?" hide":"")+'">'+esc(s.en)+'</div></div>';
  }
};
</script>`;

// ---- Scene building -------------------------------------------------------------------------------
const singles = (b) => b.items.filter((c) => c.k && !SKIP.has(c.k) && strokes[c.k]);
const isMulti = (b) => b.type === "kana" && /combined|extra/i.test(b.title || "");

function lessonScenes(c, l) {
  const scenes = []; // { s: scene, dur: seconds }
  const n = c.lessons.length;
  const footer = `${c.title} · Lesson ${l.number} of ${n}`;
  const f = (done) => ({ footer, done });
  const add = (s, dur, sp) => scenes.push({ s, dur, say: sp });

  add({ type: "title", eyebrow: `${c.title} · Lesson ${l.number} of ${n}`, title: l.title, sub: l.summary, ...f(0) }, 3.2);

  const charBlocks = l.blocks.filter((b) => b.type === "kana" && !isMulti(b) && singles(b).length);
  const total = charBlocks.reduce((a, b) => a + singles(b).length, 0);
  let idx = 0;
  const script = /katakana/i.test(c.id) ? "katakana" : "hiragana";
  for (const b of charBlocks) {
    for (const ch of singles(b)) {
      const d = strokes[ch.k], N = Math.round(0.8 * FPS);
      const base = { type: "char", ch: ch.k, romaji: ch.r, d, label: `${b.title} · ${script}`, footer, done: (idx + 1) / Math.max(total, 1) };
      const sc = say(kata(ch.k), "mika", 0.8);
      add({ ...base, p: 0 }, 0.7, sc);
      for (let i = 0; i < d.length; i++) {
        for (let k = 1; k <= N; k++) add({ ...base, p: i + k / N }, 1 / FPS);
        add({ ...base, p: i + 1 }, 0.25);
      }
      add({ ...base, p: d.length }, 1.6, sc);
      idx++;
    }
  }

  for (const b of l.blocks.filter(isMulti)) {
    b.items.filter((c0) => c0.k && !SKIP.has(c0.k)).forEach((it, i, arr) => {
      add({ type: "card", label: b.title, ja: it.k, romaji: it.r, en: "", stage: 2, ...f((i + 1) / arr.length) }, 1.3, say(kata(it.k), "mika", 0.85));
    });
  }

  const wordCap = charBlocks.length ? 6 : 12;
  for (const b of l.blocks.filter((x) => x.type === "words")) {
    b.items.slice(0, wordCap).forEach((w, i, arr) => {
      const base = { type: "card", label: b.title, ja: w.ja, romaji: w.romaji, en: w.en, ...f((i + 1) / arr.length) };
      add({ ...base, stage: 1 }, 1.5, say(w.ja));
      add({ ...base, stage: 2 }, 2.2, say(w.ja));
    });
  }

  let lines = l.blocks.filter((x) => x.type === "dialogue").flatMap((b) => b.lines.map((d) => ({ ...d, label: b.title }))).slice(0, 14);
  lines.forEach((d, i) => {
    const base = { type: "phrase", who: d.who, ja: d.ja, romaji: d.romaji, en: d.en, label: d.label, ...f((i + 1) / lines.length) };
    const sp = say(d.ja.replace(/[「」]/g, ""), d.who === "Alex" ? "alex" : "mika", 0.9);
    add({ ...base, stage: 1 }, 1.8, sp);
    add({ ...base, stage: 2 }, 1.8, sp);
    add({ ...base, stage: 3 }, 2.6);
  });

  add({ type: "title", eyebrow: "Well done!", title: "Now try the quiz", sub: "Scroll down on this lesson page to test yourself, then mark the lesson complete.", ...f(1) }, 2.6);
  return scenes;
}

// ---- Rendering ------------------------------------------------------------------------------------
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H } });
await page.setContent(PAGE);
await page.evaluate(() => document.fonts.ready);

let made = 0;
for (const c of courses) {
  if (onlyCourse && c.id !== onlyCourse) continue;
  for (const l of c.lessons) {
    const name = `${pad(l.number)}-${l.id}`;
    if (onlyLesson && !name.includes(onlyLesson)) continue;
    const outDir = path.join(root, "videos", c.id);
    fs.mkdirSync(outDir, { recursive: true });
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "tjv-"));
    const scenes = lessonScenes(c, l);
    // Narration: make the clips, then stretch each scene so its clip fits.
    const jobs = new Map();
    for (const sc of scenes) if (sc.say) { const key = crypto.createHash("sha1").update(JSON.stringify(sc.say)).digest("hex").slice(0, 16); sc.key = key; jobs.set(key, { key, ...sc.say }); }
    const ttsDir = path.join(os.tmpdir(), "tj-tts");
    const lens = JSON.parse(execFileSync("python3", [path.join(here, "tts.py"), ttsDir], { input: JSON.stringify([...jobs.values()]), maxBuffer: 1 << 26 }).toString());
    const events = []; let clock = 0;
    for (const sc of scenes) {
      if (sc.key) { sc.dur = Math.max(sc.dur, lens[sc.key] + 0.4); events.push({ at: clock, file: path.join(ttsDir, sc.key + ".wav") }); }
      clock += sc.dur;
    }
    const list = [];
    let last = null, cache = null, frame = 0;
    for (const { s, dur } of scenes) {
      const key = JSON.stringify(s);
      let file;
      if (key === last) file = cache;
      else {
        file = path.join(tmp, `f${String(frame++).padStart(5, "0")}.png`);
        await page.evaluate((x) => window.draw(x), s);
        await page.screenshot({ path: file });
        last = key; cache = file;
      }
      list.push(`file '${file}'\nduration ${dur.toFixed(4)}`);
      if (frame === 1 && list.length === 1) fs.copyFileSync(file, path.join(tmp, "poster.png"));
    }
    list.push(`file '${cache}'`);
    const listFile = path.join(tmp, "list.txt");
    fs.writeFileSync(listFile, list.join("\n"));
    const out = path.join(outDir, `${name}.mp4`);
    const inputs = ["-f", "concat", "-safe", "0", "-i", listFile, ...events.flatMap((e) => ["-i", e.file])];
    const fc = events.map((e, i) => `[${i + 1}:a]adelay=${Math.round(e.at * 1000)}:all=1[a${i}]`).join(";") + ";" + events.map((_, i) => `[a${i}]`).join("") + `amix=inputs=${events.length}:normalize=0:duration=longest,volume=1.4,alimiter=limit=0.95[aout]`;
    execFileSync("ffmpeg", ["-y", "-v", "error", ...inputs, "-filter_complex", fc, "-map", "0:v", "-map", "[aout]", "-vf", `fps=30,scale=${W}:${H},format=yuv420p`,
      "-c:v", "libx264", "-preset", "veryfast", "-crf", "27", "-c:a", "aac", "-b:a", "80k", "-ac", "1", "-movflags", "+faststart", out], { maxBuffer: 1 << 26 });
    execFileSync("ffmpeg", ["-y", "-v", "error", "-i", path.join(tmp, "poster.png"), "-q:v", "4", path.join(outDir, `${name}.jpg`)]);
    fs.rmSync(tmp, { recursive: true, force: true });
    const secs = clock;
    console.log(`${c.id}/${name}.mp4  ${secs.toFixed(0)}s  ${(fs.statSync(out).size / 1e6).toFixed(2)} MB`);
    made++;
  }
}
await browser.close();
console.log(`Made ${made} videos.`);
