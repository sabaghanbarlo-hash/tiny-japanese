// Genki I Grammar, chapter 3 (part 1): verb groups and the polite ます form. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const ichidan = lesson({
  id: "verb-ichidan", number: 10, title: "Verbs, Part 1: Ichidan (る) Verbs",
  summary: "Meet Japanese verbs and the first verb group, called ichidan or る-verbs.",
  objective: "By the end you can recognise an ichidan verb and say which sound comes before る.",
  teach: [
    T("What a Japanese verb looks like", "Dictionary form ends in a u-sound",
      ["In English a verb is “eat”, “see”, “sleep”. In Japanese the dictionary form of every verb ends in a u-sound: {く|ku}, {む|mu}, {す|su}, {る|ru} and so on. That is how you find a verb in the dictionary.",
       "Japanese verbs fall into three groups. In this lesson you meet the first group, the ichidan verbs."],
      [E("たべる", "taberu", "to eat", "る"),
       E("みる", "miru", "to see, to watch", "る"),
       E("ねる", "neru", "to sleep", "る")]),
    T("The name: ichidan", "いちだん = “one step”",
      ["{いちだん|ichidan} means “one step”. It is called that because, when the verb changes its ending, you only drop one sound and add something new. The group is also called {る|ru}-verbs, because every ichidan verb ends in {る|ru}.",
       "Do not worry about the changes yet. First, learn to recognise the group."],
      [E("たべる", "taberu", "to eat", "る"),
       E("みる", "miru", "to see, to watch", "る"),
       E("おきる", "okiru", "to wake up, to get up", "る"),
       E("ねる", "neru", "to sleep", "る")]),
    T("The rule", "る after an i-sound or an e-sound",
      ["A verb is ichidan when it ends in {る|ru} and the sound just before {る|ru} is an i-sound or an e-sound. Look at the syllable before the last one. In {たべる|taberu}, it is {べ|be}, an e-sound. In {みる|miru}, it is {み|mi}, an i-sound.",
       "So {る|ru} after {い|i} or {え|e} sounds is the sign of an ichidan verb."],
      [E("たべる", "ta-be-ru: be = e-sound", "to eat", "べ"),
       E("おきる", "o-ki-ru: ki = i-sound", "to wake up", "き"),
       E("ねる", "ne-ru: ne = e-sound", "to sleep", "ね"),
       E("みる", "mi-ru: mi = i-sound", "to see", "み")]),
    T("More ichidan verbs", "Learn them as a small set",
      ["Start with a few very common ichidan verbs: {たべる|taberu}, eat. {みる|miru}, see or watch. {おきる|okiru}, wake up. {ねる|neru}, sleep. {でる|deru}, go out or leave.",
       "You will use these in the polite form in the next lesson."],
      [E("でる", "deru", "to go out, to leave", "る"),
       E("おきる", "okiru", "to wake up", "る"),
       E("ねる", "neru", "to sleep", "る")]),
    T("Not every る verb is ichidan", "Some look ichidan, but are not",
      ["A few verbs end in {る|ru} with an i-sound or an e-sound before it, but they belong to the other group. The ones you must learn first are {かえる|kaeru}, to return, {はいる|hairu}, to enter, and {しる|shiru}, to know.",
       "They are godan verbs in disguise. You will meet that group in the next lesson. For now, remember these three as exceptions."],
      [E("かえる", "kaeru", "to return (exception: godan)", "る"),
       E("はいる", "hairu", "to enter (exception: godan)", "る"),
       E("しる", "shiru", "to know (exception: godan)", "る")]),
    T("Dictionary form is plain", "Casual, and the base for other forms",
      ["The dictionary form is the plain, casual form of the verb. With friends you can say {ごはんを たべる|gohan o taberu}, “I eat”. You will study casual speech later. The polite {ます|masu} form, the one you use with teachers and strangers, is made from this dictionary form.",
       "That is why recognising the group first is so useful."],
      [E("ごはんを たべる。", "Gohan o taberu.", "(I) eat a meal. (casual)", "たべる"),
       E("テレビを みる。", "Terebi o miru.", "(I) watch TV. (casual)", "みる")]),
    T("Common mistakes", "Check the sound before る",
      ["The most common mistake is to think every verb ending in {る|ru} is ichidan. Always check the sound before {る|ru}. An a-sound, u-sound or o-sound means it is not ichidan, as in {のる|noru}, to ride, and {わかる|wakaru}, to understand.",
       "And remember the exceptions: {かえる|kaeru}, {はいる|hairu} and {しる|shiru}."],
      [E("のる", "noru", "to ride: o + る, so not ichidan", "の"),
       E("わかる", "wakaru", "to understand: ka + る, so not ichidan", "か"),
       E("かえる", "kaeru", "to return: looks ichidan, but is godan", "え")])
  ],
  storyTitle: "Which group is it?",
  story: [
    L("Alex", "たべる は いちだんどうし ですか。", "Taberu wa ichidan doushi desu ka.", "Is taberu an ichidan verb?"),
    L("Mika", "はい、そうです。「べ」の あとに「る」です。", "Hai, sou desu. “Be” no ato ni “ru” desu.", "Yes, it is. It's “ru” after “be”."),
    L("Alex", "みる も いちだんどうし ですか。", "Miru mo ichidan doushi desu ka.", "Is miru an ichidan verb too?"),
    L("Mika", "はい。「み」の あとに「る」です。", "Hai. “Mi” no ato ni “ru” desu.", "Yes. It's “ru” after “mi”."),
    L("Alex", "かえる は？", "Kaeru wa?", "What about kaeru?"),
    L("Mika", "かえる は れいがい です。ごだんどうし です。", "Kaeru wa reigai desu. Godan doushi desu.", "Kaeru is an exception. It's a godan verb."),
    L("Alex", "えっ、そうですか。むずかしい ですね。", "E, sou desu ka. Muzukashii desu ne.", "Oh, is that so? That's difficult.")
  ],
  words: [
    W("たべる", "taberu", "to eat"),
    W("みる", "miru", "to see, to watch"),
    W("おきる", "okiru", "to wake up"),
    W("ねる", "neru", "to sleep"),
    W("でる", "deru", "to go out, to leave"),
    W("どうし", "doushi", "verb"),
    W("いちだんどうし", "ichidan doushi", "ichidan verb"),
    W("れいがい", "reigai", "exception"),
    W("むずかしい", "muzukashii", "difficult")
  ],
  tips: [
    "Ichidan verbs end in る, with an i-sound or an e-sound before it.",
    "かえる, はいる and しる look ichidan but are godan. Learn them as exceptions.",
    "The dictionary form is plain and casual; the polite ます form comes from it."
  ],
  quiz: [
    ask("verb-ichidan", "Which verb is ichidan?", "たべる", ["のる", "わかる"], "べ is an e-sound before る."),
    ask("verb-ichidan", "What does ichidan mean?", "one step", ["five steps", "two steps"], "いち means one, だん means step."),
    ask("verb-ichidan", "Which is an exception (godan)?", "かえる", ["みる", "ねる"], "かえる looks ichidan but is godan."),
    ask("verb-ichidan", "Which sound comes before る in みる?", "an i-sound", ["an a-sound", "an o-sound"], "み is an i-sound."),
    ask("verb-ichidan", "What does おきる mean?", "to wake up", ["to ride", "to return"], "おきる is “to wake up”.")
  ]
});

export const godan = lesson({
  id: "verb-godan", number: 11, title: "Verbs, Part 2: Godan (う) Verbs",
  summary: "Meet the second verb group, godan or う-verbs, and learn how to tell it from ichidan.",
  objective: "By the end you can sort a verb into ichidan or godan.",
  teach: [
    T("The second group", "ごだん = “five steps”",
      ["{ごだん|godan} means “five steps”. It is the biggest group of verbs. Its dictionary forms can end in any u-sound: {う|u}, {く|ku}, {ぐ|gu}, {す|su}, {つ|tsu}, {ぬ|nu}, {ぶ|bu}, {む|mu} or {る|ru}.",
       "It is also called {う|u}-verbs, because the ending is a u-sound."],
      [E("のむ", "nomu", "to drink", "む"),
       E("いく", "iku", "to go", "く"),
       E("はなす", "hanasu", "to speak, to talk", "す"),
       E("かう", "kau", "to buy", "う")]),
    T("Why five steps?", "The last sound moves through five rows",
      ["In this group the last sound changes along the five vowel rows: a, i, u, e, o. For example, {のむ|nomu} can become {のまない|nomanai}, {のみます|nomimasu}, {のむ|nomu}, {のめば|nomeba} and {のもう|nomou}. Five steps.",
       "You will meet these forms one by one. The most important one now is the {い|i}-step: {のみます|nomimasu}."],
      [E("のむ → のみます", "nomu → nomimasu", "to drink → drink (polite)", "み")]),
    T("The endings", "Nine possible last sounds",
      ["A godan verb can end in nine different sounds. Here are common examples: {かう|kau}, buy. {かく|kaku}, write. {およぐ|oyogu}, swim. {はなす|hanasu}, speak. {まつ|matsu}, wait. {あそぶ|asobu}, play. {のむ|nomu}, drink. {のる|noru}, ride.",
       "The ending {ぬ|nu} is very rare. The only common verb with it is {しぬ|shinu}, to die, so we skip it."],
      [E("かう", "kau", "to buy", "う"),
       E("かく", "kaku", "to write", "く"),
       E("およぐ", "oyogu", "to swim", "ぐ"),
       E("はなす", "hanasu", "to speak", "す"),
       E("まつ", "matsu", "to wait", "つ"),
       E("あそぶ", "asobu", "to play", "ぶ"),
       E("のむ", "nomu", "to drink", "む"),
       E("のる", "noru", "to ride", "る")]),
    T("る verbs in this group", "る after a, u or o",
      ["Godan verbs can also end in {る|ru}. You tell them from ichidan verbs by the sound before {る|ru}. If it is {あ|a}, {う|u} or {お|o}, the verb is godan: {わかる|wakaru}, understand. {つくる|tsukuru}, make. {のる|noru}, ride.",
       "Only i-sound and e-sound plus {る|ru} could be ichidan."],
      [E("わかる", "wakaru", "to understand", "か"),
       E("つくる", "tsukuru", "to make", "く"),
       E("のる", "noru", "to ride", "の")]),
    T("The exceptions", "Looks ichidan, but is godan",
      ["Remember the exceptions from the last lesson. These godan verbs end in {る|ru} with an i-sound or an e-sound before it: {かえる|kaeru}, return. {はいる|hairu}, enter. {しる|shiru}, know. {はしる|hashiru}, run.",
       "Treat them as vocabulary you simply have to remember."],
      [E("かえる", "kaeru", "to return", "る"),
       E("はいる", "hairu", "to enter", "る"),
       E("しる", "shiru", "to know", "る"),
       E("はしる", "hashiru", "to run", "る")]),
    T("A quick test", "How to decide the group",
      ["First look at the ending. If the verb does not end in {る|ru}, it is godan. If it ends in {る|ru}, look before it. A, u or o means godan. I or e usually means ichidan, unless it is one of the exceptions.",
       "That is all you need for now. The more verbs you meet, the faster it becomes automatic."],
      [E("のむ", "nomu", "ends in む: godan", "む"),
       E("たべる", "taberu", "e + る: ichidan", "る"),
       E("のる", "noru", "o + る: godan", "る"),
       E("かえる", "kaeru", "exception: godan", "る")])
  ],
  storyTitle: "Weekend plans",
  story: [
    L("Mika", "しゅうまつ、なにを しますか。", "Shuumatsu, nani o shimasu ka.", "What are you doing this weekend?"),
    L("Alex", "ともだちと バスに のります。", "Tomodachi to basu ni norimasu.", "I'm riding the bus with a friend."),
    L("Mika", "そして なにを かいますか。", "Soshite nani o kaimasu ka.", "And what will you buy?"),
    L("Alex", "ほんを かいます。それから コーヒーを のみます。", "Hon o kaimasu. Sorekara koohii o nomimasu.", "I'll buy a book. After that I'll drink coffee."),
    L("Mika", "いいですね。わたしは うちに かえります。", "Ii desu ne. Watashi wa uchi ni kaerimasu.", "Sounds nice. I'm going home."),
    L("Alex", "そして にほんごを べんきょうします。", "Soshite nihongo o benkyou shimasu.", "And I'll study Japanese.")
  ],
  words: [
    W("かう", "kau", "to buy"),
    W("かく", "kaku", "to write"),
    W("およぐ", "oyogu", "to swim"),
    W("はなす", "hanasu", "to speak, to talk"),
    W("まつ", "matsu", "to wait"),
    W("あそぶ", "asobu", "to play"),
    W("のむ", "nomu", "to drink"),
    W("のる", "noru", "to ride"),
    W("わかる", "wakaru", "to understand"),
    W("そして / それから", "soshite / sorekara", "and then, after that")
  ],
  tips: [
    "Godan verbs can end in う, く, ぐ, す, つ, ぬ, ぶ, む or る.",
    "る after a, u or o means godan. る after i or e usually means ichidan.",
    "Remember the exceptions: かえる, はいる, しる and はしる."
  ],
  quiz: [
    ask("verb-godan", "Which verb is godan?", "のむ", ["たべる", "みる"], "のむ ends in む, so it is godan."),
    ask("verb-godan", "Which sound before る means godan?", "an o-sound", ["an e-sound", "an i-sound"], "の + る: o-sound, godan."),
    ask("verb-godan", "Which one is a godan exception?", "はいる", ["おきる", "ねる"], "はいる looks ichidan but is godan."),
    ask("verb-godan", "What does ごだん mean?", "five steps", ["one step", "three steps"], "ご means five."),
    ask("verb-godan", "What does かう mean?", "to buy", ["to write", "to wait"], "かう is “to buy”.")
  ]
});

export const irregular = lesson({
  id: "verb-irregular", number: 12, title: "Verbs, Part 3: する and くる",
  summary: "Learn the two irregular verbs, する and くる, and the huge noun + する pattern.",
  objective: "By the end you know the two irregular verbs and can turn many nouns into verbs.",
  teach: [
    T("Only two", "する and くる are irregular",
      ["Ichidan and godan cover almost every verb. Only two verbs follow their own rules: {する|suru}, to do, and {くる|kuru}, to come. You simply memorise them.",
       "They are among the most common verbs in the language, so you will not forget them for long."],
      [E("する", "suru", "to do", "する"),
       E("くる", "kuru", "to come", "くる")]),
    T("する: to do", "する can stand alone",
      ["{する|suru} means “to do”. You can use it by itself, as in {しごとを する|shigoto o suru}, to do work. But its most important use is attaching to nouns, which is the next step.",
       "In the polite form, it becomes {します|shimasu}."],
      [E("しごとを する。", "Shigoto o suru.", "(I) do work.", "する"),
       E("テニスを する。", "Tenisu o suru.", "(I) play tennis.", "する")]),
    T("Noun + する", "A noun becomes a verb",
      ["This is a huge pattern. Take a noun that names an action and add {する|suru}, and you get a verb. {べんきょう|benkyou}, study, plus {する|suru} is {べんきょうする|benkyou suru}, to study.",
       "Hundreds of words work this way, so once you learn one new noun, you often get a verb for free."],
      [E("べんきょうする", "benkyou suru", "to study", "する"),
       E("さんぽする", "sanpo suru", "to take a walk", "する"),
       E("れんしゅうする", "renshuu suru", "to practise", "する"),
       E("でんわする", "denwa suru", "to make a phone call", "する")]),
    T("くる: to come", "The vowel changes",
      ["{くる|kuru} means “to come”. It is irregular because the first sound changes: sometimes it is {く|ku}, sometimes {き|ki}, and sometimes {こ|ko}. You will see each form as you learn more verb endings.",
       "In the polite form it becomes {きます|kimasu}."],
      [E("ともだちが くる。", "Tomodachi ga kuru.", "A friend comes. (casual)", "くる"),
       E("にほんに くる。", "Nihon ni kuru.", "(I) come to Japan. (casual)", "くる")]),
    T("What about いく?", "いく is a regular godan verb",
      ["{いく|iku}, to go, is a regular godan verb in the forms you need now. It becomes {いきます|ikimasu}. It has one irregular form later, but you can ignore that for now.",
       "So the only truly irregular verbs are {する|suru} and {くる|kuru}."],
      [E("いく", "iku", "to go", "いく"),
       E("がっこうに いく。", "Gakkou ni iku.", "(I) go to school. (casual)", "いく")])
  ],
  storyTitle: "A busy day",
  story: [
    L("Alex", "きょう、なにを しますか。", "Kyou, nani o shimasu ka.", "What are you doing today?"),
    L("Mika", "ともだちが きます。いっしょに べんきょうします。", "Tomodachi ga kimasu. Issho ni benkyou shimasu.", "A friend is coming. We'll study together."),
    L("Alex", "いいですね。わたしは さんぽします。", "Ii desu ne. Watashi wa sanpo shimasu.", "Nice. I'll take a walk."),
    L("Mika", "そのあと、れんしゅうも しますか。", "Sono ato, renshuu mo shimasu ka.", "Will you practise afterward too?"),
    L("Alex", "はい、にほんごを れんしゅうします。", "Hai, nihongo o renshuu shimasu.", "Yes, I'll practise Japanese.")
  ],
  words: [
    W("する", "suru", "to do"),
    W("くる", "kuru", "to come"),
    W("べんきょう", "benkyou", "study"),
    W("さんぽ", "sanpo", "walk, stroll"),
    W("れんしゅう", "renshuu", "practice"),
    W("でんわ", "denwa", "phone call"),
    W("しごと", "shigoto", "work, job"),
    W("いっしょに", "issho ni", "together")
  ],
  tips: [
    "Only する and くる are irregular. Everything else is ichidan or godan.",
    "Many nouns become verbs with する: べんきょう → べんきょうする.",
    "いく is a regular godan verb for now."
  ],
  quiz: [
    ask("verb-irregular", "Which two verbs are irregular?", "する and くる", ["たべる and みる", "のむ and いく"], "する and くる are the two."),
    ask("verb-irregular", "How do you say “to study” as a verb?", "べんきょうする", ["べんきょうくる", "べんきょうのむ"], "Noun + する."),
    ask("verb-irregular", "What does くる mean?", "to come", ["to do", "to go"], "くる is “to come”."),
    ask("verb-irregular", "What does さんぽする mean?", "to take a walk", ["to take a bus", "to take a break"], "さんぽ is a walk."),
    ask("verb-irregular", "Is いく irregular?", "No, it is a regular godan verb.", ["Yes, completely irregular.", "Yes, like くる."], "For the forms you need now, いく is regular.")
  ]
});

export const politeIchidan = lesson({
  id: "polite-ichidan", number: 13, title: "ます Form, Part 1: Ichidan Verbs",
  summary: "Make the polite ます form of ichidan verbs by dropping る and adding ます.",
  objective: "By the end you can make the polite form of any ichidan verb.",
  teach: [
    T("What the ます form is", "The polite form of a verb",
      ["The {ます|masu} form is the polite form of a verb. You use it with teachers, strangers, shop staff, and anyone you do not know well. It is the form to use in nearly every beginner conversation.",
       "It covers the present and the future: {たべます|tabemasu} means “I eat” and “I will eat”."],
      [E("たべます。", "Tabemasu.", "I eat. / I will eat.", "ます"),
       E("みます。", "Mimasu.", "I watch. / I will watch.", "ます")]),
    T("The rule", "Drop る, add ます",
      ["For ichidan verbs the rule is the easiest of all. Take the dictionary form, drop the final {る|ru}, and add {ます|masu}.",
       "{たべる|taberu} becomes {たべ|tabe}, plus {ます|masu}: {たべます|tabemasu}. Nothing else changes."],
      [E("たべる → たべます", "taberu → tabemasu", "to eat → eat (polite)", "ます"),
       E("みる → みます", "miru → mimasu", "to watch → watch (polite)", "ます"),
       E("おきる → おきます", "okiru → okimasu", "to wake up → wake up (polite)", "ます"),
       E("ねる → ねます", "neru → nemasu", "to sleep → sleep (polite)", "ます")]),
    T("No change for the person", "Same for everyone",
      ["Just like {です|desu}, the {ます|masu} form never changes for I, you, he, she, we or they. {わたしは たべます|watashi wa tabemasu} and {ミカさんは たべます|Mika-san wa tabemasu} use the same verb.",
       "Context tells you who is eating."],
      [E("わたしは たべます。", "Watashi wa tabemasu.", "I eat.", "ます"),
       E("ミカさんは たべます。", "Mika-san wa tabemasu.", "Mika eats.", "ます")]),
    T("In real sentences", "Time, object and verb",
      ["Here are the verbs in full sentences. Notice how the verb always comes last. You already know {を|o} marks the object and {に|ni} marks a time.",
       "{しちじに おきます|shichiji ni okimasu} means “I get up at seven”."],
      [E("しちじに おきます。", "Shichiji ni okimasu.", "I get up at seven.", "おきます"),
       E("ごはんを たべます。", "Gohan o tabemasu.", "I eat a meal.", "たべます"),
       E("テレビを みます。", "Terebi o mimasu.", "I watch TV.", "みます"),
       E("じゅういちじに ねます。", "Juuichiji ni nemasu.", "I go to sleep at eleven.", "ねます")]),
    T("Common mistakes", "Do not keep る",
      ["The most common mistake is keeping the {る|ru}: {たべるます|taberumasu} is wrong. Drop {る|ru} first, then add {ます|masu}.",
       "Do not add {です|desu} after {ます|masu} either. {ます|masu} already makes the sentence polite."],
      [E("たべるます。", "(wrong)", "Wrong: drop る before adding ます.", "る", true),
       E("たべます です。", "(wrong)", "Wrong: ます already makes it polite.", "です", true),
       E("たべます。", "Tabemasu.", "Right: I eat.", "ます")],
      T0("What is the polite form of ねる (to sleep)?", "ねます。", "Nemasu.", "I sleep.", "ます"))
  ],
  storyTitle: "Mika's morning",
  story: [
    L("Alex", "ミカさんは なんじに おきますか。", "Mika-san wa nanji ni okimasu ka.", "What time do you get up, Mika?"),
    L("Mika", "しちじに おきます。", "Shichiji ni okimasu.", "I get up at seven."),
    L("Alex", "あさごはんを たべますか。", "Asagohan o tabemasu ka.", "Do you eat breakfast?"),
    L("Mika", "はい、パンを たべます。", "Hai, pan o tabemasu.", "Yes, I eat bread."),
    L("Alex", "テレビも みますか。", "Terebi mo mimasu ka.", "Do you watch TV too?"),
    L("Mika", "はい、ニュースを みます。", "Hai, nyuusu o mimasu.", "Yes, I watch the news.")
  ],
  words: [
    W("たべます", "tabemasu", "eat"),
    W("みます", "mimasu", "see, watch"),
    W("おきます", "okimasu", "wake up"),
    W("ねます", "nemasu", "sleep, go to bed"),
    W("あさごはん", "asagohan", "breakfast"),
    W("ニュース", "nyuusu", "news"),
    W("なんじ", "nanji", "what time")
  ],
  tips: [
    "Ichidan polite form: drop る, add ます.",
    "ます is the polite present and future form.",
    "ます is the same for every person."
  ],
  quiz: [
    ask("polite-ichidan", "What is the polite form of たべる?", "たべます", ["たべるます", "たべいます"], "Drop る, add ます."),
    ask("polite-ichidan", "What is the polite form of おきる?", "おきます", ["おきるます", "おけます"], "おき + ます."),
    ask("polite-ichidan", "Which is wrong?", "みるます", ["みます", "ねます"], "Do not keep る."),
    ask("polite-ichidan", "Does ます change for I, you and he?", "No, it stays the same.", ["Yes, for each person.", "Only for he and she."], "ます is the same for everyone."),
    ask("polite-ichidan", "What does しちじに おきます mean?", "I get up at seven.", ["I eat at seven.", "I sleep at seven."], "おきます is “wake up”.")
  ]
});

export const politeGodan = lesson({
  id: "polite-godan", number: 14, title: "ます Form, Part 2: Godan Verbs",
  summary: "Make the polite ます form of godan verbs by changing the last sound to its い-sound.",
  objective: "By the end you can make the polite form of any godan verb.",
  teach: [
    T("The rule", "Last sound → い-row sound, then ます",
      ["For godan verbs, take the dictionary form and change the last sound to its matching {い|i}-row sound. Then add {ます|masu}.",
       "{のむ|nomu} ends in {む|mu}. The {い|i}-row partner of {む|mu} is {み|mi}. So you get {のみ|nomi}, plus {ます|masu}: {のみます|nomimasu}."],
      [E("のむ → のみます", "nomu → nomimasu", "to drink → drink (polite)", "み"),
       E("かく → かきます", "kaku → kakimasu", "to write → write (polite)", "き"),
       E("あそぶ → あそびます", "asobu → asobimasu", "to play → play (polite)", "び"),
       E("いく → いきます", "iku → ikimasu", "to go → go (polite)", "き")]),
    T("The full table", "u-sound → i-sound",
      ["Here are all the changes. {う|u} becomes {い|i}. {く|ku} becomes {き|ki}. {ぐ|gu} becomes {ぎ|gi}. {す|su} becomes {し|shi}. {つ|tsu} becomes {ち|chi}. {ぬ|nu} becomes {に|ni}. {ぶ|bu} becomes {び|bi}. {む|mu} becomes {み|mi}. {る|ru} becomes {り|ri}.",
       "You do not need to memorise a table. Say the dictionary form, then say the vowel row slowly from u to i."],
      [E("かう → かいます", "kau → kaimasu", "to buy → buy (polite)", "い"),
       E("およぐ → およぎます", "oyogu → oyogimasu", "to swim → swim (polite)", "ぎ"),
       E("まつ → まちます", "matsu → machimasu", "to wait → wait (polite)", "ち"),
       E("のる → のります", "noru → norimasu", "to ride → ride (polite)", "り")]),
    T("Watch す and つ", "し and ち, not す and つ sounds",
      ["Two changes look different from the others. {す|su} becomes {し|shi}, so {はなす|hanasu} becomes {はなします|hanashimasu}. And {つ|tsu} becomes {ち|chi}, so {まつ|matsu} becomes {まちます|machimasu}.",
       "Do not say {はなすます|hanasumasu} or {まつます|matsumasu}."],
      [E("はなす → はなします", "hanasu → hanashimasu", "to speak → speak (polite)", "し"),
       E("まつ → まちます", "matsu → machimasu", "to wait → wait (polite)", "ち")]),
    T("る verbs in this group", "のる, わかる, かえる",
      ["Godan verbs that end in {る|ru} change it to {り|ri}. {のる|noru} becomes {のります|norimasu}. {わかる|wakaru} becomes {わかります|wakarimasu}. And the exception {かえる|kaeru} becomes {かえります|kaerimasu}, not {かえます|kaemasu}.",
       "That is why it matters to know which group a verb belongs to."],
      [E("のる → のります", "noru → norimasu", "to ride → ride (polite)", "り"),
       E("わかる → わかります", "wakaru → wakarimasu", "to understand → understand (polite)", "り"),
       E("かえる → かえります", "kaeru → kaerimasu", "to return → return (polite)", "り")]),
    T("In real sentences", "Object, place, verb",
      ["Now put the verbs into sentences. Remember that the verb is last, and each noun carries its own particle.",
       "{コーヒーを のみます|koohii o nomimasu}, I drink coffee. {ともだちに あいます|tomodachi ni aimasu}, I meet a friend."],
      [E("コーヒーを のみます。", "Koohii o nomimasu.", "I drink coffee.", "のみます"),
       E("ともだちに あいます。", "Tomodachi ni aimasu.", "I meet a friend.", "あいます"),
       E("ほんを よみます。", "Hon o yomimasu.", "I read a book.", "よみます"),
       E("バスに のります。", "Basu ni norimasu.", "I ride the bus.", "のります")]),
    T("Common mistakes", "Do not just add ます",
      ["Do not just add {ます|masu} to the dictionary form. {のむます|nomumasu} is wrong. And do not treat {かえる|kaeru} as ichidan: {かえます|kaemasu} is wrong, because it is godan.",
       "Always change the last sound first."],
      [E("のむます。", "(wrong)", "Wrong: change む to み first.", "む", true),
       E("かえます。", "(wrong)", "Wrong: かえる is godan, so かえります.", "え", true),
       E("のみます。", "Nomimasu.", "Right: I drink.", "み")],
      T0("What is the polite form of はなす (to speak)?", "はなします。", "Hanashimasu.", "I speak.", "し"))
  ],
  storyTitle: "At the cafe",
  story: [
    L("Alex", "なにを のみますか。", "Nani o nomimasu ka.", "What will you drink?"),
    L("Mika", "コーヒーを のみます。", "Koohii o nomimasu.", "I'll drink coffee."),
    L("Alex", "ここで ともだちを まちますか。", "Koko de tomodachi o machimasu ka.", "Will you wait for your friend here?"),
    L("Mika", "はい、ここで まちます。", "Hai, koko de machimasu.", "Yes, I'll wait here."),
    L("Alex", "ともだちは バスに のりますか。", "Tomodachi wa basu ni norimasu ka.", "Does your friend take the bus?"),
    L("Mika", "いいえ、あるいて きます。", "Iie, aruite kimasu.", "No, they come on foot.")
  ],
  words: [
    W("のみます", "nomimasu", "drink"),
    W("まちます", "machimasu", "wait"),
    W("のります", "norimasu", "ride"),
    W("よみます", "yomimasu", "read"),
    W("あいます", "aimasu", "meet"),
    W("はなします", "hanashimasu", "speak, talk"),
    W("あるいて きます", "aruite kimasu", "come on foot")
  ],
  tips: [
    "Godan polite form: change the last u-sound to its i-sound, then add ます.",
    "す → し and つ → ち are the changes to watch.",
    "かえる is godan, so it is かえります."
  ],
  quiz: [
    ask("polite-godan", "What is the polite form of のむ?", "のみます", ["のむます", "のめます"], "む becomes み."),
    ask("polite-godan", "What is the polite form of まつ?", "まちます", ["まつます", "まいます"], "つ becomes ち."),
    ask("polite-godan", "What is the polite form of はなす?", "はなします", ["はなすます", "はなさます"], "す becomes し."),
    ask("polite-godan", "What is the polite form of かえる?", "かえります", ["かえます", "かえいます"], "かえる is godan."),
    ask("polite-godan", "What is the polite form of かう?", "かいます", ["かうます", "かえます"], "う becomes い.")
  ]
});
