// Builds the Hiragana and Katakana video courses (one lesson per character video).
// Source: the kana scripts in tiny-japanese-youtube (branch kana-lessons), listed in kana/daily-order.txt.
//
// usage: node tools/gen-kana-video-courses.mjs
// writes: data/course-kana-video.js   (public: lessons 1-3 in full, later lessons are title-only premium stubs)
//         build/full/courses.json     (NOT committed: every lesson in full, used by tools/upload-kana-video-premium.mjs)
// patches: data/courses.js            (adds the two courses once)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const RAW = process.env.KANA_RAW || "https://raw.githubusercontent.com/sabaghanbarlo-hash/tiny-japanese-youtube/kana-lessons";
const FREE = 3; // must match PREMIUM.freeLessons in data/premium-config.js
const pad = (n) => String(n).padStart(2, "0");

const get = async (p) => {
  const r = await fetch(`${RAW}/${p}`);
  if (!r.ok) throw new Error(`${r.status} ${RAW}/${p}`);
  return r.text();
};
const cols = (l) => l.split("|").map((s) => s.trim());

function parse(text) {
  const meta = {}, sec = {};
  let cur = null;
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    const m = line.match(/^\[(\w+)\]$/);
    if (m) { cur = m[1]; sec[cur] = []; continue; }
    if (cur) sec[cur].push(line);
    else { const i = line.indexOf(":"); if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim(); }
  }
  return { meta, sec };
}

// Multiple-choice helpers (deterministic, so re-running gives identical files).
function pick(correct, pool, seed, n = 2) {
  const uniq = [...new Set(pool)].filter((x) => x && x !== correct);
  const out = [];
  for (let i = 0; out.length < n && i < uniq.length; i++) {
    const v = uniq[(seed * 7 + i * 13 + i * i) % uniq.length];
    if (!out.includes(v)) out.push(v);
  }
  for (const v of uniq) { if (out.length >= n) break; if (!out.includes(v)) out.push(v); }
  return out;
}
function mc(correct, distract, seed) {
  const d = pick(correct, distract, seed, 2);
  const pos = seed % (d.length + 1);
  const options = [...d];
  options.splice(pos, 0, correct);
  return { options, answer: pos };
}

const order = (await get("kana/daily-order.txt")).split(/\s+/).filter(Boolean);

const SCRIPTS = [
  {
    prefix: "hira", courseId: "hiragana-video", varName: "hiraganaVideoLessons", script: "Hiragana",
    meta: {
      id: "hiragana-video",
      title: "Hiragana Video Course",
      tagline: "Learn all 104 hiragana sounds, one short video at a time.",
      level: "Absolute beginner",
      topic: "Reading & writing",
      description: "One short video for every hiragana character: watch the stroke-by-stroke writing animation, hear the sound, learn a memory trick and read real words. The course covers the 46 basic characters, the 25 voiced and half-voiced sounds (が, ぱ…) and the 33 combined sounds (きゃ, しゅ…). Every lesson ends with a quiz.",
      outcomes: [
        "Read and say all 46 basic hiragana",
        "Write each character with the correct stroke order",
        "Read the 25 voiced and half-voiced sounds (が, ざ, ば, ぱ…)",
        "Read the 33 combined sounds (きゃ, しゅ, ちょ…)"
      ],
      audience: "Complete beginners. No Japanese needed.",
      videoCredit: "Stroke order animation uses KanjiVG data (CC BY-SA 3.0, kanjivg.tagaini.net). Voices: Mika and Alex (neural text-to-speech).",
      premium: true, price: "$12", buyUrl: ""
    }
  },
  {
    prefix: "kata", courseId: "katakana-video", varName: "katakanaVideoLessons", script: "Katakana",
    meta: {
      id: "katakana-video",
      title: "Katakana Video Course",
      tagline: "Learn all 104 katakana sounds, one short video at a time.",
      level: "Beginner",
      topic: "Reading & writing",
      description: "One short video for every katakana character: watch the stroke-by-stroke writing animation, hear the sound, learn a memory trick and read real foreign words. The course covers the 46 basic characters, the 25 voiced and half-voiced sounds (ガ, パ…) and the 33 combined sounds (キャ, シュ…). Every lesson ends with a quiz.",
      outcomes: [
        "Read and say all 46 basic katakana",
        "Write each character with the correct stroke order",
        "Read the 25 voiced and half-voiced sounds (ガ, ザ, バ, パ…)",
        "Read the 33 combined sounds (キャ, シュ, チョ…) and foreign words in katakana"
      ],
      audience: "Learners who can read hiragana (take the Hiragana Video Course first if not).",
      videoCredit: "Stroke order animation uses KanjiVG data (CC BY-SA 3.0, kanjivg.tagaini.net). Voices: Mika and Alex (neural text-to-speech).",
      premium: true, price: "$12", buyUrl: ""
    }
  }
];

const fullCourses = [];
const publicCourses = [];
let srcLessons = "";

for (const S of SCRIPTS) {
  const stems = order.filter((s) => s.startsWith(`${S.prefix}-`));
  if (stems.length !== 104) throw new Error(`${S.prefix}: expected 104 lessons in daily-order.txt, found ${stems.length}`);
  const parsed = [];
  for (const stem of stems) parsed.push({ stem, ...parse(await get(`kana/${stem}.txt`)) });

  const pool = { romaji: [], kana: [], en: [], wordRomaji: [] };
  const kanaByRomaji = {};
  for (const p of parsed) {
    pool.romaji.push(p.meta.romaji); pool.kana.push(p.meta.kana); kanaByRomaji[p.meta.romaji] = p.meta.kana;
    for (const w of p.sec.words || []) { const [, r, en] = cols(w); pool.wordRomaji.push(r); pool.en.push(en); }
  }

  const lessons = parsed.map((p, idx) => {
    const { meta, sec } = p;
    const number = idx + 1;
    const dr = (sec.distractors || []).join(",").split(/[\s,]+/).filter(Boolean);
    const words = (sec.words || []).map((w) => { const [ja, romaji, en] = cols(w); return { ja, romaji, en }; });
    const similar = (sec.similar || []).map((s) => { const [k, r, note] = cols(s); return { k, r, note }; });

    const blocks = [
      { type: "kana", title: "The character", items: [{ k: meta.kana, r: meta.romaji }] },
      {
        type: "points", title: "Say it and remember it",
        items: [
          { title: `${meta.kana}: ${meta.romaji}`, body: meta.sound ? meta.sound.charAt(0).toUpperCase() + meta.sound.slice(1) + "." : `Read as “${meta.romaji}”.` },
          ...(meta.mnemonic ? [{ title: "Memory trick", body: meta.mnemonic }] : []),
          ...(meta.strokes ? [{ title: "Writing it", body: `${meta.kana} is written in ${meta.strokes} stroke${meta.strokes === "1" ? "" : "s"}. Follow the animation in the video and copy the stroke order.` }] : [])
        ]
      }
    ];
    if (words.length) blocks.push({ type: "words", title: "Words to read", items: words });
    if (similar.length) blocks.push({ type: "tips", title: "Don't mix it up with", items: similar.map((s) => `${s.k} (${s.r}): ${s.note}`) });

    const quiz = [];
    {
      const { options, answer } = mc(meta.romaji, [...dr, ...pool.romaji], number);
      quiz.push({ q: `How do you read ${meta.kana}?`, options, answer, explain: `${meta.kana} is read “${meta.romaji}”.` });
    }
    {
      const kd = [...dr.map((r) => kanaByRomaji[r]).filter(Boolean), ...similar.map((s) => s.k), ...pool.kana];
      const { options, answer } = mc(meta.kana, kd, number + 1);
      quiz.push({ q: `Which character is “${meta.romaji}”?`, options, answer, explain: `“${meta.romaji}” is written ${meta.kana}.` });
    }
    if (words[0]) {
      const { options, answer } = mc(words[0].en, pool.en, number + 2);
      quiz.push({ q: `What does ${words[0].ja} mean?`, options, answer, explain: `${words[0].ja} (${words[0].romaji}) means “${words[0].en}”.` });
    }
    if (words[1]) {
      const { options, answer } = mc(words[1].romaji, pool.wordRomaji, number + 3);
      quiz.push({ q: `How do you read ${words[1].ja}?`, options, answer, explain: `${words[1].ja} is read “${words[1].romaji}” and means “${words[1].en}”.` });
    }

    const lesson = {
      id: p.stem,
      number,
      title: `${meta.title} (${meta.kana})`,
      time: "4 min",
      summary: `${meta.kana} (${meta.romaji}): ${meta.sound || "learn to read, write and remember it"}.`,
      objective: `Read ${meta.kana} as “${meta.romaji}”, write it with the right stroke order and spot it in real words.`,
      blocks,
      quiz
    };
    return lesson;
  });

  const stem2 = (l) => `${pad(l.number)}-${l.id}`;
  const publicList = lessons.map((l) =>
    l.number <= FREE
      ? { ...l, video: { src: `/videos/${S.courseId}/${stem2(l)}.mp4`, poster: `/videos/${S.courseId}/${stem2(l)}.jpg` } }
      : { id: l.id, number: l.number, title: l.title, time: l.time, summary: l.summary, objective: l.objective, premium: true }
  );

  srcLessons += `export const ${S.varName} = ${JSON.stringify(publicList, null, 1)};\n\n`;
  publicCourses.push({ meta: S.meta, varName: S.varName });
  fullCourses.push({ ...S.meta, freeLessons: FREE, lessons: lessons.map((l) => (l.number <= FREE ? { ...l, video: { src: `/videos/${S.courseId}/${stem2(l)}.mp4`, poster: `/videos/${S.courseId}/${stem2(l)}.jpg` } } : l)) });
  console.log(S.courseId, lessons.length, "lessons,", lessons.length - FREE, "premium");
}

const courseSrc = (c) => `{\n ...${JSON.stringify(c.meta, null, 1)},\n lessons: ${c.varName}\n}`;
const out = `// Hiragana and Katakana video courses, generated by tools/gen-kana-video-courses.mjs from the kana scripts in tiny-japanese-youtube.
// Lessons 1-${FREE} of each course are in full; later lessons are premium and live on the server (title and summary only here).
${srcLessons}export const kanaVideoCourses = [\n ${publicCourses.map(courseSrc).join(",\n ")}\n];\n`;
fs.writeFileSync(path.join(root, "data", "course-kana-video.js"), out);

fs.mkdirSync(path.join(root, "build", "full"), { recursive: true });
fs.writeFileSync(path.join(root, "build", "full", "courses.json"), JSON.stringify(fullCourses));

// Register the courses (once). They go first in the list.
const cpath = path.join(root, "data", "courses.js");
let src = fs.readFileSync(cpath, "utf8");
if (!src.includes("kanaVideoCourses")) {
  if (!src.includes("export const courses = [")) throw new Error("data/courses.js has an unexpected shape");
  src = src.replace("export const courses = [", `import { kanaVideoCourses } from "./course-kana-video.js";\n\nexport const courses = [\n  ...kanaVideoCourses,`);
  fs.writeFileSync(cpath, src);
  console.log("patched data/courses.js");
}
console.log("done");
