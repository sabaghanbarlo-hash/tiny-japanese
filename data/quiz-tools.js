// Small helpers for writing course content. Quizzes made here are deterministic (seeded by the lesson id),
// so the static HTML written by build-courses.mjs and the quiz the browser draws always agree.

const hash = (s) => { let h = 2166136261; for (const c of String(s)) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };
const mulberry32 = (a) => () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
export const rng = (seed) => mulberry32(hash(seed));
export const shuffle = (arr, rand) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// "あ a|い i|-|う u" -> [{k:"あ", r:"a"}, {k:"", r:""}, ...]   ("-" is an empty cell in a chart)
export const kana = (s) => s.split("|").map((t) => { const [k, r] = t.trim().split(/\s+/); return k === "-" ? { k: "", r: "" } : { k, r }; });

// Builds a multiple-choice question; `options` must already contain the right answer exactly once.
const mc = (q, answer, wrongs, rand, explain) => {
  const opts = shuffle([answer, ...wrongs], rand);
  return { q, options: opts, answer: opts.indexOf(answer), explain };
};
const uniq = (arr) => [...new Set(arr)];

// Quiz pieces for a list of kana ({k, r}). Characters with a duplicate sound (ぢ, づ) are left out on purpose.
const skip = new Set(["ぢ", "づ"]);
export function kanaQuiz(seed, chars, { read = 3, find = 2 } = {}) {
  const rand = rng(seed + ":kana");
  const pool = chars.filter((c) => c.k && !skip.has(c.k));
  const out = [];
  const picks = shuffle(pool, rand);
  picks.slice(0, read).forEach((c) => {
    const wrong = shuffle(uniq(pool.filter((x) => x.r !== c.r).map((x) => x.r)), rand).slice(0, 2);
    out.push(mc(`How do you read ${c.k}?`, c.r, wrong, rand, `${c.k} is read “${c.r}”.`));
  });
  picks.slice(read, read + find).forEach((c) => {
    const wrong = shuffle(pool.filter((x) => x.r !== c.r).map((x) => x.k), rand).slice(0, 2);
    out.push(mc(`Which character is “${c.r}”?`, c.k, wrong, rand, `“${c.r}” is written ${c.k}.`));
  });
  return out;
}

// Quiz pieces for words ({ja, romaji, en}).
export function wordQuiz(seed, words, { meaning = 2, reading = 1 } = {}) {
  const rand = rng(seed + ":words");
  const out = [];
  const w = shuffle(words, rand);
  w.slice(0, meaning).forEach((x) => {
    const wrong = shuffle(words.filter((y) => y.en !== x.en).map((y) => y.en), rand).slice(0, 2);
    out.push(mc(`What does ${x.ja} mean?`, x.en, wrong, rand, `${x.ja} (${x.romaji}) means “${x.en}”.`));
  });
  w.slice(meaning, meaning + reading).forEach((x) => {
    const wrong = shuffle(words.filter((y) => y.romaji !== x.romaji).map((y) => y.romaji), rand).slice(0, 2);
    out.push(mc(`How do you read ${x.ja}?`, x.romaji, wrong, rand, `${x.ja} is read “${x.romaji}” and means “${x.en}”.`));
  });
  return out;
}

// Hand-written question: the first option is the right one, the order is shuffled for you.
export function ask(seed, q, right, wrongs, explain) {
  return mc(q, right, wrongs, rng(seed + ":" + q), explain);
}
