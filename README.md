# Tiny Japanese

Free beginner Japanese lessons. Plain HTML/CSS/JS, no build step, no backend.

- `index.html` home, `lessons.html` library, `lesson.html?id=<lesson-id>` lesson pages (link to these from Reels).
- Add a lesson: copy an object in `data/lessons.js` (dialogue, vocab, grammar, quiz), give it the next number and a new id. Cards, navigation and quiz appear automatically.
- Instagram URL and contact email: `data/site.js`. Instagram links stay hidden while `instagramUrl` is empty.
- Styling: `theme.css` (brand), `styles.css` (shared), `lesson.css` (lessons and cards).
- Production URL: https://tiny-japanese.sabagh1.workers.dev/
