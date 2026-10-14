import { lessons } from "./data/lessons.js";
import "./app.js";
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
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

  const vocab = l.vocab.map((v) => `<li><span class="vja" lang="ja">${esc(v.ja)}${v.kana ? ` <small>(${esc(v.kana)})</small>` : ""}</span><span class="vro">${esc(v.romaji)}</span><span class="ven">${esc(v.en)}</span></li>`).join("");
  const extra = (l.extra || []).map((x) => `<section class="block optional" aria-labelledby="ex-h"><h2 id="ex-h">${esc(x.title)}</h2><p class="muted">Optional. These lines are not part of the video dialogue.</p><ul class="dialogue">${x.items.map((d) => `<li><div class="ja" lang="ja">${esc(d.ja)}</div><div class="ro">${esc(d.romaji)}</div><div class="en">${esc(d.en)}</div></li>`).join("")}</ul></section>`).join("");

  root.innerHTML = `
<nav class="crumbs" aria-label="Breadcrumb"><a href="lessons.html">← All lessons</a></nav>
<header class="lesson-head"><p class="num">Lesson ${l.number} · ${esc(l.topic)}</p><h1 class="h1-md">${esc(l.title)}</h1>
<p class="lead"><strong>Goal:</strong> ${esc(l.objective)}</p><p class="lead">${esc(l.intro)}</p></header>

<section class="block" aria-labelledby="dlg-h"><h2 id="dlg-h">Dialogue</h2>
<div class="toggles" role="group" aria-label="Show or hide help"><label><input type="checkbox" id="t-ro" checked> Romaji</label><label><input type="checkbox" id="t-en" checked> English</label></div>
<ul class="dialogue" id="dialogue">${l.dialogue.map((d) => `<li><span class="who">${esc(d.who)}</span><div class="ja" lang="ja">${esc(d.ja)}</div><div class="ro">${esc(d.romaji)}</div><div class="en">${esc(d.en)}</div></li>`).join("")}</ul>
<p class="muted">Tip: untick Romaji and English to test yourself, then tick them to check.</p></section>

<section class="block" aria-labelledby="voc-h"><h2 id="voc-h">Vocabulary</h2><ul class="vocab">${vocab}</ul></section>

<section class="block" aria-labelledby="gr-h"><h2 id="gr-h">Grammar</h2>${l.grammar.map((g) => `<div class="gitem"><h3>${esc(g.title)}</h3><p>${esc(g.body)}</p></div>`).join("")}</section>

${l.notes && l.notes.length ? `<section class="block" aria-labelledby="nt-h"><h2 id="nt-h">Notes</h2><ul class="notes">${l.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul></section>` : ""}
${extra}

<section class="block" aria-labelledby="qz-h"><h2 id="qz-h">Quick quiz</h2><p class="muted">Tap an answer to see feedback straight away. Your score is only kept while this page is open.</p><div id="quiz"></div></section>

<nav class="lesson-nav" aria-label="Lesson navigation">
 ${prev ? `<a class="btn ghost" href="lesson.html?id=${encodeURIComponent(prev.id)}">← Lesson ${prev.number}: ${esc(prev.title)}</a>` : "<span></span>"}
 <a class="btn ghost" href="lessons.html">All lessons</a>
 ${next ? `<a class="btn" href="lesson.html?id=${encodeURIComponent(next.id)}">Lesson ${next.number}: ${esc(next.title)} →</a>` : "<span></span>"}
</nav>`;

  const set = (box, cls) => $("#dialogue").classList.toggle(cls, !box.checked);
  $("#t-ro").onchange = (e) => set(e.target, "hide-ro");
  $("#t-en").onchange = (e) => set(e.target, "hide-en");

  // Quiz
  const quiz = $("#quiz");
  let score = 0, answered = 0;
  const draw = () => {
    score = 0; answered = 0;
    quiz.innerHTML = l.quiz.map((q, qi) => `<fieldset class="q" data-q="${qi}"><legend>${qi + 1}. ${esc(q.q)}</legend>
<div class="opts">${q.options.map((o, oi) => `<button type="button" class="opt" data-o="${oi}" lang="ja">${esc(o)}</button>`).join("")}</div>
<p class="fb" role="status" aria-live="polite"></p></fieldset>`).join("") + `<div class="result" id="result" role="status" aria-live="polite"></div>`;
  };
  draw();
  quiz.addEventListener("click", (e) => {
    const b = e.target.closest(".opt");
    if (b) {
      const fs = b.closest(".q"), q = l.quiz[+fs.dataset.q];
      if (fs.classList.contains("done")) return;
      fs.classList.add("done");
      const ok = +b.dataset.o === q.answer;
      if (ok) score++;
      answered++;
      fs.querySelectorAll(".opt").forEach((x) => { x.disabled = true; if (+x.dataset.o === q.answer) x.classList.add("right"); });
      if (!ok) b.classList.add("wrong");
      $(".fb", fs).textContent = (ok ? "Correct! " : `Not quite. The answer is “${q.options[q.answer]}”. `) + q.explain;
      $(".fb", fs).className = "fb " + (ok ? "ok" : "no");
      if (answered === l.quiz.length) {
        $("#result").innerHTML = `<p><strong>You scored ${score} out of ${l.quiz.length}.</strong> ${score === l.quiz.length ? "Perfect!" : "Nice effort — read the notes above and try again if you like."}</p><button type="button" class="btn ghost" id="retry">Try again</button>`;
      }
    }
    if (e.target.id === "retry") { draw(); quiz.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
}
