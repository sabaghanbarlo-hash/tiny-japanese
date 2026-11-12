// How each course card looks on the courses page (courses.html). The course facts (title, level, lesson count, topic, tagline)
// still come from data/courses.js; this file only controls the look and the short checklist on each card.
//   variant: "a" = centred card with a pill on the picture, "b" = left-aligned card with the sheet floating over the picture
//   pill:    "hot" (pink) or "soft" (white) badge on the picture (variant a)
//   chip:    "pink" or "lav" colour of the topic chip      btn: "pink" or "lav" colour of the button
//   glyph:   big character shown while the picture (assets/courses/<course id>.webp) is missing
//   bullets: checklist lines (HTML allowed); when left out, the first two course outcomes are used
export const catalog = {
  "hiragana-starter": { variant: "a", pill: "hot", chip: "pink", btn: "pink", glyph: "あ",
    bullets: ["Read and say all 46 basic hiragana", "Use dakuten and handakuten", "Read 25 more sounds"] },
  "katakana-starter": { variant: "a", pill: "soft", chip: "lav", btn: "lav", glyph: "カ",
    bullets: ["Read and say all 46 basic katakana", "Read voiced sounds", "Learn the long vowel mark ー"] },
  "first-conversations": { variant: "a", pill: "soft", chip: "pink", btn: "pink", glyph: "話", extras: true,
    bullets: ["Greet people, introduce yourself", "Keep a short conversation going", "Order food, shop and ask for help"] },
  "grammar-starter": { variant: "a", pill: "soft", chip: "lav", btn: "lav", glyph: "文",
    bullets: ["Make and understand simple “A is B”", "Use particles の, も, と, を, に, で and へ correctly"] },
  "genki-1-grammar": { variant: "b", chip: "lav", btn: "pink", glyph: "文法" },
  "genki-1": { variant: "b", chip: "lav", btn: "pink", glyph: "元気" },
  "kanji-starter": { variant: "b", chip: "lav", btn: "pink", glyph: "日本",
    bullets: ["Read the kanji for numbers, prices, years and the days of the week", "Read people, school and nature words such as <b>先生</b>, <b>学生</b>, <b>山</b> and <b>天気</b>"] },
  "travel-japanese": { variant: "b", chip: "lav", btn: "pink", glyph: "旅" },
  "tiny-1000": { variant: "b", chip: "lav", btn: "pink", glyph: "千" }
};
export const catalogDefault = { variant: "b", pill: "soft", chip: "lav", btn: "lav", glyph: "日" };
