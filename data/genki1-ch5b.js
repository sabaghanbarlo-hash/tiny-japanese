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

export const adjNoun = lesson({
  id: "adjective-noun", number: 35, title: "Adjectives Before Nouns",
  summary: "Put い-adjectives and な-adjectives in front of a noun to say “a big house” or “a quiet town”.",
  objective: "By the end you can describe a noun with either kind of adjective.",
  teach: [
    T("The idea", "Adjective + noun",
      ["Until now an adjective came before {です|desu}. Now you will put it in front of a noun, as in English: “a big house”, “a quiet town”.",
       "Japanese does this the same way English does: the describing word comes first, then the noun."],
      [E("おおきい いえ", "ookii ie", "a big house", "おおきい"),
       E("しずかな まち", "shizuka na machi", "a quiet town", "しずかな")]),
    T("い-adjectives: nothing to add", "い-adjective + noun",
      ["With an {い|i}-adjective, just place it directly before the noun. It does not change at all. {あたらしい くるま|atarashii kuruma} means “a new car”.",
       "That is why they are the easy group."],
      [E("あたらしい くるま", "atarashii kuruma", "a new car", "あたらしい"),
       E("やすい ほん", "yasui hon", "a cheap book", "やすい"),
       E("おいしい ラーメン", "oishii raamen", "delicious ramen", "おいしい")]),
    T("な-adjectives: add な", "な-adjective + な + noun",
      ["With a {な|na}-adjective you must add {な|na} between the adjective and the noun. That is exactly where the name of the group comes from. {しずかな まち|shizuka na machi} means “a quiet town”.",
       "Without the {な|na}, the sentence is wrong."],
      [E("しずかな まち", "shizuka na machi", "a quiet town", "な"),
       E("ゆうめいな ひと", "yuumei na hito", "a famous person", "な"),
       E("べんりな みせ", "benri na mise", "a convenient shop", "な")]),
    T("In a sentence", "Use it as part of a sentence",
      ["Describing phrases fit into any sentence you already know. {おおきい いえが あります|ookii ie ga arimasu} means “there is a big house”. {しずかな まちに すんでいます|shizuka na machi ni sunde imasu} would be “I live in a quiet town”, but we will study that verb form later.",
       "For now, practice with {です|desu} and {あります|arimasu}."],
      [E("おおきい いえが あります。", "Ookii ie ga arimasu.", "There is a big house.", "おおきい"),
       E("きれいな ともだちが います。", "Kirei na tomodachi ga imasu.", "(I) have a pretty friend.", "きれいな"),
       E("これは ふるい ほん です。", "Kore wa furui hon desu.", "This is an old book.", "ふるい")]),
    T("Two adjectives", "Stacking",
      ["You can use more than one adjective. Put them one after another before the noun. {おおきくて|ookikute} is a form you will learn later, so for now just keep to one adjective per noun.",
       "A simple way to add detail is a degree word: {とても おおきい いえ|totemo ookii ie}, a very big house."],
      [E("とても おおきい いえ", "totemo ookii ie", "a very big house", "とても"),
       E("とても きれいな へや", "totemo kirei na heya", "a very pretty room", "きれいな")]),
    T("Common mistakes", "Do not forget な, and do not add it to い",
      ["Do not leave out {な|na} with a {な|na}-adjective: {しずか まち|shizuka machi} is wrong. And do not add {な|na} to an {い|i}-adjective: {おおきい な いえ|ookii na ie} is wrong.",
       "Remember {きれい|kirei}: it is a {な|na}-adjective, so you say {きれいな|kirei na}."],
      [E("しずか まち", "(wrong)", "Wrong: add な.", "しずか", true),
       E("おおきい な いえ", "(wrong)", "Wrong: no な after い-adjectives.", "な", true),
       E("しずかな まち", "shizuka na machi", "Right: a quiet town.", "しずかな")],
      T0("Say: “a pretty room.”", "きれいな へや", "kirei na heya", "a pretty room", "きれいな"))
  ],
  storyTitle: "Looking for a flat",
  story: [
    L("Alex", "どんな へやが すきですか。", "Donna heya ga suki desu ka.", "What kind of room do you like?"),
    L("Mika", "あかるい へやが すきです。", "Akarui heya ga suki desu.", "I like a bright room."),
    L("Alex", "この へやは どうですか。", "Kono heya wa dou desu ka.", "How about this room?"),
    L("Mika", "しずかな へやですね。", "Shizuka na heya desu ne.", "It's a quiet room."),
    L("Alex", "あたらしい ベッドも あります。", "Atarashii beddo mo arimasu.", "There is a new bed too."),
    L("Mika", "この へやに します。", "Kono heya ni shimasu.", "I will take this room.")
  ],
  words: [
    W("おおきい いえ", "ookii ie", "a big house"),
    W("あたらしい くるま", "atarashii kuruma", "a new car"),
    W("しずかな まち", "shizuka na machi", "a quiet town"),
    W("ゆうめいな ひと", "yuumei na hito", "a famous person"),
    W("いえ", "ie", "house"),
    W("くるま", "kuruma", "car"),
    W("みせ", "mise", "shop"),
    W("あかるい", "akarui", "bright")
  ],
  tips: [
    "An い-adjective goes straight before the noun, unchanged.",
    "A na-adjective needs na between it and the noun: shizuka na machi.",
    "Never add na to an i-adjective."
  ],
  quiz: [
    ask("adjective-noun", "How do you say “a quiet town”?", "しずかな まち", ["しずか まち", "しずかい まち"], "な-adjective + な + noun."),
    ask("adjective-noun", "How do you say “a big house”?", "おおきい いえ", ["おおきいな いえ", "おおきな いえ です"], "い-adjective goes straight before the noun."),
    ask("adjective-noun", "What goes between a な-adjective and a noun?", "な", ["の", "が"], "な links them."),
    ask("adjective-noun", "How do you say “a pretty room”?", "きれいな へや", ["きれい へや", "きれいい へや"], "きれい is a な-adjective."),
    ask("adjective-noun", "Which is wrong?", "おおきい な いえ", ["あたらしい くるま", "しずかな まち"], "No な after an い-adjective.")
  ]
});

export const iNegative = lesson({
  id: "i-adj-negative", number: 36, title: "い-Adjectives: Saying “Not”",
  summary: "Make an い-adjective negative: おおきくない です.",
  objective: "By the end you can say that something is not big, not cheap, not good.",
  teach: [
    T("The idea", "い becomes くない",
      ["To make an {い|i}-adjective negative, drop the final {い|i} and add {くない|kunai}. {おおきい|ookii} becomes {おおきくない|ookikunai}, which means “not big”.",
       "Then add {です|desu} to be polite: {おおきくない です|ookikunai desu}."],
      [E("おおきい", "ookii", "big", "い"),
       E("おおきくない", "ookikunai", "not big", "くない"),
       E("おおきくない です。", "Ookikunai desu.", "It is not big.", "くない")]),
    T("More examples", "Apply the same rule",
      ["Every regular {い|i}-adjective follows the rule. {たかい|takai} becomes {たかくない|takakunai}. {やすい|yasui} becomes {やすくない|yasukunai}. {おいしい|oishii} becomes {おいしくない|oishikunai}.",
       "Just replace the final {い|i} with {くない|kunai}."],
      [E("たかくない です。", "Takakunai desu.", "It is not expensive.", "くない"),
       E("やすくない です。", "Yasukunai desu.", "It is not cheap.", "くない"),
       E("おいしくない です。", "Oishikunai desu.", "It is not delicious.", "くない")]),
    T("The special case: いい", "いい becomes よくない",
      ["{いい|ii}, good, is special. Its old form is {よい|yoi}, and the negative uses that: {よくない|yokunai}. {いくない|ikunai} is wrong.",
       "This is the only common exception, and it also applies to anything ending in {いい|ii}, such as {かっこいい|kakkoii}, which becomes {かっこよくない|kakkoyokunai}."],
      [E("いい てんき です。", "Ii tenki desu.", "It's good weather.", "いい"),
       E("よくない です。", "Yokunai desu.", "It is not good.", "よくない"),
       E("かっこよくない です。", "Kakkoyokunai desu.", "He is not cool.", "かっこよくない")]),
    T("Another polite way", "くありません",
      ["There is a second polite form: change {い|i} to {くありません|ku arimasen}. {おおきくありません|ookiku arimasen} means exactly the same as {おおきくない です|ookikunai desu}.",
       "Both are polite and correct. Choose whichever you like, but do not mix them in the same phrase."],
      [E("おおきくありません。", "Ookiku arimasen.", "It is not big.", "くありません"),
       E("やすくありません。", "Yasuku arimasen.", "It is not cheap.", "くありません"),
       E("おおきくない です。", "Ookikunai desu.", "It is not big.", "くない")]),
    T("Questions", "Answering with いいえ",
      ["When someone asks {おおきい ですか|ookii desu ka}, a yes answer is {はい、おおきい です|hai, ookii desu}. A no answer is {いいえ、おおきくない です|iie, ookikunai desu}.",
       "Do not say only {いいえ|iie}; add the negative adjective to give information."],
      [E("たかい ですか。", "Takai desu ka.", "Is it expensive?", "たかい"),
       E("いいえ、たかくない です。", "Iie, takakunai desu.", "No, it is not expensive.", "たかくない"),
       E("はい、すこし たかい です。", "Hai, sukoshi takai desu.", "Yes, it is a little expensive.", "たかい")]),
    T("Common mistakes", "Do not use じゃ ない here",
      ["Do not use {じゃ ありません|ja arimasen} with an {い|i}-adjective: {おおきい じゃ ありません|ookii ja arimasen} is wrong. That form is for nouns and {な|na}-adjectives.",
       "Also do not forget the special case: {よくない|yokunai}, never {いくない|ikunai}."],
      [E("おおきい じゃ ありません。", "(wrong)", "Wrong: use くない for い-adjectives.", "じゃ ありません", true),
       E("いくない です。", "(wrong)", "Wrong: いい becomes よくない.", "いくない", true),
       E("おおきくない です。", "Ookikunai desu.", "Right: It is not big.", "くない")],
      T0("Say: “It is not expensive.”", "たかくない です。", "Takakunai desu.", "It is not expensive.", "くない"))
  ],
  storyTitle: "Is it expensive?",
  story: [
    L("Alex", "この かばんは たかい ですか。", "Kono kaban wa takai desu ka.", "Is this bag expensive?"),
    L("Mika", "いいえ、たかくない です。", "Iie, takakunai desu.", "No, it is not expensive."),
    L("Alex", "おおきい ですか。", "Ookii desu ka.", "Is it big?"),
    L("Mika", "いいえ、おおきくありません。ちいさい です。", "Iie, ookiku arimasen. Chiisai desu.", "No, it is not big. It is small."),
    L("Alex", "いろは いい ですか。", "Iro wa ii desu ka.", "Is the colour good?"),
    L("Mika", "あまり よくない です。", "Amari yokunai desu.", "Not very good.")
  ],
  words: [
    W("くない", "kunai", "not (い-adjective)"),
    W("くありません", "ku arimasen", "not (polite)"),
    W("よくない", "yokunai", "not good"),
    W("かばん", "kaban", "bag"),
    W("いろ", "iro", "colour"),
    W("あまり", "amari", "not very"),
    W("かっこいい", "kakkoii", "cool, handsome"),
    W("ちいさい", "chiisai", "small")
  ],
  tips: [
    "Drop the last i and add kunai: ookii becomes ookikunai.",
    "ii, good, becomes yokunai, not ikunai.",
    "kunai desu and ku arimasen are both polite."
  ],
  quiz: [
    ask("i-adj-negative", "What is the negative of おおきい?", "おおきくない", ["おおきいない", "おおきじゃない"], "Drop い, add くない."),
    ask("i-adj-negative", "What is the negative of いい?", "よくない", ["いくない", "いいない"], "いい becomes よくない."),
    ask("i-adj-negative", "Which is a polite negative?", "おおきくありません", ["おおきい じゃ ありません", "おおきく ません"], "く + ありません."),
    ask("i-adj-negative", "How do you say “It is not cheap”?", "やすくない です。", ["やすい じゃ ない です。", "やすいくない です。"], "やすくない です."),
    ask("i-adj-negative", "Which means “not delicious”?", "おいしくない", ["おいしじゃない", "おいしいない"], "おいしくない.")
  ]
});

export const naNegative = lesson({
  id: "na-adj-negative", number: 37, title: "な-Adjectives: Saying “Not”",
  summary: "Make a な-adjective negative: しずか じゃ ありません.",
  objective: "By the end you can say that something is not quiet, not famous, not easy.",
  teach: [
    T("The idea", "Treat it like a noun",
      ["A {な|na}-adjective behaves like a noun when you make it negative. You use the same ending you already know: {じゃ ありません|ja arimasen}.",
       "{しずか|shizuka} becomes {しずか じゃ ありません|shizuka ja arimasen}, “is not quiet”."],
      [E("しずか です。", "Shizuka desu.", "It is quiet.", "しずか"),
       E("しずか じゃ ありません。", "Shizuka ja arimasen.", "It is not quiet.", "じゃ ありません")]),
    T("More examples", "Same ending every time",
      ["{ゆうめい|yuumei} becomes {ゆうめい じゃ ありません|yuumei ja arimasen}. {かんたん|kantan} becomes {かんたん じゃ ありません|kantan ja arimasen}. {べんり|benri} becomes {べんり じゃ ありません|benri ja arimasen}.",
       "You do not add {な|na} here, because {な|na} is only for describing a noun."],
      [E("ゆうめい じゃ ありません。", "Yuumei ja arimasen.", "It is not famous.", "じゃ ありません"),
       E("かんたん じゃ ありません。", "Kantan ja arimasen.", "It is not easy.", "じゃ ありません"),
       E("べんり じゃ ありません。", "Benri ja arimasen.", "It is not convenient.", "じゃ ありません")]),
    T("Casual form", "じゃ ない",
      ["In casual speech, drop {ありません|arimasen} and say {じゃ ない|ja nai}. It is the same idea as in the lesson on {じゃ ない|ja nai} with nouns.",
       "Adding {です|desu} gives {じゃ ない です|ja nai desu}, which is also polite enough in many situations."],
      [E("しずか じゃ ない。", "Shizuka ja nai.", "It is not quiet. (casual)", "じゃ ない"),
       E("しずか じゃ ない です。", "Shizuka ja nai desu.", "It is not quiet.", "じゃ ない")]),
    T("Compare the two groups", "い versus な",
      ["Put both groups side by side. An {い|i}-adjective: {おおきくない|ookikunai}. A {な|na}-adjective: {しずか じゃ ない|shizuka ja nai}.",
       "This is the main reason you must know the group of every adjective."],
      [E("おおきくない です。", "Ookikunai desu.", "It is not big. (い-adjective)", "くない"),
       E("しずか じゃ ありません。", "Shizuka ja arimasen.", "It is not quiet. (な-adjective)", "じゃ ありません"),
       E("きれい じゃ ありません。", "Kirei ja arimasen.", "It is not pretty. (な-adjective)", "じゃ ありません")]),
    T("Questions", "Answering with いいえ",
      ["Ask {しずか ですか|shizuka desu ka}. A no answer: {いいえ、しずか じゃ ありません|iie, shizuka ja arimasen}.",
       "Add more detail if you can, for example {にぎやか です|nigiyaka desu}, lively."],
      [E("しずか ですか。", "Shizuka desu ka.", "Is it quiet?", "しずか"),
       E("いいえ、しずか じゃ ありません。", "Iie, shizuka ja arimasen.", "No, it is not quiet.", "じゃ ありません"),
       E("にぎやか です。", "Nigiyaka desu.", "It is lively.", "にぎやか")]),
    T("Common mistakes", "Do not add くない to a な-adjective",
      ["Do not use {くない|kunai} with a {な|na}-adjective: {しずかくない|shizukakunai} is wrong. And remember {きれい|kirei}: it is a {な|na}-adjective, so {きれくない|kirekunai} and {きれいくない|kireikunai} are both wrong.",
       "Say {きれい じゃ ありません|kirei ja arimasen}."],
      [E("しずかくない です。", "(wrong)", "Wrong: use じゃ ありません.", "くない", true),
       E("きれいくない です。", "(wrong)", "Wrong: きれい is a な-adjective.", "くない", true),
       E("しずか じゃ ありません。", "Shizuka ja arimasen.", "Right: It is not quiet.", "じゃ ありません")],
      T0("Say: “It is not famous.”", "ゆうめい じゃ ありません。", "Yuumei ja arimasen.", "It is not famous.", "じゃ ありません"))
  ],
  storyTitle: "Is the town quiet?",
  story: [
    L("Alex", "ミカさんの まちは しずか ですか。", "Mika-san no machi wa shizuka desu ka.", "Is your town quiet, Mika?"),
    L("Mika", "いいえ、しずか じゃ ありません。にぎやか です。", "Iie, shizuka ja arimasen. Nigiyaka desu.", "No, it is not quiet. It is lively."),
    L("Alex", "ゆうめいな まちですか。", "Yuumei na machi desu ka.", "Is it a famous town?"),
    L("Mika", "いいえ、ゆうめい じゃ ありません。", "Iie, yuumei ja arimasen.", "No, it is not famous."),
    L("Alex", "べんりですか。", "Benri desu ka.", "Is it convenient?"),
    L("Mika", "はい、とても べんり です。", "Hai, totemo benri desu.", "Yes, very convenient.")
  ],
  words: [
    W("じゃ ありません", "ja arimasen", "is not (polite)"),
    W("じゃ ない", "ja nai", "is not (casual)"),
    W("にぎやか", "nigiyaka", "lively"),
    W("ゆうめい", "yuumei", "famous"),
    W("かんたん", "kantan", "easy"),
    W("べんり", "benri", "convenient"),
    W("きれい", "kirei", "pretty, clean"),
    W("しずか", "shizuka", "quiet")
  ],
  tips: [
    "A na-adjective is made negative with ja arimasen, like a noun.",
    "Do not add na and do not use kunai.",
    "Kirei looks like an i-adjective but follows the na-adjective rule."
  ],
  quiz: [
    ask("na-adj-negative", "How do you say “It is not quiet”?", "しずか じゃ ありません。", ["しずかくない です。", "しずかな ありません。"], "な-adjective + じゃ ありません."),
    ask("na-adj-negative", "What is the casual form?", "しずか じゃ ない", ["しずかくない", "しずかない"], "じゃ ない."),
    ask("na-adj-negative", "Which is wrong?", "きれいくない です。", ["きれい じゃ ありません。", "きれい じゃ ない です。"], "きれい is a な-adjective."),
    ask("na-adj-negative", "Do you add な when making it negative?", "no", ["yes", "only in casual speech"], "な is only for describing a noun."),
    ask("na-adj-negative", "How do you say “It is not easy”?", "かんたん じゃ ありません。", ["かんたんくない です。", "かんたんい ありません。"], "かんたん じゃ ありません.")
  ]
});
