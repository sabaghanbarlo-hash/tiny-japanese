// First Conversations: lessons 1-3 in full; later lessons are premium and live on the server (title and summary only here).
// Full lesson source is in the private repo (see README, "Premium courses").
export const conversationLessons = [
 {
  "id": "greetings-through-the-day",
  "number": 1,
  "title": "Greetings Through the Day",
  "time": "20 min",
  "summary": "Say good morning, hello, good evening, thank you, sorry and goodbye.",
  "objective": "By the end you can greet someone at any time of day, thank them, apologise, and say goodbye politely.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Japanese greetings change with the time of day. Mika and Alex meet at different moments, so you can hear all of the main ones. Read each line, then cover the romaji and English to test yourself."
    ]
   },
   {
    "type": "dialogue",
    "title": "Morning",
    "lines": [
     {
      "who": "Mika",
      "ja": "おはよう ございます！",
      "romaji": "Ohayou gozaimasu!",
      "en": "Good morning!"
     },
     {
      "who": "Alex",
      "ja": "おはよう ございます！",
      "romaji": "Ohayou gozaimasu!",
      "en": "Good morning!"
     }
    ]
   },
   {
    "type": "dialogue",
    "title": "Afternoon and evening",
    "lines": [
     {
      "who": "Mika",
      "ja": "こんにちは！",
      "romaji": "Konnichiwa!",
      "en": "Hello! (daytime)"
     },
     {
      "who": "Alex",
      "ja": "こんにちは！",
      "romaji": "Konnichiwa!",
      "en": "Hello!"
     },
     {
      "who": "Mika",
      "ja": "こんばんは。",
      "romaji": "Konbanwa.",
      "en": "Good evening."
     }
    ]
   },
   {
    "type": "dialogue",
    "title": "Saying goodbye",
    "lines": [
     {
      "who": "Mika",
      "ja": "じゃあ、また あした！",
      "romaji": "Jaa, mata ashita!",
      "en": "Well then, see you tomorrow!"
     },
     {
      "who": "Alex",
      "ja": "はい、また あした！",
      "romaji": "Hai, mata ashita!",
      "en": "Yes, see you tomorrow!"
     },
     {
      "who": "Mika",
      "ja": "おやすみなさい。",
      "romaji": "Oyasuminasai.",
      "en": "Good night."
     },
     {
      "who": "Alex",
      "ja": "おやすみなさい。",
      "romaji": "Oyasuminasai.",
      "en": "Good night."
     }
    ]
   },
   {
    "type": "words",
    "title": "Vocabulary",
    "items": [
     {
      "ja": "おはようございます",
      "kana": "",
      "romaji": "ohayou gozaimasu",
      "en": "good morning (polite)"
     },
     {
      "ja": "おはよう",
      "kana": "",
      "romaji": "ohayou",
      "en": "good morning (casual, with friends)"
     },
     {
      "ja": "こんにちは",
      "kana": "",
      "romaji": "konnichiwa",
      "en": "hello, good afternoon"
     },
     {
      "ja": "こんばんは",
      "kana": "",
      "romaji": "konbanwa",
      "en": "good evening"
     },
     {
      "ja": "おやすみなさい",
      "kana": "",
      "romaji": "oyasuminasai",
      "en": "good night"
     },
     {
      "ja": "また明日",
      "kana": "またあした",
      "romaji": "mata ashita",
      "en": "see you tomorrow"
     },
     {
      "ja": "ありがとうございます",
      "kana": "",
      "romaji": "arigatou gozaimasu",
      "en": "thank you (polite)"
     },
     {
      "ja": "どういたしまして",
      "kana": "",
      "romaji": "dou itashimashite",
      "en": "you're welcome"
     },
     {
      "ja": "すみません",
      "kana": "",
      "romaji": "sumimasen",
      "en": "excuse me / sorry / thank you"
     },
     {
      "ja": "ごめんなさい",
      "kana": "",
      "romaji": "gomennasai",
      "en": "I'm sorry"
     },
     {
      "ja": "はい",
      "kana": "",
      "romaji": "hai",
      "en": "yes"
     },
     {
      "ja": "いいえ",
      "kana": "",
      "romaji": "iie",
      "en": "no"
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "Polite vs casual",
      "body": "おはよう is fine with friends and family. Add ございます (おはよう ございます) when talking to a teacher, a boss, a shopkeeper, or anyone you don't know well. When you're unsure, choose the polite form."
     },
     {
      "title": "The は in こんにちは and こんばんは",
      "body": "These greetings are written with は, but it is read “wa”, not “ha”. They began as parts of longer sentences, and the old spelling stayed."
     },
     {
      "title": "すみません does three jobs",
      "body": "It can mean “excuse me” (to get someone's attention), “sorry” (for a small mistake) and even “thank you” (when someone has gone to trouble for you). It is probably the most useful word in this lesson."
     },
     {
      "title": "ありがとう vs ありがとうございます",
      "body": "ありがとう is casual. ありがとう ございます is polite. To answer thanks, say どういたしまして, or just a small smile and nod."
     }
    ]
   },
   {
    "type": "tips",
    "title": "Culture note",
    "items": [
     "In Japan a small nod or bow often goes with a greeting. You don't need to bow deeply, but a slight nod while saying おはよう ございます is a friendly, natural habit."
    ]
   }
  ],
  "quiz": [
   {
    "q": "How do you say “Good morning” politely?",
    "options": [
     "おはよう ございます",
     "こんばんは",
     "おやすみなさい"
    ],
    "answer": 0,
    "explain": "おはよう ございます is the polite form for the morning."
   },
   {
    "q": "You are leaving a friend's house late at night. What do you say?",
    "options": [
     "おはよう",
     "おやすみなさい",
     "こんにちは"
    ],
    "answer": 1,
    "explain": "おやすみなさい means “good night”."
   },
   {
    "q": "How is は read in こんにちは?",
    "options": [
     "ha",
     "ba",
     "wa"
    ],
    "answer": 2,
    "explain": "In this greeting は is read “wa”: Konnichiwa."
   },
   {
    "q": "Which word can mean “excuse me”, “sorry” and “thank you”?",
    "options": [
     "ごめんなさい",
     "すみません",
     "いいえ"
    ],
    "answer": 1,
    "explain": "すみません is very flexible. ごめんなさい only means “I'm sorry”."
   },
   {
    "q": "How do you say “See you tomorrow”?",
    "options": [
     "また きょう",
     "おはよう ございます",
     "また あした"
    ],
    "answer": 2,
    "explain": "また あした means “see you tomorrow”."
   },
   {
    "q": "What do you say after someone thanks you?",
    "options": [
     "おやすみなさい",
     "どういたしまして",
     "ごめんなさい"
    ],
    "answer": 1,
    "explain": "どういたしまして means “you're welcome”."
   }
  ]
 },
 {
  "id": "introducing-yourself",
  "number": 2,
  "title": "Introducing Yourself",
  "time": "25 min",
  "summary": "Say your name, where you're from, whether you're a student, and ask the same about someone else.",
  "objective": "By the end you can introduce yourself in six or seven short sentences, and ask simple yes/no questions.",
  "blocks": [
   {
    "type": "dialogue",
    "title": "Dialogue: A first meeting",
    "lines": [
     {
      "who": "Mika",
      "ja": "はじめまして。ミカです。",
      "romaji": "Hajimemashite. Mika desu.",
      "en": "Nice to meet you. I'm Mika."
     },
     {
      "who": "Alex",
      "ja": "はじめまして。アレックスです。アメリカから きました。",
      "romaji": "Hajimemashite. Arekkusu desu. Amerika kara kimashita.",
      "en": "Nice to meet you. I'm Alex. I came from America."
     },
     {
      "who": "Mika",
      "ja": "アメリカじんですか。",
      "romaji": "Amerikajin desu ka.",
      "en": "Are you American?"
     },
     {
      "who": "Alex",
      "ja": "はい、アメリカじんです。",
      "romaji": "Hai, Amerikajin desu.",
      "en": "Yes, I'm American."
     },
     {
      "who": "Mika",
      "ja": "がくせいですか。",
      "romaji": "Gakusei desu ka.",
      "en": "Are you a student?"
     },
     {
      "who": "Alex",
      "ja": "はい、がくせいです。ミカさんは？",
      "romaji": "Hai, gakusei desu. Mika-san wa?",
      "en": "Yes, I'm a student. And you, Mika?"
     },
     {
      "who": "Mika",
      "ja": "わたしも がくせいです。",
      "romaji": "Watashi mo gakusei desu.",
      "en": "I'm a student too."
     },
     {
      "who": "Alex",
      "ja": "よろしく おねがいします！",
      "romaji": "Yoroshiku onegaishimasu!",
      "en": "Pleased to meet you!"
     },
     {
      "who": "Mika",
      "ja": "こちらこそ！",
      "romaji": "Kochira koso!",
      "en": "Likewise!"
     }
    ]
   },
   {
    "type": "words",
    "title": "Vocabulary",
    "items": [
     {
      "ja": "初めまして",
      "kana": "はじめまして",
      "romaji": "hajimemashite",
      "en": "how do you do? (said at a first meeting)"
     },
     {
      "ja": "〜です",
      "kana": "",
      "romaji": "~ desu",
      "en": "is / am / are (polite)"
     },
     {
      "ja": "〜から来ました",
      "kana": "〜からきました",
      "romaji": "~ kara kimashita",
      "en": "I came from ~"
     },
     {
      "ja": "〜人",
      "kana": "〜じん",
      "romaji": "~ jin",
      "en": "person of ~ (nationality)"
     },
     {
      "ja": "学生",
      "kana": "がくせい",
      "romaji": "gakusei",
      "en": "student"
     },
     {
      "ja": "〜も",
      "kana": "",
      "romaji": "~ mo",
      "en": "also, too"
     },
     {
      "ja": "〜さん",
      "kana": "",
      "romaji": "~ san",
      "en": "Mr/Ms/Mx ~ (polite name ending)"
     },
     {
      "ja": "よろしくお願いします",
      "kana": "よろしくおねがいします",
      "romaji": "yoroshiku onegaishimasu",
      "en": "pleased to meet you"
     },
     {
      "ja": "こちらこそ",
      "kana": "",
      "romaji": "kochira koso",
      "en": "likewise, the pleasure is mine"
     },
     {
      "ja": "先生",
      "kana": "せんせい",
      "romaji": "sensei",
      "en": "teacher"
     },
     {
      "ja": "会社員",
      "kana": "かいしゃいん",
      "romaji": "kaishain",
      "en": "office worker"
     }
    ]
   },
   {
    "type": "words",
    "title": "Countries and nationalities",
    "items": [
     {
      "ja": "日本",
      "kana": "にほん",
      "romaji": "nihon",
      "en": "Japan"
     },
     {
      "ja": "アメリカ",
      "kana": "",
      "romaji": "amerika",
      "en": "America"
     },
     {
      "ja": "イギリス",
      "kana": "",
      "romaji": "igirisu",
      "en": "the UK"
     },
     {
      "ja": "カナダ",
      "kana": "",
      "romaji": "kanada",
      "en": "Canada"
     },
     {
      "ja": "オーストラリア",
      "kana": "",
      "romaji": "oosutoraria",
      "en": "Australia"
     },
     {
      "ja": "ブラジル",
      "kana": "",
      "romaji": "burajiru",
      "en": "Brazil"
     },
     {
      "ja": "インド",
      "kana": "",
      "romaji": "indo",
      "en": "India"
     },
     {
      "ja": "中国",
      "kana": "ちゅうごく",
      "romaji": "chuugoku",
      "en": "China"
     },
     {
      "ja": "韓国",
      "kana": "かんこく",
      "romaji": "kankoku",
      "en": "South Korea"
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar",
    "items": [
     {
      "title": "X は Y です — “X is Y”",
      "body": "は marks the topic and です closes the sentence politely. You can drop the topic when it's obvious: アレックスです means “I'm Alex”."
     },
     {
      "title": "か makes a question",
      "body": "Add か to the end of a sentence to ask a yes/no question: がくせいですか。 (“Are you a student?”). No question mark is needed in Japanese, but in these lessons we sometimes add one for clarity."
     },
     {
      "title": "も means “too”",
      "body": "Replace は with も to say the same applies to you: わたしも がくせいです (“I'm a student too.”)."
     },
     {
      "title": "から means “from”",
      "body": "アメリカから きました means “I came from America”. To ask the same thing, say どこから きましたか (“Where did you come from?”)."
     },
     {
      "title": "〜じん for nationalities",
      "body": "Add じん to a country name for the person: アメリカじん (an American), にほんじん (a Japanese person). It follows the same pattern for most countries."
     },
     {
      "title": "〜さん is for other people",
      "body": "Add さん after someone's name to be polite. Never use it for yourself."
     }
    ]
   },
   {
    "type": "tips",
    "title": "Try it yourself",
    "items": [
     "Make your own introduction by filling in this pattern: はじめまして。(name)です。(country)から きました。(country)じんです。よろしく おねがいします。",
     "Say it aloud three times, then say it without looking."
    ]
   }
  ],
  "quiz": [
   {
    "q": "What does か at the end of a sentence do?",
    "options": [
     "It makes the sentence negative",
     "It makes a question",
     "It means “and”"
    ],
    "answer": 1,
    "explain": "か turns a statement into a yes/no question."
   },
   {
    "q": "How do you say “I'm a student too”?",
    "options": [
     "わたしは がくせいですか。",
     "わたしも がくせいです。",
     "わたしも アメリカじんです。"
    ],
    "answer": 1,
    "explain": "も replaces は to mean “too”."
   },
   {
    "q": "What does アメリカから きました mean?",
    "options": [
     "I came from America.",
     "Are you American?",
     "I like America."
    ],
    "answer": 0,
    "explain": "から marks where you came from."
   },
   {
    "q": "Which ending should you NEVER put after your own name?",
    "options": [
     "〜も",
     "〜さん",
     "〜です"
    ],
    "answer": 1,
    "explain": "さん is used for other people, not yourself."
   },
   {
    "q": "How do you say “Pleased to meet you” after introducing yourself?",
    "options": [
     "よろしく おねがいします",
     "おやすみなさい",
     "ありがとう ございます"
    ],
    "answer": 0,
    "explain": "よろしく おねがいします is the standard ending to a self-introduction."
   },
   {
    "q": "How do you say “a Japanese person”?",
    "options": [
     "にほんじん",
     "にほんから",
     "にほんです"
    ],
    "answer": 0,
    "explain": "Add じん to a country name for a nationality: にほんじん."
   }
  ]
 },
 {
  "id": "numbers-and-counting",
  "number": 3,
  "title": "Numbers and Counting",
  "time": "30 min",
  "summary": "Count from zero to a thousand, give your age and read out a phone number.",
  "objective": "By the end you can count to 100, ask and say someone's age, and read out a phone number.",
  "blocks": [
   {
    "type": "dialogue",
    "title": "Dialogue: Age and phone number",
    "lines": [
     {
      "who": "Alex",
      "ja": "ミカさんは なんさいですか。",
      "romaji": "Mika-san wa nansai desu ka.",
      "en": "How old are you, Mika?"
     },
     {
      "who": "Mika",
      "ja": "はたちです。アレックスさんは？",
      "romaji": "Hatachi desu. Arekkusu-san wa?",
      "en": "I'm twenty. And you, Alex?"
     },
     {
      "who": "Alex",
      "ja": "わたしも はたちです。",
      "romaji": "Watashi mo hatachi desu.",
      "en": "I'm twenty too."
     },
     {
      "who": "Mika",
      "ja": "おなじですね！",
      "romaji": "Onaji desu ne!",
      "en": "We're the same age!"
     },
     {
      "who": "Alex",
      "ja": "でんわばんごうを おしえて ください。",
      "romaji": "Denwa bangou o oshiete kudasai.",
      "en": "Please tell me your phone number."
     },
     {
      "who": "Mika",
      "ja": "はい。ゼロ はち ゼロ の いち に さん よん の ご ろく なな はち です。",
      "romaji": "Hai. Zero hachi zero no ichi ni san yon no go roku nana hachi desu.",
      "en": "Sure. It's 080-1234-5678."
     },
     {
      "who": "Alex",
      "ja": "ありがとう ございます！",
      "romaji": "Arigatou gozaimasu!",
      "en": "Thank you!"
     }
    ]
   },
   {
    "type": "words",
    "title": "Numbers 0 to 10",
    "items": [
     {
      "ja": "0",
      "kana": "ゼロ / れい",
      "romaji": "zero / rei",
      "en": "zero"
     },
     {
      "ja": "1",
      "kana": "いち",
      "romaji": "ichi",
      "en": "one"
     },
     {
      "ja": "2",
      "kana": "に",
      "romaji": "ni",
      "en": "two"
     },
     {
      "ja": "3",
      "kana": "さん",
      "romaji": "san",
      "en": "three"
     },
     {
      "ja": "4",
      "kana": "よん / し",
      "romaji": "yon / shi",
      "en": "four"
     },
     {
      "ja": "5",
      "kana": "ご",
      "romaji": "go",
      "en": "five"
     },
     {
      "ja": "6",
      "kana": "ろく",
      "romaji": "roku",
      "en": "six"
     },
     {
      "ja": "7",
      "kana": "なな / しち",
      "romaji": "nana / shichi",
      "en": "seven"
     },
     {
      "ja": "8",
      "kana": "はち",
      "romaji": "hachi",
      "en": "eight"
     },
     {
      "ja": "9",
      "kana": "きゅう / く",
      "romaji": "kyuu / ku",
      "en": "nine"
     },
     {
      "ja": "10",
      "kana": "じゅう",
      "romaji": "juu",
      "en": "ten"
     }
    ]
   },
   {
    "type": "points",
    "title": "Making bigger numbers",
    "items": [
     {
      "title": "11 to 99 are built from 10",
      "body": "じゅういち (11), じゅうに (12), … じゅうきゅう (19). Then にじゅう (20 = 2 × 10), さんじゅう (30), よんじゅう (40), … きゅうじゅう (90). So 25 is にじゅうご (“twenty-five”) and 99 is きゅうじゅうきゅう."
     },
     {
      "title": "Hundreds and thousands",
      "body": "ひゃく (100), せん (1,000), いちまん (10,000). Watch the exceptions: さんびゃく (300), ろっぴゃく (600), はっぴゃく (800), さんぜん (3,000), はっせん (8,000)."
     },
     {
      "title": "よん and なな are the everyday choices",
      "body": "Both 4 and 7 have two readings. In phone numbers and most counting, よん and なな are clearest. し and しち appear in set phrases such as しがつ (April) and しちじ (seven o'clock)."
     }
    ]
   },
   {
    "type": "points",
    "title": "Age: 〜さい",
    "items": [
     {
      "title": "Add さい after the number",
      "body": "ごさい (5), ろくさい (6), ななさい (7), きゅうさい (9). A few change: いっさい (1), はっさい (8), じゅっさい (10)."
     },
     {
      "title": "Twenty is special",
      "body": "20 years old is はたち, not にじゅっさい. After that, it's regular: にじゅういっさい (21), にじゅうにさい (22)."
     },
     {
      "title": "Asking age",
      "body": "なんさいですか (“How old are you?”) is fine with a friend. With an adult you've just met, some people prefer to avoid it, so use it with friends of a similar age."
     }
    ]
   },
   {
    "type": "points",
    "title": "Phone numbers",
    "items": [
     {
      "title": "Say each digit and use の for the dash",
      "body": "080-1234-5678 is ゼロ はち ゼロ の いち に さん よん の ご ろく なな はち. Say the digits one by one, and link the groups with の. Zero is often said ゼロ in phone numbers (れい is also common)."
     },
     {
      "title": "ね at the end of a sentence",
      "body": "おなじですね means “it's the same, isn't it?”. ね seeks agreement or shows a shared feeling, like “right?” or “isn't it?” in English."
     }
    ]
   }
  ],
  "quiz": [
   {
    "q": "What is ごじゅう?",
    "options": [
     "50",
     "5",
     "15"
    ],
    "answer": 0,
    "explain": "ご = 5 and じゅう = 10, so ごじゅう is 5 × 10 = 50."
   },
   {
    "q": "How do you say 20 years old?",
    "options": [
     "はたち",
     "にじゅうさい",
     "にさい"
    ],
    "answer": 0,
    "explain": "Twenty is the special word はたち."
   },
   {
    "q": "What does なんさいですか mean?",
    "options": [
     "How much is it?",
     "How old are you?",
     "What time is it?"
    ],
    "answer": 1,
    "explain": "なん = what, さい = years of age."
   },
   {
    "q": "How do you read 300?",
    "options": [
     "さんひゃく",
     "さんびゃく",
     "さんせん"
    ],
    "answer": 1,
    "explain": "300 is irregular: さんびゃく. 3,000 is さんぜん."
   },
   {
    "q": "In a phone number, which word usually links groups of digits (like the dash)?",
    "options": [
     "を",
     "は",
     "の"
    ],
    "answer": 2,
    "explain": "Say の between groups: 080-1234 is ゼロ はち ゼロ の いち に さん よん."
   },
   {
    "q": "Which number is ろく?",
    "options": [
     "6",
     "9",
     "7"
    ],
    "answer": 0,
    "explain": "ろく is six."
   },
   {
    "q": "What does ね add at the end of おなじですね?",
    "options": [
     "It makes a question about time",
     "It seeks agreement (“right?”)",
     "It means “not”"
    ],
    "answer": 1,
    "explain": "ね is a soft ending seeking agreement."
   }
  ]
 },
 {
  "id": "ordering-food",
  "number": 4,
  "title": "Ordering Food and Drinks",
  "time": "30 min",
  "summary": "Order a meal, ask for water, praise the food, and ask for the bill.",
  "objective": "By the end you can order food and drink politely, count items, and finish a meal with the right phrases.",
  "premium": true
 },
 {
  "id": "shopping-and-prices",
  "number": 5,
  "title": "Shopping and Prices",
  "time": "30 min",
  "summary": "Ask what something costs, point at things, compare prices and decide.",
  "objective": "By the end you can ask how much something is, understand a price, and say you'll take it.",
  "premium": true
 },
 {
  "id": "asking-directions",
  "number": 6,
  "title": "Asking for Directions",
  "time": "25 min",
  "summary": "Find the station, the restroom or a shop, and understand “straight”, “left” and “right”.",
  "objective": "By the end you can ask where something is and follow a simple answer.",
  "premium": true
 },
 {
  "id": "time-and-days",
  "number": 7,
  "title": "Telling the Time and Days",
  "time": "30 min",
  "summary": "Say what time it is, when something starts, and the days of the week.",
  "objective": "By the end you can ask and tell the time, say today and tomorrow, and name the days of the week.",
  "premium": true
 },
 {
  "id": "likes-and-dislikes",
  "number": 8,
  "title": "Likes and Dislikes",
  "time": "25 min",
  "summary": "Talk about what you like, love, and don't really like.",
  "objective": "By the end you can say what you like, ask others, and politely say you don't like something.",
  "premium": true
 },
 {
  "id": "making-plans",
  "number": 9,
  "title": "Making Plans Together",
  "time": "30 min",
  "summary": "Invite someone, accept, agree on a time and place, and look forward to it.",
  "objective": "By the end you can invite a friend, say yes, and arrange a time and place to meet.",
  "premium": true
 },
 {
  "id": "asking-for-help",
  "number": 10,
  "title": "Asking for Help",
  "time": "25 min",
  "summary": "Say you don't understand, ask people to repeat or slow down, and handle emergencies.",
  "objective": "By the end you can say you don't understand, ask for repetition, ask what something is called, and call for help.",
  "premium": true
 }
];
