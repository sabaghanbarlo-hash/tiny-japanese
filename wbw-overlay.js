// Word-by-word overlay for course lessons. data/wbw-ja.json maps "<data file>/<lesson id>" -> { "<dot path>": [[surface, romaji, meaning], ...] }.
// Paths look like blocks.1.lines.0.@ (dialogue line), blocks.2.items.3.@ (word row or point), blocks.0.steps.1.show.0.@ and blocks.0.steps.1.try.@ (teach steps); ".@" is the sentence object.
// A breakdown is used only if its pieces rebuild the sentence's `ja` exactly (spaces and 。、？！「」 ignored). Premium lessons whose content is not present are skipped.
export const FILE_COURSE = {
  "course-conversations": "first-conversations", "course-grammar": "grammar-starter", "course-hiragana": "hiragana-starter",
  "course-katakana": "katakana-starter", "course-kanji": "kanji-starter", "course-travel": "travel-japanese",
  "genki1-deep": "genki-1-grammar", "genki1-particles": "genki-1-grammar"
};
const norm = (s) => String(s || "").replace(/[\s。、？！「」,.?!]+/g, "");
export function applyWbwOverlay(courses, overlay) {
  const stat = { applied: 0, mismatched: 0, missing: 0, lessons: 0 };
  for (const [key, paths] of Object.entries(overlay || {})) {
    const [file, lessonId] = key.split("/");
    const course = courses.find((c) => c.id === FILE_COURSE[file]);
    const lesson = course?.lessons?.find((l) => l.id === lessonId);
    if (!lesson || !(lesson.blocks || []).length) { stat.missing += Object.keys(paths).length; continue; }
    stat.lessons++;
    for (const [p, w] of Object.entries(paths)) {
      const segs = p.split("."); segs.pop();
      let o = lesson; for (const s of segs) o = o?.[s];
      if (!o || typeof o.ja !== "string") { stat.missing++; continue; }
      if (!Array.isArray(w) || norm(w.map((t) => t[0]).join("")) !== norm(o.ja)) { stat.mismatched++; continue; }
      if (!o.words) { o.words = w; stat.applied++; }
    }
  }
  return stat;
}

// Free /learn/ lessons (data/lessons.js, instagram-lessons.js): data/wbw-lessons-ja.json maps "<file>/<lesson id>" -> { "dialogue.0.@": [...], "vocab.1.@": [...], "extra.0.items.2.@": [...] }.
export function applyLessonWbw(lessons, overlay) {
  const stat = { applied: 0, mismatched: 0, missing: 0, lessons: 0 };
  for (const [key, paths] of Object.entries(overlay || {})) {
    const lesson = lessons.find((l) => l.id === key.split("/")[1]);
    if (!lesson) { stat.missing += Object.keys(paths).length; continue; }
    stat.lessons++;
    for (const [p, w] of Object.entries(paths)) {
      const segs = p.split("."); segs.pop();
      let o = lesson; for (const s of segs) o = o?.[s];
      if (!o || typeof o.ja !== "string") { stat.missing++; continue; }
      if (!Array.isArray(w) || norm(w.map((t) => t[0]).join("")) !== norm(o.ja)) { stat.mismatched++; continue; }
      if (!o.words) { o.words = w; stat.applied++; }
    }
  }
  return stat;
}
