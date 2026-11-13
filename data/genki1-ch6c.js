// Genki I Grammar, chapter 6 (part 1): te-form and requests. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const teimasu = lesson({
  id: "te-imasu", number: 48, title: "～て います: Doing Right Now",
  summary: "Say what someone is doing right now with て います, and use the same form for states and habits.",
  objective: "By the end you can say “I am eating”, “he is sleeping” and ask “what are you doing?”.",
  teach: [
    T("The idea", "て-form + います",
      ["To say that an action is in progress, put {います|imasu} after the {て|te}-form. {たべて います|tabete imasu} means “is eating”. It is the Japanese equivalent of the English “-ing”.",
       "You already know {います|imasu} as the verb for people existing. Here it works as a helper verb."],
      [E("たべて います。", "Tabete imasu.", "(I) am eating.", "て います"),
       E("ほんを よんで います。", "Hon o yonde imasu.", "(I) am reading a book.", "で います")]),
    T("Making sentences", "Subject, object, verb て います",
      ["Everything else is normal word order. {ミカさんは テレビを みて います|Mika-san wa terebi o mite imasu} means “Mika is watching TV”. The subject is marked with {は|wa}, the object with {を|o}.",
       "Use the right {て|te}-form for each verb, as you learned in the last lessons."],
      [E("ミカさんは テレビを みて います。", "Mika-san wa terebi o mite imasu.", "Mika is watching TV.", "みて います"),
       E("アレックスさんは コーヒーを のんで います。", "Arekkusu-san wa koohii o nonde imasu.", "Alex is drinking coffee.", "のんで います"),
       E("わたしは べんきょうして います。", "Watashi wa benkyou shite imasu.", "I am studying.", "して います")]),
    T("Asking", "なにを して いますか",
      ["Ask {なにを して いますか|nani o shite imasu ka}, “what are you doing?”. A common reply uses the same pattern: {ほんを よんで います|hon o yonde imasu}.",
       "{して います|shite imasu} here is the {て|te}-form of {する|suru} plus {います|imasu}."],
      [E("なにを して いますか。", "Nani o shite imasu ka.", "What are you doing?", "して います"),
       E("ひるごはんを たべて います。", "Hirugohan o tabete imasu.", "I'm eating lunch.", "たべて います"),
       E("だれが ないて いますか。", "Dare ga naite imasu ka.", "Who is crying?", "ないて います")]),
    T("States that continue", "きて います, しって います",
      ["With some verbs, {て います|te imasu} does not mean “in the middle of”, but a state that began and continues. {けっこんして います|kekkon shite imasu} means “is married”. {すんで います|sunde imasu} means “lives (in a place)”. {しって います|shitte imasu} means “knows”.",
       "Memorise these as they are, because they are used much more than the simple present."],
      [E("けっこんして います。", "Kekkon shite imasu.", "(I) am married.", "して います"),
       E("とうきょうに すんで います。", "Toukyou ni sunde imasu.", "(I) live in Tokyo.", "すんで います"),
       E("かのじょを しって います。", "Kanojo o shitte imasu.", "(I) know her.", "しって います")]),
    T("Negative", "て いません",
      ["For the negative, change {います|imasu} to {いません|imasen}. {たべて いません|tabete imasen} means “is not eating”. For {しって います|shitte imasu}, the negative is {しりません|shirimasen}, “I do not know”, not {しって いません|shitte imasen}.",
       "{しりません|shirimasen} is a special case; learn it as a set phrase."],
      [E("たべて いません。", "Tabete imasen.", "(I) am not eating.", "て いません"),
       E("べんきょうして いません。", "Benkyou shite imasen.", "(I) am not studying.", "て いません"),
       E("しりません。", "Shirimasen.", "I don't know.", "しりません")]),
    T("Common mistakes", "Do not forget the て",
      ["Do not use {ます|masu} before {います|imasu}: {たべます います|tabemasu imasu} is wrong. And do not use {あります|arimasu}: {たべて あります|tabete arimasu} means something else. The helper is always {います|imasu}.",
       "Also remember that for a place you use {に|ni}: {とうきょうに すんで います|Toukyou ni sunde imasu}."],
      [E("たべます います。", "(wrong)", "Wrong: use the て-form.", "たべます", true),
       E("たべて あります。", "(wrong)", "Wrong here: use います.", "あります", true),
       E("たべて います。", "Tabete imasu.", "Right: (I) am eating.", "て います")],
      T0("Say: “I am studying.”", "べんきょうして います。", "Benkyou shite imasu.", "I am studying.", "して います"))
  ],
  storyTitle: "A phone call",
  story: [
    L("Mika", "もしもし、アレックスさん。いま なにを して いますか。", "Moshimoshi, Arekkusu-san. Ima nani o shite imasu ka.", "Hello, Alex. What are you doing now?"),
    L("Alex", "いま うちで ほんを よんで います。", "Ima uchi de hon o yonde imasu.", "I'm reading a book at home."),
    L("Mika", "そうですか。わたしは ともだちと ごはんを たべて います。", "Sou desu ka. Watashi wa tomodachi to gohan o tabete imasu.", "I see. I'm eating with a friend."),
    L("Alex", "どこで たべて いますか。", "Doko de tabete imasu ka.", "Where are you eating?"),
    L("Mika", "えきの ちかくの レストランです。", "Eki no chikaku no resutoran desu.", "A restaurant near the station."),
    L("Alex", "いいですね。たのしんで ください。", "Ii desu ne. Tanoshinde kudasai.", "Nice. Enjoy.")
  ],
  words: [
    W("て います", "te imasu", "is doing, is in a state"),
    W("いま", "ima", "now"),
    W("すんで います", "sunde imasu", "live (in)"),
    W("けっこんして います", "kekkon shite imasu", "is married"),
    W("しって います", "shitte imasu", "know"),
    W("しりません", "shirimasen", "don't know"),
    W("もしもし", "moshimoshi", "hello (phone)"),
    W("レストラン", "resutoran", "restaurant")
  ],
  tips: [
    "Te-form plus imasu means is doing.",
    "It also describes states: sunde imasu (live), kekkon shite imasu (is married).",
    "Negative: te imasen; but I don't know is shirimasen."
  ],
  quiz: [
    ask("te-imasu", "How do you say “I am eating”?", "たべて います。", ["たべます います。", "たべる います。"], "て-form + います."),
    ask("te-imasu", "How do you ask “What are you doing?”", "なにを して いますか。", ["なにを します いますか。", "なにが して あります。"], "して いますか."),
    ask("te-imasu", "How do you say “I live in Tokyo”?", "とうきょうに すんで います。", ["とうきょうで すみます います。", "とうきょうを すんで います。"], "すむ → すんで います."),
    ask("te-imasu", "How do you say “I don't know”?", "しりません。", ["しって いません。", "しりて います。"], "Set phrase: しりません."),
    ask("te-imasu", "What helper verb follows the て-form here?", "います", ["あります", "です"], "います is the helper.")
  ]
});

export const tekara = lesson({
  id: "te-kara", number: 49, title: "～て から: After Doing",
  summary: "Say what you do after something else with て から, and put steps in order.",
  objective: "By the end you can say “after I eat, I study” and describe a routine in order.",
  teach: [
    T("The idea", "て-form + から",
      ["To say “after doing A, I do B”, put {から|kara} after the {て|te}-form of A. {たべて から、べんきょうします|tabete kara, benkyou shimasu} means “after eating, I study”.",
       "The first action is complete before the second begins."],
      [E("たべて から、べんきょうします。", "Tabete kara, benkyou shimasu.", "After eating, I study.", "て から"),
       E("シャワーを あびて から、ねます。", "Shawaa o abite kara, nemasu.", "After taking a shower, I sleep.", "て から")]),
    T("Different from から “because”", "Two meanings",
      ["You have already seen {から|kara} meaning “because” after a reason. Here it follows a {て|te}-form and means “after”. The difference is the {て|te}-form right before it.",
       "A sentence with {です|desu} or {ます|masu} plus {から|kara} means “because”. A {て|te}-form plus {から|kara} means “after”."],
      [E("たべて から、いきます。", "Tabete kara, ikimasu.", "After eating, I go.", "て から"),
       E("たべます から、いきません。", "Tabemasu kara, ikimasen.", "Because I will eat, I won't go.", "ます から")]),
    T("Routines", "First, then, then",
      ["Use it to describe a day. {あさ おきて から、コーヒーを のみます|asa okite kara, koohii o nomimasu}: after waking up, I drink coffee. You can chain more steps with the plain {て|te}-form, as in {おきて、たべて、いきます|okite, tabete, ikimasu}.",
       "The plain {て|te}-form joins actions in order; {て から|te kara} stresses “after finishing”."],
      [E("あさ おきて から、コーヒーを のみます。", "Asa okite kara, koohii o nomimasu.", "After waking up, I drink coffee.", "て から"),
       E("しごとが おわって から、ジムへ いきます。", "Shigoto ga owatte kara, jimu e ikimasu.", "After work finishes, I go to the gym.", "て から"),
       E("てを あらって から、たべます。", "Te o aratte kara, tabemasu.", "After washing my hands, I eat.", "て から")]),
    T("Asking and answering", "なにを して から",
      ["Ask {がっこうが おわって から、なにを しますか|gakkou ga owatte kara, nani o shimasu ka}, “what do you do after school?”. Answer with the same shape.",
       "The tense of the sentence is at the end, in the second verb. The first verb stays in the {て|te}-form."],
      [E("がっこうが おわって から、なにを しますか。", "Gakkou ga owatte kara, nani o shimasu ka.", "What do you do after school?", "て から"),
       E("うちへ かえって から、べんきょうします。", "Uchi e kaette kara, benkyou shimasu.", "After going home, I study.", "て から"),
       E("ともだちに あって から、かえりました。", "Tomodachi ni atte kara, kaerimashita.", "After meeting a friend, I went home.", "て から")]),
    T("Past and future", "Tense lives in the last verb",
      ["The final verb carries the tense. {たべて から、ねました|tabete kara, nemashita} is past: “after eating, I slept”. {たべて から、ねます|tabete kara, nemasu} is present or future: “after eating, I sleep”.",
       "The {て|te}-form itself never shows the tense."],
      [E("たべて から、ねました。", "Tabete kara, nemashita.", "After eating, I slept.", "ねました"),
       E("たべて から、ねます。", "Tabete kara, nemasu.", "After eating, I will sleep.", "ねます")]),
    T("Common mistakes", "Use the て-form, not ます",
      ["Do not use the {ます|masu} form before {から|kara} when you mean “after”: {たべます から|tabemasu kara} means “because I eat”. And do not change the tense of the first verb: {たべました から|tabemashita kara} means “because I ate”.",
       "For “after”, always use the {て|te}-form."],
      [E("たべます から、べんきょうします。", "(wrong)", "Wrong for after: that means “because”.", "たべます", true),
       E("たべた から、ねます。", "(wrong)", "Wrong: use たべて から.", "たべた", true),
       E("たべて から、ねます。", "Tabete kara, nemasu.", "Right: After eating, I sleep.", "て から")],
      T0("Say: “After washing my hands, I eat.”", "てを あらって から、たべます。", "Te o aratte kara, tabemasu.", "After washing my hands, I eat.", "て から"))
  ],
  storyTitle: "My morning routine",
  story: [
    L("Alex", "ミカさんの あさの ルーティンを おしえて ください。", "Mika-san no asa no ruutin o oshiete kudasai.", "Please tell me your morning routine."),
    L("Mika", "おきて から、かおを あらいます。", "Okite kara, kao o araimasu.", "After getting up, I wash my face."),
    L("Mika", "それから あさごはんを たべます。", "Sorekara asagohan o tabemasu.", "Then I eat breakfast."),
    L("Alex", "たべて から、なにを しますか。", "Tabete kara, nani o shimasu ka.", "After eating, what do you do?"),
    L("Mika", "はを みがいて から、いえを でます。", "Ha o migaite kara, ie o demasu.", "After brushing my teeth, I leave the house."),
    L("Alex", "きちんと して いますね。", "Kichinto shite imasu ne.", "You are very organised.")
  ],
  words: [
    W("て から", "te kara", "after doing"),
    W("おわります", "owarimasu", "end, finish"),
    W("あらいます", "araimasu", "wash"),
    W("みがきます", "migakimasu", "brush, polish"),
    W("でます", "demasu", "leave, exit"),
    W("あさ", "asa", "morning"),
    W("かお", "kao", "face"),
    W("それから", "sorekara", "after that")
  ],
  tips: [
    "Te-form plus kara means after doing.",
    "The last verb carries the tense.",
    "Masu plus kara means because; te plus kara means after."
  ],
  quiz: [
    ask("te-kara", "How do you say “After eating, I study”?", "たべて から、べんきょうします。", ["たべます から、べんきょうします。", "たべた から、べんきょうします。"], "て-form + から."),
    ask("te-kara", "What does たべます から mean?", "because I eat", ["after eating", "while eating"], "ます + から is because."),
    ask("te-kara", "Which verb carries the tense?", "the last verb", ["the first verb", "both"], "The last verb shows the tense."),
    ask("te-kara", "How do you say “After waking up, I wash my face”?", "おきて から、かおを あらいます。", ["おきます から、かおを あらいます。", "おきるて から、かおを あらいます。"], "おきて から."),
    ask("te-kara", "Which means “after that”?", "それから", ["だから", "でも"], "それから is after that.")
  ]
});
