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

export const mashou = lesson({
  id: "mashou", number: 44, title: "～ましょう: Let's Do It",
  summary: "Invite someone to do something together, or agree to a suggestion, with ましょう.",
  objective: "By the end you can say “let's go”, “let's eat” and accept an invitation.",
  teach: [
    T("The idea", "ます becomes ましょう",
      ["To suggest doing something together, change the {ます|masu} ending of a verb to {ましょう|mashou}. {いきます|ikimasu} becomes {いきましょう|ikimashou}, “let's go”.",
       "The meaning is “let us do it”. It is warm and polite, and it works for any verb."],
      [E("いきます → いきましょう", "ikimasu → ikimashou", "go → let's go", "ましょう"),
       E("たべます → たべましょう", "tabemasu → tabemashou", "eat → let's eat", "ましょう")]),
    T("In a sentence", "Place, object, verb",
      ["The rest of the sentence is unchanged. {いっしょに えいがを みましょう|issho ni eiga o mimashou} means “let's watch a movie together”. The word {いっしょに|issho ni}, together, makes the invitation friendlier.",
       "Do not add {か|ka} unless you want to ask a question."],
      [E("いっしょに ごはんを たべましょう。", "Issho ni gohan o tabemashou.", "Let's eat together.", "ましょう"),
       E("えきまで あるきましょう。", "Eki made arukimashou.", "Let's walk to the station.", "ましょう"),
       E("コーヒーを のみましょう。", "Koohii o nomimashou.", "Let's drink coffee.", "ましょう")]),
    T("Accepting", "ええ、そうしましょう",
      ["To accept an invitation, say {はい、いきましょう|hai, ikimashou}, “yes, let's go”, or {いいですね|ii desu ne}, “sounds good”. Another common reply is {そうしましょう|sou shimashou}, “let's do that”.",
       "These replies sound natural and keep the conversation moving."],
      [E("いいですね。", "Ii desu ne.", "Sounds good.", "いい"),
       E("はい、いきましょう。", "Hai, ikimashou.", "Yes, let's go.", "ましょう"),
       E("そうしましょう。", "Sou shimashou.", "Let's do that.", "しましょう")]),
    T("Declining politely", "ちょっと...",
      ["To decline, do not say a flat “no”. Say {すみません、ちょっと...|sumimasen, chotto}, which leaves the reason unsaid, or {すみません、きょうは いそがしい です|sumimasen, kyou wa isogashii desu}, “sorry, I'm busy today”.",
       "This soft refusal is how Japanese speakers keep the atmosphere kind."],
      [E("すみません、ちょっと...", "Sumimasen, chotto...", "Sorry, it's a bit difficult...", "ちょっと"),
       E("きょうは いそがしい です。", "Kyou wa isogashii desu.", "I'm busy today.", "いそがしい")]),
    T("Compare with ませんか", "Two ways to invite",
      ["You already know {いきませんか|ikimasen ka}, “won't you go?”. {いきましょう|ikimashou} is more direct: “let's go”. Both are polite. {ませんか|masen ka} sounds a little gentler, while {ましょう|mashou} sounds more decided.",
       "Use {ませんか|masen ka} with someone you do not know well, and {ましょう|mashou} with friends."],
      [E("いきませんか。", "Ikimasen ka.", "Won't you go? (gentle)", "ませんか"),
       E("いきましょう。", "Ikimashou.", "Let's go. (direct)", "ましょう")]),
    T("Common mistakes", "Keep it to groups",
      ["Do not use {ましょう|mashou} for something only you will do: {ひとりで いきましょう|hitori de ikimashou} sounds strange, because “let's” needs at least two people. And do not use the dictionary form: {いくましょう|ikumashou} is wrong.",
       "Always start from the {ます|masu} stem: {いき|iki} plus {ましょう|mashou}."],
      [E("いくましょう。", "(wrong)", "Wrong: use the ます stem.", "いくましょう", true),
       E("ひとりで たべましょう。", "(wrong)", "Odd: let's needs another person.", "ひとりで", true),
       E("いきましょう。", "Ikimashou.", "Right: Let's go.", "ましょう")],
      T0("Say: “Let's eat together.”", "いっしょに たべましょう。", "Issho ni tabemashou.", "Let's eat together.", "ましょう"))
  ],
  storyTitle: "Lunch plans",
  story: [
    L("Mika", "おなかが すきましたね。", "Onaka ga sukimashita ne.", "I'm hungry."),
    L("Alex", "そうですね。いっしょに ひるごはんを たべましょう。", "Sou desu ne. Issho ni hirugohan o tabemashou.", "Me too. Let's have lunch together."),
    L("Mika", "いいですね。なにを たべましょうか。", "Ii desu ne. Nani o tabemashou ka.", "Sounds good. What shall we eat?"),
    L("Alex", "ラーメンは どうですか。", "Raamen wa dou desu ka.", "How about ramen?"),
    L("Mika", "はい、ラーメンを たべましょう。", "Hai, raamen o tabemashou.", "Yes, let's eat ramen."),
    L("Alex", "じゃ、いきましょう。", "Ja, ikimashou.", "Okay, let's go.")
  ],
  words: [
    W("ましょう", "mashou", "let's"),
    W("いっしょに", "issho ni", "together"),
    W("ひるごはん", "hirugohan", "lunch"),
    W("おなかが すきました", "onaka ga sukimashita", "I'm hungry"),
    W("そうしましょう", "sou shimashou", "let's do that"),
    W("いいですね", "ii desu ne", "sounds good"),
    W("あるきます", "arukimasu", "walk"),
    W("えき", "eki", "station")
  ],
  tips: [
    "Change masu to mashou to say let's.",
    "Accept with ii desu ne or sou shimashou.",
    "Decline softly with sumimasen, chotto."
  ],
  quiz: [
    ask("mashou", "How do you say “Let's go”?", "いきましょう。", ["いくましょう。", "いきません。"], "ます → ましょう."),
    ask("mashou", "Which means “Let's eat together”?", "いっしょに たべましょう。", ["いっしょに たべました。", "いっしょに たべません。"], "ましょう suggests."),
    ask("mashou", "How do you accept an invitation?", "いいですね。", ["いいえ。", "ちがいます。"], "いいですね is a friendly yes."),
    ask("mashou", "What does いっしょに mean?", "together", ["alone", "later"], "いっしょに is together."),
    ask("mashou", "Which is wrong?", "いくましょう。", ["いきましょう。", "たべましょう。"], "Use the ます stem.")
  ]
});

export const mashouka = lesson({
  id: "mashouka", number: 45, title: "～ましょうか: Shall I? Shall We?",
  summary: "Offer to do something for someone, or ask “shall we?”, with ましょうか.",
  objective: "By the end you can offer help and make a suggestion as a question.",
  teach: [
    T("The idea", "ましょう + か",
      ["Add {か|ka} to {ましょう|mashou} and you get {ましょうか|mashou ka}. It has two uses. First, you offer to do something: “shall I do it for you?”. Second, you ask someone about doing something together: “shall we?”.",
       "Context shows which one is meant."],
      [E("てつだいましょうか。", "Tetsudaimashou ka.", "Shall I help?", "ましょうか"),
       E("いきましょうか。", "Ikimashou ka.", "Shall we go?", "ましょうか")]),
    T("Offering help", "Shall I...?",
      ["When you see someone who may need help, offer with {ましょうか|mashou ka}. {にもつを もちましょうか|nimotsu o mochimashou ka} means “shall I carry your luggage?”. {まどを あけましょうか|mado o akemashou ka} means “shall I open the window?”.",
       "This is a polite, thoughtful way to offer."],
      [E("にもつを もちましょうか。", "Nimotsu o mochimashou ka.", "Shall I carry your luggage?", "ましょうか"),
       E("まどを あけましょうか。", "Mado o akemashou ka.", "Shall I open the window?", "ましょうか"),
       E("でんきを つけましょうか。", "Denki o tsukemashou ka.", "Shall I turn on the light?", "ましょうか")]),
    T("Answering an offer", "おねがいします",
      ["To accept an offer, say {おねがいします|onegai shimasu}, “please”. Or {おねがいできますか|onegai dekimasu ka}, “could you?”. To decline, say {だいじょうぶです|daijoubu desu}, “I'm fine”, or {けっこうです|kekkou desu}, “no thank you”.",
       "{おねがいします|onegai shimasu} is one of the most useful phrases in Japanese."],
      [E("おねがいします。", "Onegai shimasu.", "Yes, please.", "おねがいします"),
       E("だいじょうぶです。", "Daijoubu desu.", "I'm fine, thank you.", "だいじょうぶ"),
       E("けっこうです。", "Kekkou desu.", "No, thank you.", "けっこう")]),
    T("Asking “shall we?”", "With いっしょに",
      ["Use {いっしょに|issho ni} to make it clearly a suggestion: {いっしょに かえりましょうか|issho ni kaerimashou ka}, “shall we go home together?”. A reply could be {はい、かえりましょう|hai, kaerimashou}.",
       "This is softer than {ましょう|mashou}, because it asks for the listener's opinion."],
      [E("いっしょに かえりましょうか。", "Issho ni kaerimashou ka.", "Shall we go home together?", "ましょうか"),
       E("なにを たべましょうか。", "Nani o tabemashou ka.", "What shall we eat?", "なにを"),
       E("どこへ いきましょうか。", "Doko e ikimashou ka.", "Where shall we go?", "どこへ")]),
    T("Question words", "なに, どこ, いつ",
      ["Put a question word before the verb to ask “what shall we...?”. {なにを たべましょうか|nani o tabemashou ka}, what shall we eat? {いつ あいましょうか|itsu aimashou ka}, when shall we meet? {どこで あいましょうか|doko de aimashou ka}, where shall we meet?",
       "These questions are perfect for planning something with a friend."],
      [E("いつ あいましょうか。", "Itsu aimashou ka.", "When shall we meet?", "いつ"),
       E("どこで あいましょうか。", "Doko de aimashou ka.", "Where shall we meet?", "どこで"),
       E("なんじに あいましょうか。", "Nanji ni aimashou ka.", "What time shall we meet?", "なんじに")]),
    T("Common mistakes", "Do not use it for yourself only",
      ["Do not use {ましょうか|mashou ka} to ask permission: “may I?” is another pattern you will learn soon. And do not mix {ましょうか|mashou ka} with {ますか|masu ka}: {たべますか|tabemasu ka} asks about habit, {たべましょうか|tabemashou ka} asks about a plan.",
       "Remember the difference: {ましょうか|mashou ka} is about a plan or an offer."],
      [E("たべますか。", "Tabemasu ka.", "Do you eat? (habit)", "ますか"),
       E("たべましょうか。", "Tabemashou ka.", "Shall we eat? (plan)", "ましょうか"),
       E("たべるましょうか。", "(wrong)", "Wrong: use the ます stem.", "たべるましょうか", true)],
      T0("Say: “Shall I open the window?”", "まどを あけましょうか。", "Mado o akemashou ka.", "Shall I open the window?", "ましょうか"))
  ],
  storyTitle: "Can I help?",
  story: [
    L("Mika", "アレックスさん、にもつが おもそうですね。", "Arekkusu-san, nimotsu ga omosou desu ne.", "Alex, your luggage looks heavy."),
    L("Mika", "もちましょうか。", "Mochimashou ka.", "Shall I carry it?"),
    L("Alex", "ありがとうございます。おねがいします。", "Arigatou gozaimasu. Onegai shimasu.", "Thank you. Yes, please."),
    L("Mika", "ドアも あけましょうか。", "Doa mo akemashou ka.", "Shall I open the door too?"),
    L("Alex", "いいえ、だいじょうぶです。", "Iie, daijoubu desu.", "No, I'm fine."),
    L("Mika", "じゃ、いっしょに いきましょうか。", "Ja, issho ni ikimashou ka.", "Then shall we go together?")
  ],
  words: [
    W("ましょうか", "mashou ka", "shall I / shall we"),
    W("おねがいします", "onegai shimasu", "yes please"),
    W("だいじょうぶ", "daijoubu", "fine, okay"),
    W("けっこうです", "kekkou desu", "no thank you"),
    W("にもつ", "nimotsu", "luggage"),
    W("もちます", "mochimasu", "carry, hold"),
    W("まど", "mado", "window"),
    W("あいます", "aimasu", "meet")
  ],
  tips: [
    "Mashou ka offers help (shall I) or suggests (shall we).",
    "Accept with onegai shimasu; decline with daijoubu desu.",
    "Add a question word for what, where, when."
  ],
  quiz: [
    ask("mashouka", "How do you say “Shall I help?”", "てつだいましょうか。", ["てつだいますか。", "てつだいましょう。"], "ましょうか offers."),
    ask("mashouka", "How do you accept an offer?", "おねがいします。", ["けっこうです。", "いいえ。"], "おねがいします."),
    ask("mashouka", "How do you politely refuse?", "だいじょうぶです。", ["おねがいします。", "そうしましょう。"], "だいじょうぶです."),
    ask("mashouka", "How do you ask “What shall we eat?”", "なにを たべましょうか。", ["なにを たべますか を。", "なにが たべましょう。"], "なにを + ましょうか."),
    ask("mashouka", "Which asks about a plan?", "たべましょうか", ["たべますか", "たべました"], "ましょうか is for plans.")
  ]
});

export const temoii = lesson({
  id: "temo-ii", number: 46, title: "～ても いい です: May I?",
  summary: "Ask for permission and give permission with ても いい です.",
  objective: "By the end you can ask “may I...?” and answer yes or no politely.",
  teach: [
    T("The idea", "て-form + も いい です",
      ["To say that something is allowed, put {も|mo} and {いい です|ii desu} after the {て|te}-form. {たべても いい です|tabete mo ii desu} means “it is okay to eat”, “you may eat”.",
       "Literally it says: even if you eat, it is good."],
      [E("たべても いい です。", "Tabete mo ii desu.", "You may eat.", "ても"),
       E("みても いい です。", "Mite mo ii desu.", "You may look.", "ても")]),
    T("Asking permission", "か at the end",
      ["Add {か|ka} to ask. {ここで たべても いい ですか|koko de tabete mo ii desu ka} means “may I eat here?”. This is the standard way to ask for permission.",
       "A friendly addition is {すみません|sumimasen} first."],
      [E("ここで たべても いい ですか。", "Koko de tabete mo ii desu ka.", "May I eat here?", "ても"),
       E("しゃしんを とっても いい ですか。", "Shashin o totte mo ii desu ka.", "May I take a photo?", "とっても"),
       E("トイレを かりても いい ですか。", "Toire o karite mo ii desu ka.", "May I use the toilet?", "かりても")]),
    T("Giving permission", "はい、いいですよ",
      ["To say yes, answer {はい、いい ですよ|hai, ii desu yo} or {どうぞ|douzo}, “go ahead”. The word {よ|yo} makes it friendly and reassuring.",
       "You can also repeat the verb: {はい、たべても いい です|hai, tabete mo ii desu}."],
      [E("はい、いい ですよ。", "Hai, ii desu yo.", "Yes, that's fine.", "いい"),
       E("どうぞ。", "Douzo.", "Go ahead.", "どうぞ"),
       E("はい、とっても いい です。", "Hai, totte mo ii desu.", "Yes, you may take one.", "とっても")]),
    T("Refusing permission", "ちょっと...",
      ["To say no, you can say {すみません、ちょっと...|sumimasen, chotto}, which is soft. Or say {いいえ、いけません|iie, ikemasen}, “no, you must not”, which is strong and used for rules. The stronger form belongs to the next lesson.",
       "In everyday life the soft refusal is more common between people."],
      [E("すみません、ちょっと...", "Sumimasen, chotto...", "Sorry, I'd rather you not.", "ちょっと"),
       E("いいえ、いけません。", "Iie, ikemasen.", "No, you must not.", "いけません")]),
    T("With the plain て-form", "Form recap",
      ["The pattern always uses the {て|te}-form that you learned in the last lessons. {かいて|kaite}, {のんで|nonde}, {いって|itte}, {して|shite}. Put {も いい です|mo ii desu} after it.",
       "Practise by saying each verb you know in the pattern."],
      [E("かいても いい です。", "Kaite mo ii desu.", "You may write.", "かいても"),
       E("のんでも いい です。", "Nonde mo ii desu.", "You may drink.", "のんでも"),
       E("いっても いい です。", "Itte mo ii desu.", "You may go.", "いっても")]),
    T("Common mistakes", "Do not use ます before も",
      ["Do not say {たべますも いい です|tabemasu mo ii desu}. Use the {て|te}-form. And do not forget {も|mo}: {たべて いい です|tabete ii desu} is not the same. Without {も|mo}, it can sound like “eating is good”.",
       "Also {いい|ii} here means “permitted”, not “tasty”."],
      [E("たべますも いい です。", "(wrong)", "Wrong: use the て-form.", "たべますも", true),
       E("たべて いい です。", "(wrong)", "Wrong: add も.", "たべて", true),
       E("たべても いい です。", "Tabete mo ii desu.", "Right: You may eat.", "ても")],
      T0("Say: “May I take a photo?”", "しゃしんを とっても いい ですか。", "Shashin o totte mo ii desu ka.", "May I take a photo?", "とっても"))
  ],
  storyTitle: "At the museum",
  story: [
    L("Alex", "すみません、ここで しゃしんを とっても いい ですか。", "Sumimasen, koko de shashin o totte mo ii desu ka.", "Excuse me, may I take photos here?"),
    L("Staff", "はい、いい ですよ。", "Hai, ii desu yo.", "Yes, that's fine."),
    L("Alex", "あそこに すわっても いい ですか。", "Asoko ni suwatte mo ii desu ka.", "May I sit over there?"),
    L("Staff", "はい、どうぞ。", "Hai, douzo.", "Yes, go ahead."),
    L("Alex", "みずを のんでも いい ですか。", "Mizu o nonde mo ii desu ka.", "May I drink water?"),
    L("Staff", "すみません、ここでは ちょっと...", "Sumimasen, koko de wa chotto...", "Sorry, here it's a bit difficult...")
  ],
  words: [
    W("ても いい です", "te mo ii desu", "may, it is okay to"),
    W("どうぞ", "douzo", "go ahead"),
    W("しゃしん", "shashin", "photo"),
    W("とります", "torimasu", "take (photo)"),
    W("すわります", "suwarimasu", "sit"),
    W("かります", "karimasu", "borrow"),
    W("トイレ", "toire", "toilet"),
    W("ここでは", "koko de wa", "here (contrast)")
  ],
  tips: [
    "Te-form plus mo ii desu means you may.",
    "Add ka to ask: may I...?",
    "Answer yes with ii desu yo or douzo; refuse softly with chotto."
  ],
  quiz: [
    ask("temo-ii", "How do you say “You may eat”?", "たべても いい です。", ["たべますも いい です。", "たべて いい です"], "て-form + も いい です."),
    ask("temo-ii", "How do you ask “May I take a photo?”", "しゃしんを とっても いい ですか。", ["しゃしんを とるも いい ですか。", "しゃしんを とります いい ですか。"], "とる → とって."),
    ask("temo-ii", "Which means “Go ahead”?", "どうぞ", ["すみません", "いけません"], "どうぞ."),
    ask("temo-ii", "Which is a soft refusal?", "すみません、ちょっと...", ["どうぞ", "はい、いい ですよ"], "ちょっと... is soft."),
    ask("temo-ii", "What is the て-form of のむ in this pattern?", "のんでも いい です", ["のみても いい です", "のむても いい です"], "のむ → のんで.")
  ]
});

export const tewaIkenai = lesson({
  id: "tewa-ikenai", number: 47, title: "～ては いけません: You Must Not",
  summary: "Say that something is forbidden with ては いけません.",
  objective: "By the end you can state a rule and understand signs and warnings.",
  teach: [
    T("The idea", "て-form + は いけません",
      ["To say “you must not”, put {は|wa} and {いけません|ikemasen} after the {て|te}-form. {たべては いけません|tabete wa ikemasen} means “you must not eat”.",
       "It is the strong opposite of {ても いい です|te mo ii desu}."],
      [E("たべては いけません。", "Tabete wa ikemasen.", "You must not eat.", "ては"),
       E("はいっては いけません。", "Haitte wa ikemasen.", "You must not enter.", "ては")]),
    T("Where you see it", "Signs and rules",
      ["This pattern appears on signs, in school rules and in warnings from parents or teachers. {ここで たばこを すっては いけません|koko de tabako o suwatte wa ikemasen} means “you must not smoke here”.",
       "It is direct, so avoid it with people above you unless you are quoting a rule."],
      [E("ここで たばこを すっては いけません。", "Koko de tabako o sutte wa ikemasen.", "You must not smoke here.", "ては"),
       E("ここで あそんでは いけません。", "Koko de asonde wa ikemasen.", "You must not play here.", "んでは"),
       E("くつを はいては いけません。", "Kutsu o haite wa ikemasen.", "You must not wear shoes.", "ては")]),
    T("As an answer", "Saying no to ても いい ですか",
      ["When someone asks permission, you can answer {いいえ、いけません|iie, ikemasen}, “no, you must not”. It is a firm answer. A softer answer is {すみません、ちょっと...|sumimasen, chotto}.",
       "Compare: {たべても いい ですか|tabete mo ii desu ka}, {いいえ、いけません|iie, ikemasen}."],
      [E("たべても いい ですか。", "Tabete mo ii desu ka.", "May I eat?", "ても"),
       E("いいえ、いけません。", "Iie, ikemasen.", "No, you must not.", "いけません")]),
    T("Reasons", "から",
      ["Often a rule comes with a reason. Use {から|kara} after the reason: {ここは としょかん です から、はなしては いけません|koko wa toshokan desu kara, hanashite wa ikemasen} means “this is a library, so you must not talk”.",
       "This {から|kara} means “because” and goes at the end of the reason."],
      [E("ここは としょかん です から、はなしては いけません。", "Koko wa toshokan desu kara, hanashite wa ikemasen.", "This is a library, so you must not talk.", "から"),
       E("びょういん です から、さわいでは いけません。", "Byouin desu kara, sawaide wa ikemasen.", "It's a hospital, so you must not make noise.", "から")]),
    T("Permission and prohibition together", "Two sides of one coin",
      ["Later you will learn gentler ways to talk about obligation. For now, learn this pair: {てもいい|te mo ii}, you may. {てはいけません|te wa ikemasen}, you must not. Together they cover permission and prohibition.",
       "Always check the situation before using the strong form."],
      [E("のんでも いい です。", "Nonde mo ii desu.", "You may drink.", "のんでも"),
       E("のんでは いけません。", "Nonde wa ikemasen.", "You must not drink.", "のんでは")]),
    T("Common mistakes", "Do not use ない form here",
      ["Do not use {たべない でください|tabenai de kudasai} thinking it is the same: that pattern means “please do not eat” and is the polite way of asking, which you will learn later. And do not forget {は|wa}: {たべて いけません|tabete ikemasen} is wrong.",
       "Keep the order: {て|te}-form, {は|wa}, {いけません|ikemasen}."],
      [E("たべて いけません。", "(wrong)", "Wrong: add は.", "たべて", true),
       E("たべますは いけません。", "(wrong)", "Wrong: use the て-form.", "たべますは", true),
       E("たべては いけません。", "Tabete wa ikemasen.", "Right: You must not eat.", "ては")],
      T0("Say: “You must not enter.”", "はいっては いけません。", "Haitte wa ikemasen.", "You must not enter.", "ては"))
  ],
  storyTitle: "School rules",
  story: [
    L("Sensei", "みなさん、きょうしつで たべては いけません。", "Minasan, kyoushitsu de tabete wa ikemasen.", "Everyone, you must not eat in the classroom."),
    L("Alex", "みずを のんでも いい ですか。", "Mizu o nonde mo ii desu ka.", "May I drink water?"),
    L("Sensei", "はい、みずは いい ですよ。", "Hai, mizu wa ii desu yo.", "Yes, water is fine."),
    L("Alex", "スマホを つかっても いい ですか。", "Sumaho o tsukatte mo ii desu ka.", "May I use my phone?"),
    L("Sensei", "いいえ、つかっては いけません。", "Iie, tsukatte wa ikemasen.", "No, you must not use it."),
    L("Alex", "わかりました。", "Wakarimashita.", "Understood.")
  ],
  words: [
    W("ては いけません", "te wa ikemasen", "must not"),
    W("から", "kara", "because, so"),
    W("たばこ", "tabako", "cigarettes"),
    W("すいます", "suimasu", "smoke"),
    W("はいります", "hairimasu", "enter"),
    W("さわぎます", "sawagimasu", "make noise"),
    W("つかいます", "tsukaimasu", "use"),
    W("スマホ", "sumaho", "smartphone")
  ],
  tips: [
    "Te-form plus wa ikemasen means you must not.",
    "It is strong: use it for rules, not casual refusals.",
    "Kara after a reason means because."
  ],
  quiz: [
    ask("tewa-ikenai", "How do you say “You must not eat”?", "たべては いけません。", ["たべても いけません。", "たべます いけません。"], "て-form + は いけません."),
    ask("tewa-ikenai", "Which pattern gives permission?", "ても いい です", ["ては いけません", "から です"], "ても いい です."),
    ask("tewa-ikenai", "What does から mean after a reason?", "because", ["but", "also"], "から is because."),
    ask("tewa-ikenai", "How do you say “You must not enter”?", "はいっては いけません。", ["はいりては いけません。", "はいって いけません。"], "はいる → はいって."),
    ask("tewa-ikenai", "Which is wrong?", "たべて いけません。", ["たべては いけません。", "のんでは いけません。"], "Add は.")
  ]
});
