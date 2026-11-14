// Genki I Grammar, chapter 10 (part 2: advice, already and not yet, because): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const houGaIi = lesson({
  id: "hou-ga-ii", number: 72, title: "～ほうが いい: You Should",
  summary: "Give advice with ほうが いい.",
  objective: "By the end you can say “you should take medicine” and “you shouldn't go”.",
  teach: [
    T("The idea", "た-form + ほうが いい",
      ["To give advice, put the plain past, the {た|ta}-form, before {ほうが いいです|hou ga ii desu}. {のんだ ほうが いいです|nonda hou ga ii desu} means “it is better to take it”, so “you should”.",
       "It compares two choices and says one side is better."],
      [E("くすりを のんだ ほうが いい です。", "Kusuri o nonda hou ga ii desu.", "You should take medicine.", "のんだ ほうが"),
       E("ちょっと やすんだ ほうが いい です。", "Chotto yasunda hou ga ii desu.", "You should rest a little.", "やすんだ ほうが")]),
    T("Not about the past", "The た-form is just the shape",
      ["Even though the {た|ta}-form is the plain past, here it does not talk about the past. It is simply the shape the sentence needs.",
       "{すぐ かえった ほうが いい です|sugu kaetta hou ga ii desu} means “you should go home right away”."],
      [E("すぐ かえった ほうが いい です。", "Sugu kaetta hou ga ii desu.", "You should go home right away.", "かえった ほうが"),
       E("もっと はやく おきた ほうが いい です。", "Motto hayaku okita hou ga ii desu.", "You should get up earlier.", "おきた ほうが")]),
    T("Advice not to", "ない + ほうが いい",
      ["To say “you shouldn't”, use the plain negative {ない|nai} before {ほうが いい|hou ga ii}. {いかない ほうが いい|ikanai hou ga ii} means “you'd better not go”.",
       "You can combine it with the last lesson: {たべすぎない ほうが いい|tabesuginai hou ga ii}."],
      [E("たべすぎない ほうが いい です。", "Tabesuginai hou ga ii desu.", "You shouldn't eat too much.", "すぎない ほうが"),
       E("よる コーヒーを のまない ほうが いい です。", "Yoru koohii o nomanai hou ga ii desu.", "You shouldn't drink coffee at night.", "のまない ほうが")]),
    T("The same ほう as comparisons", "Choosing the better side",
      ["{ほう|hou} is the same word you met when comparing things. {バスの ほうが はやい です|basu no hou ga hayai desu} means “the bus is faster”. In {ほうが いい|hou ga ii} the idea is the same: this side is better.",
       "It helps to remember it as “the better side is…”."],
      [E("バスの ほうが はやい です。", "Basu no hou ga hayai desu.", "The bus is faster.", "ほうが"),
       E("でんしゃの ほうが いい です。", "Densha no hou ga ii desu.", "The train is better.", "ほうが いい")]),
    T("Tone", "It can sound strong",
      ["{ほうが いい|hou ga ii} can sound like “you really should”. To soften it, add {と おもいます|to omoimasu} from the earlier lesson. {やすんだ ほうが いい と おもいます|yasunda hou ga ii to omoimasu} means “I think you should rest”.",
       "With a teacher or a boss, be careful about giving advice at all."],
      [E("やすんだ ほうが いい と おもいます。", "Yasunda hou ga ii to omoimasu.", "I think you should rest.", "ほうが いい と おもいます"),
       E("かえった ほうが いい です よ。", "Kaetta hou ga ii desu yo.", "You should go home, you know.", "ほうが いい です よ")]),
    T("Common mistakes", "Do not use the ます form",
      ["Do not put the {ます|masu} form before {ほうが|hou ga}. {のみます ほうが いい です|nomimasu hou ga ii desu} is wrong. Use {のんだ ほうが いい です|nonda hou ga ii desu}.",
       "You will also hear the dictionary form for general advice. For now, use the {た|ta}-form for “you should”."],
      [E("のみます ほうが いい です。", "(wrong)", "Wrong: use のんだ.", "のみます ほうが", true),
       E("のんだ ほうが いい です。", "Nonda hou ga ii desu.", "Right: You should take it.", "のんだ ほうが")],
      T0("Say: “You should sleep early.”", "はやく ねた ほうが いい です。", "Hayaku neta hou ga ii desu.", "You should sleep early.", "ねた ほうが"))
  ],
  storyTitle: "A cold",
  story: [
    L("Mika", "アレックスさん、かおが あかい ですよ。", "Arekkusu-san, kao ga akai desu yo.", "Alex, your face is red."),
    L("Alex", "すこし ねつが あります。", "Sukoshi netsu ga arimasu.", "I have a bit of a fever."),
    L("Mika", "くすりを のんだ ほうが いい です。", "Kusuri o nonda hou ga ii desu.", "You should take medicine."),
    L("Alex", "はい。きょうは はやく ねた ほうが いい ですね。", "Hai. Kyou wa hayaku neta hou ga ii desu ne.", "Yes. I should sleep early today."),
    L("Mika", "あした がっこうへ いかない ほうが いい と おもいます。", "Ashita gakkou e ikanai hou ga ii to omoimasu.", "I think you'd better not go to school tomorrow."),
    L("Alex", "わかりました。やすみます。", "Wakarimashita. Yasumimasu.", "Understood. I will rest."),
    L("Mika", "おだいじに。", "Odaijini.", "Take care.")
  ],
  words: [
    W("ほうが いい", "hou ga ii", "it is better to"),
    W("くすり", "kusuri", "medicine"),
    W("ねつ", "netsu", "fever"),
    W("かお", "kao", "face"),
    W("あかい", "akai", "red"),
    W("すぐ", "sugu", "right away"),
    W("もっと", "motto", "more"),
    W("おだいじに", "odaijini", "take care")
  ],
  tips: [
    "Ta-form plus hou ga ii desu means you should.",
    "Nai plus hou ga ii means you shouldn't.",
    "It can sound strong, so soften it with to omoimasu."
  ],
  quiz: [
    ask("hou-ga-ii", "How do you say “You should take medicine”?", "くすりを のんだ ほうが いい です。", ["くすりを のみます ほうが いい です。", "くすりを のんで ほうが いい です。"], "た-form + ほうが いい です."),
    ask("hou-ga-ii", "How do you say “You shouldn't go”?", "いかない ほうが いい です。", ["いきません ほうが いい です。", "いかなく ほうが いい です。"], "ない + ほうが いい."),
    ask("hou-ga-ii", "Does the た-form here talk about the past?", "No, it is just the shape", ["Yes, always", "Only in questions"], "It is the shape, not the tense."),
    ask("hou-ga-ii", "How do you soften the advice?", "と おもいます", ["ましょう", "ください"], "と おもいます means I think."),
    ask("hou-ga-ii", "Which means “The bus is faster”?", "バスの ほうが はやい です。", ["バスを ほうが はやい です。", "バスの ほうは はやい ます。"], "A の ほうが ... です.")
  ]
});

export const mouMada = lesson({
  id: "mou-mada", number: 73, title: "もう と まだ: Already and Not Yet",
  summary: "Say you have already done something, or have not done it yet.",
  objective: "By the end you can say “I already ate” and “I haven't done it yet”.",
  teach: [
    T("The idea", "もう = already",
      ["{もう|mou} before a past verb means “already”. {もう たべました|mou tabemashita} means “I already ate”.",
       "It says the thing is finished."],
      [E("もう ひるごはんを たべました。", "Mou hirugohan o tabemashita.", "I already ate lunch.", "もう"),
       E("もう しゅくだいを しました。", "Mou shukudai o shimashita.", "I already did my homework.", "もう")]),
    T("Asking", "もう ～ましたか",
      ["Use {もう|mou} in a question to ask “Have you ... yet?”. {もう たべましたか|mou tabemashita ka} means “Have you eaten yet?”.",
       "It is the normal way to ask if something is done."],
      [E("もう レポートを かきましたか。", "Mou repooto o kakimashita ka.", "Have you written the report yet?", "もう"),
       E("もう ごはんを たべましたか。", "Mou gohan o tabemashita ka.", "Have you eaten yet?", "もう")]),
    T("Answering", "はい、もう / いいえ、まだ",
      ["To say yes, answer {はい、もう ～ました|hai, mou ... mashita}. To say “not yet”, answer {いいえ、まだ です|iie, mada desu}.",
       "{まだ|mada} means “still” or “not yet”."],
      [E("はい、もう たべました。", "Hai, mou tabemashita.", "Yes, I already ate.", "もう"),
       E("いいえ、まだ です。", "Iie, mada desu.", "No, not yet.", "まだ")]),
    T("Not yet, in a full sentence", "まだ ～て いません",
      ["For a full sentence, use {まだ|mada}, the {て|te}-form, and {いません|imasen}. {まだ たべて いません|mada tabete imasen} means “I haven't eaten yet”.",
       "This uses the {て いる|te iru} pattern from the earlier lesson, in the negative."],
      [E("まだ レポートを かいて いません。", "Mada repooto o kaite imasen.", "I haven't written the report yet.", "まだ"),
       E("まだ ひるごはんを たべて いません。", "Mada hirugohan o tabete imasen.", "I haven't eaten lunch yet.", "て いません")]),
    T("Common mistakes", "Watch the negative",
      ["For “I haven't done it yet”, do not use the plain past negative. {まだ たべませんでした|mada tabemasen deshita} is not what you want here. Use {まだ たべて いません|mada tabete imasen}.",
       "Also, {もう|mou} with a present negative has a different meaning: {もう たべません|mou tabemasen} means “I won't eat any more”."],
      [E("まだ たべませんでした。", "(wrong here)", "Not what you want: use て いません.", "まだ たべませんでした", true),
       E("もう たべません。", "Mou tabemasen.", "Different meaning: I won't eat any more.", "もう たべません", true),
       E("まだ たべて いません。", "Mada tabete imasen.", "Right: I haven't eaten yet.", "まだ")],
      T0("Say: “I haven't done my homework yet.”", "まだ しゅくだいを して いません。", "Mada shukudai o shite imasen.", "I haven't done my homework yet.", "まだ"))
  ],
  storyTitle: "Homework",
  story: [
    L("Mika", "アレックスさん、もう しゅくだいを しましたか。", "Arekkusu-san, mou shukudai o shimashita ka.", "Alex, have you done your homework yet?"),
    L("Alex", "いいえ、まだ です。", "Iie, mada desu.", "No, not yet."),
    L("Mika", "まだ して いません か。", "Mada shite imasen ka.", "You haven't done it yet?"),
    L("Alex", "はい、まだ して いません。ミカさんは どう ですか。", "Hai, mada shite imasen. Mika-san wa dou desu ka.", "No, I haven't. How about you, Mika?"),
    L("Mika", "わたしは もう しました。", "Watashi wa mou shimashita.", "I already did it."),
    L("Alex", "すごい ですね。", "Sugoi desu ne.", "That's amazing."),
    L("Mika", "いっしょに しましょう。", "Issho ni shimashou.", "Let's do it together.")
  ],
  words: [
    W("もう", "mou", "already"),
    W("まだ", "mada", "not yet, still"),
    W("しゅくだい", "shukudai", "homework"),
    W("レポート", "repooto", "report"),
    W("ひるごはん", "hirugohan", "lunch"),
    W("かきます", "kakimasu", "write"),
    W("すごい", "sugoi", "amazing"),
    W("いっしょに", "issho ni", "together")
  ],
  tips: [
    "Mou plus past means already.",
    "Answer not yet with mada desu, or mada plus te imasen.",
    "Mou with a negative can mean not any more, so be careful."
  ],
  quiz: [
    ask("mou-mada", "How do you say “I already ate”?", "もう たべました。", ["まだ たべました。", "もう たべます。"], "もう + past."),
    ask("mou-mada", "How do you answer “Not yet”?", "いいえ、まだ です。", ["いいえ、もう です。", "はい、まだ です。"], "まだ です means not yet."),
    ask("mou-mada", "How do you say “I haven't eaten yet”?", "まだ たべて いません。", ["まだ たべました。", "もう たべて いません。"], "まだ + て いません."),
    ask("mou-mada", "What does もう たべません mean?", "I won't eat any more", ["I already ate", "I haven't eaten yet"], "もう with a negative means no more."),
    ask("mou-mada", "How do you ask “Have you done it yet?”", "もう しましたか。", ["まだ しましたか。", "もう しません か。"], "もう + ましたか.")
  ]
});

export const karaReason = lesson({
  id: "kara-reason", number: 74, title: "から: Because",
  summary: "Give a reason with から.",
  objective: "By the end you can say “It's expensive, so I won't buy it” and answer “why?”.",
  teach: [
    T("The idea", "Reason + から",
      ["To give a reason, put {から|kara} after it. {あめ ですから|ame desu kara} means “because it is rain”. Then say the result.",
       "{あめ ですから、うちに います|ame desu kara, uchi ni imasu} means “It's raining, so I'm staying home”."],
      [E("あめ ですから、うちに います。", "Ame desu kara, uchi ni imasu.", "Because it's raining, I'm staying home.", "ですから"),
       E("ねむい ですから、ねます。", "Nemui desu kara, nemasu.", "I'm sleepy, so I'll sleep.", "ですから")]),
    T("The order", "Reason first, then result",
      ["In Japanese the reason comes first, then the result. English often says the result first, so this feels backwards at the start.",
       "Think of it as: “Because of this, so that.” The {から|kara} stays right after the reason."],
      [E("たかい ですから、かいません。", "Takai desu kara, kaimasen.", "It's expensive, so I won't buy it.", "ですから"),
       E("やすい ですから、かいます。", "Yasui desu kara, kaimasu.", "It's cheap, so I'll buy it.", "ですから")]),
    T("Casual style", "Plain form + から",
      ["With friends, use the plain form before {から|kara}. {つかれたから、ねる|tsukareta kara, neru} means “I'm tired, so I'll sleep”.",
       "After a noun, add {だ|da}: {あめ だから|ame da kara}."],
      [E("つかれたから、ねる。", "Tsukareta kara, neru.", "I'm tired, so I'll sleep.", "から"),
       E("あめ だから、いかない。", "Ame da kara, ikanai.", "It's rain, so I won't go.", "だから")]),
    T("Answering why", "どうして ですか",
      ["{どうして|doushite} means “why”. You answer by giving the reason and ending with {から|kara}. {かぜ ですから|kaze desu kara} means “Because I have a cold”.",
       "You can stop right after {から|kara}. It is a complete answer."],
      [E("どうして がっこうを やすみましたか。", "Doushite gakkou o yasumimashita ka.", "Why did you miss school?", "どうして"),
       E("かぜ ですから。", "Kaze desu kara.", "Because I have a cold.", "から")]),
    T("Three ways to give reasons", "から, し and んです",
      ["{から|kara} gives one clear reason. {し|shi}, from the earlier lesson, lists reasons as if there are more. {んです|n desu} explains a situation. All three can help answer “why”, but {から|kara} is the most direct.",
       "Start with {から|kara}; the others will come naturally."],
      [E("やすいし、おいしい です。", "Yasui shi, oishii desu.", "It's cheap and tasty, too.", "し"),
       E("おいしい ですから、かいます。", "Oishii desu kara, kaimasu.", "It's tasty, so I'll buy it.", "ですから")]),
    T("Common mistakes", "Do not forget です",
      ["After a noun or a {な|na}-adjective in polite style, keep {です|desu}. {あめから|ame kara} means “from the rain”, because {から|kara} is also the word for “from”. Say {あめ ですから|ame desu kara}.",
       "The reason stays before {から|kara}; do not move it after."],
      [E("あめから、うちに います。", "(wrong)", "Wrong: add です.", "あめから", true),
       E("あめ ですから、うちに います。", "Ame desu kara, uchi ni imasu.", "Right: Because it rains, I'm home.", "ですから")],
      T0("Say: “It's expensive, so I won't buy it.”", "たかい ですから、かいません。", "Takai desu kara, kaimasen.", "It's expensive, so I won't buy it.", "ですから"))
  ],
  storyTitle: "Why late?",
  story: [
    L("Mika", "アレックスさん、どうして おくれましたか。", "Arekkusu-san, doushite okuremashita ka.", "Alex, why were you late?"),
    L("Alex", "バスが きませんでしたから。", "Basu ga kimasen deshita kara.", "Because the bus didn't come."),
    L("Mika", "そう ですか。わたしは あめ ですから、でんしゃで きました。", "Sou desu ka. Watashi wa ame desu kara, densha de kimashita.", "I see. It was raining, so I came by train."),
    L("Alex", "でんしゃの ほうが はやい ですね。", "Densha no hou ga hayai desu ne.", "The train is faster."),
    L("Mika", "はい。あしたは はやく きましょう。", "Hai. Ashita wa hayaku kimashou.", "Yes. Let's come early tomorrow.")
  ],
  words: [
    W("から", "kara", "because"),
    W("どうして", "doushite", "why"),
    W("おくれます", "okuremasu", "be late"),
    W("かぜ", "kaze", "a cold"),
    W("あめ", "ame", "rain"),
    W("つかれます", "tsukaremasu", "get tired"),
    W("バス", "basu", "bus"),
    W("でんしゃ", "densha", "train")
  ],
  tips: [
    "Reason first, then kara, then the result.",
    "In polite style, add desu before kara after a noun.",
    "Kara also means from, so do not drop desu."
  ],
  quiz: [
    ask("kara-reason", "Where does から go?", "after the reason", ["after the result", "at the very start"], "Reason + から."),
    ask("kara-reason", "How do you say “It's rain, so I'm home”?", "あめ ですから、うちに います。", ["あめから、うちに います。", "うちに います、から あめ です。"], "Keep です before から."),
    ask("kara-reason", "How do you answer “Why?” with a cold?", "かぜ ですから。", ["かぜ からです。", "かぜを ですから。"], "Reason + ですから."),
    ask("kara-reason", "Casual: “I'm tired, so I'll sleep”?", "つかれたから、ねる。", ["つかれた、から ねる。", "つかれるから ですねる。"], "Plain + から."),
    ask("kara-reason", "Which gives one clear reason?", "から", ["し", "ね"], "から is the direct one.")
  ]
});
