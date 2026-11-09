// Genki I Companion, lessons 4-6. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
import { ask } from "./quiz-tools.js";
const L = (who, ja, romaji, en) => ({ who, ja, romaji, en });
const W = (ja, romaji, en) => ({ ja, kana: "", romaji, en });

export const part2 = [
  {
    id: "existence-and-past-tense",
    number: 4,
    title: "ある and いる, Past Tense and と",
    time: "40 min",
    summary: "Say what exists and where things are, talk about the past with でした and ました, and use にも, でも, ～時間, たくさん and と.",
    objective: "By the end you can say what there is, where it is, and what you did yesterday.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "This lesson adds two big tools: saying that something exists, and talking about the past. Japanese has two verbs for “there is”, one for things and one for living beings.",
        "Mika and Alex compare what they did yesterday. Listen for あります, います and the past endings."
      ] },
      { type: "dialogue", title: "Dialogue: What did you do yesterday?", lines: [
        L("Alex", "ミカさん、きのう なにを しましたか。", "Mika-san, kinou nani o shimashita ka.", "Mika, what did you do yesterday?"),
        L("Mika", "ともだちと としょかんへ いきました。さんじかん べんきょうしました。", "Tomodachi to toshokan e ikimashita. Sanjikan benkyou shimashita.", "I went to the library with a friend. We studied for three hours."),
        L("Alex", "としょかんに ほんが たくさん ありますね。", "Toshokan ni hon ga takusan arimasu ne.", "There are lots of books in the library, aren't there?"),
        L("Mika", "ええ。うちにも ほんが たくさん ありますよ。", "Ee. Uchi ni mo hon ga takusan arimasu yo.", "Yes. We have lots of books at home too."),
        L("Alex", "そう ですか。わたしは きのう うちに いました。", "Sou desu ka. Watashi wa kinou uchi ni imashita.", "I see. I was at home yesterday."),
        L("Mika", "うちで なにを しましたか。", "Uchi de nani o shimashita ka.", "What did you do at home?"),
        L("Alex", "えいがを みました。ごはんを たべませんでした。", "Eiga o mimashita. Gohan o tabemasen deshita.", "I watched a movie. I didn't eat a meal.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("ある / あります", "aru / arimasu", "there is (things, plants)"),
        W("いる / います", "iru / imasu", "there is (people, animals); to be"),
        W("べんきょうします", "benkyou shimasu", "study"),
        W("きのう", "kinou", "yesterday"),
        W("としょかん", "toshokan", "library"),
        W("ごはん", "gohan", "meal, cooked rice"),
        W("ねこ", "neko", "cat"),
        W("つくえ", "tsukue", "desk"),
        W("うえ / した", "ue / shita", "on, above / under, below"),
        W("まえ / うしろ", "mae / ushiro", "in front / behind"),
        W("なか / となり / ちかく", "naka / tonari / chikaku", "inside / next to / near"),
        W("たくさん", "takusan", "a lot, many")
      ] },
      { type: "words", title: "Hours: ～じかん", items: [
        W("いちじかん / にじかん / さんじかん", "ichijikan / nijikan / sanjikan", "1 / 2 / 3 hours"),
        W("よじかん / ごじかん / ろくじかん", "yojikan / gojikan / rokujikan", "4 / 5 / 6 hours"),
        W("しちじかん / はちじかん / くじかん", "shichijikan / hachijikan / kujikan", "7 / 8 / 9 hours"),
        W("じゅうじかん", "juujikan", "10 hours")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "Xが ある / いる: something exists", body: "Use あります for things and plants, and います for people and animals. The thing that exists is marked with が: ほんが あります。 ねこが います。 The negatives are ありません and いません." },
        { title: "Saying where things are", body: "Place に Thing が あります says “There is a thing at the place”: つくえの うえに ほんが あります。 To talk about a known thing, put it first: ほんは つくえの うえに あります。 Position words go after の: うえ (on), した (under), まえ (in front), うしろ (behind), なか (inside), となり (next to), ちかく (near)." },
        { title: "Past tense of nouns", body: "です becomes でした, and じゃ ありません becomes じゃ ありませんでした: きのうは あめ でした。 (It was rainy yesterday.) きのうは やすみ じゃ ありませんでした。 (It wasn't a day off yesterday.)" },
        { title: "Past tense of verbs", body: "ます becomes ました, and ません becomes ませんでした: たべました (ate), たべませんでした (didn't eat). The same works for あります and います: いました, ありませんでした." },
        { title: "にも and でも", body: "に and で keep their job and just take も after them: うちにも ほんが あります (we have books at home too). カフェでも ほんを よみます (I read at cafés too). を, は and が disappear when も is added: ほんも よみます, not ほんを も." },
        { title: "～時間: how long", body: "Add じかん to a number to say a length of time: さんじかん べんきょうしました。 There is no particle before the verb. Watch the odd ones: 4 hours is よじかん, 7 hours is しちじかん and 9 hours is くじかん." },
        { title: "たくさん: a lot", body: "たくさん means “many” or “much” and goes before the verb: たくさん たべました。 With あります it works as a quantity: ほんが たくさん あります。 You can also say たくさんの ほん." },
        { title: "と: and, with", body: "と links nouns in a complete list: ほんと ペン (a book and a pen). It also means “with” a person: ともだちと いきました。" }
      ] },
      { type: "tips", title: "Culture note", items: [
        "ある and いる depend on whether the thing is a living being that moves on its own, not on size. A tree is ある, a cat is いる.",
        "Japanese uses the same verb for “is at” and “exists”. ねこは うちに います can mean “The cat is at home”."
      ] }
    ],
    quiz: [
      ask("existence-and-past-tense", "Which verb do you use for a cat?", "います", ["あります", "します"], "います is for people and animals."),
      ask("existence-and-past-tense", "Which sentence is correct for “There is a book on the desk”?", "つくえの うえに ほんが あります。", ["つくえの うえを ほんが あります。", "つくえの うえで ほんが あります。"], "Place に Thing が あります."),
      ask("existence-and-past-tense", "How do you say “It was a holiday” (やすみ)?", "やすみ でした。", ["やすみ ました。", "やすみ でしたか。"], "The past of です is でした."),
      ask("existence-and-past-tense", "How do you say “I didn't eat”?", "たべませんでした。", ["たべませんした。", "たべました。"], "The past negative is ませんでした."),
      ask("existence-and-past-tense", "How do you say “I read at cafés too”?", "カフェでも ほんを よみます。", ["カフェでを ほんも よみます。", "カフェも でほんを よみます。"], "で stays and も is added after it: でも."),
      ask("existence-and-past-tense", "How do you say “four hours”?", "よじかん", ["よんじかん", "しじかん"], "4 hours is よじかん."),
      ask("existence-and-past-tense", "Which sentence means “I went with a friend”?", "ともだちと いきました。", ["ともだちは いきました。", "ともだちを いきました。"], "と means “with” a person.")
    ]
  },
  {
    id: "adjectives-and-counters",
    number: 5,
    title: "Adjectives, Past Tense and Counters",
    time: "45 min",
    summary: "Describe things with い- and な-adjectives, in the present and the past, say what you like, suggest with ましょう and count things.",
    objective: "By the end you can describe things, say what you like and dislike, suggest plans and count up to ten.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "Japanese has two kinds of adjectives, and they behave differently. い-adjectives end in い, and な-adjectives are those that need な before a noun. Once you know which kind you have, the rules are very regular.",
        "Alex tells Mika about the ramen he ate. Listen for adjectives in the past tense and for the counter ふたつ."
      ] },
      { type: "dialogue", title: "Dialogue: A great ramen shop", lines: [
        L("Alex", "ミカさん、きのう ラーメンを ふたつ たべました。", "Mika-san, kinou raamen o futatsu tabemashita.", "Mika, I ate two bowls of ramen yesterday."),
        L("Mika", "ふたつ ですか。おいしかったですか。", "Futatsu desu ka. Oishikatta desu ka.", "Two? Was it delicious?"),
        L("Alex", "ええ、とても おいしかったです。あまり たかくなかったです。", "Ee, totemo oishikatta desu. Amari takakunakatta desu.", "Yes, it was very delicious. It wasn't very expensive."),
        L("Mika", "いいですね。わたしは ラーメンが すきです。", "Ii desu ne. Watashi wa raamen ga suki desu.", "Nice. I like ramen."),
        L("Alex", "じゃ、あした いっしょに たべましょうか。", "Ja, ashita issho ni tabemashou ka.", "Then shall we eat it together tomorrow?"),
        L("Mika", "ええ、たべましょう。しずかな みせへ いきましょう。", "Ee, tabemashou. Shizuka na mise e ikimashou.", "Yes, let's. Let's go to a quiet shop."),
        L("Alex", "きれいな みせ ですよ。", "Kirei na mise desu yo.", "It's a pretty shop, you know.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("おいしい", "oishii", "delicious (い-adjective)"),
        W("たかい", "takai", "expensive, tall (い-adjective)"),
        W("あたらしい", "atarashii", "new (い-adjective)"),
        W("いい", "ii", "good (irregular い-adjective)"),
        W("しずか(な)", "shizuka (na)", "quiet (な-adjective)"),
        W("きれい(な)", "kirei (na)", "pretty, clean (な-adjective)"),
        W("すき(な) / きらい(な)", "suki (na) / kirai (na)", "liked / disliked (な-adjectives)"),
        W("ラーメン", "raamen", "ramen"),
        W("みせ", "mise", "shop"),
        W("とても / ちょっと", "totemo / chotto", "very / a little"),
        W("いっしょに", "issho ni", "together")
      ] },
      { type: "words", title: "Counting things: ひとつ to とお", items: [
        W("ひとつ / ふたつ / みっつ", "hitotsu / futatsu / mittsu", "1 / 2 / 3"),
        W("よっつ / いつつ / むっつ", "yottsu / itsutsu / muttsu", "4 / 5 / 6"),
        W("ななつ / やっつ / ここのつ", "nanatsu / yattsu / kokonotsu", "7 / 8 / 9"),
        W("とお", "too", "10")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "い-adjectives", body: "い-adjectives end in い: おいしい, たかい, あたらしい. Add です to be polite: おいしいです。 To negate, change い to くない: おいしくないです。 (おいしくありません is also correct.)" },
        { title: "な-adjectives", body: "な-adjectives look like nouns and take です: しずかです。 The negative is じゃ ありません: しずかじゃ ありません。 Be careful: きれい ends in い but is a な-adjective." },
        { title: "Past tense of い-adjectives", body: "Change い to かった: おいしい → おいしかったです。 For the negative past, use くなかった: おいしくなかったです。" },
        { title: "The irregular いい", body: "いい (good) uses the older stem よ- for every form except the plain present: よくないです (isn't good), よかったです (was good), よくなかったです (wasn't good)." },
        { title: "Past tense of な-adjectives", body: "Use でした, as with nouns: しずかでした。 The negative past is じゃ ありませんでした: しずかじゃ ありませんでした。" },
        { title: "Degree adverbs", body: "とても means “very” and ちょっと means “a little”: とても おいしいです。 あまり means “not very” and always needs a negative: あまり たかくないです。" },
        { title: "Adjectives before nouns", body: "An い-adjective goes straight before a noun: おいしい ラーメン. A な-adjective needs な: しずかな みせ, きれいな みせ." },
        { title: "～が すき and ～が きらい", body: "Mark the thing you like or dislike with が: ラーメンが すきです。 すしが きらいです。 Both すき and きらい are な-adjectives, which is why you say すきです, not すくです." },
        { title: "～ましょう and ～ましょうか", body: "Use ～ましょう to say “let's”: たべましょう。 Use ～ましょうか to ask “shall we?” or to offer: あした いっしょに たべましょうか。" },
        { title: "Counters: ひとつ to とお", body: "For things up to ten, count with ひとつ, ふたつ, みっつ… とお. The number goes straight before the verb with no particle: ラーメンを ふたつ たべました。" }
      ] },
      { type: "tips", title: "Culture note", items: [
        "In ramen shops, ordering by ticket machine is common. You buy a ticket and hand it to the staff, so you can order without speaking.",
        "すき and きらい are strong. To soften きらい, people say あまり すきじゃ ありません (“I don't like it very much”)."
      ] }
    ],
    quiz: [
      ask("adjectives-and-counters", "How do you say “It isn't delicious”?", "おいしくないです。", ["おいしじゃ ありません。", "おいしいくないです。"], "い-adjective negative: change い to くない."),
      ask("adjectives-and-counters", "How do you say “It was delicious”?", "おいしかったです。", ["おいしいでした。", "おいしかったでした。"], "い-adjective past: change い to かった."),
      ask("adjectives-and-counters", "How do you say “It was good” using いい?", "よかったです。", ["いかったです。", "いいでした。"], "いい becomes よかった in the past."),
      ask("adjectives-and-counters", "How do you say “It was quiet” (しずか)?", "しずかでした。", ["しずかかったです。", "しずかい でした。"], "な-adjective past: add でした."),
      ask("adjectives-and-counters", "Which phrase means “a quiet shop”?", "しずかな みせ", ["しずかい みせ", "しずかの みせ"], "A な-adjective needs な before a noun."),
      ask("adjectives-and-counters", "How do you say “I like ramen”?", "ラーメンが すきです。", ["ラーメンを すきです。", "ラーメンは すくです。"], "Mark the thing you like with が."),
      ask("adjectives-and-counters", "How do you say “Let's eat”?", "たべましょう。", ["たべません。", "たべましたか。"], "～ましょう means “let's”."),
      ask("adjectives-and-counters", "How do you say “three things”?", "みっつ", ["さんつ", "さんこ"], "Things up to ten use ひとつ, ふたつ, みっつ…")
    ]
  },
  {
    id: "te-form",
    number: 6,
    title: "て Form: Requests, Permission and Reasons",
    time: "45 min",
    summary: "Make the て form of every verb, then use it for requests, chains of actions, permission, prohibition and reasons with から.",
    objective: "By the end you can ask for things politely, ask permission, say “you must not”, and give a reason.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "The て form is one of the most useful forms in Japanese. It lets you make requests, link actions in order, ask permission and more. Learn the patterns now and you will use them forever.",
        "Alex wants to take a photo, and Mika tells him it is not allowed. Listen for ください, いいですか and いけません."
      ] },
      { type: "dialogue", title: "Dialogue: Can I take a photo here?", lines: [
        L("Alex", "すみません、ちょっと まって ください。", "Sumimasen, chotto matte kudasai.", "Excuse me, please wait a moment."),
        L("Mika", "はい、いいですよ。", "Hai, ii desu yo.", "Sure."),
        L("Alex", "ここで しゃしんを とっても いいですか。", "Koko de shashin o totte mo ii desu ka.", "May I take a photo here?"),
        L("Mika", "いいえ、ここで しゃしんを とっては いけません。", "Iie, koko de shashin o totte wa ikemasen.", "No, you must not take photos here."),
        L("Alex", "どうして ですか。", "Doushite desu ka.", "Why?"),
        L("Mika", "ひとが たくさん いますから。", "Hito ga takusan imasu kara.", "Because there are a lot of people."),
        L("Alex", "わかりました。あそこへ いって、しゃしんを とりましょう。", "Wakarimashita. Asoko e itte, shashin o torimashou.", "I understand. Let's go over there and take photos.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("まつ / まって", "matsu / matte", "wait"),
        W("とる / とって", "toru / totte", "take (a photo)"),
        W("しゃしん", "shashin", "photo"),
        W("ひと", "hito", "person, people"),
        W("どうして", "doushite", "why"),
        W("わかりました", "wakarimashita", "I understand, got it"),
        W("ください", "kudasai", "please (give me / do)"),
        W("ちょっと", "chotto", "a little, a moment")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "て form: ichidan and irregular verbs", body: "Ichidan verbs drop る and add て: たべる → たべて, みる → みて. Irregular: する → して, くる → きて." },
        { title: "て form: godan verbs", body: "Look at the last sound. う, つ, る → って (かう → かって, まつ → まって, かえる → かえって). む, ぶ, ぬ → んで (のむ → のんで, あそぶ → あそんで). く → いて (かく → かいて) and ぐ → いで (およぐ → およいで). す → して (はなす → はなして). The one exception is いく → いって." },
        { title: "～てください: please do", body: "て form plus ください makes a polite request: ちょっと まって ください。 To ask for a thing, use N を ください: コーヒーを ください。" },
        { title: "Linking actions with て", body: "Use the て form to list actions in order: あさ おきて、コーヒーを のんで、がっこうへ いきました。 Only the last verb shows the tense." },
        { title: "～ても いいです: permission", body: "て form plus も いいです means “it's okay to…”. Ask with か: ここで とっても いいですか。 The answer is はい、いいですよ or すみません、ちょっと…" },
        { title: "～ては いけません: prohibition", body: "て form plus は いけません means “you must not…”: ここで たべては いけません。" },
        { title: "から: because", body: "から follows the reason, then comes the result. ひとが たくさん いますから、とっては いけません。 You can also answer どうして ですか with a reason plus から: ひとが たくさん いますから。" }
      ] },
      { type: "tips", title: "Culture note", items: [
        "Signs with a camera crossed out mean photos are not allowed. Shops, shrines and museums often put them up. If you are not sure, ask: しゃしんを とっても いいですか。",
        "Do not use ～てください to your teacher or boss without softening it. Add すみません first, as Alex does."
      ] }
    ],
    quiz: [
      ask("te-form", "What is the て form of たべる?", "たべて", ["たべで", "たべって"], "Ichidan verbs drop る and add て."),
      ask("te-form", "What is the て form of のむ?", "のんで", ["のって", "のみて"], "む, ぶ and ぬ become んで."),
      ask("te-form", "What is the て form of かく (write)?", "かいて", ["かって", "かきて"], "く becomes いて."),
      ask("te-form", "What is the て form of いく?", "いって", ["いいて", "いきて"], "いく is the exception: いって."),
      ask("te-form", "How do you say “Please wait”?", "まって ください。", ["まつ ください。", "まった ください。"], "て form plus ください makes a request."),
      ask("te-form", "How do you ask “May I take a photo?”", "しゃしんを とっても いいですか。", ["しゃしんを とっては いけませんか。", "しゃしんを とって ください。"], "て form plus も いいですか asks permission."),
      ask("te-form", "How do you say “You must not eat here”?", "ここで たべては いけません。", ["ここで たべても いいです。", "ここで たべて ください。"], "て form plus は いけません prohibits."),
      ask("te-form", "Where does から go in a reason sentence?", "After the reason", ["Before the reason", "At the very start of the sentence"], "から follows the reason: ひとが いますから。")
    ]
  }
];
