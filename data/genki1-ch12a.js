// Genki I Grammar, chapter 10 (part 1: ability, at the same time, giving): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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


export const kotoDekiru = lesson({
  id: "koto-ga-dekiru", number: 81, title: "～ことが できます: I Can Do",
  summary: "Say what you can and cannot do with ことが できます.",
  objective: "By the end you can say “I can swim” and “I can't cook”.",
  teach: [
    T("The idea", "Dictionary form + ことが できます",
      ["To say what you can do, put the dictionary form of the verb before {ことが できます|koto ga dekimasu}. {およぐ ことが できます|oyogu koto ga dekimasu} means “I can swim”.",
       "{こと|koto} turns the action into a thing, and {できます|dekimasu} says it is possible."],
      [E("およぐ ことが できます。", "Oyogu koto ga dekimasu.", "I can swim.", "ことが できます"),
       E("にほんごを はなす ことが できます。", "Nihongo o hanasu koto ga dekimasu.", "I can speak Japanese.", "はなす ことが")]),
    T("Questions", "できますか",
      ["Add {か|ka} to ask. {はなす ことが できますか|hanasu koto ga dekimasu ka} means “Can you speak?”. Answer {はい、できます|hai, dekimasu}.",
       "The question and the answer use the same verb."],
      [E("えいごを はなす ことが できますか。", "Eigo o hanasu koto ga dekimasu ka.", "Can you speak English?", "ことが できますか"),
       E("はい、できます。", "Hai, dekimasu.", "Yes, I can.", "できます")]),
    T("Can't", "できません",
      ["For “can't”, use {できません|dekimasen}. {はしる ことが できません|hashiru koto ga dekimasen} means “I can't run”. A short answer is {いいえ、できません|iie, dekimasen}.",
       "It is polite and clear."],
      [E("はしる ことが できません。", "Hashiru koto ga dekimasen.", "I can't run.", "できません"),
       E("りょうりを つくる ことが できません。", "Ryouri o tsukuru koto ga dekimasen.", "I can't cook.", "ことが できません")]),
    T("Skills as nouns", "Noun + が できます",
      ["For skills and activities that are nouns, you can skip {こと|koto} and use {が できます|ga dekimasu} directly. {テニスが できます|tenisu ga dekimasu} means “I can play tennis”.",
       "{が|ga} marks the skill."],
      [E("テニスが できます。", "Tenisu ga dekimasu.", "I can play tennis.", "が できます"),
       E("ピアノが できます。", "Piano ga dekimasu.", "I can play the piano.", "が できます")]),
    T("Past", "できました",
      ["{できました|dekimashita} means “was able to”. {およぐ ことが できました|oyogu koto ga dekimashita} means “I was able to swim”.",
       "The negative past is {できませんでした|dekimasen deshita}."],
      [E("きのう およぐ ことが できました。", "Kinou oyogu koto ga dekimashita.", "Yesterday I was able to swim.", "できました"),
       E("きのう はしる ことが できませんでした。", "Kinou hashiru koto ga dekimasen deshita.", "Yesterday I couldn't run.", "できませんでした")]),
    T("Common mistakes", "Do not use ます or drop こと",
      ["Do not use the {ます|masu} form: {およぎます ことが できます|oyogimasu koto ga dekimasu} is wrong. Do not drop {こと|koto} after a verb: {およぐが できます|oyogu ga dekimasu} is wrong.",
       "Dictionary form, then {ことが|koto ga}."],
      [E("およぎます ことが できます。", "(wrong)", "Wrong: use およぐ.", "およぎます", true),
       E("およぐが できます。", "(wrong)", "Wrong: add こと.", "およぐが", true),
       E("およぐ ことが できます。", "Oyogu koto ga dekimasu.", "Right.", "ことが できます")],
      T0("Say: “I can play the piano.”", "ピアノを ひく ことが できます。", "Piano o hiku koto ga dekimasu.", "I can play the piano.", "ことが できます"))
  ],
  storyTitle: "Skills",
  story: [
    L("Mika", "アレックスさんは なにが できますか。", "Arekkusu-san wa nani ga dekimasu ka.", "Alex, what can you do?"),
    L("Alex", "およぐ ことが できます。", "Oyogu koto ga dekimasu.", "I can swim."),
    L("Mika", "ピアノを ひく ことが できますか。", "Piano o hiku koto ga dekimasu ka.", "Can you play the piano?"),
    L("Alex", "いいえ、できません。ミカさんは どう ですか。", "Iie, dekimasen. Mika-san wa dou desu ka.", "No, I can't. How about you, Mika?"),
    L("Mika", "わたしは ピアノを ひく ことが できます。", "Watashi wa piano o hiku koto ga dekimasu.", "I can play the piano."),
    L("Alex", "すごい ですね。でも りょうりは できません。", "Sugoi desu ne. Demo ryouri wa dekimasen.", "Amazing. But I can't cook."),
    L("Mika", "わたしは りょうりが できます。いっしょに つくりましょう。", "Watashi wa ryouri ga dekimasu. Issho ni tsukurimashou.", "I can cook. Let's make something together.")
  ],
  words: [
    W("ことが できます", "koto ga dekimasu", "can do"),
    W("およぐ", "oyogu", "swim"),
    W("はしる", "hashiru", "run"),
    W("ひく", "hiku", "play (piano)"),
    W("つくる", "tsukuru", "make"),
    W("りょうり", "ryouri", "cooking"),
    W("ピアノ", "piano", "piano"),
    W("テニス", "tenisu", "tennis")
  ],
  tips: [
    "Dictionary form plus koto ga dekimasu means can do.",
    "A skill noun can take ga dekimasu directly.",
    "Dekimasen means can't."
  ],
  quiz: [
    ask("koto-ga-dekiru", "How do you say “I can swim”?", "およぐ ことが できます。", ["およぎます ことが できます。", "およぐが できます。"], "Dictionary form + ことが できます."),
    ask("koto-ga-dekiru", "How do you say “I can't run”?", "はしる ことが できません。", ["はしる ことが できます ない。", "はしるを できません。"], "できません is can't."),
    ask("koto-ga-dekiru", "How do you ask “Can you speak English?”", "えいごを はなす ことが できますか。", ["えいごを はなします ことが できますか。", "えいごを はなすが できますか。"], "はなす + ことが できますか."),
    ask("koto-ga-dekiru", "Which is correct for a skill noun?", "テニスが できます。", ["テニスを できます。", "テニスに できます。"], "Noun + が できます."),
    ask("koto-ga-dekiru", "What does できました mean?", "was able to", ["will be able to", "cannot"], "It is the past of できます.")
  ]
});

export const nagara = lesson({
  id: "nagara", number: 82, title: "～ながら: While Doing",
  summary: "Say you do two things at the same time with ながら.",
  objective: "By the end you can say “I study while listening to music”.",
  teach: [
    T("The idea", "ます stem + ながら",
      ["{ながら|nagara} means “while”. Take the {ます|masu} form, remove {ます|masu}, and add {ながら|nagara}. {ききます|kikimasu} becomes {ききながら|kikinagara}, “while listening”.",
       "It joins two actions done at the same time."],
      [E("うたを ききながら、べんきょうします。", "Uta o kikinagara, benkyou shimasu.", "I study while listening to a song.", "ききながら"),
       E("テレビを みながら、ごはんを たべます。", "Terebi o minagara, gohan o tabemasu.", "I eat while watching TV.", "みながら")]),
    T("The main action", "The last verb is the main one",
      ["The verb at the end is the main action. The {ながら|nagara} verb is the side action. {あるきながら はなします|aruki nagara hanashimasu} means “I talk while walking”, and talking is the main thing.",
       "So think about which action is more important, and put it last."],
      [E("あるきながら、はなします。", "Aruki nagara, hanashimasu.", "I talk while walking.", "あるきながら"),
       E("コーヒーを のみながら、しんぶんを よみます。", "Koohii o nominagara, shinbun o yomimasu.", "I read the newspaper while drinking coffee.", "のみながら")]),
    T("Same person", "One person does both",
      ["Both actions must be done by the same person. You cannot use {ながら|nagara} when two different people do the actions.",
       "{うたいながら あるきます|utai nagara arukimasu} means “I walk while singing”."],
      [E("うたいながら、あるきます。", "Utai nagara, arukimasu.", "I walk while singing.", "うたいながら"),
       E("わらいながら、はなしました。", "Warai nagara, hanashimashita.", "I talked while laughing.", "わらいながら")]),
    T("Tense", "Only the last verb changes",
      ["The {ながら|nagara} verb never changes for tense. Only the verb at the end shows past or present.",
       "{ききながら そうじしました|kiki nagara souji shimashita} means “I cleaned while listening”."],
      [E("おんがくを ききながら、そうじしました。", "Ongaku o kikinagara, souji shimashita.", "I cleaned while listening to music.", "ききながら"),
       E("おんがくを ききながら、そうじします。", "Ongaku o kikinagara, souji shimasu.", "I clean while listening to music.", "ききながら")]),
    T("Compare with て", "Together, or one after another",
      ["The {て|te}-form joins actions one after another. {ながら|nagara} joins actions at the same time. {たべて、ねます|tabete, nemasu} means “eat, then sleep”. {たべながら、はなします|tabe nagara, hanashimasu} means “talk while eating”.",
       "Order, or at once."],
      [E("ごはんを たべて、ねます。", "Gohan o tabete, nemasu.", "I eat, then sleep.", "たべて、"),
       E("ごはんを たべながら、はなします。", "Gohan o tabenagara, hanashimasu.", "I talk while eating.", "たべながら")]),
    T("Common mistakes", "Use the stem only",
      ["Do not keep {ます|masu}: {ききますながら|kikimasu nagara} is wrong. Do not use the {て|te}-form: {きいて ながら|kiite nagara} is wrong.",
       "Stem plus {ながら|nagara}, nothing else."],
      [E("ききますながら、べんきょうします。", "(wrong)", "Wrong: use the stem.", "ききますながら", true),
       E("きいて ながら、べんきょうします。", "(wrong)", "Wrong: use the stem.", "きいて ながら", true),
       E("ききながら、べんきょうします。", "Kikinagara, benkyou shimasu.", "Right.", "ききながら")],
      T0("Say: “I study while listening to music.”", "おんがくを ききながら、べんきょうします。", "Ongaku o kikinagara, benkyou shimasu.", "I study while listening to music.", "ききながら"))
  ],
  storyTitle: "Studying",
  story: [
    L("Mika", "アレックスさんは なにを して いますか。", "Arekkusu-san wa nani o shite imasu ka.", "Alex, what are you doing?"),
    L("Alex", "おんがくを ききながら、しゅくだいを して います。", "Ongaku o kikinagara, shukudai o shite imasu.", "I'm doing homework while listening to music."),
    L("Mika", "おんがくを ききながら べんきょうする ことが できますか。", "Ongaku o kikinagara benkyou suru koto ga dekimasu ka.", "Can you study while listening to music?"),
    L("Alex", "はい、できます。ミカさんは できませんか。", "Hai, dekimasu. Mika-san wa dekimasen ka.", "Yes, I can. Can't you?"),
    L("Mika", "わたしは コーヒーを のみながら べんきょうします。", "Watashi wa koohii o nominagara benkyou shimasu.", "I study while drinking coffee."),
    L("Alex", "いい ですね。", "Ii desu ne.", "That sounds nice.")
  ],
  words: [
    W("ながら", "nagara", "while"),
    W("うた", "uta", "song"),
    W("おんがく", "ongaku", "music"),
    W("ききます", "kikimasu", "listen"),
    W("あるきます", "arukimasu", "walk"),
    W("うたいます", "utaimasu", "sing"),
    W("しんぶん", "shinbun", "newspaper"),
    W("そうじ", "souji", "cleaning")
  ],
  tips: [
    "Remove masu and add nagara to say while doing.",
    "The last verb is the main action.",
    "Nagara is for one person doing two things at once."
  ],
  quiz: [
    ask("nagara", "How do you say “while listening”?", "ききながら", ["ききますながら", "きいて ながら"], "Stem + ながら."),
    ask("nagara", "Which verb is the main action?", "the last verb", ["the first verb", "both equally"], "The last verb is the main action."),
    ask("nagara", "Which sentence means “I eat while watching TV”?", "テレビを みながら、たべます。", ["テレビを みて ながら、たべます。", "テレビを みますながら、たべます。"], "みながら."),
    ask("nagara", "Which tense does the ながら verb show?", "none, only the last verb does", ["always past", "always present"], "Only the last verb changes."),
    ask("nagara", "How is ながら different from て?", "ながら means at the same time", ["ながら means one after another", "no difference"], "て: in order. ながら: together.")
  ]
});

export const ageruMorau = lesson({
  id: "ageru-morau", number: 83, title: "あげます と もらいます: Give and Receive",
  summary: "Say who gives something and who receives it.",
  objective: "By the end you can say “I gave a flower to a friend” and “I received a book from Mika”.",
  teach: [
    T("Giving", "あげます",
      ["{あげます|agemasu} means “give”. The pattern is: giver {は|wa}, receiver {に|ni}, thing {を|o}, {あげます|agemasu}. {わたしは いもうとに ケーキを あげます|watashi wa imouto ni keeki o agemasu} means “I give my sister a cake”.",
       "The receiver is marked with {に|ni}."],
      [E("わたしは いもうとに ケーキを あげます。", "Watashi wa imouto ni keeki o agemasu.", "I give my younger sister a cake.", "に ケーキを あげます"),
       E("ミカさんは アレックスさんに ほんを あげました。", "Mika-san wa Arekkusu-san ni hon o agemashita.", "Mika gave Alex a book.", "あげました")]),
    T("Receiving", "もらいます",
      ["{もらいます|moraimasu} means “receive”. Now the receiver is the topic. The pattern is: receiver {は|wa}, giver {に|ni} or {から|kara}, thing {を|o}, {もらいます|moraimasu}.",
       "{わたしは ともだちに はなを もらいました|watashi wa tomodachi ni hana o moraimashita} means “I received a flower from a friend”."],
      [E("わたしは ともだちに はなを もらいました。", "Watashi wa tomodachi ni hana o moraimashita.", "I received a flower from a friend.", "もらいました"),
       E("アレックスさんは ミカさんから ほんを もらいました。", "Arekkusu-san wa Mika-san kara hon o moraimashita.", "Alex received a book from Mika.", "から")]),
    T("Two sides of one event", "Giver's view, receiver's view",
      ["The same event can be said both ways. {ミカさんは アレックスさんに ほんを あげました|Mika-san wa Arekkusu-san ni hon o agemashita} starts from Mika. {アレックスさんは ミカさんに ほんを もらいました|Arekkusu-san wa Mika-san ni hon o moraimashita} starts from Alex.",
       "Choose the view of the person you are talking about."],
      [E("ミカさんは アレックスさんに ほんを あげました。", "Mika-san wa Arekkusu-san ni hon o agemashita.", "Mika gave Alex a book.", "あげました"),
       E("アレックスさんは ミカさんに ほんを もらいました。", "Arekkusu-san wa Mika-san ni hon o moraimashita.", "Alex received a book from Mika.", "もらいました")]),
    T("に or から", "Who gave it",
      ["With {もらいます|moraimasu}, the giver can be marked with {に|ni} or {から|kara}. {から|kara} is also natural when the giver is a company or a group. With {あげます|agemasu}, the receiver is always {に|ni}.",
       "Both are common for people."],
      [E("ははに プレゼントを もらいました。", "Haha ni purezento o moraimashita.", "I received a present from my mother.", "もらいました"),
       E("ともだちから てがみを もらいました。", "Tomodachi kara tegami o moraimashita.", "I received a letter from a friend.", "から")]),
    T("Be careful with tone", "あげます to people above you",
      ["{あげます|agemasu} can sound as if you are doing a favour. With a teacher or a boss, it can sound a little too direct, and Japanese has a humbler verb for that, which you will meet later. With friends and family it is perfect.",
       "For now, use it for friends, family and younger people."],
      [E("いもうとに おかしを あげました。", "Imouto ni okashi o agemashita.", "I gave my younger sister some sweets.", "あげました"),
       E("ともだちに プレゼントを あげます。", "Tomodachi ni purezento o agemasu.", "I give a friend a present.", "あげます")]),
    T("Common mistakes", "Not for gifts to me",
      ["Do not use {あげます|agemasu} when someone gives something to you. {ミカさんは わたしに ほんを あげました|Mika-san wa watashi ni hon o agemashita} is wrong. You need a different verb, {くれます|kuremasu}, which is the next lesson.",
       "You can always use {もらいます|moraimasu} to say you received it."],
      [E("ミカさんは わたしに ほんを あげました。", "(wrong)", "Wrong: use くれました.", "わたしに ほんを あげました", true),
       E("わたしは ミカさんに ほんを もらいました。", "Watashi wa Mika-san ni hon o moraimashita.", "Right: I received a book from Mika.", "もらいました")],
      T0("Say: “I gave a flower to my friend.”", "ともだちに はなを あげました。", "Tomodachi ni hana o agemashita.", "I gave a flower to my friend.", "あげました"))
  ],
  storyTitle: "Birthday",
  story: [
    L("Mika", "きのうは たんじょうびでした。", "Kinou wa tanjoubi deshita.", "Yesterday was my birthday."),
    L("Alex", "おめでとう ございます。わたしは ミカさんに ほんを あげます。", "Omedetou gozaimasu. Watashi wa Mika-san ni hon o agemasu.", "Happy birthday. I'll give you a book."),
    L("Mika", "ありがとう。ははに ケーキを もらいました。", "Arigatou. Haha ni keeki o moraimashita.", "Thank you. I received a cake from my mother."),
    L("Alex", "いい ですね。", "Ii desu ne.", "That's nice."),
    L("Mika", "ともだちから てがみも もらいました。", "Tomodachi kara tegami mo moraimashita.", "I also received a letter from a friend.")
  ],
  words: [
    W("あげます", "agemasu", "give"),
    W("もらいます", "moraimasu", "receive"),
    W("プレゼント", "purezento", "present"),
    W("はな", "hana", "flower"),
    W("てがみ", "tegami", "letter"),
    W("おかし", "okashi", "sweets"),
    W("いもうと", "imouto", "younger sister"),
    W("おめでとう ございます", "omedetou gozaimasu", "congratulations")
  ],
  tips: [
    "Agemasu: giver wa, receiver ni, thing o.",
    "Moraimasu: receiver wa, giver ni or kara, thing o.",
    "Do not use agemasu when someone gives to you."
  ],
  quiz: [
    ask("ageru-morau", "How do you say “I gave my friend a flower”?", "ともだちに はなを あげました。", ["ともだちを はなに あげました。", "ともだちが はなを もらいました。"], "Receiver に, thing を, あげました."),
    ask("ageru-morau", "Which marks the receiver with あげます?", "に", ["を", "が"], "あげます takes に for the receiver."),
    ask("ageru-morau", "How do you say “I received a letter from a friend”?", "ともだちから てがみを もらいました。", ["ともだちを てがみから もらいました。", "ともだちから てがみを あげました。"], "から or に + もらいました."),
    ask("ageru-morau", "Who is the topic with もらいます?", "the receiver", ["the giver", "nobody"], "Start from the receiver."),
    ask("ageru-morau", "Which is wrong when Mika gives to me?", "ミカさんは わたしに ほんを あげました。", ["ミカさんが ほんを くれました。", "わたしは ミカさんに ほんを もらいました。"], "Use くれます or もらいます.")
  ]
});
