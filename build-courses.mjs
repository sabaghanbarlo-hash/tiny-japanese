// Static page generator for courses. Run after editing anything in data/courses.js or data/course-*.js:   node build-courses.mjs
// Writes courses/<course>/index.html, courses/<course>/NN-<lesson>.html and courses.html, and refreshes the course cards on the home page.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { courses } from "./data/courses.js";
import { SITE } from "./data/site.js";
import { esc } from "./lesson-view.js";
import { lessonHTML, overviewHTML, courseCard, lessonPath, coursePath } from "./course-view.js";

const root = path.dirname(fileURLToPath(import.meta.url));
const write = (rel, text) => { const p = path.join(root, rel); fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, text); };

const head = ({ title, desc, type = "article" }) => `<!doctype html>
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
<link rel="stylesheet" href="/course.css">
<script>document.documentElement.classList.add('js')</script>
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta property="og:site_name" content="Tiny Japanese">
<meta property="og:type" content="${type === "article" ? "article" : "website"}">
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

const shell = (meta, inner, attrs = "") => `${head(meta)}
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="nav">
 <a class="logo" href="/index.html" aria-label="Tiny Japanese home"><span class="seal" lang="ja" aria-hidden="true">日</span>Tiny Japanese</a>
 <button class="burger" aria-expanded="false" aria-controls="menu" aria-label="Menu"><span></span><span></span></button>
 <nav id="menu" aria-label="Main">
  <a href="/index.html">Home</a><a href="/courses.html" aria-current="page">Courses</a><a href="/lessons.html">Free Lessons</a><a href="/index.html#about">About</a><a href="/index.html#contact">Contact</a>
  <a class="btn sm" data-ig href="#" target="_blank" rel="noopener" hidden>Instagram</a>
 </nav>
</header>
<main id="main">
${inner}
</main>
<footer>
 <div class="wrap foot">
  <div><strong>Tiny Japanese</strong><p>Learn Japanese one tiny step at a time.</p></div>
  <nav aria-label="Footer"><a href="/index.html">Home</a><a href="/courses.html">Courses</a><a href="/lessons.html">Free Lessons</a><a href="/index.html#about">About</a><a href="/index.html#contact">Contact</a><a data-ig href="#" target="_blank" rel="noopener" hidden>Instagram</a></nav>
 </div>
 <p class="copy">© <span id="year">2026</span> Tiny Japanese</p>
</footer>
<script type="module" src="/course.js"></script>
</body>
</html>
`;

// ---- Course overview and lesson pages ------------------------------------------------------------
let pages = 0;
for (const c of courses) {
  write(coursePath(c).slice(1), shell(
    { title: `${c.title}: ${c.tagline} | Tiny Japanese`, desc: `${c.description}`.slice(0, 300), type: "website" },
    `<div class="wrap lesson-wrap" id="course-root" data-course="${esc(c.id)}">${overviewHTML(c, SITE)}\n</div>`));
  pages++;
  c.lessons.forEach((l, i) => {
    const title = `${c.title}, Lesson ${l.number}: ${l.title} | Tiny Japanese`;
    write(lessonPath(c, l).slice(1), shell(
      { title, desc: `${l.summary} Part of the ${c.title} course on Tiny Japanese.` },
      `<div class="wrap lesson-wrap" id="course-root" data-course="${esc(c.id)}" data-lesson="${esc(l.id)}">${lessonHTML(c, l, c.lessons[i - 1], c.lessons[i + 1])}\n</div>`));
    pages++;
  });
}

// ---- Course catalog ------------------------------------------------------------------------------
write("courses.html", shell(
  { title: "Japanese Courses for Beginners | Tiny Japanese", desc: "Step-by-step beginner Japanese courses: learn to read hiragana and katakana, and hold your first real conversations. Short lessons with vocabulary, grammar and quizzes.", type: "website" },
  `<section class="wrap page-top">
 <p class="eyebrow">Step by step</p>
 <h1 class="h1-md">Japanese Courses</h1>
 <p class="lead">Free lessons are great for dipping in. Courses take you through a topic from start to finish, in order, with a clear goal at the end of each one. Pick the one that matches where you are.</p>
 <div class="lesson-grid" id="course-cards">${courses.map((c) => courseCard(c, "h2")).join("")}</div>
 <p class="more">Prefer to start with a single short conversation? <a href="/lessons.html"><strong>Try the free lessons</strong></a>.</p>
</section>`));

// ---- Course cards on the home page ---------------------------------------------------------------
const homePath = path.join(root, "index.html");
let home = fs.readFileSync(homePath, "utf8");
const block = `<!-- courses:start -->
<section class="wrap" id="courses" aria-labelledby="co-h">
 <h2 id="co-h">Courses</h2>
 <p class="lead">Follow a topic from start to finish: learn to read hiragana and katakana, then hold your first conversations.</p>
 <div class="lesson-grid">${courses.map((c) => courseCard(c, "h3")).join("")}</div>
 <p class="more"><a class="btn ghost" href="/courses.html">See all courses</a></p>
</section>
<!-- courses:end -->`;
if (home.includes("<!-- courses:start -->")) home = home.replace(/<!-- courses:start -->[\s\S]*?<!-- courses:end -->/, block);
else home = home.replace(/(<section class="band" id="about")/, `${block}\n\n$1`);
fs.writeFileSync(homePath, home);

console.log(`Built ${pages} course pages in courses/, courses.html, and refreshed the home page course cards.`);
