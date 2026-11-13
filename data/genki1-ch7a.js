// Genki I Grammar, chapter 7 (part 1): casual verbs. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const plainPresent = lesson({
  id: "plain-present", number: 50, title: "Casual Speech: The Dictionary Form",
  summary: "Learn what casual (plain) speech is and use the dictionary form of verbs as the casual present.",
  objective: "By the end you can say casual sentences like たべる and いく and know when casual speech is appropriate.",
  teach: [
    T("The idea", "Polite and plain",
      ["So far everything has been in the polite style, with {です|desu} and {ます|masu}. Japanese also has a plain, casual style used with family, close friends and in thoughts. Learning it is essential, because anime, songs and everyday conversation use it all the time.",
       "The plain form of a verb is just the dictionary form that you already know."],
      [E("たべます → たべる", "tabemasu → taberu", "eat (polite → casual)", "たべる"),
       E("いきます → いく", "ikimasu → iku", "go (polite → casual)", "いく")]),
    T("The dictionary form", "The plain present",
      ["The dictionary form is the plain present and future form. {たべる|taberu} means “eat” or “will eat”. {のむ|nomu} means “drink” or “will drink”. {する|suru} means “do”. {くる|kuru} means “come”.",
       "The meaning is the same as the {ます|masu} form. Only the style changes."],
      [E("あした いく。", "Ashita iku.", "(I) will go tomorrow.", "いく"),
       E("まいにち のむ。", "Mainichi nomu.", "(I) drink every day.", "のむ"),
       E("みる？", "Miru?", "Will you watch it?", "みる")]),
    T("Questions", "Rising tone instead of か",
      ["In casual speech you usually drop {か|ka} and raise your voice at the end. {たべる？|taberu} means “do you eat?”. In writing, a question mark shows that.",
       "Friends might also add {の|no}: {いくの？|iku no} sounds soft and friendly."],
      [E("たべる？", "Taberu?", "Will you eat?", "たべる"),
       E("いっしょに いく？", "Issho ni iku?", "Will you go together?", "いく"),
       E("なに たべる？", "Nani taberu?", "What will you eat?", "たべる")]),
    T("Dropping particles", "は, を and が often disappear",
      ["In casual speech, {を|o}, {は|wa} and {が|ga} are often left out. {ごはん たべる？|gohan taberu} sounds natural, with {を|o} removed. Particles of place, such as {に|ni}, {で|de}, {へ|e}, usually stay.",
       "Do not drop particles in writing or in polite speech."],
      [E("ごはん たべる？", "Gohan taberu?", "Will you eat?", "たべる"),
       E("がっこうに いく。", "Gakkou ni iku.", "(I) go to school.", "いく"),
       E("テレビ みる？", "Terebi miru?", "Will you watch TV?", "みる")]),
    T("When to use it", "Know your listener",
      ["Use casual speech with family, close friends and people younger than you. Do not use it with a teacher, a boss, a shop assistant or someone you have just met. It can sound rude.",
       "If in doubt, stay polite. It is better to be too polite than too casual."],
      [E("せんせい、たべますか。", "Sensei, tabemasu ka.", "Teacher, will you eat? (polite)", "たべますか"),
       E("ミカ、たべる？", "Mika, taberu?", "Mika, will you eat? (casual)", "たべる")]),
    T("Common mistakes", "Do not mix styles",
      ["Do not mix polite and casual in the same sentence: {たべる です|taberu desu} is wrong for a verb. And do not use casual speech to your teacher or customer.",
       "Choose one style for the whole conversation."],
      [E("たべる です。", "(wrong)", "Wrong: do not add です to a verb.", "です", true),
       E("たべる ます。", "(wrong)", "Wrong: do not mix る and ます.", "ます", true),
       E("たべる。", "Taberu.", "Right: (I) eat.", "たべる")],
      T0("Say casually: “Will you go?”", "いく？", "Iku?", "Will you go?", "いく"))
  ],
  storyTitle: "Between friends",
  story: [
    L("Mika", "アレックス、あした ひま？", "Arekkusu, ashita hima?", "Alex, are you free tomorrow?"),
    L("Alex", "うん、ひま。なに する？", "Un, hima. Nani suru?", "Yeah, I'm free. What shall we do?"),
    L("Mika", "えいが みる？", "Eiga miru?", "Want to watch a movie?"),
    L("Alex", "いいね。なに みる？", "Ii ne. Nani miru?", "Sounds good. What shall we watch?"),
    L("Mika", "アニメ みる。", "Anime miru.", "Let's watch anime."),
    L("Alex", "うん、いく。", "Un, iku.", "Yeah, I'll go.")
  ],
  words: [
    W("たべる", "taberu", "eat (plain)"),
    W("いく", "iku", "go (plain)"),
    W("のむ", "nomu", "drink (plain)"),
    W("みる", "miru", "see, watch (plain)"),
    W("する", "suru", "do (plain)"),
    W("うん", "un", "yeah (casual yes)"),
    W("ううん", "uun", "nope (casual no)"),
    W("ひま", "hima", "free")
  ],
  tips: [
    "Plain present is the dictionary form: taberu, iku, nomu.",
    "Questions use a rising tone, no ka.",
    "Use casual speech only with close people."
  ],
  quiz: [
    ask("plain-present", "What is the plain form of たべます?", "たべる", ["たべて", "たべた"], "The dictionary form."),
    ask("plain-present", "How do you ask “Will you go?” casually?", "いく？", ["いきますか。", "いくです。"], "Dictionary form + rising tone."),
    ask("plain-present", "Which particle is often dropped in casual speech?", "を", ["に", "で"], "を is often dropped."),
    ask("plain-present", "Who can you use casual speech with?", "close friends", ["your teacher", "a customer"], "Close people only."),
    ask("plain-present", "Which is wrong?", "たべる です。", ["たべる。", "たべる？"], "No です after a verb.")
  ]
});

export const plainNegative = lesson({
  id: "plain-negative", number: 51, title: "Casual Negative: ～ない",
  summary: "Make the casual negative of every verb type with ない.",
  objective: "By the end you can say “don't eat”, “won't go” and “don't do” in casual style.",
  teach: [
    T("The idea", "ない means not",
      ["The plain negative ends in {ない|nai}. It is the casual version of {ません|masen}. {たべない|tabenai} means “don't eat” or “won't eat”.",
       "How you make it depends on the verb group."],
      [E("たべます → たべない", "tabemasu → tabenai", "eat → don't eat", "ない"),
       E("いきます → いかない", "ikimasu → ikanai", "go → don't go", "ない")]),
    T("Ichidan verbs", "Drop る, add ない",
      ["For an ichidan verb, drop {る|ru} and add {ない|nai}. {たべる|taberu} becomes {たべない|tabenai}. {みる|miru} becomes {みない|minai}. {ねる|neru} becomes {ねない|nenai}.",
       "This is the easiest group."],
      [E("たべる → たべない", "taberu → tabenai", "eat", "ない"),
       E("みる → みない", "miru → minai", "see", "ない"),
       E("おきる → おきない", "okiru → okinai", "wake up", "ない")]),
    T("Godan verbs", "Change the last sound to あ, add ない",
      ["For a godan verb, change the last sound to its {あ|a} row and add {ない|nai}. {いく|iku} becomes {いかない|ikanai}. {のむ|nomu} becomes {のまない|nomanai}. {はなす|hanasu} becomes {はなさない|hanasanai}. {かく|kaku} becomes {かかない|kakanai}.",
       "Think of it as: the last kana moves to the {あ|a} column."],
      [E("いく → いかない", "iku → ikanai", "go", "ない"),
       E("のむ → のまない", "nomu → nomanai", "drink", "ない"),
       E("はなす → はなさない", "hanasu → hanasanai", "speak", "ない"),
       E("まつ → またない", "matsu → matanai", "wait", "ない")]),
    T("The う ending", "う becomes わ",
      ["Verbs ending in {う|u} change to {わ|wa}, not {あ|a}. {かう|kau} becomes {かわない|kawanai}. {あう|au} becomes {あわない|awanai}. {いう|iu} becomes {いわない|iwanai}.",
       "This is one small exception to the {あ|a}-column rule."],
      [E("かう → かわない", "kau → kawanai", "buy", "かわない"),
       E("あう → あわない", "au → awanai", "meet", "あわない"),
       E("いう → いわない", "iu → iwanai", "say", "いわない")]),
    T("Irregular verbs", "しない, こない, ない",
      ["{する|suru} becomes {しない|shinai}. {くる|kuru} becomes {こない|konai}. And {ある|aru}, to exist, becomes just {ない|nai}, not {あらない|aranai}.",
       "These three are worth memorising."],
      [E("する → しない", "suru → shinai", "do", "しない"),
       E("くる → こない", "kuru → konai", "come", "こない"),
       E("ある → ない", "aru → nai", "exist", "ない")]),
    T("Common mistakes", "Do not forget the exceptions",
      ["Do not say {かあない|kaanai} or {あらない|aranai}. And do not use {くない|kunai} for verbs; {くない|kunai} is for {い|i}-adjectives.",
       "Always check whether the verb ends in {う|u}."],
      [E("かう → かあない", "(wrong)", "Wrong: う becomes わ.", "かあない", true),
       E("ある → あらない", "(wrong)", "Wrong: the negative of ある is ない.", "あらない", true),
       E("かう → かわない", "kau → kawanai", "Right: don't buy.", "かわない")],
      T0("Say: “I won't go.”", "いかない。", "Ikanai.", "I won't go.", "いかない"))
  ],
  storyTitle: "No thanks",
  story: [
    L("Mika", "コーヒー のむ？", "Koohii nomu?", "Want some coffee?"),
    L("Alex", "ううん、のまない。", "Uun, nomanai.", "No, I won't drink it."),
    L("Mika", "どうして？", "Doushite?", "Why?"),
    L("Alex", "よる ねない から。", "Yoru nenai kara.", "Because I can't sleep at night."),
    L("Mika", "じゃ、おちゃは？", "Ja, ocha wa?", "Then how about tea?"),
    L("Alex", "うん、のむ。", "Un, nomu.", "Yeah, I'll drink that.")
  ],
  words: [
    W("ない", "nai", "not (plain)"),
    W("たべない", "tabenai", "don't eat"),
    W("いかない", "ikanai", "don't go"),
    W("かわない", "kawanai", "don't buy"),
    W("こない", "konai", "don't come"),
    W("しない", "shinai", "don't do"),
    W("どうして", "doushite", "why"),
    W("おちゃ", "ocha", "tea")
  ],
  tips: [
    "Ichidan: drop ru, add nai.",
    "Godan: change the last sound to the a row, then nai; u becomes wa.",
    "Suru is shinai, kuru is konai, aru is nai."
  ],
  quiz: [
    ask("plain-negative", "What is the plain negative of たべる?", "たべない", ["たべらない", "たべなくない"], "Drop る, add ない."),
    ask("plain-negative", "What is the plain negative of のむ?", "のまない", ["のむない", "のめない"], "む → ま."),
    ask("plain-negative", "What is the plain negative of かう?", "かわない", ["かあない", "かうない"], "う → わ."),
    ask("plain-negative", "What is the plain negative of くる?", "こない", ["きない", "くない"], "くる → こない."),
    ask("plain-negative", "What is the plain negative of ある?", "ない", ["あらない", "ありない"], "ある → ない.")
  ]
});

export const plainPast = lesson({
  id: "plain-past", number: 52, title: "Casual Past: ～た and ～なかった",
  summary: "Make the casual past of every verb with た and the negative past with なかった.",
  objective: "By the end you can say “ate”, “went”, “didn't eat” and “didn't go” casually.",
  teach: [
    T("The idea", "た replaces て",
      ["The plain past, the {た|ta}-form, is made exactly like the {て|te}-form, but with {た|ta} where the {て|te}-form has {て|te}, and {だ|da} where it has {で|de}. {たべて|tabete} becomes {たべた|tabeta}. {のんで|nonde} becomes {のんだ|nonda}.",
       "So you do not need to learn a new set of rules. Just change the ending."],
      [E("たべて → たべた", "tabete → tabeta", "ate", "た"),
       E("のんで → のんだ", "nonde → nonda", "drank", "だ")]),
    T("Ichidan and irregular", "たべた, みた, した, きた",
      ["Ichidan: drop {る|ru}, add {た|ta}. {たべる|taberu} becomes {たべた|tabeta}. Irregular: {する|suru} becomes {した|shita}, and {くる|kuru} becomes {きた|kita}.",
       "These are the same as the {て|te}-form patterns."],
      [E("たべる → たべた", "taberu → tabeta", "ate", "た"),
       E("みる → みた", "miru → mita", "saw", "た"),
       E("する → した", "suru → shita", "did", "した"),
       E("くる → きた", "kuru → kita", "came", "きた")]),
    T("Godan verbs", "って → った, んで → んだ, いて → いた",
      ["Godan verbs follow the same rule as the {て|te}-form. {かう|kau} becomes {かった|katta}. {のむ|nomu} becomes {のんだ|nonda}. {かく|kaku} becomes {かいた|kaita}. {はなす|hanasu} becomes {はなした|hanashita}. {いく|iku} becomes {いった|itta}.",
       "Just replace the last {て|te} or {で|de} with {た|ta} or {だ|da}."],
      [E("かう → かった", "kau → katta", "bought", "かった"),
       E("のむ → のんだ", "nomu → nonda", "drank", "のんだ"),
       E("かく → かいた", "kaku → kaita", "wrote", "かいた"),
       E("いく → いった", "iku → itta", "went", "いった")]),
    T("The negative past", "なかった",
      ["For the negative past, take the plain negative {ない|nai} and change it to {なかった|nakatta}. {たべない|tabenai} becomes {たべなかった|tabenakatta}. {いかない|ikanai} becomes {いかなかった|ikanakatta}.",
       "This is just like the {い|i}-adjective rule you learned in the adjective lessons."],
      [E("たべなかった。", "Tabenakatta.", "(I) didn't eat.", "なかった"),
       E("いかなかった。", "Ikanakatta.", "(I) didn't go.", "なかった"),
       E("しなかった。", "Shinakatta.", "(I) didn't do it.", "なかった")]),
    T("Questions", "Casual past questions",
      ["Ask with rising tone: {たべた？|tabeta} means “did you eat?”. Answer with {うん、たべた|un, tabeta} or {ううん、たべなかった|uun, tabenakatta}.",
       "In casual speech, {うん|un} is yes and {ううん|uun} is no."],
      [E("きのう なに した？", "Kinou nani shita?", "What did you do yesterday?", "した"),
       E("ごはん たべた？", "Gohan tabeta?", "Did you eat?", "たべた"),
       E("ううん、たべなかった。", "Uun, tabenakatta.", "No, I didn't eat.", "なかった")]),
    T("Common mistakes", "Do not mix", 
      ["Do not use {た|ta} with {ます|masu}: {たべますた|tabemasuta} is wrong. And do not say {たべなかった です|tabenakatta desu} in careful speech; add {です|desu} only to adjectives in polite style.",
       "Keep casual forms casual."],
      [E("たべますた。", "(wrong)", "Wrong: use たべた.", "ますた", true),
       E("かうた。", "(wrong)", "Wrong: かう becomes かった.", "かうた", true),
       E("たべた。", "Tabeta.", "Right: (I) ate.", "た")],
      T0("Say: “I didn't go.”", "いかなかった。", "Ikanakatta.", "I didn't go.", "なかった"))
  ],
  storyTitle: "What did you do?",
  story: [
    L("Mika", "きのう なに した？", "Kinou nani shita?", "What did you do yesterday?"),
    L("Alex", "うちで ゲーム した。", "Uchi de geemu shita.", "I played games at home."),
    L("Mika", "そと いった？", "Soto itta?", "Did you go out?"),
    L("Alex", "ううん、いかなかった。", "Uun, ikanakatta.", "No, I didn't go."),
    L("Mika", "ごはんは？", "Gohan wa?", "And dinner?"),
    L("Alex", "ラーメン たべた。", "Raamen tabeta.", "I ate ramen.")
  ],
  words: [
    W("た", "ta", "past (plain)"),
    W("なかった", "nakatta", "didn't (plain)"),
    W("した", "shita", "did"),
    W("たべた", "tabeta", "ate"),
    W("いった", "itta", "went"),
    W("ゲーム", "geemu", "game"),
    W("そと", "soto", "outside"),
    W("うん / ううん", "un / uun", "yes / no (casual)")
  ],
  tips: [
    "The ta-form is the te-form with ta or da.",
    "Negative past: nai becomes nakatta.",
    "Un means yes and uun means no in casual speech."
  ],
  quiz: [
    ask("plain-past", "What is the plain past of たべる?", "たべた", ["たべって", "たべない"], "Drop る, add た."),
    ask("plain-past", "What is the plain past of のむ?", "のんだ", ["のんた", "のみた"], "んで → んだ."),
    ask("plain-past", "What is the plain past of いく?", "いった", ["いいた", "いくた"], "いく is an exception."),
    ask("plain-past", "What is the negative past of いく?", "いかなかった", ["いかなくない", "いかない でした"], "ない → なかった."),
    ask("plain-past", "What does ううん mean?", "no", ["yes", "maybe"], "ううん is casual no.")
  ]
});
