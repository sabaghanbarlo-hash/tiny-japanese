// All courses. To add a course: write its lessons in a data/course-*.js file, then add an entry here and run `node build-courses.mjs`.
//
// Premium courses: `premium: true` + `price`. Lessons 1-3 (PREMIUM.freeLessons in data/premium-config.js) are free; the rest are stored on the server and need an access code.
// Payment goes through the link in data/premium-config.js; add `payUrl` to a course if it needs its own link (e.g. a fixed-amount link).
import { hiraganaLessons } from "./course-hiragana.js";
import { katakanaLessons } from "./course-katakana.js";
import { conversationLessons } from "./course-conversations.js";

export const courses = [
  {
    id: "hiragana-starter",
    videoCredit: "Stroke order animation uses KanjiVG data (CC BY-SA 3.0, kanjivg.tagaini.net). Voices: VOICEVOX:春日部つむぎ, VOICEVOX:玄野武宏.",
    title: "Hiragana Starter",
    tagline: "Read every hiragana character in 11 short lessons.",
    level: "Absolute beginner",
    topic: "Reading & writing",
    description: "A step-by-step path through all 46 basic hiragana, plus the sound marks, combined sounds, small っ and long vowels. Every lesson has a chart, real words to read, tips and a quiz.",
    outcomes: [
      "Read and say all 46 basic hiragana",
      "Use dakuten and handakuten (two tiny marks) to read 25 more sounds",
      "Read combined sounds (きゃ, しゅ, ちょ), small っ and long vowels",
      "Read real words, place names and full sentences in hiragana"
    ],
    audience: "Complete beginners. No Japanese needed.",
    premium: true, price: "$9", buyUrl: "",
    lessons: hiraganaLessons
  },
  {
    id: "katakana-starter",
    videoCredit: "Stroke order animation uses KanjiVG data (CC BY-SA 3.0, kanjivg.tagaini.net). Voices: VOICEVOX:春日部つむぎ, VOICEVOX:玄野武宏.",
    title: "Katakana Starter",
    tagline: "Read every katakana character in 11 short lessons.",
    level: "Beginner",
    topic: "Reading & writing",
    description: "The second Japanese script, built on the sounds you already know from hiragana. Learn all 46 basic characters, the sound marks, combined sounds, small ッ and the extra sounds for foreign words, then practise on menus, countries, names and real sentences.",
    outcomes: [
      "Read and say all 46 basic katakana",
      "Read voiced sounds, combined sounds, small ッ and the long vowel mark ー",
      "Read the extra sounds used for foreign words (ティ, ファ, チェ)",
      "Read menus, country names, places and your own name in katakana"
    ],
    audience: "Learners who can read hiragana (take Hiragana Starter first if not).",
    premium: true, price: "$9", buyUrl: "",
    lessons: katakanaLessons
  },
  {
    id: "first-conversations",
    videoCredit: "Voices: VOICEVOX:春日部つむぎ, VOICEVOX:玄野武宏.",
    title: "First Conversations",
    tagline: "Ten everyday situations, from greetings to asking for help.",
    level: "Beginner",
    topic: "Speaking & listening",
    description: "Ten dialogues with Mika and Alex that cover the situations you actually meet: greetings, introductions, numbers, ordering food, shopping, directions, time, likes, plans and asking for help. Each lesson has vocabulary, grammar, notes and a quiz.",
    outcomes: [
      "Greet people, introduce yourself and keep a short conversation going",
      "Order food, shop and ask how much things cost",
      "Ask for directions and understand the answer",
      "Tell the time, make plans and invite a friend",
      "Say when you don't understand and ask for help"
    ],
    audience: "Beginners who can read hiragana (take Hiragana Starter first if not).",
    premium: true, price: "$12", buyUrl: "",
    lessons: conversationLessons
  }
];
