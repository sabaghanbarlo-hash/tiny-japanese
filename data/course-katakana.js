// Course: Katakana Starter. Eleven short lessons that take you from zero to reading every katakana character.
// Same block types as the hiragana course: text, kana (a chart), words, points (titled explanations), tips, dialogue.
import { kana, kanaQuiz, wordQuiz, ask } from "./quiz-tools.js";

const lesson = (o) => o;
const W = (ja, romaji, en) => ({ ja, romaji, en });

const vowels = kana("ア a|イ i|ウ u|エ e|オ o");
const kRow = kana("カ ka|キ ki|ク ku|ケ ke|コ ko");
const sRow = kana("サ sa|シ shi|ス su|セ se|ソ so");
const tRow = kana("タ ta|チ chi|ツ tsu|テ te|ト to");
const nRow = kana("ナ na|ニ ni|ヌ nu|ネ ne|ノ no");
const hRow = kana("ハ ha|ヒ hi|フ fu|ヘ he|ホ ho");
const mRow = kana("マ ma|ミ mi|ム mu|メ me|モ mo");
const yRow = kana("ヤ ya|-|ユ yu|-|ヨ yo");
const rRow = kana("ラ ra|リ ri|ル ru|レ re|ロ ro");
const wRow = kana("ワ wa|ヲ o|ン n");
const gRow = kana("ガ ga|ギ gi|グ gu|ゲ ge|ゴ go");
const zRow = kana("ザ za|ジ ji|ズ zu|ゼ ze|ゾ zo");
const dRow = kana("ダ da|ヂ ji|ヅ zu|デ de|ド do");
const bRow = kana("バ ba|ビ bi|ブ bu|ベ be|ボ bo");
const pRow = kana("パ pa|ピ pi|プ pu|ペ pe|ポ po");

const w1 = [W("オーケー", "ookee", "OK"), W("カー", "kaa", "car"), W("キー", "kii", "key"), W("ケーキ", "keeki", "cake"), W("コーク", "kooku", "cola (Coke)")];
const w2 = [W("スキー", "sukii", "skiing"), W("タクシー", "takushii", "taxi"), W("テスト", "tesuto", "test, exam"), W("セーター", "seetaa", "sweater"), W("スーツ", "suutsu", "suit"), W("アイス", "aisu", "ice, ice cream"), W("サイト", "saito", "website"), W("ソース", "soosu", "sauce"), W("スカート", "sukaato", "skirt"), W("キス", "kisu", "kiss")];
const w3 = [W("コーヒー", "koohii", "coffee"), W("ノート", "nooto", "notebook"), W("ネクタイ", "nekutai", "necktie"), W("ナイフ", "naifu", "knife"), W("ナイス", "naisu", "nice"), W("ヒーター", "hiitaa", "heater"), W("ヘア", "hea", "hair"), W("ホース", "hoosu", "hose")];
const w4 = [W("マスク", "masuku", "mask"), W("マイク", "maiku", "microphone"), W("メモ", "memo", "memo, note"), W("ミス", "misu", "mistake"), W("ムース", "muusu", "mousse"), W("ユーモア", "yuumoa", "humour"), W("ヨーヨー", "yooyoo", "yo-yo"), W("ハム", "hamu", "ham"), W("ホーム", "hoomu", "home, station platform"), W("モーター", "mootaa", "motor")];
const w5 = [W("ホテル", "hoteru", "hotel"), W("トイレ", "toire", "toilet"), W("ラーメン", "raamen", "ramen noodles"), W("レモン", "remon", "lemon"), W("カレー", "karee", "curry"), W("レストラン", "resutoran", "restaurant"), W("タオル", "taoru", "towel"), W("ワイン", "wain", "wine"), W("ランチ", "ranchi", "lunch"), W("リモコン", "rimokon", "remote control"), W("ルール", "ruuru", "rule")];
const w6 = [W("ビール", "biiru", "beer"), W("ゲーム", "geemu", "game"), W("バス", "basu", "bus"), W("ドア", "doa", "door"), W("パン", "pan", "bread"), W("ピアノ", "piano", "piano"), W("テレビ", "terebi", "television"), W("ペン", "pen", "pen"), W("ゴルフ", "gorufu", "golf"), W("デパート", "depaato", "department store"), W("バナナ", "banana", "banana"), W("ズボン", "zubon", "trousers"), W("ガラス", "garasu", "glass (material)"), W("ギター", "gitaa", "guitar"), W("ゼロ", "zero", "zero")];

const combos = [
  ...kana("キャ kya|キュ kyu|キョ kyo"), ...kana("シャ sha|シュ shu|ショ sho"), ...kana("チャ cha|チュ chu|チョ cho"),
  ...kana("ニャ nya|ニュ nyu|ニョ nyo"), ...kana("ヒャ hya|ヒュ hyu|ヒョ hyo"), ...kana("ミャ mya|ミュ myu|ミョ myo"),
  ...kana("リャ rya|リュ ryu|リョ ryo"), ...kana("ギャ gya|ギュ gyu|ギョ gyo"), ...kana("ジャ ja|ジュ ju|ジョ jo"),
  ...kana("ビャ bya|ビュ byu|ビョ byo"), ...kana("ピャ pya|ピュ pyu|ピョ pyo")
];
const w7 = [W("ジュース", "juusu", "juice"), W("シャワー", "shawaa", "shower"), W("チョコレート", "chokoreeto", "chocolate"), W("シャツ", "shatsu", "shirt"), W("ジャズ", "jazu", "jazz"), W("メニュー", "menyuu", "menu"), W("キャベツ", "kyabetsu", "cabbage"), W("ニュース", "nyuusu", "news"), W("シャンプー", "shanpuu", "shampoo"), W("チャンス", "chansu", "chance"), W("キャンプ", "kyanpu", "camping"), W("ヒーロー", "hiiroo", "hero"), W("ジョギング", "jogingu", "jogging"), W("キャラクター", "kyarakutaa", "character")];

const smallTsu = [W("ネット", "netto", "net, internet"), W("ベッド", "beddo", "bed"), W("カップ", "kappu", "cup"), W("サッカー", "sakkaa", "soccer"), W("チケット", "chiketto", "ticket"), W("バッグ", "baggu", "bag"), W("コップ", "koppu", "drinking glass"), W("ストップ", "sutoppu", "stop"), W("ラケット", "raketto", "racket")];
const foreign = kana("ティ ti|ディ di|ファ fa|フィ fi|フェ fe|フォ fo|ウィ wi|ウェ we|ウォ wo|シェ she|ジェ je|チェ che|ヴァ va");
const w8 = [W("パーティー", "paatii", "party"), W("ディナー", "dinaa", "dinner"), W("ファン", "fan", "fan"), W("フィルム", "firumu", "film"), W("フォーク", "fooku", "fork"), W("ウェブ", "webu", "web"), W("シェフ", "shefu", "chef"), W("ジェット", "jetto", "jet"), W("チェック", "chekku", "check"), W("コンピューター", "konpyuutaa", "computer"), W("ヴァイオリン", "vaiorin", "violin")];

const w9 = [W("ハンバーガー", "hanbaagaa", "hamburger"), W("ピザ", "piza", "pizza"), W("サラダ", "sarada", "salad"), W("スープ", "suupu", "soup"), W("パスタ", "pasuta", "pasta"), W("サンドイッチ", "sandoicchi", "sandwich"), W("アイスクリーム", "aisu kuriimu", "ice cream"), W("チーズ", "chiizu", "cheese"), W("コーラ", "koora", "cola"), W("ミルク", "miruku", "milk"), W("ステーキ", "suteeki", "steak"), W("ポテト", "poteto", "potato, fries"), W("ヨーグルト", "yooguruto", "yoghurt"), W("クッキー", "kukkii", "cookie"), W("オムレツ", "omuretsu", "omelette"), W("カレーライス", "karee raisu", "curry rice"), W("ソーセージ", "sooseeji", "sausage")];

const countries = [W("アメリカ", "amerika", "America, USA"), W("イギリス", "igirisu", "Britain, UK"), W("カナダ", "kanada", "Canada"), W("オーストラリア", "oosutoraria", "Australia"), W("フランス", "furansu", "France"), W("ドイツ", "doitsu", "Germany"), W("イタリア", "itaria", "Italy"), W("スペイン", "supein", "Spain"), W("ブラジル", "burajiru", "Brazil"), W("インド", "indo", "India"), W("ロシア", "roshia", "Russia"), W("メキシコ", "mekishiko", "Mexico"), W("ニュージーランド", "nyuujiirando", "New Zealand")];
const places = [W("カフェ", "kafe", "café"), W("コンビニ", "konbini", "convenience store"), W("スーパー", "suupaa", "supermarket"), W("ホテル", "hoteru", "hotel"), W("デパート", "depaato", "department store"), W("プール", "puuru", "swimming pool")];
const names = [W("アレックス", "arekkusu", "Alex"), W("ミカ", "mika", "Mika"), W("マイク", "maiku", "Mike"), W("ジョン", "jon", "John"), W("エマ", "ema", "Emma"), W("サラ", "sara", "Sarah"), W("ケン", "ken", "Ken"), W("ジェーン", "jeen", "Jane")];

const practice = (title = "How to practise") => ({ type: "tips", title, items: [
  "Say each sound out loud as you read it. You already know the sounds from hiragana, so this is only about new shapes.",
  "Write each new character about ten times, following a reliable stroke-order chart. Writing helps you notice the small differences between look-alike characters.",
  "Read the words aloud and guess what they are before checking the meaning. Most katakana words come from English, so you will often get them right."
] });

export const katakanaLessons = [
  lesson({
    id: "meet-katakana", number: 1, title: "Meet Katakana: Vowels and the K Row", time: "20 min",
    summary: "What katakana is for, your first ten characters, and the long vowel mark ー.",
    objective: "Read ア イ ウ エ オ and カ キ ク ケ コ, and use ー to read your first words.",
    blocks: [
      { type: "text", title: "What is katakana?", paras: [
        "Katakana is the second Japanese script. It has exactly the same 46 sounds as hiragana, written with different, sharper shapes. If you can read ア as “a”, you already know how to say it. Only the shapes are new.",
        "Katakana is used mostly for words borrowed from other languages (コーヒー, “coffee”), foreign names, and for emphasis, a bit like italics. It is also used for sound effects and many food and drink names, so you will see it on every menu and in every convenience store."
      ] },
      { type: "kana", title: "The five vowels", items: vowels },
      { type: "kana", title: "The K row", items: kRow },
      { type: "points", title: "Look-alikes to watch", items: [
        { title: "ア and オ", body: "Both have a crossing stroke. ア is simpler: a bar with a hook. オ has a longer vertical stroke running through the cross bar." },
        { title: "ウ and ク", body: "ウ has a small top dot stroke over a roof shape. ク is a sideways hook with no dot. Say each out loud as you write them." },
      ] },
      { type: "points", title: "The long vowel mark: ー", items: [
        { title: "A line that stretches the vowel", body: "In katakana, a long vowel is written with a short line ー instead of repeating the vowel. ケーキ is “keeki” (cake), with the e held for two beats. In horizontal text the line is horizontal, in vertical text it turns vertical." }
      ] },
      { type: "words", title: "Your first words", items: w1 },
      practice()
    ],
    quiz: [
      ...kanaQuiz("meet-katakana", [...vowels, ...kRow], { read: 4, find: 3 }),
      ...wordQuiz("meet-katakana", w1, { meaning: 2, reading: 1 }),
      ask("meet-katakana", "What is katakana mostly used for?", "Foreign words and names", ["Words with Chinese-style meaning", "Verb endings"], "Katakana writes borrowed words (like コーヒー), foreign names, and adds emphasis. Kanji carry meaning; hiragana handles endings.")
    ]
  }),
  lesson({
    id: "s-t-rows", number: 2, title: "The S and T Rows", time: "20 min",
    summary: "Ten more characters, including two that are easy to mix up: シ and ツ.",
    objective: "Read サ シ ス セ ソ and タ チ ツ テ ト and read words like タクシー and スカート.",
    blocks: [
      { type: "kana", title: "The S row", items: sRow },
      { type: "kana", title: "The T row", items: tRow },
      { type: "points", title: "The famous look-alikes: シ and ツ, ソ and ン", items: [
        { title: "シ vs ツ", body: "Both are two short strokes and a long curve. In シ (shi) the two short strokes lie almost flat, side by side, and the long stroke sweeps upward. In ツ (tsu) the short strokes stand more upright, and the long stroke sweeps downward. Check the direction of the long stroke first." },
        { title: "ソ vs ン", body: "You will meet ン (n) in lesson 5. Learn ソ (so) now: both of its strokes are written downward. In ン, the long stroke is written upward from the lower left." },
        { title: "Do not worry about perfect memory", body: "Almost every learner confuses these for a while. Context helps: if you read シ in a word and it makes no sense, try ツ." }
      ] },
      { type: "words", title: "Words you can read now", items: w2 },
      practice()
    ],
    quiz: [
      ...kanaQuiz("s-t-rows", [...sRow, ...tRow], { read: 4, find: 3 }),
      ...wordQuiz("s-t-rows", w2, { meaning: 3, reading: 2 }),
      ask("s-t-rows", "Which character is “tsu”?", "ツ", ["シ", "ソ"], "ツ is tsu. シ is shi, and ソ is so.")
    ]
  }),
  lesson({
    id: "n-h-rows", number: 3, title: "The N and H Rows", time: "20 min",
    summary: "Ten more characters, with a coffee-shop word list.",
    objective: "Read ナ ニ ヌ ネ ノ and ハ ヒ フ ヘ ホ and words like コーヒー and ノート.",
    blocks: [
      { type: "kana", title: "The N row", items: nRow },
      { type: "kana", title: "The H row", items: hRow },
      { type: "points", title: "Notes on the new shapes", items: [
        { title: "ヘ is also a hiragana", body: "ヘ (katakana) and へ (hiragana) look almost the same. Both are read “he”. You will find them in different words." },
        { title: "ニ is just two lines", body: "ニ (ni) is two horizontal strokes, the top one shorter. It looks a lot like the kanji 二, which means “two”." },
        { title: "フ is read “fu”", body: "Not “hu”. Like ふ in hiragana, the H row's third sound is between h and f, so it is spelt “fu”." }
      ] },
      { type: "words", title: "Words you can read now", items: w3 },
      practice()
    ],
    quiz: [
      ...kanaQuiz("n-h-rows", [...nRow, ...hRow], { read: 4, find: 3 }),
      ...wordQuiz("n-h-rows", w3, { meaning: 3, reading: 2 }),
      ask("n-h-rows", "How do you read フ?", "fu", ["hu", "pu"], "The third character of the H row is read “fu”.")
    ]
  }),
  lesson({
    id: "m-y-rows", number: 4, title: "The M and Y Rows", time: "20 min",
    summary: "Eight characters, since the Y row only has three.",
    objective: "Read マ ミ ム メ モ and ヤ ユ ヨ and read words like マスク and ホーム.",
    blocks: [
      { type: "kana", title: "The M row", items: mRow },
      { type: "kana", title: "The Y row", items: yRow },
      { type: "points", title: "Notes", items: [
        { title: "The Y row has three characters", body: "There is no “yi” or “ye” in standard Japanese, so the row has only ヤ (ya), ユ (yu) and ヨ (yo). The empty cells in the chart are on purpose." },
        { title: "ミ is three strokes", body: "ミ (mi) is three short slanted strokes stacked one above the other." },
        { title: "ム and メ", body: "ム (mu) is a corner with a small mark. メ (me) is a simple cross, a bit like a multiplication sign. Not to be confused with ス (su) and ナ (na)." }
      ] },
      { type: "words", title: "Words you can read now", items: w4 },
      practice()
    ],
    quiz: [
      ...kanaQuiz("m-y-rows", [...mRow, ...yRow], { read: 4, find: 3 }),
      ...wordQuiz("m-y-rows", w4, { meaning: 3, reading: 2 }),
      ask("m-y-rows", "How many characters does the Y row have?", "Three: ヤ ユ ヨ", ["Five: ヤ ユ エ ヨ イ", "Two: ヤ ヨ"], "Standard Japanese has only ya, yu and yo, so the Y row has three characters.")
    ]
  }),
  lesson({
    id: "r-w-n", number: 5, title: "The R Row, ワ, ヲ and ン", time: "20 min",
    summary: "The last of the 46 basic characters, plus the words that restaurants and hotels use.",
    objective: "Read ラ リ ル レ ロ, ワ ヲ ン and words like ホテル, ラーメン and レストラン.",
    blocks: [
      { type: "kana", title: "The R row", items: rRow },
      { type: "kana", title: "ワ, ヲ and ン", items: wRow },
      { type: "points", title: "Notes", items: [
        { title: "The Japanese R is a soft tap", body: "It sits between English r, l and d. Touch the tip of your tongue quickly to the ridge behind your top teeth, as in the middle of “butter” in American English." },
        { title: "ン is a syllable of its own", body: "ン (n) counts as one beat and only appears after other sounds, never at the start of a word. It sounds a bit like “m” before p, b or m, but you simply write ン." },
        { title: "ン and ソ, ワ and ウ", body: "Compare ン (the long stroke sweeps up) with ソ (it sweeps down). ワ (wa) looks like ウ without the short stroke on top. These pairs are easy to mix up, so practise them side by side." },
        { title: "ヲ is rare", body: "ヲ (o) is mostly used for the grammar particle in hiragana (を). In katakana it appears almost only in unusual cases. Learn to recognise it, and you are done." }
      ] },
      { type: "words", title: "Words you can read now", items: w5 },
      { type: "text", title: "That's all 46", paras: ["You now know the whole basic katakana chart. Next: the little marks that give you the extra sounds, just like in hiragana."] },
      practice()
    ],
    quiz: [
      ...kanaQuiz("r-w-n", [...rRow, ...wRow], { read: 4, find: 3 }),
      ...wordQuiz("r-w-n", w5, { meaning: 3, reading: 2 }),
      ask("r-w-n", "Which of these is ン?", "ン", ["ソ", "ツ"], "ン (n) has its long stroke sweeping up from the lower-left. ソ sweeps down.")
    ]
  }),
  lesson({
    id: "dakuten", number: 6, title: "Dakuten and Handakuten: ガ ザ ダ バ パ", time: "20 min",
    summary: "Two small marks give you 25 more sounds, exactly as in hiragana.",
    objective: "Read the voiced and P sounds in katakana, and read words like ビール and ゲーム.",
    blocks: [
      { type: "text", title: "Same idea, new shapes", paras: [
        "Katakana uses the same two marks as hiragana. Two small strokes (dakuten, ゛) voice the consonant: カ (ka) becomes ガ (ga). A small circle (handakuten, ゜) turns the H row into the P row: ハ (ha) becomes パ (pa)."
      ] },
      { type: "kana", title: "G sounds (カ row + ゛)", items: gRow },
      { type: "kana", title: "Z sounds (サ row + ゛)", items: zRow },
      { type: "kana", title: "D sounds (タ row + ゛)", items: dRow },
      { type: "kana", title: "B sounds (ハ row + ゛)", items: bRow },
      { type: "kana", title: "P sounds (ハ row + ゜)", items: pRow },
      { type: "points", title: "Notes", items: [
        { title: "ジ and ズ", body: "ジ is “ji” and ズ is “zu”. ヂ and ヅ are very rare and sound the same as ジ and ズ, so you will almost never need them." },
        { title: "Don't mix up ツ and ヅ, シ and ジ", body: "The two small marks are the whole difference. Look at the top-right of the character." }
      ] },
      { type: "words", title: "Words you can read now", items: w6 },
      practice()
    ],
    quiz: [
      ...kanaQuiz("dakuten-k", [...gRow, ...zRow, ...dRow, ...bRow, ...pRow], { read: 4, find: 3 }),
      ...wordQuiz("dakuten-k", w6, { meaning: 3, reading: 2 }),
      ask("dakuten-k", "What does adding two small strokes (dakuten) to カ make?", "ガ (ga)", ["キ (ki)", "カー (kaa)"], "Dakuten voices the consonant: カ (ka) becomes ガ (ga)."),
      ask("dakuten-k", "What does adding a small circle to ハ make?", "パ (pa)", ["バ (ba)", "ワ (wa)"], "The small circle (handakuten) changes the H row to the P row.")
    ]
  }),
  lesson({
    id: "combined-sounds", number: 7, title: "Combined Sounds: キャ シュ チョ", time: "20 min",
    summary: "Small ャ ュ ョ blend into the character before them, as in hiragana.",
    objective: "Read combined sounds and words like ジュース, シャワー and メニュー.",
    blocks: [
      { type: "text", title: "Small ャ ュ ョ", paras: [
        "The idea is the same as in hiragana: a small ャ, ュ or ョ after an i-ending character (キ, シ, チ, ニ, ヒ, ミ, リ, ギ, ジ, ビ, ピ) blends the two into one beat. キ + ャ is キャ, read “kya”, as one beat."
      ] },
      { type: "kana", title: "Combined sounds", items: combos },
      { type: "points", title: "How to read them", items: [
        { title: "Small means blend", body: "Compare キヤ (ki-ya, two beats) with キャ (kya, one beat). Only the size of ヤ changes." },
        { title: "Spelling hints", body: "シャ シュ ショ are “sha shu sho”, チャ チュ チョ are “cha chu cho” and ジャ ジュ ジョ are “ja ju jo”." }
      ] },
      { type: "words", title: "Words you can read now", items: w7 },
      practice()
    ],
    quiz: [
      ...kanaQuiz("combined-sounds", combos, { read: 5, find: 2 }),
      ...wordQuiz("combined-sounds", w7, { meaning: 3, reading: 2 }),
      ask("combined-sounds", "How many beats is シャ?", "One", ["Two", "Three"], "Small ャ blends with シ into one beat: sha.")
    ]
  }),
  lesson({
    id: "small-tsu-and-new-sounds", number: 8, title: "Small ッ and Sounds for Foreign Words", time: "25 min",
    summary: "The double-consonant pause, and extra combinations like ティ and ファ that katakana has for borrowed words.",
    objective: "Read small ッ, and read words like パーティー, フォーク and チェック.",
    blocks: [
      { type: "text", title: "Small ッ: a short pause", paras: [
        "Just like small っ in hiragana, small ッ tells you to hold the next consonant for an extra beat. It is not a sound on its own. ネット is “net-to”: say the t, pause for a moment, then release it."
      ] },
      { type: "words", title: "Words with small ッ", items: smallTsu },
      { type: "text", title: "Sounds that only katakana has", paras: [
        "Japanese has borrowed so many words that katakana has extra combinations for sounds that traditional Japanese did not have. They are made the same way as combined sounds: a normal character plus a small vowel.",
        "You do not need to memorise all of them now. Learn to recognise the pattern: a small ィ, ェ, ォ or ァ after a character changes its vowel."
      ] },
      { type: "kana", title: "Extra sounds", items: foreign, cols: 5 },
      { type: "points", title: "Notes", items: [
        { title: "ティ and ディ", body: "ティ is “ti” (as in パーティー, party) and ディ is “di” (as in ディナー, dinner). Before these existed, foreign words were bent to fit older sounds." },
        { title: "ファ フィ フェ フォ", body: "These are the F sounds: fa, fi, fe, fo. Remember that plain フ is already “fu”." },
        { title: "ヴ", body: "ヴ (vu) shows a V sound, as in ヴァイオリン (violin). Many words with ヴ are also written with バ, ビ or ブ instead, so ヴァイオリン and バイオリン are both seen." }
      ] },
      { type: "words", title: "Words with the extra sounds", items: w8 },
      practice()
    ],
    quiz: [
      ...wordQuiz("small-tsu", smallTsu, { meaning: 3, reading: 2 }),
      ...wordQuiz("new-sounds", w8, { meaning: 3, reading: 2 }),
      ask("small-tsu", "What does the small ッ in ネット tell you to do?", "Hold the next consonant for an extra beat", ["Say the vowel twice", "Skip the next character"], "Small ッ doubles the next consonant: ne-t-to."),
      ask("small-tsu", "How is フォーク read?", "fooku", ["fuoku", "foku"], "フォ is fo, and ー stretches it to “foo”: fooku, “fork”.")
    ]
  }),
  lesson({
    id: "food-and-drink", number: 9, title: "Katakana in the Wild: Food and Drink", time: "20 min",
    summary: "Read menus and shop signs, where katakana appears most.",
    objective: "Read 17 common food and drink words, and learn how to spot the English word hiding inside.",
    blocks: [
      { type: "text", title: "The menu test", paras: [
        "Katakana appears more on menus than almost anywhere else. Most of the words come from English, with Japanese pronunciation: no th, r and l the same, and a vowel after every consonant. When you get stuck, say the word aloud and think of the English word it sounds like."
      ] },
      { type: "words", title: "Food and drink", items: w9 },
      { type: "points", title: "Tricks for decoding", items: [
        { title: "Add a vowel after each consonant", body: "Japanese cannot end most syllables in a consonant, so “cheese” becomes チーズ (chiizu) and “milk” becomes ミルク (miruku)." },
        { title: "Long words are often joined English words", body: "アイスクリーム is just “ice cream”. カレーライス is “curry” plus “rice”, the usual name for curry on rice." },
        { title: "Some words don't match English", body: "ポテト is “potato” but also means French fries in many cafés. Not every borrowed word means exactly the same thing as in English." }
      ] },
      practice("How to practise")
    ],
    quiz: [
      ...wordQuiz("food-and-drink", w9, { meaning: 5, reading: 3 }),
      ask("food-and-drink", "Which word is “cheese”?", "チーズ", ["ミルク", "サラダ"], "チーズ (chiizu) is “cheese”."),
      ask("food-and-drink", "Why is “milk” ミルク and not just ミル?", "Japanese adds a vowel after most consonants", ["The k is always silent", "It is a different language"], "Japanese syllables end in a vowel (or ン), so milk becomes mi-ru-ku.")
    ]
  }),
  lesson({
    id: "names-and-places", number: 10, title: "Countries, Places and Names", time: "20 min",
    summary: "Read country names, everyday places and your own name.",
    objective: "Read countries and places in katakana, and spell a foreign name.",
    blocks: [
      { type: "words", title: "Countries", items: countries },
      { type: "words", title: "Everyday places", items: places },
      { type: "words", title: "First names", items: names },
      { type: "points", title: "Writing your own name", items: [
        { title: "Sound it out, syllable by syllable", body: "Say your name slowly and split it into Japanese beats. Alex becomes ア・レ・ッ・ク・ス: アレックス. Add ー for long vowels and ッ for doubled sounds." },
        { title: "There can be more than one version", body: "Names like Emma can be written エマ or エンマ. Both are fine, because katakana spelling follows how a name sounds, not one fixed rule." },
      ] },
      { type: "text", title: "Try this", paras: ["Write your own name in katakana on paper. Then try the names of three friends, your city and your favourite food. You are now using katakana the way Japanese people do."] },
      practice()
    ],
    quiz: [
      ...wordQuiz("names-and-places", countries, { meaning: 4, reading: 2 }),
      ...wordQuiz("names-and-places2", places.slice(0, 5), { meaning: 2, reading: 1 }),
      ask("names-and-places", "How is アレックス read?", "arekkusu", ["arekusu", "alexs"], "ア-レ-ッ-ク-ス: the small ッ doubles the k, giving a-re-k-ku-su.")
    ]
  }),
  lesson({
    id: "reading-practice", number: 11, title: "Reading Practice and Review", time: "25 min",
    summary: "Read real sentences that mix hiragana and katakana.",
    objective: "Read short Japanese sentences with both scripts aloud with confidence.",
    blocks: [
      { type: "text", title: "Both scripts together", paras: [
        "Real Japanese mixes scripts in one sentence. Hiragana carries the grammar, katakana carries the borrowed words. When you see a katakana word inside a hiragana sentence, it is almost always a noun that came from another language."
      ] },
      { type: "dialogue", title: "Sentences to read aloud", lines: [
        { who: "Sentence 1", ja: "わたしは アレックスです。", romaji: "Watashi wa Arekkusu desu.", en: "I am Alex." },
        { who: "Sentence 2", ja: "コーヒーを ください。", romaji: "Koohii o kudasai.", en: "Coffee, please." },
        { who: "Sentence 3", ja: "トイレは どこですか。", romaji: "Toire wa doko desu ka.", en: "Where is the toilet?" },
        { who: "Sentence 4", ja: "ホテルは あそこです。", romaji: "Hoteru wa asoko desu.", en: "The hotel is over there." },
        { who: "Sentence 5", ja: "ラーメンが すきです。", romaji: "Raamen ga suki desu.", en: "I like ramen." },
        { who: "Sentence 6", ja: "サッカーを します。", romaji: "Sakkaa o shimasu.", en: "I play soccer." },
        { who: "Sentence 7", ja: "ビールと ワインを ください。", romaji: "Biiru to wain o kudasai.", en: "Beer and wine, please." },
        { who: "Sentence 8", ja: "カタカナが よめます！", romaji: "Katakana ga yomemasu!", en: "I can read katakana!" }
      ] },
      { type: "words", title: "A mini menu to read", items: [
        W("ハンバーガーセット", "hanbaagaa setto", "hamburger set"), W("チーズピザ", "chiizu piza", "cheese pizza"), W("コーヒー", "koohii", "coffee"), W("オレンジジュース", "orenji juusu", "orange juice"), W("チョコレートケーキ", "chokoreeto keeki", "chocolate cake")
      ] },
      { type: "text", title: "Where to go next", paras: [
        "You can now read both kana scripts, which is the foundation for everything else in Japanese. Next, take the First Conversations course to use what you know in real situations, and keep an eye on signs, packaging and menus. Every one is free reading practice."
      ] }
    ],
    quiz: [
      ask("kata-reading", "How do you read コーヒーを ください?", "koohii o kudasai", ["kohi o kudasai", "koohii wa kudasai"], "コーヒー (koohii) is coffee, を is read “o”, and ください means “please give me”."),
      ask("kata-reading", "What does トイレは どこですか mean?", "Where is the toilet?", ["I like the toilet", "This is a hotel"], "トイレ = toilet, どこ = where, ですか = question ending."),
      ask("kata-reading", "What does ラーメンが すきです mean?", "I like ramen", ["I eat ramen", "Ramen, please"], "すき means “like”, and が marks what you like."),
      ask("kata-reading", "In ホテルは あそこです, what does あそこ mean?", "over there", ["right here", "tomorrow"], "あそこ (asoko) means “over there”."),
      ask("kata-reading", "In a Japanese sentence, katakana is mostly used for…", "Borrowed words and foreign names", ["Verb endings", "Particles like は and を"], "Hiragana carries grammar; katakana carries borrowed words and foreign names."),
      ask("kata-reading", "How is ビールと ワインを ください read?", "biiru to wain o kudasai", ["biru to wain wa kudasai", "biiru to wain o kudasu"], "ビール (biiru) beer, と (to) “and”, ワイン (wain) wine, を (o), ください (kudasai).")
    ]
  })
];
