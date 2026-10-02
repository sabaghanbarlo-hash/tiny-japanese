import { stories, characters } from "./data/stories.js";
const $ = (s, r = document) => r.querySelector(s);

// Character illustration (used only in the Instagram series strip)
const avatar = (c) => `<svg viewBox="0 0 120 140" role="img" aria-label="Illustration of ${c.name}, a character from the Tiny Stories series">
<path d="M16 140c0-32 20-44 44-44s44 12 44 44z" fill="${c.top}"/><circle cx="60" cy="62" r="34" fill="#fbe3d0"/>
<path d="M25 64c-2-30 14-44 35-44s37 14 35 44c-7-16-21-24-35-24S32 48 25 64z" fill="${c.hair}"/>${c.bun ? `<circle cx="60" cy="15" r="11" fill="${c.hair}"/>` : ""}
<circle cx="47" cy="68" r="3.2" fill="#2d2a2e"/><circle cx="73" cy="68" r="3.2" fill="#2d2a2e"/>
<ellipse cx="40" cy="77" rx="6" ry="3.5" fill="#f4a6b4" opacity=".6"/><ellipse cx="80" cy="77" rx="6" ry="3.5" fill="#f4a6b4" opacity=".6"/>
<path d="M53 79q7 7 14 0" stroke="#2d2a2e" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`;

$("#ig-chars").innerHTML = characters.map(avatar).join("");

// Free-content story cards
$("#story-list").innerHTML = stories.map((s, i) => `<article class="card story">
 <div class="thumb"><span lang="ja">${s.phrase}</span><span class="play" aria-hidden="true"></span></div>
 <div class="sbody"><div class="badges"><span>${s.difficulty}</span><span>${s.category}</span></div>
 <h3>${s.title}</h3><p lang="ja" style="font-weight:700">${s.phrase}</p><p>${s.description}</p>
 <button class="btn" data-i="${i}" aria-label="Watch story: ${s.title}">Watch story</button></div></article>`).join("");

// Instagram series quick links
$("#ig-stories").innerHTML = stories.map((s, i) => `<li><button data-i="${i}">${s.title}</button></li>`).join("");

// Video component: mp4/webm, YouTube, Instagram, or placeholder
function player(u, t) {
 if (!u) return `<div class="vid"><p>The video for “${t}” will play here.</p></div>`;
 const y = u.match(/(?:youtu\.be\/|v=|shorts\/)([\w-]{11})/);
 const inner = /\.(mp4|webm)(\?|$)/.test(u) ? `<video controls playsinline preload="none" src="${u}"></video>`
  : y ? `<iframe src="https://www.youtube-nocookie.com/embed/${y[1]}" title="${t}" allowfullscreen loading="lazy"></iframe>`
  : `<iframe src="${u.replace(/\/?(\?.*)?$/, "/")}embed" title="${t}" loading="lazy"></iframe>`;
 return `<div class="vid">${inner}</div>`;
}

// Story detail component
const dlg = $("#story-dialog"), body = $("#story-body");
function openStory(s) {
 body.innerHTML = `<button class="close" aria-label="Close">✕</button><h2 id="sd-title">${s.title}</h2>${player(s.videoUrl, s.title)}
 <ul class="dlg">${s.dialogue.map((d) => `<li><small>${d.who}</small><div class="ja" lang="ja">${d.ja}</div><em>${d.romaji}</em><div>${d.en}</div></li>`).join("")}</ul>
 <div class="today"><h3>Today's Japanese</h3><p class="ja" lang="ja">${s.phrase}</p><p><em>${s.romaji}</em></p><p>“${s.translation}”</p>
 <ul>${s.breakdown.map((b) => `<li lang="ja">${b}</li>`).join("")}</ul></div>`;
 $(".close", body).onclick = () => dlg.close();
 dlg.showModal();
}
document.addEventListener("click", (e) => { const b = e.target.closest("[data-i]"); if (b) openStory(stories[b.dataset.i]); });
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener("close", () => (body.innerHTML = ""));

// Mobile menu
const burger = $(".burger"), menu = $("#menu");
burger.onclick = () => { const o = burger.getAttribute("aria-expanded") === "true"; burger.setAttribute("aria-expanded", !o); menu.classList.toggle("open", !o); };
menu.addEventListener("click", (e) => { if (e.target.closest("a")) { burger.setAttribute("aria-expanded", false); menu.classList.remove("open"); } });

// Fade-in on scroll
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
