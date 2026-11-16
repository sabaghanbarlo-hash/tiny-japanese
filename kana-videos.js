import { VIDEO_BASE, CREDIT, GROUPS, SCRIPTS } from "./data/kana-videos.js";
const $ = (s, r = document) => r.querySelector(s);
const root = $("#kv-root");
const dlg = $("#kv-dialog"), vid = $("#kv-video"), title = $("#kv-title");
$("#kv-credit").textContent = CREDIT;

const count = (sc) => GROUPS.reduce((n, g) => n + sc[g.id].length, 0);
const ids = Object.keys(SCRIPTS);

root.innerHTML = `<div class="kv-tabs" role="tablist" aria-label="Choose a script">${ids.map((id) =>
  `<button type="button" role="tab" id="tab-${id}" aria-controls="panel-${id}" data-tab="${id}">${SCRIPTS[id].title} <small>${count(SCRIPTS[id])} videos</small></button>`).join("")}</div>
${ids.map((id) => `<div role="tabpanel" id="panel-${id}" aria-labelledby="tab-${id}" hidden>${GROUPS.map((g, gi) =>
  `<details class="kv-group"${gi === 0 ? " open" : ""}><summary><strong>${g.title}</strong> <span>${SCRIPTS[id][g.id].length} videos</span></summary><p class="muted">${g.note}</p>
<div class="kv-grid">${SCRIPTS[id][g.id].map((e, i) =>
  `<button type="button" class="kv-card" data-script="${id}" data-group="${g.id}" data-i="${i}" aria-label="Play ${SCRIPTS[id].title} ${e[1]} (${e[2]})"><span class="kv-kana" lang="ja">${e[1]}</span><span class="kv-rom">${e[2]}</span></button>`).join("")}</div></details>`).join("")}</div>`).join("")}`;

let list = [], at = 0;
const urlOf = (script, key, ext) => `${VIDEO_BASE}${SCRIPTS[script].prefix}-${key}.${ext}`;

function play(i) {
  at = (i + list.length) % list.length;
  const { script, e } = list[at];
  title.textContent = `${SCRIPTS[script].title} ${e[1]} (${e[2]})`;
  vid.poster = urlOf(script, e[0], "thumbnail.png");
  vid.src = urlOf(script, e[0], "mp4");
  vid.play().catch(() => {});
}
function open(script, group, i) {
  list = SCRIPTS[script][group].map((e) => ({ script, e }));
  if (!dlg.open) { if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", ""); }
  play(i);
}
function close() { vid.pause(); vid.removeAttribute("src"); vid.load(); if (dlg.open) dlg.close ? dlg.close() : dlg.removeAttribute("open"); }

root.addEventListener("click", (ev) => {
  const t = ev.target.closest("[data-tab]");
  if (t) return show(t.dataset.tab);
  const c = ev.target.closest(".kv-card");
  if (c) open(c.dataset.script, c.dataset.group, Number(c.dataset.i));
});
$("#kv-close").addEventListener("click", close);
dlg.addEventListener("close", () => { vid.pause(); vid.removeAttribute("src"); });
dlg.addEventListener("click", (ev) => { if (ev.target === dlg) close(); });
$("#kv-prev").addEventListener("click", () => play(at - 1));
$("#kv-next").addEventListener("click", () => play(at + 1));
vid.addEventListener("ended", () => { if (at < list.length - 1) play(at + 1); });
document.addEventListener("keydown", (ev) => {
  if (!dlg.open) return;
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
