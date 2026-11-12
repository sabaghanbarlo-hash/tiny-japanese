// Genki I Grammar, chapter 4 (part 1): existence, location and the past tense of です. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const aruIru = lesson({
  id: "aru-iru", number: 24, title: "ある and いる: Saying What Exists",
  summary: "Say that something or someone exists or is somewhere, with あります and います.",
  objective: "By the end you can say what there is in a place and choose between あります and います.",
  teach: [
    T("The idea", "あります for things, います for living beings",
      ["Japanese has two verbs for “there is” and “exists”. {あります|arimasu} is for things. {います|imasu} is for people and animals. The choice depends on whether the subject is alive and can move by itself.",
       "These two verbs are the foundation of every sentence that says what is in a place."],
      [E("ほんが あります。", "Hon ga arimasu.", "There is a book.", "あります"),
       E("ねこが います。", "Neko ga imasu.", "There is a cat.", "います")]),
    T("ある: things", "Things that do not move by themselves",
      ["Use {あります|arimasu} for objects, and also for plants, events and ideas: anything that does not move by its own will. A book, a desk, a tree, a test.",
       "The dictionary form is {ある|aru}. The polite form is {あります|arimasu}, which is an irregular-looking godan verb you can simply memorise."],
      [E("へやに テレビが あります。", "Heya ni terebi ga arimasu.", "There is a TV in the room.", "あります"),
       E("あした テストが あります。", "Ashita tesuto ga arimasu.", "There is a test tomorrow.", "あります")]),
    T("いる: people and animals", "Living things that move",
      ["Use {います|imasu} for people and animals. The dictionary form is {いる|iru}, which is an ichidan verb, so the polite form is {います|imasu}.",
       "A robot is a thing, so you would use {あります|arimasu}. But a person in a photograph is still a person, so {います|imasu}."],
      [E("ミカさんが います。", "Mika-san ga imasu.", "Mika is here.", "います"),
       E("いぬが います。", "Inu ga imasu.", "There is a dog.", "います")]),
    T("The pattern", "Place に Thing が あります / います",
      ["To say what exists in a place, the pattern is: place, {に|ni}, thing, {が|ga}, verb. {としょかんに ひとが います|toshokan ni hito ga imasu} means “there are people in the library”.",
       "{に|ni} marks the place where something exists, and {が|ga} marks what exists."],
      [E("としょかんに ひとが います。", "Toshokan ni hito ga imasu.", "There are people in the library.", "に"),
       E("へやに つくえが あります。", "Heya ni tsukue ga arimasu.", "There is a desk in the room.", "に")]),
    T("The negative", "ありません and いません",
      ["The negative of {あります|arimasu} is {ありません|arimasen}. The negative of {います|imasu} is {いません|imasen}. Both follow the normal {ません|masen} rule.",
       "These are the same {ません|masen} endings you already know."],
      [E("ほんが ありません。", "Hon ga arimasen.", "There is no book.", "ありません"),
       E("ねこが いません。", "Neko ga imasen.", "There is no cat.", "いません")]),
    T("Questions", "なにが ありますか, だれが いますか",
      ["To ask what is in a place, use {なにが ありますか|nani ga arimasu ka}. To ask who is there, use {だれが いますか|dare ga imasu ka}. The question word takes {が|ga}, just as you learned.",
       "The answer replaces the question word."],
      [E("ここに なにが ありますか。", "Koko ni nani ga arimasu ka.", "What is there here?", "なにが"),
       E("へやに だれが いますか。", "Heya ni dare ga imasu ka.", "Who is in the room?", "だれが"),
       E("ミカさんが います。", "Mika-san ga imasu.", "Mika is there.", "が")]),
    T("に, not で", "Existence is not an action",
      ["The place of existence takes {に|ni}, not {で|de}. Remember, {で|de} is for where an action happens. Existing is not an action.",
       "So you say {へやに ミカさんが います|heya ni Mika-san ga imasu}, never {へやで ミカさんが います|heya de Mika-san ga imasu}."],
      [E("へやで ミカさんが います。", "(wrong)", "Wrong: existence takes に.", "で", true),
       E("へやに ミカさんが います。", "Heya ni Mika-san ga imasu.", "Right: Mika is in the room.", "に")]),
    T("Common mistakes", "Match the verb to the subject",
      ["Do not use {あります|arimasu} for a person or an animal, and do not use {います|imasu} for an object. {ねこが あります|neko ga arimasu} and {ほんが います|hon ga imasu} are both wrong.",
       "If you are unsure, ask: is it alive? Then {います|imasu}."],
      [E("ねこが あります。", "(wrong)", "Wrong: a cat is alive, so います.", "あります", true),
       E("ほんが います。", "(wrong)", "Wrong: a book is a thing, so あります.", "います", true),
       E("ほんが あります。", "Hon ga arimasu.", "Right: There is a book.", "あります")],
      T0("Say: “There is a cat in the room.”", "へやに ねこが います。", "Heya ni neko ga imasu.", "There is a cat in the room.", "います"))
  ],
  storyTitle: "What's in the room?",
  story: [
    L("Alex", "ミカさんの へやに なにが ありますか。", "Mika-san no heya ni nani ga arimasu ka.", "What is in your room, Mika?"),
    L("Mika", "つくえと ベッドが あります。", "Tsukue to beddo ga arimasu.", "There is a desk and a bed."),
    L("Alex", "テレビは ありますか。", "Terebi wa arimasu ka.", "Is there a TV?"),
    L("Mika", "いいえ、テレビは ありません。", "Iie, terebi wa arimasen.", "No, there is no TV."),
    L("Alex", "ねこは いますか。", "Neko wa imasu ka.", "Is there a cat?"),
    L("Mika", "はい、ねこが います。なまえは ミケです。", "Hai, neko ga imasu. Namae wa Mike desu.", "Yes, there is a cat. Its name is Mike.")
  ],
  words: [
    W("ある / あります", "aru / arimasu", "there is (things)"),
    W("いる / います", "iru / imasu", "there is (people, animals)"),
    W("へや", "heya", "room"),
    W("つくえ", "tsukue", "desk"),
    W("ベッド", "beddo", "bed"),
    W("ねこ", "neko", "cat"),
    W("いぬ", "inu", "dog"),
    W("ひと", "hito", "person")
  ],
  tips: [
    "あります is for things; います is for people and animals.",
    "Place に Thing が あります/います.",
    "Existence uses に, not で."
  ],
  quiz: [
    ask("aru-iru", "Which verb do you use for a cat?", "います", ["あります", "です"], "Animals use います."),
    ask("aru-iru", "Which verb do you use for a book?", "あります", ["います", "します"], "Things use あります."),
    ask("aru-iru", "Which particle marks the place of existence?", "に", ["で", "を"], "に marks where something exists."),
    ask("aru-iru", "What is the negative of います?", "いません", ["ありません", "いりません"], "います → いません."),
    ask("aru-iru", "How do you ask “Who is in the room?”", "へやに だれが いますか。", ["へやに なにが いますか。", "へやで だれが いますか。"], "だれが + います.")
  ]
});

export const location = lesson({
  id: "location-words", number: 25, title: "Describing Where Things Are",
  summary: "Use うえ, した, なか, まえ, うしろ, となり and friends to say exactly where something is.",
  objective: "By the end you can say where something or someone is, and you know the two sentence patterns.",
  teach: [
    T("Position words", "うえ, した, なか, まえ...",
      ["Position words are nouns. {うえ|ue} is on or above. {した|shita} is under. {なか|naka} is inside. {まえ|mae} is in front. {うしろ|ushiro} is behind. {となり|tonari} is next to. {よこ|yoko} is beside. {ちかく|chikaku} is near.",
       "They work like nouns, so they link to other nouns with {の|no}."],
      [E("うえ", "ue", "on, above", "うえ"),
       E("した", "shita", "under, below", "した"),
       E("なか", "naka", "inside", "なか"),
       E("まえ", "mae", "in front of", "まえ")]),
    T("The pattern with の", "Noun の position word",
      ["To say “on the desk”, put the thing first, then {の|no}, then the position word: {つくえの うえ|tsukue no ue}. Literally “the desk's top”. Then add {に|ni}.",
       "{つくえの うえに|tsukue no ue ni} means “on the desk”."],
      [E("つくえの うえ", "tsukue no ue", "on the desk", "の"),
       E("いすの した", "isu no shita", "under the chair", "の"),
       E("かばんの なか", "kaban no naka", "inside the bag", "の")]),
    T("Two sentence patterns", "Introducing vs locating",
      ["There are two ways to say where things are. To introduce something new, use: place, {に|ni}, thing, {が|ga}, verb. {つくえの うえに ほんが あります|tsukue no ue ni hon ga arimasu}: there is a book on the desk.",
       "To say where a known thing is, put the thing first with {は|wa}: thing, {は|wa}, place, {に|ni}, verb. {ほんは つくえの うえに あります|hon wa tsukue no ue ni arimasu}: the book is on the desk."],
      [E("つくえの うえに ほんが あります。", "Tsukue no ue ni hon ga arimasu.", "There is a book on the desk. (new)", "が"),
       E("ほんは つくえの うえに あります。", "Hon wa tsukue no ue ni arimasu.", "The book is on the desk. (known)", "は")]),
    T("In front, behind, beside", "まえ, うしろ, となり, よこ",
      ["More position words. {まえ|mae}, in front. {うしろ|ushiro}, behind. {となり|tonari}, next to, neighbouring. {よこ|yoko}, beside, sideways. {ちかく|chikaku}, near. {あいだ|aida}, between.",
       "{となり|tonari} is typically used for things of the same kind next to each other, such as two shops."],
      [E("ぎんこうは ゆうびんきょくの となりに あります。", "Ginkou wa yuubinkyoku no tonari ni arimasu.", "The bank is next to the post office.", "となり"),
       E("ミカさんは アレックスさんの まえに います。", "Mika-san wa Arekkusu-san no mae ni imasu.", "Mika is in front of Alex.", "まえ"),
       E("ちかくに コンビニが あります。", "Chikaku ni konbini ga arimasu.", "There is a convenience store nearby.", "ちかく")]),
    T("Asking: どこ", "Where is it?",
      ["To ask where something is, use {どこ|doko}. {ほんは どこに ありますか|hon wa doko ni arimasu ka} means “where is the book?”. For people, use {います|imasu}.",
       "The answer replaces {どこ|doko} with a place."],
      [E("ほんは どこに ありますか。", "Hon wa doko ni arimasu ka.", "Where is the book?", "どこ"),
       E("ミカさんは どこに いますか。", "Mika-san wa doko ni imasu ka.", "Where is Mika?", "どこ"),
       E("つくえの うえに あります。", "Tsukue no ue ni arimasu.", "It's on the desk.", "うえ")]),
    T("Common mistakes", "Do not forget の and に",
      ["Do not forget {の|no} between the noun and the position word: {つくえ うえ|tsukue ue} is wrong. And do not use {が|ga} when you want to say where a known thing is.",
       "Also remember that existence uses {に|ni}, not {で|de}."],
      [E("つくえ うえに あります。", "(wrong)", "Wrong: add の between the nouns.", "うえ", true),
       E("ほんは つくえの うえで あります。", "(wrong)", "Wrong: use に for existence.", "で", true),
       E("ほんは つくえの うえに あります。", "Hon wa tsukue no ue ni arimasu.", "Right: The book is on the desk.", "に")],
      T0("Say: “The cat is under the desk.”", "ねこは つくえの したに います。", "Neko wa tsukue no shita ni imasu.", "The cat is under the desk.", "した"))
  ],
  storyTitle: "Where is my bag?",
  story: [
    L("Alex", "ミカさん、わたしの かばんは どこに ありますか。", "Mika-san, watashi no kaban wa doko ni arimasu ka.", "Mika, where is my bag?"),
    L("Mika", "つくえの うえに ありますよ。", "Tsukue no ue ni arimasu yo.", "It's on the desk."),
    L("Alex", "あれ、ありません。", "Are, arimasen.", "Huh, it isn't there."),
    L("Mika", "いすの したを みて ください。", "Isu no shita o mite kudasai.", "Please look under the chair."),
    L("Alex", "あ、ありました。かばんの なかに さいふも あります。", "A, arimashita. Kaban no naka ni saifu mo arimasu.", "Oh, here it is. My wallet is in the bag too."),
    L("Mika", "よかった ですね。", "Yokatta desu ne.", "I'm glad.")
  ],
  words: [
    W("うえ / した / なか", "ue / shita / naka", "on / under / inside"),
    W("まえ / うしろ", "mae / ushiro", "in front / behind"),
    W("となり / よこ", "tonari / yoko", "next to / beside"),
    W("ちかく", "chikaku", "near, nearby"),
    W("いす", "isu", "chair"),
    W("さいふ", "saifu", "wallet"),
    W("ぎんこう", "ginkou", "bank"),
    W("ゆうびんきょく", "yuubinkyoku", "post office")
  ],
  tips: [
    "Position words are nouns: noun の position word.",
    "New thing: place に thing が ある. Known thing: thing は place に ある.",
    "Use に for existence, never で."
  ],
  quiz: [
    ask("location-words", "How do you say “on the desk”?", "つくえの うえ", ["つくえ うえ", "うえの つくえ"], "Noun の position word."),
    ask("location-words", "Which means “inside”?", "なか", ["うえ", "した"], "なか is inside."),
    ask("location-words", "Which sentence says where a known thing is?", "ほんは つくえの うえに あります。", ["つくえの うえに ほんが あります。", "ほんが つくえの うえで あります。"], "Thing は place に ある."),
    ask("location-words", "How do you ask “Where is the book?”", "ほんは どこに ありますか。", ["ほんは なにに ありますか。", "ほんは だれに ありますか。"], "どこ asks where."),
    ask("location-words", "Which means “next to”?", "となり", ["まえ", "うしろ"], "となり is next to.")
  ]
});

export const pastNoun = lesson({
  id: "past-noun", number: 26, title: "でした: The Past of です",
  summary: "Say what something was, and was not, with でした and じゃ ありませんでした.",
  objective: "By the end you can talk about the past with nouns, in both positive and negative.",
  teach: [
    T("The idea", "です → でした",
      ["The past of {です|desu} is {でした|deshita}. It means “was” or “were”. You simply replace {です|desu} with {でした|deshita} and the rest stays the same.",
       "Like {です|desu}, it does not change for the person."],
      [E("わたしは こうこうせい です。", "Watashi wa koukousei desu.", "I am a high school student.", "です"),
       E("わたしは こうこうせい でした。", "Watashi wa koukousei deshita.", "I was a high school student.", "でした")]),
    T("The negative past", "じゃ ありませんでした",
      ["For “was not”, use {じゃ ありませんでした|ja arimasen deshita}. It is the negative {じゃ ありません|ja arimasen} plus {でした|deshita}.",
       "{がくせい じゃ ありませんでした|gakusei ja arimasen deshita} means “(I) was not a student”."],
      [E("がくせい じゃ ありませんでした。", "Gakusei ja arimasen deshita.", "(I) was not a student.", "じゃ ありませんでした"),
       E("きのうは にちようび じゃ ありませんでした。", "Kinou wa nichiyoubi ja arimasen deshita.", "Yesterday was not Sunday.", "じゃ ありませんでした")]),
    T("All four forms", "A small table",
      ["There are four forms to learn: {です|desu}, is. {でした|deshita}, was. {じゃ ありません|ja arimasen}, is not. {じゃ ありませんでした|ja arimasen deshita}, was not.",
       "The pattern is regular: add {でした|deshita} to move to the past."],
      [E("がくせい です。", "Gakusei desu.", "(I) am a student.", "です"),
       E("がくせい でした。", "Gakusei deshita.", "(I) was a student.", "でした"),
       E("がくせい じゃ ありません。", "Gakusei ja arimasen.", "(I) am not a student.", "じゃ ありません"),
       E("がくせい じゃ ありませんでした。", "Gakusei ja arimasen deshita.", "(I) was not a student.", "じゃ ありませんでした")]),
    T("Time words", "きのう, せんしゅう, さくねん",
      ["Past time words pair naturally with {でした|deshita}. {きのう|kinou} is yesterday. {せんしゅう|senshuu} is last week. {さくねん|sakunen} is last year.",
       "You do not need {に|ni} with these relative time words."],
      [E("きのうは にちようび でした。", "Kinou wa nichiyoubi deshita.", "Yesterday was Sunday.", "でした"),
       E("せんしゅうは やすみ でした。", "Senshuu wa yasumi deshita.", "Last week was a holiday.", "でした"),
       E("さくねん わたしは こうこうせい でした。", "Sakunen watashi wa koukousei deshita.", "Last year I was a high school student.", "でした")]),
    T("Questions and answers", "でしたか",
      ["Add {か|ka} to ask. {きのうは やすみ でしたか|kinou wa yasumi deshita ka} means “was yesterday a day off?”. Answer with {はい|hai} and {でした|deshita}, or {いいえ|iie} and {じゃ ありませんでした|ja arimasen deshita}.",
       "{そうでした|sou deshita} means “that's right”, in the past."],
      [E("きのうは やすみ でしたか。", "Kinou wa yasumi deshita ka.", "Was yesterday a day off?", "でしたか"),
       E("はい、やすみ でした。", "Hai, yasumi deshita.", "Yes, it was a day off.", "でした"),
       E("いいえ、やすみ じゃ ありませんでした。", "Iie, yasumi ja arimasen deshita.", "No, it wasn't a day off.", "じゃ ありませんでした")]),
    T("Common mistakes", "Do not mix endings",
      ["Do not add {でした|deshita} after {じゃ ありません|ja arimasen} with a gap in the wrong order: {じゃ でした ありません|ja deshita arimasen} is wrong. And do not use {ありました|arimashita} here, because that is the past of {あります|arimasu}, to exist.",
       "For “was a noun”, use {でした|deshita}."],
      [E("がくせい でした ありません。", "(wrong)", "Wrong: the order is じゃ ありませんでした.", "でした", true),
       E("がくせい ありました。", "(wrong)", "Wrong: ありました is “existed”.", "ありました", true),
       E("がくせい でした。", "Gakusei deshita.", "Right: (I) was a student.", "でした")],
      T0("Say: “Yesterday was Monday.”", "きのうは げつようび でした。", "Kinou wa getsuyoubi deshita.", "Yesterday was Monday.", "でした"))
  ],
  storyTitle: "Last weekend",
  story: [
    L("Mika", "せんしゅうの にちようびは どう でしたか。", "Senshuu no nichiyoubi wa dou deshita ka.", "How was last Sunday?"),
    L("Alex", "いい てんき でした。", "Ii tenki deshita.", "The weather was nice."),
    L("Mika", "きのうも いい てんき でしたか。", "Kinou mo ii tenki deshita ka.", "Was yesterday nice too?"),
    L("Alex", "いいえ、きのうは あめ でした。", "Iie, kinou wa ame deshita.", "No, yesterday was rainy."),
    L("Mika", "そうでしたか。さくねんの なつは どう でしたか。", "Sou deshita ka. Sakunen no natsu wa dou deshita ka.", "Oh, was it? How was last summer?"),
    L("Alex", "とても あつい なつ でした。", "Totemo atsui natsu deshita.", "It was a very hot summer.")
  ],
  words: [
    W("でした", "deshita", "was, were"),
    W("じゃ ありませんでした", "ja arimasen deshita", "was not"),
    W("きのう", "kinou", "yesterday"),
    W("せんしゅう", "senshuu", "last week"),
    W("さくねん", "sakunen", "last year"),
    W("やすみ", "yasumi", "holiday, day off"),
    W("あめ", "ame", "rain"),
    W("てんき", "tenki", "weather")
  ],
  tips: [
    "です → でした. じゃ ありません → じゃ ありませんでした.",
    "でした does not change for the person.",
    "きのう, せんしゅう and さくねん do not need に."
  ],
  quiz: [
    ask("past-noun", "What is the past of です?", "でした", ["ました", "でして"], "です → でした."),
    ask("past-noun", "How do you say “was not a student”?", "がくせい じゃ ありませんでした", ["がくせい じゃ ありました", "がくせい でした ありません"], "じゃ ありませんでした."),
    ask("past-noun", "What does きのう mean?", "yesterday", ["tomorrow", "today"], "きのう is yesterday."),
    ask("past-noun", "Which means “Yesterday was Sunday”?", "きのうは にちようび でした。", ["きのうは にちようび です。", "きのうは にちようび ます。"], "でした is the past."),
    ask("past-noun", "Which means “last year”?", "さくねん", ["せんしゅう", "きのう"], "さくねん is last year.")
  ]
});
