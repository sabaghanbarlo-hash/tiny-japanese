// Genki I Grammar, chapter 10 (part 2: tea or something, each, choosing): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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


export const demoNoun = lesson({
  id: "demo-noun", number: 90, title: "～でも: Tea or Something",
  summary: "Make a gentle suggestion with noun + でも, and say “even” with でも.",
  objective: "By the end you can say “Shall we have tea or something?” and “Even a child can do it”.",
  teach: [
    T("The idea", "Noun + でも = or something",
      ["Put {でも|demo} after a noun to make a soft suggestion, like “or something”. {おちゃでも のみませんか|ocha demo nomimasen ka} means “Shall we have tea or something?”.",
       "It does not say it must be tea. It leaves the choice open and friendly."],
      [E("おちゃでも のみませんか。", "Ocha demo nomimasen ka.", "Shall we have tea or something?", "でも"),
       E("コーヒーでも のみましょう。", "Koohii demo nomimashou.", "Let's have coffee or something.", "でも")]),
    T("Inviting someone", "Softer than a direct offer",
      ["It is a nice way to invite. {えいがでも みませんか|eiga demo mimasen ka} means “How about a movie or something?”.",
       "It is gentle, because it does not push one exact plan."],
      [E("えいがでも みませんか。", "Eiga demo mimasen ka.", "How about a movie or something?", "でも"),
       E("さんぽでも しませんか。", "Sanpo demo shimasen ka.", "How about a walk or something?", "でも")]),
    T("Particles", "It replaces を and が",
      ["{でも|demo} replaces {を|o} and {が|ga}. Do not say {おちゃをでも|ocha o demo}. Just say {おちゃでも|ocha demo}.",
       "Other particles, like {に|ni} and {へ|e}, can stay before it."],
      [E("おちゃでも のみませんか。", "Ocha demo nomimasen ka.", "Shall we have tea or something?", "おちゃでも"),
       E("ケーキでも たべましょう。", "Keeki demo tabemashou.", "Let's eat cake or something.", "ケーキでも")]),
    T("A second meaning: even", "Even a child",
      ["{でも|demo} after a noun can also mean “even”. {こどもでも できます|kodomo demo dekimasu} means “Even a child can do it”.",
       "The suggestion meaning usually comes with a verb like {のみませんか|nomimasen ka}. The “even” meaning shows a surprising case."],
      [E("こどもでも できます。", "Kodomo demo dekimasu.", "Even a child can do it.", "でも"),
       E("にほんごでも できます。", "Nihongo demo dekimasu.", "I can do it even in Japanese.", "でも")]),
    T("Not the same as でも (but)", "Beginning of a sentence",
      ["You already know {でも|demo} at the start of a sentence, meaning “but”. That is a different use. {でも、たかい です|demo, takai desu} means “But it's expensive”.",
       "Look at where it stands. At the start it means “but”. Right after a noun it means “or something” or “even”."],
      [E("でも、たかい です。", "Demo, takai desu.", "But it's expensive.", "でも"),
       E("おちゃでも どうですか。", "Ocha demo dou desu ka.", "How about tea or something?", "でも")]),
    T("Common mistakes", "Do not add を",
      ["Do not add {を|o}: {おちゃを でも のみませんか|ocha o demo nomimasen ka} is wrong.",
       "Noun first, then {でも|demo}."],
      [E("おちゃを でも のみませんか。", "(wrong)", "Wrong: drop を.", "を でも", true),
       E("おちゃでも のみませんか。", "Ocha demo nomimasen ka.", "Right.", "おちゃでも")],
      T0("Say: “Shall we have tea or something?”", "おちゃでも のみませんか。", "Ocha demo nomimasen ka.", "Shall we have tea or something?", "でも"))
  ],
  storyTitle: "A break",
  story: [
    L("Mika", "つかれました ね。コーヒーでも のみませんか。", "Tsukaremashita ne. Koohii demo nomimasen ka.", "We're tired. Shall we have coffee or something?"),
    L("Alex", "いい ですね。ケーキでも たべましょう。", "Ii desu ne. Keeki demo tabemashou.", "Good idea. Let's have cake or something."),
    L("Mika", "どこへ いきますか。", "Doko e ikimasu ka.", "Where shall we go?"),
    L("Alex", "うちの ちかくの きっさてんへ いきましょう。", "Uchi no chikaku no kissaten e ikimashou.", "Let's go to the cafe near my house."),
    L("Mika", "そこは しずか ですか。", "Soko wa shizuka desu ka.", "Is it quiet there?"),
    L("Alex", "はい。こどもでも いっても いい ですよ。", "Hai. Kodomo demo itte mo ii desu yo.", "Yes. Even children are allowed to go.")
  ],
  words: [
    W("でも", "demo", "or something, even"),
    W("おちゃ", "ocha", "tea"),
    W("コーヒー", "koohii", "coffee"),
    W("きっさてん", "kissaten", "cafe"),
    W("ちかく", "chikaku", "near, nearby"),
    W("つかれます", "tsukaremasu", "get tired"),
    W("さんぽ", "sanpo", "walk"),
    W("こども", "kodomo", "child")
  ],
  tips: [
    "Noun plus demo makes a soft suggestion: ocha demo.",
    "Demo replaces o and ga.",
    "At the start of a sentence, demo means but."
  ],
  quiz: [
    ask("demo-noun", "How do you say “Shall we have tea or something?”", "おちゃでも のみませんか。", ["おちゃを でも のみませんか。", "おちゃが でも のみませんか。"], "Noun + でも."),
    ask("demo-noun", "What does でも after a noun suggest?", "or something", ["but only", "never"], "A soft, open suggestion."),
    ask("demo-noun", "What does でも at the start of a sentence mean?", "but", ["or something", "even"], "でも, ... = But ..."),
    ask("demo-noun", "Which particle does でも replace?", "を", ["に", "へ"], "でも replaces を and が."),
    ask("demo-noun", "What does こどもでも できます mean?", "Even a child can do it", ["Only a child can", "A child cannot"], "でも can mean even.")
  ]
});

export const zutsu = lesson({
  id: "zutsu", number: 91, title: "ずつ: Each, at a Time",
  summary: "Say “each”, “one at a time” and “little by little” with ずつ.",
  objective: "By the end you can say “one each” and “I study a little every day”.",
  teach: [
    T("The idea", "Amount + ずつ",
      ["{ずつ|zutsu} after an amount means “each” or “at a time”. {ひとつずつ|hitotsu zutsu} means “one each” or “one at a time”.",
       "It spreads the amount evenly."],
      [E("ひとつずつ たべます。", "Hitotsu zutsu tabemasu.", "I eat them one at a time.", "ずつ"),
       E("ふたつずつ かいました。", "Futatsu zutsu kaimashita.", "I bought two of each.", "ずつ")]),
    T("With people", "One each",
      ["With giving, it says what each person gets. {ひとりに ひとつずつ あげます|hitori ni hitotsu zutsu agemasu} means “I give one to each person”.",
       "You learned {あげます|agemasu} earlier."],
      [E("ひとりに ひとつずつ あげます。", "Hitori ni hitotsu zutsu agemasu.", "I give one to each person.", "ひとつずつ"),
       E("ふたりに ケーキを ひとつずつ あげました。", "Futari ni keeki o hitotsu zutsu agemashita.", "I gave each of the two people a cake.", "ひとつずつ")]),
    T("Little by little", "すこしずつ",
      ["{すこしずつ|sukoshi zutsu} means “little by little”. It is great for talking about slow progress.",
       "{まいにち すこしずつ べんきょうします|mainichi sukoshi zutsu benkyou shimasu} means “I study a little every day”."],
      [E("まいにち すこしずつ べんきょうします。", "Mainichi sukoshi zutsu benkyou shimasu.", "I study a little every day.", "すこしずつ"),
       E("すこしずつ じょうずに なりました。", "Sukoshi zutsu jouzu ni narimashita.", "I got better little by little.", "すこしずつ")]),
    T("Compare with だけ", "Each, or only",
      ["{ずつ|zutsu} means each or at a time. {だけ|dake} means only. {ひとつずつ かいました|hitotsu zutsu kaimashita} means “I bought one of each”. {ひとつだけ かいました|hitotsu dake kaimashita} means “I bought only one”.",
       "Be careful, the two are very different."],
      [E("ひとつずつ かいました。", "Hitotsu zutsu kaimashita.", "I bought one of each.", "ずつ"),
       E("ひとつだけ かいました。", "Hitotsu dake kaimashita.", "I bought only one.", "だけ")]),
    T("Common mistakes", "After the amount",
      ["Put {ずつ|zutsu} after the amount, not before. {ずつ ひとつ|zutsu hitotsu} is wrong. Also do not use it with a plain thing without an amount: {りんごずつ|ringo zutsu} is wrong.",
       "Amount first, then {ずつ|zutsu}."],
      [E("ずつ ひとつ たべます。", "(wrong)", "Wrong: ひとつずつ.", "ずつ ひとつ", true),
       E("ひとつずつ たべます。", "Hitotsu zutsu tabemasu.", "Right: one at a time.", "ひとつずつ")],
      T0("Say: “I study a little every day.”", "まいにち すこしずつ べんきょうします。", "Mainichi sukoshi zutsu benkyou shimasu.", "I study a little every day.", "すこしずつ"))
  ],
  storyTitle: "Sharing cakes",
  story: [
    L("Mika", "ケーキを みっつ かいました。", "Keeki o mittsu kaimashita.", "I bought three cakes."),
    L("Alex", "さんにんで たべましょう。", "Sannin de tabemashou.", "Let's eat them with the three of us."),
    L("Mika", "はい。ひとりに ひとつずつ あげます。", "Hai. Hitori ni hitotsu zutsu agemasu.", "Yes. I'll give one to each person."),
    L("Alex", "ありがとう。ミカさんは にほんごが じょうずに なりましたね。", "Arigatou. Mika-san wa nihongo ga jouzu ni narimashita ne.", "Thanks. Your Japanese has gotten good."),
    L("Mika", "まいにち すこしずつ べんきょうして います。", "Mainichi sukoshi zutsu benkyou shite imasu.", "I study a little every day."),
    L("Alex", "すごい ですね。", "Sugoi desu ne.", "That's great.")
  ],
  words: [
    W("ずつ", "zutsu", "each, at a time"),
    W("ひとつずつ", "hitotsu zutsu", "one each"),
    W("すこしずつ", "sukoshi zutsu", "little by little"),
    W("まいにち", "mainichi", "every day"),
    W("ケーキ", "keeki", "cake"),
    W("じょうず", "jouzu", "skilled"),
    W("さんにん", "sannin", "three people"),
    W("あげます", "agemasu", "give")
  ],
  tips: [
    "Amount plus zutsu means each or at a time.",
    "Sukoshi zutsu means little by little.",
    "Zutsu means each; dake means only."
  ],
  quiz: [
    ask("zutsu", "How do you say “one each”?", "ひとつずつ", ["ずつひとつ", "ひとつだけ"], "Amount + ずつ."),
    ask("zutsu", "What does すこしずつ mean?", "little by little", ["a little only", "not at all"], "すこしずつ is little by little."),
    ask("zutsu", "How is ずつ different from だけ?", "ずつ means each", ["ずつ means only", "no difference"], "ずつ = each, だけ = only."),
    ask("zutsu", "Which sentence means “I give one to each person”?", "ひとりに ひとつずつ あげます。", ["ひとりに ひとつだけ あげます。", "ひとりを ひとつずつ あげます。"], "ひとつずつ."),
    ask("zutsu", "Where does ずつ go?", "after the amount", ["before the amount", "after the verb"], "Amount + ずつ.")
  ]
});

export const niSuru = lesson({
  id: "ni-suru", number: 92, title: "～に します: I'll Have That",
  summary: "Choose something with に します.",
  objective: "By the end you can say “I'll have coffee” and ask “Which one will you take?”.",
  teach: [
    T("The idea", "Thing + に します",
      ["To say what you choose, put the thing before {に します|ni shimasu}. {コーヒーに します|koohii ni shimasu} means “I'll have coffee” or “I'll go with coffee”.",
       "{します|shimasu} here means “decide on”."],
      [E("コーヒーに します。", "Koohii ni shimasu.", "I'll have coffee.", "に します"),
       E("わたしは ラーメンに します。", "Watashi wa raamen ni shimasu.", "I'll have ramen.", "に します")]),
    T("Asking", "どれに しますか",
      ["To ask someone to choose, use {どれ|dore}, “which one”. {どれに しますか|dore ni shimasu ka} means “Which one will you take?”. Or {なにに しますか|nani ni shimasu ka}, “What will you have?”.",
       "Waiters use it a lot."],
      [E("どれに しますか。", "Dore ni shimasu ka.", "Which one will you take?", "どれに しますか"),
       E("なにに しますか。", "Nani ni shimasu ka.", "What will you have?", "なにに しますか")]),
    T("Ordering", "At a restaurant",
      ["It is the natural way to order. {わたしは カレーに します|watashi wa karee ni shimasu} means “I'll have curry”. {わたしも おなじ ものに します|watashi mo onaji mono ni shimasu} means “I'll have the same”.",
       "It is polite and simple."],
      [E("わたしは カレーに します。", "Watashi wa karee ni shimasu.", "I'll have curry.", "に します"),
       E("わたしも おなじ ものに します。", "Watashi mo onaji mono ni shimasu.", "I'll have the same.", "ものに します")]),
    T("します or なります", "Decide or become",
      ["{に します|ni shimasu} is a choice you make. {に なります|ni narimasu}, from the earlier lesson, is a change that happens. {コーヒーに します|koohii ni shimasu} is “I choose coffee”. {げんきに なります|genki ni narimasu} is “I become well”.",
       "Remember who is in control. If you decide, use {します|shimasu}."],
      [E("コーヒーに します。", "Koohii ni shimasu.", "I choose coffee.", "に します"),
       E("げんきに なります。", "Genki ni narimasu.", "I become well.", "に なります")]),
    T("Common mistakes", "Use に, not を",
      ["Do not use {を|o} to choose: {コーヒーを します|koohii o shimasu} means something else, since {します|shimasu} then means “do”. Use {に|ni}: {コーヒーに します|koohii ni shimasu}.",
       "Also do not use {に なります|ni narimasu} for your own choice."],
      [E("コーヒーを します。", "(wrong here)", "Not “I'll have coffee”: use に します.", "を します", true),
       E("コーヒーに します。", "Koohii ni shimasu.", "Right: I'll have coffee.", "に します")],
      T0("Say: “I'll have tea.”", "おちゃに します。", "Ocha ni shimasu.", "I'll have tea.", "に します"))
  ],
  storyTitle: "At a restaurant",
  story: [
    L("Staff", "いらっしゃいませ。なにに しますか。", "Irasshaimase. Nani ni shimasu ka.", "Welcome. What will you have?"),
    L("Mika", "わたしは カレーに します。", "Watashi wa karee ni shimasu.", "I'll have curry."),
    L("Alex", "わたしは ラーメンに します。", "Watashi wa raamen ni shimasu.", "I'll have ramen."),
    L("Staff", "のみものは どれに しますか。", "Nomimono wa dore ni shimasu ka.", "Which drink will you take?"),
    L("Mika", "おちゃに します。", "Ocha ni shimasu.", "I'll have tea."),
    L("Alex", "わたしも おなじ ものに します。", "Watashi mo onaji mono ni shimasu.", "I'll have the same.")
  ],
  words: [
    W("に します", "ni shimasu", "decide on, have"),
    W("どれ", "dore", "which one"),
    W("カレー", "karee", "curry"),
    W("ラーメン", "raamen", "ramen"),
    W("のみもの", "nomimono", "drink"),
    W("おなじ", "onaji", "the same"),
    W("もの", "mono", "thing"),
    W("いらっしゃいませ", "irasshaimase", "welcome")
  ],
  tips: [
    "Thing plus ni shimasu means I'll have that.",
    "Dore ni shimasu ka asks which one will you take.",
    "Shimasu is a choice; narimasu is a change that happens."
  ],
  quiz: [
    ask("ni-suru", "How do you say “I'll have coffee”?", "コーヒーに します。", ["コーヒーを します。", "コーヒーに なります。"], "Thing + に します."),
    ask("ni-suru", "How do you ask “Which one will you take?”", "どれに しますか。", ["どれを なりますか。", "どれが しますか。"], "どれに しますか."),
    ask("ni-suru", "Which means “I'll have the same”?", "おなじ ものに します。", ["おなじ ものに なります。", "おなじ ものを します。"], "おなじ ものに します."),
    ask("ni-suru", "Which is a choice you make?", "に します", ["に なります", "に ありません"], "します is a decision."),
    ask("ni-suru", "Which particle goes before します when choosing?", "に", ["を", "が"], "に します.")
  ]
});
