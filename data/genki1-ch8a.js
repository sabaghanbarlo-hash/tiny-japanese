// Genki I Grammar, chapter 8 (part 1): wants, lists, experience. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const tai = lesson({
  id: "tai-form", number: 57, title: "～たい: Wanting to Do",
  summary: "Say what you want to do with the たい form, and how it changes like an い-adjective.",
  objective: "By the end you can say “I want to eat”, “I don't want to go” and ask “what do you want to do?”.",
  teach: [
    T("The idea", "ます stem + たい",
      ["To say that you want to do something, take the {ます|masu} form, drop {ます|masu}, and add {たい|tai}. {たべます|tabemasu} becomes {たべたい|tabetai}, “want to eat”. {いきます|ikimasu} becomes {いきたい|ikitai}, “want to go”.",
       "Add {です|desu} to be polite: {たべたい です|tabetai desu}."],
      [E("たべます → たべたい", "tabemasu → tabetai", "eat → want to eat", "たい"),
       E("いきます → いきたい", "ikimasu → ikitai", "go → want to go", "たい"),
       E("ねます → ねたい", "nemasu → netai", "sleep → want to sleep", "たい")]),
    T("It is an い-adjective", "たい ends in い",
      ["{たい|tai} behaves exactly like an {い|i}-adjective. So it changes the same way. Negative: {たくない|takunai}. Past: {たかった|takatta}. Negative past: {たくなかった|takunakatta}.",
       "You already know all of these patterns from the adjective lessons."],
      [E("たべたくない です。", "Tabetakunai desu.", "(I) don't want to eat.", "たくない"),
       E("たべたかった です。", "Tabetakatta desu.", "(I) wanted to eat.", "たかった"),
       E("たべたくなかった です。", "Tabetakunakatta desu.", "(I) didn't want to eat.", "たくなかった")]),
    T("Objects", "を or が",
      ["With {たい|tai}, the object can be marked with {を|o} or {が|ga}. Both are correct. {すしを たべたい です|sushi o tabetai desu} and {すしが たべたい です|sushi ga tabetai desu} both mean “I want to eat sushi”.",
       "The {が|ga} version stresses the thing you want. Other particles, like {に|ni} and {で|de}, do not change."],
      [E("すしを たべたい です。", "Sushi o tabetai desu.", "I want to eat sushi.", "を"),
       E("すしが たべたい です。", "Sushi ga tabetai desu.", "I want to eat sushi.", "が"),
       E("にほんへ いきたい です。", "Nihon e ikitai desu.", "I want to go to Japan.", "へ")]),
    T("Questions", "なにが したいですか",
      ["Ask {なにが したい ですか|nani ga shitai desu ka} for “what do you want to do?”. Ask {なにを たべたい ですか|nani o tabetai desu ka} for “what do you want to eat?”.",
       "Using the {たい|tai} form is perfectly polite when asking a friend, but be careful with seniors: it can sound direct."],
      [E("なにが したい ですか。", "Nani ga shitai desu ka.", "What do you want to do?", "したい"),
       E("なにを たべたい ですか。", "Nani o tabetai desu ka.", "What do you want to eat?", "たべたい"),
       E("どこへ いきたい ですか。", "Doko e ikitai desu ka.", "Where do you want to go?", "いきたい")]),
    T("Only for yourself", "First person only",
      ["{たい|tai} describes your own feelings, or a question to the listener. You cannot say {ミカさんは たべたい です|Mika-san wa tabetai desu} as a plain statement about another person. For others you will learn {たがっています|tagatte imasu} later, or say {たべたい と いって いました|tabetai to itte imashita}, “she said she wants to eat”.",
       "This is because we cannot be sure about another person's inner feelings."],
      [E("わたしは たべたい です。", "Watashi wa tabetai desu.", "I want to eat.", "たべたい"),
       E("ミカさんは たべたい です。", "(wrong)", "Wrong as a statement about someone else.", "ミカさんは", true)]),
    T("Common mistakes", "Use the ます stem",
      ["Do not use the dictionary form: {たべるたい|taberutai} is wrong. And do not add {です|desu} after {たい|tai} in the negative as {たいない|tainai}; it is {たくない|takunai}.",
       "Remember that {たい|tai} is an {い|i}-adjective, so the negative is {たくない|takunai}."],
      [E("たべるたい です。", "(wrong)", "Wrong: use the ます stem.", "たべるたい", true),
       E("たべたい ない です。", "(wrong)", "Wrong: the negative is たくない.", "たべたい ない", true),
       E("たべたい です。", "Tabetai desu.", "Right: I want to eat.", "たい")],
      T0("Say: “I want to go to Japan.”", "にほんへ いきたい です。", "Nihon e ikitai desu.", "I want to go to Japan.", "いきたい"))
  ],
  storyTitle: "Dream trip",
  story: [
    L("Mika", "アレックスさん、なつやすみに どこへ いきたい ですか。", "Arekkusu-san, natsuyasumi ni doko e ikitai desu ka.", "Alex, where do you want to go in summer vacation?"),
    L("Alex", "にほんへ いきたい です。", "Nihon e ikitai desu.", "I want to go to Japan."),
    L("Mika", "なにを したい ですか。", "Nani o shitai desu ka.", "What do you want to do?"),
    L("Alex", "おんせんに はいりたい です。そして ラーメンも たべたい です。", "Onsen ni hairitai desu. Soshite raamen mo tabetai desu.", "I want to go in a hot spring. And I want to eat ramen too."),
    L("Mika", "おみやげは かいたい ですか。", "Omiyage wa kaitai desu ka.", "Do you want to buy souvenirs?"),
    L("Alex", "はい、たくさん かいたい です。", "Hai, takusan kaitai desu.", "Yes, I want to buy a lot.")
  ],
  words: [
    W("たい", "tai", "want to"),
    W("たべたい", "tabetai", "want to eat"),
    W("いきたい", "ikitai", "want to go"),
    W("したい", "shitai", "want to do"),
    W("おんせん", "onsen", "hot spring"),
    W("おみやげ", "omiyage", "souvenir"),
    W("なつやすみ", "natsuyasumi", "summer vacation"),
    W("そして", "soshite", "and, then")
  ],
  tips: [
    "Masu stem plus tai means want to.",
    "Tai is an i-adjective: takunai, takatta, takunakatta.",
    "Use it for your own wants and questions, not statements about others."
  ],
  quiz: [
    ask("tai-form", "How do you say “I want to eat”?", "たべたい です。", ["たべるたい です。", "たべます たい です。"], "ます stem + たい."),
    ask("tai-form", "What is the negative of たべたい?", "たべたくない", ["たべたい ない", "たべない たい"], "たい → たくない."),
    ask("tai-form", "Which particle can mark the object with たい?", "を or が", ["に only", "で only"], "を or が."),
    ask("tai-form", "How do you ask “Where do you want to go?”", "どこへ いきたい ですか。", ["どこへ いく たい ですか。", "どこを いきます たい。"], "いきたい."),
    ask("tai-form", "What is the past of たい?", "たかった", ["たいだった", "たいでした"], "たい is an い-adjective.")
  ]
});

export const tari = lesson({
  id: "tari-form", number: 58, title: "～たり ～たり します: Doing Things Like...",
  summary: "List example activities with たり ～たり します.",
  objective: "By the end you can list two or more things you do, such as “I watch movies and read books”.",
  teach: [
    T("The idea", "Examples of what you do",
      ["{たり|tari} lists activities as examples, not as a complete list. {えいがを みたり、ほんを よんだり します|eiga o mitari, hon o yondari shimasu} means “I do things like watching movies and reading books”. It suggests there are other things too.",
       "It is softer and more casual than just joining verbs with {と|to}."],
      [E("えいがを みたり、ほんを よんだり します。", "Eiga o mitari, hon o yondari shimasu.", "I do things like watch movies and read books.", "たり"),
       E("たべたり、のんだり します。", "Tabetari, nondari shimasu.", "I do things like eat and drink.", "たり")]),
    T("How to make it", "た-form + り",
      ["Take the plain past, the {た|ta}-form, and add {り|ri}. {たべた|tabeta} becomes {たべたり|tabetari}. {のんだ|nonda} becomes {のんだり|nondari}. {した|shita} becomes {したり|shitari}.",
       "At the end of the list, add {します|shimasu} once, whichever tense you want."],
      [E("たべた → たべたり", "tabeta → tabetari", "eat", "たり"),
       E("のんだ → のんだり", "nonda → nondari", "drink", "だり"),
       E("した → したり", "shita → shitari", "do", "たり")]),
    T("In a sentence", "Verb たり、verb たり します",
      ["Repeat the pattern for each action, then {します|shimasu} at the end. {しゅうまつは かいものを したり、ともだちに あったり します|shuumatsu wa kaimono o shitari, tomodachi ni attari shimasu} means “at the weekend, I do things like shopping and meeting friends”.",
       "The tense of the whole sentence is shown by the final {します|shimasu} or {しました|shimashita}."],
      [E("しゅうまつは かいものを したり、ともだちに あったり します。", "Shuumatsu wa kaimono o shitari, tomodachi ni attari shimasu.", "On weekends I do things like shop and meet friends.", "たり"),
       E("きのうは ほんを よんだり、ねたり しました。", "Kinou wa hon o yondari, netari shimashita.", "Yesterday I did things like read and sleep.", "しました"),
       E("なつやすみに うみで およいだり します。", "Natsuyasumi ni umi de oyoidari shimasu.", "In summer vacation I do things like swim in the sea.", "およいだり")]),
    T("Questions", "なにを したり しますか",
      ["Ask {しゅうまつは なにを したり しますか|shuumatsu wa nani o shitari shimasu ka} for “what do you do on weekends?”. Answer with a few examples.",
       "This is a natural way to ask about hobbies and routines."],
      [E("しゅうまつは なにを したり しますか。", "Shuumatsu wa nani o shitari shimasu ka.", "What do you do on weekends?", "したり"),
       E("さんぽを したり、うたを きいたり します。", "Sanpo o shitari, uta o kiitari shimasu.", "I do things like take walks and listen to music.", "たり")]),
    T("Opposites", "Sometimes ～たり ～たり",
      ["With some actions that come in pairs, the pattern means “repeatedly doing both”. {あがったり さがったり します|agattari sagattari shimasu} means “goes up and down”. {いったり きたり します|ittari kitari shimasu} means “goes back and forth”.",
       "This is a very common idiom."],
      [E("あがったり さがったり します。", "Agattari sagattari shimasu.", "It goes up and down.", "あがったり"),
       E("いったり きたり します。", "Ittari kitari shimasu.", "(They) go back and forth.", "いったり")]),
    T("Common mistakes", "Do not mix with て-form lists",
      ["Do not use {たり|tari} for a fixed sequence of steps; it lists examples, so you normally give at least two. And do not forget the final {します|shimasu}: {たべたり のんだり|tabetari nondari} alone is incomplete.",
       "To list steps in order, use the {て|te}-form instead."],
      [E("たべたり のんだり。", "(wrong)", "Incomplete: add します.", "のんだり", true),
       E("たべるり します。", "(wrong)", "Wrong: use the た-form.", "たべるり", true),
       E("たべたり、のんだり します。", "Tabetari, nondari shimasu.", "Right: I eat and drink, among other things.", "たり")],
      T0("Say: “I read books and watch movies.”", "ほんを よんだり、えいがを みたり します。", "Hon o yondari, eiga o mitari shimasu.", "I read books and watch movies.", "たり"))
  ],
  storyTitle: "Weekend habits",
  story: [
    L("Mika", "アレックスさん、しゅうまつは なにを したり しますか。", "Arekkusu-san, shuumatsu wa nani o shitari shimasu ka.", "Alex, what do you do on weekends?"),
    L("Alex", "ほんを よんだり、さんぽを したり します。", "Hon o yondari, sanpo o shitari shimasu.", "I do things like read and take walks."),
    L("Mika", "ともだちと あそんだり しますか。", "Tomodachi to asondari shimasu ka.", "Do you play with friends?"),
    L("Alex", "はい、えいがを みたり、ごはんを たべたり します。", "Hai, eiga o mitari, gohan o tabetari shimasu.", "Yes, I watch movies and eat with them."),
    L("Mika", "いいですね。わたしは うちで ねたり、ゲームを したり します。", "Ii desu ne. Watashi wa uchi de netari, geemu o shitari shimasu.", "Nice. I sleep and play games at home."),
    L("Alex", "それも いいですね。", "Sore mo ii desu ne.", "That's good too.")
  ],
  words: [
    W("たり", "tari", "things like (list)"),
    W("さんぽ", "sanpo", "walk, stroll"),
    W("かいもの", "kaimono", "shopping"),
    W("あそびます", "asobimasu", "play"),
    W("うた", "uta", "song"),
    W("しゅうまつ", "shuumatsu", "weekend"),
    W("ゲーム", "geemu", "game"),
    W("ねたり", "netari", "sleeping and so on")
  ],
  tips: [
    "Plain past plus ri lists examples: tabetari, nondari.",
    "End the whole list with shimasu or shimashita.",
    "It means things like, so it is not a complete list."
  ],
  quiz: [
    ask("tari-form", "How do you make たり from たべる?", "たべたり", ["たべるり", "たべてり"], "た-form + り."),
    ask("tari-form", "How do you say “I do things like eat and drink”?", "たべたり、のんだり します。", ["たべたり、のんだり。", "たべて のんだり します。"], "たり、たり します."),
    ask("tari-form", "Which verb carries the tense?", "the final します", ["the first たり", "none"], "The final します carries the tense."),
    ask("tari-form", "What does たり mean?", "things like", ["only", "never"], "たり lists examples."),
    ask("tari-form", "How do you ask “What do you do on weekends?”", "しゅうまつは なにを したり しますか。", ["しゅうまつは なにを たり しますか。", "しゅうまつ たり なに ます。"], "したり しますか.")
  ]
});

export const kotoGaAru = lesson({
  id: "koto-ga-aru", number: 59, title: "～た ことが あります: Have You Ever...?",
  summary: "Talk about experiences with た ことが あります.",
  objective: "By the end you can say “I have been to Japan” and ask “have you ever eaten sushi?”.",
  teach: [
    T("The idea", "た-form + ことが あります",
      ["To say that you have had an experience, put {ことが あります|koto ga arimasu} after the {た|ta}-form. {にほんへ いった ことが あります|Nihon e itta koto ga arimasu} means “I have been to Japan”.",
       "{こと|koto} means “thing, matter”. The whole phrase says: “the experience of having gone exists”."],
      [E("にほんへ いった ことが あります。", "Nihon e itta koto ga arimasu.", "I have been to Japan.", "ことが あります"),
       E("すしを たべた ことが あります。", "Sushi o tabeta koto ga arimasu.", "I have eaten sushi.", "ことが あります")]),
    T("How to make it", "Plain past + こと",
      ["Use the plain past, the {た|ta}-form: {たべた|tabeta}, {のんだ|nonda}, {みた|mita}, {した|shita}, {いった|itta}. Then add {ことが あります|koto ga arimasu}.",
       "You can also use {ことは あります|koto wa arimasu} to contrast with something else."],
      [E("みた ことが あります。", "Mita koto ga arimasu.", "I have seen it.", "みた"),
       E("のんだ ことが あります。", "Nonda koto ga arimasu.", "I have drunk it.", "のんだ"),
       E("した ことが あります。", "Shita koto ga arimasu.", "I have done it.", "した")]),
    T("The negative", "ことが ありません",
      ["For “have never”, use {ことが ありません|koto ga arimasen}. {にほんへ いった ことが ありません|Nihon e itta koto ga arimasen} means “I have never been to Japan”.",
       "Add {まだ|mada}, yet, for a gentler tone: {まだ いった ことが ありません|mada itta koto ga arimasen}."],
      [E("にほんへ いった ことが ありません。", "Nihon e itta koto ga arimasen.", "I have never been to Japan.", "ことが ありません"),
       E("まだ たべた ことが ありません。", "Mada tabeta koto ga arimasen.", "I haven't eaten it yet.", "ことが ありません"),
       E("のった ことが ありません。", "Notta koto ga arimasen.", "I have never ridden it.", "ことが ありません")]),
    T("Questions", "ことが ありますか",
      ["Ask {すしを たべた ことが ありますか|sushi o tabeta koto ga arimasu ka}, “have you ever eaten sushi?”. A yes answer is {はい、あります|hai, arimasu}. A no answer is {いいえ、ありません|iie, arimasen}.",
       "Add {いちども|ichido mo} to say “not even once”: {いちども ありません|ichido mo arimasen}."],
      [E("にほんへ いった ことが ありますか。", "Nihon e itta koto ga arimasu ka.", "Have you ever been to Japan?", "ことが ありますか"),
       E("はい、あります。", "Hai, arimasu.", "Yes, I have.", "あります"),
       E("いいえ、いちども ありません。", "Iie, ichido mo arimasen.", "No, never.", "いちども")]),
    T("How many times", "かい",
      ["To say how many times, use {かい|kai} before the verb: {にかい いった ことが あります|nikai itta koto ga arimasu} means “I have been twice”. {なんかい|nankai} asks “how many times?”.",
       "Remember {いっかい|ikkai}, once, is irregular."],
      [E("にかい いった ことが あります。", "Nikai itta koto ga arimasu.", "I have been twice.", "にかい"),
       E("なんかい いきましたか。", "Nankai ikimashita ka.", "How many times did you go?", "なんかい"),
       E("いっかい みた ことが あります。", "Ikkai mita koto ga arimasu.", "I have seen it once.", "いっかい")]),
    T("Common mistakes", "Use the た-form, not ます",
      ["Do not put the {ます|masu} form before {こと|koto}: {たべます ことが あります|tabemasu koto ga arimasu} is wrong for experience. Use the plain past, the {た|ta}-form. And do not use {ことが いました|koto ga imashita}; the verb is always {あります|arimasu}.",
       "Also do not confuse it with simple past: {たべました|tabemashita} says you ate once; {たべた ことが あります|tabeta koto ga arimasu} says you have that experience."],
      [E("たべます ことが あります。", "(wrong)", "Wrong for experience: use たべた.", "たべます", true),
       E("たべた ことが います。", "(wrong)", "Wrong: use あります.", "います", true),
       E("たべた ことが あります。", "Tabeta koto ga arimasu.", "Right: I have eaten it.", "ことが あります")],
      T0("Say: “I have been to Japan.”", "にほんへ いった ことが あります。", "Nihon e itta koto ga arimasu.", "I have been to Japan.", "ことが あります"))
  ],
  storyTitle: "Have you ever?",
  story: [
    L("Mika", "アレックスさん、すしを たべた ことが ありますか。", "Arekkusu-san, sushi o tabeta koto ga arimasu ka.", "Alex, have you ever eaten sushi?"),
    L("Alex", "はい、なんかいも あります。", "Hai, nankai mo arimasu.", "Yes, many times."),
    L("Mika", "にほんへ いった ことは ありますか。", "Nihon e itta koto wa arimasu ka.", "Have you been to Japan?"),
    L("Alex", "いいえ、まだ いった ことが ありません。", "Iie, mada itta koto ga arimasen.", "No, I haven't been yet."),
    L("Mika", "ふじさんは？", "Fujisan wa?", "What about Mount Fuji?"),
    L("Alex", "しゃしんで みた ことが あります。いつか のぼりたい です。", "Shashin de mita koto ga arimasu. Itsuka noboritai desu.", "I've seen it in photos. I want to climb it someday.")
  ],
  words: [
    W("たことが あります", "ta koto ga arimasu", "have done (experience)"),
    W("たことが ありません", "ta koto ga arimasen", "have never done"),
    W("いちども", "ichido mo", "not even once"),
    W("なんかい", "nankai", "how many times"),
    W("まだ", "mada", "not yet, still"),
    W("いつか", "itsuka", "someday"),
    W("ふじさん", "Fujisan", "Mt. Fuji"),
    W("のぼります", "noborimasu", "climb")
  ],
  tips: [
    "Plain past plus koto ga arimasu means have done.",
    "Never: koto ga arimasen; add ichido mo for not even once.",
    "Counting times: ikkai, nikai, nankai."
  ],
  quiz: [
    ask("koto-ga-aru", "How do you say “I have been to Japan”?", "にほんへ いった ことが あります。", ["にほんへ いきます ことが あります。", "にほんへ いった ことが います。"], "た-form + ことが あります."),
    ask("koto-ga-aru", "How do you say “I have never eaten it”?", "たべた ことが ありません。", ["たべた ことが いません。", "たべない ことが あります。"], "ことが ありません."),
    ask("koto-ga-aru", "How do you ask “Have you ever eaten sushi?”", "すしを たべた ことが ありますか。", ["すしを たべます ことが ありますか。", "すしを たべて ことが ありますか。"], "た-form."),
    ask("koto-ga-aru", "What does なんかい ask?", "how many times", ["how long", "how much money"], "なんかい asks how many times."),
    ask("koto-ga-aru", "Which verb ends the pattern?", "あります", ["います", "します"], "あります.")
  ]
});
