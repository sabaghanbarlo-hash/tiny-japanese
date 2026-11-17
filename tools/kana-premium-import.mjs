// Imports the PREMIUM kana videos (every character that is not in FREE) into the private storage and registers each one
// as a small premium "lesson" (kana-<prefix>-<key>) of its course, so the normal access-code check unlocks it.
// Safe to run again: each step overwrites the same paths. Usage: ADMIN_SECRET=... [ONLY="hira-ma kata-ma"] node tools/kana-premium-import.mjs
import { SCRIPTS, GROUPS, FREE, COURSE_OF } from "../data/kana-videos.js";
const API = "https://pwenjqeclxxpfryxygzb.supabase.co/functions/v1/premium", SITE = "tiny-japanese", SECRET = process.env.ADMIN_SECRET;
if (!SECRET) throw new Error("ADMIN_SECRET is not set");
// The server only imports from raw.githubusercontent.com (same as export-premium.mjs), so read the files from the raw GitHub URL.
const RAW_BASE = process.env.RAW_BASE || "https://raw.githubusercontent.com/sabaghanbarlo-hash/tiny-kana-videos/main/videos/";
const only = process.env.ONLY ? process.env.ONLY.split(" ").filter(Boolean) : null;
const post = async (b) => {
  for (let i = 0; i < 3; i++) {
    try {
      const r = await fetch(API, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ secret: SECRET, ...b }) });
      const j = await r.json().catch(() => ({}));
      if (r.ok) return j;
      if (i === 2) throw new Error(r.status + " " + JSON.stringify(j).slice(0, 200));
    } catch (e) { if (i === 2) throw e; }
    await new Promise((r) => setTimeout(r, 1500));
  }
};
let ok = 0; const fail = [];
for (const script of Object.keys(SCRIPTS)) {
  const sc = SCRIPTS[script], course = COURSE_OF[script];
  for (const g of GROUPS) for (const [key, kana] of sc[g.id]) {
    if (FREE[script].includes(key)) continue;
    const stem = `${sc.prefix}-${key}`;
    if (only && !only.includes(stem)) continue;
    const video = `${SITE}/${course}/kana/${stem}.mp4`, poster = `${SITE}/${course}/kana/${stem}.png`;
    try {
      await post({ action: "admin_import_object", from_url: `${RAW_BASE}${stem}.mp4`, path: video, content_type: "video/mp4" });
      await post({ action: "admin_import_object", from_url: `${RAW_BASE}${stem}.thumbnail.png`, path: poster, content_type: "image/png" });
      await post({ action: "admin_put_lesson", site: SITE, course_id: course, lesson_id: `kana-${stem}`, payload: { html: `<p lang="ja">${kana}</p>`, quiz: [] }, media: { video, poster } });
      ok++; console.log("ok", stem);
    } catch (e) { fail.push(stem); console.log("FAILED", stem, String(e.message).slice(0, 200)); }
  }
}
console.log("DONE", ok, "imported;", fail.length, "failed", fail.join(" "));
if (fail.length) process.exit(1);
