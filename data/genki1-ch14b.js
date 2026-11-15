// Genki I Grammar, chapter 14 (part 2): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
import { ask } from "./quiz-tools.js";
const L = (who, ja, romaji, en) => ({ who, ja, romaji, en });
const W = (ja, romaji, en) => ({ ja, kana: "", romaji, en });
const E = (ja, ro, en, hl, bad) => ({ ja, ro, en, hl, bad: !!bad });
const T = (head, key, say, show, tr) => ({ head, key, say, show, try: tr });
const T0 = (q, ja, ro, en, hl) => ({ q, ja, ro, en, hl });
const lesson = (o) => ({
  id: o.id, number: o.number, title: o.title, time: "25 min", summary: o.summary, objective: o.objective,
  blocks: [
    { type: "teach", title: "The lesson, step by step", steps: o.teach },
    { type: "words", title: "Vocabulary", items: o.words },
    { type: "dialogue", title: "Story: " + o.storyTitle, lines: o.story },
    { type: "tips", title: "Remember", items: o.tips }
  ],
  quiz: o.quiz
});



export const noNominalizer = lesson({
  id: "no-nominalizer", number: 96, title: "～のが すき: Liking to Do",
  summary: "Turn a verb into a noun with の, to say what you like, dislike or are good at.",
  objective: "By the end you can say “I like swimming” and “I am good at cooking”.",
  teach: [
    T("The idea", "Verb + の = doing",
      ["Add {の|no} after the dictionary form of a verb to make it work like a noun. {およぐ|oyogu} means “swim”, and {およぐの|oyogu no} means “swimming”.",
       "Now you can use it with {が すき|ga suki}, just like a noun."],
      [E("およぐのが すき です。", "Oyogu no ga suki desu.", "I like swimming.", "およぐの"),
       E("えいがを みるのが すき です。", "Eiga o miru no ga suki desu.", "I like watching movies.", "みるの")]),
    T("Good and bad at", "じょうず and へた",
      ["The same pattern works with {じょうず|jouzu} (good at) and {へた|heta} (bad at). {りょうりを つくるのが じょうず です|ryouri o tsukuru no ga jouzu desu} means “I am good at cooking”.",
       "The thing you do keeps its own particle, like {を|o} in {りょうりを|ryouri o}."],
      [E("りょうりを つくるのが じょうず です。", "Ryouri o tsukuru no ga jouzu desu.", "I am good at cooking.", "つくるの"),
       E("うたを うたうのが へた です。", "Uta o utau no ga heta desu.", "I am bad at singing.", "うたうの")]),
    T("Dislike", "きらい",
      ["For dislike, use {きらい|kirai}. {あさ おきるのが きらい です|asa okiru no ga kirai desu} means “I hate getting up in the morning”.",
       "It is the same pattern again."],
      [E("あさ おきるのが きらい です。", "Asa okiru no ga kirai desu.", "I hate getting up in the morning.", "おきるの"),
       E("はしるのが きらい です。", "Hashiru no ga kirai desu.", "I dislike running.", "はしるの")]),
    T("Asking", "Questions",
      ["To ask, say {なにを するのが すき ですか|nani o suru no ga suki desu ka}. It means “What do you like to do?”.",
       "Answer with the same shape."],
      [E("なにを するのが すき ですか。", "Nani o suru no ga suki desu ka.", "What do you like to do?", "するの"),
       E("さんぽを するのが すき です。", "Sanpo o suru no ga suki desu.", "I like taking walks.", "するの")]),
    T("Dictionary form only", "Not the ます-form",
      ["Before {の|no}, always use the dictionary form, like {およぐ|oyogu} and {たべる|taberu}. Do not use the {ます|masu}-form.",
       "{およぎますのが|oyogimasu no ga} is wrong. Say {およぐのが|oyogu no ga}."],
      [E("たべるのが すき です。", "Taberu no ga suki desu.", "I like eating.", "たべるの"),
       E("ねるのが すき です。", "Neru no ga suki desu.", "I like sleeping.", "ねるの")]),
    T("Common mistakes", "Do not forget の",
      ["Do not leave out {の|no}: {およぐが すき|oyogu ga suki} is wrong. Do not use {ます|masu}-form either.",
       "Dictionary form, then {の|no}, then {が|ga}."],
      [E("およぎますのが すき です。", "(wrong)", "Wrong: use the dictionary form.", "およぎますの", true),
       E("およぐのが すき です。", "Oyogu no ga suki desu.", "Right.", "およぐの")],
      T0("Say: “I like swimming.”", "およぐのが すき です。", "Oyogu no ga suki desu.", "I like swimming.", "およぐの"))
  ],
  storyTitle: "Hobbies",
  story: [
    L("Mika", "アレックスさんは なにを するのが すき ですか。", "Arekkusu-san wa nani o suru no ga suki desu ka.", "Alex, what do you like to do?"),
    L("Alex", "さんぽを するのが すき です。ミカさんは?", "Sanpo o suru no ga suki desu. Mika-san wa?", "I like taking walks. And you, Mika?"),
    L("Mika", "うたを うたうのが すき です。でも、へた です。", "Uta o utau no ga suki desu. Demo, heta desu.", "I like singing. But I am bad at it."),
    L("Alex", "いいえ、じょうず ですよ。", "Iie, jouzu desu yo.", "No, you are good."),
    L("Mika", "ありがとう。でも、あさ おきるのが きらい です。", "Arigatou. Demo, asa okiru no ga kirai desu.", "Thank you. But I hate getting up in the morning."),
    L("Alex", "わたしも きらい です。", "Watashi mo kirai desu.", "I hate it too.")
  ],
  words: [
    W("すき", "suki", "like"),
    W("きらい", "kirai", "dislike"),
    W("じょうず", "jouzu", "good at"),
    W("へた", "heta", "bad at"),
    W("うたう", "utau", "sing"),
    W("およぐ", "oyogu", "swim"),
    W("つくる", "tsukuru", "make, cook"),
    W("はしる", "hashiru", "run")
  ],
  tips: [
    "Dictionary form plus no makes a verb act like a noun.",
    "It works with suki, kirai, jouzu and heta.",
    "Never use the masu-form before no."
  ],
  quiz: [
    ask("no-nominalizer", "How do you say “I like swimming”?", "およぐのが すき です。", ["およぎますのが すき です。", "およぐが すき です。"], "Dictionary form + の + が."),
    ask("no-nominalizer", "What does の do after a verb?", "Makes it work like a noun", ["Makes it past", "Makes it polite"], "およぐの = swimming."),
    ask("no-nominalizer", "How do you say “I am bad at singing”?", "うたを うたうのが へた です。", ["うたを うたうが へた です。", "うたを うたいますのが へた です。"], "…のが へた."),
    ask("no-nominalizer", "Which form comes before の?", "Dictionary form", ["ます-form", "て-form"], "Always the dictionary form."),
    ask("no-nominalizer", "What does あさ おきるのが きらい です mean?", "I hate getting up in the morning", ["I like mornings", "I get up early"], "きらい = dislike.")
  ]
});

export const noPronoun = lesson({
  id: "no-pronoun", number: 97, title: "の as “One”: The Red One",
  summary: "Use の in place of a noun, to say “the red one” or “mine”.",
  objective: "By the end you can say “Please give me the red one” and “This is mine”.",
  teach: [
    T("The idea", "の = one",
      ["When both people know the thing you mean, you do not need to say the noun again. Put {の|no} where the noun would be. {あかい の|akai no} means “the red one”.",
       "It is like “one” in English: the red one, the big one."],
      [E("あかい の を ください。", "Akai no o kudasai.", "Please give me the red one.", "あかい の"),
       E("おおきい のが いい です。", "Ookii no ga ii desu.", "The big one is good.", "おおきい の")]),
    T("Mine", "Owner + の",
      ["Use {の|no} after a person to say it belongs to them. {これは わたしの です|kore wa watashi no desu} means “This is mine”.",
       "The thing itself is left out, because it is clear."],
      [E("これは わたしの です。", "Kore wa watashi no desu.", "This is mine.", "わたしの"),
       E("これは ミカさんの です。", "Kore wa Mika-san no desu.", "This is Mika\'s.", "ミカさんの")]),
    T("な-adjectives", "Add な first",
      ["After a {な|na}-adjective, you need {な|na} before {の|no}. {きれいな の|kirei na no} means “the pretty one”.",
       "{い|i}-adjectives go straight to {の|no}, as in {あかい の|akai no}."],
      [E("きれいな の を ください。", "Kirei na no o kudasai.", "Please give me the pretty one.", "きれいな の"),
       E("しずかな の が いい です。", "Shizuka na no ga ii desu.", "I prefer the quiet one.", "しずかな の")]),
    T("Choosing", "Two ones",
      ["You can compare two things. {あかい のと くろい の、どちらが やすい ですか|akai no to kuroi no, dochira ga yasui desu ka} means “Which is cheaper, the red one or the black one?”.",
       "Use {の|no} twice, for each side."],
      [E("あかい のと くろい の、どちらが やすい ですか。", "Akai no to kuroi no, dochira ga yasui desu ka.", "Which is cheaper, the red one or the black one?", "あかい のと"),
       E("あかい のが やすい です。", "Akai no ga yasui desu.", "The red one is cheaper.", "あかい の")]),
    T("About people", "Not for people",
      ["{の|no} stands for things, not for people. To say “the tall person”, keep the noun {ひと|hito}: {せが たかい ひと|se ga takai hito}.",
       "Do not say {たかい の|takai no} when you mean a person."],
      [E("せが たかい ひとは アレックスさん です。", "Se ga takai hito wa Arekkusu-san desu.", "The tall person is Alex.", "ひと"),
       E("あかい のを ください。", "Akai no o kudasai.", "Please give me the red one.", "あかい の")]),
    T("Common mistakes", "な before の",
      ["After a {な|na}-adjective, you cannot skip {な|na}. {きれい の|kirei no} is wrong. Say {きれいな の|kirei na no}.",
       "Say the owner, then {の|no}. Do not add {の|no} twice, like {わたしの の|watashi no no}."],
      [E("きれい の を ください。", "(wrong)", "Wrong: add な before の.", "きれい の", true),
       E("きれいな の を ください。", "Kirei na no o kudasai.", "Right.", "きれいな の")],
      T0("Say: “Please give me the red one.”", "あかい の を ください。", "Akai no o kudasai.", "Please give me the red one.", "あかい の"))
  ],
  storyTitle: "Choosing a bag",
  story: [
    L("Staff", "いらっしゃいませ。", "Irasshaimase.", "Welcome."),
    L("Mika", "あの あかい かばんを みせて ください。", "Ano akai kaban o misete kudasai.", "Please show me that red bag."),
    L("Staff", "どうぞ。くろい のも ありますよ。", "Douzo. Kuroi no mo arimasu yo.", "Here you are. We also have a black one."),
    L("Mika", "あかい のと くろい の、どちらが やすい ですか。", "Akai no to kuroi no, dochira ga yasui desu ka.", "Which is cheaper, the red one or the black one?"),
    L("Staff", "あかい のが やすい です。", "Akai no ga yasui desu.", "The red one is cheaper."),
    L("Mika", "じゃ、あかい のを ください。", "Ja, akai no o kudasai.", "Then I will take the red one.")
  ],
  words: [
    W("の", "no", "one (in place of a noun)"),
    W("かばん", "kaban", "bag"),
    W("あかい", "akai", "red"),
    W("くろい", "kuroi", "black"),
    W("おおきい", "ookii", "big"),
    W("ちいさい", "chiisai", "small"),
    W("どちら", "dochira", "which (of two)"),
    W("みせます", "misemasu", "show")
  ],
  tips: [
    "No can stand for a noun that is already clear: akai no is the red one.",
    "Add na before no after a na-adjective: kirei na no.",
    "After a name, no alone means that person\'s: Mika-san no."
  ],
  quiz: [
    ask("no-pronoun", "How do you say “the red one”?", "あかい の", ["あかいの ひと", "あかい を"], "い-adjective + の."),
    ask("no-pronoun", "How do you say “the pretty one”?", "きれいな の", ["きれい の", "きれいい の"], "な-adjectives need な."),
    ask("no-pronoun", "How do you say “This is mine”?", "これは わたしの です。", ["これは わたしが です。", "これは わたしを です。"], "Owner + の."),
    ask("no-pronoun", "What does の stand for in あかい の?", "A noun already known", ["A person", "A place"], "It replaces a known thing."),
    ask("no-pronoun", "Which is correct?", "しずかな のが いい です。", ["しずか のが いい です。", "しずかい のが いい です。"], "Add な before の.")
  ]
});

export const nounModifier = lesson({
  id: "noun-modifier", number: 98, title: "Verbs Before Nouns",
  summary: "Describe a noun with a whole verb phrase, like “the book I bought yesterday”.",
  objective: "By the end you can say “the book I bought yesterday” and “the person drinking coffee”.",
  teach: [
    T("The idea", "Plain form + noun",
      ["In Japanese, the describing part goes before the noun. The verb at the end of that part is in the plain form. {きのう かった ほん|kinou katta hon} means “the book I bought yesterday”.",
       "English puts “that I bought” after the noun. Japanese puts it before."],
      [E("きのう かった ほん", "Kinou katta hon", "the book I bought yesterday", "かった"),
       E("これは きのう かった ほん です。", "Kore wa kinou katta hon desu.", "This is the book I bought yesterday.", "かった")]),
    T("Which plain form?", "Dictionary, た, ない",
      ["Use the plain form that matches. Present is the dictionary form, like {たべる|taberu}. Past is the {た|ta}-form, like {たべた|tabeta}. Negative is {ない|nai}, like {たべない|tabenai}.",
       "{たべる ひと|taberu hito} is “a person who eats”. {たべない ひと|tabenai hito} is “a person who does not eat”."],
      [E("たべる ひと", "taberu hito", "a person who eats", "たべる"),
       E("たべない ひと", "tabenai hito", "a person who does not eat", "たべない")]),
    T("Ongoing action", "ている",
      ["For something happening now, use {て いる|te iru}. {コーヒーを のんで いる ひと|koohii o nonde iru hito} means “the person drinking coffee”.",
       "{あそこで ほんを よんで いる ひとは だれ ですか|asoko de hon o yonde iru hito wa dare desu ka} is “Who is the person reading a book over there?”."],
      [E("コーヒーを のんで いる ひと", "Koohii o nonde iru hito", "the person drinking coffee", "のんで いる"),
       E("あそこで ほんを よんで いる ひとは だれ ですか。", "Asoko de hon o yonde iru hito wa dare desu ka.", "Who is the person reading a book over there?", "よんで いる")]),
    T("Who did it", "が, not は",
      ["Inside the describing part, mark the doer with {が|ga}. {ミカさんが つくった ケーキ|Mika-san ga tsukutta keeki} means “the cake Mika made”.",
       "{は|wa} is for the topic of the whole sentence, not for the inside part."],
      [E("ミカさんが つくった ケーキは おいしい です。", "Mika-san ga tsukutta keeki wa oishii desu.", "The cake Mika made is tasty.", "ミカさんが"),
       E("アレックスさんが きのう あった ひと", "Arekkusu-san ga kinou atta hito", "the person Alex met yesterday", "アレックスさんが")]),
    T("Adjectives too", "Same position",
      ["You already put adjectives before nouns, like {あたらしい ほん|atarashii hon}. A verb phrase works exactly the same way.",
       "Remember that {な|na}-adjectives need {な|na}, like {しずかな ひと|shizuka na hito}."],
      [E("あたらしい ほん", "atarashii hon", "a new book", "あたらしい"),
       E("ジョンさんが かいた ほん", "Jon-san ga kaita hon", "the book John wrote", "かいた")]),
    T("Common mistakes", "No ます, no は",
      ["Do not use the {ます|masu}-form before a noun. {かいました ほん|kaimashita hon} is wrong. Say {かった ほん|katta hon}.",
       "Do not use {は|wa} for the doer inside. {ミカさんは つくった ケーキ|Mika-san wa tsukutta keeki} is wrong. Say {ミカさんが|Mika-san ga}."],
      [E("かいました ほん", "(wrong)", "Wrong: use the plain form.", "かいました", true),
       E("きのう かった ほん", "Kinou katta hon", "Right.", "かった")],
      T0("Say: “the book I bought yesterday.”", "きのう かった ほん", "Kinou katta hon", "the book I bought yesterday", "かった"))
  ],
  storyTitle: "Who is that?",
  story: [
    L("Mika", "あそこで コーヒーを のんで いる ひとは だれ ですか。", "Asoko de koohii o nonde iru hito wa dare desu ka.", "Who is the person drinking coffee over there?"),
    L("Alex", "あの ひとは ジョンさん です。わたしの ともだち です。", "Ano hito wa Jon-san desu. Watashi no tomodachi desu.", "That is John. He is my friend."),
    L("Mika", "アレックスさんが きのう あった ひと ですか。", "Arekkusu-san ga kinou atta hito desu ka.", "Is he the person you met yesterday?"),
    L("Alex", "いいえ。きのう あった ひとは ジョンさんの いもうとさん です。", "Iie. Kinou atta hito wa Jon-san no imoutosan desu.", "No. The person I met yesterday was John\'s sister."),
    L("Mika", "ジョンさんが かいた ほんを よみました。おもしろかった です。", "Jon-san ga kaita hon o yomimashita. Omoshirokatta desu.", "I read the book John wrote. It was interesting."),
    L("Alex", "へえ、ジョンさんは ほんを かく ひと ですか。", "Hee, Jon-san wa hon o kaku hito desu ka.", "Oh, is John a person who writes books?")
  ],
  words: [
    W("ひと", "hito", "person"),
    W("ともだち", "tomodachi", "friend"),
    W("だれ", "dare", "who"),
    W("あう", "au", "meet"),
    W("かく", "kaku", "write"),
    W("よむ", "yomu", "read"),
    W("りょうり", "ryouri", "cooking, dish"),
    W("いもうとさん", "imoutosan", "someone\'s younger sister")
  ],
  tips: [
    "The describing part goes before the noun, and ends in the plain form.",
    "Mark the doer inside with ga, not wa.",
    "Never use the masu-form before a noun."
  ],
  quiz: [
    ask("noun-modifier", "How do you say “the book I bought yesterday”?", "きのう かった ほん", ["きのう かいました ほん", "ほん きのう かった"], "Plain form before the noun."),
    ask("noun-modifier", "Which particle marks the doer inside the describing part?", "が", ["は", "を"], "Use が inside."),
    ask("noun-modifier", "What does コーヒーを のんで いる ひと mean?", "the person drinking coffee", ["the person who drank coffee", "coffee for a person"], "て いる = ongoing."),
    ask("noun-modifier", "Which is correct?", "ミカさんが つくった ケーキ", ["ミカさんは つくった ケーキ", "ミカさんを つくった ケーキ"], "が marks the doer."),
    ask("noun-modifier", "What form is the verb before the noun?", "Plain form", ["ます-form", "て-form only"], "Plain form, never ます.")
  ]
});
