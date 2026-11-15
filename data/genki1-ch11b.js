// Genki I Grammar, chapter 10 (part 2: before, after, something): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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


export const maeNi = lesson({
  id: "mae-ni", number: 78, title: "まえに: Before",
  summary: "Say what you do before something with まえに.",
  objective: "By the end you can say “I brush my teeth before sleeping” and “I wash my hands before eating”.",
  teach: [
    T("The idea", "Dictionary form + まえに",
      ["To say “before doing something”, put the dictionary form of the verb before {まえに|mae ni}. {ねる まえに|neru mae ni} means “before sleeping”.",
       "Then say what you do. {ねる まえに、はを みがきます|neru mae ni, ha o migakimasu} means “Before sleeping, I brush my teeth”."],
      [E("ねる まえに、はを みがきます。", "Neru mae ni, ha o migakimasu.", "Before sleeping, I brush my teeth.", "ねる まえに"),
       E("でかける まえに、でんわを します。", "Dekakeru mae ni, denwa o shimasu.", "Before going out, I make a phone call.", "でかける まえに")]),
    T("Always the dictionary form", "Even for the past",
      ["The verb before {まえに|mae ni} always stays in the dictionary form, even when the main verb is in the past. The main verb at the end shows the time.",
       "{ねる まえに、ほんを よみました|neru mae ni, hon o yomimashita} means “Before sleeping, I read a book”."],
      [E("ねる まえに、ほんを よみました。", "Neru mae ni, hon o yomimashita.", "Before sleeping, I read a book.", "ねる まえに"),
       E("たべる まえに、てを あらいました。", "Taberu mae ni, te o araimashita.", "Before eating, I washed my hands.", "たべる まえに")]),
    T("With nouns", "Noun + の まえに",
      ["With a noun, add {の|no} before {まえに|mae ni}. {しょくじの まえに|shokuji no mae ni} means “before the meal”. {テストの まえに|tesuto no mae ni} means “before the test”.",
       "Same idea, a small {の|no} for the noun."],
      [E("しょくじの まえに、てを あらいます。", "Shokuji no mae ni, te o araimasu.", "Before the meal, I wash my hands.", "の まえに"),
       E("テストの まえに、べんきょうしました。", "Tesuto no mae ni, benkyou shimashita.", "Before the test, I studied.", "の まえに")]),
    T("Compare with てから", "Two ways to say it",
      ["The same two events can be said with {まえに|mae ni} or with {てから|te kara} from the earlier lesson. {ねる まえに はを みがきます|neru mae ni ha o migakimasu} and {はを みがいて から ねます|ha o migaite kara nemasu} say the same order.",
       "With {まえに|mae ni} you start from the later event. With {てから|te kara} you start from the first."],
      [E("ねる まえに、はを みがきます。", "Neru mae ni, ha o migakimasu.", "Before sleeping, I brush my teeth.", "まえに"),
       E("はを みがいて から、ねます。", "Ha o migaite kara, nemasu.", "After brushing my teeth, I sleep.", "て から")]),
    T("Common mistakes", "Do not use ます or た-form",
      ["Do not use the {ます|masu} form: {ねます まえに|nemasu mae ni} is wrong. Do not use the {た|ta}-form: {ねた まえに|neta mae ni} is wrong, because the event has not happened yet when you are describing “before”.",
       "Dictionary form, always."],
      [E("ねます まえに、はを みがきます。", "(wrong)", "Wrong: use ねる.", "ねます まえに", true),
       E("ねた まえに、はを みがきます。", "(wrong)", "Wrong: use ねる.", "ねた まえに", true),
       E("ねる まえに、はを みがきます。", "Neru mae ni, ha o migakimasu.", "Right.", "ねる まえに")],
      T0("Say: “Before eating, I wash my hands.”", "たべる まえに、てを あらいます。", "Taberu mae ni, te o araimasu.", "Before eating, I wash my hands.", "たべる まえに"))
  ],
  storyTitle: "Before bed",
  story: [
    L("Mika", "アレックスさんは ねる まえに なにを しますか。", "Arekkusu-san wa neru mae ni nani o shimasu ka.", "Alex, what do you do before sleeping?"),
    L("Alex", "はを みがいて、ほんを よみます。", "Ha o migaite, hon o yomimasu.", "I brush my teeth and read a book."),
    L("Mika", "わたしは ねる まえに、おちゃを のみます。", "Watashi wa neru mae ni, ocha o nomimasu.", "Before sleeping, I drink tea."),
    L("Alex", "ごはんを たべる まえに、てを あらいますか。", "Gohan o taberu mae ni, te o araimasu ka.", "Do you wash your hands before eating?"),
    L("Mika", "はい、あらいます。", "Hai, araimasu.", "Yes, I do."),
    L("Alex", "でかける まえに、でんわを して ください。", "Dekakeru mae ni, denwa o shite kudasai.", "Please call me before you go out.")
  ],
  words: [
    W("まえに", "mae ni", "before"),
    W("はを みがきます", "ha o migakimasu", "brush teeth"),
    W("てを あらいます", "te o araimasu", "wash hands"),
    W("ねます", "nemasu", "sleep"),
    W("でかけます", "dekakemasu", "go out"),
    W("おちゃ", "ocha", "tea"),
    W("しょくじ", "shokuji", "meal"),
    W("でんわ", "denwa", "phone call")
  ],
  tips: [
    "Dictionary form plus mae ni means before doing.",
    "The verb before mae ni stays in the dictionary form, even for the past.",
    "With a noun, add no: shokuji no mae ni."
  ],
  quiz: [
    ask("mae-ni", "How do you say “before sleeping”?", "ねる まえに", ["ねた まえに", "ねます まえに"], "Dictionary form + まえに."),
    ask("mae-ni", "Which verb form goes before まえに?", "the dictionary form", ["the た-form", "the ます form"], "Always the dictionary form."),
    ask("mae-ni", "How do you say “before the meal”?", "しょくじの まえに", ["しょくじ まえに", "しょくじを まえに"], "Noun + の まえに."),
    ask("mae-ni", "How do you say “Before eating, I wash my hands”?", "たべる まえに、てを あらいます。", ["たべた まえに、てを あらいます。", "たべます まえに、てを あらいます。"], "Use たべる."),
    ask("mae-ni", "Which is the same order as ねる まえに はを みがきます?", "はを みがいて から ねます", ["ねて から はを みがきます", "はを みがく まえに ねます"], "First brush teeth, then sleep.")
  ]
});

export const atoDe = lesson({
  id: "ato-de", number: 79, title: "あとで: After",
  summary: "Say what you do after something with あとで.",
  objective: "By the end you can say “After eating, I take a walk” and “I'll call you later”.",
  teach: [
    T("The idea", "た-form + あとで",
      ["To say “after doing something”, put the {た|ta}-form of the verb before {あとで|ato de}. {たべた あとで|tabeta ato de} means “after eating”.",
       "{たべた あとで、さんぽします|tabeta ato de, sanpo shimasu} means “After eating, I take a walk”."],
      [E("ごはんを たべた あとで、さんぽします。", "Gohan o tabeta ato de, sanpo shimasu.", "After eating, I take a walk.", "たべた あとで"),
       E("しゅくだいを した あとで、ねます。", "Shukudai o shita ato de, nemasu.", "After doing homework, I sleep.", "した あとで")]),
    T("The main verb shows the time", "Not the first verb",
      ["The verb before {あとで|ato de} is always in the {た|ta}-form, whatever the real time is. The main verb at the end tells you if it is past or future.",
       "{みた あとで、ねました|mita ato de, nemashita} is past. {おわった あとで、いきます|owatta ato de, ikimasu} is future."],
      [E("テレビを みた あとで、ねました。", "Terebi o mita ato de, nemashita.", "After watching TV, I slept.", "みた あとで"),
       E("しごとが おわった あとで、のみに いきます。", "Shigoto ga owatta ato de, nomi ni ikimasu.", "After work ends, I'll go for a drink.", "おわった あとで")]),
    T("With nouns", "Noun + の あとで",
      ["With a noun, add {の|no}: {しょくじの あとで|shokuji no ato de} means “after the meal”.",
       "It works the same way as {まえに|mae ni}."],
      [E("しょくじの あとで、コーヒーを のみます。", "Shokuji no ato de, koohii o nomimasu.", "After the meal, I drink coffee.", "の あとで"),
       E("テストの あとで、ねます。", "Tesuto no ato de, nemasu.", "After the test, I will sleep.", "の あとで")]),
    T("あとで alone", "Later",
      ["By itself, {あとで|ato de} means “later”. {あとで でんわします|ato de denwa shimasu} means “I'll call later”.",
       "It is a handy word for putting something off politely."],
      [E("あとで でんわします。", "Ato de denwa shimasu.", "I'll call you later.", "あとで"),
       E("あとで いきます。", "Ato de ikimasu.", "I'll go later.", "あとで")]),
    T("Compare with てから", "Order and feeling",
      ["{てから|te kara}, from the earlier lesson, stresses the order: do this first, then that. {あとで|ato de} simply says “after”. In many sentences you can use either.",
       "{たべて から、ねます|tabete kara, nemasu} and {たべた あとで、ねます|tabeta ato de, nemasu} both mean “I sleep after eating”."],
      [E("たべて から、ねます。", "Tabete kara, nemasu.", "I eat, and then I sleep.", "て から"),
       E("たべた あとで、ねます。", "Tabeta ato de, nemasu.", "After eating, I sleep.", "あとで")]),
    T("Common mistakes", "Do not use the dictionary form",
      ["Do not use the dictionary form before {あとで|ato de}: {たべる あとで|taberu ato de} is wrong. Do not use the {ます|masu} form: {たべます あとで|tabemasu ato de} is wrong. This is the opposite of {まえに|mae ni}.",
       "Remember: {まえに|mae ni} takes the dictionary form, and {あとで|ato de} takes the {た|ta}-form."],
      [E("たべる あとで、ねます。", "(wrong)", "Wrong: use たべた.", "たべる あとで", true),
       E("たべます あとで、ねます。", "(wrong)", "Wrong: use たべた.", "たべます あとで", true),
       E("たべた あとで、ねます。", "Tabeta ato de, nemasu.", "Right.", "たべた あとで")],
      T0("Say: “After class, let's talk.”", "じゅぎょうの あとで、はなしましょう。", "Jugyou no ato de, hanashimashou.", "After class, let's talk.", "の あとで"))
  ],
  storyTitle: "After class",
  story: [
    L("Alex", "ミカさん、じゅぎょうの あとで、なにを しますか。", "Mika-san, jugyou no ato de, nani o shimasu ka.", "Mika, what are you doing after class?"),
    L("Mika", "ひるごはんを たべた あとで、としょかんへ いきます。", "Hirugohan o tabeta ato de, toshokan e ikimasu.", "After eating lunch, I'm going to the library."),
    L("Alex", "わたしも いきます。", "Watashi mo ikimasu.", "I'll go too."),
    L("Mika", "しゅくだいを した あとで、いっしょに かえりましょう。", "Shukudai o shita ato de, issho ni kaerimashou.", "After doing our homework, let's go home together."),
    L("Alex", "はい。あとで でんわします。", "Hai. Ato de denwa shimasu.", "Yes. I'll call you later.")
  ],
  words: [
    W("あとで", "ato de", "after, later"),
    W("じゅぎょう", "jugyou", "class, lesson"),
    W("さんぽ", "sanpo", "walk, stroll"),
    W("おわります", "owarimasu", "end, finish"),
    W("しごと", "shigoto", "work"),
    W("テレビ", "terebi", "TV"),
    W("としょかん", "toshokan", "library"),
    W("かえります", "kaerimasu", "go home")
  ],
  tips: [
    "Ta-form plus ato de means after doing.",
    "The main verb shows the time, not the first verb.",
    "Mae ni takes the dictionary form; ato de takes the ta-form."
  ],
  quiz: [
    ask("ato-de", "How do you say “after eating”?", "たべた あとで", ["たべる あとで", "たべます あとで"], "た-form + あとで."),
    ask("ato-de", "What does あとで mean by itself?", "later", ["before", "never"], "あとで alone means later."),
    ask("ato-de", "How do you say “after the meal”?", "しょくじの あとで", ["しょくじ あとで", "しょくじを あとで"], "Noun + の あとで."),
    ask("ato-de", "Which verb form goes before まえに?", "the dictionary form", ["the た-form", "the て-form"], "まえに uses the dictionary form."),
    ask("ato-de", "How do you say “After homework, I sleep”?", "しゅくだいを した あとで、ねます。", ["しゅくだいを する あとで、ねます。", "しゅくだいを します あとで、ねます。"], "した + あとで.")
  ]
});

export const nanika = lesson({
  id: "nanika", number: 80, title: "なにか、どこか、だれか: Something, Somewhere, Someone",
  summary: "Say something, somewhere and someone by adding か to question words.",
  objective: "By the end you can say “Let's eat something” and “Shall we go somewhere?”.",
  teach: [
    T("The idea", "Question word + か",
      ["Add {か|ka} to a question word to make it vague. {なに|nani} becomes {なにか|nanika}, “something”. {どこ|doko} becomes {どこか|dokoka}, “somewhere”. {だれ|dare} becomes {だれか|dareka}, “someone”.",
       "You are not asking which one. You just mean there is one."],
      [E("なにか たべましょう。", "Nanika tabemashou.", "Let's eat something.", "なにか"),
       E("だれか いますか。", "Dareka imasu ka.", "Is anyone there?", "だれか")]),
    T("Yes-or-no questions", "なにか vs なにを",
      ["{なにを のみますか|nani o nomimasu ka} asks “What will you drink?”. {なにか のみますか|nanika nomimasu ka} asks “Will you drink something?”, and you answer yes or no.",
       "So the {か|ka} word turns a “what” question into a yes-or-no question."],
      [E("なにか のみますか。", "Nanika nomimasu ka.", "Will you drink something?", "なにか"),
       E("なにを のみますか。", "Nani o nomimasu ka.", "What will you drink?", "なにを")]),
    T("With particles", "Keep へ and に, drop を and が",
      ["The particles {を|o} and {が|ga} are usually dropped after these words. {なにか たべます|nanika tabemasu} sounds natural. But keep {へ|e} and {に|ni}: {どこかへ いきます|dokoka e ikimasu}, {だれかに あいます|dareka ni aimasu}.",
       "A small rule that helps a lot."],
      [E("どこかへ いきました。", "Dokoka e ikimashita.", "I went somewhere.", "どこかへ"),
       E("だれかに あいました。", "Dareka ni aimashita.", "I met someone.", "だれかに")]),
    T("The opposite", "なにも, だれも",
      ["With a negative ending, {も|mo} instead of {か|ka} means “nothing” or “nobody”. {なにも たべませんでした|nani mo tabemasen deshita} means “I ate nothing”. {だれも いません|daremo imasen} means “nobody is here”.",
       "So answer “no” to a {なにか|nanika} question with {なにも|nani mo}."],
      [E("なにも たべませんでした。", "Nani mo tabemasen deshita.", "I didn't eat anything.", "なにも"),
       E("だれも いません。", "Daremo imasen.", "Nobody is here.", "だれも")]),
    T("Inviting", "Suggestions",
      ["These words are great for invitations. {なにか のみに いきませんか|nanika nomi ni ikimasen ka} means “Shall we go and drink something?”. {どこか いきましょう|dokoka ikimashou} means “Let's go somewhere”.",
       "It leaves the choice open and friendly."],
      [E("なにか のみに いきませんか。", "Nanika nomi ni ikimasen ka.", "Shall we go drink something?", "なにか のみに"),
       E("どこか いきましょう。", "Dokoka ikimashou.", "Let's go somewhere.", "どこか")]),
    T("Common mistakes", "Do not mix か and も",
      ["Do not use {なにか|nanika} in a negative answer when you mean “nothing”. {なにか たべませんでした|nanika tabemasen deshita} is not what you mean; say {なにも たべませんでした|nani mo tabemasen deshita}.",
       "Also remember that {なにを|nani o} asks “what”, but {なにか|nanika} asks “something?”."],
      [E("なにか たべませんでした。", "(not what you mean)", "Not “I ate nothing”: use なにも.", "なにか たべませんでした", true),
       E("なにも たべませんでした。", "Nani mo tabemasen deshita.", "Right: I ate nothing.", "なにも")],
      T0("Say: “Shall we go somewhere?”", "どこかへ いきませんか。", "Dokoka e ikimasen ka.", "Shall we go somewhere?", "どこかへ"))
  ],
  storyTitle: "A free afternoon",
  story: [
    L("Mika", "アレックスさん、なにか たべませんか。", "Arekkusu-san, nanika tabemasen ka.", "Alex, shall we eat something?"),
    L("Alex", "いい ですね。どこかへ いきましょう。", "Ii desu ne. Dokoka e ikimashou.", "Sounds good. Let's go somewhere."),
    L("Mika", "だれか いますか。いっしょに いきたい です。", "Dareka imasu ka. Issho ni ikitai desu.", "Is anyone around? I'd like to go together."),
    L("Alex", "いいえ、きょうは だれも いません。", "Iie, kyou wa daremo imasen.", "No, nobody is here today."),
    L("Mika", "じゃあ、ふたりで なにか のみに いきませんか。", "Jaa, futari de nanika nomi ni ikimasen ka.", "Then shall we two go drink something?"),
    L("Alex", "はい、いきましょう。", "Hai, ikimashou.", "Yes, let's go.")
  ],
  words: [
    W("なにか", "nanika", "something"),
    W("どこか", "dokoka", "somewhere"),
    W("だれか", "dareka", "someone"),
    W("なにも", "nani mo", "nothing (with negative)"),
    W("だれも", "daremo", "nobody (with negative)"),
    W("ふたりで", "futari de", "the two of us"),
    W("いっしょに", "issho ni", "together"),
    W("きょう", "kyou", "today")
  ],
  tips: [
    "Add ka to a question word: nanika means something.",
    "Nanika makes a yes or no question; nani o asks what.",
    "Nani mo with a negative means nothing."
  ],
  quiz: [
    ask("nanika", "What does どこか mean?", "somewhere", ["nowhere", "where"], "どこ + か = somewhere."),
    ask("nanika", "Which asks a yes-or-no question?", "なにか のみますか。", ["なにを のみますか。", "なにが のみますか。"], "なにか makes it yes or no."),
    ask("nanika", "How do you say “I met someone”?", "だれかに あいました。", ["だれかを あいました。", "だれかが あいました。"], "Keep に with あう."),
    ask("nanika", "How do you say “Nobody is here”?", "だれも いません。", ["だれか いません。", "だれが いません。"], "だれも + negative."),
    ask("nanika", "How do you say “Let's go somewhere”?", "どこか いきましょう。", ["どこを いきましょう。", "どこも いきましょう。"], "どこか + ましょう.")
  ]
});
