// Travel Japanese: lessons 1-3 in full; later lessons are premium and live on the server (title and summary only here).
// Full lesson source is in the private repo (see README, "Premium courses").
export const travelLessons = [
 {
  "id": "at-the-station",
  "number": 1,
  "title": "At the Station",
  "time": "25 min",
  "summary": "Ask the price, the platform and the departure time, and understand the answers.",
  "objective": "By the end you can buy a ticket, ask for a platform number and ask when a train leaves.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Trains are the best way to travel in Japan, and station staff are used to helpful questions from visitors. Three questions solve most situations: how much, which platform and what time. Mika plays the station staff member."
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: Buying a ticket",
    "lines": [
     {
      "who": "Alex",
      "ja": "すみません、とうきょうまで いくら ですか。",
      "romaji": "Sumimasen, Toukyou made ikura desu ka.",
      "en": "Excuse me, how much is it to Tokyo?"
     },
     {
      "who": "Mika",
      "ja": "せん にひゃく えん です。",
      "romaji": "Sen nihyaku en desu.",
      "en": "It's 1,200 yen."
     },
     {
      "who": "Alex",
      "ja": "なんばんせん ですか。",
      "romaji": "Nanbansen desu ka.",
      "en": "Which platform is it?"
     },
     {
      "who": "Mika",
      "ja": "さんばんせん です。",
      "romaji": "Sanbansen desu.",
      "en": "Platform 3."
     },
     {
      "who": "Alex",
      "ja": "なんじに でますか。",
      "romaji": "Nanji ni demasu ka.",
      "en": "What time does it leave?"
     },
     {
      "who": "Mika",
      "ja": "じゅうじ じゅうごふんに でます。",
      "romaji": "Juuji juugofun ni demasu.",
      "en": "It leaves at 10:15."
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
      "ja": "きっぷ",
      "kana": "",
      "romaji": "kippu",
      "en": "ticket"
     },
     {
      "ja": "〜まで",
      "kana": "",
      "romaji": "-made",
      "en": "to, as far as, until"
     },
     {
      "ja": "いくら",
      "kana": "",
      "romaji": "ikura",
      "en": "how much"
     },
     {
      "ja": "〜ばんせん",
      "kana": "",
      "romaji": "-bansen",
      "en": "platform number ~"
     },
     {
      "ja": "でます",
      "kana": "",
      "romaji": "demasu",
      "en": "leave, depart"
     },
     {
      "ja": "つきます",
      "kana": "",
      "romaji": "tsukimasu",
      "en": "arrive"
     },
     {
      "ja": "かたみち",
      "kana": "",
      "romaji": "katamichi",
      "en": "one-way"
     },
     {
      "ja": "おうふく",
      "kana": "",
      "romaji": "oufuku",
      "en": "round trip"
     },
     {
      "ja": "しんかんせん",
      "kana": "",
      "romaji": "shinkansen",
      "en": "bullet train"
     },
     {
      "ja": "ICカード",
      "kana": "",
      "romaji": "AI kaado",
      "en": "IC card (e.g. Suica)"
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "〜まで: as far as",
      "body": "Put the destination before まで: とうきょうまで (to Tokyo). Add いくら ですか for the price: とうきょうまで いくら ですか。 Ask the time with なんじに でますか。"
     },
     {
      "title": "Platform numbers",
      "body": "Add ばんせん after a number: いちばんせん (1), にばんせん (2), さんばんせん (3). Ask with なんばんせん ですか。"
     },
     {
      "title": "IC cards save time",
      "body": "Most visitors use a rechargeable IC card (like Suica or Pasmo) instead of buying paper tickets for local trains. You tap it at the gate and at the exit. For long trips such as the shinkansen you still buy a きっぷ."
     }
    ]
   },
   {
    "type": "tips",
    "title": "Tip",
    "items": [
     "Train times in Japan are very precise. If the timetable says 10:15, the train will leave at 10:15, so arrive a few minutes early."
    ]
   }
  ],
  "quiz": [
   {
    "q": "How do you ask “How much is it to Tokyo?”",
    "options": [
     "とうきょうまで いくら ですか。",
     "とうきょうまで なんじ ですか。",
     "とうきょうを いくら ですか。"
    ],
    "answer": 0,
    "explain": "〜まで marks the destination."
   },
   {
    "q": "What does さんばんせん mean?",
    "options": [
     "platform 3",
     "3 yen",
     "train 3"
    ],
    "answer": 0,
    "explain": "〜ばんせん = platform number."
   },
   {
    "q": "How do you ask what time it leaves?",
    "options": [
     "なんばんせん でますか。",
     "なんじに でますか。",
     "なんじ いきますか。"
    ],
    "answer": 1,
    "explain": "なんじに = at what time."
   },
   {
    "q": "What does おうふく mean?",
    "options": [
     "round trip",
     "one-way",
     "platform"
    ],
    "answer": 0,
    "explain": "おうふく = round trip; かたみち = one-way."
   },
   {
    "q": "What does きっぷ mean?",
    "options": [
     "station",
     "train",
     "ticket"
    ],
    "answer": 2,
    "explain": "きっぷ = ticket."
   },
   {
    "q": "What is しんかんせん?",
    "options": [
     "the bullet train",
     "a taxi",
     "a local bus"
    ],
    "answer": 0,
    "explain": "しんかんせん is Japan's high-speed train."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/tj-01-at-the-station.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/tj-01-at-the-station.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "taking-a-taxi",
  "number": 2,
  "title": "Taking a Taxi",
  "time": "20 min",
  "summary": "Give an address, ask how long it takes and ask the driver to stop.",
  "objective": "By the end you can ask a taxi to take you somewhere and ask how long it will take.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Taxis in Japan are clean, safe and very polite. The back door opens and closes automatically, so do not touch it. Tipping is not expected. Alex shows the driver an address on his phone and Mika plays the driver."
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: To the hotel",
    "lines": [
     {
      "who": "Alex",
      "ja": "すみません、この じゅうしょまで おねがいします。",
      "romaji": "Sumimasen, kono juusho made onegaishimasu.",
      "en": "Excuse me, to this address please."
     },
     {
      "who": "Mika",
      "ja": "はい、わかりました。",
      "romaji": "Hai, wakarimashita.",
      "en": "Yes, understood."
     },
     {
      "who": "Alex",
      "ja": "どのくらい かかりますか。",
      "romaji": "Dono kurai kakarimasu ka.",
      "en": "About how long will it take?"
     },
     {
      "who": "Mika",
      "ja": "じゅうごふん ぐらい です。",
      "romaji": "Juugofun gurai desu.",
      "en": "About fifteen minutes."
     },
     {
      "who": "Alex",
      "ja": "いくら ぐらい ですか。",
      "romaji": "Ikura gurai desu ka.",
      "en": "About how much is it?"
     },
     {
      "who": "Mika",
      "ja": "せん ごひゃく えん ぐらい です。",
      "romaji": "Sen gohyaku en gurai desu.",
      "en": "About 1,500 yen."
     },
     {
      "who": "Alex",
      "ja": "ここで とめて ください。",
      "romaji": "Koko de tomete kudasai.",
      "en": "Please stop here."
     }
    ]
   },
   {
    "type": "words",
    "title": "Vocabulary",
    "items": [
     {
      "ja": "タクシー",
      "kana": "",
      "romaji": "takushii",
      "en": "taxi"
     },
     {
      "ja": "じゅうしょ",
      "kana": "",
      "romaji": "juusho",
      "en": "address"
     },
     {
      "ja": "おねがいします",
      "kana": "",
      "romaji": "onegaishimasu",
      "en": "please (a request)"
     },
     {
      "ja": "わかりました",
      "kana": "",
      "romaji": "wakarimashita",
      "en": "I understand, understood"
     },
     {
      "ja": "どのくらい",
      "kana": "",
      "romaji": "dono kurai",
      "en": "about how long / how much"
     },
     {
      "ja": "かかります",
      "kana": "",
      "romaji": "kakarimasu",
      "en": "take (time or money)"
     },
     {
      "ja": "〜ぐらい",
      "kana": "",
      "romaji": "-gurai",
      "en": "about, approximately"
     },
     {
      "ja": "ここで とめて ください",
      "kana": "",
      "romaji": "koko de tomete kudasai",
      "en": "please stop here"
     },
     {
      "ja": "まっすぐ",
      "kana": "",
      "romaji": "massugu",
      "en": "straight ahead"
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "Place + まで + おねがいします",
      "body": "The simplest taxi sentence is destination + まで おねがいします: えきまで おねがいします (To the station, please). Show an address on your phone to be safe."
     },
     {
      "title": "かかります and ぐらい",
      "body": "かかります means that time or money is needed: どのくらい かかりますか (How long does it take?). Add ぐらい after a number for “about”: じゅうごふん ぐらい (about fifteen minutes)."
     },
     {
      "title": "Set phrases with ください",
      "body": "ここで とめて ください (please stop here) and まっすぐ いって ください (please go straight) are useful set phrases. Learn them whole for now; the て-form comes in a later course."
     }
    ]
   },
   {
    "type": "tips",
    "title": "Culture note",
    "items": [
     "Wait for the driver to open the door. Do not slam it. Paying by IC card or card is common, but ask first: カードで はらえますか。 (Can I pay by card?)."
    ]
   }
  ],
  "quiz": [
   {
    "q": "How do you say “To the station, please”?",
    "options": [
     "えきに ありがとう。",
     "えきまで おねがいします。",
     "えきを おねがいします。"
    ],
    "answer": 1,
    "explain": "Destination + まで + おねがいします."
   },
   {
    "q": "What does どのくらい かかりますか ask?",
    "options": [
     "Where is it?",
     "How long does it take?",
     "Who is it?"
    ],
    "answer": 1,
    "explain": "かかります = takes (time)."
   },
   {
    "q": "What does ぐらい mean?",
    "options": [
     "never",
     "exactly",
     "about"
    ],
    "answer": 2,
    "explain": "ぐらい = about, approximately."
   },
   {
    "q": "What does わかりました mean?",
    "options": [
     "I'm sorry",
     "I'm hungry",
     "I understand"
    ],
    "answer": 2,
    "explain": "わかりました = understood."
   },
   {
    "q": "How do you say “Please stop here”?",
    "options": [
     "ここは とまります。",
     "ここを いきます。",
     "ここで とめて ください。"
    ],
    "answer": 2,
    "explain": "ここで とめて ください."
   },
   {
    "q": "What does じゅうしょ mean?",
    "options": [
     "station",
     "price",
     "address"
    ],
    "answer": 2,
    "explain": "じゅうしょ = address."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/tj-02-taking-a-taxi.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/tj-02-taking-a-taxi.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "hotel-check-in",
  "number": 3,
  "title": "Hotel Check-In",
  "time": "25 min",
  "summary": "Check in, ask about breakfast times and get the Wi-Fi password and your room number.",
  "objective": "By the end you can check in and ask the most common hotel questions.",
  "blocks": [
   {
    "type": "text",
    "title": "Warm-up",
    "paras": [
     "Hotel staff in Japan speak very politely, so you will hear long, formal sentences. You only need a few short phrases to reply. Mika plays the front desk."
    ]
   },
   {
    "type": "dialogue",
    "title": "Dialogue: Checking in",
    "lines": [
     {
      "who": "Alex",
      "ja": "こんにちは。チェックインを おねがいします。",
      "romaji": "Konnichiwa. Chekkuin o onegaishimasu.",
      "en": "Hello. Check-in, please."
     },
     {
      "who": "Mika",
      "ja": "おなまえを おねがいします。",
      "romaji": "Onamae o onegaishimasu.",
      "en": "Your name, please."
     },
     {
      "who": "Alex",
      "ja": "アレックスです。",
      "romaji": "Arekkusu desu.",
      "en": "It's Alex."
     },
     {
      "who": "Mika",
      "ja": "はい、にはくの ごよやくですね。",
      "romaji": "Hai, nihaku no goyoyaku desu ne.",
      "en": "Yes, a two-night reservation."
     },
     {
      "who": "Alex",
      "ja": "あさごはんは なんじから ですか。",
      "romaji": "Asagohan wa nanji kara desu ka.",
      "en": "From what time is breakfast?"
     },
     {
      "who": "Mika",
      "ja": "しちじから くじまで です。",
      "romaji": "Shichiji kara kuji made desu.",
      "en": "From seven to nine."
     },
     {
      "who": "Alex",
      "ja": "ワイファイの パスワードを おしえて ください。",
      "romaji": "Waifai no pasuwaado o oshiete kudasai.",
      "en": "Please tell me the Wi-Fi password."
     },
     {
      "who": "Mika",
      "ja": "これです。おへやは ごかいの ごひゃくにごうしつ です。",
      "romaji": "Kore desu. Oheya wa gokai no gohyaku nigoushitsu desu.",
      "en": "Here it is. Your room is 502 on the fifth floor."
     }
    ]
   },
   {
    "type": "words",
    "title": "Vocabulary",
    "items": [
     {
      "ja": "チェックイン / チェックアウト",
      "kana": "",
      "romaji": "chekkuin / chekkuauto",
      "en": "check-in / check-out"
     },
     {
      "ja": "よやく",
      "kana": "",
      "romaji": "yoyaku",
      "en": "reservation"
     },
     {
      "ja": "〜はく",
      "kana": "",
      "romaji": "-haku",
      "en": "nights (にはく 2 nights)"
     },
     {
      "ja": "あさごはん",
      "kana": "",
      "romaji": "asagohan",
      "en": "breakfast"
     },
     {
      "ja": "〜から 〜まで",
      "kana": "",
      "romaji": "-kara -made",
      "en": "from ~ to ~"
     },
     {
      "ja": "パスワード",
      "kana": "",
      "romaji": "pasuwaado",
      "en": "password"
     },
     {
      "ja": "おしえて ください",
      "kana": "",
      "romaji": "oshiete kudasai",
      "en": "please tell me / teach me"
     },
     {
      "ja": "へや",
      "kana": "",
      "romaji": "heya",
      "en": "room"
     },
     {
      "ja": "〜かい",
      "kana": "",
      "romaji": "-kai",
      "en": "floor (ごかい 5th floor)"
     },
     {
      "ja": "〜ごうしつ",
      "kana": "",
      "romaji": "-goushitsu",
      "en": "room number ~"
     }
    ]
   },
   {
    "type": "points",
    "title": "Grammar and usage",
    "items": [
     {
      "title": "から and まで for ranges",
      "body": "から means “from” and まで means “until”: しちじから くじまで (from seven to nine). Use them for opening hours, breakfast times and check-out times."
     },
     {
      "title": "Counting nights and floors",
      "body": "Add はく for nights: いっぱく (1), にはく (2), さんぱく (3). Add かい for floors: いっかい (1st), にかい (2nd), ごかい (5th). Some counters change their sound, so learn them as they come."
     },
     {
      "title": "おしえて ください",
      "body": "To ask someone to tell you something, say Thing を おしえて ください. It works for passwords, directions and names: みちを おしえて ください。"
     },
     {
      "title": "The polite お",
      "body": "Hotel staff add お to many nouns to be polite: おなまえ (your name), おへや (your room). You do not need to add it for yourself."
     }
    ]
   },
   {
    "type": "tips",
    "title": "Tip",
    "items": [
     "Check-out is usually around 10:00 or 11:00. If you want to leave your luggage, ask: にもつを あずかって ください。 (Please keep my luggage.)"
    ]
   }
  ],
  "quiz": [
   {
    "q": "How do you ask for check-in?",
    "options": [
     "チェックインに ありがとう。",
     "チェックインは いきます。",
     "チェックインを おねがいします。"
    ],
    "answer": 2,
    "explain": "Thing + を + おねがいします."
   },
   {
    "q": "What does しちじから くじまで mean?",
    "options": [
     "at seven or nine",
     "seven times nine",
     "from seven to nine o'clock"
    ],
    "answer": 2,
    "explain": "から = from, まで = until."
   },
   {
    "q": "What does にはく mean?",
    "options": [
     "two nights",
     "two rooms",
     "two floors"
    ],
    "answer": 0,
    "explain": "〜はく counts nights."
   },
   {
    "q": "How do you ask for the Wi-Fi password?",
    "options": [
     "パスワードを おしえて ください。",
     "パスワードを たべて ください。",
     "パスワードは どこ ください。"
    ],
    "answer": 0,
    "explain": "おしえて ください = please tell me."
   },
   {
    "q": "What does あさごはん mean?",
    "options": [
     "dinner",
     "breakfast",
     "check-out"
    ],
    "answer": 1,
    "explain": "あさごはん = breakfast."
   },
   {
    "q": "What does ごかい mean in a hotel?",
    "options": [
     "fifth floor",
     "five nights",
     "five rooms"
    ],
    "answer": 0,
    "explain": "〜かい counts floors."
   }
  ],
  "video": {
   "src": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/tj-03-hotel-check-in.mp4",
   "poster": "https://sabaghanbarlo-hash.github.io/tiny-japanese-youtube/videos/tj-03-hotel-check-in.thumbnail.png",
   "note": "Animated lesson video with Mika and Alex: story, vocabulary, grammar and a quiz."
  }
 },
 {
  "id": "convenience-store",
  "number": 4,
  "title": "At the Convenience Store",
  "time": "20 min",
  "summary": "Answer the cashier's usual questions and pay for your snacks, drinks and lunch.",
  "objective": "By the end you can handle a full convenience store checkout in Japanese.",
  "premium": true
 },
 {
  "id": "at-the-restaurant",
  "number": 5,
  "title": "At the Restaurant",
  "time": "25 min",
  "summary": "Get a table, ask for the menu and recommendations, order, and ask for the bill.",
  "objective": "By the end you can eat at a restaurant in Japan from welcome to payment.",
  "premium": true
 },
 {
  "id": "shopping-tax-free",
  "number": 6,
  "title": "Shopping and Tax-Free",
  "time": "25 min",
  "summary": "Ask for sizes, try things on and ask whether something is tax-free.",
  "objective": "By the end you can shop in a department store and ask about tax-free prices.",
  "premium": true
 },
 {
  "id": "when-youre-lost",
  "number": 7,
  "title": "When You're Lost",
  "time": "25 min",
  "summary": "Ask for directions, understand left, right and straight, and ask someone to repeat.",
  "objective": "By the end you can ask the way and follow simple directions.",
  "premium": true
 },
 {
  "id": "emergencies-and-health",
  "number": 8,
  "title": "Emergencies and Health",
  "time": "25 min",
  "summary": "Ask for help, say where it hurts, mention allergies and know the emergency numbers.",
  "objective": "By the end you can ask for help and explain simple health problems.",
  "premium": true
 }
];
