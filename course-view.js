// Course rendering. Used by build-courses.mjs (static pages in /courses/) and course.js (adds interactivity in the browser).
import { esc } from "./lesson-view.js";
import { audioMap } from "./data/audio-map.js";
import { PREMIUM } from "./data/premium-config.js";
import { lockPanelHTML } from "./premium-core.js";

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
const ASSET_V = "4";
export const videoPath = (c, l) => `${vbase(c, l)}.mp4?v=${ASSET_V}`;
export const posterPath = (c, l) => `${vbase(c, l)}.jpg?v=${ASSET_V}`;

// "20 min" -> 20
const mins = (t) => parseInt(String(t || "0"), 10) || 0;
export const totalMinutes = (c) => c.lessons.reduce((n, l) => n + mins(l.time), 0);
export const hoursLabel = (c) => { const m = totalMinutes(c); return m >= 60 ? `about ${Math.round(m / 30) / 2} hours` : `${m} minutes`; };

const rich = (s) => esc(s).replace(/\{([^|}]+)\|([^}]+)\}/g, '<b lang="ja">$1</b>');
const hlJa = (ja, h) => (h ? esc(ja).split(esc(h)).join(`<mark>${esc(h)}</mark>`) : esc(ja));
const teachEx = (e) => `<li><div class="ja" lang="ja">${e.bad ? "✗ " : ""}${hlJa(e.ja, e.hl)}${e.bad ? "" : hearBtn(clip(e.ja, "mika", 0.85), e.ja)}</div><div class="ro">${esc(e.ro)}</div><div class="en">${esc(e.en)}</div>${wbw(e.words)}</li>`;
const wbw = (w) => (Array.isArray(w) && w.length) ? `<details class="wbw"><summary>Word by word</summary><div class="wbw-row" lang="ja">${w.map((t) => `<span class="wbw-w"><b>${esc(t[0])}</b><i>${esc(t[1])}</i><em>${esc(t[2])}</em></span>`).join("")}</div></details>` : "";
const teachStep = (st) => `<div class="gitem"><h3>${esc(st.head)}</h3>${[].concat(st.say).map((p) => `<p>${rich(p)}</p>`).join("")}${(st.show || []).length ? `<ul class="dialogue">${st.show.map(teachEx).join("")}</ul>` : ""}${st.try ? `<details><summary>Try it: ${rich(st.try.q)}</summary><p lang="ja">${hlJa(st.try.ja, st.try.hl)}${hearBtn(clip(st.try.ja, "mika", 0.85), st.try.ja)}</p><p>${esc(st.try.ro)}: ${esc(st.try.en)}</p>${wbw(st.try.words)}</details>` : ""}</div>`;

const wordRow = (v) => `<li><span class="vja" lang="ja">${esc(v.ja)}${v.kana ? ` <small>(${esc(v.kana)})</small>` : ""}${hearBtn(clip(v.ja, "mika", 0.85), v.ja)}</span><span class="vro">${esc(v.romaji)}</span><span class="ven">${esc(v.en)}</span>${wbw(v.words)}</li>`;

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
      return `${open}${b.items.map((g) => `<div class="gitem"><h3>${esc(g.title)}</h3><p>${esc(g.body)}</p>${wbw(g.words)}</div>`).join("")}</section>`;
    case "teach":
      return `${open}${b.steps.map(teachStep).join("")}</section>`;
    case "tips":
      return `${open}<ul class="notes">${b.items.map((n) => `<li>${esc(n)}</li>`).join("")}</ul></section>`;
    case "dialogue":
      return `${open}<ul class="dialogue">${b.lines.map((d) => `<li><span class="who">${esc(d.who)}</span><div class="ja" lang="ja">${esc(d.ja)}${hearBtn(clip(d.ja.replace(/[「」]/g, ""), d.who === "Alex" ? "alex" : "mika", 0.9), d.ja)}</div><div class="ro">${esc(d.romaji)}</div><div class="en">${esc(d.en)}</div>${wbw(d.words)}</li>`).join("")}</ul></section>`;
    default:
      throw new Error("Unknown block type: " + b.type);
  }
}

const staticQuiz = (q) => `<noscript><ol class="plain">${q.map((x) => `<li>${esc(x.q)}<ul class="plain">${x.options.map((o) => `<li lang="ja">${esc(o)}</li>`).join("")}</ul><details><summary>Show answer</summary><p>Answer: <span lang="ja">${esc(x.options[x.answer])}</span>. ${esc(x.explain)}</p></details></li>`).join("")}</ol></noscript>`;

// The lesson content (video, text, quiz). For premium lessons this is exported once and stored on the server; the browser receives it only after a valid code.
export function lessonBody(c, l, opts = {}) {
  const hasDialogue = l.blocks.some((b) => b.type === "dialogue");
  const video = opts.premium
    ? `<video controls preload="none" playsinline data-premium-video aria-label="Video for lesson ${l.number}: ${esc(l.title)}">Your browser can't play this video.</video>`
    : `<video controls preload="none" playsinline poster="${l.video ? l.video.poster : posterPath(c, l)}" aria-label="Video for lesson ${l.number}: ${esc(l.title)}"><source src="${l.video ? l.video.src : videoPath(c, l)}" type="video/mp4">Your browser can't play this video.</video>`;
  return `
${c.noVideo && !l.video ? "" : `<section class="block video-block" aria-labelledby="vid-h"><h2 id="vid-h">Watch the lesson</h2>
${video}
<p class="muted">${l.video ? "Watch the story, learn the words and grammar, then try the quiz." : "Turn your sound on: listen to each sound, then say it out loud yourself. Tap any character or speaker button on this page to hear it again."}${c.videoCredit ? ` ${esc(c.videoCredit)}` : ""}</p></section>`}
${hasDialogue ? `<div class="toggles" role="group" aria-label="Show or hide help"><label><input type="checkbox" id="t-ro" checked> Romaji</label><label><input type="checkbox" id="t-en" checked> English</label></div>` : ""}
${l.blocks.map(blockHTML).join("\n")}
<section class="block" aria-labelledby="qz-h"><h2 id="qz-h">Quick quiz</h2><p class="muted">Tap an answer to see feedback straight away. Your score is only kept while this page is open.</p><div id="quiz">${staticQuiz(l.quiz)}</div></section>
<section class="block done-box" aria-label="Finish this lesson"><button type="button" class="btn ghost" id="complete" aria-pressed="false" hidden>${c.kanaVideos ? "Mark practice as complete" : "Mark lesson as complete"}</button></section>`;
}

export function lessonHTML(c, l, prev, next) {
  const n = c.lessons.length;
  const head = `
<nav class="crumbs" aria-label="Breadcrumb"><a href="${coursePath(c)}">← ${esc(c.title)}</a></nav>
<header class="lesson-head"><p class="num">${c.kanaVideos ? "Practice" : "Lesson"} ${l.number} of ${n} · ${esc(l.time || "")}${l.premium ? '<span class="pm-lock-tag">Premium</span>' : ""}</p><h1 class="h1-md">${esc(l.title)}</h1>
<p class="lead"><strong>Goal:</strong> ${esc(l.objective)}</p></header>`;
  const nav = `
<nav class="lesson-nav" aria-label="Lesson navigation">
 ${prev ? `<a class="btn ghost" href="${lessonPath(c, prev)}">← ${prev.number}. ${esc(prev.title)}</a>` : "<span></span>"}
 <a class="btn ghost" href="${coursePath(c)}">Course overview</a>
 ${next ? `<a class="btn" href="${lessonPath(c, next)}">${next.number}. ${esc(next.title)} →</a>` : `<a class="btn" href="/courses.html">All courses →</a>`}
</nav>`;
  const body = l.premium
    ? `<div id="premium-slot" data-premium-lesson>${lockPanelHTML({ course: c.id, courseTitle: c.title, price: c.price, payUrl: c.payUrl || PREMIUM.payUrl, site: PREMIUM.site, heading: "This lesson is part of the full course", intro: `Lessons 1 to ${(c.freeLessons ?? PREMIUM.freeLessons)} are free. Unlock the rest of ${c.title} ${c.noVideo ? "to read this lesson and practise the quiz." : "to watch this lesson, practise the quiz and get the PDF workbook."}` })}</div>`
    : lessonBody(c, l);
  return head + body + nav;
}

export function priceBox(c, SITE) {
  if (c.premium) return `<div class="price-box"><p class="tag now">${c.kanaVideos ? `Free preview: ${c.kanaFreeVideos} writing videos + practice lessons 1 to ${(c.freeLessons ?? PREMIUM.freeLessons)}` : `Free preview: lessons 1 to ${(c.freeLessons ?? PREMIUM.freeLessons)}`}</p><div data-pm-panel>${lockPanelHTML({ course: c.id, courseTitle: c.title, price: c.price, payUrl: c.payUrl || PREMIUM.payUrl, site: PREMIUM.site, heading: "Unlock the full course", intro: c.kanaVideos ? `The first ${c.kanaFreeVideos} writing videos and the first ${(c.freeLessons ?? PREMIUM.freeLessons)} practice lessons are free to try. The full course adds the other ${c.kanaVideoCount - c.kanaFreeVideos} writing videos and ${c.lessons.length - (c.freeLessons ?? PREMIUM.freeLessons)} more practice lessons with quizzes and the PDF workbook.` : `The first ${(c.freeLessons ?? PREMIUM.freeLessons)} lessons are free to try. The full course adds ${c.lessons.length - (c.freeLessons ?? PREMIUM.freeLessons)} more lessons with ${c.noVideo ? "full notes, dialogues and quizzes" : "videos, quizzes and the PDF workbook"}.` })}</div><p class="pm-unlocked" data-pm-unlocked hidden><span class="pm-unlocked-tag">✓ Premium unlocked</span> ${c.kanaVideos ? "All writing videos, practice lessons and the workbook are open on this device." : c.noVideo ? "All lessons are open on this device." : "All lessons, videos and the workbook are open on this device."}</p></div>`;
  if (c.buyUrl) return `<div class="price-box"><p class="price">${esc(c.price || "")}</p><a class="btn" href="${esc(c.buyUrl)}" rel="noopener">Buy this course</a></div>`;
  return `<div class="price-box"><p class="tag now">Free while we launch</p><p class="muted">Everything in this course is open to read right now, no account needed.</p></div>`;
}

function kanaVideosSection(c) {
  return `<section class="block" aria-labelledby="vid-h"><h2 id="vid-h">The course: writing videos</h2>
<p>This course is built around one short video for every character. Each video lets you hear the sound, watch the strokes being written in order, learn a memory trick, read real words and try a quick quiz. Follow them in order, from the vowels to the combined sounds. The first ${c.kanaFreeVideos} videos are free.</p>
<ul class="notes"><li><strong>Basic sounds</strong>: the 46 core characters</li><li><strong>Voiced sounds</strong>: the 25 characters with dakuten and handakuten</li><li><strong>Combined sounds</strong>: the 33 sounds made with a small ゃ, ゅ or ょ</li></ul>
<p class="cta-row"><a class="btn" href="${esc(c.kanaVideos)}">Start with the writing videos</a></p></section>`;
}

export function overviewHTML(c, SITE) {
  return `
<nav class="crumbs" aria-label="Breadcrumb"><a href="/courses.html">← All courses</a></nav>
<header class="lesson-head course-head"><p class="num">Course · ${esc(c.level)}</p><h1 class="h1-md">${esc(c.title)}</h1>
<p class="lead">${esc(c.tagline)}</p>
<ul class="meta">${c.kanaVideos ? `<li>${c.kanaVideoCount} writing videos</li><li>${c.lessons.length} practice lessons</li>` : `<li>${c.lessons.length} lessons</li>`}<li>${hoursLabel(c)}</li><li>${esc(c.topic)}</li></ul>
<p class="lead">${esc(c.description)}</p>
${priceBox(c, SITE)}
<p class="cta-row">${c.kanaVideos ? `<a class="btn" href="${esc(c.kanaVideos)}">Start with the writing videos</a> <a class="btn ghost" id="start-btn" href="${lessonPath(c, c.lessons[0])}">Practice 1</a>` : `<a class="btn" id="start-btn" href="${lessonPath(c, c.lessons[0])}">Start lesson 1</a>`}${c.pdf ? ` <a class="btn ghost" href="${esc(c.pdf)}" download>Download the workbook (PDF)</a>` : ""}${c.premium ? ` <a class="btn ghost" id="pdf-btn" href="#" download hidden>Download the workbook (PDF)</a>` : ""}</p>
<p class="progress" id="progress" role="status" hidden></p></header>
${c.kanaVideos ? kanaVideosSection(c) : ""}
<section class="block" aria-labelledby="out-h"><h2 id="out-h">What you'll learn</h2><ul class="notes">${c.outcomes.map((o) => `<li>${esc(o)}</li>`).join("")}</ul><p class="muted"><strong>Who it's for:</strong> ${esc(c.audience)}</p></section>
<section class="block" aria-labelledby="syl-h"><h2 id="syl-h">${c.kanaVideos ? "Practice lessons" : "Lessons"}</h2>${c.kanaVideos ? `<p class="muted">Use these to practise what you learn in the writing videos: a chart, reading practice and a quiz for each step.</p>` : ""}
<ol class="syllabus">${c.lessons.map((l) => `<li data-lesson-id="${esc(l.id)}"${l.premium ? ' class="is-premium-lesson"' : ""}><a href="${lessonPath(c, l)}"><span class="sn">${l.number}</span><span class="st"><strong>${esc(l.title)}${l.premium ? '<span class="pm-lock-tag">Premium</span>' : ""}</strong><small>${esc(l.summary)}</small></span><span class="sd" aria-hidden="true"></span></a></li>`).join("")}</ol></section>`;
}

export function courseCard(c, h = "h2") {
  return `<article class="card lesson-card course-card">
 <p class="num">${esc(c.level)} · ${c.kanaVideos ? `${c.kanaVideoCount} writing videos + ${c.lessons.length} practice lessons` : `${c.lessons.length} lessons`}</p>
 <${h}>${esc(c.title)}</${h}>
 <p class="topic">${esc(c.topic)}</p>
 <p>${esc(c.tagline)}</p>
 <ul class="vprev" aria-label="Course highlights">${c.outcomes.slice(0, 2).map((o) => `<li>${esc(o)}</li>`).join("")}</ul>
 <p class="muted">${c.premium ? (c.kanaVideos ? `First ${c.kanaFreeVideos} writing videos and ${(c.freeLessons ?? PREMIUM.freeLessons)} practice lessons free · ${esc(c.price)} for the full course` : `First ${(c.freeLessons ?? PREMIUM.freeLessons)} lessons free · ${esc(c.price)} for the full course`) : c.buyUrl ? esc(c.price) : "Free while we launch"} · ${hoursLabel(c)}</p>
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
  if (c.id === "tiny-1000") wirePractice(root);
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
    const paint = () => { const on = readProgress(c).includes(l.id); btn.setAttribute("aria-pressed", String(on)); btn.textContent = on ? "✓ Completed (tap to undo)" : (c.kanaVideos ? "Mark practice as complete" : "Mark lesson as complete"); };
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
  p.textContent = `${done.length} of ${c.lessons.length} ${c.kanaVideos ? "practice lessons" : "lessons"} complete.`;
  if (start) {
    if (nextL) { start.href = lessonPath(c, nextL); start.textContent = `Continue: ${c.kanaVideos ? "practice" : "lesson"} ${nextL.number}`; }
    else start.textContent = c.kanaVideos ? "Review practice 1" : "Review lesson 1";
  }
}

// ---- Practice sentences (Tiny 1000) ------------------------------------------------------------------
// Built in the browser from the lesson's own "Words in sentences" examples, so it works for free lessons and for premium lessons
// (which arrive from the server as ready-made HTML). Each sentence is rebuilt from tappable word tiles, then checked.
const readSentences = (root) => {
  const sec = [...root.querySelectorAll("section.block")].find((s) => /^words in sentences$/i.test((s.querySelector("h2")?.textContent || "").trim()));
  if (!sec) return [];
  return [...sec.querySelectorAll(".gitem")].map((g) => {
    const m = /^(.*?)\s*\(([^()]*)\)\s*(.*)$/s.exec((g.querySelector("p")?.textContent || "").trim());
    if (!m) return null;
    const tokens = [...g.querySelectorAll(".wbw-w")].map((w) => ({ ja: w.querySelector("b")?.textContent || "", ro: w.querySelector("i")?.textContent || "" })).filter((t) => t.ja);
    return { word: (g.querySelector("h3")?.textContent || "").trim(), ja: m[1].trim(), ro: m[2].trim(), en: m[3].trim(), tokens: tokens.length ? tokens : [{ ja: m[1].trim(), ro: m[2].trim() }] };
  }).filter((s) => s && s.ja && s.en);
};

export function wirePractice(root) {
  if (root.querySelector("#practice")) return;
  const items = readSentences(root);
  if (!items.length) return;
  const sec = document.createElement("section");
  sec.className = "block practice";
  sec.setAttribute("aria-labelledby", "pr-h");
  sec.innerHTML = `<h2 id="pr-h">Practice sentences</h2><p class="muted">Use the words you just learned. Rebuild each sentence in Japanese by tapping the words in order, then say it out loud.</p><div id="practice"></div>`;
  const anchor = root.querySelector(".done-box");
  if (anchor) anchor.parentNode.insertBefore(sec, anchor); else root.appendChild(sec);
  const box = sec.querySelector("#practice");
  const shuffle = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  let order, i, placed, bank, firstTry, state, fresh = true; // state: "build" | "ok" | "no" | "shown"
  const start = () => { order = shuffle(items); i = 0; firstTry = 0; load(); };
  const load = () => { const s = order[i]; placed = []; bank = shuffle(s.tokens.map((_, k) => k)); if (bank.length > 1 && bank.every((k, n) => k === n)) bank = bank.reverse(); state = "build"; fresh = true; draw(); };
  const tile = (s, k, where) => `<button type="button" class="pr-tile" data-${where}="${k}" lang="ja"${state === "ok" || state === "shown" ? " disabled" : ""}><span class="pj">${esc(s.tokens[k].ja)}</span><span class="pt-ro">${esc(s.tokens[k].ro)}</span></button>`;
  const solved = (s) => placed.length === s.tokens.length && placed.every((k, n) => s.tokens[k].ja === s.tokens[n].ja);
  const sentence = (s) => `<p class="pja" lang="ja">${esc(s.ja)}</p><p class="pro">${esc(s.ro)}</p><p class="pen">${esc(s.en)}</p>`;
  const draw = () => {
    const s = order[i], n = order.length, done = state === "ok" || state === "shown";
    const left = bank.filter((k) => !placed.includes(k));
    box.innerHTML = `<p class="pr-count">Sentence ${i + 1} of ${n}</p><div class="pr-bar" aria-hidden="true"><span style="width:${(i / n) * 100}%"></span></div>
${s.word ? `<p class="pr-word">Word: <b lang="ja">${esc(s.word)}</b></p>` : ""}<p class="pr-prompt">Say it in Japanese: <strong>“${esc(s.en)}”</strong></p>
<div class="pr-answer${done ? " ok" : state === "no" ? " no" : ""}" aria-live="polite">${placed.map((k) => tile(s, k, "p")).join("")}</div>
${done ? "" : `<div class="pr-bank" aria-label="Word tiles">${left.map((k) => tile(s, k, "b")).join("")}</div>`}
<div class="pr-actions">${done ? `<button type="button" class="btn" data-a="next">${i + 1 < n ? "Next sentence →" : "See my result"}</button>` : `<button type="button" class="btn ghost" data-a="undo"${placed.length ? "" : " disabled"}>Undo</button><button type="button" class="btn ghost" data-a="show">Show answer</button>`}</div>
<div class="pr-fb${state === "build" ? "" : " show " + (state === "no" ? "no" : "ok")}" role="status" aria-live="polite">${
      state === "ok" ? `<strong>Correct!</strong> Now say it out loud.${sentence(s)}`
      : state === "shown" ? `<strong>Here it is.</strong> Read it, then say it out loud.${sentence(s)}`
      : state === "no" ? "Not quite. Tap a word in your sentence to take it back, or press Undo." : ""}</div>`;
  };
  const finish = () => {
    box.innerHTML = `<div class="pr-result"><p class="big">${firstTry} / ${order.length}</p><p><strong>${firstTry === order.length ? "Perfect! Every sentence on the first try." : "sentences built correctly on the first try."}</strong></p><p class="muted">Say each sentence out loud once more. Speaking it helps the words stick.</p><div class="pr-actions"><button type="button" class="btn" data-a="again">Practise again</button></div></div>`;
  };
  box.addEventListener("click", (e) => {
    const s = order[i];
    const b = e.target.closest("[data-b]"), p = e.target.closest("[data-p]"), a = e.target.closest("[data-a]");
    if (b && state !== "ok" && state !== "shown") {
      placed.push(+b.dataset.b); state = "build";
      if (placed.length === s.tokens.length) { if (solved(s)) { state = "ok"; if (fresh) firstTry++; } else { state = "no"; fresh = false; } }
      draw();
    } else if (p && (state === "build" || state === "no")) { placed.splice(placed.indexOf(+p.dataset.p), 1); state = "build"; draw(); }
    else if (a) {
      const act = a.dataset.a;
      if (act === "undo") { placed.pop(); state = "build"; draw(); }
      else if (act === "show") { placed = s.tokens.map((_, k) => k); state = "shown"; fresh = false; draw(); }
      else if (act === "next") { if (i + 1 < order.length) { i++; load(); } else finish(); }
      else if (act === "again") { start(); sec.scrollIntoView({ behavior: "smooth", block: "start" }); }
    }
  });
  start();
}
