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

export const teIchidan = lesson({
  id: "te-form-basic", number: 41, title: "て-Form: Ichidan and Irregular Verbs",
  summary: "Learn what the て-form is and how to make it for ichidan verbs, する and くる.",
  objective: "By the end you can make the て-form of every ichidan verb and the two irregular verbs.",
  teach: [
    T("The idea", "A form that connects and requests",
      ["The {て|te}-form is a verb form that works like a connector. On its own it does not tell the time or the politeness. It appears inside many patterns: asking someone to do something, giving permission, describing what you are doing right now, and joining actions together.",
       "That is why this form is so important: dozens of grammar points are built on it."],
      [E("たべます → たべて", "tabemasu → tabete", "eat → eating, and", "て"),
       E("します → して", "shimasu → shite", "do → doing, and", "て")]),
    T("Ichidan verbs", "Drop る, add て",
      ["For an ichidan verb, the rule is the simplest of all: drop the final {る|ru} of the dictionary form and add {て|te}. {たべる|taberu} becomes {たべて|tabete}. {みる|miru} becomes {みて|mite}. {おきる|okiru} becomes {おきて|okite}.",
       "Remember how to spot an ichidan verb: it ends in {える|eru} or {いる|iru}, like {たべる|taberu} or {みる|miru}."],
      [E("たべる → たべて", "taberu → tabete", "eat", "て"),
       E("みる → みて", "miru → mite", "see, watch", "て"),
       E("おきる → おきて", "okiru → okite", "wake up", "て"),
       E("ねる → ねて", "neru → nete", "sleep", "て")]),
    T("More ichidan", "Practice the rule",
      ["{あける|akeru}, open, becomes {あけて|akete}. {しめる|shimeru}, close, becomes {しめて|shimete}. {かける|kakeru}, hang or make a call, becomes {かけて|kakete}. {います|imasu}, from {いる|iru}, becomes {いて|ite}.",
       "The rule never changes for this group."],
      [E("あける → あけて", "akeru → akete", "open", "て"),
       E("しめる → しめて", "shimeru → shimete", "close", "て"),
       E("いる → いて", "iru → ite", "be (alive)", "て")]),
    T("Irregular verbs", "する and くる",
      ["There are only two irregular verbs and each has its own form. {する|suru} becomes {して|shite}. {くる|kuru} becomes {きて|kite}.",
       "Memorise these two; they are used constantly. {べんきょうする|benkyou suru} becomes {べんきょうして|benkyou shite}."],
      [E("する → して", "suru → shite", "do", "して"),
       E("くる → きて", "kuru → kite", "come", "きて"),
       E("べんきょうする → べんきょうして", "benkyou suru → benkyou shite", "study", "して")]),
    T("Ending with て", "Same ending every time",
      ["Whatever the verb, the form ends in {て|te} or {で|de}. For this group it is always {て|te}. That sound is the hallmark of this form.",
       "In the next lesson you will meet the godan verbs, where the ending can also be {で|de}."],
      [E("みて", "mite", "watch (te-form)", "て"),
       E("たべて", "tabete", "eat (te-form)", "て"),
       E("きて", "kite", "come (te-form)", "て")]),
    T("Common mistakes", "Do not drop too much",
      ["Do not forget to drop {る|ru}: {たべるて|taberute} is wrong. And do not mix up the two irregular verbs: {する|suru} is {して|shite}, {くる|kuru} is {きて|kite}.",
       "Do not use the {ます|masu} stem form by mistake: {たべます て|tabemasu te} is wrong."],
      [E("たべるて", "(wrong)", "Wrong: drop る first.", "るて", true),
       E("くる → くて", "(wrong)", "Wrong: くる becomes きて.", "くて", true),
       E("たべる → たべて", "taberu → tabete", "Right: eat → tabete", "て")],
      T0("Make the て-form of みる (see).", "みて", "mite", "mite", "て"))
  ],
  storyTitle: "A busy morning",
  story: [
    L("Mika", "アレックスさん、きのうは なんじに おきましたか。", "Arekkusu-san, kinou wa nanji ni okimashita ka.", "Alex, what time did you get up yesterday?"),
    L("Alex", "ろくじに おきて、あさごはんを たべました。", "Rokuji ni okite, asagohan o tabemashita.", "I got up at six and ate breakfast."),
    L("Mika", "それから なにを しましたか。", "Sorekara nani o shimashita ka.", "Then what did you do?"),
    L("Alex", "テレビを みて、べんきょうして、がっこうへ いきました。", "Terebi o mite, benkyou shite, gakkou e ikimashita.", "I watched TV, studied, and went to school."),
    L("Mika", "いそがしい あさ ですね。", "Isogashii asa desu ne.", "That is a busy morning."),
    L("Alex", "はい、とても いそがしかった です。", "Hai, totemo isogashikatta desu.", "Yes, it was very busy.")
  ],
  words: [
    W("たべて", "tabete", "eat (て-form)"),
    W("みて", "mite", "see (て-form)"),
    W("おきて", "okite", "wake up (て-form)"),
    W("ねて", "nete", "sleep (て-form)"),
    W("して", "shite", "do (て-form)"),
    W("きて", "kite", "come (て-form)"),
    W("あさごはん", "asagohan", "breakfast"),
    W("いそがしい", "isogashii", "busy")
  ],
  tips: [
    "Ichidan verbs: drop ru and add te.",
    "Suru becomes shite; kuru becomes kite.",
    "The te-form is the base for many later patterns."
  ],
  quiz: [
    ask("te-form-basic", "What is the て-form of たべる?", "たべて", ["たべるて", "たべって"], "Drop る, add て."),
    ask("te-form-basic", "What is the て-form of する?", "して", ["すて", "しって"], "する becomes して."),
    ask("te-form-basic", "What is the て-form of くる?", "きて", ["くて", "こて"], "くる becomes きて."),
    ask("te-form-basic", "What is the て-form of おきる?", "おきて", ["おきるて", "おいて"], "Drop る, add て."),
    ask("te-form-basic", "Which ending do ichidan verbs always take?", "て", ["で", "って"], "て only.")
  ]
});

export const teGodan = lesson({
  id: "te-form-godan", number: 42, title: "て-Form: Godan Verbs",
  summary: "Learn the five endings that decide how a godan verb makes its て-form.",
  objective: "By the end you can make the て-form of any godan verb from its dictionary form.",
  teach: [
    T("The idea", "The ending decides",
      ["Godan verbs are the other big group of verbs. To make the {て|te}-form of a godan verb, you look at the last sound of the dictionary form, and that sound decides the ending. There are four patterns. Learn them by heart, because they are used all the time.",
       "A quick tip: sing the pattern as a rhyme and repeat it until it feels automatic."],
      [E("かう → かって", "kau → katte", "buy", "って"),
       E("のむ → のんで", "nomu → nonde", "drink", "んで"),
       E("かく → かいて", "kaku → kaite", "write", "いて"),
       E("はなす → はなして", "hanasu → hanashite", "speak", "して")]),
    T("Pattern 1: う, つ, る", "→ って",
      ["If the verb ends in {う|u}, {つ|tsu} or {る|ru}, replace that ending with {って|tte}. {かう|kau}, buy, becomes {かって|katte}. {まつ|matsu}, wait, becomes {まって|matte}. {のる|noru}, ride, becomes {のって|notte}.",
       "The little {っ|tsu} makes a short pause before the {て|te}."],
      [E("かう → かって", "kau → katte", "buy", "って"),
       E("まつ → まって", "matsu → matte", "wait", "って"),
       E("のる → のって", "noru → notte", "ride", "って"),
       E("かえる → かえって", "kaeru → kaette", "return", "って")]),
    T("Pattern 2: む, ぶ, ぬ", "→ んで",
      ["If the verb ends in {む|mu}, {ぶ|bu} or {ぬ|nu}, replace it with {んで|nde}. {のむ|nomu}, drink, becomes {のんで|nonde}. {あそぶ|asobu}, play, becomes {あそんで|asonde}. {しぬ|shinu}, die, becomes {しんで|shinde}.",
       "Notice that this time the ending is {で|de}, not {て|te}."],
      [E("のむ → のんで", "nomu → nonde", "drink", "んで"),
       E("あそぶ → あそんで", "asobu → asonde", "play", "んで"),
       E("よむ → よんで", "yomu → yonde", "read", "んで"),
       E("よぶ → よんで", "yobu → yonde", "call", "んで")]),
    T("Pattern 3: く and ぐ", "く → いて, ぐ → いで",
      ["If the verb ends in {く|ku}, change it to {いて|ite}. {かく|kaku}, write, becomes {かいて|kaite}. {きく|kiku}, listen, becomes {きいて|kiite}.",
       "If it ends in {ぐ|gu}, change it to {いで|ide}. {およぐ|oyogu}, swim, becomes {およいで|oyoide}."],
      [E("かく → かいて", "kaku → kaite", "write", "いて"),
       E("きく → きいて", "kiku → kiite", "listen", "いて"),
       E("およぐ → およいで", "oyogu → oyoide", "swim", "いで"),
       E("いそぐ → いそいで", "isogu → isoide", "hurry", "いで")]),
    T("The exception: いく", "いく → いって",
      ["The verb {いく|iku}, go, is an exception. It should be {いいて|iite}, but it is {いって|itte}. Memorise this one because {いく|iku} is extremely common.",
       "No other verb breaks the rule for {く|ku}."],
      [E("いく → いって", "iku → itte", "go", "いって"),
       E("いく → いいて", "(wrong)", "Wrong: いく is an exception.", "いいて", true)]),
    T("Pattern 4: す", "す → して",
      ["If the verb ends in {す|su}, change it to {して|shite}. {はなす|hanasu}, speak, becomes {はなして|hanashite}. {かす|kasu}, lend, becomes {かして|kashite}. {だす|dasu}, take out, becomes {だして|dashite}.",
       "This pattern is just like {する|suru} becoming {して|shite}."],
      [E("はなす → はなして", "hanasu → hanashite", "speak", "して"),
       E("かす → かして", "kasu → kashite", "lend", "して"),
       E("だす → だして", "dasu → dashite", "take out", "して")]),
    T("Common mistakes", "Do not confuse the groups",
      ["Do not treat a godan verb like an ichidan verb. {のむ|nomu} is {のんで|nonde}, not {のめて|nomete}. Some verbs ending in {る|ru} are godan, like {かえる|kaeru}, return, and {はいる|hairu}, enter. They become {かえって|kaette} and {はいって|haitte}.",
       "If the form ends in {る|ru} and you are not sure, check the vowel before it and learn the exceptions as you meet them."],
      [E("のむ → のめて", "(wrong)", "Wrong: む becomes んで.", "のめて", true),
       E("かえる → かえて", "(wrong)", "Wrong: かえる is godan, so かえって.", "かえて", true),
       E("のむ → のんで", "nomu → nonde", "Right: drink → nonde", "んで")],
      T0("Make the て-form of かく (write).", "かいて", "kaite", "kaite", "いて"))
  ],
  storyTitle: "Weekend plans",
  story: [
    L("Mika", "きのうの ばん、なにを しましたか。", "Kinou no ban, nani o shimashita ka.", "What did you do last night?"),
    L("Alex", "ほんを よんで、てがみを かいて、ねました。", "Hon o yonde, tegami o kaite, nemashita.", "I read a book, wrote a letter, and slept."),
    L("Mika", "しゅうまつは どうしますか。", "Shuumatsu wa dou shimasu ka.", "What will you do at the weekend?"),
    L("Alex", "ともだちと あそんで、ごはんを たべます。", "Tomodachi to asonde, gohan o tabemasu.", "I will play with friends and eat."),
    L("Mika", "わたしは うみで およいで、はなして、かえります。", "Watashi wa umi de oyoide, hanashite, kaerimasu.", "I will swim at the beach, talk, and go home."),
    L("Alex", "たのしそうですね。", "Tanoshisou desu ne.", "That sounds fun.")
  ],
  words: [
    W("かって", "katte", "buy (て-form)"),
    W("のんで", "nonde", "drink (て-form)"),
    W("かいて", "kaite", "write (て-form)"),
    W("はなして", "hanashite", "speak (て-form)"),
    W("いって", "itte", "go (て-form)"),
    W("およいで", "oyoide", "swim (て-form)"),
    W("あそんで", "asonde", "play (て-form)"),
    W("てがみ", "tegami", "letter")
  ],
  tips: [
    "u, tsu, ru become tte. mu, bu, nu become nde.",
    "ku becomes ite, gu becomes ide, su becomes shite.",
    "Iku is the exception: itte, not iite."
  ],
  quiz: [
    ask("te-form-godan", "What is the て-form of のむ?", "のんで", ["のって", "のいて"], "む becomes んで."),
    ask("te-form-godan", "What is the て-form of かく?", "かいて", ["かって", "かんで"], "く becomes いて."),
    ask("te-form-godan", "What is the て-form of いく?", "いって", ["いいて", "いんで"], "いく is an exception."),
    ask("te-form-godan", "What is the て-form of はなす?", "はなして", ["はなって", "はないて"], "す becomes して."),
    ask("te-form-godan", "What is the て-form of かう?", "かって", ["かんで", "かいて"], "う becomes って.")
  ]
});

export const teKudasai = lesson({
  id: "te-kudasai", number: 43, title: "～て ください: Asking Politely",
  summary: "Ask someone to do something with て ください.",
  objective: "By the end you can make polite requests and know when to add ませんか instead.",
  teach: [
    T("The idea", "て-form + ください",
      ["{ください|kudasai} means “please give me”. When you add it after the {て|te}-form of a verb, it becomes a polite request: “please do it”. {みて ください|mite kudasai} means “please look”.",
       "This is the most common way to ask someone to do something in polite Japanese."],
      [E("みて ください。", "Mite kudasai.", "Please look.", "ください"),
       E("たべて ください。", "Tabete kudasai.", "Please eat.", "ください")]),
    T("With objects", "Object を verb て ください",
      ["Put the object before the verb with {を|o}. {ほんを よんで ください|hon o yonde kudasai} means “please read the book”.",
       "Everything else follows the normal word order you already know."],
      [E("ほんを よんで ください。", "Hon o yonde kudasai.", "Please read the book.", "よんで"),
       E("なまえを かいて ください。", "Namae o kaite kudasai.", "Please write your name.", "かいて"),
       E("ドアを あけて ください。", "Doa o akete kudasai.", "Please open the door.", "あけて")]),
    T("Useful requests", "Phrases you will use daily",
      ["{ちょっと まって ください|chotto matte kudasai}, please wait a moment. {ゆっくり はなして ください|yukkuri hanashite kudasai}, please speak slowly. {もういちど いって ください|mou ichido itte kudasai}, please say it once more.",
       "These three are especially handy when you are learning Japanese."],
      [E("ちょっと まって ください。", "Chotto matte kudasai.", "Please wait a moment.", "まって"),
       E("ゆっくり はなして ください。", "Yukkuri hanashite kudasai.", "Please speak slowly.", "はなして"),
       E("もういちど いって ください。", "Mou ichido itte kudasai.", "Please say it once more.", "いって")]),
    T("Ask for a thing", "Noun を ください",
      ["When you want something, not an action, use {を ください|o kudasai} directly after the noun. {みずを ください|mizu o kudasai} means “please give me water”. This does not use the {て|te}-form.",
       "It is the form used in shops and restaurants."],
      [E("みずを ください。", "Mizu o kudasai.", "Please give me water.", "ください"),
       E("これを ください。", "Kore o kudasai.", "I'll take this, please.", "ください")]),
    T("Softer requests", "ませんか",
      ["{て ください|te kudasai} is polite but can sound like an instruction. For a softer, more careful request, you can use a different pattern later, such as {てくれませんか|te kuremasen ka}. For now, remember that adding {ちょっと|chotto} or {すみません|sumimasen} before the request makes it friendlier.",
       "{すみません、ちょっと まって ください|sumimasen, chotto matte kudasai}."],
      [E("すみません、まって ください。", "Sumimasen, matte kudasai.", "Excuse me, please wait.", "すみません"),
       E("すみません、おしえて ください。", "Sumimasen, oshiete kudasai.", "Excuse me, please tell me.", "おしえて")]),
    T("Common mistakes", "Use the て-form, not ます",
      ["Do not use the {ます|masu} form before {ください|kudasai}: {みます ください|mimasu kudasai} is wrong. And do not forget the object marker {を|o}.",
       "Also remember that {ください|kudasai} is for asking others, not for yourself."],
      [E("みます ください。", "(wrong)", "Wrong: use the て-form.", "みます", true),
       E("ほん よんで ください。", "(wrong)", "Wrong: add を.", "ほん", true),
       E("みて ください。", "Mite kudasai.", "Right: Please look.", "みて")],
      T0("Say: “Please wait a moment.”", "ちょっと まって ください。", "Chotto matte kudasai.", "Please wait a moment.", "まって"))
  ],
  storyTitle: "In class",
  story: [
    L("Sensei", "みなさん、ほんを あけて ください。", "Minasan, hon o akete kudasai.", "Everyone, please open your books."),
    L("Alex", "せんせい、もういちど いって ください。", "Sensei, mou ichido itte kudasai.", "Teacher, please say it once more."),
    L("Sensei", "はい。さんページを みて ください。", "Hai. San-peeji o mite kudasai.", "Yes. Please look at page three."),
    L("Alex", "ゆっくり はなして ください。", "Yukkuri hanashite kudasai.", "Please speak slowly."),
    L("Sensei", "わかりましたか。", "Wakarimashita ka.", "Do you understand?"),
    L("Alex", "はい、わかりました。ありがとうございます。", "Hai, wakarimashita. Arigatou gozaimasu.", "Yes, I understand. Thank you.")
  ],
  words: [
    W("ください", "kudasai", "please (give)"),
    W("て ください", "te kudasai", "please do"),
    W("ちょっと", "chotto", "a little, a moment"),
    W("ゆっくり", "yukkuri", "slowly"),
    W("もういちど", "mou ichido", "once more"),
    W("おしえます", "oshiemasu", "teach, tell"),
    W("すみません", "sumimasen", "excuse me"),
    W("わかりました", "wakarimashita", "I understand")
  ],
  tips: [
    "Verb te-form plus kudasai means please do it.",
    "A thing plus o kudasai means please give me the thing.",
    "Add sumimasen or chotto to sound friendlier."
  ],
  quiz: [
    ask("te-kudasai", "How do you say “Please look”?", "みて ください。", ["みます ください。", "みる ください。"], "て-form + ください."),
    ask("te-kudasai", "How do you say “Please wait a moment”?", "ちょっと まって ください。", ["ちょっと まち ください。", "ちょっと まつて ください。"], "まつ → まって."),
    ask("te-kudasai", "How do you ask for water?", "みずを ください。", ["みずを ください て。", "みず ください ます。"], "Noun を ください."),
    ask("te-kudasai", "What does ゆっくり mean?", "slowly", ["quickly", "loudly"], "ゆっくり is slowly."),
    ask("te-kudasai", "Which is wrong?", "みます ください。", ["みて ください。", "たべて ください。"], "Use the て-form.")
  ]
});
