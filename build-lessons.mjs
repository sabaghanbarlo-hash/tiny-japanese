// Static page generator. Run after editing data/lessons.js:   node build-lessons.mjs
// Writes learn/<id>.html (full lesson text in the HTML) and refreshes the lesson cards in index.html and lessons.html.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { lessons } from "./data/lessons.js";
import { SITE } from "./data/site.js";
import { esc, lessonHTML } from "./lesson-view.js";

const root = path.dirname(fileURLToPath(import.meta.url));
const page = (l) => `learn/${l.id}.html`;

// ---- Lesson pages -------------------------------------------------------------------------
const href = (x) => (x.lessons ? "/lessons.html" : "/" + page(x));
const head = (l) => {
  const title = `Lesson ${l.number}: ${l.title} | Tiny Japanese`;
  const desc = `${l.description} Free beginner Japanese lesson with dialogue, vocabulary, grammar, and a quiz.`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#fbf6ee">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23b8475c'/%3E%3Ctext x='50' y='68' font-size='56' text-anchor='middle' fill='white'%3E%E6%97%A5%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;800&family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@600;900&display=swap">
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/theme.css">
<link rel="stylesheet" href="/lesson.css">
<script>document.documentElement.classList.add('js')</script>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:site_name" content="Tiny Japanese">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE.url}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Tiny Japanese: learn Japanese one tiny step at a time">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${SITE.url}/og.png">
</head>`;
};

const body = (l, i) => `
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="nav">
 <a class="logo" href="/index.html" aria-label="Tiny Japanese home"><span class="seal" lang="ja" aria-hidden="true">日</span>Tiny Japanese</a>
 <button class="burger" aria-expanded="false" aria-controls="menu" aria-label="Menu"><span></span><span></span></button>
 <nav id="menu" aria-label="Main">
  <a href="/index.html">Home</a><a href="/courses.html">Courses</a><a href="/lessons.html" aria-current="page">Free Lessons</a><a href="/index.html#about">About</a><a href="/index.html#contact">Contact</a>
  <a class="btn sm ghost" data-yt href="#" target="_blank" rel="noopener" hidden>YouTube</a>
  <a class="btn sm" data-ig href="#" target="_blank" rel="noopener" hidden>Instagram</a>
 </nav>
</header>
<main id="main">
 <div class="wrap lesson-wrap" id="lesson-root" data-lesson="${esc(l.id)}">${lessonHTML(l, lessons[i - 1], lessons[i + 1], href)}
 </div>
</main>
<footer>
 <div class="wrap foot">
  <div><strong>Tiny Japanese</strong><p>Learn Japanese one tiny step at a time.</p></div>
  <nav aria-label="Footer"><a href="/index.html">Home</a><a href="/courses.html">Courses</a><a href="/lessons.html">Free Lessons</a><a href="/index.html#about">About</a><a href="/index.html#contact">Contact</a><a data-ig href="#" target="_blank" rel="noopener" hidden>Instagram</a><a data-yt href="#" target="_blank" rel="noopener" hidden>YouTube</a></nav>
 </div>
 <p class="copy">© <span id="year">2026</span> Tiny Japanese</p>
</footer>
<script type="module" src="/lesson-static.js"></script>
</body>
</html>
`;

fs.mkdirSync(path.join(root, "learn"), { recursive: true });
lessons.forEach((l, i) => fs.writeFileSync(path.join(root, page(l)), head(l) + body(l, i)));

// ---- Lesson cards on the home page and library -----------------------------------------------
const cards = (h) => lessons.map((l) => `<article class="card lesson-card">
 <p class="num">Lesson ${l.number}</p>
 <${h}>${esc(l.title)}</${h}>
 <p class="topic">${esc(l.topic)}</p>
 <p>${esc(l.description)}</p>
 <ul class="vprev" aria-label="Vocabulary preview">${l.vocab.slice(0, 3).map((v) => `<li><span lang="ja">${esc(v.ja)}</span> <small>${esc(v.romaji)}</small></li>`).join("")}</ul>
 <a class="btn" href="${page(l)}" aria-label="Open Lesson ${l.number}: ${esc(l.title)}">Open lesson</a>
</article>`).join("");

for (const [file, h] of [["index.html", "h3"], ["lessons.html", "h2"]]) {
  const p = path.join(root, file);
  let t = fs.readFileSync(p, "utf8");
  t = t.replace(/(<div class="lesson-grid" id="lesson-cards"[^>]*>)[\s\S]*?(<\/div>)/, `$1${cards(h)}$2`);
  t = t.replace(/lesson\.html\?id=[a-z0-9-]+/g, page(lessons[0])); // "Start Learning" buttons point at Lesson 1
  fs.writeFileSync(p, t);
}
console.log(`Built ${lessons.length} lesson pages in learn/ and refreshed cards.`);
