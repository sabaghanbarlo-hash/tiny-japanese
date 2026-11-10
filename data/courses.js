// All courses. To add a course: write its lessons in a data/course-*.js file, then add an entry here and run `node build-courses.mjs`.
//
// Premium courses: `premium: true` + `price`. Lessons 1-3 (PREMIUM.freeLessons in data/premium-config.js) are free; the rest are stored on the server and need an access code.
// Payment goes through the link in data/premium-config.js; add `payUrl` to a course if it needs its own link (e.g. a fixed-amount link).
import { hiraganaLessons } from "./course-hiragana.js";
import { katakanaLessons } from "./course-katakana.js";
import { conversationLessons } from "./course-conversations.js";
import { grammarLessons } from "./course-grammar.js";
import { genki1Lessons } from "./course-genki1.js";
import { particles as genki1ParticleLessons } from "./genki1-particles.js";
import { kanjiLessons } from "./course-kanji.js";
import { travelLessons } from "./course-travel.js";
import { tiny1000Lessons } from "./course-tiny1000.js";
import { tinyConversationsLessons } from "./course-tiny-conversations.js";

export const courses = [
  {
    id: "hiragana-starter",
    videoCredit: "Stroke order animation uses KanjiVG data (CC BY-SA 3.0, kanjivg.tagaini.net). Voices: Mika and Alex (neural text-to-speech).",
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
    videoCredit: "Stroke order animation uses KanjiVG data (CC BY-SA 3.0, kanjivg.tagaini.net). Voices: Mika and Alex (neural text-to-speech).",
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
    videoCredit: "Voices: Mika and Alex (neural text-to-speech).",
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
  },
  {
    id: "grammar-starter",
    title: "Grammar Starter",
    tagline: "Build real Japanese sentences in 9 short lessons.",
    level: "Beginner",
    topic: "Grammar",
    description: "The core patterns of Japanese, one step at a time: です and は, pointing words, the particles の, も, と, を, に, で and へ, polite verbs, い- and な-adjectives, the past tense, and asking for what you want. Every lesson has a dialogue with Mika and Alex, vocabulary, grammar notes and a quiz.",
    outcomes: [
      "Make and understand simple “A is B” sentences with は and です",
      "Use the particles の, も, と, を, に, で and へ correctly",
      "Say what you do and did with polite ます and ました verbs",
      "Describe things with い- and な-adjectives, in the present and the past",
      "Say what you want and ask for things politely"
    ],
    audience: "Beginners who can read hiragana (take Hiragana Starter first if not).",
    noVideo: true,
    premium: true, price: "$12", buyUrl: "",
    lessons: grammarLessons
  },
  {
    id: "genki-1",
    title: "Genki I Companion",
    tagline: "Follow the 12 chapters of Genki I with Mika and Alex, one grammar topic at a time.",
    level: "Beginner",
    topic: "Textbook companion",
    description: "An independent study companion for the Genki I textbook, not affiliated with its publisher. Each lesson follows the grammar topics of one Genki chapter, but the dialogues, examples and quizzes are all original: a short story with Mika and Alex, vocabulary, clear grammar notes and a quiz. Use it next to your own copy of the book, or on its own.",
    outcomes: [
      "Introduce yourself, point at things and ask whose they are",
      "Use verbs, adjectives and particles, the て form and casual speech",
      "Compare things, talk about plans and experiences",
      "Give reasons and advice, and say what you must do"
    ],
    audience: "Beginners who can read hiragana (take Hiragana Starter first if not) and are studying Genki I or want to follow the same path.",
    videoCredit: "Voices: Mika and Alex (neural text-to-speech).",
    pdf: "/downloads/genki-1-workbook.pdf",
    lessons: genki1Lessons
  },
  {
    id: "genki-1-particles",
    title: "Genki I Particles (pilot)",
    tagline: "One short video for each Japanese particle: は, か, の, も, を, に, で, へ, と and が.",
    level: "Beginner",
    topic: "Textbook companion",
    description: "A pilot for a one-concept-per-lesson way of learning Genki I grammar. Each lesson takes one particle, explains it from the start, shows examples, then puts it in a short story with Mika and Alex. An independent companion, not affiliated with the Genki publisher.",
    outcomes: [
      "Know what each basic particle does and how it is read",
      "Choose between は and が, に and で, に and へ",
      "Build simple sentences about who, what, where and when"
    ],
    audience: "Beginners who can read hiragana and want each grammar point explained on its own.",
    videoCredit: "Voices: Mika and Alex (neural text-to-speech).",
    lessons: genki1ParticleLessons
  },
  {
    id: "kanji-starter",
    title: "Kanji Starter",
    tagline: "Read your first 64 kanji through real words, signs and prices.",
    level: "Beginner",
    topic: "Reading & writing",
    description: "Eight lessons that teach 64 of the most useful beginner kanji in groups: numbers, money, days of the week, people, nature, size and position, everyday verbs, and time and places. Each lesson shows readings, real words, a short dialogue and a quiz.",
    outcomes: [
      "Read the kanji for numbers, prices, years and the days of the week",
      "Read people, school and nature words such as 先生, 学生, 山 and 天気",
      "Read signs like 出口, 入口, 右 and 左 and polite verbs like 食べます and 行きます",
      "Read clock times such as 午後三時十五分"
    ],
    audience: "Learners who can read hiragana and katakana (take Hiragana Starter first if not).",
    noVideo: true,
    premium: true, price: "$9", buyUrl: "",
    lessons: kanjiLessons
  },
  {
    id: "travel-japanese",
    title: "Travel Japanese",
    tagline: "Eight situations every visitor to Japan meets, from the station to the clinic.",
    level: "Beginner",
    topic: "Speaking & listening",
    description: "Eight practical dialogues for travellers: stations and tickets, taxis, hotel check-in, convenience stores, restaurants, tax-free shopping, asking the way and health emergencies. Mika and Alex act out each situation, with vocabulary, grammar notes, culture tips and a quiz.",
    outcomes: [
      "Buy tickets, ask about platforms and take a taxi",
      "Check in to a hotel and ask about breakfast and Wi-Fi",
      "Handle a convenience store checkout and order in a restaurant",
      "Shop tax-free, ask for sizes and ask for directions",
      "Ask for help and describe simple health problems"
    ],
    audience: "Beginners who can read hiragana and have finished First Conversations (or know the basics).",
    noVideo: true,
    premium: true, price: "$12", buyUrl: "",
    lessons: travelLessons
  },
  {
    id: "tiny-1000",
    title: "Tiny 1000",
    tagline: "The 1,000 most useful Japanese words, 10 per lesson, with spaced review built in.",
    level: "Beginner",
    topic: "Vocabulary",
    description: "A complete vocabulary course in 100 short lessons. Every lesson teaches 10 high-frequency words around one theme, inside a short dialogue with Mika and Alex, with an example sentence for every word, a grammar note and a quiz that also reviews words from earlier lessons (1, 3 and 7 lessons back) so they stick. A printable workbook with self-tests comes with every 100 words.",
    outcomes: [
      "Recognize, say and use the 1,000 most useful everyday Japanese words",
      "See every word inside a natural example sentence, never in isolation",
      "Review earlier words automatically with spaced-repetition quizzes",
      "Be ready for everyday Tiny Conversations built from the words you know"
    ],
    audience: "Beginners. Start with Hiragana Starter if you cannot read kana yet.",
    noVideo: true,
    freeLessons: 10,
    pdf: "/assets/pdf/tiny1000-tier-01.pdf",
    premium: true, price: "$19", buyUrl: "",
    lessons: tiny1000Lessons
  },
  {
    id: "tiny-conversations",
    title: "Tiny Conversations",
    tagline: "100 everyday Japanese conversations, built only from the 1,000 words you already know.",
    level: "Beginner",
    topic: "Conversation",
    description: "The second half of the Tiny 1000 method. After you learn the 1,000 most useful words, put them to work in 100 short everyday conversations with Mika and Alex: meeting people, getting around town, eating out, shopping, travel, home, work, health, free time and small talk. Every conversation uses only words from Tiny 1000, with useful patterns, a real-life tip and a quick comprehension quiz.",
    outcomes: [
      "Follow and take part in 100 everyday situations in Japanese",
      "Reuse the same 1,000 words in new combinations until they feel natural",
      "Learn the sentence patterns Japanese speakers actually use",
      "Get comfortable reading and saying full conversations out loud"
    ],
    audience: "Learners who have finished Tiny 1000, or know most of its 1,000 words.",
    noVideo: true,
    freeLessons: 10,
    premium: true, price: "$19", buyUrl: "",
    lessons: tinyConversationsLessons
  }
];
