// Genki I Grammar, chapter 7 (part 1): casual verbs. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const plainNoun = lesson({
  id: "plain-noun-na", number: 53, title: "Casual Nouns and な-Adjectives: だ",
  summary: "Make the casual forms of nouns and な-adjectives: だ, じゃない, だった, じゃなかった.",
  objective: "By the end you can say “it is”, “it isn't”, “it was” and “it wasn't” casually with nouns and {な|na}-adjectives.",
  teach: [
    T("The idea", "です becomes だ",
      ["In casual speech, {です|desu} becomes {だ|da}. {がくせい です|gakusei desu} becomes {がくせい だ|gakusei da}, “(I) am a student”. The same works for {な|na}-adjectives: {しずか です|shizuka desu} becomes {しずか だ|shizuka da}.",
       "In real conversation, {だ|da} is often dropped completely in questions and sounds blunt when used by itself."],
      [E("がくせい です → がくせい だ", "gakusei desu → gakusei da", "I am a student", "だ"),
       E("しずか です → しずか だ", "shizuka desu → shizuka da", "It is quiet", "だ")]),
    T("Questions", "Drop だ in questions",
      ["In a casual question, you usually just drop {だ|da} and use a rising tone. {がくせい？|gakusei} means “are you a student?”. {しずか？|shizuka} means “is it quiet?”.",
       "Do not say {だ？|da} at the end of a question. It sounds odd."],
      [E("がくせい？", "Gakusei?", "Are you a student?", "がくせい"),
       E("あした ひま？", "Ashita hima?", "Are you free tomorrow?", "ひま"),
       E("きれい？", "Kirei?", "Is it pretty?", "きれい")]),
    T("The negative", "じゃ ない",
      ["The casual negative is {じゃ ない|ja nai}. It is what you already met in the lesson on {じゃ ない|ja nai} with nouns. {がくせい じゃ ない|gakusei ja nai} means “am not a student”. {しずか じゃ ない|shizuka ja nai} means “is not quiet”.",
       "Remember: in casual speech, you can often add {よ|yo} or {ね|ne} after it."],
      [E("がくせい じゃ ない。", "Gakusei ja nai.", "(I) am not a student.", "じゃ ない"),
       E("しずか じゃ ない。", "Shizuka ja nai.", "It is not quiet.", "じゃ ない"),
       E("ひま じゃ ない よ。", "Hima ja nai yo.", "I'm not free, you know.", "じゃ ない")]),
    T("The past", "だった",
      ["The casual past is {だった|datta}. {がくせい だった|gakusei datta} means “was a student”. {しずか だった|shizuka datta} means “was quiet”.",
       "Think of {だった|datta} as the past of {だ|da}."],
      [E("がくせい だった。", "Gakusei datta.", "(I) was a student.", "だった"),
       E("しずか だった。", "Shizuka datta.", "It was quiet.", "だった"),
       E("きのうは あめ だった。", "Kinou wa ame datta.", "Yesterday was rainy.", "だった")]),
    T("The negative past", "じゃ なかった",
      ["The casual negative past is {じゃ なかった|ja nakatta}. {がくせい じゃ なかった|gakusei ja nakatta} means “was not a student”. {しずか じゃ なかった|shizuka ja nakatta} means “was not quiet”.",
       "It is the plain negative with the past ending {かった|katta}."],
      [E("がくせい じゃ なかった。", "Gakusei ja nakatta.", "(I) was not a student.", "じゃ なかった"),
       E("しずか じゃ なかった。", "Shizuka ja nakatta.", "It was not quiet.", "じゃ なかった"),
       E("あめ じゃ なかった。", "Ame ja nakatta.", "It wasn't rainy.", "じゃ なかった")]),
    T("All four forms", "Polite and casual side by side",
      ["Polite: {です|desu}, {でした|deshita}, {じゃ ありません|ja arimasen}, {じゃ ありませんでした|ja arimasen deshita}. Casual: {だ|da}, {だった|datta}, {じゃ ない|ja nai}, {じゃ なかった|ja nakatta}.",
       "Keep this table in your head; it lets you switch between styles for nouns and {な|na}-adjectives."],
      [E("がくせい だ。", "Gakusei da.", "is (casual)", "だ"),
       E("がくせい だった。", "Gakusei datta.", "was (casual)", "だった"),
       E("がくせい じゃ ない。", "Gakusei ja nai.", "is not (casual)", "じゃ ない"),
       E("がくせい じゃ なかった。", "Gakusei ja nakatta.", "was not (casual)", "じゃ なかった")]),
    T("Common mistakes", "No だ before ない",
      ["Do not say {がくせい だ ない|gakusei da nai}. The negative is {じゃ ない|ja nai}. Also do not use {だ|da} after an {い|i}-adjective: {おいしい だ|oishii da} is not normal in standard speech.",
       "And do not use {だ|da} when talking to someone you should be polite to."],
      [E("がくせい だ ない。", "(wrong)", "Wrong: use じゃ ない.", "だ ない", true),
       E("おいしい だ。", "(wrong)", "Odd: い-adjectives stand alone.", "だ", true),
       E("がくせい じゃ ない。", "Gakusei ja nai.", "Right: am not a student.", "じゃ ない")],
      T0("Say casually: “It was quiet.”", "しずか だった。", "Shizuka datta.", "It was quiet.", "だった"))
  ],
  storyTitle: "Old friends",
  story: [
    L("Mika", "ひさしぶり！げんき？", "Hisashiburi! Genki?", "Long time no see! How are you?"),
    L("Alex", "うん、げんき。ミカは？", "Un, genki. Mika wa?", "Good. And you?"),
    L("Mika", "わたしも げんき。きのうは ひま だった。", "Watashi mo genki. Kinou wa hima datta.", "I'm good too. I was free yesterday."),
    L("Alex", "いま ひま？", "Ima hima?", "Are you free now?"),
    L("Mika", "ううん、ひま じゃ ない。しごと だ。", "Uun, hima ja nai. Shigoto da.", "No, I'm not free. I have work."),
    L("Alex", "そう。がんばって！", "Sou. Ganbatte!", "I see. Good luck!")
  ],
  words: [
    W("だ", "da", "is (casual)"),
    W("だった", "datta", "was (casual)"),
    W("じゃ ない", "ja nai", "is not (casual)"),
    W("じゃ なかった", "ja nakatta", "was not (casual)"),
    W("ひさしぶり", "hisashiburi", "long time no see"),
    W("げんき", "genki", "well, energetic"),
    W("しごと", "shigoto", "work"),
    W("がんばって", "ganbatte", "do your best")
  ],
  tips: [
    "Desu becomes da; deshita becomes datta.",
    "Ja arimasen becomes ja nai; ja arimasen deshita becomes ja nakatta.",
    "Drop da in casual questions and use a rising tone."
  ],
  quiz: [
    ask("plain-noun-na", "What is the casual form of です?", "だ", ["ない", "た"], "です → だ."),
    ask("plain-noun-na", "What is the casual past of です?", "だった", ["でった", "だた"], "だった."),
    ask("plain-noun-na", "What is the casual form of じゃ ありません?", "じゃ ない", ["じゃ なかった", "だ ない"], "じゃ ない."),
    ask("plain-noun-na", "How do you ask casually “Are you free?”", "ひま？", ["ひま だ？", "ひま ます？"], "Drop だ."),
    ask("plain-noun-na", "What is the casual form of じゃ ありませんでした?", "じゃ なかった", ["じゃ ない", "だった"], "じゃ なかった.")
  ]
});

export const plainAdj = lesson({
  id: "plain-i-adjective", number: 54, title: "Casual い-Adjectives",
  summary: "Use い-adjectives in casual speech and review how they change in the negative and past.",
  objective: "By the end you can say “it's delicious”, “it wasn't expensive” and so on, in casual style.",
  teach: [
    T("The idea", "No だ and no です",
      ["An {い|i}-adjective is already plain. In casual speech you simply drop {です|desu}. {おいしい です|oishii desu} becomes {おいしい|oishii}. Do not add {だ|da}.",
       "That is why {い|i}-adjectives are the simplest in casual speech."],
      [E("おいしい です → おいしい", "oishii desu → oishii", "It is delicious", "おいしい"),
       E("あつい です → あつい", "atsui desu → atsui", "It is hot", "あつい")]),
    T("Questions", "Rising tone",
      ["For a question, use a rising tone: {おいしい？|oishii} means “is it delicious?”. Friends often add {の|no}: {おいしいの？|oishii no} is softer and more curious.",
       "Answer with {うん、おいしい|un, oishii} or {ううん、おいしくない|uun, oishikunai}."],
      [E("おいしい？", "Oishii?", "Is it delicious?", "おいしい"),
       E("さむい？", "Samui?", "Are you cold?", "さむい"),
       E("たかい？", "Takai?", "Is it expensive?", "たかい")]),
    T("The negative", "くない",
      ["The casual negative is {くない|kunai}, just like the polite version without {です|desu}. {おいしくない|oishikunai} means “it's not delicious”.",
       "Remember the exception: {いい|ii} becomes {よくない|yokunai}."],
      [E("おいしくない。", "Oishikunai.", "It's not delicious.", "くない"),
       E("たかくない。", "Takakunai.", "It's not expensive.", "くない"),
       E("よくない。", "Yokunai.", "It's not good.", "よくない")]),
    T("The past", "かった",
      ["The casual past is {かった|katta}. {おいしかった|oishikatta} means “it was delicious”. {よかった|yokatta} means “it was good”, and also “I'm glad”.",
       "This is the same {かった|katta} you learned for polite speech, only without {です|desu}."],
      [E("おいしかった。", "Oishikatta.", "It was delicious.", "かった"),
       E("たのしかった。", "Tanoshikatta.", "It was fun.", "かった"),
       E("よかった。", "Yokatta.", "It was good. / I'm glad.", "よかった")]),
    T("The negative past", "くなかった",
      ["The casual negative past is {くなかった|kunakatta}. {おいしくなかった|oishikunakatta} means “it wasn't delicious”. {よくなかった|yokunakatta} means “it wasn't good”.",
       "Add {よ|yo} or {ね|ne} at the end for a natural feel."],
      [E("おいしくなかった。", "Oishikunakatta.", "It wasn't delicious.", "くなかった"),
       E("たかくなかった。", "Takakunakatta.", "It wasn't expensive.", "くなかった"),
       E("よくなかった ね。", "Yokunakatta ne.", "It wasn't good, was it.", "くなかった")]),
    T("Common mistakes", "Do not add だ",
      ["Do not add {だ|da} after an {い|i}-adjective: {おいしい だ|oishii da} is wrong for a normal statement. And do not use {じゃ ない|ja nai}: {おいしい じゃ ない|oishii ja nai} is wrong; use {おいしくない|oishikunai}.",
       "Keep the two groups of adjectives separate."],
      [E("おいしい だ。", "(wrong)", "Wrong: no だ after い-adjectives.", "だ", true),
       E("おいしい じゃ ない。", "(wrong)", "Wrong: use くない.", "じゃ ない", true),
       E("おいしくない。", "Oishikunai.", "Right: it's not delicious.", "くない")],
      T0("Say casually: “It was fun.”", "たのしかった。", "Tanoshikatta.", "It was fun.", "かった"))
  ],
  storyTitle: "After the festival",
  story: [
    L("Mika", "おまつり、どうだった？", "Omatsuri, dou datta?", "How was the festival?"),
    L("Alex", "すごく たのしかった！", "Sugoku tanoshikatta!", "It was so much fun!"),
    L("Mika", "ひと、おおかった？", "Hito, ookatta?", "Were there lots of people?"),
    L("Alex", "うん、すごく おおかった。", "Un, sugoku ookatta.", "Yeah, so many."),
    L("Mika", "たべもの、おいしかった？", "Tabemono, oishikatta?", "Was the food good?"),
    L("Alex", "おいしかった けど、たかかった。", "Oishikatta kedo, takakatta.", "It was delicious, but it was expensive.")
  ],
  words: [
    W("おいしい", "oishii", "delicious"),
    W("おおい", "ooi", "many, a lot"),
    W("すごく", "sugoku", "very (casual)"),
    W("おまつり", "omatsuri", "festival"),
    W("けど", "kedo", "but"),
    W("どうだった", "dou datta", "how was it"),
    W("さむい", "samui", "cold"),
    W("たかい", "takai", "expensive")
  ],
  tips: [
    "I-adjectives drop desu and stand alone in casual speech.",
    "Negative: kunai. Past: katta. Negative past: kunakatta.",
    "Never add da to an i-adjective."
  ],
  quiz: [
    ask("plain-i-adjective", "How do you say “It's delicious” casually?", "おいしい", ["おいしい だ", "おいしい じゃ ない"], "No だ needed."),
    ask("plain-i-adjective", "What is the casual negative of たかい?", "たかくない", ["たかじゃない", "たかい ない"], "くない."),
    ask("plain-i-adjective", "What is the casual past of たのしい?", "たのしかった", ["たのしいだった", "たのしくった"], "かった."),
    ask("plain-i-adjective", "What is the casual negative past of おいしい?", "おいしくなかった", ["おいしじゃなかった", "おいしかった ない"], "くなかった."),
    ask("plain-i-adjective", "What does けど mean?", "but", ["because", "also"], "けど is but.")
  ]
});

export const toOmou = lesson({
  id: "to-omou", number: 55, title: "～と おもいます: I Think That...",
  summary: "Say what you think with と おもいます, with plain forms before と.",
  objective: "By the end you can say “I think it will rain”, “I think he is a student” and give your opinion politely.",
  teach: [
    T("The idea", "Plain form + と おもいます",
      ["To say “I think that...”, put the plain form of a sentence before {と おもいます|to omoimasu}. {あした あめが ふる と おもいます|ashita ame ga furu to omoimasu} means “I think it will rain tomorrow”.",
       "{おもいます|omoimasu} is the polite form of {おもう|omou}, to think."],
      [E("あした あめが ふる と おもいます。", "Ashita ame ga furu to omoimasu.", "I think it will rain tomorrow.", "と おもいます"),
       E("ミカさんは くる と おもいます。", "Mika-san wa kuru to omoimasu.", "I think Mika will come.", "と おもいます")]),
    T("Why plain forms?", "The thought is inside",
      ["The sentence before {と|to} is a quotation of your thought, so it uses the plain form, not {ます|masu}. The whole sentence is still polite because of {おもいます|omoimasu} at the end.",
       "That is why you needed the casual forms first."],
      [E("いく と おもいます。", "Iku to omoimasu.", "I think (he) will go.", "いく"),
       E("いかない と おもいます。", "Ikanai to omoimasu.", "I think (he) won't go.", "いかない"),
       E("いった と おもいます。", "Itta to omoimasu.", "I think (he) went.", "いった")]),
    T("With nouns and な-adjectives", "Plain form uses だ here too, but drop it",
      ["With a noun or a {な|na}-adjective, the plain form would be {だ|da}, but before {と おもいます|to omoimasu} you drop it. {ミカさんは がくせい と おもいます|Mika-san wa gakusei to omoimasu} means “I think Mika is a student”.",
       "For the negative, use {じゃ ない|ja nai}: {がくせい じゃ ない と おもいます|gakusei ja nai to omoimasu}."],
      [E("がくせい と おもいます。", "Gakusei to omoimasu.", "I think (he) is a student.", "がくせい"),
       E("しずか と おもいます。", "Shizuka to omoimasu.", "I think it's quiet.", "しずか"),
       E("しずか じゃ ない と おもいます。", "Shizuka ja nai to omoimasu.", "I think it's not quiet.", "じゃ ない")]),
    T("With い-adjectives", "Plain form as it is",
      ["An {い|i}-adjective stays as it is. {おいしい と おもいます|oishii to omoimasu} means “I think it's delicious”. The negative is {おいしくない と おもいます|oishikunai to omoimasu}.",
       "The past is {おいしかった と おもいます|oishikatta to omoimasu}."],
      [E("おいしい と おもいます。", "Oishii to omoimasu.", "I think it's delicious.", "おいしい"),
       E("たかくない と おもいます。", "Takakunai to omoimasu.", "I think it's not expensive.", "たかくない"),
       E("おもしろかった と おもいます。", "Omoshirokatta to omoimasu.", "I think it was interesting.", "おもしろかった")]),
    T("Asking opinions", "どう おもいますか",
      ["Ask {どう おもいますか|dou omoimasu ka}, “what do you think?”. Or ask about a topic: {この えいがを どう おもいますか|kono eiga o dou omoimasu ka}.",
       "Answer with {と おもいます|to omoimasu}."],
      [E("どう おもいますか。", "Dou omoimasu ka.", "What do you think?", "どう"),
       E("この えいがを どう おもいますか。", "Kono eiga o dou omoimasu ka.", "What do you think of this movie?", "どう"),
       E("おもしろい と おもいます。", "Omoshiroi to omoimasu.", "I think it's interesting.", "おもしろい")]),
    T("Common mistakes", "Do not use ます before と",
      ["Do not say {いきます と おもいます|ikimasu to omoimasu}. In careful speech the sentence before {と|to} should be plain: {いく と おもいます|iku to omoimasu}. And do not say {だ と おもいます|da to omoimasu} after a noun.",
       "Do not use {と おもいます|to omoimasu} for facts you know for sure."],
      [E("いきます と おもいます。", "(wrong)", "Wrong: use the plain form.", "いきます", true),
       E("がくせい だ と おもいます。", "(wrong)", "Wrong: drop だ before と.", "だ と", true),
       E("いく と おもいます。", "Iku to omoimasu.", "Right: I think (he) will go.", "いく")],
      T0("Say: “I think it will rain.”", "あめが ふる と おもいます。", "Ame ga furu to omoimasu.", "I think it will rain.", "と おもいます"))
  ],
  storyTitle: "Tomorrow's weather",
  story: [
    L("Alex", "あした、てんきは どう なる と おもいますか。", "Ashita, tenki wa dou naru to omoimasu ka.", "What do you think the weather will be tomorrow?"),
    L("Mika", "あめが ふる と おもいます。", "Ame ga furu to omoimasu.", "I think it will rain."),
    L("Alex", "そうですか。ピクニックは いく と おもいますか。", "Sou desu ka. Pikunikku wa iku to omoimasu ka.", "Really? Do you think the picnic will go ahead?"),
    L("Mika", "いかない と おもいます。", "Ikanai to omoimasu.", "I think it won't."),
    L("Alex", "ざんねんです。", "Zannen desu.", "That's a pity."),
    L("Mika", "でも、いえで えいがを みても いい と おもいます。", "Demo, ie de eiga o mite mo ii to omoimasu.", "But I think watching a movie at home is fine too.")
  ],
  words: [
    W("と おもいます", "to omoimasu", "I think that"),
    W("おもう", "omou", "think"),
    W("あめが ふる", "ame ga furu", "it rains"),
    W("どう おもいますか", "dou omoimasu ka", "what do you think"),
    W("ざんねん", "zannen", "a pity"),
    W("ピクニック", "pikunikku", "picnic"),
    W("おもしろい", "omoshiroi", "interesting"),
    W("たぶん", "tabun", "probably")
  ],
  tips: [
    "Plain form plus to omoimasu means I think that.",
    "Drop da before to after nouns and na-adjectives.",
    "Add tabun, probably, to sound less certain."
  ],
  quiz: [
    ask("to-omou", "How do you say “I think he will go”?", "いく と おもいます。", ["いきます と おもいます。", "いく だ と おもいます。"], "Plain form + と おもいます."),
    ask("to-omou", "How do you say “I think he is a student”?", "がくせい と おもいます。", ["がくせい だ と おもいます。", "がくせい です と おもいます。"], "Drop だ."),
    ask("to-omou", "How do you ask “What do you think?”", "どう おもいますか。", ["なにを いいますか。", "どこ おもいますか。"], "どう おもいますか."),
    ask("to-omou", "How do you say “I think it isn't expensive”?", "たかくない と おもいます。", ["たかいじゃない と おもいます。", "たかくないです と おもいます。"], "Plain negative."),
    ask("to-omou", "What does たぶん mean?", "probably", ["never", "always"], "たぶん is probably.")
  ]
});

export const toIu = lesson({
  id: "to-iu", number: 56, title: "～と いいます: Quoting What Someone Said",
  summary: "Report what someone said or called something with と いいます, using direct and indirect quotes.",
  objective: "By the end you can say “he said that...” and “this is called...”.",
  teach: [
    T("The idea", "Quote + と いいます",
      ["To say that someone said something, put the quote before {と いいます|to iimasu}. {「ありがとう」と いいます|arigatou to iimasu} means “(I) say 'thank you'”. This is a direct quote, with the exact words inside brackets.",
       "{いいます|iimasu} is the polite form of {いう|iu}, to say."],
      [E("「ありがとう」と いいます。", "Arigatou to iimasu.", "(I) say “thank you”.", "と いいます"),
       E("ミカさんは「おはよう」と いいました。", "Mika-san wa ohayou to iimashita.", "Mika said “good morning”.", "と いいました")]),
    T("Direct quotes", "「 」 and と",
      ["In writing, a direct quote goes inside the Japanese brackets, followed by {と|to}. {せんせいは「あした テストが あります」と いいました|sensei wa ashita tesuto ga arimasu to iimashita} means “the teacher said, 'there is a test tomorrow'”.",
       "In a direct quote, the speaker's exact words stay unchanged."],
      [E("せんせいは「あした テストが あります」と いいました。", "Sensei wa ashita tesuto ga arimasu to iimashita.", "The teacher said, “There is a test tomorrow.”", "と いいました"),
       E("アレックスさんは「いたい」と いいました。", "Arekkusu-san wa itai to iimashita.", "Alex said, “It hurts.”", "と いいました")]),
    T("Indirect quotes", "Plain form + と いいました",
      ["For a reported quote, use the plain form before {と|to}, just like {と おもいます|to omoimasu}. {ミカさんは あした くる と いいました|Mika-san wa ashita kuru to iimashita} means “Mika said she will come tomorrow”.",
       "Nouns and {な|na}-adjectives drop {だ|da}, as before."],
      [E("ミカさんは あした くる と いいました。", "Mika-san wa ashita kuru to iimashita.", "Mika said she will come tomorrow.", "と いいました"),
       E("アレックスさんは いそがしい と いいました。", "Arekkusu-san wa isogashii to iimashita.", "Alex said he is busy.", "と いいました"),
       E("ミカさんは がくせい と いいました。", "Mika-san wa gakusei to iimashita.", "Mika said she is a student.", "と いいました")]),
    T("Naming things", "～と いいます as “is called”",
      ["{と いいます|to iimasu} also means “is called”. {これは「さくら」と いいます|kore wa sakura to iimasu} means “this is called 'sakura'”. Introductions use it too: {わたしは ミカと いいます|watashi wa Mika to iimasu} means “my name is Mika”.",
       "This version is polite and common in self-introductions."],
      [E("わたしは ミカと いいます。", "Watashi wa Mika to iimasu.", "My name is Mika.", "と いいます"),
       E("これは さくらと いいます。", "Kore wa sakura to iimasu.", "This is called sakura.", "と いいます"),
       E("にほんごで なんと いいますか。", "Nihongo de nan to iimasu ka.", "What do you call it in Japanese?", "なんと")]),
    T("Asking", "なんと いいましたか",
      ["Ask {なんと いいましたか|nan to iimashita ka}, “what did (he) say?”. This is useful when you did not catch something.",
       "{もういちど いって ください|mou ichido itte kudasai} is the request form you already know."],
      [E("せんせいは なんと いいましたか。", "Sensei wa nan to iimashita ka.", "What did the teacher say?", "なんと"),
       E("なんと いいましたか。", "Nan to iimashita ka.", "What did you say?", "なんと"),
       E("もういちど いって ください。", "Mou ichido itte kudasai.", "Please say it once more.", "いって")]),
    T("Common mistakes", "Do not forget と",
      ["Do not leave out {と|to}: {ありがとう いいます|arigatou iimasu} is wrong. And do not use {ます|masu} inside an indirect quote: {くます と いいました|kimasu to iimashita} is wrong.",
       "Keep a plain form inside the reported part."],
      [E("ありがとう いいます。", "(wrong)", "Wrong: add と.", "ありがとう いいます", true),
       E("くます と いいました。", "(wrong)", "Wrong: plain form inside the quote.", "くます", true),
       E("くる と いいました。", "Kuru to iimashita.", "Right: said (he) will come.", "と いいました")],
      T0("Say: “My name is Alex.”", "わたしは アレックスと いいます。", "Watashi wa Arekkusu to iimasu.", "My name is Alex.", "と いいます"))
  ],
  storyTitle: "Who said that?",
  story: [
    L("Alex", "せんせいは なんと いいましたか。", "Sensei wa nan to iimashita ka.", "What did the teacher say?"),
    L("Mika", "あした テストが ある と いいました。", "Ashita tesuto ga aru to iimashita.", "The teacher said there is a test tomorrow."),
    L("Alex", "ほんとう？ ぜんぜん しらなかった。", "Hontou? Zenzen shiranakatta.", "Really? I had no idea."),
    L("Mika", "「べんきょうして ください」とも いいました。", "Benkyou shite kudasai to mo iimashita.", "The teacher also said, “Please study.”"),
    L("Alex", "わかりました。いえで べんきょうする。", "Wakarimashita. Ie de benkyou suru.", "Understood. I'll study at home."),
    L("Mika", "がんばって！", "Ganbatte!", "Good luck!")
  ],
  words: [
    W("と いいます", "to iimasu", "say; is called"),
    W("いう", "iu", "say"),
    W("なんと", "nan to", "what (quote)"),
    W("ほんとう", "hontou", "really, truth"),
    W("しらなかった", "shiranakatta", "didn't know"),
    W("ありがとう", "arigatou", "thank you"),
    W("おはよう", "ohayou", "good morning"),
    W("にほんご", "nihongo", "Japanese language")
  ],
  tips: [
    "Quote plus to iimasu means say that.",
    "Direct quote: exact words in brackets. Indirect: plain form before to.",
    "To iimasu also means is called, as in watashi wa Mika to iimasu."
  ],
  quiz: [
    ask("to-iu", "How do you say “Mika said she will come”?", "ミカさんは くる と いいました。", ["ミカさんは きます と いいました。", "ミカさんは くる いいました。"], "Plain form + と いいました."),
    ask("to-iu", "How do you say “My name is Mika”?", "わたしは ミカと いいます。", ["わたしは ミカを いいます。", "わたしは ミカが いいます。"], "ミカと いいます."),
    ask("to-iu", "How do you ask “What did he say?”", "なんと いいましたか。", ["なにを いいましたか と。", "なんで いいました。"], "なんと いいましたか."),
    ask("to-iu", "Which particle marks a quote?", "と", ["を", "に"], "と marks a quote."),
    ask("to-iu", "Which is wrong?", "くます と いいました。", ["くる と いいました。", "いく と いいました。"], "Use the plain form.")
  ]
});
