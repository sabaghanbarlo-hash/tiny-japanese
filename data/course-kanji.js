// Kanji Starter: lessons 1-3 in full; later lessons are premium and live on the server (title and summary only here).
// Full lesson source is in the private repo (see README, "Premium courses").
export const kanjiLessons = [
 {
  "id": "numbers-1-10",
  "number": 1,
  "title": "Numbers 一 to 十",
  "time": "20 min",
  "summary": "Read and recognise the kanji for one to ten and use them in people, months and clock times.",
  "objective": "By the end you can read 一 to 十 and words like 三人, 五月 and 九時.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Numbers are the friendliest first kanji: 一, 二 and 三 are just one, two and three lines. Each kanji has an “on” reading (from Chinese) used mostly in compounds and a “kun” reading (native Japanese) used for single words. For numbers, the on reading does most of the work."
    ]
   },
   {
    "type": "kana",
    "title": "The ten number kanji",
    "cols": 5,
    "items": [
     {
      "k": "一",
      "r": "ichi"
     },
     {
      "k": "二",
      "r": "ni"
     },
     {
      "k": "三",
      "r": "san"
     },
     {
      "k": "四",
      "r": "yon / shi"
     },
     {
      "k": "五",
      "r": "go"
     },
     {
      "k": "六",
      "r": "roku"
     },
     {
      "k": "七",
      "r": "nana / shichi"
     },
     {
      "k": "八",
      "r": "hachi"
     },
     {
      "k": "九",
      "r": "kyuu / ku"
     },
     {
      "k": "十",
      "r": "juu"
     }
    ]
   },
   {
    "type": "words",
    "title": "Words to read",
    "items": [
     {
      "ja": "一人",
      "kana": "ひとり",
      "romaji": "hitori",
      "en": "one person"
     },
     {
      "ja": "二人",
      "kana": "ふたり",
      "romaji": "futari",
      "en": "two people"
     },
     {
      "ja": "三人",
      "kana": "さんにん",
      "romaji": "sannin",
      "en": "three people"
     },
     {
      "ja": "五月",
      "kana": "ごがつ",
      "romaji": "gogatsu",
      "en": "May"
     },
     {
      "ja": "十月",
      "kana": "じゅうがつ",
      "romaji": "juugatsu",
      "en": "October"
     },
     {
      "ja": "四時",
      "kana": "よじ",
      "romaji": "yoji",
      "en": "4 o'clock"
     },
     {
      "ja": "七時",
      "kana": "しちじ",
      "romaji": "shichiji",
      "en": "7 o'clock"
     },
     {
      "ja": "九時",
      "kana": "くじ",
      "romaji": "kuji",
      "en": "9 o'clock"
     },
     {
      "ja": "二十",
      "kana": "にじゅう",
      "romaji": "nijuu",
      "en": "twenty"
     },
     {
      "ja": "八つ",
      "kana": "やっつ",
      "romaji": "yattsu",
      "en": "eight (things)"
     }
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: How many people?",
    "lines": [
     {
      "who": "Mika",
      "ja": "なん人 ですか。",
      "romaji": "Nannin desu ka.",
      "en": "How many people?"
     },
     {
      "who": "Alex",
      "ja": "三人 です。ミカさんと わたしと ともだち です。",
      "romaji": "Sannin desu. Mika-san to watashi to tomodachi desu.",
      "en": "Three. You, me and a friend."
     },
     {
      "who": "Mika",
      "ja": "なん時に あいますか。",
      "romaji": "Nanji ni aimasu ka.",
      "en": "What time shall we meet?"
     },
     {
      "who": "Alex",
      "ja": "七時に あいます。",
      "romaji": "Shichiji ni aimasu.",
      "en": "We'll meet at seven."
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "Two readings for 4, 7 and 9",
      "body": "四 is よん or し, 七 is なな or しち, 九 is きゅう or く. Counting uses よん, なな and きゅう. But 4 o'clock, 7 o'clock and 9 o'clock use the older readings: よじ, しちじ, くじ."
     },
     {
      "title": "Numbers combine by position",
      "body": "十 is ten, so 二十 is two tens (20), 三十 is thirty and 十一 is eleven (ten + one). The kanji add up like arithmetic: 十二 = 12."
     },
     {
      "title": "People and months",
      "body": "Add 人 for people: 一人 and 二人 are special (ひとり, ふたり), then 三人 (さんにん). Add 月 for months: 五月 is the fifth month, May."
     }
    ]
   },
   {
    "type": "tips",
    "title": "How to remember",
    "items": [
     "一, 二, 三 are one, two and three strokes. 四 looks like a box with legs. 十 is a simple cross, like a plus sign. Practise writing each kanji in the right stroke order: top to bottom, left to right."
    ]
   }
  ],
  "quiz": [
   {
    "q": "What does 三 mean?",
    "options": [
     "two",
     "three",
     "four"
    ],
    "answer": 1,
    "explain": "三 has three lines."
   },
   {
    "q": "How do you read 十?",
    "options": [
     "juu",
     "ichi",
     "roku"
    ],
    "answer": 0,
    "explain": "十 is じゅう (juu) = ten."
   },
   {
    "q": "How do you read 四時 (4 o'clock)?",
    "options": [
     "yoji",
     "yonji",
     "shiji"
    ],
    "answer": 0,
    "explain": "4 o'clock is よじ."
   },
   {
    "q": "How do you read 五月?",
    "options": [
     "itsutsuki",
     "gotsuki",
     "gogatsu"
    ],
    "answer": 2,
    "explain": "五月 is May: ごがつ."
   },
   {
    "q": "What does 二十 mean?",
    "options": [
     "twelve",
     "twenty",
     "two"
    ],
    "answer": 1,
    "explain": "二 × 十 = 20."
   },
   {
    "q": "Which kanji is 八?",
    "options": [
     "六",
     "八",
     "九"
    ],
    "answer": 1,
    "explain": "八 is hachi, eight."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/ks-01-numbers-1-10.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/ks-01-numbers-1-10.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "big-numbers-money",
  "number": 2,
  "title": "Hundreds, Thousands and Yen",
  "time": "20 min",
  "summary": "Read 百, 千, 万, 円, 年 and 何 and use them for prices and years.",
  "objective": "By the end you can read prices like 三百円 and 一万円, and years like 二千二十六年.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Prices appear everywhere in Japan, and they are written with kanji and numbers. These six kanji unlock price tags, menus and dates."
    ]
   },
   {
    "type": "kana",
    "title": "The six kanji",
    "cols": 3,
    "items": [
     {
      "k": "百",
      "r": "hyaku"
     },
     {
      "k": "千",
      "r": "sen"
     },
     {
      "k": "万",
      "r": "man"
     },
     {
      "k": "円",
      "r": "en"
     },
     {
      "k": "年",
      "r": "nen"
     },
     {
      "k": "何",
      "r": "nan / nani"
     }
    ]
   },
   {
    "type": "words",
    "title": "Words to read",
    "items": [
     {
      "ja": "百円",
      "kana": "ひゃくえん",
      "romaji": "hyaku en",
      "en": "100 yen"
     },
     {
      "ja": "三百円",
      "kana": "さんびゃくえん",
      "romaji": "sanbyaku en",
      "en": "300 yen"
     },
     {
      "ja": "千円",
      "kana": "せんえん",
      "romaji": "sen en",
      "en": "1,000 yen"
     },
     {
      "ja": "五千円",
      "kana": "ごせんえん",
      "romaji": "gosen en",
      "en": "5,000 yen"
     },
     {
      "ja": "一万円",
      "kana": "いちまんえん",
      "romaji": "ichiman en",
      "en": "10,000 yen"
     },
     {
      "ja": "今年",
      "kana": "ことし",
      "romaji": "kotoshi",
      "en": "this year"
     },
     {
      "ja": "来年",
      "kana": "らいねん",
      "romaji": "rainen",
      "en": "next year"
     },
     {
      "ja": "何年",
      "kana": "なんねん",
      "romaji": "nannen",
      "en": "what year? how many years?"
     },
     {
      "ja": "二千二十六年",
      "kana": "にせんにじゅうろくねん",
      "romaji": "nisen nijuuroku nen",
      "en": "the year 2026"
     }
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: How much is it?",
    "lines": [
     {
      "who": "Alex",
      "ja": "すみません、これは いくら ですか。",
      "romaji": "Sumimasen, kore wa ikura desu ka.",
      "en": "Excuse me, how much is this?"
     },
     {
      "who": "Mika",
      "ja": "三百円 です。",
      "romaji": "Sanbyaku en desu.",
      "en": "It's 300 yen."
     },
     {
      "who": "Alex",
      "ja": "あれは いくら ですか。",
      "romaji": "Are wa ikura desu ka.",
      "en": "How much is that one?"
     },
     {
      "who": "Mika",
      "ja": "千二百円 です。",
      "romaji": "Sen nihyaku en desu.",
      "en": "It's 1,200 yen."
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "Sound changes in 百 and 千",
      "body": "百 is ひゃく, but 300 is さんびゃく, 600 is ろっぴゃく and 800 is はっぴゃく. 千 is せん, but 3,000 is さんぜん and 8,000 is はっせん. These changes make the words easier to say."
     },
     {
      "title": "一 before 万",
      "body": "10,000 is 一万 (いちまん). Unlike 百 and 千, you must say いち before 万. One yen at the till is 一円 (いちえん)."
     },
     {
      "title": "円 and 年",
      "body": "円 (えん) is the yen. 年 (ねん) means “year” and also counts years: 今年 (this year), 来年 (next year), 二千二十六年 (2026)."
     },
     {
      "title": "何 is the question kanji",
      "body": "何 asks “what” or “how many”: 何年 (what year), 何人 (how many people), 何円 (how many yen). It is read なん before most counters and なに alone."
     }
    ]
   },
   {
    "type": "tips",
    "title": "How to remember",
    "items": [
     "円 looks like a coin in a box, which matches its old meaning of “round”. 千 is like 十 with a slanted top, and 百 is white (白) with a line on top."
    ]
   }
  ],
  "quiz": [
   {
    "q": "How do you read 千円?",
    "options": [
     "man en",
     "sen en",
     "hyaku en"
    ],
    "answer": 1,
    "explain": "千 is せん."
   },
   {
    "q": "How do you read 三百円?",
    "options": [
     "sanhyaku en",
     "mitsuhyaku en",
     "sanbyaku en"
    ],
    "answer": 2,
    "explain": "300 is さんびゃく."
   },
   {
    "q": "What does 一万円 mean?",
    "options": [
     "100 yen",
     "1,000 yen",
     "10,000 yen"
    ],
    "answer": 2,
    "explain": "万 = 10,000."
   },
   {
    "q": "What does 今年 mean?",
    "options": [
     "last year",
     "next year",
     "this year"
    ],
    "answer": 2,
    "explain": "今年 = ことし = this year."
   },
   {
    "q": "Which kanji asks “what”?",
    "options": [
     "何",
     "円",
     "年"
    ],
    "answer": 0,
    "explain": "何 (なん / なに) means what."
   },
   {
    "q": "How do you read 年?",
    "options": [
     "man",
     "en",
     "nen"
    ],
    "answer": 2,
    "explain": "年 = ねん = year."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/ks-02-big-numbers-money.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/ks-02-big-numbers-money.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "days-of-the-week",
  "number": 3,
  "title": "Days of the Week",
  "time": "25 min",
  "summary": "Read the seven day-of-the-week kanji and the word 曜日.",
  "objective": "By the end you can read 月曜日 to 日曜日 and ask 何曜日ですか.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "The days of the week are named after the sun, the moon and the five classical elements. Once you know seven pictures you can read a whole calendar: 日 月 火 水 木 金 土."
    ]
   },
   {
    "type": "kana",
    "title": "Eight kanji",
    "cols": 4,
    "items": [
     {
      "k": "日",
      "r": "nichi / hi"
     },
     {
      "k": "月",
      "r": "getsu / tsuki"
     },
     {
      "k": "火",
      "r": "ka / hi"
     },
     {
      "k": "水",
      "r": "sui / mizu"
     },
     {
      "k": "木",
      "r": "moku / ki"
     },
     {
      "k": "金",
      "r": "kin / kane"
     },
     {
      "k": "土",
      "r": "do / tsuchi"
     },
     {
      "k": "曜",
      "r": "you"
     }
    ]
   },
   {
    "type": "words",
    "title": "Words to read",
    "items": [
     {
      "ja": "日曜日",
      "kana": "にちようび",
      "romaji": "nichiyoubi",
      "en": "Sunday"
     },
     {
      "ja": "月曜日",
      "kana": "げつようび",
      "romaji": "getsuyoubi",
      "en": "Monday"
     },
     {
      "ja": "火曜日",
      "kana": "かようび",
      "romaji": "kayoubi",
      "en": "Tuesday"
     },
     {
      "ja": "水曜日",
      "kana": "すいようび",
      "romaji": "suiyoubi",
      "en": "Wednesday"
     },
     {
      "ja": "木曜日",
      "kana": "もくようび",
      "romaji": "mokuyoubi",
      "en": "Thursday"
     },
     {
      "ja": "金曜日",
      "kana": "きんようび",
      "romaji": "kinyoubi",
      "en": "Friday"
     },
     {
      "ja": "土曜日",
      "kana": "どようび",
      "romaji": "doyoubi",
      "en": "Saturday"
     },
     {
      "ja": "何曜日",
      "kana": "なんようび",
      "romaji": "nanyoubi",
      "en": "what day of the week"
     },
     {
      "ja": "今日",
      "kana": "きょう",
      "romaji": "kyou",
      "en": "today"
     },
     {
      "ja": "水",
      "kana": "みず",
      "romaji": "mizu",
      "en": "water"
     },
     {
      "ja": "お金",
      "kana": "おかね",
      "romaji": "okane",
      "en": "money"
     }
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: What day is it?",
    "lines": [
     {
      "who": "Alex",
      "ja": "今日は 何曜日 ですか。",
      "romaji": "Kyou wa nanyoubi desu ka.",
      "en": "What day of the week is it today?"
     },
     {
      "who": "Mika",
      "ja": "火曜日 です。",
      "romaji": "Kayoubi desu.",
      "en": "It's Tuesday."
     },
     {
      "who": "Alex",
      "ja": "あしたは 水曜日 ですね。",
      "romaji": "Ashita wa suiyoubi desu ne.",
      "en": "So tomorrow is Wednesday."
     },
     {
      "who": "Mika",
      "ja": "はい。土曜日は やすみ です。",
      "romaji": "Hai. Doyoubi wa yasumi desu.",
      "en": "Yes. Saturday is a day off."
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "The pattern",
      "body": "Each day is one kanji + 曜日 (ようび). 日 (nichi) Sunday, 月 (getsu) Monday, 火 (ka) Tuesday, 水 (sui) Wednesday, 木 (moku) Thursday, 金 (kin) Friday, 土 (do) Saturday. The on readings are the ones you hear."
     },
     {
      "title": "Kanji with more than one job",
      "body": "日 also means “day” and “sun” (ひ), 月 means “moon” and “month” (つき, がつ), 水 is “water” (みず), 金 is “gold” or “money” (かね), 木 is “tree” (き), 土 is “earth” (つち). So 一月 is January, and お金 is money."
     },
     {
      "title": "今日 is irregular",
      "body": "今日 is read きょう, not こんにち. You will see it at the start of many sentences."
     }
    ]
   },
   {
    "type": "tips",
    "title": "How to remember",
    "items": [
     "火 looks like a flame, 水 like flowing water, 木 like a tree with branches and roots, and 土 like a mound with a flag. 日 is a window of sunlight and 月 is a crescent moon."
    ]
   }
  ],
  "quiz": [
   {
    "q": "What does 火 mean?",
    "options": [
     "water",
     "tree",
     "fire"
    ],
    "answer": 2,
    "explain": "火 looks like a flame."
   },
   {
    "q": "How do you read 月曜日?",
    "options": [
     "getsuyoubi",
     "gatsuyoubi",
     "tsukiyoubi"
    ],
    "answer": 0,
    "explain": "月曜日 = Monday = げつようび."
   },
   {
    "q": "Which day is 土曜日?",
    "options": [
     "Sunday",
     "Thursday",
     "Saturday"
    ],
    "answer": 2,
    "explain": "土 = earth = Saturday."
   },
   {
    "q": "How do you read 今日?",
    "options": [
     "ima hi",
     "kyou",
     "konnichi"
    ],
    "answer": 1,
    "explain": "今日 = きょう = today."
   },
   {
    "q": "What does 何曜日 ask?",
    "options": [
     "What day of the week?",
     "What month?",
     "What time?"
    ],
    "answer": 0,
    "explain": "何 = what, 曜日 = day of the week."
   },
   {
    "q": "What does お金 mean?",
    "options": [
     "gold bar",
     "water",
     "money"
    ],
    "answer": 2,
    "explain": "金 can mean gold or money; お金 is money."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/ks-03-days-of-the-week.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/ks-03-days-of-the-week.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "people-and-school",
  "number": 4,
  "title": "People and School",
  "time": "25 min",
  "summary": "Read 人, 男, 女, 子, 先, 生, 学 and 友 in words like 先生, 学生 and 友だち.",
  "objective": "By the end you can read the words for person, teacher, student, friend and child.",
  "premium": true
 },
 {
  "id": "nature-and-weather",
  "number": 5,
  "title": "Nature and Weather",
  "time": "25 min",
  "summary": "Read 山, 川, 田, 雨, 空, 花, 天 and 気 and talk about the weather.",
  "objective": "By the end you can read mountain, river, rain, sky, flower and the word 天気.",
  "premium": true
 },
 {
  "id": "size-and-position",
  "number": 6,
  "title": "Size and Position",
  "time": "25 min",
  "summary": "Read 上, 下, 中, 大, 小, 左, 右 and 外 and use them for size and directions.",
  "objective": "By the end you can read big, small, up, down, left, right, inside and outside.",
  "premium": true
 },
 {
  "id": "everyday-actions",
  "number": 7,
  "title": "Everyday Actions",
  "time": "25 min",
  "summary": "Read the kanji for see, eat, drink, go, come, exit, enter and rest in verbs and signs.",
  "objective": "By the end you can read 見ます, 食べます, 飲みます, 行きます, 来ます and signs like 出口 and 入口.",
  "premium": true
 },
 {
  "id": "time-places-things",
  "number": 8,
  "title": "Time, Places and Things",
  "time": "25 min",
  "summary": "Read 時, 分, 午, 前, 後, 本, 車 and 駅 for clock times, books, cars and stations.",
  "objective": "By the end you can read times like 午後三時十五分 and words like 日本, 本, 車 and 駅.",
  "premium": true
 }
];
