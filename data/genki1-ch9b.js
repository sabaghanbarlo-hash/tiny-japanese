// Genki I Grammar, chapter 9 (part 1): explanations, guesses, reasons. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const naideKudasai = lesson({
  id: "nai-de-kudasai", number: 66, title: "～ないで ください: Please Don't",
  summary: "Ask someone politely not to do something with ないで ください.",
  objective: "By the end you can say “please don't eat here” and “please don't worry”.",
  teach: [
    T("The idea", "Plain negative + で ください",
      ["To ask someone not to do something, put {で ください|de kudasai} after the plain negative {ない|nai} form. {たべないで ください|tabenai de kudasai} means “please don't eat”.",
       "It is the polite way to say “don't”, much gentler than {ては いけません|te wa ikemasen}."],
      [E("たべないで ください。", "Tabenai de kudasai.", "Please don't eat.", "ないで ください"),
       E("いかないで ください。", "Ikanai de kudasai.", "Please don't go.", "ないで ください")]),
    T("How to make it", "Use the ない form",
      ["Make the plain negative first, then add {で ください|de kudasai}. {みる|miru} becomes {みない|minai}, so {みないで ください|minai de kudasai}. {のむ|nomu} becomes {のまない|nomanai}, so {のまないで ください|nomanai de kudasai}. {する|suru} becomes {しない|shinai}, so {しないで ください|shinai de kudasai}.",
       "Do not forget the changes for {う|u} verbs: {かわない|kawanai}."],
      [E("みないで ください。", "Minai de kudasai.", "Please don't look.", "ないで ください"),
       E("のまないで ください。", "Nomanai de kudasai.", "Please don't drink.", "ないで ください"),
       E("しないで ください。", "Shinai de kudasai.", "Please don't do it.", "ないで ください")]),
    T("In real life", "Signs and requests",
      ["You will hear and read this often. {ここで たばこを すわないで ください|koko de tabako o suwanai de kudasai}, “please don't smoke here”. {しんぱいしないで ください|shinpai shinai de kudasai}, “please don't worry”. {わすれないで ください|wasurenai de kudasai}, “please don't forget”.",
       "It is polite enough for strangers, teachers and customers."],
      [E("ここで たばこを すわないで ください。", "Koko de tabako o suwanai de kudasai.", "Please don't smoke here.", "ないで ください"),
       E("しんぱいしないで ください。", "Shinpai shinai de kudasai.", "Please don't worry.", "ないで ください"),
       E("わすれないで ください。", "Wasurenai de kudasai.", "Please don't forget.", "ないで ください")]),
    T("Comparing with ては いけません", "Two levels of strength",
      ["{ては いけません|te wa ikemasen} is a rule: “you must not”. {ないで ください|nai de kudasai} is a request: “please don't”. Use the request with people; keep the rule for signs and official rules.",
       "Choose the one that fits the situation."],
      [E("さわっては いけません。", "Sawatte wa ikemasen.", "You must not touch. (rule)", "ては いけません"),
       E("さわらないで ください。", "Sawaranai de kudasai.", "Please don't touch. (request)", "ないで ください")]),
    T("Casual style", "ないで",
      ["Among friends, drop {ください|kudasai}: {いかないで|ikanai de} means “don't go”. It can sound pleading and emotional. With a rising tone: {いかないで？|ikanai de}.",
       "Do not use it with people above you."],
      [E("いかないで。", "Ikanai de.", "Don't go.", "ないで"),
       E("わらわないで。", "Warawanai de.", "Don't laugh.", "ないで"),
       E("みないで！", "Minai de!", "Don't look!", "ないで")]),
    T("Common mistakes", "Do not use ません + で",
      ["Do not use the polite negative: {いきませんで ください|ikimasen de kudasai} is wrong. And do not use the {て|te}-form: {いって ないで ください|itte nai de kudasai} is wrong. Use the plain negative.",
       "Also do not confuse {ないで|nai de} with {なくて|nakute}, which has a different meaning."],
      [E("いきませんで ください。", "(wrong)", "Wrong: use the plain negative.", "いきませんで", true),
       E("たべなくて ください。", "(wrong)", "Wrong: use ないで.", "なくて", true),
       E("たべないで ください。", "Tabenai de kudasai.", "Right: Please don't eat.", "ないで ください")],
      T0("Say: “Please don't forget.”", "わすれないで ください。", "Wasurenai de kudasai.", "Please don't forget.", "ないで ください"))
  ],
  storyTitle: "In the library",
  story: [
    L("Staff", "すみません、ここで はなさないで ください。", "Sumimasen, koko de hanasanai de kudasai.", "Excuse me, please don't talk here."),
    L("Alex", "あ、すみません。ここで たべても いい ですか。", "A, sumimasen. Koko de tabete mo ii desu ka.", "Oh, sorry. May I eat here?"),
    L("Staff", "いいえ、たべないで ください。", "Iie, tabenai de kudasai.", "No, please don't eat."),
    L("Alex", "わかりました。ほんを さわっても いい ですか。", "Wakarimashita. Hon o sawatte mo ii desu ka.", "Understood. May I touch the books?"),
    L("Staff", "はい、でも ふるい ほんは さわらないで ください。", "Hai, demo furui hon wa sawaranai de kudasai.", "Yes, but please don't touch the old books."),
    L("Alex", "はい、しんぱいしないで ください。", "Hai, shinpai shinai de kudasai.", "Yes, please don't worry.")
  ],
  words: [
    W("ないで ください", "nai de kudasai", "please don't"),
    W("しんぱいします", "shinpai shimasu", "worry"),
    W("わすれます", "wasuremasu", "forget"),
    W("さわります", "sawarimasu", "touch"),
    W("わらいます", "waraimasu", "laugh"),
    W("すいます", "suimasu", "smoke"),
    W("はなします", "hanashimasu", "talk"),
    W("としょかん", "toshokan", "library")
  ],
  tips: [
    "Plain negative plus de kudasai means please don't.",
    "It is a request; te wa ikemasen is a rule.",
    "Among friends, nai de alone means don't."
  ],
  quiz: [
    ask("nai-de-kudasai", "How do you say “Please don't eat”?", "たべないで ください。", ["たべません ください。", "たべなくて ください。"], "ない + で ください."),
    ask("nai-de-kudasai", "What is the plain negative of みる?", "みない", ["みなく", "みません"], "みない."),
    ask("nai-de-kudasai", "How do you say “Please don't worry”?", "しんぱいしないで ください。", ["しんぱいしますで ください。", "しんぱいしなくて ください。"], "しない + で ください."),
    ask("nai-de-kudasai", "Which is a stronger rule?", "ては いけません", ["ないで ください", "ましょう"], "ては いけません is stronger."),
    ask("nai-de-kudasai", "Casual way to say “Don't go”?", "いかないで", ["いきなさい", "いかなくて"], "いかないで.")
  ]
});

export const nakereba = lesson({
  id: "nakereba-naranai", number: 67, title: "～なければ なりません: Must Do",
  summary: "Say what you must do with なければ なりません.",
  objective: "By the end you can say “I have to study” and “I must go home” in polite style.",
  teach: [
    T("The idea", "Plain negative → なければ",
      ["To say “must”, take the plain negative {ない|nai}, drop the final {い|i}, and add {ければ|kereba}, then add {なりません|narimasen}. {たべない|tabenai} becomes {たべなければ|tabenakereba}, and {たべなければ なりません|tabenakereba narimasen} means “I have to eat”.",
       "Literally it says: “if I don't eat, it won't do”."],
      [E("たべなければ なりません。", "Tabenakereba narimasen.", "(I) must eat.", "なければ なりません"),
       E("いかなければ なりません。", "Ikanakereba narimasen.", "(I) must go.", "なければ なりません")]),
    T("Examples", "Every verb type",
      ["Ichidan: {みなければ なりません|minakereba narimasen}. Godan: {のまなければ なりません|nomanakereba narimasen}. Irregular: {しなければ なりません|shinakereba narimasen}, {こなければ なりません|konakereba narimasen}. The {う|u} verbs: {かわなければ なりません|kawanakereba narimasen}.",
       "Use the plain negative as your starting point."],
      [E("べんきょうしなければ なりません。", "Benkyou shinakereba narimasen.", "(I) must study.", "なければ なりません"),
       E("はやく おきなければ なりません。", "Hayaku okinakereba narimasen.", "(I) must get up early.", "なければ なりません"),
       E("くすりを のまなければ なりません。", "Kusuri o nomanakereba narimasen.", "(I) must take medicine.", "なければ なりません")]),
    T("Another ending", "なければ いけません",
      ["You can end with {いけません|ikemasen} instead of {なりません|narimasen}. {いかなければ いけません|ikanakereba ikemasen} means the same. {なりません|narimasen} is a bit more formal and writing-like; {いけません|ikemasen} is common in speech.",
       "Both are correct."],
      [E("いかなければ いけません。", "Ikanakereba ikemasen.", "(I) must go.", "いけません"),
       E("かえらなければ なりません。", "Kaeranakereba narimasen.", "(I) must go home.", "なりません")]),
    T("Casual speech", "なきゃ",
      ["In casual speech, {なければ|nakereba} becomes {なきゃ|nakya}. {いかなきゃ|ikanakya} means “I gotta go”. You can end it right there, or add {いけない|ikenai}.",
       "Very common among friends."],
      [E("もう いかなきゃ。", "Mou ikanakya.", "I gotta go now.", "なきゃ"),
       E("べんきょうしなきゃ いけない。", "Benkyou shinakya ikenai.", "I have to study.", "なきゃ"),
       E("かえらなきゃ。", "Kaeranakya.", "I must go home.", "なきゃ")]),
    T("With reasons", "Giving the cause",
      ["Obligation often comes with a reason: {あした テストが ある から、べんきょうしなければ なりません|ashita tesuto ga aru kara, benkyou shinakereba narimasen}. “Because there's a test tomorrow, I must study.”",
       "The {から|kara} part gives the reason, as you learned."],
      [E("あした テストが ある から、べんきょうしなければ なりません。", "Ashita tesuto ga aru kara, benkyou shinakereba narimasen.", "I have a test tomorrow, so I must study.", "から"),
       E("おそい から、かえらなければ なりません。", "Osoi kara, kaeranakereba narimasen.", "It's late, so I must go home.", "から")]),
    T("Common mistakes", "Do not forget the なければ",
      ["Do not say {たべなくて なりません|tabenakute narimasen}; the form is {なければ|nakereba}. And do not use {ません|masen}: {いきません なければ|ikimasen nakereba} is wrong. Start from the plain negative.",
       "Remember: it looks negative, but the meaning is “must”."],
      [E("たべなくて なりません。", "(wrong)", "Wrong: use なければ.", "なくて", true),
       E("いきません なければ なりません。", "(wrong)", "Wrong: use the plain negative.", "いきません", true),
       E("いかなければ なりません。", "Ikanakereba narimasen.", "Right: (I) must go.", "なければ")],
      T0("Say: “I must study.”", "べんきょうしなければ なりません。", "Benkyou shinakereba narimasen.", "I must study.", "なければ"))
  ],
  storyTitle: "A busy week",
  story: [
    L("Mika", "アレックスさん、らいしゅうは いそがしいですか。", "Arekkusu-san, raishuu wa isogashii desu ka.","Alex, are you busy next week?"),
    L("Alex", "はい、テストが ある から、べんきょうしなければ なりません。", "Hai, tesuto ga aru kara, benkyou shinakereba narimasen.", "Yes, I have a test, so I have to study."),
    L("Mika", "わたしも レポートを かかなければ なりません。", "Watashi mo repooto o kakanakereba narimasen.", "I have to write a report too."),
    L("Alex", "まいあさ はやく おきなければ いけません。", "Maiasa hayaku okinakereba ikemasen.", "I have to get up early every morning."),
    L("Mika", "たいへんですね。", "Taihen desu ne.", "That's tough."),
    L("Alex", "でも がんばらなきゃ。", "Demo ganbaranakya.", "But I gotta do my best.")
  ],
  words: [
    W("なければ なりません", "nakereba narimasen", "must, have to"),
    W("なければ いけません", "nakereba ikemasen", "must (speech)"),
    W("なきゃ", "nakya", "gotta (casual)"),
    W("らいしゅう", "raishuu", "next week"),
    W("レポート", "repooto", "report"),
    W("くすり", "kusuri", "medicine"),
    W("おそい", "osoi", "late, slow"),
    W("まいあさ", "maiasa", "every morning")
  ],
  tips: [
    "Plain negative: drop i, add kereba, then narimasen: must.",
    "Ikemasen can replace narimasen in speech.",
    "Casual: nakya."
  ],
  quiz: [
    ask("nakereba-naranai", "How do you say “I must go”?", "いかなければ なりません。", ["いかなくて なりません。", "いきません なければ。"], "ない → なければ."),
    ask("nakereba-naranai", "What is the casual form of なければ?", "なきゃ", ["なくて", "ないで"], "なきゃ."),
    ask("nakereba-naranai", "What does なければ なりません mean?", "must", ["may", "should not"], "It means must."),
    ask("nakereba-naranai", "How do you say “I must study”?", "べんきょうしなければ なりません。", ["べんきょうしなくても いい です。", "べんきょうしないで ください。"], "しなければ."),
    ask("nakereba-naranai", "Which can end the pattern instead of なりません?", "いけません", ["ください", "ましょう"], "いけません.")
  ]
});

export const nakuteMoIi = lesson({
  id: "nakute-mo-ii", number: 68, title: "～なくても いい です: Don't Have To",
  summary: "Say that something is not necessary with なくても いい です.",
  objective: "By the end you can say “you don't have to come” and ask “do I have to...?”.",
  teach: [
    T("The idea", "Plain negative → なくても",
      ["To say “you don't have to”, take the plain negative {ない|nai}, change {い|i} to {くて|kute}, add {も|mo}, then {いい です|ii desu}. {たべなくても いい です|tabenakute mo ii desu} means “you don't have to eat”.",
       "Literally: “even if you don't eat, it's fine”."],
      [E("たべなくても いい です。", "Tabenakute mo ii desu.", "You don't have to eat.", "なくても いい"),
       E("こなくても いい です。", "Konakute mo ii desu.", "You don't have to come.", "なくても いい")]),
    T("Examples", "Every verb type",
      ["{いかなくても いい です|ikanakute mo ii desu}. {かわなくても いい です|kawanakute mo ii desu}. {しなくても いい です|shinakute mo ii desu}. {みなくても いい です|minakute mo ii desu}. Always start from the plain negative.",
       "It is the opposite of {なければ なりません|nakereba narimasen}."],
      [E("いかなくても いい です。", "Ikanakute mo ii desu.", "You don't have to go.", "なくても いい"),
       E("しなくても いい です。", "Shinakute mo ii desu.", "You don't have to do it.", "なくても いい"),
       E("かわなくても いい です。", "Kawanakute mo ii desu.", "You don't have to buy it.", "なくても いい")]),
    T("Asking", "ても いい ですか",
      ["Ask {いかなくても いい ですか|ikanakute mo ii desu ka} for “do I have to go?”, or more exactly “may I not go?”. It is a polite way to check if something is required.",
       "A yes answer means it is not required: {はい、いい です|hai, ii desu}."],
      [E("あした こなくても いい ですか。", "Ashita konakute mo ii desu ka.", "May I not come tomorrow?", "なくても いい"),
       E("はい、いい ですよ。", "Hai, ii desu yo.", "Yes, that's fine.", "いい"),
       E("いいえ、こなければ なりません。", "Iie, konakereba narimasen.", "No, you must come.", "なければ")]),
    T("Four patterns together", "Allowed, forbidden, required, not required",
      ["Now you know four related patterns. {ても いい|te mo ii}, may. {ては いけません|te wa ikemasen}, must not. {なければ なりません|nakereba narimasen}, must. {なくても いい|nakute mo ii}, don't have to.",
       "Together they cover permission and obligation."],
      [E("たべても いい です。", "Tabete mo ii desu.", "You may eat.", "ても いい"),
       E("たべては いけません。", "Tabete wa ikemasen.", "You must not eat.", "ては いけません"),
       E("たべなければ なりません。", "Tabenakereba narimasen.", "You must eat.", "なければ なりません"),
       E("たべなくても いい です。", "Tabenakute mo ii desu.", "You don't have to eat.", "なくても いい")]),
    T("Casual speech", "なくても いい",
      ["Casual: {こなくても いい|konakute mo ii}, or shorter {こなくて いい|konakute ii}. Among friends, {いいよ|ii yo} is a common answer.",
       "Do not use it with someone above you without {です|desu}."],
      [E("こなくても いい。", "Konakute mo ii.", "You don't have to come.", "なくても いい"),
       E("いかなくて いい よ。", "Ikanakute ii yo.", "You don't have to go.", "なくて いい"),
       E("むりしなくても いい よ。", "Muri shinakute mo ii yo.", "You don't have to push yourself.", "なくても いい")]),
    T("Common mistakes", "Do not confuse the patterns",
      ["Do not confuse {なくても いい|nakute mo ii} with {ないで ください|nai de kudasai}. One says it is unnecessary, the other asks someone not to. And do not use {なくても|nakute mo} without {いい|ii} to mean “don't have to”.",
       "Check each ending carefully."],
      [E("たべなくて ください。", "(wrong)", "Wrong: ないで ください is please don't.", "なくて ください", true),
       E("いかなくても です。", "(wrong)", "Wrong: add いい.", "なくても です", true),
       E("いかなくても いい です。", "Ikanakute mo ii desu.", "Right: You don't have to go.", "なくても いい")],
      T0("Say: “You don't have to come.”", "こなくても いい です。", "Konakute mo ii desu.", "You don't have to come.", "なくても いい"))
  ],
  storyTitle: "Do I have to?",
  story: [
    L("Alex", "せんせい、あした がっこうへ こなければ なりませんか。", "Sensei, ashita gakkou e konakereba narimasen ka.", "Teacher, do I have to come to school tomorrow?"),
    L("Sensei", "いいえ、こなくても いい です。", "Iie, konakute mo ii desu.", "No, you don't have to come."),
    L("Alex", "しゅくだいは しなければ なりませんか。", "Shukudai wa shinakereba narimasen ka.", "Do I have to do the homework?"),
    L("Sensei", "はい、しなければ なりません。", "Hai, shinakereba narimasen.", "Yes, you must."),
    L("Alex", "レポートは かかなくても いい ですか。", "Repooto wa kakanakute mo ii desu ka.", "Don't I have to write the report?"),
    L("Sensei", "はい、かかなくても いい です。", "Hai, kakanakute mo ii desu.", "No, you don't have to write it.")
  ],
  words: [
    W("なくても いい", "nakute mo ii", "don't have to"),
    W("なければ なりません", "nakereba narimasen", "must"),
    W("ても いい", "te mo ii", "may"),
    W("ては いけません", "te wa ikemasen", "must not"),
    W("むり", "muri", "impossible, overdoing"),
    W("しゅくだい", "shukudai", "homework"),
    W("がっこう", "gakkou", "school"),
    W("せんせい", "sensei", "teacher")
  ],
  tips: [
    "Plain negative: change nai to nakute mo ii for don't have to.",
    "Four patterns: may, must not, must, don't have to.",
    "Do not confuse with nai de kudasai."
  ],
  quiz: [
    ask("nakute-mo-ii", "How do you say “You don't have to come”?", "こなくても いい です。", ["こないで ください。", "こなければ なりません。"], "なくても いい."),
    ask("nakute-mo-ii", "Which means “must”?", "なければ なりません", ["なくても いい", "ては いけません"], "なければ なりません."),
    ask("nakute-mo-ii", "Which means “must not”?", "ては いけません", ["ても いい", "なくても いい"], "ては いけません."),
    ask("nakute-mo-ii", "How do you ask “Do I have to go?” politely?", "いかなくても いい ですか。", ["いかなくて ください ですか。", "いきませんでも いい ですか。"], "いかなくても いい ですか."),
    ask("nakute-mo-ii", "Casual answer meaning “it's fine”?", "いいよ", ["だめ", "いけない"], "いいよ.")
  ]
});
