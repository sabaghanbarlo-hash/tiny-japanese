// Uploads the premium lessons (number > freeLessons) of the kana video courses, and their videos, to the server.
// Needs build/full/courses.json (made by tools/gen-kana-video-courses.mjs).
// usage: ADMIN_SECRET=... node tools/upload-kana-video-premium.mjs        (DRY=1 to only list what would be sent)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const API = "https://pwenjqeclxxpfryxygzb.supabase.co/functions/v1/premium", SITE = "tiny-japanese";
const RAW = process.env.KANA_RAW || "https://raw.githubusercontent.com/sabaghanbarlo-hash/tiny-japanese-youtube/kana-lessons";
const SECRET = process.env.ADMIN_SECRET, DRY = !!process.env.DRY;
if (!SECRET && !DRY) throw new Error("ADMIN_SECRET is not set");

const { lessonBody } = await import(pathToFileURL(path.join(root, "course-view.js")).href);
const courses = JSON.parse(fs.readFileSync(path.join(root, "build", "full", "courses.json"), "utf8"));
const pad = (n) => String(n).padStart(2, "0");

const post = async (b) => {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(API, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ secret: SECRET, ...b }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok) return j;
      if (i === 2) throw new Error(r.status + " " + JSON.stringify(j));
    } catch (e) { if (i === 2) throw e; }
    await new Promise((r) => setTimeout(r, 800));
  }
};

let n = 0;
for (const c of courses) {
  const free = c.freeLessons ?? 3;
  for (const l of c.lessons.filter((x) => x.number > free)) {
    const stem = `${pad(l.number)}-${l.id}`;
    const video = `${SITE}/${c.id}/${stem}.mp4`;
    if (DRY) { console.log("would send", c.id, stem); n++; continue; }
    await post({ action: "admin_import_object", from_url: `${RAW}/docs/videos/${l.id}.mp4`, path: video, content_type: "video/mp4" });
    await post({
      action: "admin_put_lesson", site: SITE, course_id: c.id, lesson_id: l.id,
      payload: { html: lessonBody(c, l, { premium: true }), quiz: l.quiz },
      media: { video }
    });
    n++; console.log("ok", c.id, stem);
  }
}
console.log("DONE", n, "lessons");
