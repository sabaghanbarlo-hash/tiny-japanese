// Course 1: Hiragana Starter. Eleven short lessons that take you from zero to reading every hiragana character.
// Block types: text, kana (a chart), words, points (titled explanations), tips, dialogue.
import { kana, kanaQuiz, wordQuiz, ask } from "./quiz-tools.js";

const lesson = (o) => o;
const W = (ja, romaji, en) => ({ ja, romaji, en });

const vowels = kana("あ a|い i|う u|え e|お o");
const kRow = kana("か ka|き ki|く ku|け ke|こ ko");
const sRow = kana("さ sa|し shi|す su|せ se|そ so");
const tRow = kana("た ta|ち chi|つ tsu|て te|と to");
const nRow = kana("な na|に ni|ぬ nu|ね ne|の no");
const hRow = kana("は ha|ひ hi|ふ fu|へ he|ほ ho");
const mRow = kana("ま ma|み mi|む mu|め me|も mo");
const yRow = kana("や ya|-|ゆ yu|-|よ yo");
const rRow = kana("ら ra|り ri|る ru|れ re|ろ ro");
const wRow = kana("わ wa|を o|ん n");
const gRow = kana("が ga|ぎ gi|ぐ gu|げ ge|ご go");
const zRow = kana("ざ za|じ ji|ず zu|ぜ ze|ぞ zo");
const dRow = kana("だ da|ぢ ji|づ zu|で de|ど do");
const bRow = kana("ば ba|び bi|ぶ bu|べ be|ぼ bo");
const pRow = kana("ぱ pa|ぴ pi|ぷ pu|ぺ pe|ぽ po");

const w1 = [W("あい", "ai", "love"), W("いえ", "ie", "house"), W("うえ", "ue", "above, on top"), W("あお", "ao", "blue"), W("いいえ", "iie", "no"), W("ええ", "ee", "yes")];
const w2 = [W("かお", "kao", "face"), W("あき", "aki", "autumn"), W("いけ", "ike", "pond"), W("こえ", "koe", "voice"), W("えき", "eki", "station"), W("いく", "iku", "to go"), W("あかい", "akai", "red")];
const w3 = [W("あさ", "asa", "morning"), W("いす", "isu", "chair"), W("すし", "sushi", "sushi"), W("せき", "seki", "seat"), W("うそ", "uso", "lie"), W("かさ", "kasa", "umbrella"), W("しお", "shio", "salt"), W("あし", "ashi", "foot, leg"), W("すき", "suki", "like, fond of"), W("さけ", "sake", "rice wine, alcohol")];
const w4 = [W("たこ", "tako", "octopus"), W("つき", "tsuki", "moon"), W("くち", "kuchi", "mouth"), W("て", "te", "hand"), W("とけい", "tokei", "clock, watch"), W("うち", "uchi", "home, inside"), W("あした", "ashita", "tomorrow"), W("たかい", "takai", "high, expensive"), W("ちかい", "chikai", "near")];
const w5 = [W("ねこ", "neko", "cat"), W("いぬ", "inu", "dog"), W("なつ", "natsu", "summer"), W("にく", "niku", "meat"), W("さかな", "sakana", "fish"), W("なに", "nani", "what"), W("あなた", "anata", "you"), W("たのしい", "tanoshii", "fun, enjoyable"), W("ぬの", "nuno", "cloth")];
const w6 = [W("はな", "hana", "flower"), W("ひと", "hito", "person"), W("ふね", "fune", "ship, boat"), W("ほし", "hoshi", "star"), W("はし", "hashi", "chopsticks"), W("ふく", "fuku", "clothes"), W("ひくい", "hikui", "low"), W("へた", "heta", "unskilled, poor at"), W("ほしい", "hoshii", "want")];
const w7 = [W("うみ", "umi", "sea"), W("あめ", "ame", "rain"), W("め", "me", "eye"), W("みみ", "mimi", "ear"), W("もも", "momo", "peach"), W("やま", "yama", "mountain"), W("ゆき", "yuki", "snow"), W("ゆめ", "yume", "dream"), W("やすみ", "yasumi", "rest, day off"), W("まいにち", "mainichi", "every day"), W("むし", "mushi", "insect")];
const w8 = [W("さくら", "sakura", "cherry blossom"), W("くるま", "kuruma", "car"), W("ほん", "hon", "book"), W("みかん", "mikan", "mandarin orange"), W("わたし", "watashi", "I, me"), W("からて", "karate", "karate"), W("いろ", "iro", "colour"), W("ろく", "roku", "six"), W("れもん", "remon", "lemon"), W("にほん", "nihon", "Japan")];
const w9 = [W("ありがとう", "arigatou", "thank you"), W("ごはん", "gohan", "cooked rice, meal"), W("かばん", "kaban", "bag"), W("てがみ", "tegami", "letter"), W("さんぽ", "sanpo", "walk, stroll"), W("ぱん", "pan", "bread"), W("たべもの", "tabemono", "food"), W("まど", "mado", "window"), W("でぐち", "deguchi", "exit"), W("すごい", "sugoi", "amazing"), W("りんご", "ringo", "apple"), W("ともだち", "tomodachi", "friend"), W("ひらがな", "hiragana", "hiragana")];
const w10 = [W("きょう", "kyou", "today"), W("しゃしん", "shashin", "photo"), W("ちょっと", "chotto", "a little"), W("がっこう", "gakkou", "school"), W("ざっし", "zasshi", "magazine"), W("きって", "kitte", "postage stamp"), W("おちゃ", "ocha", "tea"), W("ひゃく", "hyaku", "one hundred"), W("りょこう", "ryokou", "trip, travel"), W("びょういん", "byouin", "hospital"), W("でんしゃ", "densha", "train"), W("おかあさん", "okaasan", "mother"), W("おにいさん", "oniisan", "older brother"), W("ゆうめい", "yuumei", "famous"), W("おおきい", "ookii", "big")];

const combos = [
  ...kana("きゃ kya|きゅ kyu|きょ kyo"), ...kana("しゃ sha|しゅ shu|しょ sho"), ...kana("ちゃ cha|ちゅ chu|ちょ cho"),
  ...kana("にゃ nya|にゅ nyu|にょ nyo"), ...kana("ひゃ hya|ひゅ hyu|ひょ hyo"), ...kana("みゃ mya|みゅ myu|みょ myo"),
  ...kana("りゃ rya|りゅ ryu|りょ ryo"), ...kana("ぎゃ gya|ぎゅ gyu|ぎょ gyo"), ...kana("じゃ ja|じゅ ju|じょ jo"),
  ...kana("びゃ bya|びゅ byu|びょ byo"), ...kana("ぴゃ pya|ぴゅ pyu|ぴょ pyo")
];

const practice = (title = "How to practise") => ({ type: "tips", title, items: [
  "Say each sound out loud as you read it. Reading silently is much slower for building memory.",
  "Write each new character about ten times on paper, following the stroke order from a reliable chart. Writing helps you notice the small differences between similar characters.",
  "Cover the romaji column and try to read the characters, then check yourself. This is what the quiz at the end of every lesson does too."
] });

export const hiraganaLessons = [
  lesson({
    id: "meet-hiragana", number: 1, title: "Meet Hiragana: The Vowels", time: "15 min",
    summary: "How Japanese writing works, and your first five characters: あ い う え お.",
    objective: "By the end you can read and say the five vowels and a handful of real Japanese words.",
    blocks: [
      { type: "text", title: "Three scripts, one language", paras: [
        "Japanese is written with three scripts that work together. Hiragana is the first one you learn: 46 simple characters that cover every sound in the language. Katakana is a second set of characters, used mainly for foreign words and names. Kanji are characters borrowed from Chinese that carry meaning.",
        "We start with hiragana because it is the base for everything else. Beginner lessons, children's books, and the readings printed above kanji all use it.",
        "Good news: hiragana is regular. One character is one syllable, and it is always pronounced the same way. There is no spelling chaos like English."
      ] },
      { type: "kana", title: "The five vowels", items: vowels },
      { type: "points", title: "How to say them", items: [
        { title: "あ — a", body: "Like the “a” in “father”. Open your mouth fully." },
        { title: "い — i", body: "Like the “ee” in “see”, but short." },
        { title: "う — u", body: "Like the “oo” in “moon”, but with relaxed lips: don't push them forward." },
        { title: "え — e", body: "Like the “e” in “bed”." },
        { title: "お — o", body: "Like the “o” in “more”. Keep it steady; don't let it glide into “oh-oo”." }
      ] },
      { type: "words", title: "Your first words", items: w1 },
      { type: "text", title: "Spot the difference", paras: ["あ and お look alike at a glance. Look at them side by side in the chart and write each a few times. After a day or two the shapes stop being confusing."] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("meet-hiragana", vowels, { read: 3, find: 2 }),
      ...wordQuiz("meet-hiragana", w1, { meaning: 2, reading: 1 }),
      ask("meet-hiragana", "Which of the three Japanese scripts do you learn first?", "Hiragana", ["Katakana", "Kanji"], "Hiragana comes first: it covers every sound and is the base for everything else. Katakana and kanji build on it.")
    ]
  }),
  lesson({
    id: "k-row", number: 2, title: "The K Row: か き く け こ", time: "15 min",
    summary: "Add five consonant-vowel characters and read your first words about places and colours.",
    objective: "Read か き く け こ and combine them with the vowels to read simple words.",
    blocks: [
      { type: "text", title: "How the chart works", paras: ["Hiragana is organised in rows. Each row keeps the same consonant and runs through the five vowels in the same order: a, i, u, e, o. Learn the K row and you know five new characters in one go."] },
      { type: "kana", title: "The K row", items: kRow },
      { type: "words", title: "Words you can read now", items: w2 },
      { type: "tips", title: "Notes", items: [
        "えき (eki) means “station”, one of the first words in the Tiny Japanese stories. If you've done our “At the Station” lesson you've already met it.",
        "く looks a bit like a “<” and け is a good one to watch: compare it to は when you reach the H row.",
        "Try writing any short word you know with the hiragana you have learned so far."
      ] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("k-row", [...vowels, ...kRow], { read: 3, find: 2 }),
      ...wordQuiz("k-row", w2, { meaning: 2, reading: 1 })
    ]
  }),
  lesson({
    id: "s-row", number: 3, title: "The S Row: さ し す せ そ", time: "15 min",
    summary: "Five more characters, and your first food words: すし and さけ.",
    objective: "Read さ し す せ そ, including the special sound “shi”.",
    blocks: [
      { type: "kana", title: "The S row", items: sRow },
      { type: "points", title: "Two things to watch", items: [
        { title: "し is “shi”, not “si”", body: "In the chart the S row has one irregular sound: し is read “shi”, as in “sheep”. This is why the word すし is written “sushi”." },
        { title: "す is a soft “su”", body: "In everyday speech the final “u” in す is often almost silent. です (desu) sounds like “dess”, and ます (masu) like “mass”. You'll hear this all the time in polite Japanese." }
      ] },
      { type: "words", title: "Words you can read now", items: w3 },
      { type: "tips", title: "Notes", items: [
        "さけ (sake) is really two different words that sound the same: 酒 (“alcohol, rice wine”) and 鮭 (“salmon”). Written in hiragana they look identical, so context tells you which one is meant.",
        "さ and ち (coming next lesson) are easy to mix up. Compare them side by side before you move on."
      ] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("s-row", [...kRow, ...sRow], { read: 3, find: 2 }),
      ...wordQuiz("s-row", w3, { meaning: 2, reading: 1 }),
      ask("s-row", "How is し pronounced?", "shi", ["si", "chi"], "し is read “shi”. The S row is the first with a spelling that isn't a plain consonant + vowel.")
    ]
  }),
  lesson({
    id: "t-row", number: 4, title: "The T Row: た ち つ て と", time: "15 min",
    summary: "More irregular sounds (chi and tsu) and your first useful time words.",
    objective: "Read た ち つ て と and the sounds “chi” and “tsu”.",
    blocks: [
      { type: "kana", title: "The T row", items: tRow },
      { type: "points", title: "Two special sounds", items: [
        { title: "ち is “chi”", body: "Like the start of “cheese”. It is not “ti”." },
        { title: "つ is “tsu”", body: "Like the “ts” at the end of “cats”, followed by “oo”. Practise saying just “ts” first, then add the vowel. English speakers often turn it into “su” or “too”, so listen for the quick “ts” at the start." }
      ] },
      { type: "words", title: "Words you can read now", items: w4 },
      { type: "tips", title: "Notes", items: [
        "あした (ashita) means “tomorrow” and you'll use it in the greetings lesson of our conversation course: また あした, “see you tomorrow”.",
        "たかい (takai) can mean both “tall/high” and “expensive”. Same word, and the meaning comes from context."
      ] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("t-row", [...sRow, ...tRow], { read: 3, find: 2 }),
      ...wordQuiz("t-row", w4, { meaning: 2, reading: 1 }),
      ask("t-row", "Which of these is the correct reading of つ?", "tsu", ["tu", "su"], "つ is read “tsu”.")
    ]
  }),
  lesson({
    id: "n-row", number: 5, title: "The N Row: な に ぬ ね の", time: "15 min",
    summary: "Animals, questions and one very important particle.",
    objective: "Read な に ぬ ね の and know what の does in a sentence.",
    blocks: [
      { type: "kana", title: "The N row", items: nRow },
      { type: "words", title: "Words you can read now", items: w5 },
      { type: "points", title: "A first particle: の", items: [
        { title: "の links two nouns", body: "の works like the English “'s”. You'll see it everywhere: わたしの means “my”, and in later lessons you'll use patterns like “Mika's book”. For now just know that の is a tiny word that links things together." }
      ] },
      { type: "tips", title: "Notes", items: [
        "ぬ and め (next to learn) are similar, as are ね, れ and わ. When you reach those you'll know why. Always compare characters side by side rather than learning one at a time.",
        "なに (nani) means “what?”. It is one of the most useful question words you will ever learn."
      ] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("n-row", [...tRow, ...nRow], { read: 3, find: 2 }),
      ...wordQuiz("n-row", w5, { meaning: 2, reading: 1 })
    ]
  }),
  lesson({
    id: "h-row", number: 6, title: "The H Row: は ひ ふ へ ほ", time: "15 min",
    summary: "The H row, the sound “fu”, and the characters that change sound when they are particles.",
    objective: "Read は ひ ふ へ ほ and know when は and へ change their sound.",
    blocks: [
      { type: "kana", title: "The H row", items: hRow },
      { type: "points", title: "Two special sounds", items: [
        { title: "ふ is “fu”", body: "Not a sharp English “f”. Blow softly as if you were cooling soup, with your lips nearly together. That is the Japanese “fu”." },
        { title: "は and へ as particles", body: "When は marks the topic of a sentence it is read “wa”, not “ha”. When へ marks a direction (“to”) it is read “e”, not “he”. Everywhere else they keep their normal reading. You'll see this in almost every sentence you read." }
      ] },
      { type: "words", title: "Words you can read now", items: w6 },
      { type: "tips", title: "Notes", items: [
        "あなたは (anata wa) is read “anata wa”, and えきへ いく (eki e iku) means “go to the station”. Notice how は and へ change sound in these.",
        "は and ほ are close. ほ has an extra stroke, so compare them side by side."
      ] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("h-row", [...nRow, ...hRow], { read: 3, find: 2 }),
      ...wordQuiz("h-row", w6, { meaning: 2, reading: 1 }),
      ask("h-row", "In あなたは, how is the last character は read?", "wa", ["ha", "ba"], "As a particle, は is read “wa”."),
      ask("h-row", "How is へ read when it means “to” (a direction particle)?", "e", ["he", "fu"], "As a particle, へ is read “e”.")
    ]
  }),
  lesson({
    id: "m-y-row", number: 7, title: "The M and Y Rows", time: "20 min",
    summary: "Eight more characters: ま み む め も and や ゆ よ.",
    objective: "Read ま み む め も や ゆ よ and the words that use them.",
    blocks: [
      { type: "kana", title: "The M row", items: mRow },
      { type: "kana", title: "The Y row", items: yRow },
      { type: "text", title: "Why the Y row is short", paras: ["Hiragana has only three Y characters. The “yi” and “ye” sounds are not part of the standard set, so the row has gaps, shown empty in the chart above."] },
      { type: "words", title: "Words you can read now", items: w7 },
      { type: "tips", title: "Notes", items: [
        "あめ (ame) means “rain”. The same spelling can also mean “candy”, which is said with a different pitch. Context tells you which.",
        "ぬ and め look alike. So do ね, れ and わ (soon). Compare them side by side and write each a few times.",
        "まいにち (mainichi) is a great word to remember: it means “every day”, which is the pace we suggest for these lessons."
      ] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("m-y-row", [...hRow, ...mRow, ...yRow], { read: 4, find: 2 }),
      ...wordQuiz("m-y-row", w7, { meaning: 2, reading: 1 })
    ]
  }),
  lesson({
    id: "r-w-n", number: 8, title: "The R Row, わ, を and ん", time: "20 min",
    summary: "The last of the basic 46 characters, including the particle を and the standalone ん.",
    objective: "Read ら り る れ ろ, わ, を and ん, and finish all 46 basic hiragana.",
    blocks: [
      { type: "kana", title: "The R row", items: rRow },
      { type: "kana", title: "わ, を and ん", items: wRow },
      { type: "points", title: "Things to know", items: [
        { title: "The R sound sits between R and L", body: "Japanese “r” is made by lightly tapping the tip of your tongue behind your upper teeth, a bit like the “tt” in the American “butter”. It is neither an English “r” nor a clear “l”." },
        { title: "を is the object particle", body: "を is pronounced “o” and is used almost only as a grammar particle. It marks what the action is done to: ほんを よむ (hon o yomu) means “read a book”." },
        { title: "ん is a syllable on its own", body: "ん is the only hiragana that is not a vowel or a consonant+vowel. It's a nasal “n” that takes a full beat, as in にほん (ni-ho-n)." }
      ] },
      { type: "words", title: "Words you can read now", items: w8 },
      { type: "tips", title: "Notes", items: [
        "わたしは ほんを よむ — “I read a book”. Every character in this sentence is now readable. Try reading it out loud, with は as “wa” and を as “o”.",
        "る and ろ are close, and so are ね, れ and わ. Compare them in the charts above.",
        "You now know all 46 basic hiragana! Next up are the sound-change marks, which multiply what you can read."
      ] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("r-w-n", [...mRow, ...rRow, ...wRow], { read: 4, find: 2 }),
      ...wordQuiz("r-w-n", w8, { meaning: 2, reading: 1 }),
      ask("r-w-n", "How is the particle を pronounced?", "o", ["wo", "u"], "In modern Japanese を is read “o”. The “wo” form is only seen in romaji spelling tables.")
    ]
  }),
  lesson({
    id: "dakuten", number: 9, title: "Dakuten and Handakuten: が ざ だ ば ぱ", time: "20 min",
    summary: "Two tiny marks that give you 25 more sounds.",
    objective: "Add the two small sound marks to characters you know and read the new sounds.",
    blocks: [
      { type: "text", title: "Two small marks", paras: [
        "You don't need to learn 25 new characters. You only need two marks. Adding dakuten (two small strokes, as in が) makes a consonant “voiced”: か (ka) becomes が (ga). Adding handakuten (a small circle, as in ぱ) to the H row makes the P sounds: は (ha) becomes ぱ (pa)."
      ] },
      { type: "kana", title: "G row (from K)", items: gRow },
      { type: "kana", title: "Z row (from S)", items: zRow },
      { type: "kana", title: "D row (from T)", items: dRow },
      { type: "kana", title: "B row (from H)", items: bRow },
      { type: "kana", title: "P row (from H, with a circle)", items: pRow },
      { type: "points", title: "Things to know", items: [
        { title: "Sound changes to remember", body: "し (shi) becomes じ (ji). ち (chi) becomes ぢ (ji). つ (tsu) becomes づ (zu). ふ (fu) becomes ぶ (bu). Check the charts above for each of these." },
        { title: "ぢ and づ are rare", body: "ぢ sounds the same as じ, and づ sounds the same as ず. They only appear in a few words (for example つづく, “to continue”). You can read じ and ず and you'll be fine nearly all the time." },
        { title: "Don't mix up the two marks", body: "ば (ba) and ぱ (pa) differ only by the mark. Look for two small strokes (ば) or a small circle (ぱ) before you read." }
      ] },
      { type: "words", title: "Words you can read now", items: w9 },
      { type: "tips", title: "Notes", items: [
        "ありがとう (arigatou) means “thank you”, one of the first words many learners pick up, and now you can read it.",
        "ひらがな (hiragana) is itself written in hiragana, of course."
      ] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("dakuten", [...gRow, ...zRow, ...dRow, ...bRow, ...pRow], { read: 4, find: 3 }),
      ...wordQuiz("dakuten", w9, { meaning: 2, reading: 1 }),
      ask("dakuten", "What does adding dakuten (two small strokes) to か change it into?", "が (ga)", ["き (ki)", "か (kaa)"], "Dakuten voices the consonant: か (ka) becomes が (ga)."),
      ask("dakuten", "What does adding handakuten (a small circle) to は make?", "ぱ (pa)", ["ば (ba)", "わ (wa)"], "Handakuten turns the H sounds into P sounds: は (ha) becomes ぱ (pa).")
    ]
  }),
  lesson({
    id: "combos-and-length", number: 10, title: "Combined Sounds, Small っ and Long Vowels", time: "25 min",
    summary: "The final pronunciation rules that let you read nearly any hiragana word.",
    objective: "Read combined sounds like きょ, double consonants with small っ, and long vowels.",
    blocks: [
      { type: "text", title: "Three last ideas", paras: [
        "You now know every character. Three small rules fill in the rest of the picture: small ゃ ゅ ょ make combined sounds, small っ doubles a consonant, and long vowels last twice as long."
      ] },
      { type: "kana", title: "Combined sounds", items: combos },
      { type: "points", title: "How combos work", items: [
        { title: "Small ゃ ゅ ょ blend into one syllable", body: "き + ゃ makes きゃ, read “kya” as one beat. Compare ひや (hi-ya, two beats) with ひゃ (hya, one beat). The small size is what tells you to blend." },
        { title: "Spelling hints", body: "しゃ しゅ しょ are “sha shu sho”, ちゃ ちゅ ちょ are “cha chu cho” and じゃ じゅ じょ are “ja ju jo”. They follow the spellings of し, ち and じ." }
      ] },
      { type: "points", title: "Small っ: a short pause", items: [
        { title: "っ doubles the next consonant", body: "A small っ is not a sound on its own. It tells you to hold the next consonant for an extra beat, like a tiny stop. きて (kite, “come”) vs きって (kitte, “stamp”), and がっこう (gakkou, “school”)." }
      ] },
      { type: "points", title: "Long vowels", items: [
        { title: "Stretch the vowel for two beats", body: "あ, い, う after the same vowel makes it long: おかあさん (okaasan), おにいさん (oniisan), ゆうめい (yuumei)." },
        { title: "え and お sounds", body: "A long お sound is usually written with う, as in ありがとう and おとうさん, and sometimes with お, as in おおきい (ookii). A long え sound is usually written with い, as in せんせい (sensei)." },
        { title: "Length changes meaning", body: "おばさん (obasan, “aunt”) and おばあさん (obaasan, “grandmother”) differ only by one stretched vowel. Hold long vowels for twice as long." }
      ] },
      { type: "words", title: "Words you can read now", items: w10 },
      practice()
    ],
    quiz: [
      ...kanaQuiz("combos-and-length", combos, { read: 5, find: 2 }),
      ...wordQuiz("combos-and-length", w10, { meaning: 3, reading: 2 }),
      ask("combos-and-length", "What does the small っ in きって tell you to do?", "Hold the next consonant for an extra beat", ["Say the vowel twice", "Skip the next character", "Raise your voice"], "Small っ doubles the next consonant: ki-t-te."),
      ask("combos-and-length", "Which of these is ONE beat, not two?", "ひゃ", ["ひや", "ひい", "ひあ"], "Small ゃ blends with the character before it: ひゃ is hya. ひや is hi-ya (two beats)."),
      ask("combos-and-length", "How is おかあさん read?", "okaasan", ["okasan", "okaasen"], "The vowel after か is stretched: o-kaa-san.")
    ]
  }),
  lesson({
    id: "reading-practice", number: 11, title: "Reading Practice and Review", time: "25 min",
    summary: "Put it all together: read real words, place names and complete sentences.",
    objective: "Read hiragana words and short sentences aloud with confidence.",
    blocks: [
      { type: "text", title: "You can read hiragana", paras: ["You now know the whole system. This lesson is for practice: words you'll see in real life, and simple sentences. Read each aloud first, then check the romaji and meaning."] },
      { type: "words", title: "Places and everyday words", items: [
        W("とうきょう", "toukyou", "Tokyo"), W("きょうと", "kyouto", "Kyoto"), W("おおさか", "oosaka", "Osaka"), W("ふじさん", "fujisan", "Mt. Fuji"), W("にほんご", "nihongo", "the Japanese language"),
        W("おいしい", "oishii", "delicious"), W("すみません", "sumimasen", "excuse me, sorry"), W("おはようございます", "ohayou gozaimasu", "good morning (polite)"), W("こんにちは", "konnichiwa", "hello"), W("ごちそうさまでした", "gochisousama deshita", "thank you for the meal")
      ] },
      { type: "dialogue", title: "Sentences to read aloud", lines: [
        { who: "Sentence 1", ja: "これは ほんです。", romaji: "Kore wa hon desu.", en: "This is a book." },
        { who: "Sentence 2", ja: "きょうは あついです。", romaji: "Kyou wa atsui desu.", en: "It's hot today." },
        { who: "Sentence 3", ja: "ねこが すきです。", romaji: "Neko ga suki desu.", en: "I like cats." },
        { who: "Sentence 4", ja: "すしを たべます。", romaji: "Sushi o tabemasu.", en: "I eat sushi." },
        { who: "Sentence 5", ja: "えきは どこですか。", romaji: "Eki wa doko desu ka.", en: "Where is the station?" },
        { who: "Sentence 6", ja: "ひらがなが よめます！", romaji: "Hiragana ga yomemasu!", en: "I can read hiragana!" }
      ] },
      { type: "text", title: "Where to go next", paras: [
        "Katakana is the second script, used for foreign words, names and many food and drink names. It follows exactly the same sound chart you have just learned, only with different shapes, so the hard part is already done.",
        "To use your new reading skills straight away, start the First Conversations course. Its dialogues are written in hiragana and katakana, with romaji and English alongside."
      ] }
    ],
    quiz: [
      ask("reading-practice", "How do you read きょうと?", "kyouto", ["kiyouto", "kyotto"], "きょ is one beat (kyo), then う stretches it: kyou-to. In English we usually write Kyoto."),
      ask("reading-practice", "What does おいしい mean?", "delicious", ["expensive", "tomorrow"], "おいしい (oishii) means “delicious”."),
      ask("reading-practice", "In これは ほんです, how is は read?", "wa", ["ha", "ba"], "は marks the topic and is read “wa”: Kore wa hon desu."),
      ask("reading-practice", "How is ごちそうさまでした read?", "gochisousama deshita", ["gochisosama deshita", "gochiso sama desuta"], "ごちそうさまでした: go-chi-sou-sa-ma de-shi-ta, with a long “o” in sou."),
      ask("reading-practice", "What does すしを たべます mean?", "I eat sushi", ["I like sushi", "Where is the sushi?"], "を marks the object (sushi), and たべます means “eat” (polite)."),
      ask("reading-practice", "Which sentence means “Where is the station?”", "えきは どこですか。", ["ねこが すきです。", "これは ほんです。"], "えき = station, どこ = where, ですか = question ending."),
      ask("reading-practice", "How is ひらがなが よめます read?", "hiragana ga yomemasu", ["hiragana wa yomemasu", "hiragana ga yomimasu"], "が marks the thing you can do (read hiragana), and よめます means “can read”.")
    ]
  })
];
