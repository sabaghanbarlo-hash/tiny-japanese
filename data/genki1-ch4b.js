// Genki I Grammar, chapter 4 (part 1): existence, location and the past tense of です. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const pastVerb = lesson({
  id: "past-verb", number: 27, title: "ました: The Past of Verbs",
  summary: "Say what you did, and did not do, with ました and ませんでした.",
  objective: "By the end you can turn any polite verb into the past, positive and negative.",
  teach: [
    T("The idea", "ます → ました",
      ["You already know the polite present, which ends in {ます|masu}. To talk about the past, change {ます|masu} to {ました|mashita}. Nothing else changes.",
       "This works for every verb in the language: ichidan, godan and the irregular ones."],
      [E("たべます。", "Tabemasu.", "(I) eat.", "ます"),
       E("たべました。", "Tabemashita.", "(I) ate.", "ました"),
       E("いきました。", "Ikimashita.", "(I) went.", "ました")]),
    T("The negative past", "ませんでした",
      ["For “did not”, change {ません|masen} to {ませんでした|masen deshita}. You are adding {でした|deshita}, the same past ending you learned for nouns.",
       "{たべませんでした|tabemasen deshita} means “(I) did not eat”."],
      [E("たべません。", "Tabemasen.", "(I) do not eat.", "ません"),
       E("たべませんでした。", "Tabemasen deshita.", "(I) did not eat.", "ませんでした"),
       E("みませんでした。", "Mimasen deshita.", "(I) did not watch.", "ませんでした")]),
    T("All four forms", "Present and past, positive and negative",
      ["Learn the four forms together. {のみます|nomimasu}, drink. {のみました|nomimashita}, drank. {のみません|nomimasen}, do not drink. {のみませんでした|nomimasen deshita}, did not drink.",
       "Notice the pattern: {ます|masu} and {ました|mashita} are positive, {ません|masen} and {ませんでした|masen deshita} are negative."],
      [E("のみます。", "Nomimasu.", "(I) drink.", "ます"),
       E("のみました。", "Nomimashita.", "(I) drank.", "ました"),
       E("のみません。", "Nomimasen.", "(I) do not drink.", "ません"),
       E("のみませんでした。", "Nomimasen deshita.", "(I) did not drink.", "ませんでした")]),
    T("Irregular verbs", "します and きます",
      ["The irregular verbs follow the same rule. {します|shimasu} becomes {しました|shimashita}. {きます|kimasu} becomes {きました|kimashita}.",
       "The negatives are {しませんでした|shimasen deshita} and {きませんでした|kimasen deshita}."],
      [E("べんきょうしました。", "Benkyou shimashita.", "(I) studied.", "しました"),
       E("ともだちが きました。", "Tomodachi ga kimashita.", "A friend came.", "きました"),
       E("しゅくだいを しませんでした。", "Shukudai o shimasen deshita.", "(I) did not do homework.", "しませんでした")]),
    T("Time words", "きのう, せんしゅう, けさ",
      ["Past verbs go with past time words. {きのう|kinou}, yesterday. {けさ|kesa}, this morning. {せんしゅう|senshuu}, last week. {まいあさ|maiasa}, every morning is a habit, so it takes the present.",
       "Words like {きのう|kinou} need no {に|ni}. Clock times and days of the week take {に|ni}."],
      [E("きのう えいがを みました。", "Kinou eiga o mimashita.", "I watched a movie yesterday.", "みました"),
       E("けさ パンを たべました。", "Kesa pan o tabemashita.", "I ate bread this morning.", "たべました"),
       E("にちようびに いきました。", "Nichiyoubi ni ikimashita.", "I went on Sunday.", "に")]),
    T("Questions and answers", "ましたか",
      ["Add {か|ka} to ask. {きのう なにを しましたか|kinou nani o shimashita ka} means “what did you do yesterday?”. Answer yes with {はい、～ました|hai, mashita} and no with {いいえ、～ませんでした|iie, masen deshita}.",
       "A short answer uses the verb again, because Japanese has no word for “did”."],
      [E("きのう なにを しましたか。", "Kinou nani o shimashita ka.", "What did you do yesterday?", "しましたか"),
       E("はい、みました。", "Hai, mimashita.", "Yes, I watched it.", "みました"),
       E("いいえ、みませんでした。", "Iie, mimasen deshita.", "No, I did not watch it.", "みませんでした")]),
    T("Common mistakes", "Do not mix the endings",
      ["Do not say {たべませんました|tabemasenmashita}. The negative past is {ませんでした|masen deshita}. And do not use {でした|deshita} on its own after a verb: {たべでした|tabedeshita} is wrong.",
       "Always start from the polite stem: {たべ|tabe} plus {ました|mashita}."],
      [E("たべませんました。", "(wrong)", "Wrong: it is ませんでした.", "ませんました", true),
       E("たべでした。", "(wrong)", "Wrong: use ました with verbs.", "でした", true),
       E("たべませんでした。", "Tabemasen deshita.", "Right: (I) did not eat.", "ませんでした")],
      T0("Say: “I went to school yesterday.”", "きのう がっこうへ いきました。", "Kinou gakkou e ikimashita.", "I went to school yesterday.", "いきました"))
  ],
  storyTitle: "What did you do yesterday?",
  story: [
    L("Mika", "アレックスさん、きのう なにを しましたか。", "Arekkusu-san, kinou nani o shimashita ka.", "Alex, what did you do yesterday?"),
    L("Alex", "ともだちと えいがを みました。", "Tomodachi to eiga o mimashita.", "I watched a movie with a friend."),
    L("Mika", "いいですね。ごはんも たべましたか。", "Ii desu ne. Gohan mo tabemashita ka.", "Nice. Did you eat too?"),
    L("Alex", "いいえ、たべませんでした。", "Iie, tabemasen deshita.", "No, I did not eat."),
    L("Mika", "わたしは うちで べんきょうしました。", "Watashi wa uchi de benkyou shimashita.", "I studied at home."),
    L("Alex", "えらいですね。", "Erai desu ne.", "That's admirable.")
  ],
  words: [
    W("ました", "mashita", "did (polite past)"),
    W("ませんでした", "masen deshita", "did not"),
    W("きのう", "kinou", "yesterday"),
    W("けさ", "kesa", "this morning"),
    W("せんしゅう", "senshuu", "last week"),
    W("えいが", "eiga", "movie"),
    W("しゅくだい", "shukudai", "homework"),
    W("えらい", "erai", "admirable, great")
  ],
  tips: [
    "ます → ました. ません → ませんでした.",
    "Every verb follows the same rule, including します and きます.",
    "きのう and けさ need no に; days of the week do."
  ],
  quiz: [
    ask("past-verb", "What is the past of たべます?", "たべました", ["たべでした", "たべます"], "ます → ました."),
    ask("past-verb", "What is the negative past of のみます?", "のみませんでした", ["のみませんました", "のみでした"], "ませんでした."),
    ask("past-verb", "What is the past of します?", "しました", ["しるました", "しでした"], "します → しました."),
    ask("past-verb", "Which means “What did you do yesterday?”", "きのう なにを しましたか。", ["きのう なにを しますか。", "あした なにを しましたか。"], "ましたか is past."),
    ask("past-verb", "Which means “did not go”?", "いきませんでした", ["いきました", "いきません"], "ませんでした is the negative past.")
  ]
});

export const nimoDemo = lesson({
  id: "ni-mo-de-mo", number: 28, title: "にも and でも: Adding も to Place Particles",
  summary: "Combine も with に and で, and know when も replaces を, は and が.",
  objective: "By the end you can say “also” and “not anywhere” correctly with place particles.",
  teach: [
    T("The idea", "も means “also”",
      ["You learned {も|mo} as “also”. It can replace {は|wa}, {が|ga} and {を|o}. But it cannot replace {に|ni} or {で|de}. Those stay, and {も|mo} is added after them.",
       "So {に|ni} becomes {にも|nimo}, and {で|de} becomes {でも|demo}."],
      [E("ミカさんも いきます。", "Mika-san mo ikimasu.", "Mika goes too. (replaces は)", "も"),
       E("おんがくも ききます。", "Ongaku mo kikimasu.", "(I) listen to music too. (replaces を)", "も")]),
    T("に + も", "にも",
      ["After a place or time marked with {に|ni}, add {も|mo}: {にも|nimo}. {としょかんにも いきます|toshokan ni mo ikimasu} means “I go to the library too”.",
       "With existence, {にも|nimo} says there is something there as well."],
      [E("としょかんにも いきます。", "Toshokan ni mo ikimasu.", "(I) go to the library too.", "にも"),
       E("へやにも ほんが あります。", "Heya ni mo hon ga arimasu.", "There is a book in the room too.", "にも")]),
    T("で + も", "でも",
      ["After a place of action marked with {で|de}, add {も|mo}: {でも|demo}. {うちでも べんきょうします|uchi de mo benkyou shimasu} means “I study at home too”.",
       "The same works for a tool or a means."],
      [E("うちでも べんきょうします。", "Uchi de mo benkyou shimasu.", "(I) study at home too.", "でも"),
       E("カフェでも ほんを よみます。", "Kafe de mo hon o yomimasu.", "(I) read at a cafe too.", "でも")]),
    T("Negative: anywhere, anyone", "どこにも, なにも, だれも",
      ["With a question word plus {も|mo} and a negative verb, you say “not anywhere”, “nothing” and “nobody”. {どこにも いきません|doko ni mo ikimasen} means “I am not going anywhere”.",
       "{なにも たべません|nani mo tabemasen} means “I eat nothing”. {だれも いません|dare mo imasen} means “there is nobody”."],
      [E("どこにも いきません。", "Doko ni mo ikimasen.", "(I) am not going anywhere.", "どこにも"),
       E("なにも たべません。", "Nani mo tabemasen.", "(I) eat nothing.", "なにも"),
       E("だれも いません。", "Dare mo imasen.", "There is nobody.", "だれも")]),
    T("Note: で and も together", "Two different meanings",
      ["{でも|demo} here is {で|de} plus {も|mo}. Do not confuse it with another {でも|demo} that means “but”, or “even”, which you may meet later. Context tells you which.",
       "Here we only use {で|de} plus {も|mo}."],
      [E("がっこうでも あそびます。", "Gakkou de mo asobimasu.", "(I) play at school too.", "でも"),
       E("ここでも のみます。", "Koko de mo nomimasu.", "(I) drink here too.", "でも")]),
    T("Common mistakes", "Do not drop に or で",
      ["Do not replace {に|ni} or {で|de} with {も|mo}. {としょかんも いきます|toshokan mo ikimasu} sounds like “the library goes too”, which is wrong. Say {としょかんにも|toshokan ni mo}.",
       "Also do not use a positive verb with a question word plus {も|mo}: it needs the negative."],
      [E("としょかんも いきます。", "(wrong)", "Wrong: keep に: としょかんにも.", "としょかんも", true),
       E("なにも たべます。", "(wrong)", "Wrong: なにも needs a negative verb.", "なにも", true),
       E("としょかんにも いきます。", "Toshokan ni mo ikimasu.", "Right: (I) go to the library too.", "にも")],
      T0("Say: “I am not going anywhere.”", "どこにも いきません。", "Doko ni mo ikimasen.", "I am not going anywhere.", "どこにも"))
  ],
  storyTitle: "A quiet weekend",
  story: [
    L("Mika", "しゅうまつ、どこかに いきましたか。", "Shuumatsu, doko ka ni ikimashita ka.", "Did you go anywhere at the weekend?"),
    L("Alex", "いいえ、どこにも いきませんでした。", "Iie, doko ni mo ikimasen deshita.", "No, I did not go anywhere."),
    L("Mika", "うちで なにを しましたか。", "Uchi de nani o shimashita ka.", "What did you do at home?"),
    L("Alex", "べんきょうしました。きょうも うちで べんきょうします。", "Benkyou shimashita. Kyou mo uchi de benkyou shimasu.", "I studied. Today too I will study at home."),
    L("Mika", "わたしも うちで べんきょうします。としょかんにも いきます。", "Watashi mo uchi de benkyou shimasu. Toshokan ni mo ikimasu.", "I will study at home too. I will go to the library as well."),
    L("Alex", "いっしょに いきましょう。", "Issho ni ikimashou.", "Let's go together.")
  ],
  words: [
    W("にも", "nimo", "also (place/time)"),
    W("でも", "demo", "also (place of action)"),
    W("どこにも", "doko ni mo", "nowhere (with negative)"),
    W("なにも", "nani mo", "nothing (with negative)"),
    W("だれも", "dare mo", "nobody (with negative)"),
    W("しゅうまつ", "shuumatsu", "weekend"),
    W("いっしょに", "issho ni", "together"),
    W("カフェ", "kafe", "cafe")
  ],
  tips: [
    "も replaces は, が and を, but is added after に and で.",
    "Question word + も + negative verb = nothing, nobody, nowhere.",
    "Keep に and で: write にも and でも."
  ],
  quiz: [
    ask("ni-mo-de-mo", "How do you say “I go to the library too”?", "としょかんにも いきます。", ["としょかんも いきます。", "としょかんがも いきます。"], "に + も = にも."),
    ask("ni-mo-de-mo", "How do you say “I study at home too”?", "うちでも べんきょうします。", ["うちもで べんきょうします。", "うちを べんきょうします。"], "で + も = でも."),
    ask("ni-mo-de-mo", "Which means “I am not going anywhere”?", "どこにも いきません。", ["どこにも いきます。", "どこで いきません。"], "どこにも + negative."),
    ask("ni-mo-de-mo", "Which verb form goes with なにも?", "negative", ["positive", "past only"], "なにも needs a negative verb."),
    ask("ni-mo-de-mo", "Which particle can も replace?", "を", ["に", "で"], "も replaces は, が, を but follows に and で.")
  ]
});

export const duration = lesson({
  id: "duration-jikan", number: 29, title: "～じかん: How Long",
  summary: "Say how many hours, days, weeks and months something takes, and ask with どのくらい.",
  objective: "By the end you can say how long you do something and ask “how long?”.",
  teach: [
    T("The idea", "Amounts of time have no particle",
      ["To say how long something lasts, put the amount of time directly before the verb. Do not use a particle like {に|ni} or {を|o} after it.",
       "{にじかん べんきょうしました|nijikan benkyou shimashita} means “I studied for two hours”."],
      [E("にじかん べんきょうしました。", "Nijikan benkyou shimashita.", "(I) studied for two hours.", "にじかん"),
       E("さんじかん ねました。", "Sanjikan nemashita.", "(I) slept for three hours.", "さんじかん")]),
    T("Hours: じかん", "いち, に, さん + じかん",
      ["For hours, add {じかん|jikan} to a number: {いちじかん|ichijikan}, {にじかん|nijikan}, {さんじかん|sanjikan}, {よじかん|yojikan}, {ごじかん|gojikan}.",
       "Be careful: four hours is {よじかん|yojikan}, not {よんじかん|yonjikan}. And do not confuse {じかん|jikan}, a length of time, with {じ|ji}, a clock time such as {さんじ|sanji}, three o'clock."],
      [E("いちじかん", "ichijikan", "one hour", "じかん"),
       E("よじかん", "yojikan", "four hours", "よじかん"),
       E("さんじ に あいます。", "Sanji ni aimasu.", "(We) meet at three o'clock. (clock time)", "さんじ")]),
    T("Minutes, days, weeks", "ふん, にち, しゅうかん",
      ["Minutes use {ふん|fun} or {ぷん|pun}, for example {じゅっぷん|juppun}, ten minutes. Days use {にち|nichi}: {ふつか|futsuka} is two days and {みっか|mikka} is three days. Weeks use {しゅうかん|shuukan}: {にしゅうかん|nishuukan} is two weeks.",
       "These counters have irregular sounds, so learn them as words and treat them as vocabulary."],
      [E("にしゅうかん にほんに いました。", "Nishuukan Nihon ni imashita.", "(I) was in Japan for two weeks.", "にしゅうかん"),
       E("みっか やすみました。", "Mikka yasumimashita.", "(I) rested for three days.", "みっか"),
       E("じゅっぷん まちました。", "Juppun machimashita.", "(I) waited ten minutes.", "じゅっぷん")]),
    T("Months and years", "かげつ, ねん",
      ["Months use {かげつ|kagetsu}: {さんかげつ|sankagetsu} is three months. Years use {ねん|nen}: {にねん|ninen} is two years.",
       "Again, no particle before the verb."],
      [E("さんかげつ にほんごを べんきょうしました。", "Sankagetsu nihongo o benkyou shimashita.", "(I) studied Japanese for three months.", "さんかげつ"),
       E("にねん ここに いました。", "Ninen koko ni imashita.", "(I) was here for two years.", "にねん")]),
    T("Asking: どのくらい", "How long?",
      ["To ask how long, use {どのくらい|dono kurai}. {どのくらい べんきょうしましたか|dono kurai benkyou shimashita ka} means “how long did you study?”. You can also say {なんじかん|nanjikan}, how many hours.",
       "Answer with an amount of time."],
      [E("どのくらい べんきょうしましたか。", "Dono kurai benkyou shimashita ka.", "How long did you study?", "どのくらい"),
       E("なんじかん ねましたか。", "Nanjikan nemashita ka.", "How many hours did you sleep?", "なんじかん"),
       E("ごじかん ねました。", "Gojikan nemashita.", "(I) slept five hours.", "ごじかん")]),
    T("Approximately: くらい", "About",
      ["Add {くらい|kurai} after an amount to say “about”. {さんじかんくらい|sanjikan kurai} means “about three hours”.",
       "It is common in daily conversation because we rarely give exact times."],
      [E("さんじかんくらい かかります。", "Sanjikan kurai kakarimasu.", "It takes about three hours.", "くらい"),
       E("ごふんくらい まちました。", "Gofun kurai machimashita.", "(I) waited about five minutes.", "くらい")]),
    T("Common mistakes", "No particle, and watch the sounds",
      ["Do not add {を|o} or {に|ni} after an amount of time. {にじかんを べんきょうしました|nijikan o benkyou shimashita} is wrong. And say {よじかん|yojikan}, not {よんじかん|yonjikan}.",
       "Do not mix up {じ|ji} for clock time and {じかん|jikan} for length."],
      [E("にじかんに べんきょうしました。", "(wrong)", "Wrong: no particle after the amount.", "に", true),
       E("よんじかん ねました。", "(wrong)", "Wrong: four hours is よじかん.", "よんじかん", true),
       E("にじかん べんきょうしました。", "Nijikan benkyou shimashita.", "Right: (I) studied for two hours.", "にじかん")],
      T0("Say: “I slept for six hours.”", "ろくじかん ねました。", "Rokujikan nemashita.", "I slept for six hours.", "ろくじかん"))
  ],
  storyTitle: "How long?",
  story: [
    L("Mika", "きのう どのくらい べんきょうしましたか。", "Kinou dono kurai benkyou shimashita ka.", "How long did you study yesterday?"),
    L("Alex", "さんじかんくらい べんきょうしました。", "Sanjikan kurai benkyou shimashita.", "About three hours."),
    L("Mika", "すごいですね。なんじかん ねましたか。", "Sugoi desu ne. Nanjikan nemashita ka.", "Wow. How many hours did you sleep?"),
    L("Alex", "ろくじかん ねました。ミカさんは?", "Rokujikan nemashita. Mika-san wa?", "Six hours. And you?"),
    L("Mika", "わたしは はちじかん ねました。", "Watashi wa hachijikan nemashita.", "I slept eight hours."),
    L("Alex", "いいですね。", "Ii desu ne.", "Lucky you.")
  ],
  words: [
    W("じかん", "jikan", "hours (length of time)"),
    W("ふん / ぷん", "fun / pun", "minutes"),
    W("しゅうかん", "shuukan", "weeks"),
    W("かげつ", "kagetsu", "months"),
    W("ねん", "nen", "years"),
    W("どのくらい", "dono kurai", "how long, how much"),
    W("くらい", "kurai", "about"),
    W("かかります", "kakarimasu", "it takes (time)")
  ],
  tips: [
    "An amount of time goes straight before the verb, with no particle.",
    "Four hours is よじかん.",
    "Ask with どのくらい or なんじかん; add くらい for “about”."
  ],
  quiz: [
    ask("duration-jikan", "How do you say “for two hours”?", "にじかん", ["にじ", "にじかんに"], "Number + じかん."),
    ask("duration-jikan", "How do you say “four hours”?", "よじかん", ["よんじかん", "しじかん"], "Four hours is よじかん."),
    ask("duration-jikan", "Which particle follows an amount of time?", "none", ["を", "に"], "No particle is needed."),
    ask("duration-jikan", "How do you ask “How long?”", "どのくらい", ["どこに", "だれが"], "どのくらい asks about length."),
    ask("duration-jikan", "What does くらい add?", "about", ["exactly", "never"], "くらい means about.")
  ]
});

export const takusan = lesson({
  id: "takusan", number: 30, title: "たくさん: Saying “a Lot”",
  summary: "Say that there are many things or that you do something a lot, and know the other quantity words.",
  objective: "By the end you can use たくさん, すこし and ぜんぜん in sentences.",
  teach: [
    T("The idea", "たくさん means a lot, many",
      ["{たくさん|takusan} means “a lot” or “many”. It works with both things you can count and amounts of things, and with how much someone does something.",
       "It is an adverb, so it goes before the verb and needs no particle."],
      [E("ほんが たくさん あります。", "Hon ga takusan arimasu.", "There are a lot of books.", "たくさん"),
       E("たくさん たべました。", "Takusan tabemashita.", "(I) ate a lot.", "たくさん")]),
    T("Position in the sentence", "Before the verb",
      ["Put {たくさん|takusan} right before the verb. {ほんを たくさん よみます|hon o takusan yomimasu} means “I read a lot of books”.",
       "You do not say {の|no} between the noun and {たくさん|takusan}, as in English “a lot of”. The adverb stands on its own."],
      [E("ほんを たくさん よみます。", "Hon o takusan yomimasu.", "(I) read a lot of books.", "たくさん"),
       E("ひとが たくさん います。", "Hito ga takusan imasu.", "There are a lot of people.", "たくさん")]),
    T("The opposite: すこし", "A little",
      ["{すこし|sukoshi} means “a little”. {すこし のみました|sukoshi nomimashita} means “I drank a little”. It also goes before the verb.",
       "{ちょっと|chotto} is a casual way to say “a little” and is very common in speech."],
      [E("すこし たべました。", "Sukoshi tabemashita.", "(I) ate a little.", "すこし"),
       E("ちょっと まって ください。", "Chotto matte kudasai.", "Please wait a moment.", "ちょっと")]),
    T("Not at all: ぜんぜん", "ぜんぜん + negative",
      ["{ぜんぜん|zenzen} means “not at all” and goes with a negative verb. {ぜんぜん たべません|zenzen tabemasen} means “I do not eat at all”.",
       "{あまり|amari}, “not very”, also goes with a negative verb. {あまり たべません|amari tabemasen} means “I do not eat much”."],
      [E("ぜんぜん のみません。", "Zenzen nomimasen.", "(I) do not drink at all.", "ぜんぜん"),
       E("あまり たべません。", "Amari tabemasen.", "(I) do not eat much.", "あまり")]),
    T("A scale", "From a lot to none",
      ["Here is the scale. {たくさん|takusan}, a lot. {すこし|sukoshi}, a little. {あまり|amari} and negative, not much. {ぜんぜん|zenzen} and negative, not at all.",
       "Remember that the last two need a negative verb."],
      [E("たくさん たべます。", "Takusan tabemasu.", "(I) eat a lot.", "たくさん"),
       E("すこし たべます。", "Sukoshi tabemasu.", "(I) eat a little.", "すこし"),
       E("あまり たべません。", "Amari tabemasen.", "(I) do not eat much.", "あまり"),
       E("ぜんぜん たべません。", "Zenzen tabemasen.", "(I) do not eat at all.", "ぜんぜん")]),
    T("Common mistakes", "No の, and watch the negative",
      ["Do not say {たくさんの ほん|takusan no hon} here when you are learning the basic pattern; {ほんが たくさん|hon ga takusan} is simpler and always safe. And do not use {ぜんぜん|zenzen} with a positive verb.",
       "Do not use {たくさん|takusan} for a person's age or for exact numbers."],
      [E("ぜんぜん たべます。", "(wrong)", "Wrong: ぜんぜん needs a negative.", "ぜんぜん", true),
       E("ほんが たくさん あります。", "Hon ga takusan arimasu.", "Right: There are a lot of books.", "たくさん")],
      T0("Say: “I do not drink coffee at all.”", "コーヒーを ぜんぜん のみません。", "Koohii o zenzen nomimasen.", "I do not drink coffee at all.", "ぜんぜん"))
  ],
  storyTitle: "At the market",
  story: [
    L("Alex", "ミカさん、やさいを たくさん かいましたね。", "Mika-san, yasai o takusan kaimashita ne.", "Mika, you bought a lot of vegetables."),
    L("Mika", "はい。わたしは やさいが すきです。", "Hai. Watashi wa yasai ga suki desu.", "Yes. I like vegetables."),
    L("Alex", "にくも かいましたか。", "Niku mo kaimashita ka.", "Did you buy meat too?"),
    L("Mika", "いいえ、すこしだけ。あまり たべません。", "Iie, sukoshi dake. Amari tabemasen.", "No, only a little. I do not eat much."),
    L("Alex", "わたしは さかなを ぜんぜん たべません。", "Watashi wa sakana o zenzen tabemasen.", "I do not eat fish at all."),
    L("Mika", "そうですか。", "Sou desu ka.", "Is that so?")
  ],
  words: [
    W("たくさん", "takusan", "a lot, many"),
    W("すこし", "sukoshi", "a little"),
    W("ちょっと", "chotto", "a little, a moment"),
    W("あまり", "amari", "not very, not much"),
    W("ぜんぜん", "zenzen", "not at all"),
    W("やさい", "yasai", "vegetables"),
    W("にく", "niku", "meat"),
    W("さかな", "sakana", "fish")
  ],
  tips: [
    "たくさん goes before the verb, with no particle.",
    "ぜんぜん and あまり need a negative verb.",
    "Scale: たくさん, すこし, あまり ～ません, ぜんぜん ～ません."
  ],
  quiz: [
    ask("takusan", "What does たくさん mean?", "a lot", ["a little", "not at all"], "たくさん is a lot."),
    ask("takusan", "Where does たくさん go?", "before the verb", ["after the verb", "at the start of the sentence only"], "Before the verb."),
    ask("takusan", "Which goes with a negative verb?", "ぜんぜん", ["たくさん", "すこし"], "ぜんぜん needs a negative."),
    ask("takusan", "Which means “a little”?", "すこし", ["たくさん", "ぜんぜん"], "すこし is a little."),
    ask("takusan", "Which means “I do not eat much”?", "あまり たべません。", ["ぜんぜん たべます。", "たくさん たべません。"], "あまり + negative.")
  ]
});
