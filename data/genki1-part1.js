// Genki I Companion, lessons 1-3. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
import { ask } from "./quiz-tools.js";
const L = (who, ja, romaji, en) => ({ who, ja, romaji, en });
const W = (ja, romaji, en) => ({ ja, kana: "", romaji, en });

export const part1 = [
  {
    id: "wa-desu-ka-no",
    number: 1,
    title: "は, です, か and の: Your First Sentences",
    time: "20 min",
    summary: "Build your first sentences with the topic marker は, the polite です, the question marker か and the linking particle の.",
    objective: "By the end you can introduce yourself, ask a yes/no question and say whose something is.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "Every Japanese sentence in Genki I starts from four small words: は, です, か and の. With just these you can introduce yourself, ask a question and say who something belongs to.",
        "Listen to Mika and Alex meet for the first time, and see how many of the four you can spot."
      ] },
      { type: "dialogue", title: "Dialogue: Nice to meet you", lines: [
        L("Mika", "はじめまして。ミカです。よろしく おねがいします。", "Hajimemashite. Mika desu. Yoroshiku onegaishimasu.", "Nice to meet you. I'm Mika. Please treat me kindly."),
        L("Alex", "はじめまして。アレックスです。アメリカじん です。", "Hajimemashite. Arekkusu desu. Amerikajin desu.", "Nice to meet you. I'm Alex. I'm American."),
        L("Mika", "アレックスさんは だいがくせい ですか。", "Arekkusu-san wa daigakusei desu ka.", "Alex, are you a university student?"),
        L("Alex", "はい、そうです。だいがくの いちねんせい です。", "Hai, sou desu. Daigaku no ichinensei desu.", "Yes, that's right. I'm a first-year university student."),
        L("Mika", "わたしは こうこうせい です。", "Watashi wa koukousei desu.", "I'm a high school student."),
        L("Alex", "ミカさんの せんせいは にほんじん ですか。", "Mika-san no sensei wa nihonjin desu ka.", "Is your teacher Japanese, Mika?"),
        L("Mika", "はい、にほんじん です。アレックスさんの せんせいは？", "Hai, nihonjin desu. Arekkusu-san no sensei wa?", "Yes, she's Japanese. And your teacher, Alex?"),
        L("Alex", "わたしの にほんごの せんせいは にほんじん です。", "Watashi no nihongo no sensei wa nihonjin desu.", "My Japanese teacher is Japanese.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("わたし", "watashi", "I, me"),
        W("～さん", "-san", "Mr, Ms (added to other people's names)"),
        W("はじめまして", "hajimemashite", "nice to meet you (first meeting)"),
        W("よろしく おねがいします", "yoroshiku onegaishimasu", "please treat me kindly (after introducing yourself)"),
        W("はい / いいえ", "hai / iie", "yes / no"),
        W("そうです", "sou desu", "that's right"),
        W("だいがくせい", "daigakusei", "university student"),
        W("いちねんせい", "ichinensei", "first-year student"),
        W("こうこうせい", "koukousei", "high school student"),
        W("せんせい", "sensei", "teacher"),
        W("にほんご", "nihongo", "the Japanese language"),
        W("にほんじん / アメリカじん", "nihonjin / Amerikajin", "Japanese person / American person")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "は: the topic marker", body: "は marks the topic, the thing you are talking about. It is written は but read “wa”. ミカさんは こうこうせい です means “As for Mika, she is a high school student”. Japanese does not need a subject in every sentence: if the topic is clear, you can leave it out." },
        { title: "です: the polite “is / am / are”", body: "です goes at the very end and makes the sentence polite. It does not change for I, you, he or they: わたしは がくせい です。 ミカさんは がくせい です。 On its own, そうです means “That's right”." },
        { title: "か: the question marker", body: "Put か at the end to ask a question: だいがくせい ですか。 You do not need a question mark, and your voice rises a little. Answer with はい (yes) or いいえ (no)." },
        { title: "の: linking two nouns", body: "の joins two nouns, and the first one describes or owns the second: わたしの せんせい is “my teacher” and にほんごの せんせい is “a Japanese teacher”. You can chain them: わたしの にほんごの せんせい (my Japanese teacher). The order is the reverse of English “teacher of Japanese”." }
      ] },
      { type: "tips", title: "Culture note", items: [
        "End a self-introduction with よろしく おねがいします. It means something like “I hope we get along well”, and it is the normal polite way to finish.",
        "Add さん to other people's names, never to your own. You say ミカです, not ミカさんです, about yourself."
      ] }
    ],
    quiz: [
      ask("wa-desu-ka-no", "Which word marks the topic of a sentence?", "は", ["か", "です"], "は marks the topic."),
      ask("wa-desu-ka-no", "How is は read in わたしは?", "wa", ["ha", "o"], "As a particle, は is read “wa”."),
      ask("wa-desu-ka-no", "Which word turns a sentence into a question?", "か", ["の", "です"], "Add か at the end."),
      ask("wa-desu-ka-no", "How do you say “my teacher”?", "わたしの せんせい", ["せんせいの わたし", "わたし です せんせい"], "In A の B, A describes or owns B."),
      ask("wa-desu-ka-no", "What does そうです mean?", "That's right.", ["I don't know.", "Excuse me."], "そうです confirms what someone said."),
      ask("wa-desu-ka-no", "Which sentence means “Are you American, Alex?”", "アレックスさんは アメリカじん ですか。", ["アレックスさんの アメリカじん ですか。", "アレックスさんは アメリカじん か です。"], "Topic は, noun, です, then か at the very end."),
      ask("wa-desu-ka-no", "How do you say “a teacher of Japanese”?", "にほんごの せんせい", ["せんせいの にほんご", "にほんごは せんせい"], "The describing noun comes first.")
    ]
  },
  {
    id: "pointing-words-and-particles",
    number: 2,
    title: "Pointing Words, も, じゃ ありません, ね and よ",
    time: "30 min",
    summary: "Point at things and places with これ, この and ここ, ask whose they are with だれの, say “also” with も, say “is not” and add ね and よ.",
    objective: "By the end you can point at things, ask whose they are, say no politely, and sound natural with ね and よ.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "Japanese has a tidy set of pointing words, called こそあど words after their first sounds. こ is close to me, そ is close to you, あ is far from both of us, and ど means “which”. Learn the pattern once and you get a whole family of words.",
        "Alex and Mika are in a gift shop. Listen for the pointing words, for も, and for the little endings ね and よ."
      ] },
      { type: "dialogue", title: "Dialogue: At the gift shop", lines: [
        L("Alex", "すみません、これは なん ですか。", "Sumimasen, kore wa nan desu ka.", "Excuse me, what is this?"),
        L("Mika", "それは せんす です。", "Sore wa sensu desu.", "That is a folding fan."),
        L("Alex", "あの かばんは だれの ですか。", "Ano kaban wa dare no desu ka.", "Whose is that bag over there?"),
        L("Mika", "わたしの じゃ ありません。ともだちの です。", "Watashi no ja arimasen. Tomodachi no desu.", "It's not mine. It's my friend's."),
        L("Alex", "その かさも ともだちの ですか。", "Sono kasa mo tomodachi no desu ka.", "Is that umbrella your friend's too?"),
        L("Mika", "いいえ、この かさは わたしの ですよ。", "Iie, kono kasa wa watashi no desu yo.", "No, this umbrella is mine, you know."),
        L("Alex", "そう ですか。レジは あそこ ですね。", "Sou desu ka. Reji wa asoko desu ne.", "I see. The register is over there, right?"),
        L("Mika", "ええ、あそこ です。", "Ee, asoko desu.", "Yes, it's over there.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        W("これ / それ / あれ / どれ", "kore / sore / are / dore", "this / that / that over there / which (things)"),
        W("この / その / あの / どの", "kono / sono / ano / dono", "this ~ / that ~ / that ~ over there / which ~"),
        W("ここ / そこ / あそこ / どこ", "koko / soko / asoko / doko", "here / there / over there / where"),
        W("なん", "nan", "what"),
        W("だれ", "dare", "who"),
        W("かばん / かさ", "kaban / kasa", "bag / umbrella"),
        W("せんす", "sensu", "folding fan"),
        W("ともだち", "tomodachi", "friend"),
        W("レジ", "reji", "cash register"),
        W("すみません", "sumimasen", "excuse me, sorry"),
        W("ええ", "ee", "yes (a softer はい)")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "これ, それ, あれ, どれ: pointing at things", body: "These stand alone and mean “this one, that one, that one over there, which one”. Use これ for things near you, それ for things near the person you are talking to, and あれ for things far from both. When you hold a pen and a friend asks about it, your friend says それ and you say これ." },
        { title: "この, その, あの, どの and ここ, そこ, あそこ, どこ", body: "この, その, あの and どの describe a noun, so a noun must follow: この かばん (this bag). これ stands alone, but この never does. For places, use ここ, そこ, あそこ and どこ: レジは あそこ です。" },
        { title: "だれの: whose", body: "だれの means “whose”: あの かばんは だれの ですか。 Answer with a name plus の: ともだちの です。 If the thing is already clear, you can leave the noun out, so わたしの です means “It's mine”." },
        { title: "も: also", body: "Replace は with も to say “too”: その かさも ともだちの ですか。 means “Is that umbrella also your friend's?” Use も only when the same thing is true of both items." },
        { title: "じゃ ありません: “is not”", body: "To say “is not”, change です to じゃ ありません: わたしの じゃ ありません。 Careful writing uses では ありません. With close friends you will hear the short form じゃ ない, which you meet properly in Lesson 8." },
        { title: "ね: “isn't it? / right?”", body: "ね at the end asks for agreement or shows you share a feeling: レジは あそこ ですね。 means “The register is over there, right?” Use it when you expect the other person to agree." },
        { title: "よ: “you know / I'm telling you”", body: "よ at the end tells the listener something they may not know, or adds emphasis: この かさは わたしの ですよ。 Use it with care: too strong a よ can sound pushy." }
      ] },
      { type: "tips", title: "Culture note", items: [
        "In many shops staff say いらっしゃいませ when you walk in. You do not have to answer; a small nod is enough.",
        "ね is about sharing: you will hear it all day in friendly chat. よ is about informing. Choose between them by asking yourself “do I expect agreement, or am I telling them something new?”"
      ] }
    ],
    quiz: [
      ask("pointing-words-and-particles", "You hold a pen and your friend asks what it is. What does your friend say?", "それは なん ですか。", ["これは なん ですか。", "あれは なん ですか。"], "Things near the listener are それ."),
      ask("pointing-words-and-particles", "Which sentence is correct?", "この かばんは ミカさんの です。", ["この は ミカさんの です。", "これ かばんは ミカさんの です。"], "この must be followed by a noun, while これ stands alone."),
      ask("pointing-words-and-particles", "How do you ask “Whose is that umbrella?”", "あの かさは だれの ですか。", ["あの かさは だれ ですか。", "あの かさは どこ ですか。"], "だれの means “whose”."),
      ask("pointing-words-and-particles", "How do you say “It's my friend's, too”?", "ともだちのも です。", ["ともだちを です。", "ともだちは じゃ。"], "も replaces は and means “also”."),
      ask("pointing-words-and-particles", "How do you say “It's not mine”?", "わたしの じゃ ありません。", ["わたしの ですか。", "わたしの ありません です。"], "じゃ ありません is the polite negative of です."),
      ask("pointing-words-and-particles", "Which ending asks the listener to agree with you?", "ね", ["よ", "か"], "ね asks for agreement; よ tells new information."),
      ask("pointing-words-and-particles", "Which word means “where”?", "どこ", ["どれ", "だれ"], "どこ asks about a place.")
    ]
  },
  {
    id: "verbs-and-particles",
    number: 3,
    title: "Verbs and Particles: を, で, に and へ",
    time: "45 min",
    summary: "Learn the three kinds of verbs, make the polite ます form, and use the particles を, で, に and へ, invitations and frequency words.",
    objective: "By the end you can say what you do, where and when, and invite a friend to do something.",
    blocks: [
      { type: "text", title: "Warm-up", paras: [
        "Now we move from nouns to verbs. This is a big lesson, so go slowly. In Japanese the verb comes last, and small words called particles tell you the job of each word before it: the object, the place, the time, the direction.",
        "Alex wants to invite Mika to the cinema. Listen for how he asks, how she answers, and how they agree on a time."
      ] },
      { type: "dialogue", title: "Dialogue: A movie invitation", lines: [
        L("Alex", "ミカさん、あした なにを しますか。", "Mika-san, ashita nani o shimasu ka.", "Mika, what are you doing tomorrow?"),
        L("Mika", "あしたの ごぜん、うちで ほんを よみます。", "Ashita no gozen, uchi de hon o yomimasu.", "Tomorrow morning I'll read a book at home."),
        L("Alex", "そう ですか。ごご、えいがを みませんか。", "Sou desu ka. Gogo, eiga o mimasen ka.", "I see. Would you like to watch a movie in the afternoon?"),
        L("Mika", "いいですね。コーヒーも のみませんか。", "Ii desu ne. Koohii mo nomimasen ka.", "Sounds good. Shall we have coffee too?"),
        L("Alex", "ええ、のみます。", "Ee, nomimasu.", "Yes, let's."),
        L("Mika", "なんじに いきますか。", "Nanji ni ikimasu ka.", "What time shall we go?"),
        L("Alex", "さんじに えきで あいませんか。", "Sanji ni eki de aimasen ka.", "Shall we meet at the station at three?"),
        L("Mika", "はい、いいですよ。", "Hai, ii desu yo.", "Yes, that's fine.")
      ] },
      { type: "words", title: "Verbs (dictionary form / polite form)", items: [
        W("たべる / たべます", "taberu / tabemasu", "eat"),
        W("みる / みます", "miru / mimasu", "see, watch"),
        W("ねる / ねます", "neru / nemasu", "sleep, go to bed"),
        W("おきる / おきます", "okiru / okimasu", "get up"),
        W("のむ / のみます", "nomu / nomimasu", "drink"),
        W("よむ / よみます", "yomu / yomimasu", "read"),
        W("いく / いきます", "iku / ikimasu", "go"),
        W("はなす / はなします", "hanasu / hanashimasu", "speak, talk"),
        W("あう / あいます", "au / aimasu", "meet"),
        W("かえる / かえります", "kaeru / kaerimasu", "go home, return"),
        W("する / します", "suru / shimasu", "do"),
        W("くる / きます", "kuru / kimasu", "come")
      ] },
      { type: "words", title: "Other words", items: [
        W("ほん / えいが", "hon / eiga", "book / movie"),
        W("うち / えき", "uchi / eki", "home / station"),
        W("コーヒー / バス", "koohii / basu", "coffee / bus"),
        W("あした / ごぜん / ごご", "ashita / gozen / gogo", "tomorrow / morning / afternoon"),
        W("いつも / よく / ときどき", "itsumo / yoku / tokidoki", "always / often / sometimes"),
        W("あまり / ぜんぜん", "amari / zenzen", "not very / not at all (with negative verbs)")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        { title: "Ichidan verbs (る-verbs)", body: "Dictionary-form verbs end in the sound u. An ichidan verb ends in る and the sound before it is い or え: たべる, みる, ねる, おきる. They are the easy group because only the る changes." },
        { title: "Godan verbs (う-verbs)", body: "Every other verb is godan: のむ, よむ, いく, はなす, あう. A few look ichidan but are godan, and the one to remember is かえる (go home). When you meet a verb ending in る, check it against your word list." },
        { title: "Irregular verbs", body: "Only two verbs are irregular: する (do) and くる (come). Learn them as separate words." },
        { title: "Polite form: ichidan verbs", body: "Drop る and add ます: たべる → たべます, みる → みます. The negative is ません: たべません." },
        { title: "Polite form: godan verbs", body: "Change the last sound to the い-row, then add ます: のむ → のみます, よむ → よみます, いく → いきます, はなす → はなします, あう → あいます, かえる → かえります. Negative: のみません." },
        { title: "Polite form: irregular verbs", body: "する → します and くる → きます (read “kimasu”). Negative: しません, きません." },
        { title: "Present tense: ます and ません", body: "The ます form covers the present and the future, so あした えいがを みます means “I'll watch a movie tomorrow” and まいにち のみます means “I drink every day”. The negative is ません. The verb does not change for I, you or they." },
        { title: "を: the object", body: "を marks what the action is done to: ほんを よみます。 It is written を but read “o”." },
        { title: "で: place or tool", body: "で marks the place where an action happens: うちで ほんを よみます。 It also marks the tool or means: バスで いきます (go by bus)." },
        { title: "に: time and target", body: "に marks a specific time: さんじに あいます。 It also marks the destination of movement (がっこうに いきます) and the person you meet (ともだちに あいます). Words like あした and まいにち take no に." },
        { title: "へ: direction", body: "へ marks the direction of movement: えきへ いきます。 It is written へ but read “e”. For going places, へ and に are often interchangeable." },
        { title: "～ませんか: an invitation", body: "Add か to the negative form to invite politely: えいがを みませんか。 means “Would you like to watch a movie?” A friendly yes is ええ、みます or はい、いいですよ。" },
        { title: "Frequency words", body: "いつも, よく and ときどき go before the verb: ときどき えいがを みます。 With あまり and ぜんぜん the verb must be negative: ぜんぜん コーヒーを のみません。" },
        { title: "Word order", body: "A reliable order is topic, time, place, object, verb: ミカさんは あした うちで ほんを よみます。 Only the verb must stay last; the other parts can move if the particles stay attached." }
      ] },
      { type: "tips", title: "Culture note", items: [
        "ませんか is a soft invitation, so a refusal is often soft too. People say ちょっと… (“it's a bit…”) and leave it unfinished instead of saying no. Listen for it.",
        "かえる (go home) is a godan verb even though it ends in える. It is the most common one to get wrong."
      ] }
    ],
    quiz: [
      ask("verbs-and-particles", "Which of these is an ichidan verb?", "たべる", ["のむ", "いく"], "たべる ends in える, and ichidan verbs drop る."),
      ask("verbs-and-particles", "How do you make the polite form of のむ?", "のみます", ["のます", "のむます"], "Godan: change む to み, then add ます."),
      ask("verbs-and-particles", "What is the polite form of くる?", "きます", ["くります", "こます"], "くる is irregular: きます."),
      ask("verbs-and-particles", "Which sentence is correct for “I read a book at home”?", "うちで ほんを よみます。", ["うちを ほんで よみます。", "うちへ ほんを よみます。"], "で marks the place of the action, を marks the object."),
      ask("verbs-and-particles", "Which particle goes after a clock time such as さんじ?", "に", ["で", "を"], "Use に after a specific time."),
      ask("verbs-and-particles", "How is へ read when it is a particle?", "e", ["he", "o"], "As a particle, へ is read “e”."),
      ask("verbs-and-particles", "Which sentence invites someone to watch a movie?", "えいがを みませんか。", ["えいがを みません。", "えいがを みました。"], "Add か to the negative to invite."),
      ask("verbs-and-particles", "Which sentence is correct?", "ぜんぜん コーヒーを のみません。", ["ぜんぜん コーヒーを のみます。", "ぜんぜん コーヒーを のみませんか。"], "ぜんぜん needs a negative verb.")
    ]
  }
];
