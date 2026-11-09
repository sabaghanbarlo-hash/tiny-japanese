// Genki I Companion, lessons 7-9. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
import { ask } from "./quiz-tools.js";
const L = (who, ja, romaji, en) => ({ who, ja, romaji, en });
const W = (ja, romaji, en) => ({ ja, kana: "", romaji, en });

export const part3 = [
  {
    id: "te-iru-and-describing-people",
    number: 7,
    title: "ている, Describing People and Counting People",
    time: "40 min",
    summary: "Use ている for actions in progress and states, describe people with は～が, join descriptions with the て form, say “go to do” with に いく and count people.",
    objective: "By the end you can say what someone is doing, describe a person, and talk about your family.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "Now the て form gets a partner: いる. Together, ～ている describes an action in progress, but also a state, like where someone lives. You will also learn to describe people and count them.",
        "Alex is looking at a family photo. Listen for ～ています, the descriptions, and the numbers of people."
      ] },
      { type: "dialogue", title: "Dialogue: A family photo", lines: [
        L("Alex", "ミカさん、これは ミカさんの かぞくの しゃしん ですか。", "Mika-san, kore wa Mika-san no kazoku no shashin desu ka.", "Mika, is this a photo of your family?"),
        L("Mika", "ええ。いもうとは いま アメリカに すんで います。", "Ee. Imouto wa ima Amerika ni sunde imasu.", "Yes. My younger sister lives in America now."),
        L("Alex", "そう ですか。かぞくは なんにん ですか。", "Sou desu ka. Kazoku wa nannin desu ka.", "I see. How many people are in your family?"),
        L("Mika", "よにん です。ちちと ははと いもうとと わたし です。", "Yonin desu. Chichi to haha to imouto to watashi desu.", "Four. My father, my mother, my sister and me."),
        L("Alex", "いもうとさんは かみが ながいですね。", "Imouto-san wa kami ga nagai desu ne.", "Your sister has long hair, doesn't she?"),
        L("Mika", "ええ、かみが ながくて、せが たかいです。", "Ee, kami ga nagakute, se ga takai desu.", "Yes, she has long hair and she's tall."),
        L("Alex", "ミカさんの うちへ あそびに いっても いいですか。", "Mika-san no uchi e asobi ni itte mo ii desu ka.", "May I come over to your house to hang out?"),
        L("Mika", "ええ、あそびに きて ください。", "Ee, asobi ni kite kudasai.", "Sure, please come over.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("かぞく", "kazoku", "family"),
        W("ちち / はは", "chichi / haha", "my father / my mother"),
        W("いもうと / あに", "imouto / ani", "my younger sister / my older brother"),
        W("かみ", "kami", "hair"),
        W("せ", "se", "height (of a person)"),
        W("ながい / たかい", "nagai / takai", "long / tall (い-adjectives)"),
        W("すむ / すんで います", "sumu / sunde imasu", "live (at a place)"),
        W("あそぶ / あそびに", "asobu / asobi ni", "play, hang out / to hang out"),
        W("いま", "ima", "now"),
        W("かいもの", "kaimono", "shopping"),
        W("なんにん", "nannin", "how many people")
      ] },
      { type: "words", title: "Counting people", items: [
        W("ひとり / ふたり", "hitori / futari", "1 person / 2 people"),
        W("さんにん / よにん", "sannin / yonin", "3 / 4 people"),
        W("ごにん / ろくにん", "gonin / rokunin", "5 / 6 people"),
        W("しちにん / はちにん", "shichinin / hachinin", "7 / 8 people"),
        W("きゅうにん / じゅうにん", "kyuunin / juunin", "9 / 10 people")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "～ている: in progress and in a state", body: "て form plus います shows an action in progress: いま たべて います (I'm eating now). With some verbs it shows a state that continues: すんで います (live), けっこんして います (is married), もって います (has). One to memorize: “to know” is しって います, but “don't know” is しりません." },
        { title: "～ている with いく and くる", body: "With いく and くる, ～ている shows the resulting state, not an action in progress. ミカさんは もう きて います means “Mika has already come (and is here)”. アレックスさんは がっこうへ いって います means “Alex has gone to school (and is there)”." },
        { title: "～ていない: not doing, not yet done", body: "The negative is ていません: まだ たべて いません means “I haven't eaten yet”. It is the usual way to say something has not happened yet." },
        { title: "は～が adjective: describing a feature", body: "Say who you are describing with は, then the feature with が: いもうとさんは かみが ながいです。 (As for your sister, her hair is long.) ミカさんは せが たかいです。" },
        { title: "Adjective and noun て forms", body: "To join descriptions, an い-adjective changes い to くて: ながい → ながくて. いい is よくて. A な-adjective or a noun takes で: しずかで きれい です。 がくせいで アメリカじん です。" },
        { title: "～に いく: go to do", body: "Take the ます stem (the verb without ます) and add に いきます: えいがを みに いきます (go to watch a movie), あそびに いきます (go to hang out). With nouns, add に: かいものに いきます (go shopping)." },
        { title: "Counting people", body: "One person is ひとり and two is ふたり. After that, add にん: さんにん, よにん, ごにん… Ask なんにん ですか。 Watch out: four is よにん, not よんにん." }
      ] },
      { type: "tips", title: "Culture note", items: [
        "Japanese has separate words for your own family and for someone else's. You say ちち and はは about your own parents, but おとうさん and おかあさん about someone else's. This is why Alex says いもうとさん when he talks about Mika's sister.",
        "Visiting a Japanese home, you take off your shoes at the entrance (げんかん). Wait for the host to point you to the slippers."
      ] }
    ],
    quiz: [
      ask("te-iru-and-describing-people", "How do you say “I'm eating now”?", "いま たべて います。", ["いま たべました。", "いま たべ います。"], "て form plus います shows an action in progress."),
      ask("te-iru-and-describing-people", "How do you say “I live in America”?", "アメリカに すんで います。", ["アメリカに すみます います。", "アメリカを すんで います。"], "すむ → すんで います shows a state."),
      ask("te-iru-and-describing-people", "How do you say “I haven't eaten yet”?", "まだ たべて いません。", ["まだ たべません です。", "まだ たべて います。"], "ていません shows something hasn't happened yet."),
      ask("te-iru-and-describing-people", "How do you say “My sister has long hair”?", "いもうとは かみが ながいです。", ["いもうとは かみを ながいです。", "いもうとの かみは ながいが です。"], "Topic は, feature が, adjective です."),
      ask("te-iru-and-describing-people", "How do you join “long” and “tall” with て form?", "ながくて、たかいです。", ["ながいて、たかいです。", "ながで、たかいです。"], "い-adjective: change い to くて."),
      ask("te-iru-and-describing-people", "How do you say “I'll go shopping”?", "かいものに いきます。", ["かいものを いきます。", "かいものへ いって います。"], "Noun plus に plus いきます."),
      ask("te-iru-and-describing-people", "How do you say “four people”?", "よにん", ["よんにん", "しにん"], "Four people is よにん.")
    ]
  },
  {
    id: "casual-form",
    number: 8,
    title: "Casual Form, と思います and が",
    time: "50 min",
    summary: "Speak casually with friends in the plain form, say what you think and what others said, make negative requests, and use が for new information.",
    objective: "By the end you can use casual verbs, adjectives and nouns, give opinions, and use が, なにか and なにも correctly.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "So far you have used the polite ます and です forms. With friends and family, Japanese uses the casual, or plain, form. It is also the base for a lot of grammar, so this lesson matters.",
        "Mika and Alex talk like friends. Listen for the short verb forms and for questions that go up in pitch instead of ending in か."
      ] },
      { type: "dialogue", title: "Dialogue: Plans for tomorrow", lines: [
        L("Alex", "ミカ、あした がっこうへ いく？", "Mika, ashita gakkou e iku?", "Mika, are you going to school tomorrow?"),
        L("Mika", "ううん、いかない。あした やすみ だから。", "Uun, ikanai. Ashita yasumi da kara.", "No, I'm not going. It's a day off tomorrow."),
        L("Alex", "そう。なにか する？", "Sou. Nanika suru?", "I see. Are you doing anything?"),
        L("Mika", "ううん、なにも しない。アレックスは？", "Uun, nani mo shinai. Arekkusu wa?", "No, nothing. What about you, Alex?"),
        L("Alex", "ぼくは ともだちと ゲームを する。ミカは ゲームを するのが すき？", "Boku wa tomodachi to geemu o suru. Mika wa geemu o suru no ga suki?", "I'm playing games with friends. Do you like playing games, Mika?"),
        L("Mika", "うん、すき。だれが くる？", "Un, suki. Dare ga kuru?", "Yeah, I do. Who's coming?"),
        L("Alex", "ケンが くる。ミカも こない？", "Ken ga kuru. Mika mo konai?", "Ken's coming. Won't you come too?"),
        L("Mika", "うん、いく！", "Un, iku!", "Yeah, I'll go!")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("やすみ", "yasumi", "day off, holiday"),
        W("ゲーム", "geemu", "game"),
        W("ぼく", "boku", "I (casual, used by boys and men)"),
        W("うん / ううん", "un / uun", "yeah / no (casual)"),
        W("だから", "da kara", "so, therefore (casual)"),
        W("なにか / なにも", "nanika / nani mo", "something / nothing (with negative)"),
        W("およぐ", "oyogu", "swim"),
        W("おもう", "omou", "think"),
        W("いう", "iu", "say"),
        W("じょうず / へた", "jouzu / heta", "good at / bad at (な-adjectives)")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "Casual present verbs", body: "The dictionary form is the casual present: たべる, のむ, いく. With friends you drop ます and です. A question goes up in pitch and drops か: ミカ、あした いく？" },
        { title: "Casual negative verbs", body: "Ichidan: drop る and add ない (たべる → たべない). Godan: change the last sound to the あ-row and add ない (のむ → のまない, いく → いかない, はなす → はなさない). A verb ending in う uses わ: あう → あわない. Irregular: する → しない, くる → こない. ある becomes ない." },
        { title: "Casual adjectives and nouns", body: "い-adjectives stay the same without です: たかい, and negative たかくない. Nouns and な-adjectives use だ: がくせいだ, ひまだ. The negative is じゃ ない: がくせいじゃ ない. In real speech だ is often dropped." },
        { title: "～と おもいます: I think that…", body: "Put the plain form before と おもいます: ミカさんは くると おもいます。 (I think Mika will come.) With a noun or な-adjective, keep だ: あしたは あめだと おもいます。" },
        { title: "～と いっていました: said that…", body: "Report what someone said with the plain form plus と いっていました: ミカさんは いかないと いっていました。 (Mika said she wouldn't go.)" },
        { title: "～ないで ください: please don't", body: "The negative requests: plain negative plus で ください: ここで たべないで ください。 (Please don't eat here.)" },
        { title: "Verb + のが すき / じょうず / へた", body: "Add の to turn a verb into a noun: およぐのが すきです (I like swimming), ゲームを するのが じょうずです (I'm good at games)." },
        { title: "が: the subject marker", body: "が marks a subject that is new or in focus. Question words as subjects always take が: だれが きましたか。 The answer repeats が: ケンが きました。 は introduces a topic we already know, and が points at who or what did the action." },
        { title: "なにか and なにも", body: "なにか means “something”: なにか たべますか。 なにも with a negative verb means “nothing”: なにも たべませんでした。 (I ate nothing.)" }
      ] },
      { type: "tips", title: "Culture note", items: [
        "Use the casual form only with close friends and family. With teachers, bosses and strangers, stay polite. Switching too early can sound rude.",
        "ぼく is the casual “I” for boys and men, and many women use わたし or あたし. In the polite form, everyone says わたし."
      ] }
    ],
    quiz: [
      ask("casual-form", "What is the casual form of たべます?", "たべる", ["たべない", "たべた"], "The dictionary form is the casual present."),
      ask("casual-form", "What is the casual negative of のみます?", "のまない", ["のみない", "のむない"], "Godan: change む to ま, then add ない."),
      ask("casual-form", "What is the casual negative of くる?", "こない", ["くない", "きない"], "くる is irregular: こない."),
      ask("casual-form", "What is the casual negative of あう?", "あわない", ["あない", "あうない"], "Godan verbs ending in う use わ before ない."),
      ask("casual-form", "How do you say “I think Mika will come”?", "ミカさんは くると おもいます。", ["ミカさんは きますと おもいます。", "ミカさんは くるを おもいます。"], "Plain form plus と おもいます."),
      ask("casual-form", "How do you say “Please don't eat here”?", "ここで たべないで ください。", ["ここで たべなくて ください。", "ここで たべては ください。"], "Plain negative plus で ください."),
      ask("casual-form", "How do you say “I like swimming”?", "およぐのが すきです。", ["およぐを すきです。", "およぐのは すきを です。"], "Verb plus の plus が すき."),
      ask("casual-form", "How do you ask “Who came?”", "だれが きましたか。", ["だれは きましたか。", "だれを きましたか。"], "Question words as subjects take が."),
      ask("casual-form", "How do you say “I ate nothing”?", "なにも たべませんでした。", ["なにか たべませんでした。", "なにを も たべました。"], "なにも goes with a negative verb.")
    ]
  },
  {
    id: "casual-past-and-modifiers",
    number: 9,
    title: "Casual Past, Verbs as Adjectives and もう／まだ",
    time: "40 min",
    summary: "Talk about the past in casual speech, use verbs to describe nouns, and say “already” and “not yet” with もう and まだ.",
    objective: "By the end you can use casual past forms, describe a noun with a verb, and say what has and hasn't happened yet.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "You know the casual present. Now we add the casual past and a very useful trick: placing a whole verb phrase before a noun, like “the book I bought yesterday”.",
        "Alex and Mika chat about yesterday. Listen for the casual past endings and for もう and まだ."
      ] },
      { type: "dialogue", title: "Dialogue: Yesterday's game", lines: [
        L("Alex", "きのう ケンと ゲームを した。", "Kinou Ken to geemu o shita.", "I played games with Ken yesterday."),
        L("Mika", "おもしろかった？", "Omoshirokatta?", "Was it fun?"),
        L("Alex", "うん、おもしろかった。ミカは こなかったね。", "Un, omoshirokatta. Mika wa konakatta ne.", "Yeah, it was fun. You didn't come, did you."),
        L("Mika", "ごめん。うちで しゅくだいを した から。", "Gomen. Uchi de shukudai o shita kara.", "Sorry. I did my homework at home."),
        L("Alex", "しゅくだいは もう おわった？", "Shukudai wa mou owatta?", "Have you finished the homework already?"),
        L("Mika", "ううん、まだ おわって いない。", "Uun, mada owatte inai.", "No, I haven't finished yet."),
        L("Alex", "きのう ぼくが かった ほんは とても おもしろかった よ。", "Kinou boku ga katta hon wa totemo omoshirokatta yo.", "The book I bought yesterday was really interesting."),
        L("Mika", "へえ、いい ね。", "Hee, ii ne.", "Oh, nice.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("ゲーム", "geemu", "game"),
        W("おもしろい", "omoshiroi", "interesting, fun (い-adjective)"),
        W("ごめん", "gomen", "sorry (casual)"),
        W("しゅくだい", "shukudai", "homework"),
        W("おわる", "owaru", "finish, end"),
        W("かう", "kau", "buy"),
        W("もう", "mou", "already"),
        W("まだ", "mada", "not yet, still"),
        W("へえ", "hee", "oh really (a reaction)")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "Casual past: verbs", body: "Make it from the て form, with た instead of て (and だ instead of で): たべる → たべた, のむ → のんだ, いく → いった, かく → かいた, はなす → はなした, あう → あった. Irregular: する → した, くる → きた, ある → あった." },
        { title: "Casual past: adjectives and nouns", body: "い-adjectives change い to かった: おもしろい → おもしろかった, いい → よかった. Nouns and な-adjectives use だった: がくせいだった, ひまだった." },
        { title: "Casual past negative", body: "Verbs and い-adjectives change the ない of the negative to なかった: たべない → たべなかった, おもしろくない → おもしろくなかった. Nouns and な-adjectives use じゃ なかった: がくせいじゃ なかった." },
        { title: "Verbs as adjectives", body: "A plain-form verb can stand before a noun to describe it, like a relative clause in English: きのう かった ほん (the book I bought yesterday), ミカが よんだ ほん (the book Mika read). The whole phrase comes before the noun." },
        { title: "もう and まだ", body: "もう with a past verb means “already”: もう たべました。 まだ with ～て いません means “not yet”: まだ たべて いません。 もう with a negative verb means “not any more”: もう たべません。" }
      ] },
      { type: "tips", title: "Culture note", items: [
        "ごめん is casual. With a teacher or boss, say すみません or もうしわけありません instead.",
        "Japanese learners often hesitate on relative clauses, but the rule is simple: whatever explains the noun goes in front of it, however long it is."
      ] }
    ],
    quiz: [
      ask("casual-past-and-modifiers", "What is the casual past of たべる?", "たべた", ["たべって", "たべだ"], "Ichidan: drop る and add た."),
      ask("casual-past-and-modifiers", "What is the casual past of のむ?", "のんだ", ["のみた", "のんた"], "む verbs use んだ."),
      ask("casual-past-and-modifiers", "What is the casual past of いく?", "いった", ["いいた", "いきた"], "いく is the exception: いった."),
      ask("casual-past-and-modifiers", "What is the casual past of おもしろい?", "おもしろかった", ["おもしろいだった", "おもしろいた"], "い-adjectives: change い to かった."),
      ask("casual-past-and-modifiers", "What is the casual past negative of たべる?", "たべなかった", ["たべなくだった", "たべない だった"], "Change ない to なかった."),
      ask("casual-past-and-modifiers", "How do you say “the book I bought yesterday”?", "きのう かった ほん", ["ほん きのう かった", "きのう かう ほんの"], "The verb phrase goes before the noun."),
      ask("casual-past-and-modifiers", "How do you say “I haven't finished yet”?", "まだ おわって いない。", ["もう おわって いない。", "まだ おわった。"], "まだ plus ～ていない means “not yet”.")
    ]
  }
];
