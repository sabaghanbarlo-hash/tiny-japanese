// Course rendering. Used by build-courses.mjs (static pages in /courses/) and course.js (adds interactivity in the browser).
import { esc } from "./lesson-view.js";
import { audioMap } from "./data/audio-map.js";

// "Hear it" clips (made by video-tools/make-audio.mjs). A button only appears when its clip exists.
const kata = (t) => [...t].map((c) => (c >= "\u3041" && c <= "\u3096" ? String.fromCharCode(c.charCodeAt(0) + 0x60) : c)).join("");
const clip = (text, voice, speed) => { const id = audioMap[`${voice}|${speed}|${text}`]; return id ? `/audio/${id}.mp3` : ""; };
const SPEAKER = `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
const hearBtn = (src, label) => (src ? `<button type="button" class="hear" data-audio="${src}" aria-label="Hear ${esc(label)}">${SPEAKER}</button>` : "");

export const lessonPath = (c, l) => `/courses/${c.id}/${String(l.number).padStart(2, "0")}-${l.id}.html`;
export const coursePath = (c) => `/courses/${c.id}/index.html`;
// Lesson videos are made by video-tools/make-videos.mjs and live in /videos/<course>/<NN-lesson>.mp4 (+ .jpg poster).
const vbase = (c, l) => `/videos/${c.id}/${String(l.number).padStart(2, "0")}-${l.id}`;
// Bump ASSET_V whenever the videos are re-rendered, so browsers and CDNs fetch the new files instead of an older cached copy.
const ASSET_V = "2";
export const videoPath = (c, l) => `${vbase(c, l)}.mp4?v=${ASSET_V}`;
export const posterPath = (c, l) => `${vbase(c, l)}.jpg?v=${ASSET_V}`;

// "20 min" -> 20
const mins = (t) => parseInt(String(t || "0"), 10) || 0;
export const totalMinutes = (c) => c.lessons.reduce((n, l) => n + mins(l.time), 0);
export const hoursLabel = (c) => { const m = totalMinutes(c); return m >= 60 ? `about ${Math.round(m / 30) / 2} hours` : `${m} minutes`; };

const wordRow = (v) => `<li><span class="vja" lang="ja">${esc(v.ja)}${v.kana ? ` <small>(${esc(v.kana)})</small>` : ""}${hearBtn(clip(v.ja, "mika", 0.85), v.ja)}</span><span class="vro">${esc(v.romaji)}</span><span class="ven">${esc(v.en)}</span></li>`;

function blockHTML(b, i) {
  const h = (t) => (t ? `<h2 id="b${i}-h">${esc(t)}</h2>` : "");
  const open = `<section class="block" ${b.title ? `aria-labelledby="b${i}-h"` : ""}>${h(b.title)}`;
  switch (b.type) {
    case "text":
      return `${open}${b.paras.map((p) => `<p class="body-p">${esc(p)}</p>`).join("")}</section>`;
    case "kana": {
      const cols = b.cols || (b.items.length <= 3 ? b.items.length : /combined/i.test(b.title || "") ? 3 : 5);
      return `${open}<ul class="kana-grid" style="--cols:${cols}">${b.items.map((c) => c.k ? (clip(kata(c.k), "mika", 0.8) ? `<li class="kc"><button type="button" class="kc-btn" data-audio="${clip(kata(c.k), "mika", 0.8)}" aria-label="Hear ${esc(c.k)}, ${esc(c.r)}"><span class="kj" lang="ja">${esc(c.k)}</span><span class="kr">${esc(c.r)}</span></button></li>` : `<li class="kc"><span class="kj" lang="ja">${esc(c.k)}</span><span class="kr">${esc(c.r)}</span></li>`) : `<li class="kc empty" aria-hidden="true"></li>`).join("")}</ul></section>`;
    }
    case "words":
      return `${open}<ul class="vocab">${b.items.map(wordRow).join("")}</ul></section>`;
    case "points":
      return `${open}${b.items.map((g) => `<div class="gitem"><h3>${esc(g.title)}</h3><p>${esc(g.body)}</p></div>`).join("")}</section>`;
    case "tips":
      return `${open}<ul class="notes">${b.items.map((n) => `<li>${esc(n)}</li>`).join("")}</ul></section>`;
    case "dialogue":
      return `${open}<ul class="dialogue">${b.lines.map((d) => `<li><span class="who">${esc(d.who)}</span><div class="ja" lang="ja">${esc(d.ja)}${hearBtn(clip(d.ja.replace(/[「」]/g, ""), d.who === "Alex" ? "alex" : "mika", 0.9), d.ja)}</div><div class="ro">${esc(d.romaji)}</div><div class="en">${esc(d.en)}</div></li>`).join("")}</ul></section>`;
    default:
      throw new Error("Unknown block type: " + b.type);
  }
}

const staticQuiz = (q) => `<noscript><ol class="plain">${q.map((x) => `<li>${esc(x.q)}<ul class="plain">${x.options.map((o) => `<li lang="ja">${esc(o)}</li>`).join("")}</ul><details><summary>Show answer</summary><p>Answer: <span lang="ja">${esc(x.options[x.answer])}</span>. ${esc(x.explain)}</p></details></li>`).join("")}</ol></noscript>`;

export function lessonHTML(c, l, prev, next) {
  const hasDialogue = l.blocks.some((b) => b.type === "dialogue");
  const n = c.lessons.length;
  return `
<nav class="crumbs" aria-label="Breadcrumb"><a href="${coursePath(c)}">← ${esc(c.title)}</a></nav>
<header class="lesson-head"><p class="num">Lesson ${l.number} of ${n} · ${esc(l.time || "")}</p><h1 class="h1-md">${esc(l.title)}</h1>
<p class="lead"><strong>Goal:</strong> ${esc(l.objective)}</p></header>
<section class="block video-block" aria-labelledby="vid-h"><h2 id="vid-h">Watch the lesson</h2>
<video controls preload="none" playsinline poster="${posterPath(c, l)}" aria-label="Video for lesson ${l.number}: ${esc(l.title)}"><source src="${videoPath(c, l)}" type="video/mp4">Your browser can't play this video.</video>
<p class="muted">Turn your sound on: listen to each sound, then say it out loud yourself. Tap any character or speaker button on this page to hear it again.${c.videoCredit ? ` ${esc(c.videoCredit)}` : ""}</p></section>
${hasDialogue ? `<div class="toggles" role="group" aria-label="Show or hide help"><label><input type="checkbox" id="t-ro" checked> Romaji</label><label><input type="checkbox" id="t-en" checked> English</label></div>` : ""}
${l.blocks.map(blockHTML).join("\n")}
<section class="block" aria-labelledby="qz-h"><h2 id="qz-h">Quick quiz</h2><p class="muted">Tap an answer to see feedback straight away. Your score is only kept while this page is open.</p><div id="quiz">${staticQuiz(l.quiz)}</div></section>
<section class="block done-box" aria-label="Finish this lesson"><button type="button" class="btn ghost" id="complete" aria-pressed="false" hidden>Mark lesson as complete</button></section>
<nav class="lesson-nav" aria-label="Lesson navigation">
 ${prev ? `<a class="btn ghost" href="${lessonPath(c, prev)}">← ${prev.number}. ${esc(prev.title)}</a>` : "<span></span>"}
 <a class="btn ghost" href="${coursePath(c)}">Course overview</a>
 ${next ? `<a class="btn" href="${lessonPath(c, next)}">${next.number}. ${esc(next.title)} →</a>` : `<a class="btn" href="/courses.html">All courses →</a>`}
</nav>`;
}

export function priceBox(c, SITE) {
  if (c.buyUrl) return `<div class="price-box"><p class="price">${esc(c.price || "")}</p><a class="btn" href="${esc(c.buyUrl)}" rel="noopener">Buy this course</a></div>`;
  return `<div class="price-box"><p class="tag now">Free while we launch</p><p class="muted">Everything in this course is open to read right now, no account needed. Want to hear about new courses and extras? <a href="mailto:${esc(SITE.email)}?subject=${encodeURIComponent("Tiny Japanese courses")}">Email us</a>.</p></div>`;
}

export function overviewHTML(c, SITE) {
  return `
<nav class="crumbs" aria-label="Breadcrumb"><a href="/courses.html">← All courses</a></nav>
<header class="lesson-head course-head"><p class="num">Course · ${esc(c.level)}</p><h1 class="h1-md">${esc(c.title)}</h1>
<p class="lead">${esc(c.tagline)}</p>
<ul class="meta"><li>${c.lessons.length} lessons</li><li>${hoursLabel(c)}</li><li>${esc(c.topic)}</li></ul>
<p class="lead">${esc(c.description)}</p>
${priceBox(c, SITE)}
<p class="cta-row"><a class="btn" id="start-btn" href="${lessonPath(c, c.lessons[0])}">Start lesson 1</a>${c.pdf ? ` <a class="btn ghost" href="${esc(c.pdf)}" download>Download the workbook (PDF)</a>` : ""}</p>
<p class="progress" id="progress" role="status" hidden></p></header>
<section class="block" aria-labelledby="out-h"><h2 id="out-h">What you'll learn</h2><ul class="notes">${c.outcomes.map((o) => `<li>${esc(o)}</li>`).join("")}</ul><p class="muted"><strong>Who it's for:</strong> ${esc(c.audience)}</p></section>
<section class="block" aria-labelledby="syl-h"><h2 id="syl-h">Lessons</h2>
<ol class="syllabus">${c.lessons.map((l) => `<li data-lesson-id="${esc(l.id)}"><a href="${lessonPath(c, l)}"><span class="sn">${l.number}</span><span class="st"><strong>${esc(l.title)}</strong><small>${esc(l.summary)}</small></span><span class="sd" aria-hidden="true"></span></a></li>`).join("")}</ol></section>`;
}

export function courseCard(c, h = "h2") {
  return `<article class="card lesson-card course-card">
 <p class="num">${esc(c.level)} · ${c.lessons.length} lessons</p>
 <${h}>${esc(c.title)}</${h}>
 <p class="topic">${esc(c.topic)}</p>
 <p>${esc(c.tagline)}</p>
 <ul class="vprev" aria-label="Course highlights">${c.outcomes.slice(0, 2).map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
 <p class="muted">${c.buyUrl ? esc(c.price) : "Free while we launch"} · ${hoursLabel(c)}</p>
 <a class="btn" href="${coursePath(c)}" aria-label="View course: ${esc(c.title)}">View course</a>
</article>`;
}

// ---- Browser-side behaviour --------------------------------------------------------------------
// One click handler for every [data-audio] button on the page; starting a clip stops the previous one.
export function wireAudio(root) {
  let audio = null, btn = null;
  const stop = () => { if (audio) audio.pause(); if (btn) btn.classList.remove("playing"); audio = btn = null; };
  root.addEventListener("click", (e) => {
    const b = e.target.closest("[data-audio]");
    if (!b) return;
    const again = b === btn;
    stop();
    if (again) return;
    const a = new Audio(b.dataset.audio);
    audio = a; btn = b; b.classList.add("playing");
    a.onended = a.onerror = () => { if (btn === b) stop(); };
    a.play().catch(() => { if (btn === b) stop(); });
  });
}

const key = (c) => `tj:progress:${c.id}`;
export const readProgress = (c) => { try { const v = JSON.parse(localStorage.getItem(key(c)) || "[]"); return Array.isArray(v) ? v : []; } catch { return []; } };
const writeProgress = (c, ids) => { try { localStorage.setItem(key(c), JSON.stringify(ids)); } catch { /* storage unavailable: progress simply isn't kept */ } };

export function wireLesson(root, c, l) {
  const $ = (s, r = root) => r.querySelector(s);
  const ro = $("#t-ro"), en = $("#t-en");
  if (ro) ro.onchange = () => root.querySelectorAll(".dialogue").forEach((d) => d.classList.toggle("hide-ro", !ro.checked));
  if (en) en.onchange = () => root.querySelectorAll(".dialogue").forEach((d) => d.classList.toggle("hide-en", !en.checked));

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
        $("#result").innerHTML = `<p><strong>You scored ${score} out of ${l.quiz.length}.</strong> ${score === l.quiz.length ? "Perfect!" : "Nice effort. Read the notes above and try again if you like."}</p><button type="button" class="btn ghost" id="retry">Try again</button>`;
      }
    }
    if (e.target.id === "retry") { draw(); quiz.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });

  // "Mark complete" is remembered in this browser only.
  const btn = $("#complete");
  if (btn) {
    btn.hidden = false;
    const paint = () => { const on = readProgress(c).includes(l.id); btn.setAttribute("aria-pressed", String(on)); btn.textContent = on ? "✓ Completed (tap to undo)" : "Mark lesson as complete"; };
    paint();
    btn.onclick = () => { const ids = readProgress(c), on = ids.includes(l.id); writeProgress(c, on ? ids.filter((x) => x !== l.id) : [...ids, l.id]); paint(); };
  }
}

export function wireOverview(root, c) {
  const done = readProgress(c).filter((id) => c.lessons.some((l) => l.id === id));
  root.querySelectorAll(".syllabus li").forEach((li) => { if (done.includes(li.dataset.lessonId)) li.classList.add("is-done"); });
  const p = root.querySelector("#progress"), start = root.querySelector("#start-btn");
  if (!done.length || !p) return;
  const nextL = c.lessons.find((l) => !done.includes(l.id));
  p.hidden = false;
  p.textContent = `${done.length} of ${c.lessons.length} lessons complete.`;
  if (start) {
    if (nextL) { start.href = lessonPath(c, nextL); start.textContent = `Continue: lesson ${nextL.number}`; }
    else start.textContent = "Review lesson 1";
  }
}
