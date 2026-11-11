// Genki I Grammar, point by point. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
// Every grammar point gets its own lesson. Chapters are added here in Genki order as they are finished.
import { ask } from "./quiz-tools.js";
import { particles } from "./genki1-particles.js";
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
const pick = (id, number) => ({ ...particles.find((l) => l.id === id), number });

const desu = lesson({
  id: "desu-copula", number: 2, title: "です: The Polite “Is / Am / Are”",
  summary: "Learn what です does, why it never changes, and how it finishes a polite sentence.",
  objective: "By the end you can make polite “A is B” sentences and you know exactly what です does.",
  teach: [
    T("The job of です", "です = is, am, are (and polite)",
      ["{です|desu} is the Japanese “is”, “am” and “are”. It sits at the end of a sentence and connects the topic to a description. It also makes the sentence polite.",
       "So {わたしは がくせい です|watashi wa gakusei desu} is “I am a student”, said politely."],
      [E("わたしは がくせい です。", "Watashi wa gakusei desu.", "I am a student.", "です"),
       E("ミカさんは こうこうせい です。", "Mika-san wa koukousei desu.", "Mika is a high school student.", "です")]),
    T("It never changes", "One form for everyone",
      ["In English the verb changes: I am, you are, he is, we are. In Japanese {です|desu} stays exactly the same, whoever you are talking about, and however many people there are.",
       "That makes it one of the easiest words in the language."],
      [E("わたしは がくせい です。", "Watashi wa gakusei desu.", "I am a student.", "です"),
       E("ミカさんは がくせい です。", "Mika-san wa gakusei desu.", "Mika is a student.", "です"),
       E("わたしたちは がくせい です。", "Watashitachi wa gakusei desu.", "We are students.", "です")]),
    T("です goes last", "です closes the sentence",
      ["{です|desu} goes at the very end. The word before it is the thing you are saying about the topic. If you add the question word {か|ka}, it comes after {です|desu}.",
       "So the order is: topic, {は|wa}, description, {です|desu}, and then {か|ka} if you are asking."],
      [E("ミカさんは こうこうせい です。", "Mika-san wa koukousei desu.", "Mika is a high school student.", "です"),
       E("ミカさんは こうこうせい ですか。", "Mika-san wa koukousei desu ka.", "Is Mika a high school student?", "です")]),
    T("Polite and casual", "です is the polite style",
      ["{です|desu} is the polite style. Between close friends Japanese often uses {だ|da} instead, which you will learn in the casual-speech lesson. Courses for beginners start with the polite style, because it is always safe with strangers, teachers and people you have just met.",
       "When in doubt, use {です|desu}."],
      [E("がくせい です。", "Gakusei desu.", "(I'm) a student. (polite)", "です"),
       E("がくせい だ。", "Gakusei da.", "(I'm) a student. (casual)", "だ")]),
    T("です after other words", "です can follow more than nouns",
      ["So far {です|desu} follows nouns. Later you will see it after adjectives too, as in {おいしい です|oishii desu}, it is delicious. The job stays the same: it finishes the sentence politely.",
       "Do not worry about that yet. Just notice that {です|desu} is a general polite ending."],
      [E("おいしい です。", "Oishii desu.", "It's delicious.", "です"),
       E("にほんじん です。", "Nihonjin desu.", "(I'm) Japanese.", "です")]),
    T("そうです and ちがいます", "That's right / That's wrong",
      ["Two phrases you will use all the time. {そうです|sou desu} means “that's right” or “that's so”. {ちがいます|chigaimasu} means “that's wrong” or “no, it is not”.",
       "They are short answers to yes and no questions."],
      [E("はい、そうです。", "Hai, sou desu.", "Yes, that's right.", "です"),
       E("いいえ、ちがいます。", "Iie, chigaimasu.", "No, that's wrong.", "")]),
    T("です is not used with verbs", "Verbs already have ます",
      ["Do not add {です|desu} after a verb. Verbs have their own polite ending, {ます|masu}. {たべます|tabemasu} is already polite, so {たべます です|tabemasu desu} is wrong.",
       "Use {です|desu} after nouns, and later after adjectives."],
      [E("たべます です。", "(wrong)", "Wrong: ます verbs do not take です.", "です", true),
       E("たべます。", "Tabemasu.", "Right: I eat.", "ます")]),
    T("Common mistakes", "Keep です at the end",
      ["Do not put {です|desu} in the middle of a sentence, and do not add {さん|san} to your own name before {です|desu}. You say {ミカ です|Mika desu}, not {ミカさん です|Mika-san desu}.",
       "Remember that {は|wa} marks the topic and {です|desu} ends the sentence. They are two different jobs."],
      [E("わたしは です がくせい。", "(wrong)", "Wrong: です must come last.", "です", true),
       E("わたしは ミカさん です。", "(wrong)", "Wrong: no さん for yourself.", "さん", true),
       E("わたしは ミカ です。", "Watashi wa Mika desu.", "Right: I'm Mika.", "です")],
      T0("Say: “Mika is a teacher.”", "ミカさんは せんせい です。", "Mika-san wa sensei desu.", "Mika is a teacher.", "です"))
  ],
  storyTitle: "The first day of class",
  story: [
    L("Mika", "おはよう ございます。わたしは ミカ です。", "Ohayou gozaimasu. Watashi wa Mika desu.", "Good morning. I'm Mika."),
    L("Alex", "おはよう ございます。アレックス です。", "Ohayou gozaimasu. Arekkusu desu.", "Good morning. I'm Alex."),
    L("Mika", "アレックスさんは だいがくせい ですか。", "Arekkusu-san wa daigakusei desu ka.", "Are you a university student, Alex?"),
    L("Alex", "はい、そうです。ミカさんは？", "Hai, sou desu. Mika-san wa?", "Yes, that's right. And you, Mika?"),
    L("Mika", "わたしは こうこうせい です。", "Watashi wa koukousei desu.", "I'm a high school student."),
    L("Alex", "あの ひとは せんせい ですか。", "Ano hito wa sensei desu ka.", "Is that person the teacher?"),
    L("Mika", "いいえ、ちがいます。がくせい です。", "Iie, chigaimasu. Gakusei desu.", "No, that's wrong. (He's) a student.")
  ],
  words: [
    W("おはよう ございます", "ohayou gozaimasu", "good morning"),
    W("がくせい", "gakusei", "student"),
    W("だいがくせい", "daigakusei", "university student"),
    W("こうこうせい", "koukousei", "high school student"),
    W("せんせい", "sensei", "teacher"),
    W("わたしたち", "watashitachi", "we, us"),
    W("そうです", "sou desu", "that's right"),
    W("ちがいます", "chigaimasu", "that's wrong, no")
  ],
  tips: [
    "です never changes: it is the same for I, you, he, she, we and they.",
    "です finishes polite sentences about nouns. Verbs use ます instead.",
    "Say ミカ です about yourself, never ミカさん です."
  ],
  quiz: [
    ask("desu-copula", "What does です mean?", "is / am / are (polite)", ["and", "also"], "です is the polite “is / am / are”."),
    ask("desu-copula", "Which sentence means “We are students”?", "わたしたちは がくせい です。", ["わたしたちは がくせい ですか。", "わたしたちは です がくせい。"], "です goes at the end."),
    ask("desu-copula", "Does です change for I, you and he?", "No, it stays the same.", ["Yes, it has three forms.", "Yes, it changes for plural."], "です is always です."),
    ask("desu-copula", "Which is wrong?", "たべます です。", ["がくせい です。", "せんせい です。"], "Verbs ending in ます do not take です."),
    ask("desu-copula", "What does ちがいます mean?", "That's wrong.", ["That's right.", "Nice to meet you."], "ちがいます says something is not correct.")
  ]
});

const kosoado = lesson({
  id: "kosoado", number: 5, title: "これ, それ, あれ: This and That",
  summary: "Learn the this / that / that-over-there words and the question word どれ.",
  objective: "By the end you can point at things, ask “what is this?” and say where things are.",
  teach: [
    T("The idea: distance", "ko = near me, so = near you, a = far from both",
      ["Japanese has three words for “this” and “that”, and the difference is distance. {これ|kore} is near me. {それ|sore} is near you. {あれ|are} is far from both of us.",
       "So it is not only about how far something is. It is about how far it is from the speaker and the listener."],
      [E("これは ほん です。", "Kore wa hon desu.", "This is a book. (near me)", "これ"),
       E("それは かばん です。", "Sore wa kaban desu.", "That is a bag. (near you)", "それ"),
       E("あれは がっこう です。", "Are wa gakkou desu.", "That over there is a school.", "あれ")]),
    T("The whole family", "こ / そ / あ / ど",
      ["These words come in families that start with {こ|ko}, {そ|so}, {あ|a} and {ど|do}. {ど|do} always means “which?”. The things family is {これ|kore}, {それ|sore}, {あれ|are}, {どれ|dore}.",
       "The same pattern gives you {この|kono} and {ここ|koko}. Once you know the four starting sounds, you know all the families."],
      [E("これ", "kore", "this one", "こ"),
       E("それ", "sore", "that one (near you)", "そ"),
       E("あれ", "are", "that one over there", "あ"),
       E("どれ", "dore", "which one?", "ど")]),
    T("これ, それ, あれ stand alone", "They replace a noun",
      ["{これ|kore}, {それ|sore} and {あれ|are} take the place of a noun. They stand alone, like “this” in English. You cannot put a noun straight after them.",
       "To ask what something is, use {なん|nan}: {これは なん ですか|kore wa nan desu ka}."],
      [E("これは なん ですか。", "Kore wa nan desu ka.", "What is this?", "これ"),
       E("それは たこやき です。", "Sore wa takoyaki desu.", "That is takoyaki.", "それ")]),
    T("この, その, あの before a noun", "この + noun",
      ["When you want “this book” or “that person”, use {この|kono}, {その|sono} and {あの|ano} directly before the noun. They never stand alone.",
       "So {この ほん|kono hon} is “this book”, and {あの ひと|ano hito} is “that person over there”."],
      [E("この ほん", "kono hon", "this book", "この"),
       E("その かばん", "sono kaban", "that bag (near you)", "その"),
       E("あの ひとは せんせい です。", "Ano hito wa sensei desu.", "That person over there is a teacher.", "あの")]),
    T("Places: ここ, そこ, あそこ", "Here, there, over there",
      ["The same pattern names places. {ここ|koko} is here, {そこ|soko} is there near you, {あそこ|asoko} is over there, and {どこ|doko} is where?",
       "These are useful for asking where things are, and for pointing someone to the toilet, the station or the exit."],
      [E("ここは がっこう です。", "Koko wa gakkou desu.", "This is a school. (here)", "ここ"),
       E("トイレは あそこ です。", "Toire wa asoko desu.", "The toilet is over there.", "あそこ"),
       E("としょかんは どこ ですか。", "Toshokan wa doko desu ka.", "Where is the library?", "どこ")]),
    T("Asking which: どれ and どの", "どれ = which one; どの + noun = which ...",
      ["When there are three or more things, ask {どれ|dore} for “which one?”. Before a noun, use {どの|dono}: {どの ほん|dono hon} is “which book?”.",
       "The answer uses {これ|kore}, {それ|sore} or {あれ|are}, or the {この|kono} family."],
      [E("ミカさんの かばんは どれ ですか。", "Mika-san no kaban wa dore desu ka.", "Which one is Mika's bag?", "どれ"),
       E("どの ひとが せんせい ですか。", "Dono hito ga sensei desu ka.", "Which person is the teacher?", "どの")]),
    T("Common mistakes", "これ + noun is wrong",
      ["Do not put a noun after {これ|kore}, {それ|sore} or {あれ|are}. Use {この|kono}, {その|sono}, {あの|ano} there. And do not leave {この|kono} alone without a noun.",
       "A simple rule: {これ|kore} replaces the noun, {この|kono} describes it."],
      [E("これ ほんは ミカさんの です。", "(wrong)", "Wrong: use この ほん for “this book”.", "これ", true),
       E("この は ほん です。", "(wrong)", "Wrong: この needs a noun after it.", "この", true),
       E("この ほんは ミカさんの ほん です。", "Kono hon wa Mika-san no hon desu.", "Right: This book is Mika's book.", "この")],
      T0("Say: “That (over there) is a school.”", "あれは がっこう です。", "Are wa gakkou desu.", "That over there is a school.", "あれ"))
  ],
  storyTitle: "At the school festival",
  story: [
    L("Alex", "すみません。これは なん ですか。", "Sumimasen. Kore wa nan desu ka.", "Excuse me. What is this?"),
    L("Mika", "それは たこやき です。", "Sore wa takoyaki desu.", "That is takoyaki."),
    L("Alex", "あの ひとは だれ ですか。", "Ano hito wa dare desu ka.", "Who is that person over there?"),
    L("Mika", "あの ひとは わたしの せんせい です。", "Ano hito wa watashi no sensei desu.", "That person is my teacher."),
    L("Alex", "トイレは どこ ですか。", "Toire wa doko desu ka.", "Where is the toilet?"),
    L("Mika", "あそこ です。", "Asoko desu.", "It's over there."),
    L("Alex", "ありがとう ございます。", "Arigatou gozaimasu.", "Thank you very much.")
  ],
  words: [
    W("これ / それ / あれ / どれ", "kore / sore / are / dore", "this / that / that over there / which"),
    W("この / その / あの / どの", "kono / sono / ano / dono", "this ... / that ... / that ... over there / which ..."),
    W("ここ / そこ / あそこ / どこ", "koko / soko / asoko / doko", "here / there / over there / where"),
    W("たこやき", "takoyaki", "takoyaki, octopus balls"),
    W("トイレ", "toire", "toilet"),
    W("ひと", "hito", "person"),
    W("すみません", "sumimasen", "excuse me, sorry"),
    W("ありがとう ございます", "arigatou gozaimasu", "thank you very much")
  ],
  tips: [
    "Ko is near me, so is near you, a is far from both, and do means which.",
    "これ stands alone; この always needs a noun after it.",
    "ここ, そこ, あそこ and どこ are places, and they follow the same four sounds."
  ],
  quiz: [
    ask("kosoado", "Which word means “that one over there”?", "あれ", ["これ", "それ"], "あれ is far from both speaker and listener."),
    ask("kosoado", "How do you say “this book”?", "この ほん", ["これ ほん", "ここ ほん"], "この comes right before the noun."),
    ask("kosoado", "Which word means “which one?”", "どれ", ["どこ", "だれ"], "どれ asks which one among several."),
    ask("kosoado", "What does あそこ mean?", "over there", ["right here", "which place"], "あそこ is the far place."),
    ask("kosoado", "Which sentence asks “Where is the library?”", "としょかんは どこ ですか。", ["としょかんは どれ ですか。", "としょかんは だれ ですか。"], "どこ asks about places.")
  ]
});

const janai = lesson({
  id: "janai-negative", number: 7, title: "じゃ ありません: Saying “Is Not”",
  summary: "Learn the polite negative of です and how to answer “no”.",
  objective: "By the end you can say “A is not B” politely and answer no to a question.",
  teach: [
    T("The idea: negative です", "じゃ ありません = is not",
      ["The negative of {です|desu} is {じゃ ありません|ja arimasen}. It means “is not”, “am not” or “are not”. You put it after the noun, in the same place as {です|desu}.",
       "Like {です|desu}, it never changes for I, you or he."],
      [E("わたしは がくせい です。", "Watashi wa gakusei desu.", "I am a student.", "です"),
       E("わたしは がくせい じゃ ありません。", "Watashi wa gakusei ja arimasen.", "I am not a student.", "じゃ ありません")]),
    T("Pattern", "Noun + じゃ ありません",
      ["The pattern is simple: noun, then {じゃ ありません|ja arimasen}. Take the sentence with {です|desu} and replace {です|desu} with {じゃ ありません|ja arimasen}.",
       "{アレックスさんは にほんじん じゃ ありません|Arekkusu-san wa nihonjin ja arimasen}: Alex is not Japanese."],
      [E("アレックスさんは にほんじん じゃ ありません。", "Arekkusu-san wa nihonjin ja arimasen.", "Alex is not Japanese.", "じゃ ありません"),
       E("せんせいは アメリカじん じゃ ありません。", "Sensei wa Amerikajin ja arimasen.", "The teacher is not American.", "じゃ ありません")]),
    T("Two more forms", "ではありません and じゃ ないです",
      ["You will meet two other forms. {では ありません|dewa arimasen} is the same thing in a more formal style, often in writing. {じゃ ないです|ja nai desu} is a softer everyday version, used a lot in speech.",
       "All three mean “is not”. As a beginner, {じゃ ありません|ja arimasen} is the one to learn first."],
      [E("がくせい じゃ ありません。", "Gakusei ja arimasen.", "(I'm) not a student.", "じゃ ありません"),
       E("がくせい では ありません。", "Gakusei dewa arimasen.", "(I'm) not a student. (formal)", "では ありません"),
       E("がくせい じゃ ないです。", "Gakusei ja nai desu.", "(I'm) not a student. (softer)", "じゃ ないです")]),
    T("Answering no", "いいえ + the negative",
      ["When you answer a question with “no”, say {いいえ|iie} and then the negative sentence. You can add the correct information after it.",
       "A short “no, that's wrong” is {いいえ、ちがいます|iie, chigaimasu}."],
      [E("いいえ、がくせい じゃ ありません。", "Iie, gakusei ja arimasen.", "No, (I'm) not a student.", "じゃ ありません"),
       E("いいえ、ちがいます。せんせい です。", "Iie, chigaimasu. Sensei desu.", "No, that's wrong. (He's) a teacher.", "")]),
    T("も with the negative", "Neither, not either",
      ["You can use {も|mo} with the negative to say “not ... either”. If Mika is not a teacher, and Alex is not a teacher either, you say {アレックスさんも せんせい じゃ ありません|Arekkusu-san mo sensei ja arimasen}.",
       "The pattern is the same as before: topic, {も|mo}, description."],
      [E("ミカさんは せんせい じゃ ありません。", "Mika-san wa sensei ja arimasen.", "Mika is not a teacher.", "じゃ ありません"),
       E("アレックスさんも せんせい じゃ ありません。", "Arekkusu-san mo sensei ja arimasen.", "Alex is not a teacher either.", "も")]),
    T("Negative questions", "はい agrees with the statement",
      ["You can ask a negative question: {がくせい じゃ ありませんか|gakusei ja arimasen ka}, “Aren't you a student?”. Be careful with the answer. In Japanese, {はい|hai} means “that's right”, and it agrees with what you actually are.",
       "So if you are not a student, you say {はい、がくせい じゃ ありません|hai, gakusei ja arimasen}: yes, that is right, I am not a student. In English you would say “no”."],
      [E("がくせい じゃ ありませんか。", "Gakusei ja arimasen ka.", "Aren't you a student?", "じゃ ありません"),
       E("はい、がくせい じゃ ありません。", "Hai, gakusei ja arimasen.", "That's right, I'm not a student.", "")]),
    T("Common mistakes", "Do not forget じゃ, and do not mix with です",
      ["Do not say {がくせい ありません|gakusei arimasen} without {じゃ|ja}. And do not combine {じゃ|ja} with {です|desu}: {がくせい じゃ です|gakusei ja desu} is wrong.",
       "The negative replaces {です|desu}. It does not sit next to it."],
      [E("がくせい ありません。", "(wrong)", "Wrong: じゃ is missing.", "ありません", true),
       E("がくせい じゃ です。", "(wrong)", "Wrong: do not combine with です.", "です", true),
       E("がくせい じゃ ありません。", "Gakusei ja arimasen.", "Right: (I'm) not a student.", "じゃ ありません")],
      T0("Say: “Alex is not Japanese.”", "アレックスさんは にほんじん じゃ ありません。", "Arekkusu-san wa nihonjin ja arimasen.", "Alex is not Japanese.", "じゃ ありません"))
  ],
  storyTitle: "Who is the teacher?",
  story: [
    L("Alex", "あの ひとは せんせい ですか。", "Ano hito wa sensei desu ka.", "Is that person a teacher?"),
    L("Mika", "いいえ、せんせい じゃ ありません。がくせい です。", "Iie, sensei ja arimasen. Gakusei desu.", "No, (he's) not a teacher. (He's) a student."),
    L("Alex", "にほんじん ですか。", "Nihonjin desu ka.", "Is he Japanese?"),
    L("Mika", "いいえ、にほんじん じゃ ありません。かんこくじん です。", "Iie, nihonjin ja arimasen. Kankokujin desu.", "No, he's not Japanese. He's Korean."),
    L("Alex", "そうですか。ミカさんも かんこくじん ですか。", "Sou desu ka. Mika-san mo kankokujin desu ka.", "I see. Are you Korean too, Mika?"),
    L("Mika", "いいえ、わたしは かんこくじん じゃ ありません。にほんじん です。", "Iie, watashi wa kankokujin ja arimasen. Nihonjin desu.", "No, I'm not Korean. I'm Japanese.")
  ],
  words: [
    W("じゃ ありません", "ja arimasen", "is not, am not, are not"),
    W("では ありません", "dewa arimasen", "is not (formal)"),
    W("じゃ ないです", "ja nai desu", "is not (softer, spoken)"),
    W("いいえ", "iie", "no"),
    W("かんこくじん", "kankokujin", "Korean person"),
    W("アメリカじん", "Amerikajin", "American person"),
    W("にほんじん", "nihonjin", "Japanese person"),
    W("そうですか", "sou desu ka", "I see, is that so?")
  ],
  tips: [
    "じゃ ありません replaces です; it does not sit next to it.",
    "じゃ ないです is softer and very common in speech.",
    "In a negative question, はい means “that's right”, not “yes, I am”."
  ],
  quiz: [
    ask("janai-negative", "How do you say “I am not a student” politely?", "がくせい じゃ ありません。", ["がくせい じゃ です。", "がくせい ありません。"], "じゃ ありません is the polite negative."),
    ask("janai-negative", "Which form is softer and common in speech?", "じゃ ないです", ["ではありません", "じゃ です"], "じゃ ないです is the softer spoken form."),
    ask("janai-negative", "Alex is not a teacher either. Which fits?", "アレックスさんも せんせい じゃ ありません。", ["アレックスさんは も せんせい です。", "アレックスさんも せんせい です。"], "も + negative means “not ... either”."),
    ask("janai-negative", "Which is wrong?", "がくせい じゃ です。", ["がくせい じゃ ありません。", "がくせい では ありません。"], "The negative replaces です."),
    ask("janai-negative", "How do you say “no, that's wrong”?", "いいえ、ちがいます。", ["はい、そうです。", "はい、ちがいます。"], "いいえ is no.")
  ]
});

const ne = lesson({
  id: "particle-ne", number: 8, title: "ね: Looking for Agreement",
  summary: "Use ね to say “right?” or “isn't it”, and to share feelings.",
  objective: "By the end you can check information and sound friendly with ね.",
  teach: [
    T("What ね does", "ね = “right?” / “isn't it?”",
      ["{ね|ne} goes at the end of a sentence. It asks the listener to agree, or it shares a feeling. It is like “right?”, “isn't it?” or “huh”.",
       "It makes you sound friendly, because you are inviting the listener to share your view."],
      [E("ミカさんは こうこうせい ですね。", "Mika-san wa koukousei desu ne.", "You're a high school student, aren't you?", "ね")]),
    T("Two uses", "Checking and sharing",
      ["There are two main uses. When your voice rises, {ね|ne} checks information: “you are a student, right?”. When your voice falls, {ね|ne} shares a feeling: “that's good, isn't it”, expecting a nod.",
       "In both cases, you expect the listener to say {はい|hai} or agree."],
      [E("そうですね。", "Sou desu ne.", "That's right. / Indeed.", "ね"),
       E("ミカさんは こうこうせい ですね。", "Mika-san wa koukousei desu ne.", "You're a high school student, aren't you? (checking)", "ね")]),
    T("Where ね goes", "At the very end",
      ["Put {ね|ne} at the end, after {です|desu} or {ます|masu}. It comes in the same place as {か|ka}, but it does not turn the sentence into a question for new information.",
       "You can also put {ね|ne} after short phrases, but for now, keep it at the end."],
      [E("あした いきますね。", "Ashita ikimasu ne.", "You're going tomorrow, aren't you?", "ね"),
       E("にほんじん ですね。", "Nihonjin desu ne.", "(You're) Japanese, aren't you?", "ね")]),
    T("ね sounds friendly", "Without ね, it can sound blunt",
      ["Compare {がくせい です|gakusei desu} and {がくせい ですね|gakusei desu ne}. The first is a plain statement. The second invites the listener to agree, and it feels warmer.",
       "Japanese speakers add {ね|ne} constantly, to keep the conversation smooth."],
      [E("がくせい です。", "Gakusei desu.", "(I'm) a student.", ""),
       E("がくせい ですね。", "Gakusei desu ne.", "(You're) a student, aren't you?", "ね")]),
    T("そうですね", "A very useful reply",
      ["{そうですね|sou desu ne} means “that's right” or “indeed”. It also works as “let me see”, when you are thinking about your answer. It is one of the most common replies in Japanese.",
       "Say it with a falling voice when you agree."],
      [E("はい、そうですね。", "Hai, sou desu ne.", "Yes, that's right.", "ね"),
       E("そうですね。", "Sou desu ne.", "Let me see. / That's so.", "ね")]),
    T("ね or か?", "か asks to find out. ね asks to agree.",
      ["{か|ka} asks a real question: you do not know the answer. {ね|ne} asks for agreement: you think you know the answer and want confirmation.",
       "{ミカさんは がくせい ですか|Mika-san wa gakusei desu ka} asks “Is Mika a student?”. {ミカさんは がくせい ですね|Mika-san wa gakusei desu ne} says “Mika is a student, isn't she?”."],
      [E("ミカさんは がくせい ですか。", "Mika-san wa gakusei desu ka.", "Is Mika a student? (I don't know)", "か"),
       E("ミカさんは がくせい ですね。", "Mika-san wa gakusei desu ne.", "Mika is a student, isn't she? (I think so)", "ね")],
      T0("Say: “You're Japanese, aren't you?”", "にほんじん ですね。", "Nihonjin desu ne.", "You're Japanese, aren't you?", "ね"))
  ],
  storyTitle: "Same class, same bus",
  story: [
    L("Alex", "ミカさんは こうこうせい ですね。", "Mika-san wa koukousei desu ne.", "You're a high school student, aren't you, Mika?"),
    L("Mika", "はい、そうです。アレックスさんは だいがくせい ですね。", "Hai, sou desu. Arekkusu-san wa daigakusei desu ne.", "Yes, that's right. You're a university student, aren't you, Alex?"),
    L("Alex", "はい、そうです。にほんごの クラスは たのしい ですね。", "Hai, sou desu. Nihongo no kurasu wa tanoshii desu ne.", "Yes. The Japanese class is fun, isn't it?"),
    L("Mika", "そうですね。せんせいも いい ひと ですね。", "Sou desu ne. Sensei mo ii hito desu ne.", "It is. The teacher is a nice person too, isn't she?"),
    L("Alex", "はい、ほんとうに。", "Hai, hontou ni.", "Yes, really.")
  ],
  words: [
    W("たのしい", "tanoshii", "fun, enjoyable"),
    W("いい ひと", "ii hito", "a nice person"),
    W("ほんとうに", "hontou ni", "really"),
    W("クラス", "kurasu", "class"),
    W("そうですね", "sou desu ne", "that's right, indeed")
  ],
  tips: [
    "ね asks for agreement; か asks for new information.",
    "Rising ね checks; falling ね shares a feeling.",
    "Adding ね makes you sound warmer and more natural."
  ],
  quiz: [
    ask("particle-ne", "What does ね add to a sentence?", "asks the listener to agree", ["marks the topic", "marks the object"], "ね looks for agreement."),
    ask("particle-ne", "Which means “You're Japanese, aren't you?”", "にほんじん ですね。", ["にほんじん ですか。", "にほんじん です。"], "ね expects agreement."),
    ask("particle-ne", "Which asks a real question (you don't know)?", "がくせい ですか。", ["がくせい ですね。", "がくせい です。"], "か is for new information."),
    ask("particle-ne", "What does そうですね often mean?", "That's right / indeed", ["I don't know", "Excuse me"], "そうですね agrees or buys thinking time."),
    ask("particle-ne", "Where does ね go?", "at the end of the sentence", ["after the topic only", "before the verb"], "At the end, like か.")
  ]
});

const yo = lesson({
  id: "particle-yo", number: 9, title: "よ: Telling Something New",
  summary: "Use よ to give information the listener may not know, and see how it differs from ね.",
  objective: "By the end you can share information with よ and combine it as よね.",
  teach: [
    T("What よ does", "よ = “you know” / “I'm telling you”",
      ["{よ|yo} goes at the end of a sentence. It tells the listener something they may not know, or gives emphasis. It is like “you know” or “I'm telling you”.",
       "{ミカさんは にほんじん ですよ|Mika-san wa nihonjin desu yo} means “Mika is Japanese, you know”."],
      [E("ミカさんは にほんじん ですよ。", "Mika-san wa nihonjin desu yo.", "Mika is Japanese, you know.", "よ")]),
    T("ね vs よ", "ね: we both know. よ: I know and you may not.",
      ["The difference is who knows. {ね|ne} says “we both know this, right?”. {よ|yo} says “I know this, and I think you may not”.",
       "Use {ね|ne} to agree, and {よ|yo} to inform."],
      [E("にほんじん ですね。", "Nihonjin desu ne.", "(You're) Japanese, aren't you? (agree)", "ね"),
       E("にほんじん ですよ。", "Nihonjin desu yo.", "(He's) Japanese, you know. (inform)", "よ")]),
    T("Friendly notices", "Giving useful information",
      ["{よ|yo} is great for friendly notices: “there's a test tomorrow, you know”, “this is the toilet, you know”. You are telling someone something you think they would want to know.",
       "It keeps the tone light and helpful."],
      [E("あした テストが ありますよ。", "Ashita tesuto ga arimasu yo.", "There's a test tomorrow, you know.", "よ"),
       E("トイレは あそこ ですよ。", "Toire wa asoko desu yo.", "The toilet is over there, you know.", "よ")]),
    T("Do not overuse よ", "It can sound pushy",
      ["{よ|yo} puts weight on your information. Used too often, or with information the listener should already know, it can sound pushy, or like you are lecturing.",
       "With a teacher or someone older, use it carefully, and soften with a polite tone."],
      [E("ここは がっこう ですよ。", "Koko wa gakkou desu yo.", "This is a school, you know. (could sound pushy)", "よ")]),
    T("よね", "Both together: “right?” with confidence",
      ["You can combine them: {よね|yo ne}. It means “it is so, right?”: you believe something and ask for confirmation, a little more strongly than {ね|ne} alone.",
       "{にほんじん ですよね|nihonjin desu yo ne}: “(You're) Japanese, right?”."],
      [E("にほんじん ですよね。", "Nihonjin desu yo ne.", "(You're) Japanese, right?", "よね"),
       E("はい、そうです。", "Hai, sou desu.", "Yes, that's right.", "")],
      T0("Say: “The toilet is over there, you know.”", "トイレは あそこ ですよ。", "Toire wa asoko desu yo.", "The toilet is over there, you know.", "よ"))
  ],
  storyTitle: "News before class",
  story: [
    L("Mika", "アレックスさん、あした テストが ありますよ。", "Arekkusu-san, ashita tesuto ga arimasu yo.", "Alex, there's a test tomorrow, you know."),
    L("Alex", "えっ、そうですか。しりませんでした。", "E, sou desu ka. Shirimasen deshita.", "Oh, is that so? I didn't know."),
    L("Mika", "ひるごはんの あとに ありますよ。", "Hirugohan no ato ni arimasu yo.", "It's after lunch, you know."),
    L("Alex", "ありがとう。ミカさんは しんせつ ですね。", "Arigatou. Mika-san wa shinsetsu desu ne.", "Thanks. You're kind, aren't you, Mika?"),
    L("Mika", "いいえ、ともだち ですよ。", "Iie, tomodachi desu yo.", "No, we're friends, you know.")
  ],
  words: [
    W("テスト", "tesuto", "test"),
    W("ひるごはん", "hirugohan", "lunch"),
    W("～の あと", "-no ato", "after ..."),
    W("しんせつ", "shinsetsu", "kind"),
    W("しりませんでした", "shirimasen deshita", "I didn't know"),
    W("えっ", "e", "oh! (surprise)")
  ],
  tips: [
    "よ gives new information; ね asks for agreement.",
    "Too many よ can sound pushy, so use it for helpful notices.",
    "よね means “right?”, said with some confidence."
  ],
  quiz: [
    ask("particle-yo", "What does よ add?", "gives information the listener may not know", ["asks a question", "marks the topic"], "よ tells or emphasises."),
    ask("particle-yo", "Which says “I know, you may not”?", "にほんじん ですよ。", ["にほんじん ですね。", "にほんじん ですか。"], "よ informs."),
    ask("particle-yo", "Which one looks for agreement?", "にほんじん ですね。", ["にほんじん ですよ。", "にほんじん です。"], "ね checks agreement."),
    ask("particle-yo", "What does よね mean?", "“right?” with confidence", ["“I don't know”", "“thank you”"], "よね combines telling and checking."),
    ask("particle-yo", "Why avoid overusing よ?", "it can sound pushy", ["it is rude only to friends", "it is always wrong"], "Too much emphasis can feel lecturing.")
  ]
});

export const genki1Grammar = [
  pick("particle-wa", 1), desu, pick("particle-ka", 3), pick("particle-no", 4),
  kosoado, pick("particle-mo", 6), janai, ne, yo
];
