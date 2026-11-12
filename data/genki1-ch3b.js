// Genki I Grammar, chapter 3 (part 2): present tense, invitations, frequency and word order. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const politeIrregular = lesson({
  id: "polite-irregular", number: 15, title: "ます Form, Part 3: します and きます",
  summary: "Learn the polite forms of the two irregular verbs, する and くる.",
  objective: "By the end you can use します and きます, and compare all three verb groups.",
  teach: [
    T("Memorise two", "する → します, くる → きます",
      ["The two irregular verbs have irregular polite forms. {する|suru} becomes {します|shimasu}. {くる|kuru} becomes {きます|kimasu}. You cannot work these out from a rule, so memorise them.",
       "The good news is that there are only two."],
      [E("する → します", "suru → shimasu", "to do → do (polite)", "し"),
       E("くる → きます", "kuru → kimasu", "to come → come (polite)", "き")]),
    T("します", "Do, with a noun in front",
      ["{します|shimasu} often follows a noun. {べんきょう|benkyou}, study, plus {します|shimasu}, makes {べんきょうします|benkyou shimasu}. {さんぽ|sanpo}, a walk, plus {します|shimasu}, makes {さんぽします|sanpo shimasu}.",
       "It also stands alone: {しごとを します|shigoto o shimasu}, I do work."],
      [E("べんきょうします。", "Benkyou shimasu.", "I study.", "します"),
       E("さんぽします。", "Sanpo shimasu.", "I take a walk.", "します"),
       E("しごとを します。", "Shigoto o shimasu.", "I do work.", "します")]),
    T("きます", "Come",
      ["{きます|kimasu} means “come”. The destination takes {に|ni} or {へ|e}, just like {いきます|ikimasu}. Someone coming to you is the subject, marked with {が|ga} or {は|wa}.",
       "{ともだちが きます|tomodachi ga kimasu} is “a friend is coming”."],
      [E("ともだちが きます。", "Tomodachi ga kimasu.", "A friend is coming.", "きます"),
       E("にほんに きます。", "Nihon ni kimasu.", "I'm coming to Japan.", "きます")]),
    T("All three groups side by side", "Same ending, three rules",
      ["Here are all three groups together. Ichidan: drop {る|ru}, add {ます|masu}. Godan: change the last sound to the {い|i} sound, add {ます|masu}. Irregular: memorise {します|shimasu} and {きます|kimasu}.",
       "Every verb you will meet ends up as a {ます|masu} form, so these three rules unlock all of them."],
      [E("たべる → たべます", "taberu → tabemasu", "ichidan: drop る", "ます"),
       E("のむ → のみます", "nomu → nomimasu", "godan: む → み", "ます"),
       E("する → します", "suru → shimasu", "irregular", "ます"),
       E("くる → きます", "kuru → kimasu", "irregular", "ます")]),
    T("Common mistakes", "No regular pattern here",
      ["Do not try to apply a pattern to these two. {するます|surumasu} and {くるます|kurumasu} are wrong. And do not mix up the vowel in {くる|kuru}: the polite form is {きます|kimasu}, not {くます|kumasu}.",
       "When in doubt, remember the pair: shimasu, kimasu."],
      [E("するます。", "(wrong)", "Wrong: する → します.", "ます", true),
       E("くるます。", "(wrong)", "Wrong: くる → きます.", "ます", true),
       E("べんきょうします。", "Benkyou shimasu.", "Right: I study.", "します")],
      T0("What is the polite form of くる (to come)?", "きます。", "Kimasu.", "I come.", "き"))
  ],
  storyTitle: "Study day",
  story: [
    L("Alex", "あした なにを しますか。", "Ashita nani o shimasu ka.", "What are you doing tomorrow?"),
    L("Mika", "うちで べんきょうします。ともだちも きます。", "Uchi de benkyou shimasu. Tomodachi mo kimasu.", "I'll study at home. A friend is coming too."),
    L("Alex", "なんじに きますか。", "Nanji ni kimasu ka.", "What time is the friend coming?"),
    L("Mika", "ひるに きます。", "Hiru ni kimasu.", "At noon."),
    L("Alex", "そのあと さんぽも しますか。", "Sono ato sanpo mo shimasu ka.", "Will you take a walk afterward too?"),
    L("Mika", "はい、しますよ。", "Hai, shimasu yo.", "Yes, we will.")
  ],
  words: [
    W("します", "shimasu", "do"),
    W("きます", "kimasu", "come"),
    W("べんきょうします", "benkyou shimasu", "study"),
    W("さんぽします", "sanpo shimasu", "take a walk"),
    W("ひる", "hiru", "noon, daytime"),
    W("そのあと", "sono ato", "after that")
  ],
  tips: [
    "する → します, くる → きます. Memorise the pair.",
    "Noun + します makes a verb: べんきょうします.",
    "Every verb ends as a ます form, using one of three rules."
  ],
  quiz: [
    ask("polite-irregular", "What is the polite form of する?", "します", ["するます", "さます"], "する → します."),
    ask("polite-irregular", "What is the polite form of くる?", "きます", ["くます", "くるます"], "くる → きます."),
    ask("polite-irregular", "How do you say “I study” politely?", "べんきょうします", ["べんきょうきます", "べんきょうのみます"], "Noun + します."),
    ask("polite-irregular", "Which is wrong?", "するます", ["します", "きます"], "する is irregular."),
    ask("polite-irregular", "Which verb is polite “come”?", "きます", ["いきます", "かえります"], "きます is “come”.")
  ]
});

export const present = lesson({
  id: "verbs-present", number: 16, title: "Present Tense: ます and ません",
  summary: "Use the polite present for habits and the future, and make it negative with ません.",
  objective: "By the end you can say what you do, will do and do not do.",
  teach: [
    T("One form, present and future", "ます = do, does, will do",
      ["Japanese has no separate future tense. The {ます|masu} form covers habits, general facts and the near future. {あした いきます|ashita ikimasu} is “I will go tomorrow”, and {まいにち いきます|mainichi ikimasu} is “I go every day”.",
       "Context, such as a time word, tells you which one is meant."],
      [E("まいにち ほんを よみます。", "Mainichi hon o yomimasu.", "I read a book every day.", "ます"),
       E("あした ほんを よみます。", "Ashita hon o yomimasu.", "I will read a book tomorrow.", "ます")]),
    T("Habits", "Things you usually do",
      ["For habits, add a word such as {まいにち|mainichi}, every day, or {まいあさ|maiasa}, every morning. The verb stays in the {ます|masu} form.",
       "This is how you describe your daily routine."],
      [E("まいあさ コーヒーを のみます。", "Maiasa koohii o nomimasu.", "I drink coffee every morning.", "のみます"),
       E("まいにち べんきょうします。", "Mainichi benkyou shimasu.", "I study every day.", "します")]),
    T("The near future", "Plans",
      ["For the near future, add a time word like {あした|ashita}, tomorrow, or {らいしゅう|raishuu}, next week. The verb is exactly the same.",
       "If the time is not clear, the listener will assume a habit or a plan from the situation."],
      [E("あした うちに かえります。", "Ashita uchi ni kaerimasu.", "I'll go home tomorrow.", "かえります"),
       E("らいしゅう きょうとへ いきます。", "Raishuu Kyouto e ikimasu.", "I'll go to Kyoto next week.", "いきます")]),
    T("The negative: ません", "Replace ます with ません",
      ["To say “do not” or “will not”, replace {ます|masu} with {ません|masen}. {たべます|tabemasu} becomes {たべません|tabemasen}. The rest of the sentence stays the same.",
       "Be careful with the spelling: it is {ません|masen}, with the last sound {ん|n}."],
      [E("たべます → たべません", "tabemasu → tabemasen", "eat → do not eat", "ません"),
       E("コーヒーを のみません。", "Koohii o nomimasen.", "I don't drink coffee.", "ません"),
       E("テレビを みません。", "Terebi o mimasen.", "I don't watch TV.", "ません")]),
    T("Answering yes or no", "はい + ます, いいえ + ません",
      ["Answer a {ます|masu} question by repeating the verb. For yes, say {はい|hai} and the {ます|masu} form. For no, say {いいえ|iie} and the {ません|masen} form.",
       "You can drop the object if it is obvious."],
      [E("コーヒーを のみますか。", "Koohii o nomimasu ka.", "Do you drink coffee?", "ますか"),
       E("はい、のみます。", "Hai, nomimasu.", "Yes, I do.", "ます"),
       E("いいえ、のみません。", "Iie, nomimasen.", "No, I don't.", "ません")]),
    T("Not “right now”", "ます does not mean “am doing”",
      ["Be careful: the {ます|masu} form does not describe what is happening right now. {たべます|tabemasu} is not “I am eating at this moment”. That meaning uses a different form that you will learn later, the {ている|iteiru} form.",
       "For now, think of {ます|masu} as habits and plans."],
      [E("まいにち たべます。", "Mainichi tabemasu.", "I eat every day. (a habit)", "ます")]),
    T("Common mistakes", "Negative = ません, not ないます",
      ["Do not add {ない|nai} and {ます|masu} together. {たべないます|tabenaimasu} is wrong. And do not put {ません|masen} after {ます|masu}: {たべます ません|tabemasu masen} is wrong.",
       "The negative polite form replaces {ます|masu}."],
      [E("たべないます。", "(wrong)", "Wrong: use ません.", "ない", true),
       E("たべます ません。", "(wrong)", "Wrong: ません replaces ます.", "ません", true),
       E("たべません。", "Tabemasen.", "Right: I don't eat.", "ません")],
      T0("Say: “I don't watch TV.”", "テレビを みません。", "Terebi o mimasen.", "I don't watch TV.", "ません"))
  ],
  storyTitle: "Daily habits",
  story: [
    L("Alex", "ミカさんは まいあさ コーヒーを のみますか。", "Mika-san wa maiasa koohii o nomimasu ka.", "Do you drink coffee every morning, Mika?"),
    L("Mika", "いいえ、のみません。おちゃを のみます。", "Iie, nomimasen. Ocha o nomimasu.", "No, I don't. I drink tea."),
    L("Alex", "テレビを みますか。", "Terebi o mimasu ka.", "Do you watch TV?"),
    L("Mika", "いいえ、みません。ラジオを ききます。", "Iie, mimasen. Rajio o kikimasu.", "No, I don't. I listen to the radio."),
    L("Alex", "あした なにを しますか。", "Ashita nani o shimasu ka.", "What will you do tomorrow?"),
    L("Mika", "ともだちに あいます。", "Tomodachi ni aimasu.", "I'll meet a friend.")
  ],
  words: [
    W("まいにち", "mainichi", "every day"),
    W("まいあさ", "maiasa", "every morning"),
    W("らいしゅう", "raishuu", "next week"),
    W("ラジオ", "rajio", "radio"),
    W("ききます", "kikimasu", "listen, hear"),
    W("ません", "masen", "do not (negative)")
  ],
  tips: [
    "ます covers habits, general facts and the near future.",
    "Negative: replace ます with ません.",
    "ます does not mean “right now”; that comes later."
  ],
  quiz: [
    ask("verbs-present", "What does あした いきます mean?", "I will go tomorrow.", ["I went yesterday.", "I am going right now."], "ます covers the future."),
    ask("verbs-present", "What is the negative of たべます?", "たべません", ["たべないます", "たべます ません"], "ます → ません."),
    ask("verbs-present", "How do you say “I don't drink coffee”?", "コーヒーを のみません。", ["コーヒーを のみないます。", "コーヒーを のみます ません。"], "のみません."),
    ask("verbs-present", "How do you answer “no” to みますか?", "いいえ、みません。", ["いいえ、みます。", "はい、みません。"], "いいえ + ません."),
    ask("verbs-present", "Does ます mean “right now”?", "No, it covers habits and plans.", ["Yes, always.", "Yes, for ichidan only."], "That meaning uses another form.")
  ]
});

export const masenka = lesson({
  id: "masen-ka", number: 21, title: "ませんか: Inviting Someone",
  summary: "Use ませんか to invite people politely, and learn how to accept or decline.",
  objective: "By the end you can invite someone and answer an invitation.",
  teach: [
    T("The idea", "ませんか = “Won't you ...?” = an invitation",
      ["{ませんか|masen ka} looks like a negative question: “Do you not ...?” But in Japanese it works as an invitation, like “Would you like to ...?” or “Shall we ...?”.",
       "{コーヒーを のみませんか|koohii o nomimasen ka} means “Would you like to drink coffee?”."],
      [E("コーヒーを のみませんか。", "Koohii o nomimasen ka.", "Would you like to drink coffee?", "ませんか")]),
    T("The pattern", "ます → ませんか",
      ["Make the {ます|masu} form negative, and add {か|ka}. {いきます|ikimasu} becomes {いきませんか|ikimasen ka}. {みます|mimasu} becomes {みませんか|mimasen ka}.",
       "It is a polite and gentle way to suggest something."],
      [E("あした えいがを みませんか。", "Ashita eiga o mimasen ka.", "Would you like to watch a movie tomorrow?", "ませんか"),
       E("いっしょに いきませんか。", "Issho ni ikimasen ka.", "Shall we go together?", "ませんか")]),
    T("いっしょに", "Together",
      ["{いっしょに|issho ni} means “together”. It often appears in invitations, to make it clear that you want to do the activity with the other person.",
       "It goes before the verb."],
      [E("いっしょに たべませんか。", "Issho ni tabemasen ka.", "Shall we eat together?", "いっしょに"),
       E("いっしょに べんきょうしませんか。", "Issho ni benkyou shimasen ka.", "Shall we study together?", "いっしょに")]),
    T("Accepting", "Saying yes",
      ["To accept, say {はい、いいですね|hai, ii desu ne}, “yes, that sounds good”. You can also say {はい、ぜひ|hai, zehi}, “yes, by all means”.",
       "Be warm: an invitation is a friendly gesture."],
      [E("はい、いいですね。", "Hai, ii desu ne.", "Yes, that sounds good.", "いいですね"),
       E("はい、ぜひ。", "Hai, zehi.", "Yes, by all means.", "ぜひ")]),
    T("Declining politely", "Not too directly",
      ["Japanese avoids a blunt “no”. To decline, say {すみません|sumimasen}, sorry, and then {ちょっと|chotto}, a little, and trail off: {すみません、ちょっと……|sumimasen, chotto...}. Everyone understands this means “no”.",
       "You can add a reason, such as “I have a test tomorrow”."],
      [E("すみません、ちょっと……。", "Sumimasen, chotto...", "Sorry, that's a bit... (a polite no)", "ちょっと"),
       E("あしたは ちょっと……。", "Ashita wa chotto...", "Tomorrow is a bit difficult...", "ちょっと")]),
    T("ませんか vs ますか", "Invite or ask",
      ["{ますか|masu ka} asks a plain question: “Do you drink coffee?”. {ませんか|masen ka} invites: “Would you like to drink coffee with me?”.",
       "The meaning changes with only one small difference, so listen to the context."],
      [E("コーヒーを のみますか。", "Koohii o nomimasu ka.", "Do you drink coffee? (question)", "ますか"),
       E("コーヒーを のみませんか。", "Koohii o nomimasen ka.", "Would you like to drink coffee? (invitation)", "ませんか")]),
    T("Common mistakes", "Do not add です",
      ["Do not add {です|desu}: {のみませんですか|nomimasen desu ka} is wrong. And do not use {ませんか|masen ka} for a plain question about habits.",
       "Keep it short, and add {いっしょに|issho ni} if you want to be clear."],
      [E("のみませんですか。", "(wrong)", "Wrong: no です.", "です", true),
       E("いっしょに のみませんか。", "Issho ni nomimasen ka.", "Right: Shall we drink together?", "ませんか")],
      T0("Invite: “Shall we go together tomorrow?”", "あした いっしょに いきませんか。", "Ashita issho ni ikimasen ka.", "Shall we go together tomorrow?", "ませんか"))
  ],
  storyTitle: "A movie invitation",
  story: [
    L("Alex", "ミカさん、しゅうまつ えいがを みませんか。", "Mika-san, shuumatsu eiga o mimasen ka.", "Mika, would you like to watch a movie this weekend?"),
    L("Mika", "いいですね。なにを みますか。", "Ii desu ne. Nani o mimasu ka.", "That sounds nice. What will we watch?"),
    L("Alex", "にほんの えいがを みませんか。", "Nihon no eiga o mimasen ka.", "Shall we watch a Japanese movie?"),
    L("Mika", "はい、ぜひ。いつ いきますか。", "Hai, zehi. Itsu ikimasu ka.", "Yes, by all means. When shall we go?"),
    L("Alex", "どようびは どうですか。", "Doyoubi wa dou desu ka.", "How about Saturday?"),
    L("Mika", "すみません、どようびは ちょっと……。にちようびは どうですか。", "Sumimasen, doyoubi wa chotto... Nichiyoubi wa dou desu ka.", "Sorry, Saturday is a bit difficult. How about Sunday?")
  ],
  words: [
    W("いっしょに", "issho ni", "together"),
    W("ぜひ", "zehi", "by all means"),
    W("ちょっと", "chotto", "a little, a bit"),
    W("どようび", "doyoubi", "Saturday"),
    W("にちようび", "nichiyoubi", "Sunday"),
    W("どうですか", "dou desu ka", "how about ...?"),
    W("いつ", "itsu", "when")
  ],
  tips: [
    "ませんか invites: “Would you like to ...?” or “Shall we ...?”.",
    "Accept with いいですね or ぜひ. Decline gently with すみません、ちょっと……",
    "ますか asks a plain question; ませんか suggests."
  ],
  quiz: [
    ask("masen-ka", "What does のみませんか usually mean?", "Would you like to drink?", ["Do you not drink?", "I didn't drink."], "ませんか is an invitation."),
    ask("masen-ka", "Which word means “together”?", "いっしょに", ["ぜひ", "ちょっと"], "いっしょに means together."),
    ask("masen-ka", "How do you politely decline?", "すみません、ちょっと……", ["はい、ぜひ。", "いいですね。"], "ちょっと trails off as a soft no."),
    ask("masen-ka", "Which is the invitation?", "コーヒーを のみませんか。", ["コーヒーを のみますか。", "コーヒーを のみません。"], "ませんか invites."),
    ask("masen-ka", "How do you accept?", "はい、いいですね。", ["すみません、ちょっと。", "いいえ、ちがいます。"], "いいですね is a warm yes.")
  ]
});

export const frequency = lesson({
  id: "frequency-adverbs", number: 22, title: "Frequency Adverbs",
  summary: "Say how often you do things with いつも, よく, ときどき, あまり and ぜんぜん.",
  objective: "By the end you can say how often you do something, and you know which words need a negative.",
  teach: [
    T("How often?", "A scale from always to never",
      ["Frequency adverbs say how often you do something. From most often to least often, you can use {いつも|itsumo}, always. {よく|yoku}, often. {ときどき|tokidoki}, sometimes. {あまり|amari}, not often. {ぜんぜん|zenzen}, not at all.",
       "They go right before the verb."],
      [E("いつも", "itsumo", "always", "いつも"),
       E("よく", "yoku", "often", "よく"),
       E("ときどき", "tokidoki", "sometimes", "ときどき"),
       E("あまり", "amari", "not very often (needs a negative)", "あまり"),
       E("ぜんぜん", "zenzen", "not at all (needs a negative)", "ぜんぜん")]),
    T("The positive ones", "いつも, よく, ときどき",
      ["The first three are used with a normal {ます|masu} verb. {いつも コーヒーを のみます|itsumo koohii o nomimasu} means “I always drink coffee”.",
       "You can put them after the topic or the time word, right before the verb."],
      [E("いつも コーヒーを のみます。", "Itsumo koohii o nomimasu.", "I always drink coffee.", "いつも"),
       E("よく えいがを みます。", "Yoku eiga o mimasu.", "I often watch movies.", "よく"),
       E("ときどき りょうりを します。", "Tokidoki ryouri o shimasu.", "I sometimes cook.", "ときどき")]),
    T("The negative ones", "あまり and ぜんぜん need ません",
      ["{あまり|amari} and {ぜんぜん|zenzen} must be used with a negative verb. {あまり のみません|amari nomimasen} means “I don't drink much”. {ぜんぜん のみません|zenzen nomimasen} means “I never drink”, or “I don't drink at all”.",
       "If you use them with a positive verb, the sentence is wrong."],
      [E("あまり テレビを みません。", "Amari terebi o mimasen.", "I don't watch TV much.", "あまり"),
       E("ぜんぜん おさけを のみません。", "Zenzen osake o nomimasen.", "I never drink alcohol.", "ぜんぜん")]),
    T("Where to put them", "Just before the verb",
      ["The usual position is right before the verb, after the other parts of the sentence. {わたしは いつも バスで いきます|watashi wa itsumo basu de ikimasu} means “I always go by bus”.",
       "The topic, time, place and object come first. The adverb and the verb finish the sentence."],
      [E("わたしは いつも バスで いきます。", "Watashi wa itsumo basu de ikimasu.", "I always go by bus.", "いつも"),
       E("ミカさんは よく としょかんで べんきょうします。", "Mika-san wa yoku toshokan de benkyou shimasu.", "Mika often studies at the library.", "よく")]),
    T("Common mistakes", "あまり and ぜんぜん with ます",
      ["The most common mistake is using {あまり|amari} or {ぜんぜん|zenzen} with a positive verb. {あまり のみます|amari nomimasu} is wrong. Use {あまり のみません|amari nomimasen}.",
       "Also remember that they go before the verb, not at the end of the sentence."],
      [E("あまり のみます。", "(wrong)", "Wrong: あまり needs ません.", "あまり", true),
       E("ぜんぜん みます。", "(wrong)", "Wrong: ぜんぜん needs ません.", "ぜんぜん", true),
       E("あまり のみません。", "Amari nomimasen.", "Right: I don't drink much.", "あまり")],
      T0("Say: “I don't watch TV much.”", "あまり テレビを みません。", "Amari terebi o mimasen.", "I don't watch TV much.", "あまり"))
  ],
  storyTitle: "How often do you cook?",
  story: [
    L("Alex", "ミカさんは よく りょうりを しますか。", "Mika-san wa yoku ryouri o shimasu ka.", "Do you cook often, Mika?"),
    L("Mika", "いいえ、あまり しません。ときどき します。", "Iie, amari shimasen. Tokidoki shimasu.", "No, not much. I cook sometimes."),
    L("Alex", "いつも なにを たべますか。", "Itsumo nani o tabemasu ka.", "What do you always eat?"),
    L("Mika", "いつも ごはんを たべます。", "Itsumo gohan o tabemasu.", "I always eat rice."),
    L("Alex", "パンは？", "Pan wa?", "And bread?"),
    L("Mika", "パンは ぜんぜん たべません。", "Pan wa zenzen tabemasen.", "I never eat bread.")
  ],
  words: [
    W("いつも", "itsumo", "always"),
    W("よく", "yoku", "often"),
    W("ときどき", "tokidoki", "sometimes"),
    W("あまり", "amari", "not very often (with negative)"),
    W("ぜんぜん", "zenzen", "not at all (with negative)"),
    W("りょうり", "ryouri", "cooking, dish"),
    W("おさけ", "osake", "alcohol, sake")
  ],
  tips: [
    "いつも, よく, ときどき go with a positive verb.",
    "あまり and ぜんぜん must go with a negative verb.",
    "The adverb goes right before the verb."
  ],
  quiz: [
    ask("frequency-adverbs", "Which word means “always”?", "いつも", ["ときどき", "あまり"], "いつも is always."),
    ask("frequency-adverbs", "Which word needs a negative verb?", "あまり", ["よく", "いつも"], "あまり needs ません."),
    ask("frequency-adverbs", "How do you say “I never drink alcohol”?", "ぜんぜん おさけを のみません。", ["ぜんぜん おさけを のみます。", "おさけを ぜんぜん のみます。"], "ぜんぜん + negative."),
    ask("frequency-adverbs", "Which means “sometimes”?", "ときどき", ["よく", "ぜんぜん"], "ときどき is sometimes."),
    ask("frequency-adverbs", "Where does the adverb go?", "right before the verb", ["at the very start", "after the verb"], "Before the verb.")
  ]
});

export const wordOrder = lesson({
  id: "word-order", number: 23, title: "Word Order",
  summary: "Learn where each part of a Japanese sentence goes, and why particles make it flexible.",
  objective: "By the end you can build a full sentence with time, place, object and verb.",
  teach: [
    T("The one rule", "The verb comes last",
      ["Japanese word order has one firm rule: the verb goes at the end of the sentence. Everything else can move a little, because each part carries a particle that marks its job.",
       "English puts the verb in the middle. Japanese ends with it."],
      [E("わたしは パンを たべます。", "Watashi wa pan o tabemasu.", "I eat bread.", "たべます")]),
    T("The standard order", "Topic, time, place, object, verb",
      ["A common order is: topic, time, place, object, verb. {わたしは|watashi wa}, topic. {まいあさ|maiasa}, time. {うちで|uchi de}, place. {コーヒーを|koohii o}, object. {のみます|nomimasu}, verb.",
       "You do not need all the parts. Use the ones you need."],
      [E("わたしは まいあさ うちで コーヒーを のみます。", "Watashi wa maiasa uchi de koohii o nomimasu.", "I drink coffee at home every morning.", "のみます")]),
    T("Particles keep it clear", "Order can change a little",
      ["Because each part has a particle, the order is flexible. You can say the time first, or the object earlier. The listener still knows which word is the object, which is the place, and which is the time.",
       "The verb still stays last."],
      [E("まいあさ わたしは うちで コーヒーを のみます。", "Maiasa watashi wa uchi de koohii o nomimasu.", "Every morning I drink coffee at home.", "のみます"),
       E("コーヒーを まいあさ うちで のみます。", "Koohii o maiasa uchi de nomimasu.", "Coffee, every morning at home, I drink.", "のみます")]),
    T("Time usually comes early", "Time first",
      ["Time words usually come near the start of the sentence, often right after the topic. {あした|ashita} is a good example. Place usually comes after the time.",
       "A simple habit to start with: time, place, object, verb."],
      [E("あした がっこうで ともだちに あいます。", "Ashita gakkou de tomodachi ni aimasu.", "Tomorrow I'll meet a friend at school.", "あいます"),
       E("まいにち としょかんで ほんを よみます。", "Mainichi toshokan de hon o yomimasu.", "I read a book at the library every day.", "よみます")]),
    T("Dropping what is clear", "Short sentences are normal",
      ["Japanese drops anything that is clear from context, especially the topic. {コーヒーを のみます|koohii o nomimasu} is a complete, natural sentence. You do not need to say “I”.",
       "A good strategy is to build a sentence from the verb backward."],
      [E("コーヒーを のみます。", "Koohii o nomimasu.", "(I) drink coffee.", "のみます")]),
    T("Building a long sentence", "Start from the verb",
      ["Build a sentence step by step. Start with the verb: {のみます|nomimasu}. Add the object: {コーヒーを のみます|koohii o nomimasu}. Add the place: {うちで コーヒーを のみます|uchi de koohii o nomimasu}. Add the time: {まいあさ うちで コーヒーを のみます|maiasa uchi de koohii o nomimasu}.",
       "Each new piece goes in front of the verb, with its own particle."],
      [E("のみます。", "Nomimasu.", "(I) drink.", "のみます"),
       E("コーヒーを のみます。", "Koohii o nomimasu.", "(I) drink coffee.", "を"),
       E("うちで コーヒーを のみます。", "Uchi de koohii o nomimasu.", "(I) drink coffee at home.", "で"),
       E("まいあさ うちで コーヒーを のみます。", "Maiasa uchi de koohii o nomimasu.", "(I) drink coffee at home every morning.", "まいあさ")]),
    T("Common mistakes", "Verb last, and particles on every part",
      ["Do not put the verb in the middle of the sentence. {のみます コーヒーを まいあさ|nomimasu koohii o maiasa} is wrong. And do not forget the particle on each part.",
       "If you feel lost, find the verb first, then check each word before it."],
      [E("のみます コーヒーを まいあさ。", "(wrong)", "Wrong: the verb must be last.", "のみます", true),
       E("ともだちを あいます。", "(wrong)", "Wrong: あいます needs に.", "を", true),
       E("ともだちに あいます。", "Tomodachi ni aimasu.", "Right: I meet a friend.", "に")],
      T0("Say: “I read a book at the library every day.”", "まいにち としょかんで ほんを よみます。", "Mainichi toshokan de hon o yomimasu.", "I read a book at the library every day.", "で"))
  ],
  storyTitle: "My weekly routine",
  story: [
    L("Alex", "ミカさんの いちにちを おしえて ください。", "Mika-san no ichinichi o oshiete kudasai.", "Tell me about your day, Mika."),
    L("Mika", "まいあさ しちじに おきます。", "Maiasa shichiji ni okimasu.", "Every morning I get up at seven."),
    L("Mika", "うちで あさごはんを たべます。", "Uchi de asagohan o tabemasu.", "I eat breakfast at home."),
    L("Mika", "それから がっこうに いきます。", "Sorekara gakkou ni ikimasu.", "Then I go to school."),
    L("Alex", "ごごは なにを しますか。", "Gogo wa nani o shimasu ka.", "What do you do in the afternoon?"),
    L("Mika", "としょかんで ともだちと べんきょうします。", "Toshokan de tomodachi to benkyou shimasu.", "I study with a friend at the library.")
  ],
  words: [
    W("いちにち", "ichinichi", "one day"),
    W("おしえて ください", "oshiete kudasai", "please tell me, please teach me"),
    W("あさごはん", "asagohan", "breakfast"),
    W("それから", "sorekara", "after that, then"),
    W("ごご", "gogo", "afternoon"),
    W("としょかん", "toshokan", "library")
  ],
  tips: [
    "The verb always comes last.",
    "A handy order: topic, time, place, object, verb.",
    "Particles mark each part, so you can drop whatever is clear."
  ],
  quiz: [
    ask("word-order", "Where does the verb go in a Japanese sentence?", "at the end", ["in the middle", "at the start"], "The verb is last."),
    ask("word-order", "Which is a natural order?", "まいあさ うちで コーヒーを のみます。", ["のみます まいあさ うちで コーヒーを。", "うちで のみます コーヒーを まいあさ。"], "Verb last."),
    ask("word-order", "Why can the order of the other parts change?", "particles mark each part", ["Japanese has no grammar", "the verb marks them"], "Particles show each word's role."),
    ask("word-order", "Which is natural and short?", "コーヒーを のみます。", ["わたしは コーヒーを のみます を。", "のみます わたしは。"], "You can drop the topic."),
    ask("word-order", "Where do time words usually go?", "near the start", ["after the verb", "inside the verb"], "Time usually comes early.")
  ]
});
