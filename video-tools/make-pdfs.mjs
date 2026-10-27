// Builds one printable workbook PDF per course from the course data.
//   node video-tools/make-pdfs.mjs [course-id]      ->  downloads/<course-id>-workbook.pdf
// Needs Node, Playwright (chromium) and a Japanese font (Noto Sans CJK JP).
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const { courses } = await import(pathToFileURL(path.join(root, "data/courses.js")).href);
const only = process.argv[2];
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const SKIP = new Set(["ぢ", "づ", "ヂ", "ヅ"]);
const letters = "ABCDEFGH";

const CSS = `
@page{size:A4;margin:16mm 15mm 18mm}
*{box-sizing:border-box}
body{margin:0;font-family:"Noto Sans CJK JP","Noto Sans JP",sans-serif;color:#2d2a2e;font-size:10.5pt;line-height:1.5}
h1,h2,h3{margin:0}
.rose{color:#b8475c}
.cover{height:255mm;display:flex;flex-direction:column;justify-content:center;page-break-after:always}
.seal{width:22mm;height:22mm;border-radius:50%;background:#b8475c;color:#fff;display:grid;place-items:center;font-size:30pt;font-weight:900;margin-bottom:12mm}
.cover .eyebrow{font-weight:800;color:#b8475c;letter-spacing:.06em;text-transform:uppercase;font-size:11pt}
.cover h1{font-size:40pt;line-height:1.1;margin:4mm 0 5mm}
.cover .tag{font-size:16pt;color:#5a5258;max-width:150mm}
.cover .meta{margin-top:12mm;font-size:11pt;color:#6b6168}
.cover .how{margin-top:14mm;background:#fbf6ee;border-radius:5mm;padding:7mm;font-size:10.5pt;max-width:150mm}
.cover .how b{color:#8a2f43}
.lesson{page-break-before:always}
.lesson:first-of-type{page-break-before:avoid}
.lh{border-bottom:.6mm solid #b8475c;padding-bottom:3mm;margin-bottom:5mm}
.lh .num{font-size:9.5pt;font-weight:800;color:#b8475c;text-transform:uppercase;letter-spacing:.05em}
.lh h2{font-size:20pt;line-height:1.2}
.goal{background:#fbf6ee;border-radius:3mm;padding:3mm 4mm;margin:0 0 5mm;font-size:10.5pt}
h3.bt{font-size:12.5pt;margin:6mm 0 2.5mm;color:#8a2f43;break-after:avoid}
p{margin:0 0 2.5mm}
.kg{display:grid;gap:2mm;grid-template-columns:repeat(var(--c,5),1fr);max-width:120mm;break-inside:avoid}
.kc{border:.3mm solid #e6d9c9;border-radius:2mm;text-align:center;padding:2mm 0 1.5mm;min-height:17mm}
.kc.e{border:none}
.kc .j{font-size:19pt;font-weight:700;line-height:1.1}.kc .r{font-size:9pt;color:#8a2f43;font-weight:800}
table{border-collapse:collapse;width:100%;break-inside:auto}
tr{break-inside:avoid}
td,th{border-bottom:.25mm solid #eadfd1;padding:1.6mm 2mm;text-align:left;vertical-align:top}
th{font-size:8.5pt;color:#8a2f43;text-transform:uppercase;letter-spacing:.04em}
td.j{font-size:13pt;font-weight:700;white-space:nowrap}
td.r{color:#8a2f43;font-weight:700}
.pt{margin:0 0 3mm;break-inside:avoid}.pt b{display:block}
ul.tips{margin:0;padding-left:5mm}ul.tips li{margin-bottom:1.6mm}
.dl td.w{font-weight:800;color:#8a2f43;width:16mm}
.dl td.ja{font-size:12.5pt;font-weight:700}
.wp{margin-top:4mm}
.wrow{display:flex;align-items:center;gap:1.4mm;margin-bottom:1.6mm;break-inside:avoid}
.wlab{width:15mm;text-align:center;font-weight:800;color:#8a2f43;font-size:8.5pt}
.cell{width:13.4mm;height:13.4mm;border:.3mm solid #cdbfae;position:relative;display:grid;place-items:center;font-size:21pt;font-weight:400}
.cell::before{content:"";position:absolute;left:50%;top:0;bottom:0;border-left:.2mm dashed #e3d8ca}
.cell::after{content:"";position:absolute;top:50%;left:0;right:0;border-top:.2mm dashed #e3d8ca}
.cell span{position:relative;z-index:1}
.cell.m span{color:#2d2a2e;font-weight:700}.cell.t span{color:#d6cabb}
.q{break-inside:avoid;margin-bottom:4mm}
.q .qt{font-weight:800;margin-bottom:1mm}
.q .o{display:inline-block;margin:0 6mm 1mm 0}
.box{display:inline-block;width:3.4mm;height:3.4mm;border:.3mm solid #8a2f43;border-radius:50%;margin-right:1.6mm;vertical-align:-.4mm}
.key{page-break-before:always}
.key h2{font-size:20pt;margin-bottom:5mm;border-bottom:.6mm solid #b8475c;padding-bottom:3mm}
.key .kl{margin-bottom:3.5mm;break-inside:avoid}.key .kl b{color:#8a2f43}
.key .kl span{display:block;font-size:9.5pt;color:#4a4249}
.end{margin-top:8mm;font-size:9.5pt;color:#6b6168}
`;

function block(b) {
  const h = b.title ? `<h3 class="bt">${esc(b.title)}</h3>` : "";
  switch (b.type) {
    case "text": return h + b.paras.map((p) => `<p>${esc(p)}</p>`).join("");
    case "kana": {
      const cols = b.cols || (b.items.length <= 3 ? b.items.length : /combined/i.test(b.title || "") ? 3 : 5);
      return `${h}<div class="kg" style="--c:${cols}">${b.items.map((c) => c.k ? `<div class="kc"><div class="j">${esc(c.k)}</div><div class="r">${esc(c.r)}</div></div>` : `<div class="kc e"></div>`).join("")}</div>`;
    }
    case "words": return `${h}<table><tr><th>Japanese</th><th>Romaji</th><th>Meaning</th></tr>${b.items.map((w) => `<tr><td class="j">${esc(w.ja)}${w.kana ? ` <small style="font-weight:400">(${esc(w.kana)})</small>` : ""}</td><td class="r">${esc(w.romaji)}</td><td>${esc(w.en)}</td></tr>`).join("")}</table>`;
    case "points": return h + b.items.map((g) => `<div class="pt"><b>${esc(g.title)}</b>${esc(g.body)}</div>`).join("");
    case "tips": return `${h}<ul class="tips">${b.items.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
    case "dialogue": return `${h}<table class="dl">${b.lines.map((d) => `<tr><td class="w">${esc(d.who)}</td><td><div class="ja">${esc(d.ja)}</div><div class="r" style="color:#8a2f43;font-weight:700">${esc(d.romaji)}</div><div>${esc(d.en)}</div></td></tr>`).join("")}</table>`;
    default: return "";
  }
}

function writing(l) {
  const chars = l.blocks.filter((b) => b.type === "kana" && !/combined|extra/i.test(b.title || "")).flatMap((b) => b.items).filter((c) => c.k && !SKIP.has(c.k));
  if (!chars.length) return "";
  const cells = (k) => `<div class="cell m"><span>${esc(k)}</span></div><div class="cell t"><span>${esc(k)}</span></div><div class="cell t"><span>${esc(k)}</span></div>` + `<div class="cell"></div>`.repeat(6);
  return `<h3 class="bt">Writing practice</h3><p>Trace the grey characters, then write each one on your own. Say the sound out loud every time. Check the stroke order in this lesson's video.</p><div class="wp">${chars.map((c) => `<div class="wrow"><div class="wlab">${esc(c.r)}</div>${cells(c.k)}</div>`).join("")}</div>`;
}

function quiz(l) {
  return `<h3 class="bt">Check yourself</h3>` + l.quiz.map((q, i) => `<div class="q"><div class="qt">${i + 1}. ${esc(q.q)}</div>${q.options.map((o, oi) => `<span class="o"><span class="box"></span>${letters[oi]}. ${esc(o)}</span>`).join("")}</div>`).join("");
}

function courseHTML(c) {
  const cover = `<section class="cover"><div class="seal">日</div><div class="eyebrow">Tiny Japanese · Workbook</div><h1>${esc(c.title)}</h1><div class="tag">${esc(c.tagline)}</div>
<div class="meta">${esc(c.level)} · ${c.lessons.length} lessons · ${esc(c.topic)}</div>
<div class="how"><b>How to use this workbook.</b> Follow the lessons on the website (with the short video for each one), and keep this workbook next to you. Read each page, say everything out loud, do the writing practice and tick your answers in "Check yourself". The answer key is at the back.<br><br><b>Website:</b> tiny-japanese.sabagh1.workers.dev</div></section>`;
  const lessons = c.lessons.map((l) => `<section class="lesson"><div class="lh"><div class="num">Lesson ${l.number} of ${c.lessons.length} · ${esc(l.time || "")}</div><h2>${esc(l.title)}</h2></div><div class="goal"><b>Goal:</b> ${esc(l.objective)}</div>${l.blocks.map(block).join("")}${writing(l)}${quiz(l)}</section>`).join("");
  const key = `<section class="key"><h2>Answer key</h2>${c.lessons.map((l) => `<div class="kl"><b>Lesson ${l.number}: ${esc(l.title)}</b>${l.quiz.map((q, i) => `<span>${i + 1}. ${letters[q.answer]}. ${esc(q.options[q.answer])}</span>`).join("")}</div>`).join("")}<p class="end">© Tiny Japanese. For personal study. Learn Japanese one tiny step at a time.</p></section>`;
  return `<!doctype html><html lang="en"><meta charset="utf-8"><title>${esc(c.title)} Workbook</title><style>${CSS}</style><body>${cover}${lessons}${key}</body></html>`;
}

const browser = await chromium.launch();
fs.mkdirSync(path.join(root, "downloads"), { recursive: true });
for (const c of courses) {
  if (only && c.id !== only) continue;
  const page = await browser.newPage();
  await page.setContent(courseHTML(c), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  const out = path.join(root, "downloads", `${c.id}-workbook.pdf`);
  await page.pdf({ path: out, format: "A4", printBackground: true, displayHeaderFooter: true, margin: { top: "16mm", bottom: "18mm", left: "15mm", right: "15mm" },
    headerTemplate: "<span></span>",
    footerTemplate: `<div style="width:100%;font-size:8px;color:#8a7f86;padding:0 15mm;display:flex;justify-content:space-between;font-family:sans-serif"><span>Tiny Japanese · ${esc(c.title)} Workbook</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>` });
  await page.close();
  console.log(`${path.relative(root, out)}  ${(fs.statSync(out).size / 1e6).toFixed(2)} MB`);
}
await browser.close();
