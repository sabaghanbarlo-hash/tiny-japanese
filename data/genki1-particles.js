// Genki I Companion, particle lessons (pilot). DRAFT: Japanese written by Claude, not yet checked by a native speaker.
import { ask } from "./quiz-tools.js";
const L = (who, ja, romaji, en) => ({ who, ja, romaji, en });
const W = (ja, romaji, en) => ({ ja, kana: "", romaji, en });
const P = (title, body) => ({ title, body });
const lesson = (o) => ({
  id: o.id, number: o.number, title: o.title, time: "10 min", summary: o.summary, objective: o.objective,
  blocks: [
    { type: "text", title: "What it does", paras: o.intro },
    { type: "points", title: "How it works, with examples", items: o.points },
    { type: "dialogue", title: "Story: " + o.storyTitle, lines: o.story },
    { type: "words", title: "Vocabulary", items: o.words },
    { type: "tips", title: "Remember", items: o.tips }
  ],
  quiz: o.quiz
});

export const particles = [
  lesson({
    id: "particle-wa", number: 1, title: "は: The Topic Marker",
    summary: "Learn what は marks, why it is read “wa”, and how to talk about someone or something.",
    objective: "By the end you can say who you are and ask about someone with は.",
    intro: [
      "は points at the topic: the thing you are about to talk about. Think of it as “As for ...”.",
      "It goes right after the topic word. Whatever comes after is the comment about that topic."
    ],
    points: [
      P("Topic は comment", "ミカさんは こうこうせい です。 means “As for Mika, she is a high school student”. The topic is ミカさん, and こうこうせい です is what we say about her."),
      P("Written は, read “wa”", "As a particle, は is pronounced “wa”. You write わたしは, but you say “watashi wa”. Only the particle は does this; はい is still “hai”."),
      P("Asking back with は", "Leave the comment off to ask “And what about ...?”: アレックスさんは？ means “And you, Alex?” or “What about Alex?”. It is the easiest way to bounce a question back."),
      P("は can also contrast", "は can say “this one, but not that one”. コーヒーは のみます。 おちゃは のみません。 means “Coffee I drink, but tea I don't”. You will meet this contrast later, so just notice it now.")
    ],
    storyTitle: "Two new classmates",
    story: [
      L("Mika", "わたしは ミカ です。こうこうせい です。", "Watashi wa Mika desu. Koukousei desu.", "I'm Mika. I'm a high school student."),
      L("Alex", "ぼくは アレックス です。だいがくせい です。", "Boku wa Arekkusu desu. Daigakusei desu.", "I'm Alex. I'm a university student."),
      L("Mika", "アレックスさんは アメリカじん ですか。", "Arekkusu-san wa Amerikajin desu ka.", "Are you American, Alex?"),
      L("Alex", "はい、アメリカじん です。ミカさんは？", "Hai, Amerikajin desu. Mika-san wa?", "Yes, I'm American. And you, Mika?"),
      L("Mika", "わたしは にほんじん です。", "Watashi wa nihonjin desu.", "I'm Japanese."),
      L("Alex", "にほんごの せんせいは？", "Nihongo no sensei wa?", "And the Japanese teacher?"),
      L("Mika", "せんせいも にほんじん です。", "Sensei mo nihonjin desu.", "The teacher is Japanese too.")
    ],
    words: [
      W("わたし / ぼく", "watashi / boku", "I (ぼく is used by boys and men)"),
      W("～さん", "-san", "Mr, Ms"),
      W("こうこうせい", "koukousei", "high school student"),
      W("だいがくせい", "daigakusei", "university student"),
      W("にほんじん", "nihonjin", "Japanese person"),
      W("アメリカじん", "Amerikajin", "American person"),
      W("せんせい", "sensei", "teacher")
    ],
    tips: [
      "は is read “wa” only when it is a particle. The same character in はい is still “ha”.",
      "Do not say さん about yourself. You are ミカ です, never ミカさん です."
    ],
    quiz: [
      ask("particle-wa", "How is the particle は pronounced?", "wa", ["ha", "o"], "As a particle, は is read “wa”."),
      ask("particle-wa", "In ミカさんは こうこうせい です, what is the topic?", "ミカさん", ["こうこうせい", "です"], "The word before は is the topic."),
      ask("particle-wa", "What does アレックスさんは？ mean on its own?", "And what about Alex?", ["Alex is a student.", "Is Alex here?"], "は plus a name, with a question tone, bounces the question back."),
      ask("particle-wa", "Which sentence means “I am Japanese”?", "わたしは にほんじん です。", ["にほんじんは わたし です。", "わたしを にほんじん です。"], "Topic は comment: わたし is the topic."),
      ask("particle-wa", "Which is read “ha”, not “wa”?", "はい", ["わたしは", "ミカさんは"], "は in はい is part of the word, so it is “ha”.")
    ]
  }),
  lesson({
    id: "particle-ka", number: 2, title: "か: The Question Particle",
    summary: "Turn a sentence into a yes/no question, and ask with question words.",
    objective: "By the end you can ask yes/no questions and answer them.",
    intro: [
      "Japanese questions are easy: take a normal sentence and put か at the end.",
      "There is no question mark needed, but your voice goes up a little on か."
    ],
    points: [
      P("Sentence + か", "アレックスさんは がくせい です。 is “Alex is a student”. Add か and アレックスさんは がくせい ですか。 is “Is Alex a student?”."),
      P("Answer with はい or いいえ", "はい means “yes” and いいえ means “no”: がくせい ですか。 → はい、がくせい です。 or いいえ、がくせい じゃ ありません。 You will learn the negative later; for now, answer はい."),
      P("Question words", "Words like なに (what), だれ (who) and どこ (where) already make the sentence a question, and you still put か at the end: これは なん ですか。 means “What is this?”. Before です, なに becomes なん."),
      P("Do not use か at the end of a statement", "か only asks. If you want to say something, end with です. If you want to ask, end with ですか.")
    ],
    storyTitle: "At the school festival",
    story: [
      L("Alex", "すみません。これは なん ですか。", "Sumimasen. Kore wa nan desu ka.", "Excuse me. What is this?"),
      L("Mika", "それは たこやき です。", "Sore wa takoyaki desu.", "That's takoyaki."),
      L("Alex", "たこやきは にほんの りょうり ですか。", "Takoyaki wa nihon no ryouri desu ka.", "Is takoyaki a Japanese dish?"),
      L("Mika", "はい、そうです。", "Hai, sou desu.", "Yes, it is."),
      L("Alex", "あの ひとは だれ ですか。", "Ano hito wa dare desu ka.", "Who is that person?"),
      L("Mika", "あの ひとは わたしの せんせい です。", "Ano hito wa watashi no sensei desu.", "That person is my teacher."),
      L("Alex", "せんせいは たこやきの みせの ひと ですか。", "Sensei wa takoyaki no mise no hito desu ka.", "Is your teacher a person from the takoyaki shop?"),
      L("Mika", "いいえ、ちがいます。おきゃくさん です。", "Iie, chigaimasu. Okyakusan desu.", "No, not at all. A customer.")
    ],
    words: [
      W("なに / なん", "nani / nan", "what (なん before です)"),
      W("だれ", "dare", "who"),
      W("たこやき", "takoyaki", "takoyaki, octopus balls"),
      W("りょうり", "ryouri", "dish, cooking"),
      W("みせ", "mise", "shop"),
      W("おきゃくさん", "okyakusan", "customer"),
      W("ちがいます", "chigaimasu", "that's wrong, no")
    ],
    tips: [
      "Say it with a slightly rising voice on か, and you will sound natural.",
      "なん is used before です and before words starting with t, d or n; otherwise you say なに."
    ],
    quiz: [
      ask("particle-ka", "Which particle makes a sentence a question?", "か", ["は", "の"], "Put か at the end."),
      ask("particle-ka", "How do you ask “Is Alex a student?”", "アレックスさんは がくせい ですか。", ["アレックスさんは がくせい か です。", "アレックスさんか がくせい です。"], "か goes at the very end."),
      ask("particle-ka", "Which word is “who”?", "だれ", ["なに", "どこ"], "だれ means “who”."),
      ask("particle-ka", "これは ___ ですか。 (What is this?)", "なん", ["なに", "だれ"], "Before です, なに becomes なん."),
      ask("particle-ka", "How do you answer “yes” politely?", "はい", ["いいえ", "すみません"], "はい is “yes”.")
    ]
  }),
  lesson({
    id: "particle-no", number: 3, title: "の: Linking Nouns",
    summary: "Say “my teacher”, “a Japanese teacher” and “the school's festival” with の.",
    objective: "By the end you can join two nouns with の in the right order.",
    intro: [
      "の links two nouns. The first noun describes or owns the second one.",
      "It is like English “'s” or “of”, but the order is reversed."
    ],
    points: [
      P("Owner の thing", "わたしの かばん is “my bag” and ミカさんの かさ is “Mika's umbrella”. The owner comes first, then の, then the thing."),
      P("Describing with の", "にほんごの ほん is “a Japanese book (a book about Japanese)”. だいがくの せんせい is “a university teacher”. The first noun says what kind."),
      P("Chain them", "You can link more than two: わたしの ともだちの かばん is “my friend's bag”. Always read from the left: the last noun is the main thing."),
      P("Remember: の is not は", "ミカさんは せんせい です。 uses は because Mika is the topic. ミカさんの せんせい uses の because it names Mika's teacher.")
    ],
    storyTitle: "Whose bag is it?",
    story: [
      L("Alex", "あ、かばんが あります。", "A, kaban ga arimasu.", "Oh, there's a bag."),
      L("Mika", "これは だれの かばん ですか。", "Kore wa dare no kaban desu ka.", "Whose bag is this?"),
      L("Alex", "わたしの かばん じゃ ありません。", "Watashi no kaban ja arimasen.", "It's not my bag."),
      L("Mika", "あ、これは ともだちの かばん です。", "A, kore wa tomodachi no kaban desu.", "Oh, this is my friend's bag."),
      L("Alex", "ともだちの なまえは？", "Tomodachi no namae wa?", "What's your friend's name?"),
      L("Mika", "さくらさん です。さくらさんの ほんも ここに あります。", "Sakura-san desu. Sakura-san no hon mo koko ni arimasu.", "It's Sakura. Her book is here too."),
      L("Alex", "にほんごの ほん ですね。", "Nihongo no hon desu ne.", "It's a Japanese book, isn't it.")
    ],
    words: [
      W("かばん", "kaban", "bag"),
      W("かさ", "kasa", "umbrella"),
      W("ほん", "hon", "book"),
      W("ともだち", "tomodachi", "friend"),
      W("なまえ", "namae", "name"),
      W("だれの", "dare no", "whose"),
      W("ここ", "koko", "here")
    ],
    tips: [
      "Read のs from the left. わたしの ともだちの かばん is “my friend's bag”.",
      "の links two nouns. It does not link a noun to a verb."
    ],
    quiz: [
      ask("particle-no", "How do you say “my bag”?", "わたしの かばん", ["かばんの わたし", "わたしは かばん"], "Owner の thing."),
      ask("particle-no", "What does にほんごの ほん mean?", "a Japanese book", ["a book in my bag", "Japan's friend"], "The first noun describes the second."),
      ask("particle-no", "Which means “Mika's umbrella”?", "ミカさんの かさ", ["かさの ミカさん", "ミカさんは かさ"], "Owner の thing."),
      ask("particle-no", "In わたしの ともだちの かばん, what is the main thing?", "かばん", ["わたし", "ともだち"], "The last noun is the main thing."),
      ask("particle-no", "Which word means “whose”?", "だれの", ["だれは", "なにの"], "だれ (who) + の makes “whose”.")
    ]
  }),
  lesson({
    id: "particle-mo", number: 4, title: "も: Also, Too",
    summary: "Use も to say “too” and “also”.",
    objective: "By the end you can say “me too” and link two similar sentences.",
    intro: [
      "も means “also” or “too”. It replaces は when the new topic is the same as before.",
      "It is a tiny word, but it keeps your Japanese from repeating itself."
    ],
    points: [
      P("は becomes も", "わたしは がくせい です。 → わたしも がくせい です。 means “I'm a student too”. You do not use both: も takes the place of は."),
      P("Same comment, new topic", "ミカさんは にほんじん です。 せんせいも にほんじん です。 The comment is the same, so the second sentence changes the topic and adds も."),
      P("Me too", "A short way to say “me too” is わたしも です。 or just わたしも。 You can drop です in casual talk."),
      P("も and ですか", "アレックスさんも ですか。 means “Is Alex too?”. も does not stop you from asking a question.")
    ],
    storyTitle: "Same class, same lunch",
    story: [
      L("Mika", "わたしは こうこうせい です。", "Watashi wa koukousei desu.", "I'm a high school student."),
      L("Alex", "さくらさんも こうこうせい ですか。", "Sakura-san mo koukousei desu ka.", "Is Sakura a high school student too?"),
      L("Mika", "はい、さくらさんも こうこうせい です。", "Hai, Sakura-san mo koukousei desu.", "Yes, Sakura is a high school student too."),
      L("Alex", "わたしの ともだちも こうこうせい です。", "Watashi no tomodachi mo koukousei desu.", "My friend is a high school student too."),
      L("Mika", "ともだちの なまえは？", "Tomodachi no namae wa?", "What's your friend's name?"),
      L("Alex", "ケンです。ケンさんも にほんごの クラスの ひと です。", "Ken desu. Ken-san mo nihongo no kurasu no hito desu.", "It's Ken. Ken is also in the Japanese class.")
    ],
    words: [
      W("も", "mo", "also, too"),
      W("クラス", "kurasu", "class"),
      W("ひと", "hito", "person"),
      W("おなじ", "onaji", "the same"),
      W("ともだち", "tomodachi", "friend")
    ],
    tips: [
      "も takes the place of は. Do not write ミカさんは も.",
      "も only works when the new sentence has the same comment as the one before."
    ],
    quiz: [
      ask("particle-mo", "What does も mean?", "also, too", ["only", "whose"], "も adds “also”."),
      ask("particle-mo", "わたしは がくせい です。 How do you say “I'm a student too”?", "わたしも がくせい です。", ["わたしは も がくせい です。", "わたしの がくせい です。"], "も replaces は."),
      ask("particle-mo", "Which sentence means “Is Sakura too?”", "さくらさんも ですか。", ["さくらさんは も ですか。", "さくらさんの ですか。"], "も goes where は was."),
      ask("particle-mo", "ミカさんは にほんじん です。 せんせい___ にほんじん です。", "も", ["は", "か"], "Same comment, so use も."),
      ask("particle-mo", "Which particle does も take the place of?", "は", ["の", "か"], "も and は cannot appear together.")
    ]
  }),
  lesson({
    id: "particle-wo", number: 5, title: "を: The Object Marker",
    summary: "Mark what the action is done to: eat bread, read a book, watch TV.",
    objective: "By the end you can say what you eat, drink, read and watch.",
    intro: [
      "を marks the object of a verb: the thing the action happens to.",
      "In 「パンを たべます」, bread is the thing being eaten."
    ],
    points: [
      P("Thing を verb", "パンを たべます。 means “I eat bread”. ほんを よみます。 means “I read a book”. The verb always goes last."),
      P("Written を, read “o”", "を is only used as a particle, and it is pronounced “o”. You write ほんを, you say “hon o”."),
      P("Mark one thing at a time", "テレビを みます。 means “I watch TV”. Use を on the thing the verb acts on, not on a place or a person."),
      P("Combine with the topic", "わたしは コーヒーを のみます。 has two jobs: は marks the topic (I) and を marks the object (coffee).")
    ],
    storyTitle: "What do you have in the morning?",
    story: [
      L("Mika", "アレックスさん、あさ なにを たべますか。", "Arekkusu-san, asa nani o tabemasu ka.", "Alex, what do you eat in the morning?"),
      L("Alex", "パンを たべます。そして コーヒーを のみます。", "Pan o tabemasu. Soshite koohii o nomimasu.", "I eat bread. And I drink coffee."),
      L("Mika", "わたしは ごはんを たべます。おちゃを のみます。", "Watashi wa gohan o tabemasu. Ocha o nomimasu.", "I eat rice. I drink tea."),
      L("Alex", "あさ テレビを みますか。", "Asa terebi o mimasu ka.", "Do you watch TV in the morning?"),
      L("Mika", "はい、ニュースを みます。", "Hai, nyuusu o mimasu.", "Yes, I watch the news."),
      L("Alex", "わたしは しんぶんを よみます。", "Watashi wa shinbun o yomimasu.", "I read the newspaper.")
    ],
    words: [
      W("たべます", "tabemasu", "to eat"),
      W("のみます", "nomimasu", "to drink"),
      W("みます", "mimasu", "to see, to watch"),
      W("よみます", "yomimasu", "to read"),
      W("パン", "pan", "bread"),
      W("ごはん", "gohan", "rice, meal"),
      W("おちゃ", "ocha", "tea"),
      W("コーヒー", "koohii", "coffee"),
      W("しんぶん", "shinbun", "newspaper")
    ],
    tips: [
      "を is read “o”, and it only ever appears as a particle.",
      "The verb comes last. Thing を verb, never verb を thing."
    ],
    quiz: [
      ask("particle-wo", "How is the particle を read?", "o", ["wo", "wa"], "を is pronounced “o”."),
      ask("particle-wo", "What does を mark?", "the object of the verb", ["the topic", "a question"], "を marks what the verb acts on."),
      ask("particle-wo", "How do you say “I eat bread”?", "パンを たべます。", ["パンは たべます を。", "たべます パンを。"], "Thing を verb."),
      ask("particle-wo", "ほん___ よみます。 (I read a book.)", "を", ["か", "も"], "ほん is the object, so を."),
      ask("particle-wo", "Where does the verb go in a Japanese sentence?", "at the end", ["at the start", "after は"], "The verb comes last.")
    ]
  }),
  lesson({
    id: "particle-ni", number: 6, title: "に: Time, Goal and Target",
    summary: "Use に for clock times, destinations and the person you meet.",
    objective: "By the end you can say when you do something and where you go.",
    intro: [
      "に marks a point: a point in time, a destination, or the person an action reaches.",
      "It is one small word with three jobs, and they feel alike once you see them."
    ],
    points: [
      P("Time に", "しちじに おきます。 means “I wake up at seven”. Put に after a clock time or a day of the week: げつようびに いきます。"),
      P("Destination に", "がっこうに いきます。 means “I go to school”. に marks the place you head for."),
      P("Target に", "ともだちに あいます。 means “I meet a friend”. に marks the person you meet."),
      P("Not every time word takes に", "Words like きょう, あした and まいにち do not take に. Use に for specific times: しちじに, にちようびに.")
    ],
    storyTitle: "Mika's Monday",
    story: [
      L("Alex", "ミカさんは なんじに おきますか。", "Mika-san wa nanji ni okimasu ka.", "What time do you wake up, Mika?"),
      L("Mika", "しちじに おきます。", "Shichiji ni okimasu.", "I wake up at seven."),
      L("Alex", "がっこうに なんじに いきますか。", "Gakkou ni nanji ni ikimasu ka.", "What time do you go to school?"),
      L("Mika", "しちじはんに がっこうに いきます。", "Shichiji han ni gakkou ni ikimasu.", "I go to school at seven thirty."),
      L("Alex", "ごごは なにを しますか。", "Gogo wa nani o shimasu ka.", "What do you do in the afternoon?"),
      L("Mika", "ごごに ともだちに あいます。", "Gogo ni tomodachi ni aimasu.", "In the afternoon I meet a friend.")
    ],
    words: [
      W("なんじ", "nanji", "what time"),
      W("しちじ", "shichiji", "seven o'clock"),
      W("～はん", "-han", "half past"),
      W("ごご", "gogo", "afternoon, p.m."),
      W("おきます", "okimasu", "to wake up, to get up"),
      W("いきます", "ikimasu", "to go"),
      W("あいます", "aimasu", "to meet"),
      W("がっこう", "gakkou", "school")
    ],
    tips: [
      "Use に with clock times and days of the week, but not with きょう or あした.",
      "あいます needs に for the person you meet: ともだちに あいます."
    ],
    quiz: [
      ask("particle-ni", "How do you say “I wake up at seven”?", "しちじに おきます。", ["しちじを おきます。", "しちじの おきます。"], "に marks a clock time."),
      ask("particle-ni", "What does がっこうに いきます mean?", "I go to school.", ["I study at school.", "I meet at school."], "に marks the destination."),
      ask("particle-ni", "ともだち___ あいます。 (I meet a friend.)", "に", ["を", "で"], "あいます takes に for the person you meet."),
      ask("particle-ni", "Which time word does not take に?", "あした", ["しちじ", "げつようび"], "あした, きょう and まいにち go without に."),
      ask("particle-ni", "What does なんじに mean?", "at what time", ["in what place", "with whom"], "なんじ is “what time”, and に marks the time.")
    ]
  }),
  lesson({
    id: "particle-de", number: 7, title: "で: Place of Action and Means",
    summary: "Say where you do things and how you get there.",
    objective: "By the end you can say where you study and what you go by.",
    intro: [
      "で has two jobs: it marks the place where an action happens, and the means you use.",
      "Compare に and で: に is where you go, で is where you do it."
    ],
    points: [
      P("Place で action", "としょかんで べんきょうします。 means “I study at the library”. The library is where the studying happens."),
      P("Means で", "バスで いきます。 means “I go by bus”. じてんしゃで いきます。 means “I go by bicycle”."),
      P("Language で", "にほんごで はなします。 means “I speak in Japanese”. で marks the tool, here the language."),
      P("に vs で", "がっこうに いきます is “I go to school” (a destination). がっこうで べんきょうします is “I study at school” (where the action happens).")
    ],
    storyTitle: "How do you get there?",
    story: [
      L("Alex", "ミカさんは どこで べんきょうしますか。", "Mika-san wa doko de benkyou shimasu ka.", "Where do you study, Mika?"),
      L("Mika", "としょかんで べんきょうします。", "Toshokan de benkyou shimasu.", "I study at the library."),
      L("Alex", "としょかんに バスで いきますか。", "Toshokan ni basu de ikimasu ka.", "Do you go to the library by bus?"),
      L("Mika", "いいえ、じてんしゃで いきます。", "Iie, jitensha de ikimasu.", "No, I go by bicycle."),
      L("Alex", "ともだちと にほんごで はなしますか。", "Tomodachi to nihongo de hanashimasu ka.", "Do you talk with friends in Japanese?"),
      L("Mika", "はい。えいごでも はなします。", "Hai. Eigo demo hanashimasu.", "Yes. I talk in English too.")
    ],
    words: [
      W("どこ", "doko", "where"),
      W("としょかん", "toshokan", "library"),
      W("バス", "basu", "bus"),
      W("じてんしゃ", "jitensha", "bicycle"),
      W("べんきょうします", "benkyou shimasu", "to study"),
      W("はなします", "hanashimasu", "to speak, to talk"),
      W("えいご", "eigo", "English")
    ],
    tips: [
      "で marks where an action happens, and に marks where you go.",
      "で also marks the means: バスで, じてんしゃで, にほんごで."
    ],
    quiz: [
      ask("particle-de", "How do you say “I study at the library”?", "としょかんで べんきょうします。", ["としょかんに べんきょうします。", "としょかんを べんきょうします。"], "で marks where the action happens."),
      ask("particle-de", "How do you say “I go by bus”?", "バスで いきます。", ["バスに いきます。", "バスを いきます。"], "で marks the means."),
      ask("particle-de", "にほんご___ はなします。 (I speak in Japanese.)", "で", ["に", "は"], "で marks the language you use."),
      ask("particle-de", "Which sentence is “I go to school”?", "がっこうに いきます。", ["がっこうで いきます。", "がっこうを いきます。"], "に marks the destination."),
      ask("particle-de", "What does どこで べんきょうしますか mean?", "Where do you study?", ["What do you study?", "When do you study?"], "どこ is “where”, and で marks the place.")
    ]
  }),
  lesson({
    id: "particle-e", number: 8, title: "へ: Direction",
    summary: "Say where you are heading with へ, read “e”.",
    objective: "By the end you can say where you go, come or return to.",
    intro: [
      "へ marks the direction you are heading. It is similar to に for going places.",
      "As a particle, へ is read “e”, not “he”."
    ],
    points: [
      P("Place へ go", "きょうとへ いきます。 means “I go to Kyoto”. へ points toward the place."),
      P("Read “e”", "You write へ but say “e”. きょうとへ is “Kyouto e”. The same character in へや (room) is still “he”."),
      P("へ and に", "With いきます, きます and かえります you can use either: がっこうへ いきます and がっこうに いきます mean the same. へ is a little more about direction, に about the goal."),
      P("へ does not mark time", "しちじへ おきます is wrong. For times, always use に.")
    ],
    storyTitle: "A trip to Kyoto",
    story: [
      L("Mika", "あした、どこへ いきますか。", "Ashita, doko e ikimasu ka.", "Where are you going tomorrow?"),
      L("Alex", "きょうとへ いきます。", "Kyouto e ikimasu.", "I'm going to Kyoto."),
      L("Mika", "なにで いきますか。", "Nani de ikimasu ka.", "How are you going?"),
      L("Alex", "でんしゃで いきます。", "Densha de ikimasu.", "I'm going by train."),
      L("Mika", "いつ うちへ かえりますか。", "Itsu uchi e kaerimasu ka.", "When will you come home?"),
      L("Alex", "あさって うちへ かえります。", "Asatte uchi e kaerimasu.", "I'll come home the day after tomorrow.")
    ],
    words: [
      W("きょうと", "Kyouto", "Kyoto"),
      W("あした", "ashita", "tomorrow"),
      W("あさって", "asatte", "the day after tomorrow"),
      W("でんしゃ", "densha", "train"),
      W("かえります", "kaerimasu", "to return, to go home"),
      W("うち", "uchi", "home, house"),
      W("いつ", "itsu", "when")
    ],
    tips: [
      "へ is read “e” as a particle.",
      "For times use に, and for directions use へ or に."
    ],
    quiz: [
      ask("particle-e", "How is the particle へ read?", "e", ["he", "wa"], "As a particle, へ is “e”."),
      ask("particle-e", "How do you say “I go to Kyoto”?", "きょうとへ いきます。", ["きょうとを いきます。", "きょうとは いきます。"], "へ marks the direction."),
      ask("particle-e", "うち___ かえります。 (I go home.)", "へ", ["を", "も"], "へ marks where you return to."),
      ask("particle-e", "Which particle can mean the same as へ with いきます?", "に", ["を", "か"], "がっこうに and がっこうへ both work."),
      ask("particle-e", "Which is wrong?", "しちじへ おきます。", ["しちじに おきます。", "きょうとへ いきます。"], "Times take に, not へ.")
    ]
  }),
  lesson({
    id: "particle-to", number: 9, title: "と: And, With",
    summary: "Join nouns with と and say who you do things with.",
    objective: "By the end you can list a complete set of nouns and say who you went with.",
    intro: [
      "と has two meanings: “and” between nouns, and “with” a person.",
      "Both are easy, but と only joins nouns."
    ],
    points: [
      P("Noun と noun", "パンと たまごを かいます。 means “I buy bread and eggs”. と lists nouns, and the list is complete."),
      P("With someone", "ともだちと いきます。 means “I go with a friend”. と marks the partner in the action."),
      P("Not for verbs", "You cannot use と to join two verbs or two adjectives. Genki teaches other ways for those."),
      P("Alone: ひとりで", "To say “alone”, use ひとりで: ひとりで いきます。 means “I go alone”. It does not use と.")
    ],
    storyTitle: "Weekend plans",
    story: [
      L("Mika", "しゅうまつ、だれと えいがを みますか。", "Shuumatsu, dare to eiga o mimasu ka.", "Who are you watching a movie with this weekend?"),
      L("Alex", "ともだちと みます。", "Tomodachi to mimasu.", "I'm watching with a friend."),
      L("Mika", "ケンさんと さくらさんと ですか。", "Ken-san to Sakura-san to desu ka.", "With Ken and Sakura?"),
      L("Alex", "いいえ、ケンさんと ふたりで みます。", "Iie, Ken-san to futari de mimasu.", "No, just the two of us, Ken and me."),
      L("Mika", "えいがの あとで パンと コーヒーを かいますか。", "Eiga no ato de pan to koohii o kaimasu ka.", "Will you buy bread and coffee after the movie?"),
      L("Alex", "はい、かいます。", "Hai, kaimasu.", "Yes, I will.")
    ],
    words: [
      W("しゅうまつ", "shuumatsu", "weekend"),
      W("えいが", "eiga", "movie"),
      W("だれと", "dare to", "with whom"),
      W("ふたりで", "futari de", "two people together"),
      W("ひとりで", "hitori de", "alone"),
      W("かいます", "kaimasu", "to buy")
    ],
    tips: [
      "と joins nouns only. It does not join verbs.",
      "だれと means “with whom?”, and the answer is ともだちと, かぞくと, and so on."
    ],
    quiz: [
      ask("particle-to", "What does と do between two nouns?", "means “and”", ["marks the topic", "asks a question"], "A と B means “A and B”."),
      ask("particle-to", "How do you say “I go with a friend”?", "ともだちと いきます。", ["ともだちを いきます。", "ともだちで いきます。"], "と marks the partner."),
      ask("particle-to", "How do you say “bread and eggs”?", "パンと たまご", ["パンの たまご", "パンは たまご"], "と lists the nouns."),
      ask("particle-to", "What does だれと mean?", "with whom", ["who", "whose"], "だれ + と is “with whom”."),
      ask("particle-to", "Can と join two verbs?", "No, only nouns.", ["Yes, always.", "Yes, only past forms."], "と joins nouns.")
    ]
  }),
  lesson({
    id: "particle-ga", number: 10, title: "が: The Subject Marker",
    summary: "See what が marks, and when it replaces は.",
    objective: "By the end you can answer who does something and say what exists.",
    intro: [
      "が marks the subject: who or what does the action, or what exists.",
      "は and が can look alike. は says what we are talking about, and が points at the answer."
    ],
    points: [
      P("Question word が", "だれが コーヒーを いれますか。 means “Who makes the coffee?”. When the subject is a question word, use が, not は."),
      P("Answer with が", "アレックスさんが いれます。 means “Alex makes it”. The new, important information gets が."),
      P("Things that exist", "ほんが あります。 means “There is a book”. が marks the thing that exists."),
      P("は vs が", "アレックスさんは いれます。 sounds like “As for Alex, he makes it”. が puts the focus on Alex: it is Alex who does it.")
    ],
    storyTitle: "Who makes the coffee?",
    story: [
      L("Mika", "だれが コーヒーを いれますか。", "Dare ga koohii o iremasu ka.", "Who makes the coffee?"),
      L("Alex", "わたしが いれます。", "Watashi ga iremasu.", "I do."),
      L("Mika", "ありがとう。じゃあ、わたしが おちゃを いれます。", "Arigatou. Jaa, watashi ga ocha o iremasu.", "Thanks. Then I'll make the tea."),
      L("Alex", "テーブルの うえに ケーキが あります。", "Teeburu no ue ni keeki ga arimasu.", "There's a cake on the table."),
      L("Mika", "だれが かいましたか。", "Dare ga kaimashita ka.", "Who bought it?"),
      L("Alex", "さくらさんが かいました。", "Sakura-san ga kaimashita.", "Sakura bought it.")
    ],
    words: [
      W("いれます", "iremasu", "to make (tea, coffee)"),
      W("ケーキ", "keeki", "cake"),
      W("テーブル", "teeburu", "table"),
      W("うえ", "ue", "top, above"),
      W("あります", "arimasu", "there is (things)"),
      W("かいました", "kaimashita", "bought")
    ],
    tips: [
      "Use が when the subject is a question word: だれが, なにが.",
      "は is the topic and が is the doer. Use が to highlight who does it."
    ],
    quiz: [
      ask("particle-ga", "Which particle marks the subject?", "が", ["を", "の"], "が marks the subject."),
      ask("particle-ga", "How do you ask “Who makes the coffee?”", "だれが コーヒーを いれますか。", ["だれは コーヒーを いれますか。", "だれを コーヒーを いれますか。"], "Question word as subject takes が."),
      ask("particle-ga", "ほん___ あります。 (There is a book.)", "が", ["を", "で"], "が marks the thing that exists."),
      ask("particle-ga", "How do you answer “Who bought it?”", "さくらさんが かいました。", ["さくらさんを かいました。", "さくらさんの かいました。"], "The answer to a だれが question takes が."),
      ask("particle-ga", "What does が do that は does not?", "puts focus on the doer", ["asks a question", "marks the object"], "が highlights who or what does it.")
    ]
  })
];
