// All courses. To add a course: write its lessons in a data/course-*.js file, then add an entry here and run `node build-courses.mjs`.
//
// Selling later: set `price` (e.g. "$19") and `buyUrl` (a checkout link from Gumroad, Payhip, Lemon Squeezy, Ko-fi, etc.).
// While `buyUrl` is empty the course shows "Free while we launch" and no buy button. See README for the full note on locking lessons.
import { hiraganaLessons } from "./course-hiragana.js";
import { katakanaLessons } from "./course-katakana.js";
import { conversationLessons } from "./course-conversations.js";

export const courses = [
  {
    id: "hiragana-starter",
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
    price: "", buyUrl: "",
    lessons: hiraganaLessons
  },
  {
    id: "katakana-starter",
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
    price: "", buyUrl: "",
    lessons: katakanaLessons
  },
  {
    id: "first-conversations",
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
    price: "", buyUrl: "",
    lessons: conversationLessons
  }
];
