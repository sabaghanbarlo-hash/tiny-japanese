// Shared lesson rendering. Used by lesson.js (browser, ?id= URLs) and build-lessons.mjs (static pages in /learn/).
export const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Quiz questions as plain HTML, shown only when JavaScript is off (the script replaces #quiz when it runs).
const staticQuiz = (l) => `<noscript><ol class="plain">${l.quiz.map((q) => `<li>${esc(q.q)}<ul class="plain">${q.options.map((o) => `<li lang="ja">${esc(o)}</li>`).join("")}</ul><details><summary>Show answer</summary><p>Answer: <span lang="ja">${esc(q.options[q.answer])}</span> — ${esc(q.explain)}</p></details></li>`).join("")}</ol></noscript>`;

const videoFiles = {
  "meeting-for-the-first-time": "lesson-01-meeting-for-the-first-time",
  "whats-your-name": "lesson-02-whats-your-name",
  "at-the-station": "lesson-03-at-the-station",
  "at-the-cafe": "lesson-04-at-the-cafe",
  "at-the-restaurant": "lesson-05-at-the-restaurant",
  "shopping": "lesson-06-shopping",
  "talking-about-family": "lesson-07-talking-about-family",
  "at-school": "lesson-08-at-school",
  "what-time-is-it": "lesson-09-what-time-is-it",
  "making-plans": "lesson-10-making-plans",
  "talking-about-hobbies": "lesson-11-talking-about-hobbies",
  "asking-for-directions": "lesson-12-asking-for-directions",
  "ordering-food": "lesson-13-ordering-food",
  "at-the-bookstore": "lesson-14-at-the-bookstore",
  "we-missed-the-train": "lesson-15-we-missed-the-train",
  "where-is-mika": "lesson-16-where-is-mika",
  "im-allergic-to": "lesson-17-im-allergic-to"
};

export function lessonHTML(l, prev, next, href) {
  const label = (x) => x.episode ? `Episode ${x.episode}` : `Lesson ${x.number}`;
  const videoName = videoFiles[l.id];
  const videoBlock = videoName ? `<section class="block lesson-video" aria-labelledby="video-h"><h2 id="video-h">Watch this lesson</h2><video controls playsinline preload="metadata" style="display:block;width:100%;max-width:760px;border-radius:16px;background:#f6f0e8" poster="https://raw.githubusercontent.com/sabaghanbarlo-hash/tiny-japanese-video/main/output/${videoName}.jpg"><source src="https://raw.githubusercontent.com/sabaghanbarlo-hash/tiny-japanese-video/main/output/${videoName}.mp4" type="video/mp4">Your browser does not support embedded video. <a href="https://raw.githubusercontent.com/sabaghanbarlo-hash/tiny-japanese-video/main/output/${videoName}.mp4">Watch the lesson video</a>.</video><p class="muted">Watch Mika and Alex act out the dialogue, then practise the phrases below.</p></section>` : "";
  const vocab = l.vocab.map((v) => `<li><span class="vja" lang="ja">${esc(v.ja)}${v.kana ? ` <small>(${esc(v.kana)})</small>` : ""}</span><span class="vro">${esc(v.romaji)}</span><span class="ven">${esc(v.en)}</span></li>`).join("");
  const extra = (l.extra || []).map((x) => `<section class="block optional" aria-labelledby="ex-h"><h2 id="ex-h">${esc(x.title)}</h2><p class="muted">Optional. These lines are not part of the video dialogue.</p><ul class="dialogue">${x.items.map((d) => `<li><div class="ja" lang="ja">${esc(d.ja)}</div><div class="ro">${esc(d.romaji)}</div><div class="en">${esc(d.en)}</div></li>`).join("")}</ul></section>`).join("");
  return `
<nav class="crumbs" aria-label="Breadcrumb"><a href="${href({ lessons: true })}">← All lessons</a></nav>
<header class="lesson-head"><p class="num">${label(l)} · ${esc(l.topic)}</p><h1 class="h1-md">${esc(l.title)}</h1>
<p class="lead"><strong>Goal:</strong> ${esc(l.objective)}</p><p class="lead">${esc(l.intro)}</p>${l.reviewStatus ? `<p class="review-note"><strong>Content status:</strong> ${esc(l.reviewStatus)}</p>` : ""}</header>

${videoBlock}\n\n<section class="block" aria-labelledby="dlg-h"><h2 id="dlg-h">Dialogue</h2>
<div class="toggles" role="group" aria-label="Show or hide help"><label><input type="checkbox" id="t-ro" checked> Romaji</label><label><input type="checkbox" id="t-en" checked> English</label></div>
<ul class="dialogue" id="dialogue">${l.dialogue.map((d) => `<li><span class="who">${esc(d.who)}</span><div class="ja" lang="ja">${esc(d.ja)}</div><div class="ro">${esc(d.romaji)}</div><div class="en">${esc(d.en)}</div></li>`).join("")}</ul>
<p class="muted">Tip: untick Romaji and English to test yourself, then tick them to check.</p></section>

<section class="block" aria-labelledby="voc-h"><h2 id="voc-h">Vocabulary</h2><ul class="vocab">${vocab}</ul></section>

<section class="block" aria-labelledby="gr-h"><h2 id="gr-h">Grammar</h2>${l.grammar.map((g) => `<div class="gitem"><h3>${esc(g.title)}</h3><p>${esc(g.body)}</p></div>`).join("")}</section>

${l.notes && l.notes.length ? `<section class="block" aria-labelledby="nt-h"><h2 id="nt-h">Notes</h2><ul class="notes">${[...(l.sourceNote ? [l.sourceNote] : []), ...l.notes].map((n) => `<li>${esc(n)}</li>`).join("")}</ul></section>` : ""}
${extra}

<section class="block" aria-labelledby="qz-h"><h2 id="qz-h">Quick quiz</h2><p class="muted">Tap an answer to see feedback straight away. Your score is only kept while this page is open.</p><div id="quiz">${staticQuiz(l)}</div></section>

<nav class="lesson-nav" aria-label="Lesson navigation">
 ${prev ? `<a class="btn ghost" href="${href(prev)}">← ${label(prev)}: ${esc(prev.title)}</a>` : "<span></span>"}
 <a class="btn ghost" href="${href({ lessons: true })}">All lessons</a>
 ${next ? `<a class="btn" href="${href(next)}">${label(next)}: ${esc(next.title)} →</a>` : "<span></span>"}
</nav>`;
}

// Makes an already-rendered lesson interactive: romaji/English toggles and the quiz.
export function wireLesson(root, l) {
  const $ = (s, r = root) => r.querySelector(s);
  const dialogue = $("#dialogue");
  const set = (box, cls) => dialogue.classList.toggle(cls, !box.checked);
  $("#t-ro").onchange = (e) => set(e.target, "hide-ro");
  $("#t-en").onchange = (e) => set(e.target, "hide-en");

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
