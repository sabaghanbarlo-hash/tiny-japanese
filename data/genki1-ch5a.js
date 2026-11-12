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

export const iAdj = lesson({
  id: "i-adjectives", number: 33, title: "い-Adjectives: Describing Things",
  summary: "Learn the adjectives that end in い and how to use them to describe things.",
  objective: "By the end you can recognise an い-adjective and say that something is big, small, new, old and more.",
  teach: [
    T("The idea", "Adjectives describe",
      ["An adjective is a word that describes a noun, such as big, small or delicious. Japanese has two kinds of adjectives, and this lesson covers the first kind: the {い|i}-adjectives.",
       "You can spot an {い|i}-adjective because it ends in the sound {い|i} when written in hiragana."],
      [E("おおきい", "ookii", "big", "い"),
       E("ちいさい", "chiisai", "small", "い"),
       E("あたらしい", "atarashii", "new", "い")]),
    T("Say it with です", "Adjective + です",
      ["To say that something is big, put {です|desu} after the adjective. {これは おおきい です|kore wa ookii desu} means “this is big”.",
       "The {です|desu} makes the sentence polite. With an {い|i}-adjective it does not change the meaning, it only adds politeness."],
      [E("これは おおきい です。", "Kore wa ookii desu.", "This is big.", "おおきい"),
       E("へやは ひろい です。", "Heya wa hiroi desu.", "The room is spacious.", "ひろい"),
       E("ラーメンは おいしい です。", "Raamen wa oishii desu.", "The ramen is delicious.", "おいしい")]),
    T("Common い-adjectives", "Pairs of opposites",
      ["Learn adjectives in pairs. {おおきい|ookii}, big, and {ちいさい|chiisai}, small. {あたらしい|atarashii}, new, and {ふるい|furui}, old. {たかい|takai}, expensive or tall, and {やすい|yasui}, cheap.",
       "More pairs: {あつい|atsui}, hot, and {さむい|samui}, cold. {おもしろい|omoshiroi}, interesting, and {つまらない|tsumaranai}, boring."],
      [E("たかい", "takai", "expensive, tall", "たかい"),
       E("やすい", "yasui", "cheap", "やすい"),
       E("あつい", "atsui", "hot (weather)", "あつい"),
       E("さむい", "samui", "cold (weather)", "さむい")]),
    T("Questions", "どうですか",
      ["To ask what something is like, use {どう|dou}. {このラーメンは どうですか|kono raamen wa dou desu ka} means “how is this ramen?”.",
       "Answer with an adjective: {おいしい です|oishii desu}."],
      [E("このラーメンは どうですか。", "Kono raamen wa dou desu ka.", "How is this ramen?", "どう"),
       E("おいしい です。", "Oishii desu.", "It's delicious.", "おいしい"),
       E("すこし たかい です。", "Sukoshi takai desu.", "It's a little expensive.", "たかい")]),
    T("Degree words", "とても and すこし",
      ["Put {とても|totemo}, very, or {すこし|sukoshi}, a little, before the adjective. {とても おおきい です|totemo ookii desu} means “it is very big”.",
       "Degree words always go directly before the adjective."],
      [E("とても おおきい です。", "Totemo ookii desu.", "It is very big.", "とても"),
       E("すこし さむい です。", "Sukoshi samui desu.", "It is a little cold.", "すこし"),
       E("とても おもしろい です。", "Totemo omoshiroi desu.", "It is very interesting.", "おもしろい")]),
    T("The tricky ones", "いい and きれい",
      ["{いい|ii}, good, is an {い|i}-adjective. Later you will see that it changes in a special way. {きれい|kirei}, pretty or clean, ends in {い|i} but belongs to the other group, the {な|na}-adjectives, so be careful.",
       "That is why you must learn each adjective together with its group."],
      [E("いい てんき です。", "Ii tenki desu.", "It's good weather.", "いい"),
       E("きれい です。", "Kirei desu.", "It's pretty.", "きれい")]),
    T("Common mistakes", "Do not add な or の",
      ["Do not put {な|na} or {の|no} between an {い|i}-adjective and the noun or {です|desu}. {おおきい な です|ookii na desu} is wrong. Also do not drop the final {い|i}: {おおき です|ooki desu} is wrong.",
       "The adjective is complete as it is."],
      [E("おおきい な です。", "(wrong)", "Wrong: no な after い-adjectives.", "な", true),
       E("おおき です。", "(wrong)", "Wrong: keep the final い.", "おおき", true),
       E("おおきい です。", "Ookii desu.", "Right: It is big.", "おおきい")],
      T0("Say: “This is very cheap.”", "これは とても やすい です。", "Kore wa totemo yasui desu.", "This is very cheap.", "やすい"))
  ],
  storyTitle: "At the ramen shop",
  story: [
    L("Alex", "このラーメンは どうですか。", "Kono raamen wa dou desu ka.", "How is this ramen?"),
    L("Mika", "とても おいしい です。", "Totemo oishii desu.", "It is very delicious."),
    L("Alex", "たかい ですか。", "Takai desu ka.", "Is it expensive?"),
    L("Mika", "いいえ、やすい です。", "Iie, yasui desu.", "No, it is cheap."),
    L("Alex", "みせは おおきい ですか。", "Mise wa ookii desu ka.", "Is the shop big?"),
    L("Mika", "いいえ、ちいさい です。でも きれい です。", "Iie, chiisai desu. Demo kirei desu.", "No, it is small. But it is clean.")
  ],
  words: [
    W("おおきい / ちいさい", "ookii / chiisai", "big / small"),
    W("あたらしい / ふるい", "atarashii / furui", "new / old"),
    W("たかい / やすい", "takai / yasui", "expensive / cheap"),
    W("あつい / さむい", "atsui / samui", "hot / cold"),
    W("おいしい", "oishii", "delicious"),
    W("おもしろい", "omoshiroi", "interesting"),
    W("ひろい", "hiroi", "spacious"),
    W("いい", "ii", "good")
  ],
  tips: [
    "い-adjectives end in い and can be followed by です.",
    "Never add な or の after an い-adjective.",
    "Learn each adjective with its group: きれい looks like い but is not."
  ],
  quiz: [
    ask("i-adjectives", "Which is an い-adjective?", "おおきい", ["しずか", "げんき"], "おおきい ends in い and is an い-adjective."),
    ask("i-adjectives", "How do you say “This is big”?", "これは おおきい です。", ["これは おおきい な です。", "これは おおき です。"], "Adjective + です."),
    ask("i-adjectives", "What is the opposite of たかい (cheap)?", "やすい", ["ちいさい", "ふるい"], "たかい and やすい are opposites."),
    ask("i-adjectives", "Where does とても go?", "before the adjective", ["after です", "after the noun only"], "Directly before the adjective."),
    ask("i-adjectives", "How do you ask “How is it?”", "どうですか。", ["なんですか。", "だれですか。"], "どう asks what it is like.")
  ]
});

export const naAdj = lesson({
  id: "na-adjectives", number: 34, title: "な-Adjectives: The Other Group",
  summary: "Learn the adjectives that behave like nouns, and how they differ from い-adjectives.",
  objective: "By the end you can recognise a な-adjective and say that something is quiet, pretty, famous or easy.",
  teach: [
    T("The idea", "A second kind of adjective",
      ["The second group is the {な|na}-adjectives. They do not end in {い|i}. They behave much like nouns: they take {です|desu} directly.",
       "{しずか|shizuka} means quiet. {げんき|genki} means healthy and energetic. {ゆうめい|yuumei} means famous. {かんたん|kantan} means easy."],
      [E("しずか", "shizuka", "quiet", "しずか"),
       E("ゆうめい", "yuumei", "famous", "ゆうめい"),
       E("かんたん", "kantan", "easy, simple", "かんたん")]),
    T("Say it with です", "Adjective + です",
      ["With {です|desu}, a {な|na}-adjective looks just like an {い|i}-adjective. {ここは しずか です|koko wa shizuka desu} means “it is quiet here”.",
       "The difference only shows up when the adjective changes, for example in the negative or before a noun."],
      [E("ここは しずか です。", "Koko wa shizuka desu.", "It is quiet here.", "しずか"),
       E("この まちは にぎやか です。", "Kono machi wa nigiyaka desu.", "This town is lively.", "にぎやか"),
       E("しけんは かんたん です。", "Shiken wa kantan desu.", "The test is easy.", "かんたん")]),
    T("More な-adjectives", "Words you will use every day",
      ["{きれい|kirei}, pretty or clean. {すき|suki}, liked. {きらい|kirai}, disliked. {じょうず|jouzu}, skilled. {へた|heta}, unskilled. {べんり|benri}, convenient. {ひま|hima}, free, not busy.",
       "Many of these come from Chinese and are close to nouns in grammar."],
      [E("きれい", "kirei", "pretty, clean", "きれい"),
       E("べんり", "benri", "convenient", "べんり"),
       E("ひま", "hima", "free (time)", "ひま"),
       E("じょうず", "jouzu", "skilled", "じょうず")]),
    T("Tell the groups apart", "Does it end in い?",
      ["If an adjective does not end in {い|i}, it is a {な|na}-adjective. If it ends in {い|i}, it is usually an {い|i}-adjective.",
       "But a few {な|na}-adjectives do end in {い|i}. The most important are {きれい|kirei}, pretty, and {きらい|kirai}, disliked. Treat them as {な|na}-adjectives."],
      [E("きれい", "kirei", "pretty (な-adjective!)", "きれい"),
       E("きらい", "kirai", "disliked (な-adjective!)", "きらい"),
       E("おおきい", "ookii", "big (い-adjective)", "おおきい")]),
    T("Questions", "どんな and どう",
      ["To ask what kind of thing it is, use {どんな|donna}. {どんな まちですか|donna machi desu ka} means “what kind of town is it?”. To ask how it is, use {どう|dou}.",
       "Answer with any adjective."],
      [E("どんな まちですか。", "Donna machi desu ka.", "What kind of town is it?", "どんな"),
       E("しずかな まちです。", "Shizuka na machi desu.", "It is a quiet town.", "しずかな"),
       E("まちは どうですか。", "Machi wa dou desu ka.", "How is the town?", "どう")]),
    T("Common mistakes", "Do not add い",
      ["Do not add {い|i} to a {な|na}-adjective. {しずかい です|shizukai desu} is wrong. And do not treat {きれい|kirei} as an {い|i}-adjective just because it ends in {い|i}.",
       "Remember this group when we change adjectives in the next lessons."],
      [E("しずかい です。", "(wrong)", "Wrong: しずか has no い.", "しずかい", true),
       E("ゆうめい い です。", "(wrong)", "Wrong: no い to add.", "い", true),
       E("しずか です。", "Shizuka desu.", "Right: It is quiet.", "しずか")],
      T0("Say: “This town is lively.”", "この まちは にぎやか です。", "Kono machi wa nigiyaka desu.", "This town is lively.", "にぎやか"))
  ],
  storyTitle: "A quiet town",
  story: [
    L("Alex", "ミカさんの まちは どんな まちですか。", "Mika-san no machi wa donna machi desu ka.", "What kind of town is yours, Mika?"),
    L("Mika", "しずかで きれいな まちです。", "Shizuka de kirei na machi desu.", "It is a quiet, pretty town."),
    L("Alex", "べんりですか。", "Benri desu ka.", "Is it convenient?"),
    L("Mika", "はい、とても べんりです。", "Hai, totemo benri desu.", "Yes, very convenient."),
    L("Alex", "ゆうめいな ところが ありますか。", "Yuumei na tokoro ga arimasu ka.", "Are there famous places?"),
    L("Mika", "ゆうめいな おてらが あります。", "Yuumei na otera ga arimasu.", "There is a famous temple.")
  ],
  words: [
    W("しずか", "shizuka", "quiet"),
    W("にぎやか", "nigiyaka", "lively"),
    W("きれい", "kirei", "pretty, clean"),
    W("ゆうめい", "yuumei", "famous"),
    W("かんたん", "kantan", "easy"),
    W("べんり", "benri", "convenient"),
    W("ひま", "hima", "free (time)"),
    W("まち", "machi", "town")
  ],
  tips: [
    "な-adjectives do not end in い (except a few like きれい).",
    "With です they look like い-adjectives; they differ elsewhere.",
    "Never add い to a な-adjective."
  ],
  quiz: [
    ask("na-adjectives", "Which is a な-adjective?", "しずか", ["おおきい", "あたらしい"], "しずか does not end in い."),
    ask("na-adjectives", "Is きれい an い-adjective or a な-adjective?", "な-adjective", ["い-adjective", "a noun"], "きれい is a な-adjective."),
    ask("na-adjectives", "How do you say “It is quiet”?", "しずか です。", ["しずかい です。", "しずかな です。"], "Adjective + です."),
    ask("na-adjectives", "How do you ask “What kind of town?”", "どんな まちですか。", ["なんの まちですか。", "どこの まちですか。"], "どんな asks what kind."),
    ask("na-adjectives", "Which means “convenient”?", "べんり", ["ひま", "かんたん"], "べんり is convenient.")
  ]
});
