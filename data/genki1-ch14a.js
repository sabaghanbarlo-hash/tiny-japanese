// Genki I Grammar, chapter 14 (part 1): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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



export const karaMade = lesson({
  id: "kara-made", number: 93, title: "から / まで: From and Until",
  summary: "Say “from ... to ...” for times and places with から and まで.",
  objective: "By the end you can say “I work from nine to five” and “I walk from home to the station”.",
  teach: [
    T("The idea", "から = from, まで = until",
      ["{から|kara} means “from”. {まで|made} means “until” or “up to”. Put them right after a time or a place.",
       "{くじから ごじまで はたらきます|kuji kara goji made hatarakimasu} means “I work from nine to five”."],
      [E("くじから ごじまで はたらきます。", "Kuji kara goji made hatarakimasu.", "I work from nine to five.", "から"),
       E("ひるごはんは じゅうにじから です。", "Hirugohan wa juuniji kara desu.", "Lunch is from twelve.", "から")]),
    T("Places", "Home to the station",
      ["The same two words work for places. {うちから えきまで あるきます|uchi kara eki made arukimasu} means “I walk from home to the station”.",
       "{から|kara} marks the starting point. {まで|made} marks the end point."],
      [E("うちから えきまで あるきます。", "Uchi kara eki made arukimasu.", "I walk from home to the station.", "えきまで"),
       E("ここから あそこまで いきます。", "Koko kara asoko made ikimasu.", "I go from here to there.", "から")]),
    T("Only one side", "You can use just one",
      ["You do not need both. {くじから|kuji kara} says only the start. {ごじまで|goji made} says only the end.",
       "Add {です|desu} or a verb as you like."],
      [E("がっこうは くじから です。", "Gakkou wa kuji kara desu.", "School is from nine.", "くじから"),
       E("ごじまで まって ください。", "Goji made matte kudasai.", "Please wait until five.", "ごじまで")]),
    T("まで or に", "Lasting or one moment",
      ["{まで|made} says an action continues up to a point. {に|ni} says one moment. Compare the two.",
       "{ごじまで はたらきます|goji made hatarakimasu} means “I work until five”. {ごじに かえります|goji ni kaerimasu} means “I go home at five”."],
      [E("ごじまで はたらきます。", "Goji made hatarakimasu.", "I work until five.", "まで"),
       E("ごじに かえります。", "Goji ni kaerimasu.", "I go home at five.", "に")]),
    T("Not the reason から", "After a noun, it means from",
      ["You already know {から|kara} for “because”, after a full sentence. After a noun it means “from”. The position tells you which one it is.",
       "{あつい から、みずを のみます|atsui kara, mizu o nomimasu} is “Because it is hot, I drink water”."],
      [E("あつい から、みずを のみます。", "Atsui kara, mizu o nomimasu.", "Because it is hot, I drink water.", "から"),
       E("くじから はたらきます。", "Kuji kara hatarakimasu.", "I work from nine.", "くじから")]),
    T("Common mistakes", "Time first, then から",
      ["Put {から|kara} after the time, not before it. {から くじ|kara kuji} is wrong. Say {くじから|kuji kara}.",
       "Do not use {に|ni} when you mean “until”. Use {まで|made}."],
      [E("から くじ ごじまで はたらきます。", "(wrong)", "Wrong: から goes after the time.", "から くじ", true),
       E("くじから ごじまで はたらきます。", "Kuji kara goji made hatarakimasu.", "Right.", "くじから")],
      T0("Say: “I work from nine to five.”", "くじから ごじまで はたらきます。", "Kuji kara goji made hatarakimasu.", "I work from nine to five.", "から"))
  ],
  storyTitle: "Work hours",
  story: [
    L("Mika", "アレックスさんは なんじから なんじまで はたらきますか。", "Arekkusu-san wa nanji kara nanji made hatarakimasu ka.", "Alex, from what time to what time do you work?"),
    L("Alex", "くじから ごじまで はたらきます。", "Kuji kara goji made hatarakimasu.", "I work from nine to five."),
    L("Mika", "うちから かいしゃまで あるきますか。", "Uchi kara kaisha made arukimasu ka.", "Do you walk from home to the office?"),
    L("Alex", "いいえ。うちから えきまで あるきます。", "Iie. Uchi kara eki made arukimasu.", "No. I walk from home to the station."),
    L("Mika", "ひるごはんは なんじから ですか。", "Hirugohan wa nanji kara desu ka.", "From what time is lunch?"),
    L("Alex", "じゅうにじから です。", "Juuniji kara desu.", "From twelve.")
  ],
  words: [
    W("から", "kara", "from"),
    W("まで", "made", "until, up to"),
    W("はたらきます", "hatarakimasu", "work"),
    W("えき", "eki", "station"),
    W("かいしゃ", "kaisha", "company, office"),
    W("ひるごはん", "hirugohan", "lunch"),
    W("まちます", "machimasu", "wait"),
    W("なんじ", "nanji", "what time")
  ],
  tips: [
    "Kara means from and made means until. Both come after the word.",
    "Made lasts up to a point. Ni is for one moment.",
    "After a noun, kara means from. After a sentence, it means because."
  ],
  quiz: [
    ask("kara-made", "How do you say “from nine to five”?", "くじから ごじまで", ["ごじまで くじから", "くじを ごじに"], "Time + から, time + まで."),
    ask("kara-made", "What does から mean right after a time?", "from", ["until", "at"], "から marks the start."),
    ask("kara-made", "What does まで mean?", "until, up to", ["from", "because"], "まで marks the end."),
    ask("kara-made", "How do you say “from home to the station”?", "うちから えきまで", ["えきから うちまで", "うちまで えきから"], "Start から, end まで."),
    ask("kara-made", "Which means “I work until five”?", "ごじまで はたらきます。", ["ごじから はたらきます。", "ごじに はたらきます。"], "まで is for lasting up to a point.")
  ]
});

export const teLinking = lesson({
  id: "te-linking", number: 94, title: "て-form: Linking Sentences",
  summary: "Join actions, adjectives and nouns into one sentence with the て-form and で.",
  objective: "By the end you can say “I get up, eat, and go to school” and “It is cheap and tasty”.",
  teach: [
    T("Verbs in a row", "て-form joins actions",
      ["To say several actions in order, use the {て|te}-form for every action except the last. {あさ おきて、ごはんを たべて、がっこうへ いきます|asa okite, gohan o tabete, gakkou e ikimasu} means “I get up, eat, and go to school”.",
       "It is like “and then” in English."],
      [E("おきて、ごはんを たべます。", "Okite, gohan o tabemasu.", "I get up and eat.", "おきて"),
       E("ともだちに あって、えいがを みました。", "Tomodachi ni atte, eiga o mimashita.", "I met a friend and saw a movie.", "あって")]),
    T("Tense at the end", "Only the last verb shows tense",
      ["Only the last verb shows past or present. The earlier {て|te}-forms stay the same.",
       "{のんで、たべました|nonde, tabemashita} is “drank and ate”. The tense is only on {たべました|tabemashita}."],
      [E("のんで、たべました。", "Nonde, tabemashita.", "I drank and ate.", "のんで"),
       E("かって、かえります。", "Katte, kaerimasu.", "I buy it and go home.", "かって")]),
    T("い-adjectives", "Change い to くて",
      ["For a {い|i}-adjective, drop the last {い|i} and add {くて|kute}. {やすい|yasui} becomes {やすくて|yasukute}.",
       "{やすくて おいしい です|yasukute oishii desu} means “It is cheap and tasty”. The special one is {いい|ii}, which becomes {よくて|yokute}."],
      [E("やすくて おいしい です。", "Yasukute oishii desu.", "It is cheap and tasty.", "やすくて"),
       E("よくて やすい です。", "Yokute yasui desu.", "It is good and cheap.", "よくて")]),
    T("な-adjectives and nouns", "Add で",
      ["After a {な|na}-adjective or a noun, add {で|de}. {しずかで きれい です|shizuka de kirei desu} means “It is quiet and clean”.",
       "{ミカさんは にほんじんで、がくせい です|Mika-san wa nihonjin de, gakusei desu} means “Mika is Japanese and a student”."],
      [E("しずかで きれい です。", "Shizuka de kirei desu.", "It is quiet and pretty.", "で"),
       E("ミカさんは にほんじんで、がくせい です。", "Mika-san wa nihonjin de, gakusei desu.", "Mika is Japanese and a student.", "で")]),
    T("Linking past sentences", "Past is at the end",
      ["Keep the early part in the linking form, and put the past at the very end. {しずかで きれい でした|shizuka de kirei deshita} means “It was quiet and pretty”.",
       "Do not make every part past. One past ending is enough."],
      [E("しずかで きれい でした。", "Shizuka de kirei deshita.", "It was quiet and pretty.", "で"),
       E("やすくて おいしかった です。", "Yasukute oishikatta desu.", "It was cheap and tasty.", "やすくて")]),
    T("Common mistakes", "Match the word type",
      ["Do not add {で|de} to a {い|i}-adjective: {やすいで おいしい|yasui de oishii} is wrong. Say {やすくて|yasukute}.",
       "Do not add {くて|kute} to a {な|na}-adjective: {しずかくて|shizukakute} is wrong. Say {しずかで|shizuka de}."],
      [E("やすいで おいしい です。", "(wrong)", "Wrong: use やすくて.", "やすいで", true),
       E("やすくて おいしい です。", "Yasukute oishii desu.", "Right.", "やすくて")],
      T0("Say: “The cake is cheap and tasty.”", "ケーキは やすくて おいしい です。", "Keeki wa yasukute oishii desu.", "The cake is cheap and tasty.", "やすくて"))
  ],
  storyTitle: "The new cafe",
  story: [
    L("Mika", "きのう あたらしい カフェへ いきました。", "Kinou atarashii kafe e ikimashita.", "Yesterday I went to a new cafe."),
    L("Alex", "どうでしたか。", "Dou deshita ka.", "How was it?"),
    L("Mika", "しずかで、きれい でした。", "Shizuka de, kirei deshita.", "It was quiet and pretty."),
    L("Mika", "コーヒーは やすくて、おいしかった です。", "Koohii wa yasukute, oishikatta desu.", "The coffee was cheap and tasty."),
    L("Alex", "いいですね。あした いって、ケーキを たべます。", "Ii desu ne. Ashita itte, keeki o tabemasu.", "Nice. Tomorrow I will go and eat cake."),
    L("Mika", "わたしも また いきたい です。", "Watashi mo mata ikitai desu.", "I want to go again too.")
  ],
  words: [
    W("あたらしい", "atarashii", "new"),
    W("カフェ", "kafe", "cafe"),
    W("しずか", "shizuka", "quiet"),
    W("きれい", "kirei", "pretty, clean"),
    W("やすい", "yasui", "cheap"),
    W("おきます", "okimasu", "get up"),
    W("ひろい", "hiroi", "spacious"),
    W("にほんじん", "nihonjin", "Japanese person")
  ],
  tips: [
    "Use the te-form for every action except the last one.",
    "I-adjectives change to kute. Na-adjectives and nouns add de.",
    "Only the last part of the sentence shows past or present."
  ],
  quiz: [
    ask("te-linking", "How do you link “I get up and eat”?", "おきて、たべます。", ["おきます、たべて。", "おきるで たべます。"], "Te-form first, final verb last."),
    ask("te-linking", "What is the linking form of やすい?", "やすくて", ["やすいで", "やすくで"], "Drop い and add くて."),
    ask("te-linking", "What is the linking form of いい?", "よくて", ["いくて", "いいで"], "いい is special: よくて."),
    ask("te-linking", "Which is right for “quiet and pretty”?", "しずかで きれい", ["しずかくて きれい", "しずかいで きれい"], "な-adjectives add で."),
    ask("te-linking", "Where does the past ending go in a linked sentence?", "On the last part", ["On every part", "On the first part"], "Only the end shows tense.")
  ]
});

export const bodyPart = lesson({
  id: "body-part", number: 95, title: "Body-Part Sentences: ～は ～が",
  summary: "Describe a person or thing with two parts: “X is Y-adjective”, like “Mika has long hair”.",
  objective: "By the end you can say “Mika has long hair” and “I have a headache”.",
  teach: [
    T("The idea", "は for the whole, が for the part",
      ["Japanese often describes someone by naming the person first, then one of their features. {ミカさんは かみが ながい です|Mika-san wa kami ga nagai desu} means “Mika has long hair”.",
       "{は|wa} marks the whole, the person. {が|ga} marks the part."],
      [E("ミカさんは かみが ながい です。", "Mika-san wa kami ga nagai desu.", "Mika has long hair.", "かみが"),
       E("アレックスさんは せが たかい です。", "Arekkusu-san wa se ga takai desu.", "Alex is tall.", "せが")]),
    T("Not only people", "Animals and things too",
      ["The same pattern works for animals and things. {ぞうは はなが ながい です|zou wa hana ga nagai desu} means “Elephants have long trunks”.",
       "The first part is the topic. The second part is what is described."],
      [E("ぞうは はなが ながい です。", "Zou wa hana ga nagai desu.", "Elephants have long trunks.", "はなが"),
       E("この くるまは ドアが おおきい です。", "Kono kuruma wa doa ga ookii desu.", "This car has big doors.", "ドアが")]),
    T("Feelings in the body", "Pain",
      ["For pain, say the part with {が|ga}, then {いたい|itai}. {あたまが いたい です|atama ga itai desu} means “I have a headache”.",
       "To say it about a person, add the person with {は|wa} first."],
      [E("あたまが いたい です。", "Atama ga itai desu.", "I have a headache.", "あたまが"),
       E("ミカさんは あたまが いたい です。", "Mika-san wa atama ga itai desu.", "Mika has a headache.", "あたまが")]),
    T("Past tense", "Change only the end",
      ["Make the end past, as usual. {かみが ながかった です|kami ga nagakatta desu} means “Her hair was long”.",
       "The pattern stays the same."],
      [E("かみが ながかった です。", "Kami ga nagakatta desu.", "Her hair was long.", "ながかった"),
       E("きのうは あたまが いたかった です。", "Kinou wa atama ga itakatta desu.", "I had a headache yesterday.", "いたかった")]),
    T("Another way", "の also works",
      ["You can also say {ミカさんの かみは ながい です|Mika-san no kami wa nagai desu}. It means about the same thing: “Mika\'s hair is long”.",
       "The {は|wa} {が|ga} pattern is very common when you describe a person."],
      [E("ミカさんの かみは ながい です。", "Mika-san no kami wa nagai desu.", "Mika\'s hair is long.", "かみは"),
       E("ミカさんは かみが ながい です。", "Mika-san wa kami ga nagai desu.", "Mika has long hair.", "かみが")]),
    T("Common mistakes", "Use が, not を",
      ["An adjective has no object, so do not use {を|o}. {かみを ながい|kami o nagai} is wrong. Say {かみが ながい|kami ga nagai}.",
       "The part goes before the adjective, with {が|ga}."],
      [E("ミカさんは かみを ながい です。", "(wrong)", "Wrong: use が, not を.", "かみを", true),
       E("ミカさんは かみが ながい です。", "Mika-san wa kami ga nagai desu.", "Right.", "かみが")],
      T0("Say: “Mika has long hair.”", "ミカさんは かみが ながい です。", "Mika-san wa kami ga nagai desu.", "Mika has long hair.", "かみが"))
  ],
  storyTitle: "A bad head day",
  story: [
    L("Mika", "ジョンさんを しって いますか。", "Jon-san o shitte imasu ka.", "Do you know John?"),
    L("Alex", "はい。せが たかくて、かみが みじかい ひと ですね。", "Hai. Se ga takakute, kami ga mijikai hito desu ne.", "Yes. He is the tall one with short hair."),
    L("Mika", "ええ。きょうは げんきじゃ ありません。", "Ee. Kyou wa genki ja arimasen.", "Yes. He is not well today."),
    L("Alex", "どうしましたか。", "Dou shimashita ka.", "What happened?"),
    L("Mika", "あたまが いたい です。", "Atama ga itai desu.", "He has a headache."),
    L("Alex", "だいじょうぶ ですか。やすんで ください。", "Daijoubu desu ka. Yasunde kudasai.", "Is he okay? Please rest.")
  ],
  words: [
    W("かみ", "kami", "hair"),
    W("せ", "se", "height"),
    W("あたま", "atama", "head"),
    W("はな", "hana", "nose, trunk"),
    W("ながい", "nagai", "long"),
    W("みじかい", "mijikai", "short"),
    W("いたい", "itai", "painful"),
    W("ぞう", "zou", "elephant")
  ],
  tips: [
    "Say the whole with wa, then the part with ga.",
    "Do not use o with an adjective. Say kami ga nagai.",
    "For pain, say the body part with ga, then itai."
  ],
  quiz: [
    ask("body-part", "How do you say “Mika has long hair”?", "ミカさんは かみが ながい です。", ["ミカさんは かみを ながい です。", "ミカさんが かみは ながい です。"], "は for the person, が for the part."),
    ask("body-part", "Which particle marks the body part?", "が", ["を", "に"], "The part takes が."),
    ask("body-part", "How do you say “I have a headache”?", "あたまが いたい です。", ["あたまを いたい です。", "あたまは いたいを です。"], "Part + が + いたい."),
    ask("body-part", "What does せが たかい mean?", "tall", ["old", "expensive"], "せ is height."),
    ask("body-part", "Why is かみを ながい wrong?", "Adjectives do not take を", ["かみ is not a noun", "ながい is a verb"], "Use が with an adjective.")
  ]
});
