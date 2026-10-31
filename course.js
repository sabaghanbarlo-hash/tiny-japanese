// Adds interactivity to the pre-rendered pages in /courses/: quiz, romaji/English toggles, saved progress.
// Premium lessons arrive from the server only after a valid access code is checked.
import { courses } from "./data/courses.js";
import { PREMIUM } from "./data/premium-config.js";
import { createPremium } from "./premium-core.js";
import "./app.js";
import { wireLesson, wireOverview, wireAudio } from "./course-view.js";

const root = document.getElementById("course-root");
const course = root && courses.find((c) => c.id === root.dataset.course);
const pm = createPremium(PREMIUM);

async function showPremiumLesson(slot, course, lesson, code) {
  const r = await pm.lesson(course.id, lesson.id, code);
  if (!r.ok) return r;
  slot.innerHTML = r.payload.html;
  const v = slot.querySelector("video[data-premium-video]");
  if (v) { if (r.media.poster) v.poster = r.media.poster; if (r.media.video) v.src = r.media.video; }
  wireLesson(root, course, { ...lesson, quiz: r.payload.quiz });
  wireAudio(root);
  return r;
}

if (course) {
  const lesson = course.lessons.find((l) => l.id === root.dataset.lesson);
  if (lesson && lesson.premium) {
    const slot = root.querySelector("#premium-slot");
    pm.wireLock(slot, { courseTitle: course.title, onUnlock: async (code) => { const r = await showPremiumLesson(slot, course, lesson, code); if (!r.ok) slot.querySelector("[data-unlock] [data-msg]").textContent = pm.explain(r, course.title); } });
    await pm.tryStored((code) => showPremiumLesson(slot, course, lesson, code));
  } else if (lesson) { wireLesson(root, course, lesson); wireAudio(root); }
  else {
    wireOverview(root, course);
    if (course.premium) {
      const unlocked = (code, r) => {
        root.querySelector("[data-pm-panel]")?.setAttribute("hidden", "");
        root.querySelector("[data-pm-unlocked]")?.removeAttribute("hidden");
        root.querySelectorAll(".syllabus .pm-lock-tag").forEach((t) => t.remove());
        const b = root.querySelector("#pdf-btn");
        if (b && r.media?.pdf) { b.href = r.media.pdf; b.hidden = false; }
      };
      const panel = root.querySelector("[data-pm-panel]");
      if (panel) pm.wireLock(panel, { courseTitle: course.title, onUnlock: unlocked });
      const hit = await pm.tryStored((code) => pm.courseAccess(course.id, code));
      if (hit) unlocked(hit.code, hit.r);
    }
  }
}
