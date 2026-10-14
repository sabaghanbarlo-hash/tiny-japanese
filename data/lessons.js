// One object per published lesson. Dialogue text matches the published Tiny Japanese episodes.
// To add a lesson: copy an object, give it a new id and the next number. Romaji uses long-vowel doubling (ou, oo).
export const lessons = [
 {
  id: "meeting-for-the-first-time", number: 1, title: "Meeting for the First Time",
  topic: "Greetings & names", level: "Absolute beginner",
  description: "Say hello, ask someone's name, and tell them yours.",
  objective: "By the end you can greet someone, ask “What's your name?”, and say “I'm ___.”",
  intro: "Mika and Alex meet for the first time. It's a short, simple exchange you can use almost straight away.",
  dialogue: [
   { who: "Mika", ja: "こんにちは！", romaji: "Konnichiwa!", en: "Hello!" },
   { who: "Alex", ja: "こんにちは！", romaji: "Konnichiwa!", en: "Hello!" },
   { who: "Mika", ja: "おなまえは？", romaji: "Onamae wa?", en: "What's your name?" },
   { who: "Alex", ja: "アレックスです。", romaji: "Arekkusu desu.", en: "I'm Alex." },
   { who: "Mika", ja: "わたしは ミカです。", romaji: "Watashi wa Mika desu.", en: "I'm Mika." },
   { who: "Alex", ja: "よろしくおねがいします！", romaji: "Yoroshiku onegaishimasu!", en: "Nice to meet you!" }
  ],
  vocab: [
   { ja: "こんにちは", kana: "", romaji: "konnichiwa", en: "hello (used in the daytime)" },
   { ja: "お名前", kana: "おなまえ", romaji: "onamae", en: "name (polite; お is a polite prefix)" },
   { ja: "は", kana: "", romaji: "wa", en: "topic particle: “as for …”" },
   { ja: "です", kana: "", romaji: "desu", en: "is / am / are (polite)" },
   { ja: "私", kana: "わたし", romaji: "watashi", en: "I / me" },
   { ja: "よろしくお願いします", kana: "よろしくおねがいします", romaji: "yoroshiku onegaishimasu", en: "nice to meet you (literally a polite request for a good relationship)" }
  ],
  grammar: [
   { title: "X は Y です — “X is Y”", body: "は marks what you are talking about, and です finishes the sentence politely. わたしは ミカです means “I am Mika.” When it's obvious who you mean, Japanese often drops the “I”, which is why Alex can simply say アレックスです." },
   { title: "おなまえは？ — a short question", body: "Adding は to a word and raising your voice at the end turns it into “and your name?” — a friendly way to ask someone's name. You don't need か in this short form." },
   { title: "Pronunciation: は is “wa” here", body: "The character は is normally “ha”, but as a particle it is pronounced “wa”. That's why わたしは is read watashi wa." }
  ],
  notes: ["よろしくおねがいします is used when you meet someone, and also in other situations such as asking for a favour, so “Nice to meet you” is a good translation here but not the whole story."],
  extra: [],
  quiz: [
   { q: "How do you say “I'm Alex”?", options: ["おなまえは？", "アレックスです。", "こんにちは！"], answer: 1, explain: "名前 + です is the simplest way to say who you are." },
   { q: "In わたしは ミカです, which word is the topic particle?", options: ["わたし", "ミカ", "は", "です"], answer: 2, explain: "は marks the topic (“as for me”). です ends the sentence." },
   { q: "How is the particle は pronounced in わたしは?", options: ["ha", "wa", "o"], answer: 1, explain: "As a particle, は is read “wa”." },
   { q: "What does おなまえは？ ask?", options: ["Are you a student?", "Where is the station?", "What's your name?"], answer: 2, explain: "おなまえ = name, は = as for … ?" }
  ]
 },
 {
  id: "whats-your-name", number: 2, title: "What's Your Name?",
  topic: "Introductions", level: "Absolute beginner",
  description: "Introduce yourself, ask a yes/no question, and say “me too”.",
  objective: "By the end you can say “Nice to meet you”, ask “Are you a student?”, answer yes, and say “I'm a student too.”",
  intro: "Mika and Alex introduce themselves and find something they have in common.",
  dialogue: [
   { who: "Mika", ja: "はじめまして！ミカです。", romaji: "Hajimemashite! Mika desu.", en: "Nice to meet you! I'm Mika." },
   { who: "Alex", ja: "はじめまして。アレックスです。", romaji: "Hajimemashite. Arekkusu desu.", en: "Nice to meet you. I'm Alex." },
   { who: "Mika", ja: "アレックスさんは、がくせいですか？", romaji: "Arekkusu-san wa, gakusei desu ka?", en: "Alex, are you a student?" },
   { who: "Alex", ja: "はい、がくせいです。", romaji: "Hai, gakusei desu.", en: "Yes, I'm a student." },
   { who: "Mika", ja: "わたしも、がくせいです！", romaji: "Watashi mo, gakusei desu!", en: "I'm a student too!" },
   { who: "Alex", ja: "そうですか。よろしくおねがいします。", romaji: "Sou desu ka. Yoroshiku onegaishimasu.", en: "I see. Nice to meet you." },
   { who: "Mika", ja: "こちらこそ、よろしくね！", romaji: "Kochira koso, yoroshiku ne!", en: "Likewise! Nice to meet you too!" }
  ],
  vocab: [
   { ja: "はじめまして", kana: "", romaji: "hajimemashite", en: "nice to meet you (said when you first meet)" },
   { ja: "〜さん", kana: "", romaji: "-san", en: "polite title added after someone else's name" },
   { ja: "学生", kana: "がくせい", romaji: "gakusei", en: "student" },
   { ja: "はい", kana: "", romaji: "hai", en: "yes" },
   { ja: "か", kana: "", romaji: "ka", en: "question particle" },
   { ja: "も", kana: "", romaji: "mo", en: "also / too" },
   { ja: "そうですか", kana: "", romaji: "sou desu ka", en: "I see / oh, is that so?" },
   { ja: "こちらこそ", kana: "", romaji: "kochira koso", en: "likewise / same to you" },
   { ja: "ね", kana: "", romaji: "ne", en: "friendly sentence ending, like “right?” or a soft “!”" }
  ],
  grammar: [
   { title: "Add か to ask a question", body: "がくせいです = “(I) am a student.” がくせいですか？ = “Are (you) a student?” か at the end turns a polite sentence into a question." },
   { title: "も instead of は means “too”", body: "わたしは がくせいです = “I'm a student.” わたしも がくせいです = “I'm a student too.” も replaces は when the same thing is also true." },
   { title: "さん goes after other people's names", body: "Add さん to another person's name to be polite: アレックスさん. Don't add it to your own name — Mika says ミカです, not ミカさんです." },
   { title: "ね sounds friendly", body: "Mika ends with よろしくね, a warmer, more casual tone than よろしくおねがいします. It suits a friendly chat." }
  ],
  notes: ["The published video writes がくせい in hiragana. The kanji form 学生 is shown in the vocabulary list so you can start to recognise it."],
  extra: [],
  quiz: [
   { q: "Which particle turns a sentence into a question?", options: ["も", "か", "は"], answer: 1, explain: "か at the end of a polite sentence makes it a question." },
   { q: "What does わたしも、がくせいです mean?", options: ["I'm not a student.", "Are you a student?", "I'm a student too."], answer: 2, explain: "も means “also / too”." },
   { q: "Mika wants to address Alex politely. She says …", options: ["アレックスさん", "アレックスです", "わたしさん"], answer: 0, explain: "Add さん after the other person's name." },
   { q: "Your friend asks がくせいですか？ and you are a student. You answer …", options: ["そうですか。", "はい、がくせいです。", "はじめまして。"], answer: 1, explain: "はい = yes, then repeat the answer." },
   { q: "What does こちらこそ mean in this conversation?", options: ["Likewise", "Excuse me", "Thank you"], answer: 0, explain: "It returns the greeting: “same to you”." }
  ]
 },
 {
  id: "at-the-station", number: 3, title: "At the Station",
  topic: "Asking where something is", level: "Absolute beginner",
  description: "Greet someone in the morning and ask where the station is.",
  objective: "By the end you can say “Good morning”, ask “Where is the station?”, and understand “It's over there.”",
  intro: "Alex is looking for the station and asks Mika.",
  dialogue: [
   { who: "Mika", ja: "おはようございます！", romaji: "Ohayou gozaimasu!", en: "Good morning!" },
   { who: "Alex", ja: "おはようございます。えきは どこですか？", romaji: "Ohayou gozaimasu. Eki wa doko desu ka?", en: "Good morning. Where is the station?" },
   { who: "Mika", ja: "あそこです。", romaji: "Asoko desu.", en: "It's over there." },
   { who: "Alex", ja: "ありがとうございます！", romaji: "Arigatou gozaimasu!", en: "Thank you!" }
  ],
  vocab: [
   { ja: "おはようございます", kana: "", romaji: "ohayou gozaimasu", en: "good morning (polite)" },
   { ja: "駅", kana: "えき", romaji: "eki", en: "station" },
   { ja: "どこ", kana: "", romaji: "doko", en: "where" },
   { ja: "あそこ", kana: "", romaji: "asoko", en: "over there" },
   { ja: "ありがとうございます", kana: "", romaji: "arigatou gozaimasu", en: "thank you (polite)" }
  ],
  grammar: [
   { title: "X は どこですか？ — “Where is X?”", body: "Put the thing you're looking for before は, then add どこですか. えきは どこですか？ = “Where is the station?”" },
   { title: "Answer with the place + です", body: "あそこです = “It's over there.” The answer simply swaps どこ for a place word." },
   { title: "ここ / そこ / あそこ", body: "These three place words work as a set: ここ is near the speaker, そこ is near the listener, and あそこ is away from both of you." }
  ],
  notes: ["おはようございます is a polite morning greeting. The shorter おはよう is the casual version you'd use with friends.", "In the published video, えき is written in hiragana. The kanji 駅 is shown in the vocabulary list."],
  extra: [
   { title: "Extra phrases (not in the video)", items: [
    { ja: "まっすぐ いって、みぎです。", romaji: "Massugu itte, migi desu.", en: "Go straight, then it's on the right." },
    { ja: "ひだりです。", romaji: "Hidari desu.", en: "It's on the left." }
   ] }
  ],
  quiz: [
   { q: "How do you ask “Where is the station?”", options: ["あそこです。", "えきは どこですか？", "おはようございます。"], answer: 1, explain: "Thing + は + どこですか." },
   { q: "Choose the missing particle: えき＿ どこですか？", options: ["か", "も", "は"], answer: 2, explain: "は marks the topic: “As for the station, where is it?”" },
   { q: "What does あそこです mean?", options: ["It's over there.", "Thank you.", "Good morning."], answer: 0, explain: "あそこ = over there." },
   { q: "Which greeting do you use in the morning?", options: ["こんにちは", "おはようございます", "どういたしまして"], answer: 1, explain: "おはようございます is the polite morning greeting." }
  ]
 },
 {
  id: "at-the-cafe", number: 4, title: "At the Café",
  topic: "Ordering a drink", level: "Absolute beginner",
  description: "Politely ask for a coffee, say “me too”, and reply to thanks.",
  objective: "By the end you can say “Coffee, please”, “I'd like coffee too”, and “You're welcome.”",
  intro: "Mika and Alex each ask for a coffee. You'll learn the polite pattern for asking for something.",
  dialogue: [
   { who: "Mika", ja: "こんにちは！コーヒーを おねがいします。", romaji: "Konnichiwa! Koohii o onegaishimasu.", en: "Hello! Coffee, please." },
   { who: "Alex", ja: "ぼくも コーヒーを おねがいします。", romaji: "Boku mo koohii o onegaishimasu.", en: "I'd like coffee too, please." },
   { who: "Mika", ja: "ありがとうございます！", romaji: "Arigatou gozaimasu!", en: "Thank you!" },
   { who: "Alex", ja: "どういたしまして。", romaji: "Dou itashimashite.", en: "You're welcome!" }
  ],
  vocab: [
   { ja: "コーヒー", kana: "", romaji: "koohii", en: "coffee" },
   { ja: "を", kana: "", romaji: "o", en: "particle that marks the thing you are asking for or acting on" },
   { ja: "お願いします", kana: "おねがいします", romaji: "onegaishimasu", en: "please / I'd like … (polite request)" },
   { ja: "僕", kana: "ぼく", romaji: "boku", en: "I / me (commonly used by men and boys)" },
   { ja: "も", kana: "", romaji: "mo", en: "also / too" },
   { ja: "どういたしまして", kana: "", romaji: "dou itashimashite", en: "you're welcome" }
  ],
  grammar: [
   { title: "Thing + を おねがいします — “…, please”", body: "To ask for something politely, name it, add を, then おねがいします. コーヒーを おねがいします = “Coffee, please.” Swap in another word to ask for something else." },
   { title: "を is pronounced “o”", body: "The particle を is written を but read “o”, which is why the romaji is koohii o onegaishimasu." },
   { title: "も = “too”", body: "ぼくも コーヒーを … means “I'd like coffee too.” も replaces は, just like in Lesson 2." }
  ],
  notes: ["ぼく is commonly used by men and boys. Many women use わたし instead, so choose the one that fits you.", "Long vowels are written double in this site's romaji: koohii (コーヒー), ohayou, arigatou."],
  extra: [],
  quiz: [
   { q: "How do you say “Coffee, please”?", options: ["コーヒーを おねがいします。", "コーヒーですか？", "どういたしまして。"], answer: 0, explain: "Thing + を + おねがいします." },
   { q: "Choose the missing particle: コーヒー＿ おねがいします。", options: ["は", "を", "か"], answer: 1, explain: "を marks what you're asking for." },
   { q: "What does ぼくも mean?", options: ["Me too", "Not me", "Thank you"], answer: 0, explain: "ぼく = I, も = also." },
   { q: "Someone says ありがとうございます. You reply …", options: ["おなまえは？", "どういたしまして。", "あそこです。"], answer: 1, explain: "どういたしまして = You're welcome." }
  ]
 }
];
