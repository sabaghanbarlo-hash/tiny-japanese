import { VIDEO_BASE, CREDIT, GROUPS, SCRIPTS, COURSE_OF, FREE } from "./data/kana-videos.js";
import { courses } from "./data/courses.js";
import { PREMIUM } from "./data/premium-config.js";
import { createPremium, lockPanelHTML } from "./premium-core.js";

const $ = (s, r = document) => r.querySelector(s);
const root = $("#kv-root");
const dlg = $("#kv-dialog"), vid = $("#kv-video"), title = $("#kv-title"), lockEl = $("#kv-lock");
$("#kv-credit").textContent = CREDIT;
const pm = createPremium(PREMIUM);

const ids = Object.keys(SCRIPTS);
const isFree = (script, key) => FREE[script].includes(key);
const courseOf = (script) => courses.find((c) => c.id === COURSE_OF[script]);
const count = (sc) => GROUPS.reduce((n, g) => n + sc[g.id].length, 0);
const freeCount = (script, list) => list.filter((e) => isFree(script, e[0])).length;

root.innerHTML = `<p class="kv-legend">🔒 = premium video. Unlock it with your access code (the same code that opens the course).</p>
<div class="kv-tabs" role="tablist" aria-label="Choose a script">${ids.map((id) =>
  `<button type="button" role="tab" id="tab-${id}" aria-controls="panel-${id}" data-tab="${id}">${SCRIPTS[id].title} <small>${count(SCRIPTS[id])} videos</small></button>`).join("")}</div>
${ids.map((id) => `<div role="tabpanel" id="panel-${id}" aria-labelledby="tab-${id}" hidden>${GROUPS.map((g, gi) =>
  `<details class="kv-group"${gi === 0 ? " open" : ""}><summary><strong>${g.title}</strong> <span>${SCRIPTS[id][g.id].length} videos · ${freeCount(id, SCRIPTS[id][g.id])} free</span></summary><p class="muted">${g.note}</p>
<div class="kv-grid">${SCRIPTS[id][g.id].map((e, i) => {
  const free = isFree(id, e[0]);
  return `<button type="button" class="kv-card" data-script="${id}" data-group="${g.id}" data-i="${i}" aria-label="Play ${SCRIPTS[id].title} ${e[1]} (${e[2]})${free ? "" : ", premium"}"><span class="kv-kana" lang="ja">${e[1]}</span><span class="kv-rom">${e[2]}</span>${free ? "" : '<span class="kv-lock-badge" aria-hidden="true">🔒</span>'}</button>`;
}).join("")}</div></details>`).join("")}</div>`).join("")}`;

let list = [], at = 0, token = 0;
const urlOf = (script, key, ext) => `${VIDEO_BASE}${SCRIPTS[script].prefix}-${key}.${ext}`;

function showVideo(src, poster) {
  lockEl.hidden = true; lockEl.innerHTML = "";
  vid.hidden = false;
  if (poster) vid.poster = poster; else vid.removeAttribute("poster");
  vid.src = src;
  vid.play().catch(() => {});
}
function clearVideo() { vid.pause(); vid.removeAttribute("src"); vid.removeAttribute("poster"); vid.load(); }

async function play(i) {
  at = (i + list.length) % list.length;
  const my = ++token;
  const { script, e } = list[at], [key, kana, rom] = e;
  title.textContent = `${SCRIPTS[script].title} ${kana} (${rom})`;
  if (isFree(script, key)) return showVideo(urlOf(script, key, "mp4"), urlOf(script, key, "thumbnail.png"));

  // Premium: ask the server for a signed link. It only answers after a valid access code for this course.
  clearVideo(); vid.hidden = true; lockEl.hidden = true; lockEl.innerHTML = "";
  const c = courseOf(script), lessonId = `kana-${SCRIPTS[script].prefix}-${key}`;
  const open = async (code) => {
    const r = await pm.lesson(c.id, lessonId, code);
    if (r.ok && !(r.media && r.media.video)) return { ...r, ok: false, error: "not_found" };
    if (r.ok && my === token) showVideo(r.media.video, r.media.poster);
    return r;
  };
  const hit = await pm.tryStored((code) => open(code));
  if (my !== token || hit) return;
  lockEl.innerHTML = lockPanelHTML({ course: c.id, courseTitle: c.title, price: c.price, payUrl: c.payUrl || PREMIUM.payUrl, site: PREMIUM.site,
    heading: "This video is part of the premium course",
    intro: `${SCRIPTS[script].title} ${kana} (${rom}) is in the paid part of ${c.title}. The free lessons stay free.` });
  lockEl.hidden = false;
  pm.wireLock(lockEl, { courseTitle: c.title, onUnlock: async (code) => {
    const r = await open(code);
    if (!r.ok) { const m = lockEl.querySelector("[data-unlock] [data-msg]"); if (m) { m.textContent = pm.explain(r, c.title); m.className = "pm-msg no"; } }
  } });
}
function open(script, group, i) {
  list = SCRIPTS[script][group].map((e) => ({ script, e }));
  if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", ""); }
  play(i);
}
function close() { token++; clearVideo(); lockEl.hidden = true; lockEl.innerHTML = ""; if (dlg.open) dlg.close ? dlg.close() : dlg.removeAttribute("open"); }

root.addEventListener("click", (ev) => {
  const t = ev.target.closest("[data-tab]");
  if (t) return show(t.dataset.tab);
  const c = ev.target.closest(".kv-card");
  if (c) open(c.dataset.script, c.dataset.group, Number(c.dataset.i));
});
$("#kv-close").addEventListener("click", close);
dlg.addEventListener("close", () => { token++; clearVideo(); });
dlg.addEventListener("click", (ev) => { if (ev.target === dlg) close(); });
$("#kv-prev").addEventListener("click", () => play(at - 1));
$("#kv-next").addEventListener("click", () => play(at + 1));
vid.addEventListener("ended", () => { if (at < list.length - 1) play(at + 1); });
document.addEventListener("keydown", (ev) => {
  if (!dlg.open || /^(INPUT|TEXTAREA)$/.test(ev.target.tagName)) return;
  if (ev.key === "ArrowLeft") play(at - 1);
  if (ev.key === "ArrowRight") play(at + 1);
});

function show(id, push = true) {
  if (!SCRIPTS[id]) id = ids[0];
  ids.forEach((s) => {
    const on = s === id;
    $(`#tab-${s}`).setAttribute("aria-selected", String(on));
    $(`#panel-${s}`).hidden = !on;
  });
  if (push) history.replaceState(null, "", `#${id}`);
}
show(location.hash.slice(1), false);
window.addEventListener("hashchange", () => show(location.hash.slice(1), false));
