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
- Regenerate after changing lesson content: `node video-tools/make-videos.mjs [course-id] [lesson]` and `node video-tools/make-pdfs.mjs [course-id]` (needs Node, Playwright with Chromium, ffmpeg, a Japanese font such as Noto Sans CJK JP, and the narration voices: run `video-tools/setup-tts.sh` once, about 130 MB). Then run `node build-courses.mjs` and commit.
- Kana stroke-order animation uses KanjiVG (c) Ulrich Apel, CC BY-SA 3.0, http://kanjivg.tagaini.net. `video-tools/strokes.json` is built from it with `video-tools/build-strokes.py`. Keep the credit line (set as `videoCredit` in `data/courses.js`) and share videos that use it under the same licence.
- **Selling:** the workbooks in `downloads/` are public files. When you start charging, move them out of the repo and deliver them through the checkout platform (Gumroad, Payhip, etc.) instead, and remove the `pdf` line for that course in `data/courses.js`.
- Narration is made offline by `video-tools/tts.py` with VOICEVOX (neural voices: Mika = 春日部つむぎ, Alex = 玄野武宏). Their terms require a credit wherever the audio is published: "VOICEVOX:春日部つむぎ, VOICEVOX:玄野武宏" (the `videoCredit` line of each course). Re-rendering videos: bump `ASSET_V` in `course-view.js` so browsers fetch the new files.
- **"Hear it" buttons:** kana charts, vocabulary and dialogue lines have tap-to-hear audio (`audio/*.mp3`, listed in `data/audio-map.js`). After changing any lesson text run, in this order: `node video-tools/make-audio.mjs`, `node build-courses.mjs`, then commit (including `audio/` and `data/audio-map.js`). Same voices and credits as the videos (the clip file names include the voice engine tag, so they change whenever the voices change).

## Premium courses (selling the courses)

Each course has free lessons (the first 3, `freeLessons` in `data/premium-config.js`) and premium lessons. A premium lesson's text, quiz, video and the PDF workbook are **not in this repo**: they live on the server (Supabase project `tiny-courses`, function `premium`, private storage bucket) and are sent only after a valid access code is checked. The public pages for premium lessons are locked shells (title and goal only).

**How a sale works** (the payment link has no webhook, so this step is manual):
1. The visitor presses "Buy this course" and pays through the link in `data/premium-config.js`.
2. They send their email and payment reference with the form under "I've paid".
3. Open `/admin.html`, sign in with the admin secret, check the payment arrived, press "Payment received: make code". Copy the ready-made message and send it to the buyer.
4. The buyer enters the code, and the course unlocks on that device (a code works on up to 3 devices; you can revoke it in the admin page).

**Prices** are in `data/courses.js` (`price`). If your payment link has a fixed amount, give each course its own link with `payUrl`.

**Adding or changing premium lessons.** The full lesson source is kept in the private repo `tiny-courses-source` (and in this repo's git history). To publish a change: edit the full source, run `node tools/split-premium.mjs <fullDataDir> data 3` to refresh the public stubs, run `node build-courses.mjs`, and upload the changed lessons with `tools/export-premium.mjs` (needs the admin secret, see the private repo). `video-tools/make-pdfs.mjs` and `make-videos.mjs` need the full source data, so run them from the private repo.

**Honest limits.** The premium lessons and files are gone from the live site and the repo, but this repo is public, so older commits still contain them. Anyone who shares a code can give access to others (limited to 3 devices per code). This is a good fit for a small shop; for large sales use a payment provider that sends automatic confirmations.
