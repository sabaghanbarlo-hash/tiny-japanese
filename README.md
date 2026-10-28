# Tiny Japanese

Free beginner Japanese lessons. Static HTML/CSS/JS, no runtime build or backend.

- `index.html` home, `lessons.html` library, `learn/<lesson-id>.html` stable lesson pages (link to these from Reels), `tiny-words.html` vocabulary library, and `resources.html` study-resource hub.
- Add a core lesson in `data/lessons.js`, or an Instagram story lesson in `data/instagram-lessons.js` (dialogue, vocab, grammar, quiz). Give it a unique id and lesson number; set `episode` for Instagram series numbering. Run `node build-lessons.mjs` to refresh cards and static pages. Topic filters use each lesson’s `category` (`everyday`, `travel`, or `emergency`).
- Tiny Words entries live in `data/words.js`. Only words with a completed record in the video repository publishing log are included. Run `node build-words.mjs` after editing the word data. The source carousel JSON should be checked before adding more words.
- Instagram URL and contact email: `data/site.js`. Instagram links stay hidden while `instagramUrl` is empty.
- Styling: `theme.css` (brand), `styles.css` (shared), `lesson.css` (lessons and cards).
- Production URL: https://tiny-japanese.sabagh1.workers.dev/

## Courses

- `courses.html` lists the courses, `courses/<course>/index.html` is a course overview, `courses/<course>/NN-<lesson>.html` are the lessons. All are generated static pages.
- Content lives in `data/courses.js` (course list) and `data/course-*.js` (lessons). A lesson is a list of blocks (`text`, `kana`, `words`, `points`, `tips`, `dialogue`) plus a quiz. `data/quiz-tools.js` has helpers that build kana and vocabulary quizzes automatically.
- After editing course data run `node build-courses.mjs`; after editing lesson data run `node build-lessons.mjs`; after editing Tiny Words data run `node build-words.mjs`. Commit generated static files alongside their source data.
- Lesson progress ("Mark lesson as complete") is saved in the visitor's own browser only. There are no accounts.
- **Selling a course:** set `price` and `buyUrl` (a checkout link from Gumroad, Payhip, Lemon Squeezy, etc.) on the course in `data/courses.js`; the course page then shows a Buy button instead of "Free while we launch". This site is static, so lessons cannot be locked behind a login by themselves. To charge for the lessons, either sell a downloadable version (PDF/workbook) through the checkout platform, or move the paid lessons behind a members-only service.

## Videos and workbooks

- Every course lesson has a short narrated video (Japanese voice, English on screen) (`videos/<course>/<NN-lesson>.mp4` plus a `.jpg` poster) shown at the top of the lesson page, and every course has a printable workbook PDF in `downloads/`. Both are generated from the course data, so they stay in sync with the lessons.
- Regenerate after changing lesson content: `node video-tools/make-videos.mjs [course-id] [lesson]` and `node video-tools/make-pdfs.mjs [course-id]` (needs Node, Playwright with Chromium, ffmpeg, a Japanese font such as Noto Sans CJK JP, and `pip install pyopenjtalk` for the narration; the first run downloads a dictionary). Then run `node build-courses.mjs` and commit.
- Kana stroke-order animation uses KanjiVG (c) Ulrich Apel, CC BY-SA 3.0, http://kanjivg.tagaini.net. `video-tools/strokes.json` is built from it with `video-tools/build-strokes.py`. Keep the credit line (set as `videoCredit` in `data/courses.js`) and share videos that use it under the same licence.
- **Selling:** the workbooks in `downloads/` are public files. When you start charging, move them out of the repo and deliver them through the checkout platform (Gumroad, Payhip, etc.) instead, and remove the `pdf` line for that course in `data/courses.js`.
- Narration is made offline by `video-tools/tts.py` (Open JTalk). Voices and their CC BY credits are in `video-tools/voices/README.md`; the credit line is the `videoCredit` of each course. Speech sounds a little synthetic; to upgrade it, swap `tts.py` for any better Japanese text-to-speech and keep the same clip files.
- **"Hear it" buttons:** kana charts, vocabulary and dialogue lines have tap-to-hear audio (`audio/*.mp3`, listed in `data/audio-map.js`). After changing any lesson text run, in this order: `node video-tools/make-audio.mjs`, `node build-courses.mjs`, then commit (including `audio/` and `data/audio-map.js`). Same voices and credits as the videos.
