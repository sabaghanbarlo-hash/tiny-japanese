import { lessons } from "./data/lessons.js";
import { SITE } from "./data/site.js";
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Lesson cards (home + library)
const list = $("#lesson-cards");
if (list) {
  const h = list.dataset.level === "2" ? "h2" : "h3";
  list.innerHTML = lessons.map((l) => `<article class="card lesson-card">
 <p class="num">Lesson ${l.number}</p>
 <${h}>${esc(l.title)}</${h}>
 <p class="topic">${esc(l.topic)}</p>
 <p>${esc(l.description)}</p>
 <ul class="vprev" aria-label="Vocabulary preview">${l.vocab.slice(0, 3).map((v) => `<li><span lang="ja">${esc(v.ja)}</span> <small>${esc(v.romaji)}</small></li>`).join("")}</ul>
 <a class="btn" href="learn/${encodeURIComponent(l.id)}.html" aria-label="Open Lesson ${l.number}: ${esc(l.title)}">Open lesson</a>
</article>`).join("");
}

// Instagram links stay hidden until SITE.instagramUrl is set
if (SITE.instagramUrl) document.querySelectorAll("[data-ig]").forEach((a) => { a.href = SITE.instagramUrl; a.hidden = false; });
const y = $("#year"); if (y) y.textContent = new Date().getFullYear();

// Mobile menu
const burger = $(".burger"), menu = $("#menu");
if (burger && menu) {
  const close = () => { burger.setAttribute("aria-expanded", "false"); menu.classList.remove("open"); };
  burger.onclick = () => { const o = burger.getAttribute("aria-expanded") === "true"; burger.setAttribute("aria-expanded", String(!o)); menu.classList.toggle("open", !o); };
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

// Fade-in on scroll
const items = document.querySelectorAll(".reveal");
if (items.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
  items.forEach((el) => io.observe(el));
} else items.forEach((el) => el.classList.add("in"));
