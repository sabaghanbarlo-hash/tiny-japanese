// Genki I Grammar, chapter 10 (part 1: wanting, planning, too much): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const hoshii = lesson({
  id: "hoshii", number: 69, title: "ほしい: I Want Something",
  summary: "Say you want a thing with ほしい.",
  objective: "By the end you can say “I want a new phone” and ask “What do you want?”.",
  teach: [
    T("The idea", "ほしい = want (a thing)",
      ["To say you want a thing, use {ほしい|hoshii}. It is an {い|i}-adjective, so it behaves like {たかい|takai}. The thing you want is marked with {が|ga}.",
       "{くるまが ほしい|kuruma ga hoshii} means “I want a car”. Add {です|desu} to be polite."],
      [E("くるまが ほしい です。", "Kuruma ga hoshii desu.", "I want a car.", "が ほしい"),
       E("スマホが ほしい です。", "Sumaho ga hoshii desu.", "I want a smartphone.", "が ほしい")]),
    T("Asking", "なにが ほしい ですか",
      ["To ask what someone wants, put {なに|nani} in front. {なにが ほしい ですか|nani ga hoshii desu ka} means “What do you want?”.",
       "You answer with the thing and {が ほしい です|ga hoshii desu}."],
      [E("なにが ほしい ですか。", "Nani ga hoshii desu ka.", "What do you want?", "なにが"),
       E("じかんが ほしい です。", "Jikan ga hoshii desu.", "I want time.", "が ほしい")]),
    T("Negative and past", "Like every い-adjective",
      ["Because {ほしい|hoshii} is an {い|i}-adjective, drop the last {い|i} to change it. {ほしくない|hoshikunai} means “I don't want it”, and {ほしかった|hoshikatta} means “I wanted it”.",
       "Add {です|desu} to be polite: {ほしくない です|hoshikunai desu}, {ほしかった です|hoshikatta desu}."],
      [E("くるまは ほしくない です。", "Kuruma wa hoshikunai desu.", "I don't want a car.", "ほしくない"),
       E("ふくが ほしかった です。", "Fuku ga hoshikatta desu.", "I wanted clothes.", "ほしかった")]),
    T("Things, not actions", "ほしい or たい",
      ["{ほしい|hoshii} is for things. To say you want to do something, use {たい|tai} from the earlier lesson.",
       "{ほんが ほしい|hon ga hoshii} is “I want a book”. {ほんを よみたい|hon o yomitai} is “I want to read a book”."],
      [E("ほんが ほしい です。", "Hon ga hoshii desu.", "I want a book.", "が ほしい"),
       E("ほんを よみたい です。", "Hon o yomitai desu.", "I want to read a book.", "よみたい")]),
    T("Common mistakes", "Do not join ほしい to a verb",
      ["Do not attach {ほしい|hoshii} to a verb stem. {よみほしい|yomihoshii} is wrong; use {よみたい|yomitai}. Also, {ほしい|hoshii} talks about your own feeling, just like {たい|tai}. To say what another person wants, you will need a different form later, so for now use it for yourself, or to ask “you”.",
       "The standard pattern for a beginner is the thing plus {が|ga}."],
      [E("ほんを よみほしい です。", "(wrong)", "Wrong: use よみたい.", "よみほしい", true),
       E("かばんが ほしい です。", "Kaban ga hoshii desu.", "Right: I want a bag.", "が ほしい")],
      T0("Say: “I want a new bag.”", "あたらしい かばんが ほしい です。", "Atarashii kaban ga hoshii desu.", "I want a new bag.", "が ほしい"))
  ],
  storyTitle: "A birthday present",
  story: [
    L("Mika", "アレックスさん、たんじょうびの プレゼントは なにが ほしい ですか。", "Arekkusu-san, tanjoubi no purezento wa nani ga hoshii desu ka.", "Alex, what do you want for your birthday present?"),
    L("Alex", "あたらしい かばんが ほしい です。", "Atarashii kaban ga hoshii desu.", "I want a new bag."),
    L("Mika", "おおきい かばんが ほしい ですか。", "Ookii kaban ga hoshii desu ka.", "Do you want a big bag?"),
    L("Alex", "はい、おおきい かばんが ほしい です。", "Hai, ookii kaban ga hoshii desu.", "Yes, I want a big bag."),
    L("Mika", "くるまは ほしくない ですか。", "Kuruma wa hoshikunai desu ka.", "Don't you want a car?"),
    L("Alex", "くるまは ほしい です。でも たかい です。", "Kuruma wa hoshii desu. Demo takai desu.", "I want a car. But it is expensive."),
    L("Mika", "かばんを かいましょう。", "Kaban o kaimashou.", "Let's buy a bag.")
  ],
  words: [
    W("ほしい", "hoshii", "want (a thing)"),
    W("プレゼント", "purezento", "present"),
    W("たんじょうび", "tanjoubi", "birthday"),
    W("かばん", "kaban", "bag"),
    W("くるま", "kuruma", "car"),
    W("スマホ", "sumaho", "smartphone"),
    W("ふく", "fuku", "clothes"),
    W("じかん", "jikan", "time")
  ],
  tips: [
    "Hoshii is an i-adjective: hoshikunai means don't want, hoshikatta means wanted.",
    "The thing you want takes ga.",
    "Use hoshii for things and tai for actions."
  ],
  quiz: [
    ask("hoshii", "How do you say “I want a car”?", "くるまが ほしい です。", ["くるまを ほしみたい です。", "くるまが ほしく です。"], "Thing + が ほしい です."),
    ask("hoshii", "How do you say “I don't want it”?", "ほしくない です。", ["ほしいない です。", "ほしません。"], "ほしい is an い-adjective: ほしくない."),
    ask("hoshii", "How do you ask “What do you want?”", "なにが ほしい ですか。", ["なにを ほしい ですか。", "なにが ほしたい ですか。"], "なにが ほしい ですか."),
    ask("hoshii", "Which means “I want to read a book”?", "ほんを よみたい です。", ["ほんが ほしい です。", "ほんを よみほしい です。"], "For actions use たい."),
    ask("hoshii", "What does ほしかった です mean?", "I wanted it", ["I will want it", "I don't want it"], "ほしかった is the past of ほしい.")
  ]
});

export const tsumori = lesson({
  id: "tsumori", number: 70, title: "～つもりです: I Plan To",
  summary: "Say what you plan or intend to do with つもりです.",
  objective: "By the end you can say “I plan to go to Kyoto” and “I don't plan to drink”.",
  teach: [
    T("The idea", "Plain form + つもりです",
      ["To say what you intend to do, put the plain present form of the verb before {つもりです|tsumori desu}. {いく つもりです|iku tsumori desu} means “I plan to go”.",
       "It is about a decision you have already made, not just a wish."],
      [E("らいしゅう にほんへ いく つもり です。", "Raishuu nihon e iku tsumori desu.", "I plan to go to Japan next week.", "いく つもり"),
       E("あした べんきょうする つもり です。", "Ashita benkyou suru tsumori desu.", "I plan to study tomorrow.", "する つもり")]),
    T("Which form?", "The plain present",
      ["Use the plain present form you learned earlier: {たべる|taberu}, {のむ|nomu}, {する|suru}. Do not use the {ます|masu} form.",
       "So {たべる つもり です|taberu tsumori desu}, not {たべます つもり です|tabemasu tsumori desu}."],
      [E("あさ ごはんを たべる つもり です。", "Asa gohan o taberu tsumori desu.", "I plan to eat breakfast.", "たべる つもり"),
       E("ともだちに あう つもり です。", "Tomodachi ni au tsumori desu.", "I plan to meet a friend.", "あう つもり")]),
    T("Plans you won't do", "Plain negative + つもりです",
      ["To say you do not plan to do something, use the plain negative {ない|nai} form. {いかない つもり です|ikanai tsumori desu} means “I don't plan to go”.",
       "The meaning is a firm decision not to do it."],
      [E("パーティーへ いかない つもり です。", "Paatii e ikanai tsumori desu.", "I don't plan to go to the party.", "いかない つもり"),
       E("おさけを のまない つもり です。", "Osake o nomanai tsumori desu.", "I don't plan to drink alcohol.", "のまない つもり")]),
    T("Plans that changed", "つもりでした",
      ["Use {つもりでした|tsumori deshita} for what you were planning. It often suggests the plan did not happen.",
       "{いく つもりでした|iku tsumori deshita} means “I was planning to go”."],
      [E("いく つもりでした。でも いきませんでした。", "Iku tsumori deshita. Demo ikimasen deshita.", "I was planning to go. But I didn't.", "つもりでした"),
       E("べんきょうする つもりでした。", "Benkyou suru tsumori deshita.", "I was planning to study.", "つもりでした")]),
    T("Common mistakes", "Do not use the ます form",
      ["Do not put the {ます|masu} form before {つもり|tsumori}. {いきます つもり です|ikimasu tsumori desu} is wrong. Use the plain form: {いく つもり です|iku tsumori desu}.",
       "Remember the topic of the plan comes first, then the plain verb."],
      [E("いきます つもり です。", "(wrong)", "Wrong: use the plain form.", "いきます つもり", true),
       E("いく つもり です。", "Iku tsumori desu.", "Right: I plan to go.", "いく つもり")],
      T0("Say: “I plan to eat sushi.”", "すしを たべる つもり です。", "Sushi o taberu tsumori desu.", "I plan to eat sushi.", "たべる つもり"))
  ],
  storyTitle: "Summer plans",
  story: [
    L("Mika", "なつやすみに なにを する つもり ですか。", "Natsuyasumi ni nani o suru tsumori desu ka.", "What do you plan to do in the summer holiday?"),
    L("Alex", "きょうとへ いく つもり です。", "Kyouto e iku tsumori desu.", "I plan to go to Kyoto."),
    L("Mika", "いい ですね。ひとりで いきますか。", "Ii desu ne. Hitori de ikimasu ka.", "That's nice. Will you go alone?"),
    L("Alex", "いいえ、ともだちと いく つもり です。", "Iie, tomodachi to iku tsumori desu.", "No, I plan to go with a friend."),
    L("Alex", "ミカさんは どう ですか。", "Mika-san wa dou desu ka.", "How about you, Mika?"),
    L("Mika", "わたしは どこへも いかない つもり です。", "Watashi wa doko e mo ikanai tsumori desu.", "I don't plan to go anywhere."),
    L("Mika", "うちで ほんを よむ つもり です。", "Uchi de hon o yomu tsumori desu.", "I plan to read books at home.")
  ],
  words: [
    W("つもり", "tsumori", "plan, intention"),
    W("なつやすみ", "natsuyasumi", "summer holiday"),
    W("きょうと", "Kyouto", "Kyoto"),
    W("ひとりで", "hitori de", "alone"),
    W("ともだち", "tomodachi", "friend"),
    W("うち", "uchi", "home"),
    W("すし", "sushi", "sushi"),
    W("あう", "au", "meet")
  ],
  tips: [
    "Plain present plus tsumori desu means I plan to.",
    "For a firm no, use the plain negative: nai tsumori desu.",
    "Never put the masu form before tsumori."
  ],
  quiz: [
    ask("tsumori", "How do you say “I plan to go”?", "いく つもり です。", ["いきます つもり です。", "いった つもり です。"], "Plain present + つもり です."),
    ask("tsumori", "How do you say “I don't plan to go”?", "いかない つもり です。", ["いきません つもり です。", "いかなく つもり です。"], "Plain negative + つもり です."),
    ask("tsumori", "What does つもりでした suggest?", "a plan that did not happen", ["a strong wish", "a rule"], "It is often a plan that changed."),
    ask("tsumori", "Which is correct?", "のむ つもり です。", ["のみます つもり です。", "のんで つもり です。"], "Use the plain form."),
    ask("tsumori", "How do you say “I plan to study tomorrow”?", "あした べんきょうする つもり です。", ["あした べんきょうします つもり です。", "あした べんきょうした つもり です。"], "する + つもり です.")
  ]
});

export const sugiru = lesson({
  id: "sugiru", number: 71, title: "～すぎます: Too Much",
  summary: "Say something is too much, or you did something too much, with すぎます.",
  objective: "By the end you can say “I ate too much” and “This is too expensive”.",
  teach: [
    T("The idea", "すぎます = too much",
      ["Add {すぎます|sugimasu} to a verb or an adjective to say “too much” or “too”. {たべすぎます|tabesugimasu} means “eat too much”. {たかすぎます|takasugimasu} means “too expensive”.",
       "It always means more than is good."],
      [E("ごはんを たべすぎました。", "Gohan o tabesugimashita.", "I ate too much.", "たべすぎ"),
       E("この シャツは たかすぎます。", "Kono shatsu wa takasugimasu.", "This shirt is too expensive.", "たかすぎ")]),
    T("With verbs", "ます stem + すぎます",
      ["Take the {ます|masu} form, remove {ます|masu}, and add {すぎます|sugimasu}. {たべます|tabemasu} becomes {たべすぎます|tabesugimasu}. {のみます|nomimasu} becomes {のみすぎます|nomisugimasu}. {します|shimasu} becomes {しすぎます|shisugimasu}.",
       "{すぎる|sugiru} is an {いちだん|ichidan} verb, so it ends with {すぎます|sugimasu}, {すぎました|sugimashita} and {すぎない|suginai}."],
      [E("ジュースを のみすぎました。", "Juusu o nomisugimashita.", "I drank too much juice.", "のみすぎ"),
       E("きのう あそびすぎました。", "Kinou asobisugimashita.", "I played too much yesterday.", "あそびすぎ")]),
    T("With い-adjectives", "Drop い, add すぎます",
      ["For an {い|i}-adjective, drop the last {い|i} and add {すぎます|sugimasu}. {たかい|takai} becomes {たかすぎます|takasugimasu}. {あつい|atsui} becomes {あつすぎます|atsusugimasu}. {ちいさい|chiisai} becomes {ちいさすぎます|chiisasugimasu}.",
       "The word {いい|ii} changes to {よ|yo}, so “too good” is {よすぎます|yosugimasu}."],
      [E("きょうは あつすぎます。", "Kyou wa atsusugimasu.", "Today is too hot.", "あつすぎ"),
       E("この へやは ちいさすぎます。", "Kono heya wa chiisasugimasu.", "This room is too small.", "ちいさすぎ")]),
    T("With な-adjectives", "Keep the stem",
      ["For a {な|na}-adjective, simply add {すぎます|sugimasu} to the stem, with no {な|na}. {しずか|shizuka} becomes {しずかすぎます|shizukasugimasu}. {にぎやか|nigiyaka} becomes {にぎやかすぎます|nigiyakasugimasu}.",
       "No other change is needed."],
      [E("ここは しずかすぎます。", "Koko wa shizukasugimasu.", "It is too quiet here.", "しずかすぎ"),
       E("この まちは にぎやかすぎます。", "Kono machi wa nigiyakasugimasu.", "This town is too lively.", "にぎやかすぎ")]),
    T("Asking not to", "すぎないで ください",
      ["You can join it to the lesson on asking people not to do things. {たべすぎないで ください|tabesuginai de kudasai} means “please don't eat too much”.",
       "It is a polite request about the amount."],
      [E("たべすぎないで ください。", "Tabesuginai de kudasai.", "Please don't eat too much.", "すぎないで ください"),
       E("のみすぎないで ください。", "Nomisuginai de kudasai.", "Please don't drink too much.", "すぎないで ください")]),
    T("Common mistakes", "Do not keep ます or い",
      ["Do not keep the {ます|masu} ending: {たべますすぎます|tabemasusugimasu} is wrong. Do not keep the final {い|i} of an {い|i}-adjective: {たかいすぎます|takaisugimasu} is wrong.",
       "Cut the ending first, then add {すぎます|sugimasu}."],
      [E("たべますすぎました。", "(wrong)", "Wrong: remove ます first.", "たべますすぎ", true),
       E("たかいすぎます。", "(wrong)", "Wrong: drop the い.", "たかいすぎ", true),
       E("たべすぎました。", "Tabesugimashita.", "Right: I ate too much.", "たべすぎ")],
      T0("Say: “This coffee is too hot.”", "この コーヒーは あつすぎます。", "Kono koohii wa atsusugimasu.", "This coffee is too hot.", "あつすぎ"))
  ],
  storyTitle: "At the cafe",
  story: [
    L("Alex", "この ケーキは おいしい です。", "Kono keeki wa oishii desu.", "This cake is delicious."),
    L("Mika", "アレックスさん、ケーキを たくさん たべました ね。", "Arekkusu-san, keeki o takusan tabemashita ne.", "Alex, you ate a lot of cake."),
    L("Alex", "はい、たべすぎました。", "Hai, tabesugimashita.", "Yes, I ate too much."),
    L("Mika", "コーヒーも のみすぎないで ください ね。", "Koohii mo nomisuginai de kudasai ne.", "Please don't drink too much coffee either."),
    L("Alex", "でも この コーヒーは あつすぎます。", "Demo kono koohii wa atsusugimasu.", "But this coffee is too hot."),
    L("Mika", "じゃあ、すこし まちましょう。", "Jaa, sukoshi machimashou.", "Then let's wait a little.")
  ],
  words: [
    W("すぎます", "sugimasu", "too much"),
    W("ケーキ", "keeki", "cake"),
    W("コーヒー", "koohii", "coffee"),
    W("たくさん", "takusan", "a lot"),
    W("すこし", "sukoshi", "a little"),
    W("まちます", "machimasu", "wait"),
    W("あそびます", "asobimasu", "play"),
    W("にぎやか", "nigiyaka", "lively")
  ],
  tips: [
    "Verbs: remove masu and add sugimasu. I-adjectives: drop the i.",
    "Na-adjectives keep their stem: shizuka sugimasu.",
    "Ii becomes yo: yosugimasu means too good."
  ],
  quiz: [
    ask("sugiru", "How do you say “I ate too much”?", "たべすぎました。", ["たべますすぎました。", "たべるすぎました。"], "Remove ます, add すぎました."),
    ask("sugiru", "How do you say “too expensive”?", "たかすぎます。", ["たかいすぎます。", "たかくすぎます。"], "Drop the い."),
    ask("sugiru", "How do you say “too quiet”?", "しずかすぎます。", ["しずかなすぎます。", "しずかいすぎます。"], "な-adjectives keep the stem."),
    ask("sugiru", "Which means “please don't drink too much”?", "のみすぎないで ください。", ["のみすぎて ください。", "のみすぎません ください。"], "すぎない + で ください."),
    ask("sugiru", "What does あつすぎます mean?", "too hot", ["a little hot", "not hot"], "すぎます means too much.")
  ]
});
