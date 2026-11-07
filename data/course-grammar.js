// Grammar Starter: lessons 1-3 in full; later lessons are premium and live on the server (title and summary only here).
// Full lesson source is in the private repo (see README, "Premium courses").
export const grammarLessons = [
 {
  "id": "desu-and-wa",
  "number": 1,
  "title": "です and は: A is B",
  "time": "20 min",
  "summary": "Say who and what things are with は and です, ask questions with か and say no with じゃ ありません.",
  "objective": "By the end you can make simple “A is B” sentences, ask yes/no questions and answer with はい or いいえ.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Japanese puts です at the end of the sentence, and the little word は marks the topic: what you are talking about. A は B です means “A is B”. Mika and Alex use this one pattern for almost everything in this lesson."
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: Who are you?",
    "lines": [
     {
      "who": "Mika",
      "ja": "わたしは こうこうせい です。",
      "romaji": "Watashi wa koukousei desu.",
      "en": "I am a high school student."
     },
     {
      "who": "Alex",
      "ja": "そう ですか。わたしは エンジニア です。",
      "romaji": "Sou desu ka. Watashi wa enjinia desu.",
      "en": "I see. I am an engineer."
     },
     {
      "who": "Mika",
      "ja": "アレックスさんは にほんじん ですか。",
      "romaji": "Arekkusu-san wa nihonjin desu ka.",
      "en": "Are you Japanese, Alex?"
     },
     {
      "who": "Alex",
      "ja": "いいえ、にほんじん じゃ ありません。アメリカじん です。",
      "romaji": "Iie, nihonjin ja arimasen. Amerikajin desu.",
      "en": "No, I'm not Japanese. I'm American."
     },
     {
      "who": "Mika",
      "ja": "ミカは がくせい です。アレックスさんは がくせい ですか。",
      "romaji": "Mika wa gakusei desu. Arekkusu-san wa gakusei desu ka.",
      "en": "I'm a student. Are you a student?"
     },
     {
      "who": "Alex",
      "ja": "いいえ、わたしは がくせい じゃ ありません。",
      "romaji": "Iie, watashi wa gakusei ja arimasen.",
      "en": "No, I'm not a student."
     }
    ]
   },
   {
    "type": "words",
    "title": "Vocabulary",
    "items": [
     {
      "ja": "わたし",
      "kana": "",
      "romaji": "watashi",
      "en": "I, me"
     },
     {
      "ja": "〜さん",
      "kana": "",
      "romaji": "-san",
      "en": "Mr, Ms (added to names)"
     },
     {
      "ja": "がくせい",
      "kana": "",
      "romaji": "gakusei",
      "en": "student"
     },
     {
      "ja": "こうこうせい",
      "kana": "",
      "romaji": "koukousei",
      "en": "high school student"
     },
     {
      "ja": "せんせい",
      "kana": "",
      "romaji": "sensei",
      "en": "teacher"
     },
     {
      "ja": "かいしゃいん",
      "kana": "",
      "romaji": "kaishain",
      "en": "office worker"
     },
     {
      "ja": "エンジニア",
      "kana": "",
      "romaji": "enjinia",
      "en": "engineer"
     },
     {
      "ja": "にほんじん",
      "kana": "",
      "romaji": "nihonjin",
      "en": "Japanese person"
     },
     {
      "ja": "アメリカじん",
      "kana": "",
      "romaji": "Amerikajin",
      "en": "American person"
     },
     {
      "ja": "そう ですか",
      "kana": "",
      "romaji": "sou desu ka",
      "en": "I see / is that so?"
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "A は B です",
      "body": "Put the topic first, then は, then the noun, then です. です is the polite “is / am / are”. Notice that は is read “wa” when it is a particle: わたしは がくせい です (Watashi wa gakusei desu)."
     },
     {
      "title": "か turns it into a question",
      "body": "Add か at the end: にほんじん ですか。 There is no need for a question mark, and your voice usually rises a little. Answer with はい (yes) or いいえ (no)."
     },
     {
      "title": "じゃ ありません is “is not”",
      "body": "To say no, change です to じゃ ありません: がくせい じゃ ありません. In careful writing you will also see では ありません, which means the same thing."
     },
     {
      "title": "You can leave out “I”",
      "body": "Japanese drops words that are obvious. がくせい です already means “I am a student” when you are talking about yourself. Use a name plus さん instead of “you”: アレックスさんは …"
     }
    ]
   },
   {
    "type": "tips",
    "title": "Culture note",
    "items": [
     "Never add さん to your own name. さん is a polite title for other people. You say ミカ です or わたしは ミカ です."
    ]
   }
  ],
  "quiz": [
   {
    "q": "How do you say “I am a student”?",
    "options": [
     "わたしは がくせい か。",
     "わたしを がくせい です。",
     "わたしは がくせい です。"
    ],
    "answer": 2,
    "explain": "A は B です: topic, は, noun, です."
   },
   {
    "q": "How is は read in わたしは?",
    "options": [
     "ha",
     "wa",
     "o"
    ],
    "answer": 1,
    "explain": "As a particle, は is read “wa”."
   },
   {
    "q": "Which word turns a sentence into a question?",
    "options": [
     "か",
     "は",
     "です"
    ],
    "answer": 0,
    "explain": "Add か at the end."
   },
   {
    "q": "How do you say “I am not a teacher”?",
    "options": [
     "せんせい です か。",
     "せんせい は です。",
     "せんせい じゃ ありません。"
    ],
    "answer": 2,
    "explain": "じゃ ありません is the polite negative of です。"
   },
   {
    "q": "Which title do you add to someone else's name?",
    "options": [
     "さん",
     "の",
     "です"
    ],
    "answer": 0,
    "explain": "さん is a polite title for other people, never for yourself."
   },
   {
    "q": "What does そう ですか mean?",
    "options": [
     "I see / is that so?",
     "I don't know",
     "Good morning"
    ],
    "answer": 0,
    "explain": "そう ですか is a very common reaction while listening."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/gs-01-desu-and-wa.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/gs-01-desu-and-wa.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "this-that-where",
  "number": 2,
  "title": "This, That and Where",
  "time": "20 min",
  "summary": "Point at things and places with これ, それ, あれ, ここ, そこ, あそこ and ask what or where something is.",
  "objective": "By the end you can ask “What is this?” and “Where is it?” and understand the answers.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Japanese has a tidy set of pointing words that start with こ, そ, あ and ど. こ means near me, そ means near you, あ means far from both of us, and ど means “which” or “where”. Learn the pattern once and you get a whole family of words."
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: At school",
    "lines": [
     {
      "who": "Alex",
      "ja": "すみません、これは なん ですか。",
      "romaji": "Sumimasen, kore wa nan desu ka.",
      "en": "Excuse me, what is this?"
     },
     {
      "who": "Mika",
      "ja": "それは けしゴム です。",
      "romaji": "Sore wa keshigomu desu.",
      "en": "That is an eraser."
     },
     {
      "who": "Alex",
      "ja": "あれは なん ですか。",
      "romaji": "Are wa nan desu ka.",
      "en": "What is that over there?"
     },
     {
      "who": "Mika",
      "ja": "あれは とけい です。",
      "romaji": "Are wa tokei desu.",
      "en": "That is a clock."
     },
     {
      "who": "Alex",
      "ja": "トイレは どこ ですか。",
      "romaji": "Toire wa doko desu ka.",
      "en": "Where is the restroom?"
     },
     {
      "who": "Mika",
      "ja": "あそこ です。あの ドアの よこ です。",
      "romaji": "Asoko desu. Ano doa no yoko desu.",
      "en": "It's over there. It's next to that door."
     },
     {
      "who": "Alex",
      "ja": "ありがとう ございます。",
      "romaji": "Arigatou gozaimasu.",
      "en": "Thank you very much."
     }
    ]
   },
   {
    "type": "words",
    "title": "Vocabulary",
    "items": [
     {
      "ja": "これ / それ / あれ",
      "kana": "",
      "romaji": "kore / sore / are",
      "en": "this / that / that over there"
     },
     {
      "ja": "どれ",
      "kana": "",
      "romaji": "dore",
      "en": "which one"
     },
     {
      "ja": "この / その / あの",
      "kana": "",
      "romaji": "kono / sono / ano",
      "en": "this / that / that over there (+ noun)"
     },
     {
      "ja": "ここ / そこ / あそこ",
      "kana": "",
      "romaji": "koko / soko / asoko",
      "en": "here / there / over there"
     },
     {
      "ja": "どこ",
      "kana": "",
      "romaji": "doko",
      "en": "where"
     },
     {
      "ja": "なん",
      "kana": "",
      "romaji": "nan",
      "en": "what"
     },
     {
      "ja": "けしゴム",
      "kana": "",
      "romaji": "keshigomu",
      "en": "eraser"
     },
     {
      "ja": "とけい",
      "kana": "",
      "romaji": "tokei",
      "en": "clock, watch"
     },
     {
      "ja": "トイレ",
      "kana": "",
      "romaji": "toire",
      "en": "restroom"
     },
     {
      "ja": "よこ",
      "kana": "",
      "romaji": "yoko",
      "en": "next to, beside"
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "The こそあど system",
      "body": "こ = close to the speaker, そ = close to the listener, あ = far from both, ど = question. これ, それ, あれ, どれ are things. ここ, そこ, あそこ, どこ are places."
     },
     {
      "title": "これ stands alone, この needs a noun",
      "body": "Use これ by itself: これは ほん です。 Use この with a noun right after it: この ほんは わたしの です。 The same goes for その and あの."
     },
     {
      "title": "What and where",
      "body": "Ask about things with なん ですか and about places with どこ ですか。 For “where is X?” say X は どこ ですか。 The answer can be ここ, そこ or あそこ です."
     },
     {
      "title": "Place words with の",
      "body": "To say “next to the door” put の between the two nouns: ドアの よこ. You will meet の properly in the next lesson."
     }
    ]
   },
   {
    "type": "tips",
    "title": "Tip",
    "items": [
     "Politeness helper: すみません at the start gets someone's attention, just like “excuse me” in English."
    ]
   }
  ],
  "quiz": [
   {
    "q": "Which word means “that over there” (far from both)?",
    "options": [
     "あれ",
     "これ",
     "それ"
    ],
    "answer": 0,
    "explain": "あ words are far from both speaker and listener."
   },
   {
    "q": "Which word means “here”?",
    "options": [
     "そこ",
     "ここ",
     "あそこ"
    ],
    "answer": 1,
    "explain": "ここ is the こ (near me) place word."
   },
   {
    "q": "What does どこ mean?",
    "options": [
     "who",
     "what",
     "where"
    ],
    "answer": 2,
    "explain": "どこ asks about a place."
   },
   {
    "q": "Which is correct?",
    "options": [
     "これ ほんは わたしの です。",
     "この ほんは わたしの です。",
     "それ ほんを わたしの です。"
    ],
    "answer": 1,
    "explain": "この needs a noun right after it."
   },
   {
    "q": "How do you ask “What is this?”",
    "options": [
     "これは どこ ですか。",
     "これは なん ですか。",
     "これは だれ ですか。"
    ],
    "answer": 1,
    "explain": "なん means “what”."
   },
   {
    "q": "What does ドアの よこ mean?",
    "options": [
     "inside the door",
     "on the door",
     "next to the door"
    ],
    "answer": 2,
    "explain": "よこ means next to or beside."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/gs-02-this-that-where.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/gs-02-this-that-where.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "no-mo-to",
  "number": 3,
  "title": "の, も and と",
  "time": "20 min",
  "summary": "Show whose something is with の, say “also” with も and join nouns with と.",
  "objective": "By the end you can say “my bag”, “Mika's book”, “this too” and “a pen and a notebook”.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Three tiny particles do a lot of work. の links two nouns (often “of” or “'s”), も means “also”, and と means “and”. Mika and Alex sort out whose things are on the table."
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: Whose is it?",
    "lines": [
     {
      "who": "Alex",
      "ja": "これは わたしの かばん です。",
      "romaji": "Kore wa watashi no kaban desu.",
      "en": "This is my bag."
     },
     {
      "who": "Mika",
      "ja": "それも アレックスさんの ですか。",
      "romaji": "Sore mo Arekkusu-san no desu ka.",
      "en": "Is that yours too?"
     },
     {
      "who": "Alex",
      "ja": "いいえ、それは ミカさんの です。",
      "romaji": "Iie, sore wa Mika-san no desu.",
      "en": "No, that is Mika's."
     },
     {
      "who": "Mika",
      "ja": "あ、そう です。わたしの ほん と ノート です。",
      "romaji": "A, sou desu. Watashi no hon to nooto desu.",
      "en": "Oh, that's right. It's my book and notebook."
     },
     {
      "who": "Alex",
      "ja": "これも ミカさんの ですか。",
      "romaji": "Kore mo Mika-san no desu ka.",
      "en": "Is this Mika's too?"
     },
     {
      "who": "Mika",
      "ja": "いいえ、それは アレックスさんの です。",
      "romaji": "Iie, sore wa Arekkusu-san no desu.",
      "en": "No, that's Alex's."
     }
    ]
   },
   {
    "type": "words",
    "title": "Vocabulary",
    "items": [
     {
      "ja": "かばん",
      "kana": "",
      "romaji": "kaban",
      "en": "bag"
     },
     {
      "ja": "ほん",
      "kana": "",
      "romaji": "hon",
      "en": "book"
     },
     {
      "ja": "ノート",
      "kana": "",
      "romaji": "nooto",
      "en": "notebook"
     },
     {
      "ja": "ペン",
      "kana": "",
      "romaji": "pen",
      "en": "pen"
     },
     {
      "ja": "さいふ",
      "kana": "",
      "romaji": "saifu",
      "en": "wallet"
     },
     {
      "ja": "けいたい",
      "kana": "",
      "romaji": "keitai",
      "en": "mobile phone"
     },
     {
      "ja": "ともだち",
      "kana": "",
      "romaji": "tomodachi",
      "en": "friend"
     },
     {
      "ja": "にほんごの ほん",
      "kana": "",
      "romaji": "nihongo no hon",
      "en": "a Japanese-language book"
     },
     {
      "ja": "わたしの",
      "kana": "",
      "romaji": "watashi no",
      "en": "my, mine"
     },
     {
      "ja": "〜さんの",
      "kana": "",
      "romaji": "-san no",
      "en": "someone's"
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "の links two nouns",
      "body": "A の B means “A's B” or “the B of A”: わたしの かばん (my bag), ミカさんの ほん (Mika's book), にほんごの ほん (a Japanese book). The order is the opposite of “book of Mika”: owner first."
     },
     {
      "title": "の can replace the noun",
      "body": "When the noun is obvious you can drop it and keep の: それは アレックスさんの です。 means “That is Alex's.”"
     },
     {
      "title": "も replaces は",
      "body": "も means “also, too”. Use it instead of は, not after it: わたしも がくせい です。 means “I am a student too.”"
     },
     {
      "title": "と joins nouns",
      "body": "と means “and” between nouns only: ほんと ノート, ペンと さいふ. It does not join sentences or verbs."
     }
    ]
   },
   {
    "type": "tips",
    "title": "Tip",
    "items": [
     "In the dialogue, ほん と ノート has spaces to show you the words. In normal writing there is no space: ほんと ノート."
    ]
   }
  ],
  "quiz": [
   {
    "q": "How do you say “my bag”?",
    "options": [
     "わたしと かばん",
     "かばんの わたし",
     "わたしの かばん"
    ],
    "answer": 2,
    "explain": "Owner first, then の, then the thing."
   },
   {
    "q": "Which particle means “also”?",
    "options": [
     "も",
     "の",
     "と"
    ],
    "answer": 0,
    "explain": "も = also, too."
   },
   {
    "q": "Which particle means “and” between nouns?",
    "options": [
     "と",
     "も",
     "は"
    ],
    "answer": 0,
    "explain": "と joins nouns."
   },
   {
    "q": "What does それは ミカさんの です mean?",
    "options": [
     "Mika is that.",
     "That is Mika's.",
     "That is Mika."
    ],
    "answer": 1,
    "explain": "の at the end replaces the noun: Mika's (one)."
   },
   {
    "q": "How do you say “I am a student too”?",
    "options": [
     "わたしと がくせい です。",
     "わたしも がくせい です。",
     "わたしは も がくせい です。"
    ],
    "answer": 1,
    "explain": "も replaces は."
   },
   {
    "q": "How do you say “a pen and a wallet”?",
    "options": [
     "ペンと さいふ",
     "ペンも さいふ",
     "ペンの さいふ"
    ],
    "answer": 0,
    "explain": "と joins two nouns."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/gs-03-no-mo-to.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/gs-03-no-mo-to.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "verbs-masu",
  "number": 4,
  "title": "Verbs with ます",
  "time": "25 min",
  "summary": "Use polite verbs like たべます and のみます, mark the object with を and say no with ません.",
  "objective": "By the end you can say what you eat, drink, watch and read, and say what you don't do.",
  "premium": true
 },
 {
  "id": "ni-de-he",
  "number": 5,
  "title": "に, で and へ: Time, Place and Direction",
  "time": "25 min",
  "summary": "Say when you do things, where you do them and where you go with に, で and へ.",
  "objective": "By the end you can say “I go to the library at two o'clock by bus” and “I study at the library”.",
  "premium": true
 },
 {
  "id": "i-adjectives",
  "number": 6,
  "title": "い-Adjectives",
  "time": "20 min",
  "summary": "Describe things with おいしい, たかい, おおきい and say they are not so with くない.",
  "objective": "By the end you can describe food, places and things and say “it isn't very big”.",
  "premium": true
 },
 {
  "id": "na-adjectives",
  "number": 7,
  "title": "な-Adjectives",
  "time": "20 min",
  "summary": "Use しずか, にぎやか, すき and other な-adjectives, and say what you like with が.",
  "objective": "By the end you can describe a town, say what you like and use な before a noun.",
  "premium": true
 },
 {
  "id": "past-tense",
  "number": 8,
  "title": "The Past Tense",
  "time": "25 min",
  "summary": "Talk about yesterday with ました, ませんでした, でした and かったです.",
  "objective": "By the end you can say what you did, what you didn't do and how something was.",
  "premium": true
 },
 {
  "id": "want-and-please",
  "number": 9,
  "title": "Wanting and Asking",
  "time": "25 min",
  "summary": "Say what you want with ほしい and たい, and ask for things with ください.",
  "objective": "By the end you can say “I want a phone”, “I want to eat ramen” and “One ramen, please”.",
  "premium": true
 }
];
