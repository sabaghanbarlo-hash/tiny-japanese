// The courses page (courses.html): cute sakura hero, course cards and a closing banner.
// build-courses.mjs calls catalogPage(); styles live in catalog.css, card settings in data/catalog.js.
import { esc } from "./lesson-view.js";
import { coursePath } from "./course-view.js";
import { catalog, catalogDefault } from "./data/catalog.js";

const TITLE = "Japanese Courses for Beginners | Tiny Japanese";
const DESC = "Step-by-step beginner Japanese courses: learn to read hiragana and katakana, and hold your first real conversations. Short lessons with vocabulary, grammar and quizzes.";

const arrow = `<svg class="arr" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const flower = `<svg viewBox="0 0 64 64" aria-hidden="true"><g transform="translate(32 32)"><g id="p"><path d="M0-4C-9-12-9-26 0-29 9-26 9-12 0-4z" fill="#f4679f"/></g><use href="#p" transform="rotate(72)"/><use href="#p" transform="rotate(144)"/><use href="#p" transform="rotate(216)"/><use href="#p" transform="rotate(288)"/><circle r="6.5" fill="#fff2f7"/><path d="M0-4.2V4.2M-3.6-2.1L3.6 2.1M-3.6 2.1L3.6-2.1" stroke="#f4679f" stroke-width="1.6" stroke-linecap="round"/></g></svg>`;

const ytIcon = `<svg class="yt" viewBox="0 0 24 24" aria-hidden="true"><rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="#f01c2c"/><path d="M10 9l5.5 3-5.5 3z" fill="#fff"/></svg>`;

const heart = `<svg class="ch-heart" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20.5s-8-4.9-8-10.7A4.4 4.4 0 0112 7.4a4.4 4.4 0 018 2.4c0 5.8-8 10.7-8 10.7z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>`;

const head = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#fff4f8">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23d84778'/%3E%3Ctext x='50' y='68' font-size='56' text-anchor='middle' fill='white'%3E%E6%97%A5%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&family=Nunito:wght@400;600;700;800&family=Noto+Sans+JP:wght@400;700;900&family=Noto+Serif+JP:wght@900&display=swap">
<link rel="stylesheet" href="/styles.css">
<link rel="stylesheet" href="/catalog.css">
<script>document.documentElement.classList.add('js')</script>
<title>${TITLE}</title>
<meta name="description" content="${esc(DESC)}">
<meta property="og:site_name" content="Tiny Japanese">
<meta property="og:type" content="website">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${esc(DESC)}">
<meta property="og:image" content="__SITE__/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Tiny Japanese: learn Japanese one tiny step at a time">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${TITLE}">
<meta name="twitter:description" content="${esc(DESC)}">
<meta name="twitter:image" content="__SITE__/og.png">
</head>`;

const nav = `<header class="nav">
 <a class="logo" href="/index.html" aria-label="Tiny Japanese home">${flower}<span>Tiny <b>Japanese</b></span></a>
 <button class="burger" aria-expanded="false" aria-controls="menu" aria-label="Menu"><span></span><span></span></button>
 <nav id="menu" aria-label="Main">
  <a href="/index.html">Home</a><a href="/courses.html" aria-current="page">Courses</a><a href="/lessons.html">Free Lessons</a><a href="/tiny-words.html">Tiny Words</a><a href="/resources.html">Resources</a><a href="/index.html#about">About</a><a href="/index.html#contact">Contact</a>
  <a class="btn sm ghost" data-yt href="#" target="_blank" rel="noopener" hidden>${ytIcon}YouTube</a>
  <a class="btn sm" data-ig href="#" target="_blank" rel="noopener" hidden>Instagram</a>
 </nav>
</header>`;

const hero = `<section class="ch" aria-labelledby="ch-h">
 <div class="ch-copy">
  <h1 id="ch-h" class="ch-title"><span class="ch-l1">Learn Japanese</span> <span class="ch-l2">the <em>fun</em> way!</span></h1>
  <p class="ch-sub">Start from zero, step by step, with cute lessons, <br>real conversations and a lot of practice! ${heart}</p>
 </div>
 <div class="ch-bubble" aria-hidden="true"><span class="b-ja" lang="ja">がんばって!</span><span class="b-ro">Ganbatte!</span><span class="b-en">You can do it! <i>♥</i></span></div>
</section>`;

const cta = `<section class="cta" aria-labelledby="cta-h">
 <div class="cta-copy">
  <h2 id="cta-h"><span class="c1">Start your</span> <span class="c2"><em>Japanese</em> journey today!</span></h2>
  <p>Learn at your own pace, with fun and engaging lessons ✨</p>
  <a class="cc-btn big" href="#course-cards">Explore all courses ${arrow}</a>
 </div>
</section>`;

/** One course card. Facts come from the course, looks from data/catalog.js. */
export function catalogCard(c) {
  const o = { ...catalogDefault, ...(catalog[c.id] || {}) };
  const meta = `${esc(c.level)} • ${c.lessons.length} lessons`;
  const bullets = (o.bullets || c.outcomes.slice(0, 2).map(esc)).map((b) => `<li>${b}</li>`).join("");
  const href = coursePath(c);
  const extras = o.extras
    ? `<img class="cc-x cc-x1" src="/assets/courses/ramen.webp" alt="" loading="lazy" onerror="this.remove()"><img class="cc-x cc-x2" src="/assets/courses/onigiri.webp" alt="" loading="lazy" onerror="this.remove()">`
    : "";
  return `<article class="cc cc-${o.variant} chip-${o.chip}">
 <a class="cc-art" href="${href}" tabindex="-1" aria-hidden="true"><span class="cc-glyph" lang="ja">${esc(o.glyph)}</span><img src="/assets/courses/${esc(c.id)}.webp" alt="" loading="lazy" onerror="this.remove()"><span class="cc-pill ${o.pill}">${meta}</span></a>
 <div class="cc-body">
  <p class="cc-meta">${meta.replace("•", "·")}</p>
  <h2 class="cc-title">${esc(c.title)}</h2>
  <p class="cc-chip">${esc(c.topic)}</p>
  <p class="cc-desc">${esc(c.tagline)}</p>
  <ul class="cc-list" aria-label="Course highlights">${bullets}</ul>
  <a class="cc-btn ${o.btn}" href="${href}" aria-label="View course: ${esc(c.title)}">View course ${arrow}</a>
  ${extras}
 </div>
</article>`;
}

export function catalogPage(courses, SITE) {
  return `${head.replaceAll("__SITE__", SITE.url)}
<body class="catalog">
<a class="skip" href="#main">Skip to content</a>
${nav}
<main id="main">
${hero}
<div class="cc-grid" id="course-cards">${courses.map(catalogCard).join("")}</div>
${cta}
</main>
<footer>
 <div class="wrap foot">
  <div><strong>Tiny Japanese</strong><p>Learn Japanese one tiny step at a time.</p></div>
  <nav aria-label="Footer"><a href="/index.html">Home</a><a href="/courses.html">Courses</a><a href="/lessons.html">Free Lessons</a><a href="/tiny-words.html">Tiny Words</a><a href="/resources.html">Resources</a><a href="/index.html#about">About</a><a href="/index.html#contact">Contact</a><a data-ig href="#" target="_blank" rel="noopener" hidden>Instagram</a><a data-yt href="#" target="_blank" rel="noopener" hidden>YouTube</a></nav>
 </div>
 <p class="copy">© <span id="year">2026</span> Tiny Japanese</p>
</footer>
<script type="module" src="/course.js"></script>
</body>
</html>
`;
}
