// Genki I Grammar, chapter 5 (part 1): adjectives. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const iPast = lesson({
  id: "i-adj-past", number: 38, title: "い-Adjectives in the Past",
  summary: "Say that something was big, cheap or delicious: おおきかった です.",
  objective: "By the end you can put い-adjectives into the past, positive and negative.",
  teach: [
    T("The idea", "い becomes かった",
      ["To put an {い|i}-adjective into the past, drop the final {い|i} and add {かった|katta}. {おいしい|oishii} becomes {おいしかった|oishikatta}, “was delicious”.",
       "Then add {です|desu} to be polite: {おいしかった です|oishikatta desu}."],
      [E("おいしい です。", "Oishii desu.", "It is delicious.", "おいしい"),
       E("おいしかった です。", "Oishikatta desu.", "It was delicious.", "かった"),
       E("たかかった です。", "Takakatta desu.", "It was expensive.", "かった")]),
    T("More examples", "The same rule everywhere",
      ["{あつい|atsui} becomes {あつかった|atsukatta}. {たのしい|tanoshii}, fun, becomes {たのしかった|tanoshikatta}. {おもしろい|omoshiroi} becomes {おもしろかった|omoshirokatta}.",
       "Just replace the last {い|i} with {かった|katta}."],
      [E("あつかった です。", "Atsukatta desu.", "It was hot.", "かった"),
       E("たのしかった です。", "Tanoshikatta desu.", "It was fun.", "かった"),
       E("おもしろかった です。", "Omoshirokatta desu.", "It was interesting.", "かった")]),
    T("The special case: いい", "いい becomes よかった",
      ["Again {いい|ii} is special. It uses the old form {よい|yoi}, so the past is {よかった|yokatta}. {いかった|ikatta} is wrong.",
       "{よかった です|yokatta desu} also means “I'm glad”, “that's good”, which you will hear a lot."],
      [E("よかった です。", "Yokatta desu.", "It was good. / I'm glad.", "よかった"),
       E("てんきが よかった です。", "Tenki ga yokatta desu.", "The weather was good.", "よかった")]),
    T("The negative past", "くなかった",
      ["For “was not”, take the negative {くない|kunai} and change it to {くなかった|kunakatta}. {おいしくない|oishikunai} becomes {おいしくなかった|oishikunakatta}, “was not delicious”.",
       "Add {です|desu} for politeness: {おいしくなかった です|oishikunakatta desu}."],
      [E("おいしくなかった です。", "Oishikunakatta desu.", "It was not delicious.", "くなかった"),
       E("たかくなかった です。", "Takakunakatta desu.", "It was not expensive.", "くなかった"),
       E("よくなかった です。", "Yokunakatta desu.", "It was not good.", "くなかった")]),
    T("All four forms", "A table to memorise",
      ["Four forms of {たかい|takai}: {たかい です|takai desu}, is expensive. {たかかった です|takakatta desu}, was expensive. {たかくない です|takakunai desu}, is not expensive. {たかくなかった です|takakunakatta desu}, was not expensive.",
       "Notice that {かった|katta} and {くなかった|kunakatta} carry the past, so {です|desu} never changes to {でした|deshita} here."],
      [E("たかい です。", "Takai desu.", "It is expensive.", "たかい"),
       E("たかかった です。", "Takakatta desu.", "It was expensive.", "たかかった"),
       E("たかくない です。", "Takakunai desu.", "It is not expensive.", "たかくない"),
       E("たかくなかった です。", "Takakunakatta desu.", "It was not expensive.", "たかくなかった")]),
    T("Common mistakes", "Do not use でした",
      ["Do not say {たかい でした|takai deshita} for an {い|i}-adjective. That form is wrong in careful Japanese. And do not forget the special case: {よかった|yokatta}.",
       "The past is inside the adjective, so keep {です|desu}."],
      [E("たかい でした。", "(wrong)", "Wrong: the adjective must change to たかかった.", "でした", true),
       E("いかった です。", "(wrong)", "Wrong: いい becomes よかった.", "いかった", true),
       E("たかかった です。", "Takakatta desu.", "Right: It was expensive.", "たかかった")],
      T0("Say: “It was fun.”", "たのしかった です。", "Tanoshikatta desu.", "It was fun.", "かった"))
  ],
  storyTitle: "How was the trip?",
  story: [
    L("Mika", "りょこうは どう でしたか。", "Ryokou wa dou deshita ka.", "How was your trip?"),
    L("Alex", "とても たのしかった です。", "Totemo tanoshikatta desu.", "It was a lot of fun."),
    L("Mika", "てんきは よかった ですか。", "Tenki wa yokatta desu ka.", "Was the weather good?"),
    L("Alex", "いいえ、あまり よくなかった です。", "Iie, amari yokunakatta desu.", "No, it was not very good."),
    L("Mika", "ごはんは おいしかった ですか。", "Gohan wa oishikatta desu ka.", "Was the food delicious?"),
    L("Alex", "はい、でも すこし たかかった です。", "Hai, demo sukoshi takakatta desu.", "Yes, but it was a little expensive.")
  ],
  words: [
    W("かった", "katta", "was (い-adjective)"),
    W("くなかった", "kunakatta", "was not"),
    W("よかった", "yokatta", "was good"),
    W("たのしい", "tanoshii", "fun"),
    W("りょこう", "ryokou", "trip"),
    W("ごはん", "gohan", "meal, rice"),
    W("でも", "demo", "but"),
    W("てんき", "tenki", "weather")
  ],
  tips: [
    "Drop the last i and add katta: oishii becomes oishikatta.",
    "Negative past: kunakatta. Good becomes yokatta and yokunakatta.",
    "Keep desu; never use deshita after an i-adjective."
  ],
  quiz: [
    ask("i-adj-past", "What is the past of おいしい?", "おいしかった", ["おいしいでした", "おいしくった"], "Drop い, add かった."),
    ask("i-adj-past", "What is the past of いい?", "よかった", ["いかった", "いいでした"], "いい becomes よかった."),
    ask("i-adj-past", "What is the negative past of たかい?", "たかくなかった", ["たかかなかった", "たかくないでした"], "くなかった."),
    ask("i-adj-past", "Which is correct?", "たのしかった です。", ["たのしい でした。", "たのしくった です。"], "かった + です."),
    ask("i-adj-past", "How do you say “It was not good”?", "よくなかった です。", ["いくなかった です。", "よかった ない です。"], "よくなかった.")
  ]
});

export const naPast = lesson({
  id: "na-adj-past", number: 39, title: "な-Adjectives in the Past",
  summary: "Say that something was quiet or famous: しずか でした.",
  objective: "By the end you can put な-adjectives into the past, positive and negative.",
  teach: [
    T("The idea", "Treat it like a noun again",
      ["A {な|na}-adjective takes {でした|deshita} in the past, just as a noun does. {しずか です|shizuka desu} becomes {しずか でした|shizuka deshita}, “was quiet”.",
       "Nothing changes in the adjective itself."],
      [E("しずか です。", "Shizuka desu.", "It is quiet.", "です"),
       E("しずか でした。", "Shizuka deshita.", "It was quiet.", "でした"),
       E("ゆうめい でした。", "Yuumei deshita.", "It was famous.", "でした")]),
    T("The negative past", "じゃ ありませんでした",
      ["For “was not”, use {じゃ ありませんでした|ja arimasen deshita}. This is the same ending you used for nouns.",
       "{しずか じゃ ありませんでした|shizuka ja arimasen deshita} means “was not quiet”."],
      [E("しずか じゃ ありませんでした。", "Shizuka ja arimasen deshita.", "It was not quiet.", "じゃ ありませんでした"),
       E("かんたん じゃ ありませんでした。", "Kantan ja arimasen deshita.", "It was not easy.", "じゃ ありませんでした"),
       E("べんり じゃ ありませんでした。", "Benri ja arimasen deshita.", "It was not convenient.", "じゃ ありませんでした")]),
    T("All four forms", "Table for しずか",
      ["{しずか です|shizuka desu}, is quiet. {しずか でした|shizuka deshita}, was quiet. {しずか じゃ ありません|shizuka ja arimasen}, is not quiet. {しずか じゃ ありませんでした|shizuka ja arimasen deshita}, was not quiet.",
       "This is exactly the pattern of the past of nouns."],
      [E("しずか です。", "Shizuka desu.", "It is quiet.", "です"),
       E("しずか でした。", "Shizuka deshita.", "It was quiet.", "でした"),
       E("しずか じゃ ありません。", "Shizuka ja arimasen.", "It is not quiet.", "じゃ ありません"),
       E("しずか じゃ ありませんでした。", "Shizuka ja arimasen deshita.", "It was not quiet.", "じゃ ありませんでした")]),
    T("Compare the groups", "い versus な in the past",
      ["An {い|i}-adjective changes inside: {たかかった|takakatta}. A {な|na}-adjective stays the same and takes {でした|deshita}: {しずか でした|shizuka deshita}.",
       "Keep this comparison in mind. It is one of the most useful tables in the whole of Genki I."],
      [E("たかかった です。", "Takakatta desu.", "It was expensive. (い-adjective)", "たかかった"),
       E("しずか でした。", "Shizuka deshita.", "It was quiet. (な-adjective)", "でした"),
       E("きれい でした。", "Kirei deshita.", "It was pretty. (な-adjective)", "でした")]),
    T("Questions", "でしたか",
      ["Ask with {か|ka}. {しずか でしたか|shizuka deshita ka} means “was it quiet?”. Answer {はい、しずか でした|hai, shizuka deshita} or {いいえ、しずか じゃ ありませんでした|iie, shizuka ja arimasen deshita}.",
       "{どう でしたか|dou deshita ka} asks “how was it?”."],
      [E("しずか でしたか。", "Shizuka deshita ka.", "Was it quiet?", "でしたか"),
       E("どう でしたか。", "Dou deshita ka.", "How was it?", "どう"),
       E("いいえ、にぎやか でした。", "Iie, nigiyaka deshita.", "No, it was lively.", "でした")]),
    T("Common mistakes", "Do not use かった with な-adjectives",
      ["Do not add {かった|katta} to a {な|na}-adjective: {しずかかった|shizukakatta} is wrong. And do not use {でした|deshita} after an {い|i}-adjective.",
       "{きれい|kirei} is a {な|na}-adjective: say {きれい でした|kirei deshita}."],
      [E("しずかかった です。", "(wrong)", "Wrong: use でした.", "かった", true),
       E("きれかった です。", "(wrong)", "Wrong: きれい is a な-adjective.", "かった", true),
       E("しずか でした。", "Shizuka deshita.", "Right: It was quiet.", "でした")],
      T0("Say: “It was not easy.”", "かんたん じゃ ありませんでした。", "Kantan ja arimasen deshita.", "It was not easy.", "じゃ ありませんでした"))
  ],
  storyTitle: "The old town",
  story: [
    L("Alex", "きょうとは どう でしたか。", "Kyouto wa dou deshita ka.", "How was Kyoto?"),
    L("Mika", "とても きれい でした。", "Totemo kirei deshita.", "It was very pretty."),
    L("Alex", "にぎやか でしたか。", "Nigiyaka deshita ka.", "Was it lively?"),
    L("Mika", "いいえ、にぎやか じゃ ありませんでした。しずか でした。", "Iie, nigiyaka ja arimasen deshita. Shizuka deshita.", "No, it was not lively. It was quiet."),
    L("Alex", "ゆうめいな おてらにも いきましたか。", "Yuumei na otera ni mo ikimashita ka.", "Did you go to a famous temple too?"),
    L("Mika", "はい。ひとが たくさん いました。", "Hai. Hito ga takusan imashita.", "Yes. There were a lot of people.")
  ],
  words: [
    W("でした", "deshita", "was"),
    W("じゃ ありませんでした", "ja arimasen deshita", "was not"),
    W("きょうと", "Kyouto", "Kyoto"),
    W("おてら", "otera", "temple"),
    W("きれい", "kirei", "pretty, clean"),
    W("にぎやか", "nigiyaka", "lively"),
    W("しずか", "shizuka", "quiet"),
    W("かんたん", "kantan", "easy")
  ],
  tips: [
    "Na-adjectives take deshita in the past, like nouns.",
    "Negative past: ja arimasen deshita.",
    "I-adjectives change inside; na-adjectives do not."
  ],
  quiz: [
    ask("na-adj-past", "How do you say “It was quiet”?", "しずか でした。", ["しずかかった です。", "しずか ました。"], "な-adjective + でした."),
    ask("na-adj-past", "How do you say “It was not famous”?", "ゆうめい じゃ ありませんでした。", ["ゆうめいくなかった です。", "ゆうめい でした ない。"], "じゃ ありませんでした."),
    ask("na-adj-past", "Which ending does a な-adjective NOT use?", "かった", ["でした", "じゃ ありませんでした"], "かった is for い-adjectives."),
    ask("na-adj-past", "Is きれい past formed with でした or かった?", "でした", ["かった", "くなかった"], "きれい is a な-adjective."),
    ask("na-adj-past", "How do you ask “How was it?”", "どう でしたか。", ["どう ですか でした。", "なに でしたか ない。"], "どう でしたか.")
  ]
});

export const sukiKirai = lesson({
  id: "suki-kirai", number: 40, title: "すき and きらい: Likes and Dislikes",
  summary: "Say what you like and dislike with が, and how much, with だいすき and あまり すき じゃ ありません.",
  objective: "By the end you can say that you like or dislike something, and ask what someone likes.",
  teach: [
    T("The idea", "すき is an adjective",
      ["{すき|suki} means “liked”, and {きらい|kirai} means “disliked”. In Japanese they are {な|na}-adjectives, not verbs. So you do not say “I like ramen” but “ramen is liked (by me)”.",
       "This is a very common source of confusion for English speakers, so go slowly."],
      [E("すき", "suki", "liked", "すき"),
       E("きらい", "kirai", "disliked", "きらい")]),
    T("The pattern", "Thing が すき です",
      ["The thing you like is marked with {が|ga}, and then comes {すき です|suki desu}. {ラーメンが すき です|raamen ga suki desu} means “I like ramen”.",
       "If the person is obvious, you do not say {わたしは|watashi wa}. Add it only to contrast with someone else."],
      [E("ラーメンが すき です。", "Raamen ga suki desu.", "I like ramen.", "が"),
       E("ねこが すき です。", "Neko ga suki desu.", "I like cats.", "が"),
       E("わたしは いぬが すき です。", "Watashi wa inu ga suki desu.", "I like dogs.", "が")]),
    T("Dislikes", "きらい",
      ["{きらい|kirai} is strong, like “hate” or “really dislike”. {さかなが きらい です|sakana ga kirai desu} means “I dislike fish”.",
       "Because it is strong, many people soften it with {あまり すき じゃ ありません|amari suki ja arimasen}, “I do not like it very much”."],
      [E("さかなが きらい です。", "Sakana ga kirai desu.", "I dislike fish.", "きらい"),
       E("あまり すき じゃ ありません。", "Amari suki ja arimasen.", "I do not like it very much.", "あまり"),
       E("にくは あまり すき じゃ ありません。", "Niku wa amari suki ja arimasen.", "I do not like meat very much.", "あまり")]),
    T("How much", "だいすき, とても, すこし",
      ["Use degree words before {すき|suki}. {とても すき|totemo suki}, like very much. {だいすき|daisuki}, love, like a lot. {すこし すき|sukoshi suki}, like a little.",
       "For a person, {だいすき です|daisuki desu} is warm and strong, so use it with care."],
      [E("だいすき です。", "Daisuki desu.", "I love it.", "だいすき"),
       E("とても すき です。", "Totemo suki desu.", "I like it very much.", "とても"),
       E("すこし すき です。", "Sukoshi suki desu.", "I like it a little.", "すこし")]),
    T("Questions", "なにが すきですか",
      ["Ask {なにが すきですか|nani ga suki desu ka} for “what do you like?”. For a yes-no question, {ラーメンが すきですか|raamen ga suki desu ka}.",
       "A friendly answer is {はい、すきです|hai, suki desu} or {いいえ、あまり すき じゃ ありません|iie, amari suki ja arimasen}."],
      [E("なにが すきですか。", "Nani ga suki desu ka.", "What do you like?", "なにが"),
       E("どんな たべものが すきですか。", "Donna tabemono ga suki desu ka.", "What kind of food do you like?", "どんな"),
       E("すしが すきです。", "Sushi ga suki desu.", "I like sushi.", "すし")]),
    T("Linking with other lessons", "は and も",
      ["To contrast, use {は|wa}: {さかなは すき です が、にくは きらい です|sakana wa suki desu ga, niku wa kirai desu}. To add, use {も|mo}: {ねこも すき です|neko mo suki desu}, I like cats too.",
       "{が|ga} marks what you like, but {は|wa} and {も|mo} can replace it."],
      [E("ねこも すき です。", "Neko mo suki desu.", "I like cats too.", "も"),
       E("やさいは すき です。", "Yasai wa suki desu.", "As for vegetables, I like them.", "は")]),
    T("Common mistakes", "Do not use を",
      ["Do not use {を|o} with {すき|suki}: {ラーメンを すき です|raamen o suki desu} is wrong. And do not use {すきます|sukimasu}; it is not a verb.",
       "{すき|suki} also has the form {すきじゃ ありません|suki ja arimasen}, because it is a {な|na}-adjective."],
      [E("ラーメンを すき です。", "(wrong)", "Wrong: use が.", "を", true),
       E("ラーメンが すきます。", "(wrong)", "Wrong: すき is not a verb.", "すきます", true),
       E("ラーメンが すき です。", "Raamen ga suki desu.", "Right: I like ramen.", "が")],
      T0("Say: “I like cats.”", "ねこが すき です。", "Neko ga suki desu.", "I like cats.", "が"))
  ],
  storyTitle: "Favourite food",
  story: [
    L("Alex", "ミカさんは なにが すきですか。", "Mika-san wa nani ga suki desu ka.", "What do you like, Mika?"),
    L("Mika", "ラーメンが だいすきです。", "Raamen ga daisuki desu.", "I love ramen."),
    L("Alex", "さかなも すきですか。", "Sakana mo suki desu ka.", "Do you like fish too?"),
    L("Mika", "いいえ、さかなは あまり すき じゃ ありません。", "Iie, sakana wa amari suki ja arimasen.", "No, I do not like fish very much."),
    L("Alex", "わたしは さかなが すきです。", "Watashi wa sakana ga suki desu.", "I like fish."),
    L("Mika", "そうですか。わたしは にくが すきです。", "Sou desu ka. Watashi wa niku ga suki desu.", "I see. I like meat.")
  ],
  words: [
    W("すき", "suki", "liked"),
    W("きらい", "kirai", "disliked"),
    W("だいすき", "daisuki", "love, like a lot"),
    W("あまり", "amari", "not very"),
    W("すし", "sushi", "sushi"),
    W("たべもの", "tabemono", "food"),
    W("のみもの", "nomimono", "drink"),
    W("ねこ", "neko", "cat")
  ],
  tips: [
    "Thing ga suki desu: the thing you like takes ga.",
    "Suki and kirai are na-adjectives, not verbs.",
    "Soften a dislike with amari suki ja arimasen."
  ],
  quiz: [
    ask("suki-kirai", "How do you say “I like ramen”?", "ラーメンが すき です。", ["ラーメンを すき です。", "ラーメンが すきます。"], "Thing が すき です."),
    ask("suki-kirai", "Is すき a verb or an adjective?", "な-adjective", ["verb", "noun only"], "すき is a な-adjective."),
    ask("suki-kirai", "Which means “I love it”?", "だいすき です", ["きらい です", "あまり すき です"], "だいすき is love."),
    ask("suki-kirai", "How do you soften a dislike?", "あまり すき じゃ ありません", ["きらい です", "すき ません"], "あまり + negative."),
    ask("suki-kirai", "How do you ask “What do you like?”", "なにが すきですか。", ["なにを すきですか。", "だれが すきますか。"], "なにが すきですか.")
  ]
});
