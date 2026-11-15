// Genki I Grammar, chapter 10 (part 1: purpose, becoming, soft reasons): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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


export const niIkimasu = lesson({
  id: "ni-ikimasu", number: 75, title: "～に いきます: Go to Do",
  summary: "Say you go somewhere in order to do something.",
  objective: "By the end you can say “I go to buy a book” and “Let's go to see a movie”.",
  teach: [
    T("The idea", "ます stem + に いきます",
      ["To say you go in order to do something, take the {ます|masu} form, remove {ます|masu}, and add {に|ni}, then {いきます|ikimasu}. {かいます|kaimasu} becomes {かい|kai}, so {かいに いきます|kai ni ikimasu} means “I go to buy”.",
       "The little {に|ni} marks the purpose."],
      [E("ほんを かいに いきます。", "Hon o kai ni ikimasu.", "I go to buy a book.", "かいに いきます"),
       E("ごはんを たべに いきます。", "Gohan o tabe ni ikimasu.", "I go to eat.", "たべに いきます")]),
    T("With action nouns", "Add に directly",
      ["Some nouns already mean an action, like {かいもの|kaimono} for “shopping” and {りょこう|ryokou} for “travel”. Add {に|ni} directly: {かいものに いきます|kaimono ni ikimasu} means “I go shopping”.",
       "You do not need a verb in front."],
      [E("デパートへ かいものに いきます。", "Depaato e kaimono ni ikimasu.", "I go shopping at the department store.", "かいものに"),
       E("きょうとへ りょこうに いきました。", "Kyouto e ryokou ni ikimashita.", "I went to Kyoto to travel.", "りょこうに")]),
    T("Adding the place", "Place へ + purpose に",
      ["Put the place first with {へ|e}, then the purpose with {に|ni}. {がっこうへ べんきょうしに いきます|gakkou e benkyou shi ni ikimasu} means “I go to school to study”.",
       "A verb like {およぐ|oyogu} becomes {およぎ|oyogi} before {に|ni}."],
      [E("がっこうへ べんきょうしに いきます。", "Gakkou e benkyou shi ni ikimasu.", "I go to school to study.", "しに いきます"),
       E("うみへ およぎに いきます。", "Umi e oyogi ni ikimasu.", "I go to the sea to swim.", "およぎに いきます")]),
    T("Coming and returning", "きます and かえります",
      ["You can replace {いきます|ikimasu} with {きます|kimasu} “come” or {かえります|kaerimasu} “return”. The pattern stays the same.",
       "{あそびに きます|asobi ni kimasu} means “come to play”."],
      [E("ともだちが あそびに きます。", "Tomodachi ga asobi ni kimasu.", "A friend comes to hang out.", "あそびに きます"),
       E("うちへ ひるごはんを たべに かえります。", "Uchi e hirugohan o tabe ni kaerimasu.", "I go back home to eat lunch.", "たべに かえります")]),
    T("Inviting", "ませんか and ましょう",
      ["This pattern is perfect for invitations. {のみに いきませんか|nomi ni ikimasen ka} means “Shall we go for a drink?”, and {みに いきましょう|mi ni ikimashou} means “Let's go to see it”.",
       "You learned both endings in the earlier lessons."],
      [E("いっしょに のみに いきませんか。", "Issho ni nomi ni ikimasen ka.", "Shall we go for a drink together?", "のみに いきませんか"),
       E("えいがを みに いきましょう。", "Eiga o mi ni ikimashou.", "Let's go to see a movie.", "みに いきましょう")]),
    T("Common mistakes", "Do not keep ます or the dictionary form",
      ["Do not keep the {ます|masu} ending: {たべますに いきます|tabemasu ni ikimasu} is wrong. Do not use the dictionary form either: {たべるに いきます|taberu ni ikimasu} is wrong.",
       "Use the stem only: {たべに いきます|tabe ni ikimasu}."],
      [E("たべますに いきます。", "(wrong)", "Wrong: remove ます.", "たべますに", true),
       E("たべるに いきます。", "(wrong)", "Wrong: use the stem.", "たべるに", true),
       E("たべに いきます。", "Tabe ni ikimasu.", "Right: I go to eat.", "たべに いきます")],
      T0("Say: “I go to see a movie.”", "えいがを みに いきます。", "Eiga o mi ni ikimasu.", "I go to see a movie.", "みに いきます"))
  ],
  storyTitle: "Sunday plans",
  story: [
    L("Mika", "にちようびに なにを しますか。", "Nichiyoubi ni nani o shimasu ka.", "What are you doing on Sunday?"),
    L("Alex", "ともだちと かいものに いきます。", "Tomodachi to kaimono ni ikimasu.", "I'm going shopping with a friend."),
    L("Mika", "どこへ いきますか。", "Doko e ikimasu ka.", "Where are you going?"),
    L("Alex", "デパートへ いきます。ふくを かいに いきます。", "Depaato e ikimasu. Fuku o kai ni ikimasu.", "I'm going to the department store. I'm going to buy clothes."),
    L("Mika", "いい ですね。わたしは えいがを みに いきます。", "Ii desu ne. Watashi wa eiga o mi ni ikimasu.", "Nice. I'm going to see a movie."),
    L("Alex", "いっしょに いきませんか。", "Issho ni ikimasen ka.", "Shall we go together?"),
    L("Mika", "はい、いきましょう。", "Hai, ikimashou.", "Yes, let's go.")
  ],
  words: [
    W("かいもの", "kaimono", "shopping"),
    W("えいが", "eiga", "movie"),
    W("デパート", "depaato", "department store"),
    W("りょこう", "ryokou", "travel"),
    W("およぎます", "oyogimasu", "swim"),
    W("あそびます", "asobimasu", "play, hang out"),
    W("ふく", "fuku", "clothes"),
    W("にちようび", "nichiyoubi", "Sunday")
  ],
  tips: [
    "Remove masu, add ni, then ikimasu: tabe ni ikimasu.",
    "An action noun like kaimono takes ni directly.",
    "Never keep masu before ni."
  ],
  quiz: [
    ask("ni-ikimasu", "How do you say “I go to eat”?", "たべに いきます。", ["たべますに いきます。", "たべるに いきます。"], "Stem + に いきます."),
    ask("ni-ikimasu", "How do you say “I go shopping”?", "かいものに いきます。", ["かいものを いきます。", "かいものが いきます。"], "Action noun + に いきます."),
    ask("ni-ikimasu", "Which is an invitation to go see a movie?", "えいがを みに いきませんか。", ["えいがを みるに いきませんか。", "えいがを みますに いきませんか。"], "みに いきませんか."),
    ask("ni-ikimasu", "What is the stem of のみます?", "のみ", ["のむ", "のま"], "Remove ます."),
    ask("ni-ikimasu", "How do you say “come to play”?", "あそびに きます", ["あそぶに きます", "あそびます きます"], "Stem + に きます.")
  ]
});

export const naru = lesson({
  id: "naru", number: 76, title: "～に / く なります: Become",
  summary: "Say that something becomes something else with なります.",
  objective: "By the end you can say “It became cold” and “I want to become a teacher”.",
  teach: [
    T("The idea", "なります = become",
      ["{なります|narimasu} means “become” or “get”. The word before it changes depending on its type.",
       "{さむく なります|samuku narimasu} means “it gets cold”. {げんきに なります|genki ni narimasu} means “I become well”."],
      [E("さむく なりました。", "Samuku narimashita.", "It became cold.", "さむく なり"),
       E("げんきに なりました。", "Genki ni narimashita.", "I became well.", "げんきに なり")]),
    T("い-adjectives", "Drop い, add く",
      ["For an {い|i}-adjective, drop the last {い|i} and add {く|ku}, then {なります|narimasu}. {あつい|atsui} becomes {あつく なります|atsuku narimasu}. {ながい|nagai} becomes {ながく なります|nagaku narimasu}.",
       "This is the same {く|ku} you used in the negative."],
      [E("あつく なります。", "Atsuku narimasu.", "It gets hot.", "あつく"),
       E("よるは さむく なります。", "Yoru wa samuku narimasu.", "It gets cold at night.", "さむく")]),
    T("な-adjectives and nouns", "Add に",
      ["For a {な|na}-adjective or a noun, add {に|ni}. {げんき|genki} becomes {げんきに なります|genki ni narimasu}. {いしゃ|isha}, “doctor”, becomes {いしゃに なります|isha ni narimasu}.",
       "So {に|ni} marks what you become."],
      [E("まちが しずかに なりました。", "Machi ga shizuka ni narimashita.", "The town became quiet.", "しずかに"),
       E("いしゃに なります。", "Isha ni narimasu.", "I will become a doctor.", "いしゃに")]),
    T("いい is special", "いい becomes よく",
      ["The adjective {いい|ii} changes to {よ|yo} in this pattern. {よく なります|yoku narimasu} means “gets better”.",
       "Use it for health, weather or skill."],
      [E("よく なりました。", "Yoku narimashita.", "It got better.", "よく なり"),
       E("ねつが よく なりました。", "Netsu ga yoku narimashita.", "The fever got better.", "よく なり")]),
    T("Wanting to become", "なりたい",
      ["Join it with {たい|tai}: {なりたい|naritai} means “want to become”. {いしゃに なりたい です|isha ni naritai desu} means “I want to become a doctor”.",
       "It is a nice way to talk about dreams."],
      [E("いしゃに なりたい です。", "Isha ni naritai desu.", "I want to become a doctor.", "なりたい"),
       E("にほんごが じょうずに なりたい です。", "Nihongo ga jouzu ni naritai desu.", "I want to get good at Japanese.", "じょうずに")]),
    T("Common mistakes", "Match the ending to the word type",
      ["Do not use {に|ni} after an {い|i}-adjective: {さむいに なります|samui ni narimasu} is wrong; use {さむく|samuku}. Do not use {く|ku} after a {な|na}-adjective or a noun: {げんきく なります|genkiku narimasu} is wrong; use {げんきに|genki ni}.",
       "Check the type of the word first."],
      [E("さむいに なりました。", "(wrong)", "Wrong: use く.", "さむいに", true),
       E("げんきく なりました。", "(wrong)", "Wrong: use に.", "げんきく", true),
       E("さむく なりました。", "Samuku narimashita.", "Right: It became cold.", "さむく なり")],
      T0("Say: “It became warm.”", "あたたかく なりました。", "Atatakaku narimashita.", "It became warm.", "あたたかく"))
  ],
  storyTitle: "Spring",
  story: [
    L("Mika", "あたたかく なりました ね。", "Atatakaku narimashita ne.", "It has become warm, hasn't it."),
    L("Alex", "はい。さくらも きれいに なりました。", "Hai. Sakura mo kirei ni narimashita.", "Yes. The cherry blossoms have become pretty too."),
    L("Mika", "ねつは どう ですか。", "Netsu wa dou desu ka.", "How is your fever?"),
    L("Alex", "よく なりました。げんきに なりました。", "Yoku narimashita. Genki ni narimashita.", "It got better. I'm well again."),
    L("Mika", "よかった です。", "Yokatta desu.", "I'm glad."),
    L("Alex", "わたしは にほんごの せんせいに なりたい です。", "Watashi wa nihongo no sensei ni naritai desu.", "I want to become a Japanese teacher."),
    L("Mika", "いい ゆめ ですね。", "Ii yume desu ne.", "That's a nice dream.")
  ],
  words: [
    W("なります", "narimasu", "become"),
    W("さくら", "sakura", "cherry blossom"),
    W("きれい", "kirei", "pretty, clean"),
    W("あたたかい", "atatakai", "warm"),
    W("げんき", "genki", "well, healthy"),
    W("ゆめ", "yume", "dream"),
    W("せんせい", "sensei", "teacher"),
    W("いしゃ", "isha", "doctor")
  ],
  tips: [
    "I-adjectives: drop i, add ku, then narimasu.",
    "Na-adjectives and nouns: add ni, then narimasu.",
    "Ii becomes yoku: yoku narimashita means it got better."
  ],
  quiz: [
    ask("naru", "How do you say “It became cold”?", "さむく なりました。", ["さむいに なりました。", "さむに なりました。"], "い-adjective: drop い, add く."),
    ask("naru", "How do you say “I became well”?", "げんきに なりました。", ["げんきく なりました。", "げんきな なりました。"], "な-adjective + に."),
    ask("naru", "How do you say “I will become a doctor”?", "いしゃに なります。", ["いしゃく なります。", "いしゃを なります。"], "Noun + に なります."),
    ask("naru", "What does よく なりました mean?", "It got better", ["It got worse", "It was good"], "いい becomes よく."),
    ask("naru", "How do you say “I want to become a teacher”?", "せんせいに なりたい です。", ["せんせいく なりたい です。", "せんせいに なります たい です。"], "なる + たい: なりたい.")
  ]
});

export const node = lesson({
  id: "node", number: 77, title: "ので: Because (Softer)",
  summary: "Give a reason politely with ので.",
  objective: "By the end you can say “I have a fever, so I'll rest” and explain yourself politely.",
  teach: [
    T("The idea", "Plain form + ので",
      ["{ので|node} gives a reason, like {から|kara}, but it sounds softer and more like an explanation of a fact. Put the plain form before it.",
       "{ねつが ある ので、やすみます|netsu ga aru node, yasumimasu} means “I have a fever, so I'll rest”."],
      [E("ねつが ある ので、やすみます。", "Netsu ga aru node, yasumimasu.", "I have a fever, so I'll rest.", "ある ので"),
       E("さむい ので、コートを きます。", "Samui node, kooto o kimasu.", "It's cold, so I'll wear a coat.", "さむい ので")]),
    T("Which forms", "Use plain verbs and adjectives",
      ["With verbs and {い|i}-adjectives, use the plain form: {たかい ので|takai node}, {いそがしい ので|isogashii node}, {いく ので|iku node}. The ending of the whole sentence can stay polite.",
       "Plain before {ので|node}, polite at the end."],
      [E("たかい ので、かいません。", "Takai node, kaimasen.", "It's expensive, so I won't buy it.", "たかい ので"),
       E("いそがしい ので、いきません。", "Isogashii node, ikimasen.", "I'm busy, so I won't go.", "いそがしい ので")]),
    T("Nouns and な-adjectives", "Use な, not だ",
      ["After a noun or a {な|na}-adjective, use {な|na} instead of {だ|da}. {あめ なので|ame na node} means “because it's rain”. {しずか なので|shizuka na node} means “because it's quiet”.",
       "This is the main difference from {から|kara}."],
      [E("あめ なので、うちに います。", "Ame na node, uchi ni imasu.", "It's raining, so I'm staying home.", "なので"),
       E("しずか なので、すきです。", "Shizuka na node, suki desu.", "It's quiet, so I like it.", "なので")]),
    T("Why choose it", "Softer than から",
      ["{から|kara} can sound like your own strong reason. {ので|node} sounds like an explanation of the situation, so it is common when you excuse yourself, or explain to a teacher or a boss.",
       "Both are correct. This is a matter of feeling."],
      [E("すみません、ねつが ある ので、やすみます。", "Sumimasen, netsu ga aru node, yasumimasu.", "Sorry, I have a fever, so I'll rest.", "ある ので"),
       E("あした テストが ある ので、べんきょうします。", "Ashita tesuto ga aru node, benkyou shimasu.", "I have a test tomorrow, so I'll study.", "ある ので")]),
    T("Common mistakes", "Do not use だので",
      ["Do not use {だ|da} before {ので|node}. {あめ だので|ame da node} is wrong; say {あめ なので|ame na node}. {しずか だので|shizuka da node} is wrong; say {しずか なので|shizuka na node}.",
       "Remember: noun or {な|na}-adjective, then {な|na}."],
      [E("あめ だので、うちに います。", "(wrong)", "Wrong: use なので.", "だので", true),
       E("しずか だので、すきです。", "(wrong)", "Wrong: use なので.", "だので", true),
       E("あめ なので、うちに います。", "Ame na node, uchi ni imasu.", "Right: It's raining, so I'm home.", "なので")],
      T0("Say: “It's cold, so I'll wear a coat.”", "さむい ので、コートを きます。", "Samui node, kooto o kimasu.", "It's cold, so I'll wear a coat.", "ので"))
  ],
  storyTitle: "Calling in sick",
  story: [
    L("Alex", "せんせい、すみません。ねつが ある ので、きょうは やすみます。", "Sensei, sumimasen. Netsu ga aru node, kyou wa yasumimasu.", "Teacher, sorry. I have a fever, so I'll be absent today."),
    L("Teacher", "だいじょうぶ ですか。", "Daijoubu desu ka.", "Are you all right?"),
    L("Alex", "はい、すこし あたまが いたい ので、ねます。", "Hai, sukoshi atama ga itai node, nemasu.", "Yes, my head hurts a little, so I'll sleep."),
    L("Teacher", "おだいじに。くすりを のんだ ほうが いい ですよ。", "Odaijini. Kusuri o nonda hou ga ii desu yo.", "Take care. You should take medicine."),
    L("Alex", "はい、ありがとう ございます。", "Hai, arigatou gozaimasu.", "Yes, thank you.")
  ],
  words: [
    W("ので", "node", "because (soft)"),
    W("あたま", "atama", "head"),
    W("いたい", "itai", "painful"),
    W("だいじょうぶ", "daijoubu", "all right"),
    W("コート", "kooto", "coat"),
    W("きます", "kimasu", "wear"),
    W("テスト", "tesuto", "test"),
    W("いそがしい", "isogashii", "busy")
  ],
  tips: [
    "Plain form plus node gives a soft reason.",
    "After a noun or na-adjective, use na node, never da node.",
    "Node is good for excuses and explanations."
  ],
  quiz: [
    ask("node", "Which is correct?", "あめ なので、うちに います。", ["あめ だので、うちに います。", "あめ ので、うちに います。"], "Noun + なので."),
    ask("node", "Which form goes before ので for an い-adjective?", "たかい ので", ["たかく ので", "たかいです ので"], "Plain form + ので."),
    ask("node", "Which one sounds softer?", "ので", ["から", "ね"], "ので is softer than から."),
    ask("node", "How do you say “Because it's quiet”?", "しずか なので", ["しずか だので", "しずかい ので"], "な-adjective + なので."),
    ask("node", "How can the sentence end?", "polite, like やすみます", ["only plain", "only with ね"], "Plain before ので, polite at the end.")
  ]
});
