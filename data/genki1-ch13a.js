// Genki I Grammar, chapter 10 (part 1: about, counting, when): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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


export const goroGurai = lesson({
  id: "goro-gurai", number: 87, title: "ごろ と ぐらい: About",
  summary: "Say “about” for times with ごろ and for amounts with ぐらい.",
  objective: "By the end you can say “about three o'clock” and “about two hours”.",
  teach: [
    T("The idea", "ごろ for times",
      ["{ごろ|goro} means “about” or “around” a point in time. Put it after a clock time. {さんじごろ|sanji goro} means “around three o'clock”.",
       "It also works with days, like {にちようびごろ|nichiyoubi goro}, but you will mostly use it with clock times."],
      [E("さんじごろ かえります。", "Sanji goro kaerimasu.", "I'll go home around three.", "ごろ"),
       E("しちじごろ おきます。", "Shichiji goro okimasu.", "I get up around seven.", "ごろ")]),
    T("Amounts", "ぐらい for lengths and amounts",
      ["{ぐらい|gurai} means “about” for an amount or a length of time. {にじかんぐらい|nijikan gurai} means “about two hours”. {ひゃくえんぐらい|hyaku en gurai} means “about a hundred yen”.",
       "It is also written {くらい|kurai}. The two spellings mean the same."],
      [E("にじかんぐらい べんきょうします。", "Nijikan gurai benkyou shimasu.", "I study for about two hours.", "ぐらい"),
       E("ひゃくえんぐらい です。", "Hyaku en gurai desu.", "It's about a hundred yen.", "ぐらい")]),
    T("Which one?", "A point or an amount",
      ["Ask yourself: is it a point on the clock, or an amount? A point uses {ごろ|goro}: {さんじごろ|sanji goro}. An amount uses {ぐらい|gurai}: {さんじかんぐらい|sanjikan gurai}.",
       "{さんじ|sanji} is three o'clock. {さんじかん|sanjikan} is three hours."],
      [E("さんじごろ きます。", "Sanji goro kimasu.", "I'll come around three o'clock.", "ごろ"),
       E("さんじかんぐらい まちました。", "Sanjikan gurai machimashita.", "I waited about three hours.", "ぐらい")]),
    T("How long?", "どのぐらい",
      ["{どのぐらい|dono gurai} asks “about how much?” or “about how long?”. {どのぐらい かかりますか|dono gurai kakarimasu ka} means “About how long does it take?”.",
       "A natural answer is an amount with {ぐらい|gurai}."],
      [E("どのぐらい かかりますか。", "Dono gurai kakarimasu ka.", "About how long does it take?", "どのぐらい"),
       E("さんじゅっぷんぐらい かかります。", "Sanjuppun gurai kakarimasu.", "It takes about thirty minutes.", "ぐらい")]),
    T("Common mistakes", "Do not swap them",
      ["Do not use {ごろ|goro} for an amount of time: {にじかんごろ|nijikan goro} is wrong; say {にじかんぐらい|nijikan gurai}. Do not use {ぐらい|gurai} to say a clock time precisely in careful speech; {さんじごろ|sanji goro} is the standard way.",
       "Points use {ごろ|goro}. Amounts use {ぐらい|gurai}."],
      [E("にじかんごろ べんきょうします。", "(wrong)", "Wrong: use ぐらい for an amount.", "にじかんごろ", true),
       E("にじかんぐらい べんきょうします。", "Nijikan gurai benkyou shimasu.", "Right: I study about two hours.", "ぐらい")],
      T0("Say: “I get up at about seven.”", "しちじごろ おきます。", "Shichiji goro okimasu.", "I get up at about seven.", "ごろ"))
  ],
  storyTitle: "Meeting time",
  story: [
    L("Mika", "あした なんじごろ あいますか。", "Ashita nanji goro aimasu ka.", "Around what time shall we meet tomorrow?"),
    L("Alex", "さんじごろは どう ですか。", "Sanji goro wa dou desu ka.", "How about around three?"),
    L("Mika", "いい ですよ。うちから どのぐらい かかりますか。", "Ii desu yo. Uchi kara dono gurai kakarimasu ka.", "Good. About how long does it take from my home?"),
    L("Alex", "さんじゅっぷんぐらい かかります。", "Sanjuppun gurai kakarimasu.", "It takes about thirty minutes."),
    L("Mika", "じゃあ、にじはんごろ でかけます。", "Jaa, niji han goro dekakemasu.", "Then I'll leave around two thirty."),
    L("Alex", "わかりました。", "Wakarimashita.", "Understood.")
  ],
  words: [
    W("ごろ", "goro", "about (time)"),
    W("ぐらい", "gurai", "about (amount)"),
    W("どのぐらい", "dono gurai", "about how much"),
    W("かかります", "kakarimasu", "take (time)"),
    W("じかん", "jikan", "hours, time"),
    W("えん", "en", "yen"),
    W("なんじ", "nanji", "what time"),
    W("はん", "han", "half past")
  ],
  tips: [
    "Goro follows a point in time, such as sanji goro.",
    "Gurai follows an amount, such as nijikan gurai.",
    "Dono gurai asks about how much or how long."
  ],
  quiz: [
    ask("goro-gurai", "How do you say “around three o'clock”?", "さんじごろ", ["さんじぐらい ごろ", "さんじかんごろ"], "Time point + ごろ."),
    ask("goro-gurai", "How do you say “about two hours”?", "にじかんぐらい", ["にじかんごろ", "にじごろ"], "Amount + ぐらい."),
    ask("goro-gurai", "What does どのぐらい ask?", "about how much or how long", ["what time", "who"], "どのぐらい = about how much."),
    ask("goro-gurai", "Which is the same as ぐらい?", "くらい", ["ごろ", "だけ"], "ぐらい and くらい are the same."),
    ask("goro-gurai", "Which word fits a clock time?", "ごろ", ["ぐらい", "ずつ"], "Clock times use ごろ.")
  ]
});

export const counters = lesson({
  id: "counters", number: 88, title: "かぞえかた: Counting",
  summary: "Count things, people, flat things and books.",
  objective: "By the end you can say “three apples”, “two people” and “two notebooks”.",
  teach: [
    T("The idea", "Numbers change with the thing",
      ["In Japanese you use a different counting word depending on what you count. For many things you can use the general series: {ひとつ|hitotsu}, {ふたつ|futatsu}, {みっつ|mittsu}, {よっつ|yottsu}, {いつつ|itsutsu}.",
       "These mean one, two, three, four and five things."],
      [E("りんごを みっつ かいました。", "Ringo o mittsu kaimashita.", "I bought three apples.", "みっつ"),
       E("ケーキを ふたつ ください。", "Keeki o futatsu kudasai.", "Two cakes, please.", "ふたつ")]),
    T("People", "ひとり, ふたり, さんにん",
      ["For people, one person is {ひとり|hitori}, two people are {ふたり|futari}. From three on, use {にん|nin}: {さんにん|sannin}, {よにん|yonin}, {ごにん|gonin}. Note that four people is {よにん|yonin}, not {よんにん|yonnin}.",
       "The first two are special words to learn by heart."],
      [E("ともだちが さんにん きます。", "Tomodachi ga sannin kimasu.", "Three friends are coming.", "さんにん"),
       E("ふたりで いきます。", "Futari de ikimasu.", "We two will go.", "ふたり")]),
    T("Flat things", "まい",
      ["For flat, thin things such as paper, tickets and plates, use {まい|mai} after the number. {いちまい|ichimai} is one sheet, {にまい|nimai} is two, {さんまい|sanmai} is three.",
       "It is easy: number plus {まい|mai}."],
      [E("きっぷを にまい ください。", "Kippu o nimai kudasai.", "Two tickets, please.", "にまい"),
       E("かみを さんまい かいました。", "Kami o sanmai kaimashita.", "I bought three sheets of paper.", "さんまい")]),
    T("Books", "さつ",
      ["For books, notebooks and magazines, use {さつ|satsu}. One is {いっさつ|issatsu}, two is {にさつ|nisatsu}, three is {さんさつ|sansatsu}.",
       "The first one has a little pause: {いっさつ|issatsu}."],
      [E("ノートを にさつ かいました。", "Nooto o nisatsu kaimashita.", "I bought two notebooks.", "にさつ"),
       E("ほんを いっさつ よみました。", "Hon o issatsu yomimashita.", "I read one book.", "いっさつ")]),
    T("Where it goes", "Object を count verb",
      ["The count goes right after the thing and its particle, before the verb. {りんごを みっつ かいます|ringo o mittsu kaimasu}. The count does not take a particle of its own.",
       "To ask “how many?”, use {いくつ|ikutsu}, {なんにん|nannin}, {なんまい|nanmai} or {なんさつ|nansatsu}."],
      [E("りんごを いくつ かいましたか。", "Ringo o ikutsu kaimashita ka.", "How many apples did you buy?", "いくつ"),
       E("ともだちが なんにん きますか。", "Tomodachi ga nannin kimasu ka.", "How many friends are coming?", "なんにん")]),
    T("Common mistakes", "Use the right counter",
      ["Do not use {ひとり|hitori} for things: {りんごを ひとり かいました|ringo o hitori kaimashita} is wrong. Use {ひとつ|hitotsu}. Do not say {よんにん|yonnin}; say {よにん|yonin}.",
       "Choose the counter by what you count: things, people, flat things, books."],
      [E("りんごを ふたり かいました。", "(wrong)", "Wrong: ふたり is for people.", "ふたり", true),
       E("りんごを ふたつ かいました。", "Ringo o futatsu kaimashita.", "Right: I bought two apples.", "ふたつ")],
      T0("Say: “I bought two notebooks.”", "ノートを にさつ かいました。", "Nooto o nisatsu kaimashita.", "I bought two notebooks.", "にさつ"))
  ],
  storyTitle: "At the supermarket",
  story: [
    L("Mika", "りんごを みっつ ください。", "Ringo o mittsu kudasai.", "Three apples, please."),
    L("Staff", "はい。ほかに なにか ありますか。", "Hai. Hoka ni nanika arimasu ka.", "Yes. Is there anything else?"),
    L("Mika", "ノートを にさつ ください。", "Nooto o nisatsu kudasai.", "Two notebooks, please."),
    L("Alex", "ともだちが さんにん きます。パンを ふたつ ください。", "Tomodachi ga sannin kimasu. Pan o futatsu kudasai.", "Three friends are coming. Two breads, please."),
    L("Staff", "ぜんぶで いくつ ですか。", "Zenbu de ikutsu desu ka.", "How many in all?"),
    L("Mika", "りんごが みっつと パンが ふたつ です。", "Ringo ga mittsu to pan ga futatsu desu.", "Three apples and two breads.")
  ],
  words: [
    W("ひとつ", "hitotsu", "one (thing)"),
    W("ふたつ", "futatsu", "two (things)"),
    W("みっつ", "mittsu", "three (things)"),
    W("ひとり", "hitori", "one person"),
    W("ふたり", "futari", "two people"),
    W("まい", "mai", "counter for flat things"),
    W("さつ", "satsu", "counter for books"),
    W("いくつ", "ikutsu", "how many")
  ],
  tips: [
    "Use hitotsu, futatsu, mittsu for most things.",
    "People: hitori, futari, then sannin, yonin.",
    "Put the count after the thing and before the verb."
  ],
  quiz: [
    ask("counters", "How do you say “three apples”?", "りんごを みっつ", ["りんごを さんにん", "りんごを さんまい"], "Things: みっつ."),
    ask("counters", "How do you say “two people”?", "ふたり", ["ふたつ", "にまい"], "ふたり is two people."),
    ask("counters", "Which counter is for books?", "さつ", ["まい", "にん"], "Books: さつ."),
    ask("counters", "How do you say “four people”?", "よにん", ["よんにん", "よっつ"], "よにん."),
    ask("counters", "How do you ask “How many?” for things?", "いくつ", ["いくら", "なんじ"], "いくつ asks for a count.")
  ]
});

export const toki = lesson({
  id: "toki", number: 89, title: "とき: When",
  summary: "Say “when” with とき.",
  objective: "By the end you can say “When I'm free, I read” and “When I went to Japan, I bought a souvenir”.",
  teach: [
    T("The idea", "Plain form + とき",
      ["{とき|toki} means “when” or “at the time of”. Put the plain form before it. {ひまな とき|hima na toki} means “when I'm free”.",
       "Then say what happens: {ひまな とき、ほんを よみます|hima na toki, hon o yomimasu}."],
      [E("ひまな とき、ほんを よみます。", "Hima na toki, hon o yomimasu.", "When I'm free, I read.", "ひまな とき"),
       E("さむい とき、うちに います。", "Samui toki, uchi ni imasu.", "When it's cold, I stay home.", "さむい とき")]),
    T("Which form", "Match the word type",
      ["After an {い|i}-adjective, use the plain form: {さむい とき|samui toki}. After a {な|na}-adjective, add {な|na}: {しずかな とき|shizuka na toki}. After a noun, add {の|no}: {あめの とき|ame no toki}. After a verb, use the plain form: {いく とき|iku toki}.",
       "It is the same system you used before nouns."],
      [E("あめの とき、バスで いきます。", "Ame no toki, basu de ikimasu.", "When it rains, I go by bus.", "あめの とき"),
       E("しずかな とき、ほんを よみます。", "Shizuka na toki, hon o yomimasu.", "When it's quiet, I read.", "しずかな とき")]),
    T("Dictionary or た-form", "Before or after",
      ["With verbs, the tense shows the order. The dictionary form means the action is not finished when the main action happens. {にほんへ いく とき|nihon e iku toki} means “when I'm going to Japan”. The {た|ta}-form means it is finished. {にほんへ いった とき|nihon e itta toki} means “when I went to Japan” or “once I was in Japan”.",
       "Think: not finished yet, or already done."],
      [E("にほんへ いく とき、かばんを かいました。", "Nihon e iku toki, kaban o kaimashita.", "When I was going to Japan, I bought a bag.", "いく とき"),
       E("にほんへ いった とき、おみやげを かいました。", "Nihon e itta toki, omiyage o kaimashita.", "When I went to Japan, I bought souvenirs.", "いった とき")]),
    T("With past and more", "Fits any sentence",
      ["The main sentence can be past or present. {ちいさい とき|chiisai toki} means “when I was little”. {こどもの とき|kodomo no toki} means “when I was a child”.",
       "The {とき|toki} clause comes first."],
      [E("こどもの とき、うみへ よく いきました。", "Kodomo no toki, umi e yoku ikimashita.", "When I was a child, I often went to the sea.", "こどもの とき"),
       E("ちいさい とき、ピアノを ひきました。", "Chiisai toki, piano o hikimashita.", "When I was little, I played the piano.", "ちいさい とき")]),
    T("Common mistakes", "Do not use だ or ます",
      ["Do not use {だ|da} before {とき|toki}: {あめだ とき|ame da toki} is wrong; say {あめの とき|ame no toki}. Do not use the {ます|masu} form: {いきます とき|ikimasu toki} is wrong; say {いく とき|iku toki}.",
       "Noun: {の|no}. {な|na}-adjective: {な|na}. Verb: plain form."],
      [E("あめだ とき、バスで いきます。", "(wrong)", "Wrong: use あめの とき.", "あめだ とき", true),
       E("いきます とき、でんわします。", "(wrong)", "Wrong: use いく とき.", "いきます とき", true),
       E("いく とき、でんわします。", "Iku toki, denwa shimasu.", "Right: When I go, I call.", "いく とき")],
      T0("Say: “When I'm free, I read.”", "ひまな とき、ほんを よみます。", "Hima na toki, hon o yomimasu.", "When I'm free, I read.", "ひまな とき"))
  ],
  storyTitle: "When",
  story: [
    L("Mika", "ひまな とき、なにを しますか。", "Hima na toki, nani o shimasu ka.", "What do you do when you're free?"),
    L("Alex", "ひまな とき、おんがくを ききます。", "Hima na toki, ongaku o kikimasu.", "When I'm free, I listen to music."),
    L("Mika", "さむい とき は？", "Samui toki wa.", "And when it's cold?"),
    L("Alex", "さむい とき、うちに います。", "Samui toki, uchi ni imasu.", "When it's cold, I stay home."),
    L("Mika", "にほんへ いった とき、なにを かいましたか。", "Nihon e itta toki, nani o kaimashita ka.", "When you went to Japan, what did you buy?"),
    L("Alex", "にほんへ いった とき、おみやげを かいました。", "Nihon e itta toki, omiyage o kaimashita.", "When I went to Japan, I bought souvenirs.")
  ],
  words: [
    W("とき", "toki", "when, time"),
    W("ひま", "hima", "free (time)"),
    W("おみやげ", "omiyage", "souvenir"),
    W("こども", "kodomo", "child"),
    W("ちいさい", "chiisai", "small"),
    W("さむい", "samui", "cold"),
    W("あめ", "ame", "rain"),
    W("おんがく", "ongaku", "music")
  ],
  tips: [
    "Plain form plus toki means when.",
    "Nouns take no, na-adjectives take na: ame no toki, hima na toki.",
    "Dictionary form is not finished yet; ta-form is finished."
  ],
  quiz: [
    ask("toki", "How do you say “when it rains”?", "あめの とき", ["あめだ とき", "あめます とき"], "Noun + の とき."),
    ask("toki", "How do you say “when I'm free”?", "ひまな とき", ["ひまの とき", "ひまだ とき"], "な-adjective + な とき."),
    ask("toki", "Which means “when I went to Japan”?", "にほんへ いった とき", ["にほんへ いく とき", "にほんへ いきます とき"], "た-form: finished."),
    ask("toki", "Which form goes before とき with a verb?", "the plain form", ["the ます form", "the て-form"], "Plain form + とき."),
    ask("toki", "How do you say “when it's cold”?", "さむい とき", ["さむいな とき", "さむく とき"], "い-adjective stays plain.")
  ]
});
