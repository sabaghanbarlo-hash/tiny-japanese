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

export const yori = lesson({
  id: "comparison-yori", number: 60, title: "～は ～より: Comparing Two Things",
  summary: "Say that one thing is more than another with より.",
  objective: "By the end you can say “A is bigger than B” and “cats are cuter than dogs”.",
  teach: [
    T("The idea", "A は B より adjective です",
      ["To say that A is more than B, use the pattern: A, {は|wa}, B, {より|yori}, adjective. {ねこは いぬより かわいい です|neko wa inu yori kawaii desu} means “cats are cuter than dogs”.",
       "{より|yori} means “than”. It marks the thing you compare against."],
      [E("ねこは いぬより かわいい です。", "Neko wa inu yori kawaii desu.", "Cats are cuter than dogs.", "より"),
       E("とうきょうは おおさかより おおきい です。", "Toukyou wa Oosaka yori ookii desu.", "Tokyo is bigger than Osaka.", "より")]),
    T("With な-adjectives", "Same pattern",
      ["The pattern is identical for {な|na}-adjectives. {これは それより しずか です|kore wa sore yori shizuka desu} means “this is quieter than that”.",
       "You do not need to add anything to the adjective."],
      [E("これは それより しずか です。", "Kore wa sore yori shizuka desu.", "This is quieter than that.", "より"),
       E("バスは でんしゃより べんり です。", "Basu wa densha yori benri desu.", "The bus is more convenient than the train.", "より"),
       E("わたしの へやは ミカさんの へやより きれい です。", "Watashi no heya wa Mika-san no heya yori kirei desu.", "My room is tidier than Mika's.", "より")]),
    T("Degree words", "ずっと, もっと, すこし",
      ["Add a degree word before the adjective. {ずっと|zutto} means “much more”. {すこし|sukoshi} means “a little more”. {もっと|motto} means “even more”.",
       "{このほうが ずっと やすい です|kono hou ga zutto yasui desu} means “this one is much cheaper”."],
      [E("これは それより ずっと やすい です。", "Kore wa sore yori zutto yasui desu.", "This is much cheaper than that.", "ずっと"),
       E("きょうは きのうより すこし さむい です。", "Kyou wa kinou yori sukoshi samui desu.", "Today is a little colder than yesterday.", "すこし"),
       E("もっと ゆっくり はなして ください。", "Motto yukkuri hanashite kudasai.", "Please speak even more slowly.", "もっと")]),
    T("With verbs", "Comparing actions",
      ["You can compare activities too. {あるくより バスの ほうが はやい です|aruku yori basu no hou ga hayai desu} means “the bus is faster than walking”. Put the verb in its plain form before {より|yori}.",
       "This is a common pattern for talking about choices."],
      [E("あるくより バスの ほうが はやい です。", "Aruku yori basu no hou ga hayai desu.", "The bus is faster than walking.", "より"),
       E("みるより よむ ほうが すき です。", "Miru yori yomu hou ga suki desu.", "I like reading better than watching.", "より"),
       E("たべるより のむ ほうが おおい です。", "Taberu yori nomu hou ga ooi desu.", "I drink more than I eat.", "より")]),
    T("Starting from the other side", "B より A の ほうが",
      ["You can also begin with the thing you compare against. {いぬより ねこの ほうが かわいい です|inu yori neko no hou ga kawaii desu} means “cats are cuter than dogs”. The word {ほう|hou} marks the winner of the comparison. The next lessons explain it in detail.",
       "Both orders are common."],
      [E("いぬより ねこの ほうが かわいい です。", "Inu yori neko no hou ga kawaii desu.", "Cats are cuter than dogs.", "ほう"),
       E("えいがより ほんの ほうが おもしろい です。", "Eiga yori hon no hou ga omoshiroi desu.", "Books are more interesting than movies.", "ほう")]),
    T("Common mistakes", "Do not use より for the winner",
      ["Do not put {より|yori} after the winner. {いぬは ねこより かわいい です|inu wa neko yori kawaii desu} means dogs are cuter, the opposite of what you may want. And do not add {です|desu} after {より|yori}: {ねこより です|neko yori desu} is incomplete.",
       "Remember: the {より|yori} word is the one that loses."],
      [E("いぬは ねこより かわいい です。", "Inu wa neko yori kawaii desu.", "Careful: this means dogs are cuter.", "より"),
       E("ねこは いぬ より です。", "(wrong)", "Wrong: add the adjective.", "より です", true),
       E("ねこは いぬより かわいい です。", "Neko wa inu yori kawaii desu.", "Right: Cats are cuter than dogs.", "より")],
      T0("Say: “Tokyo is bigger than Osaka.”", "とうきょうは おおさかより おおきい です。", "Toukyou wa Oosaka yori ookii desu.", "Tokyo is bigger than Osaka.", "より"))
  ],
  storyTitle: "Dogs or cats?",
  story: [
    L("Alex", "ミカさんは いぬが すきですか。ねこが すきですか。", "Mika-san wa inu ga suki desu ka. Neko ga suki desu ka.", "Mika, do you like dogs or cats?"),
    L("Mika", "ねこの ほうが すきです。いぬより かわいいと おもいます。", "Neko no hou ga suki desu. Inu yori kawaii to omoimasu.", "I like cats better. I think they are cuter than dogs."),
    L("Alex", "そうですか。わたしは いぬの ほうが すきです。", "Sou desu ka. Watashi wa inu no hou ga suki desu.", "I see. I prefer dogs."),
    L("Mika", "どうして ですか。", "Doushite desu ka.", "Why?"),
    L("Alex", "いぬは ねこより げんきです。", "Inu wa neko yori genki desu.", "Dogs are more energetic than cats."),
    L("Mika", "たしかに！", "Tashika ni!", "True!")
  ],
  words: [
    W("より", "yori", "than"),
    W("ほう", "hou", "side, one (of two)"),
    W("ずっと", "zutto", "much more"),
    W("もっと", "motto", "even more"),
    W("かわいい", "kawaii", "cute"),
    W("はやい", "hayai", "fast, early"),
    W("でんしゃ", "densha", "train"),
    W("たしかに", "tashika ni", "indeed, true")
  ],
  tips: [
    "A wa B yori adjective desu: A is more than B.",
    "The word after yori is the weaker one.",
    "Add zutto or sukoshi before the adjective for degree."
  ],
  quiz: [
    ask("comparison-yori", "How do you say “Cats are cuter than dogs”?", "ねこは いぬより かわいい です。", ["ねこより いぬは かわいい です。", "ねこは いぬを かわいい です。"], "A は B より adjective."),
    ask("comparison-yori", "What does より mean?", "than", ["and", "because"], "より is than."),
    ask("comparison-yori", "Which means “much more”?", "ずっと", ["すこし", "ぜんぜん"], "ずっと is much more."),
    ask("comparison-yori", "Which is the winner in 「A は B より たかい」?", "A", ["B", "both"], "A is more expensive."),
    ask("comparison-yori", "How do you say “Today is a little colder than yesterday”?", "きょうは きのうより すこし さむい です。", ["きょうは きのうが すこし さむい です。", "きのうは きょうより すこし さむい です。"], "より + degree word.")
  ]
});

export const dochira = lesson({
  id: "comparison-dochira", number: 61, title: "どちらが ～ですか: Which One?",
  summary: "Ask which of two things is more, and answer with ～の ほうが.",
  objective: "By the end you can ask “which is bigger, A or B?” and answer “A is bigger”.",
  teach: [
    T("The idea", "A と B と どちらが ですか",
      ["To ask which of two things is more, use: A, {と|to}, B, {と|to}, {どちらが|dochira ga}, adjective, {ですか|desu ka}. {ねこと いぬと どちらが かわいい ですか|neko to inu to dochira ga kawaii desu ka} means “which is cuter, cats or dogs?”.",
       "{どちら|dochira} means “which one (of two)”."],
      [E("ねこと いぬと どちらが かわいい ですか。", "Neko to inu to dochira ga kawaii desu ka.", "Which is cuter, cats or dogs?", "どちら"),
       E("バスと でんしゃと どちらが はやい ですか。", "Basu to densha to dochira ga hayai desu ka.", "Which is faster, the bus or the train?", "どちら")]),
    T("Answering", "A の ほうが adjective です",
      ["Answer with {A の ほうが adjective です|A no hou ga adjective desu}. {ねこの ほうが かわいい です|neko no hou ga kawaii desu} means “cats are cuter”. The word {ほう|hou} means “side” and points to the winner.",
       "You can also answer just {ねこ です|neko desu}, but the full pattern is clearer."],
      [E("ねこの ほうが かわいい です。", "Neko no hou ga kawaii desu.", "Cats are cuter.", "ほうが"),
       E("でんしゃの ほうが はやい です。", "Densha no hou ga hayai desu.", "The train is faster.", "ほうが"),
       E("コーヒーの ほうが すき です。", "Koohii no hou ga suki desu.", "I like coffee better.", "ほうが")]),
    T("Both or neither", "どちらも",
      ["If you think both are the same, say {どちらも|dochira mo}, “both”. {どちらも すき です|dochira mo suki desu} means “I like both”. With a negative verb, {どちらも|dochira mo} means “neither”: {どちらも すき じゃ ありません|dochira mo suki ja arimasen}.",
       "Another useful answer is {おなじ くらい です|onaji kurai desu}, “about the same”."],
      [E("どちらも すき です。", "Dochira mo suki desu.", "I like both.", "どちらも"),
       E("どちらも すき じゃ ありません。", "Dochira mo suki ja arimasen.", "I like neither.", "どちらも"),
       E("おなじ くらい です。", "Onaji kurai desu.", "They are about the same.", "おなじ")]),
    T("Casual speech", "どっち",
      ["In casual speech, {どちら|dochira} becomes {どっち|docchi}. {ねこと いぬと どっちが すき？|neko to inu to docchi ga suki} means “cats or dogs, which do you like?”.",
       "Use it with friends."],
      [E("ねこと いぬと どっちが すき？", "Neko to inu to docchi ga suki?", "Cats or dogs, which do you like?", "どっち"),
       E("ねこの ほうが すき。", "Neko no hou ga suki.", "I like cats better.", "ほうが")]),
    T("Other question words", "どちら for places and choices",
      ["{どちら|dochira} also asks about choices of any kind. {コーヒーと おちゃと どちらが いい ですか|koohii to ocha to dochira ga ii desu ka} means “coffee or tea, which would you like?”. In a shop, {どちらに しますか|dochira ni shimasu ka} means “which will you take?”.",
       "It is also a polite way to say “where” in formal speech, such as {おくには どちらですか|okuni wa dochira desu ka}, “where are you from?”."],
      [E("コーヒーと おちゃと どちらが いい ですか。", "Koohii to ocha to dochira ga ii desu ka.", "Coffee or tea, which do you prefer?", "どちらが"),
       E("どちらに しますか。", "Dochira ni shimasu ka.", "Which will you take?", "どちらに"),
       E("おくには どちら ですか。", "Okuni wa dochira desu ka.", "Where are you from?", "どちら")]),
    T("Common mistakes", "Use どちら for two, not three",
      ["Use {どちら|dochira} only when there are exactly two options. For three or more, you will use {なにが いちばん|nani ga ichiban}, in the next lesson. And do not forget the second {と|to}: {ねこと いぬ どちらが|neko to inu dochira ga} is incomplete.",
       "Also do not answer with {より|yori} alone; use {ほう|hou}."],
      [E("ねこと いぬ どちらが かわいい ですか。", "(wrong)", "Incomplete: add the second と.", "いぬ どちら", true),
       E("ねこより かわいい です。", "(wrong)", "Wrong answer shape: use の ほうが.", "より", true),
       E("ねこの ほうが かわいい です。", "Neko no hou ga kawaii desu.", "Right: Cats are cuter.", "ほうが")],
      T0("Say: “Which is faster, the bus or the train?”", "バスと でんしゃと どちらが はやい ですか。", "Basu to densha to dochira ga hayai desu ka.", "Which is faster, the bus or the train?", "どちら"))
  ],
  storyTitle: "Coffee or tea?",
  story: [
    L("Mika", "コーヒーと おちゃと どちらが すきですか。", "Koohii to ocha to dochira ga suki desu ka.", "Coffee or tea, which do you like?"),
    L("Alex", "コーヒーの ほうが すきです。", "Koohii no hou ga suki desu.", "I like coffee better."),
    L("Mika", "ひるごはんの あとも コーヒーですか。", "Hirugohan no ato mo koohii desu ka.", "Even after lunch?"),
    L("Alex", "いいえ、ひるは おちゃの ほうが いいです。", "Iie, hiru wa ocha no hou ga ii desu.", "No, at lunchtime tea is better."),
    L("Mika", "パンと ごはんと どちらが すきですか。", "Pan to gohan to dochira ga suki desu ka.", "Bread or rice, which do you like?"),
    L("Alex", "どちらも すきです。", "Dochira mo suki desu.", "I like both.")
  ],
  words: [
    W("どちら", "dochira", "which (of two)"),
    W("どっち", "docchi", "which (casual)"),
    W("ほう", "hou", "side, one (of two)"),
    W("どちらも", "dochira mo", "both / neither"),
    W("おなじ", "onaji", "same"),
    W("パン", "pan", "bread"),
    W("あと", "ato", "after"),
    W("おくに", "okuni", "your country")
  ],
  tips: [
    "A to B to dochira ga adjective desu ka asks which of two.",
    "Answer with X no hou ga adjective desu.",
    "Dochira mo means both, or neither with a negative."
  ],
  quiz: [
    ask("comparison-dochira", "How do you ask “Which is cuter, cats or dogs?”", "ねこと いぬと どちらが かわいい ですか。", ["ねこと いぬ どれが かわいい ですか。", "ねこより いぬを どちら ですか。"], "A と B と どちらが."),
    ask("comparison-dochira", "How do you answer “Cats are cuter”?", "ねこの ほうが かわいい です。", ["ねこが どちら かわいい です。", "ねこより どちら です。"], "ねこの ほうが."),
    ask("comparison-dochira", "What does どちらも mean with a positive verb?", "both", ["neither", "which"], "どちらも is both."),
    ask("comparison-dochira", "What is the casual form of どちら?", "どっち", ["どれ", "どこ"], "どっち."),
    ask("comparison-dochira", "How many options does どちら compare?", "two", ["three", "five"], "どちら is for two.")
  ]
});

export const ichiban = lesson({
  id: "comparison-ichiban", number: 62, title: "いちばん: The Most",
  summary: "Say what is the most among three or more things with いちばん and の なかで.",
  objective: "By the end you can ask and say “which is the most delicious?” and “who is the tallest in the class?”.",
  teach: [
    T("The idea", "いちばん means number one",
      ["{いちばん|ichiban} is the word for “the most”, “number one”. Put it before an adjective: {いちばん おいしい|ichiban oishii} means “the most delicious”.",
       "It works for any adjective and with adverbs too."],
      [E("いちばん おいしい です。", "Ichiban oishii desu.", "It is the most delicious.", "いちばん"),
       E("いちばん すき です。", "Ichiban suki desu.", "I like it the most.", "いちばん")]),
    T("The group: の なかで", "Among...",
      ["To say “among these”, name the group followed by {の なかで|no naka de}. {くだものの なかで りんごが いちばん すき です|kudamono no naka de ringo ga ichiban suki desu} means “among fruits, I like apples the most”.",
       "{なか|naka} means “inside”. You can also use {で|de} directly: {クラスで|kurasu de}, in the class."],
      [E("くだものの なかで りんごが いちばん すき です。", "Kudamono no naka de ringo ga ichiban suki desu.", "Among fruits, I like apples the most.", "なかで"),
       E("クラスで ミカさんが いちばん せが たかい です。", "Kurasu de Mika-san ga ichiban se ga takai desu.", "In the class, Mika is the tallest.", "クラスで"),
       E("かぞくで だれが いちばん げんき ですか。", "Kazoku de dare ga ichiban genki desu ka.", "Who is the most energetic in the family?", "かぞくで")]),
    T("Questions", "なに, だれ, どこ, いつ",
      ["Put a question word where the answer goes. {なにが いちばん すき ですか|nani ga ichiban suki desu ka} means “what do you like the most?”. {だれが|dare ga}, who. {どこが|doko ga}, which place. {いつ|itsu}, when.",
       "The answer replaces the question word."],
      [E("なにが いちばん すき ですか。", "Nani ga ichiban suki desu ka.", "What do you like the most?", "なにが"),
       E("だれが いちばん はやい ですか。", "Dare ga ichiban hayai desu ka.", "Who is the fastest?", "だれが"),
       E("どこが いちばん きれい ですか。", "Doko ga ichiban kirei desu ka.", "Which place is the prettiest?", "どこが")]),
    T("Seasons, sports, foods", "Practical examples",
      ["Use it to talk about your favourites. {きせつの なかで なつが いちばん すき です|kisetsu no naka de natsu ga ichiban suki desu} means “among the seasons, I like summer the most”.",
       "{スポーツの なかで なにが いちばん すき ですか|supootsu no naka de nani ga ichiban suki desu ka} means “among sports, what do you like the most?”."],
      [E("きせつの なかで なつが いちばん すき です。", "Kisetsu no naka de natsu ga ichiban suki desu.", "Among the seasons, I like summer the most.", "なかで"),
       E("スポーツの なかで なにが いちばん すき ですか。", "Supootsu no naka de nani ga ichiban suki desu ka.", "Among sports, what do you like the most?", "なかで"),
       E("たべものの なかで すしが いちばん おいしい です。", "Tabemono no naka de sushi ga ichiban oishii desu.", "Among foods, sushi is the most delicious.", "なかで")]),
    T("With verbs and amounts", "いちばん with others",
      ["{いちばん|ichiban} can go with other words. {いちばん たくさん たべました|ichiban takusan tabemashita} means “I ate the most”. {いちばん はやく きました|ichiban hayaku kimashita} means “came the earliest”.",
       "Remember to turn adjectives into adverbs: {はやい|hayai} becomes {はやく|hayaku}. You will study this more later."],
      [E("いちばん たくさん たべました。", "Ichiban takusan tabemashita.", "(I) ate the most.", "いちばん"),
       E("いちばん はやく きました。", "Ichiban hayaku kimashita.", "(He) came the earliest.", "いちばん")]),
    T("Common mistakes", "Do not use より or どちら here",
      ["Do not use {より|yori} with {いちばん|ichiban}. And do not use {どちら|dochira} with three or more things; use {なに|nani}, {だれ|dare}, or {どれ|dore}. Also do not forget {が|ga}: {りんごを いちばん すき です|ringo o ichiban suki desu} is wrong because {すき|suki} takes {が|ga}.",
       "Keep {の なかで|no naka de} before the thing that is number one."],
      [E("りんごを いちばん すき です。", "(wrong)", "Wrong: すき takes が.", "を", true),
       E("くだものの なかで どちらが すき ですか。", "(wrong)", "Wrong: use なにが for three or more.", "どちら", true),
       E("くだものの なかで りんごが いちばん すき です。", "Kudamono no naka de ringo ga ichiban suki desu.", "Right: Among fruits, I like apples the most.", "なかで")],
      T0("Say: “What do you like the most?”", "なにが いちばん すき ですか。", "Nani ga ichiban suki desu ka.", "What do you like the most?", "いちばん"))
  ],
  storyTitle: "Favourites",
  story: [
    L("Alex", "ミカさん、くだものの なかで なにが いちばん すきですか。", "Mika-san, kudamono no naka de nani ga ichiban suki desu ka.", "Mika, among fruits, what do you like the most?"),
    L("Mika", "いちごが いちばん すきです。", "Ichigo ga ichiban suki desu.", "I like strawberries the most."),
    L("Alex", "きせつの なかでは いつが いちばん すきですか。", "Kisetsu no naka de wa itsu ga ichiban suki desu ka.", "Among the seasons, which do you like the most?"),
    L("Mika", "はるが いちばん すきです。さくらが きれいですから。", "Haru ga ichiban suki desu. Sakura ga kirei desu kara.", "Spring. Because the cherry blossoms are beautiful."),
    L("Alex", "わたしは なつが いちばん すきです。", "Watashi wa natsu ga ichiban suki desu.", "I like summer the most."),
    L("Mika", "なつは あついですよ。", "Natsu wa atsui desu yo.", "Summer is hot, you know.")
  ],
  words: [
    W("いちばん", "ichiban", "the most, number one"),
    W("の なかで", "no naka de", "among"),
    W("くだもの", "kudamono", "fruit"),
    W("いちご", "ichigo", "strawberry"),
    W("りんご", "ringo", "apple"),
    W("きせつ", "kisetsu", "season"),
    W("はる", "haru", "spring"),
    W("さくら", "sakura", "cherry blossoms")
  ],
  tips: [
    "Ichiban before an adjective means the most.",
    "Group no naka de thing ga ichiban adjective desu.",
    "Use nani, dare, doko for three or more; dochira is for two."
  ],
  quiz: [
    ask("comparison-ichiban", "What does いちばん mean?", "the most", ["a little", "never"], "いちばん is the most."),
    ask("comparison-ichiban", "How do you say “Among fruits, I like apples the most”?", "くだものの なかで りんごが いちばん すき です。", ["くだものの なかで りんごを いちばん すき です。", "くだものより りんごが いちばん です。"], "の なかで + が + いちばん."),
    ask("comparison-ichiban", "How do you ask “What do you like the most?”", "なにが いちばん すき ですか。", ["なにを いちばん すき ですか。", "どちらが いちばん すき ですか。"], "なにが."),
    ask("comparison-ichiban", "Which question word do you use for 3 or more people?", "だれ", ["どちら", "どっち"], "どちら is for two."),
    ask("comparison-ichiban", "What does の なかで mean?", "among", ["after", "because"], "の なかで is among.")
  ]
});
