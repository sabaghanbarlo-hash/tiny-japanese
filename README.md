# Tiny Japanese

Free beginner Japanese lessons. Plain HTML/CSS/JS, no build step, no backend.

- `index.html` home, `lessons.html` library, `lesson.html?id=<lesson-id>` lesson pages (link to these from Reels).
- Add a lesson: copy an object in `data/lessons.js` (dialogue, vocab, grammar, quiz), give it the next number and a new id. Cards, navigation and quiz appear automatically.
- Instagram URL and contact email: `data/site.js`. Instagram links stay hidden while `instagramUrl` is empty.
- Styling: `theme.css` (brand), `styles.css` (shared), `lesson.css` (lessons and cards).
- Production URL: https://tiny-japanese.sabagh1.workers.dev/

## Courses

- `courses.html` lists the courses, `courses/<course>/index.html` is a course overview, `courses/<course>/NN-<lesson>.html` are the lessons. All are generated static pages.
- Content lives in `data/courses.js` (course list) and `data/course-*.js` (lessons). A lesson is a list of blocks (`text`, `kana`, `words`, `points`, `tips`, `dialogue`) plus a quiz. `data/quiz-tools.js` has helpers that build kana and vocabulary quizzes automatically.
- After editing any of them run `node build-lessons.mjs` and `node build-courses.mjs`, then commit the generated files.
- Lesson progress ("Mark lesson as complete") is saved in the visitor's own browser only. There are no accounts.
- **Selling a course:** set `price` and `buyUrl` (a checkout link from Gumroad, Payhip, Lemon Squeezy, etc.) on the course in `data/courses.js`; the course page then shows a Buy button instead of "Free while we launch". This site is static, so lessons cannot be locked behind a login by themselves. To charge for the lessons, either sell a downloadable version (PDF/workbook) through the checkout platform, or move the paid lessons behind a members-only service.
