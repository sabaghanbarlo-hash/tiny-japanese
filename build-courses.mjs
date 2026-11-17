// Static page generator for courses. Run after editing anything in data/courses.js or data/course-*.js:   node build-courses.mjs
// Writes courses/<course>/index.html, courses/<course>/NN-<lesson>.html and courses.html, and refreshes the course cards on the home page.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { courses, heroBundle } from "./data/courses.js";
import { funnelEndHTML, heroBoxHTML, signupHTML } from "./funnel-core.js";
import { applyWbwOverlay } from "./wbw-overlay.js";
import { SITE } from "./data/site.js";
import { esc } from "./lesson-view.js";
import { catalogPage } from "./catalog-view.js";
import { lessonHTML, overviewHTML, courseCard, lessonPath, coursePath } from "./course-view.js";

const root = path.dirname(fileURLToPath(import.meta.url));
// Word-by-word breakdowns for older courses (optional overlay file).
try { const st = applyWbwOverlay(courses, JSON.parse(fs.readFileSync(path.join(root, "data", "wbw-ja.json"), "utf8"))); console.log(`Word-by-word overlay: ${st.applied} applied to ${st.lessons} lessons, ${st.mismatched} mismatched, ${st.missing} not present`); } catch (e) { if (e.code !== "ENOENT") throw e; }
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
<link rel="stylesheet" href="/premium.css">
<link rel="stylesheet" href="/funnel.css">
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
  <a href="/index.html">Home</a><a href="/courses.html" aria-current="page">Courses</a><a href="/lessons.html">Free Lessons</a><a href="/tiny-words.html">Tiny Words</a><a href="/resources.html">Resources</a><a href="/index.html#about">About</a><a href="/index.html#contact">Contact</a>
  <a class="btn sm ghost" data-yt href="#" target="_blank" rel="noopener" hidden>YouTube</a>
  <a class="btn sm" data-ig href="#" target="_blank" rel="noopener" hidden>Instagram</a>
 </nav>
</header>
<main id="main">
${inner}
</main>
<footer>
 <div class="wrap foot">
  <div><strong>Tiny Japanese</strong><p>Learn Japanese one tiny step at a time.</p></div>
  <nav aria-label="Footer"><a href="/index.html">Home</a><a href="/courses.html">Courses</a><a href="/lessons.html">Free Lessons</a><a href="/tiny-words.html">Tiny Words</a><a href="/resources.html">Resources</a><a href="/index.html#about">About</a><a href="/index.html#contact">Contact</a><a data-ig href="#" target="_blank" rel="noopener" hidden>Instagram</a><a data-yt href="#" target="_blank" rel="noopener" hidden>YouTube</a></nav>
 </div>
 <p class="fn-foot" style="margin:.25rem 0"><a data-email href="#" hidden></a> · <a href="/about.html">About &amp; refund policy</a></p>
 <p class="copy">© <span id="year">2026</span> Tiny Japanese</p>
</footer>
<script type="module" src="/course.js"></script>
</body>
</html>
`;

// ---- Course overview and lesson pages ------------------------------------------------------------
let pages = 0;
const funnelEnd = funnelEndHTML(heroBundle, courses, "end");
for (const c of courses) {
  write(coursePath(c).slice(1), shell(
    { title: `${c.title}: ${c.tagline} | Tiny Japanese`, desc: `${c.description}`.slice(0, 300), type: "website" },
    `<div class="wrap lesson-wrap" id="course-root" data-course="${esc(c.id)}">${overviewHTML(c, SITE)}\n</div>`));
  pages++;
  c.lessons.forEach((l, i) => {
    const title = `${c.title}, Lesson ${l.number}: ${l.title} | Tiny Japanese`;
    write(lessonPath(c, l).slice(1), shell(
      { title, desc: `${l.summary} Part of the ${c.title} course on Tiny Japanese.` },
      `<div class="wrap lesson-wrap" id="course-root" data-course="${esc(c.id)}" data-lesson="${esc(l.id)}">${lessonHTML(c, l, c.lessons[i - 1], c.lessons[i + 1], funnelEnd)}\n</div>`));
    pages++;
  });
}

// ---- Course catalog (page: catalog-view.js, look: catalog.css, per-card settings: data/catalog.js) ----------
write("courses.html", catalogPage(courses, SITE));

// ---- Hero product, e-mail sign-up and collapsed "More courses" on the home page --------------------
// index.html keeps a <!-- funnel:start --> ... <!-- funnel:end --> block (between the page stage and the footer) that this script rewrites.
const homePath = path.join(root, "index.html");
let home = fs.readFileSync(homePath, "utf8");
const others = courses.filter((c) => !heroBundle.includes.includes(c.id));
const block = `<!-- funnel:start -->
<section class="fn-home" id="start-here" aria-label="Start here">
 ${heroBoxHTML(heroBundle, courses, { where: "home" })}
 ${signupHTML({ where: "home" })}
 <details class="more-courses fn-more"><summary>More courses</summary>
  <ul>${others.map((c) => `<li><a href="${coursePath(c)}">${esc(c.title)}</a> <span class="fn-note">${esc(c.price || "Free")}</span></li>`).join("")}</ul>
  <p><a href="/courses.html">See all courses</a></p>
 </details>
</section>
<!-- funnel:end -->`;
if (!home.includes("<!-- funnel:start -->")) throw new Error("index.html is missing the <!-- funnel:start --> block");
home = home.replace(/<!-- funnel:start -->[\s\S]*?<!-- funnel:end -->/, () => block);
fs.writeFileSync(homePath, home);

console.log(`Built ${pages} course pages in courses/, courses.html, and refreshed the home page funnel block.`);
