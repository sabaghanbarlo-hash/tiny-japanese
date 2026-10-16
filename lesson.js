// Fallback renderer for lesson.html?id=... (older links). The main lesson pages are pre-rendered in /learn/.
import { lessons } from "./data/lessons.js";
import "./app.js";
import { lessonHTML, wireLesson } from "./lesson-view.js";
const $ = (s, r = document) => r.querySelector(s);
const root = $("#lesson-root");
const id = new URLSearchParams(location.search).get("id");
const i = lessons.findIndex((l) => l.id === id);

if (i < 0) {
  document.title = "Lesson not found | Tiny Japanese";
  root.innerHTML = `<h1 class="h1-md">We couldn't find that lesson</h1><p class="lead">The link may be out of date. Pick a lesson from the library.</p><p class="more"><a class="btn" href="lessons.html">Browse free lessons</a></p>`;
} else {
  const l = lessons[i], prev = lessons[i - 1], next = lessons[i + 1];
  document.title = `Lesson ${l.number}: ${l.title} | Tiny Japanese`;
  const setMeta = (sel, v) => { const m = $(sel); if (m) m.setAttribute("content", v); };
  const desc = `${l.description} Free beginner Japanese lesson with dialogue, vocabulary, grammar, and a quiz.`;
  setMeta('meta[name="description"]', desc);
  setMeta('meta[property="og:title"]', document.title); setMeta('meta[name="twitter:title"]', document.title);
  setMeta('meta[property="og:description"]', desc); setMeta('meta[name="twitter:description"]', desc);
  const href = (x) => (x.lessons ? "lessons.html" : `lesson.html?id=${encodeURIComponent(x.id)}`);
  root.innerHTML = lessonHTML(l, prev, next, href);
  wireLesson(root, l);
}
