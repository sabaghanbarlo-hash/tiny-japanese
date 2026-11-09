// Genki I Companion, lessons 10-12. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
import { ask } from "./quiz-tools.js";
const L = (who, ja, romaji, en) => ({ who, ja, romaji, en });
const W = (ja, romaji, en) => ({ ja, kana: "", romaji, en });

export const part4 = [
  {
    id: "comparisons-and-plans",
    number: 10,
    title: "Comparisons, つもり and になる",
    time: "40 min",
    summary: "Compare things with より and の ほうが, choose the best with の なかで, make plans with つもり, talk about change with になる and use どこか, だれか and なにか.",
    objective: "By the end you can compare two things, name your favorite, say what you plan to do and talk about how things change.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "Two things you do all the time in conversation: compare things (“this is better than that”) and talk about plans (“I'm going to…”). Both use short, regular patterns.",
        "Mika and Alex plan a trip. Listen for より and ほうが, and for つもり."
      ] },
      { type: "dialogue", title: "Dialogue: Planning a trip", lines: [
        L("Alex", "なつやすみに どこかへ いきませんか。", "Natsuyasumi ni dokoka e ikimasen ka.", "Shall we go somewhere in the summer holiday?"),
        L("Mika", "いいですね。うみと やまと どちらが すきですか。", "Ii desu ne. Umi to yama to dochira ga suki desu ka.", "Sounds good. Which do you like better, the sea or the mountains?"),
        L("Alex", "うみの ほうが すきです。やまより すずしいですから。", "Umi no hou ga suki desu. Yama yori suzushii desu kara.", "I like the sea better. Because it's cooler than the mountains."),
        L("Mika", "あつい ところの なかで どこが いちばん すきですか。", "Atsui tokoro no naka de doko ga ichiban suki desu ka.", "Of hot places, which one do you like best?"),
        L("Alex", "おきなわが いちばん すきです。", "Okinawa ga ichiban suki desu.", "I like Okinawa best."),
        L("Mika", "わたしは らいげつ おきなわへ いく つもりです。", "Watashi wa raigetsu Okinawa e iku tsumori desu.", "I plan to go to Okinawa next month."),
        L("Alex", "いいですね。わたしも じょうずに およげるように なりたいです。", "Ii desu ne. Watashi mo jouzu ni oyogeru you ni naritai desu.", "Nice. I'd like to become able to swim well too."),
        L("Mika", "ええ、いっしょに いきましょう。", "Ee, issho ni ikimashou.", "Yes, let's go together.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("うみ / やま", "umi / yama", "sea / mountain"),
        W("どちら", "dochira", "which (of two)"),
        W("いちばん", "ichiban", "the most, number one"),
        W("すずしい / あつい", "suzushii / atsui", "cool / hot (い-adjectives)"),
        W("ところ", "tokoro", "place"),
        W("なつやすみ", "natsuyasumi", "summer holiday"),
        W("らいげつ", "raigetsu", "next month"),
        W("つもり", "tsumori", "intention, plan"),
        W("どこか / だれか / なにか", "dokoka / dareka / nanika", "somewhere / someone / something")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "A より B: B is more than A", body: "より means “than” and goes after the thing you compare against: やまより うみが すずしいです (The sea is cooler than the mountains)." },
        { title: "AのほうがBより", body: "Say which one is more with の ほうが: うみの ほうが すきです (I like the sea more). The full pattern is A の ほうが B より ～: うみの ほうが やまより すずしいです。" },
        { title: "Asking: どちらが / どっちが", body: "Ask a two-way question with どちらが: うみと やまと どちらが すきですか。 In speech, どっち is the casual form." },
        { title: "～の なかで いちばん", body: "To name the best of three or more, use ～の なかで いちばん: あつい ところの なかで おきなわが いちばん すきです。 For one category you can skip なかで: おきなわが いちばん すきです。" },
        { title: "Adjective + の", body: "Replace a noun that is clear with の: あたらしいのが いいです (I want the new one). With な-adjectives, use なの: しずかなのが いいです。" },
        { title: "～つもりです: intend to", body: "Plain present form plus つもりです says what you intend to do: らいげつ おきなわへ いく つもりです。 For a negative plan use ない: いかない つもりです。" },
        { title: "～になる: become", body: "Use に after a noun or な-adjective and くなる after an い-adjective: せんせいに なります (become a teacher), しずかに なりました (became quiet), あつく なりました (became hot)." },
        { title: "どこか, だれか, なにか and どこにも, だれも, なにも", body: "Add か for “some-”: どこか (somewhere), だれか (someone), なにか (something). Use も with a negative verb for “no-” (どこにも いきません, だれも いません, なにも たべません). Note the particle に stays before も in どこにも." }
      ] },
      { type: "tips", title: "Culture note", items: [
        "Japanese summers are hot and humid, so なつやすみ trips often go to the sea, mountains or cooler regions like Hokkaido.",
        "Questions like どちらが すきですか are a normal way to start small talk about preferences."
      ] }
    ],
    quiz: [
      ask("comparisons-and-plans", "How do you say “The sea is cooler than the mountains”?", "やまより うみが すずしいです。", ["やまが うみより すずしいです。", "やまを うみより すずしいです。"], "より goes after the thing you compare against."),
      ask("comparisons-and-plans", "How do you ask “Which do you like better, tea or coffee?”", "おちゃと コーヒーと どちらが すきですか。", ["おちゃと コーヒーが どちらですか。", "おちゃは コーヒーと どちらを すきですか。"], "A と B と どちらが ～ですか."),
      ask("comparisons-and-plans", "How do you say “I like Okinawa best”?", "おきなわが いちばん すきです。", ["おきなわを いちばん すきです。", "おきなわが いちばんは すきです。"], "いちばん goes before the adjective."),
      ask("comparisons-and-plans", "How do you say “I plan to go”?", "いく つもりです。", ["いきます つもりです。", "いった つもりです。"], "Plain present form plus つもりです."),
      ask("comparisons-and-plans", "How do you say “It became hot”?", "あつく なりました。", ["あついに なりました。", "あつくだ なりました。"], "い-adjective: change い to く, then なる."),
      ask("comparisons-and-plans", "How do you say “I'm not going anywhere”?", "どこにも いきません。", ["どこか いきません。", "どこも いきます。"], "どこにも with a negative verb."),
      ask("comparisons-and-plans", "How do you say “someone”?", "だれか", ["だれも", "だれの"], "か gives “some-”; も with a negative gives “no-”.")
    ]
  },
  {
    id: "wants-and-experience",
    number: 11,
    title: "たい, たり, たことがある and や",
    time: "35 min",
    summary: "Say what you want to do with ～たい, list example actions with ～たり ～たりする, talk about experiences with ～たことがある and list nouns with や.",
    objective: "By the end you can say what you want, talk about things you have done in your life and give lists of examples.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "Wishes and experiences make conversation personal: what do you want to do, and what have you already done? This lesson gives you both, plus a way to give examples without listing everything.",
        "Mika and Alex talk about things they want to try. Listen for ～たい and ～たことが あります."
      ] },
      { type: "dialogue", title: "Dialogue: Things I want to try", lines: [
        L("Alex", "ミカさんは なにが したいですか。", "Mika-san wa nani ga shitai desu ka.", "Mika, what do you want to do?"),
        L("Mika", "ふじさんに のぼりたいです。のぼったことが ありますか。", "Fujisan ni noboritai desu. Nobotta koto ga arimasu ka.", "I want to climb Mt. Fuji. Have you ever climbed it?"),
        L("Alex", "いいえ、ありません。でも、おんせんに はいったことは あります。", "Iie, arimasen. Demo, onsen ni haitta koto wa arimasu.", "No, I haven't. But I have been in a hot spring."),
        L("Mika", "いいですね。やすみの ひは なにを しますか。", "Ii desu ne. Yasumi no hi wa nani o shimasu ka.", "Nice. What do you do on your days off?"),
        L("Alex", "ほんを よんだり、えいがを みたり します。", "Hon o yondari, eiga o mitari shimasu.", "I do things like reading books and watching movies."),
        L("Mika", "わたしは さんぽを したり、ともだちに あったり します。", "Watashi wa sanpo o shitari, tomodachi ni attari shimasu.", "I do things like taking walks and meeting friends."),
        L("Alex", "やすみの ひに、パンや くだものを かいに いきます。", "Yasumi no hi ni, pan ya kudamono o kai ni ikimasu.", "On days off, I go to buy things like bread and fruit.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("ふじさん", "Fujisan", "Mt. Fuji"),
        W("のぼる", "noboru", "climb"),
        W("はいる", "hairu", "enter, get in"),
        W("おんせん", "onsen", "hot spring"),
        W("さんぽ", "sanpo", "walk, stroll"),
        W("パン / くだもの", "pan / kudamono", "bread / fruit"),
        W("やすみの ひ", "yasumi no hi", "day off"),
        W("でも", "demo", "but, however")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "～たい: want to do", body: "Take the ます stem and add たい: のぼりたい (want to climb), たべたい (want to eat), いきたい (want to go). たい acts like an い-adjective: たべたいです, たべたくない, たべたかった." },
        { title: "を or が with ～たい", body: "With ～たい the object can take を or が: ラーメンを たべたい or ラーメンが たべたい. When talking about someone else's wishes, add ～たがって います: ミカさんは ふじさんに のぼりたがって います。" },
        { title: "～たり ～たり します", body: "Use ～たり to list example actions, not everything: ほんを よんだり、えいがを みたり します (I do things like reading and watching movies). The form is the casual past with り, and します or the right tense of する comes last." },
        { title: "～たことが あります: have done", body: "Use the casual past plus ことが あります to say you have done something before: ふじさんに のぼったことが あります。 For “never”, say ～たことが ありません: のぼったことが ありません。" },
        { title: "や: and (some others too)", body: "や joins nouns in a partial list, meaning “and things like”: パンや くだものを かいます。 Compare と, which completes a list: パンと くだもの means just those two." }
      ] },
      { type: "tips", title: "Culture note", items: [
        "Hot springs (おんせん) have rules: wash first, do not put the towel in the water, and many places do not allow tattoos. Check the rules before you go.",
        "Climbing Mt. Fuji is usually possible only in July and August. Many people go at night to see the sunrise from the top."
      ] }
    ],
    quiz: [
      ask("wants-and-experience", "How do you say “I want to eat”?", "たべたいです。", ["たべますたいです。", "たべるたいです。"], "ます stem plus たい."),
      ask("wants-and-experience", "How do you say “I don't want to go”?", "いきたくないです。", ["いきたいません。", "いかたくないです。"], "たい acts like an い-adjective, so the negative is たくない."),
      ask("wants-and-experience", "How do you say “I have been to Japan”?", "にほんへ いったことが あります。", ["にほんへ いくことが あります。", "にほんへ いって あります。"], "Past plain form plus ことが あります."),
      ask("wants-and-experience", "How do you say “I've never eaten sushi”?", "すしを たべたことが ありません。", ["すしを たべないことが あります。", "すしを たべたこと ない です か。"], "～たことが ありません."),
      ask("wants-and-experience", "Which sentence lists example actions?", "ほんを よんだり、えいがを みたり します。", ["ほんを よんで、えいがを みます。", "ほんを よみたい、えいがを みたい。"], "～たり ～たり します."),
      ask("wants-and-experience", "Which particle gives a partial list, “X and things like it”?", "や", ["と", "の"], "や means “and other things”, while と closes a list."),
      ask("wants-and-experience", "How do you say “I want to climb Mt. Fuji”?", "ふじさんに のぼりたいです。", ["ふじさんを のぼりますたいです。", "ふじさんで のぼりたいます。"], "のぼる takes に for the mountain climbed.")
    ]
  },
  {
    id: "reasons-and-obligation",
    number: 12,
    title: "んです, すぎる, ほうがいい, ので and なければいけません",
    time: "45 min",
    summary: "Explain and ask for explanations with んです, say “too much” with すぎる, give advice with ほうがいい, give reasons with ので, say what you must do and ask politely with でしょうか.",
    objective: "By the end you can explain a situation, give advice, state obligations and ask polite questions.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "This last lesson gives you the tools to explain yourself. んです lets you give or ask for the reason behind something, and the other forms let you give advice, say that you must do something, and ask politely.",
        "Alex is not feeling well. Listen for んです, すぎる and ほうがいい."
      ] },
      { type: "dialogue", title: "Dialogue: Not feeling well", lines: [
        L("Mika", "アレックスさん、どうしたんですか。", "Arekkusu-san, doushita n desu ka.", "Alex, what's wrong?"),
        L("Alex", "あたまが いたいんです。きのう ゲームを しすぎました。", "Atama ga itai n desu. Kinou geemu o shisugimashita.", "I have a headache. I played games too much yesterday."),
        L("Mika", "それは いけませんね。きょうは はやく ねた ほうが いいですよ。", "Sore wa ikemasen ne. Kyou wa hayaku neta hou ga ii desu yo.", "That's not good. You'd better go to bed early today."),
        L("Alex", "でも、あしたは テストが あるので、べんきょうしなければ いけません。", "Demo, ashita wa tesuto ga aru node, benkyou shinakereba ikemasen.", "But there's a test tomorrow, so I have to study."),
        L("Mika", "じゃ、すこしだけ べんきょうして、ねたら どうでしょうか。", "Ja, sukoshi dake benkyou shite, netara dou deshou ka.", "Then how about studying just a little and going to sleep?"),
        L("Alex", "そう します。ありがとう。", "Sou shimasu. Arigatou.", "I'll do that. Thanks.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("どうしたんですか", "doushita n desu ka", "what's wrong? what happened?"),
        W("あたま / いたい", "atama / itai", "head / painful (い-adjective)"),
        W("はやく", "hayaku", "early, quickly"),
        W("テスト", "tesuto", "test"),
        W("すこし / だけ", "sukoshi / dake", "a little / only"),
        W("ねる", "neru", "sleep, go to bed"),
        W("いけません", "ikemasen", "that's not good, you mustn't"),
        W("どうでしょうか", "dou deshou ka", "how about…? what do you think?")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "～んです / ～のです", body: "Plain form plus んです explains or asks for the reason behind a situation: あたまが いたいんです。 (I have a headache.) どうしたんですか。 (What's wrong?) It sounds softer and more natural than a flat statement. With nouns and な-adjectives, use なんです: びょうきなんです。" },
        { title: "～すぎる: too much", body: "Add すぎる to the ます stem of a verb: たべすぎる (eat too much), しすぎる (do too much). For an い-adjective, drop い: たかい → たかすぎる (too expensive). For a な-adjective, use the stem: しずかすぎる (too quiet). すぎる conjugates like a normal ichidan verb: しすぎました。" },
        { title: "～ほうが いい: had better", body: "Plain past form plus ほうが いい gives advice for doing something: はやく ねた ほうが いいです。 For not doing something, use the plain negative: たべない ほうが いいです。" },
        { title: "～ので: because", body: "Plain form plus ので gives a reason, usually in a softer, more polite tone than から: テストが あるので、べんきょうします。 After な-adjectives and nouns, use なので: ひまなので、いきます。" },
        { title: "～なければ いけません: must do", body: "Replace the い of the plain negative with ければ and add いけません: たべない → たべなければ いけません (I must eat). Casually, say ～なきゃ. Another form is ～なくては いけません." },
        { title: "でしょうか: a polite question", body: "でしょうか is a more careful way to ask か: これは いくらでしょうか。 It is common in shops, offices and formal writing, and it softens suggestions: どうでしょうか。" }
      ] },
      { type: "tips", title: "Culture note", items: [
        "んです is everywhere in real Japanese. Doctors ask どうしたんですか, and you answer with んです too. It marks that you are giving an explanation.",
        "ので sounds more polite than から when giving reasons to a teacher or customer, so it is a good habit in formal speech."
      ] }
    ],
    quiz: [
      ask("reasons-and-obligation", "How do you say “I have a headache” as an explanation?", "あたまが いたいんです。", ["あたまが いたいですんです。", "あたまが いたいが です。"], "Plain form plus んです."),
      ask("reasons-and-obligation", "How do you say “I ate too much”?", "たべすぎました。", ["たべますすぎました。", "たべるすぎです。"], "ます stem plus すぎる."),
      ask("reasons-and-obligation", "How do you say “You'd better sleep early”?", "はやく ねた ほうが いいです。", ["はやく ねる ほうが いいます。", "はやく ねて ほうが いいです。"], "Plain past plus ほうが いい."),
      ask("reasons-and-obligation", "Which is a softer way to say “because”?", "ので", ["から", "と"], "ので is softer and more polite than から."),
      ask("reasons-and-obligation", "How do you say “I must study”?", "べんきょうしなければ いけません。", ["べんきょうしなくても いけません。", "べんきょうしなければ いいです。"], "Plain negative: change い to ければ, then add いけません."),
      ask("reasons-and-obligation", "What does どうしたんですか mean?", "What's wrong?", ["Where are you going?", "Who is it?"], "It asks what happened."),
      ask("reasons-and-obligation", "What does でしょうか do?", "Makes a question more polite", ["Makes a question negative", "Makes a request stronger"], "でしょうか is a polite way to ask か.")
    ]
  }
];
