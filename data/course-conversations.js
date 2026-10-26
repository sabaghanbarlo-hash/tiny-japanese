// Course 2: First Conversations. Ten dialogue-based lessons for beginners who can read hiragana.
// Dialogue lines are written in kana with spaces after particles, like the free lessons. Romaji doubles long vowels (ou, oo).
import { ask } from "./quiz-tools.js";

const lesson = (o) => o;
const V = (ja, kana, romaji, en) => ({ ja, kana, romaji, en });
const D = (who, ja, romaji, en) => ({ who, ja, romaji, en });
const P = (title, body) => ({ title, body });
const id = (s) => s;

export const conversationLessons = [
  lesson({
    id: "greetings-through-the-day", number: 1, title: "Greetings Through the Day", time: "20 min",
    summary: "Say good morning, hello, good evening, thank you, sorry and goodbye.",
    objective: "By the end you can greet someone at any time of day, thank them, apologise, and say goodbye politely.",
    blocks: [
      { type: "text", title: "Warm-up", paras: ["Japanese greetings change with the time of day. Mika and Alex meet at different moments, so you can hear all of the main ones. Read each line, then cover the romaji and English to test yourself."] },
      { type: "dialogue", title: "Morning", lines: [
        D("Mika", "おはよう ございます！", "Ohayou gozaimasu!", "Good morning!"),
        D("Alex", "おはよう ございます！", "Ohayou gozaimasu!", "Good morning!")
      ] },
      { type: "dialogue", title: "Afternoon and evening", lines: [
        D("Mika", "こんにちは！", "Konnichiwa!", "Hello! (daytime)"),
        D("Alex", "こんにちは！", "Konnichiwa!", "Hello!"),
        D("Mika", "こんばんは。", "Konbanwa.", "Good evening.")
      ] },
      { type: "dialogue", title: "Saying goodbye", lines: [
        D("Mika", "じゃあ、また あした！", "Jaa, mata ashita!", "Well then, see you tomorrow!"),
        D("Alex", "はい、また あした！", "Hai, mata ashita!", "Yes, see you tomorrow!"),
        D("Mika", "おやすみなさい。", "Oyasuminasai.", "Good night."),
        D("Alex", "おやすみなさい。", "Oyasuminasai.", "Good night.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        V("おはようございます", "", "ohayou gozaimasu", "good morning (polite)"),
        V("おはよう", "", "ohayou", "good morning (casual, with friends)"),
        V("こんにちは", "", "konnichiwa", "hello, good afternoon"),
        V("こんばんは", "", "konbanwa", "good evening"),
        V("おやすみなさい", "", "oyasuminasai", "good night"),
        V("また明日", "またあした", "mata ashita", "see you tomorrow"),
        V("ありがとうございます", "", "arigatou gozaimasu", "thank you (polite)"),
        V("どういたしまして", "", "dou itashimashite", "you're welcome"),
        V("すみません", "", "sumimasen", "excuse me / sorry / thank you"),
        V("ごめんなさい", "", "gomennasai", "I'm sorry"),
        V("はい", "", "hai", "yes"),
        V("いいえ", "", "iie", "no")
      ] },
      { type: "points", title: "Grammar and usage", items: [
        P("Polite vs casual", "おはよう is fine with friends and family. Add ございます (おはよう ございます) when talking to a teacher, a boss, a shopkeeper, or anyone you don't know well. When you're unsure, choose the polite form."),
        P("The は in こんにちは and こんばんは", "These greetings are written with は, but it is read “wa”, not “ha”. They began as parts of longer sentences, and the old spelling stayed."),
        P("すみません does three jobs", "It can mean “excuse me” (to get someone's attention), “sorry” (for a small mistake) and even “thank you” (when someone has gone to trouble for you). It is probably the most useful word in this lesson."),
        P("ありがとう vs ありがとうございます", "ありがとう is casual. ありがとう ございます is polite. To answer thanks, say どういたしまして, or just a small smile and nod.")
      ] },
      { type: "tips", title: "Culture note", items: ["In Japan a small nod or bow often goes with a greeting. You don't need to bow deeply, but a slight nod while saying おはよう ございます is a friendly, natural habit."] }
    ],
    quiz: [
      ask("greetings-through-the-day", "How do you say “Good morning” politely?", "おはよう ございます", ["こんばんは", "おやすみなさい"], "おはよう ございます is the polite form for the morning."),
      ask("greetings-through-the-day", "You are leaving a friend's house late at night. What do you say?", "おやすみなさい", ["こんにちは", "おはよう"], "おやすみなさい means “good night”."),
      ask("greetings-through-the-day", "How is は read in こんにちは?", "wa", ["ha", "ba"], "In this greeting は is read “wa”: Konnichiwa."),
      ask("greetings-through-the-day", "Which word can mean “excuse me”, “sorry” and “thank you”?", "すみません", ["ごめんなさい", "いいえ"], "すみません is very flexible. ごめんなさい only means “I'm sorry”."),
      ask("greetings-through-the-day", "How do you say “See you tomorrow”?", "また あした", ["また きょう", "おはよう ございます"], "また あした means “see you tomorrow”."),
      ask("greetings-through-the-day", "What do you say after someone thanks you?", "どういたしまして", ["ごめんなさい", "おやすみなさい"], "どういたしまして means “you're welcome”.")
    ]
  }),
  lesson({
    id: "introducing-yourself", number: 2, title: "Introducing Yourself", time: "25 min",
    summary: "Say your name, where you're from, whether you're a student, and ask the same about someone else.",
    objective: "By the end you can introduce yourself in six or seven short sentences, and ask simple yes/no questions.",
    blocks: [
      { type: "dialogue", title: "Dialogue: A first meeting", lines: [
        D("Mika", "はじめまして。ミカです。", "Hajimemashite. Mika desu.", "Nice to meet you. I'm Mika."),
        D("Alex", "はじめまして。アレックスです。アメリカから きました。", "Hajimemashite. Arekkusu desu. Amerika kara kimashita.", "Nice to meet you. I'm Alex. I came from America."),
        D("Mika", "アメリカじんですか。", "Amerikajin desu ka.", "Are you American?"),
        D("Alex", "はい、アメリカじんです。", "Hai, Amerikajin desu.", "Yes, I'm American."),
        D("Mika", "がくせいですか。", "Gakusei desu ka.", "Are you a student?"),
        D("Alex", "はい、がくせいです。ミカさんは？", "Hai, gakusei desu. Mika-san wa?", "Yes, I'm a student. And you, Mika?"),
        D("Mika", "わたしも がくせいです。", "Watashi mo gakusei desu.", "I'm a student too."),
        D("Alex", "よろしく おねがいします！", "Yoroshiku onegaishimasu!", "Pleased to meet you!"),
        D("Mika", "こちらこそ！", "Kochira koso!", "Likewise!")
      ] },
      { type: "words", title: "Vocabulary", items: [
        V("初めまして", "はじめまして", "hajimemashite", "how do you do? (said at a first meeting)"),
        V("〜です", "", "~ desu", "is / am / are (polite)"),
        V("〜から来ました", "〜からきました", "~ kara kimashita", "I came from ~"),
        V("〜人", "〜じん", "~ jin", "person of ~ (nationality)"),
        V("学生", "がくせい", "gakusei", "student"),
        V("〜も", "", "~ mo", "also, too"),
        V("〜さん", "", "~ san", "Mr/Ms/Mx ~ (polite name ending)"),
        V("よろしくお願いします", "よろしくおねがいします", "yoroshiku onegaishimasu", "pleased to meet you"),
        V("こちらこそ", "", "kochira koso", "likewise, the pleasure is mine"),
        V("先生", "せんせい", "sensei", "teacher"),
        V("会社員", "かいしゃいん", "kaishain", "office worker")
      ] },
      { type: "words", title: "Countries and nationalities", items: [
        V("日本", "にほん", "nihon", "Japan"),
        V("アメリカ", "", "amerika", "America"),
        V("イギリス", "", "igirisu", "the UK"),
        V("カナダ", "", "kanada", "Canada"),
        V("オーストラリア", "", "oosutoraria", "Australia"),
        V("ブラジル", "", "burajiru", "Brazil"),
        V("インド", "", "indo", "India"),
        V("中国", "ちゅうごく", "chuugoku", "China"),
        V("韓国", "かんこく", "kankoku", "South Korea")
      ] },
      { type: "points", title: "Grammar", items: [
        P("X は Y です — “X is Y”", "は marks the topic and です closes the sentence politely. You can drop the topic when it's obvious: アレックスです means “I'm Alex”."),
        P("か makes a question", "Add か to the end of a sentence to ask a yes/no question: がくせいですか。 (“Are you a student?”). No question mark is needed in Japanese, but in these lessons we sometimes add one for clarity."),
        P("も means “too”", "Replace は with も to say the same applies to you: わたしも がくせいです (“I'm a student too.”)."),
        P("から means “from”", "アメリカから きました means “I came from America”. To ask the same thing, say どこから きましたか (“Where did you come from?”)."),
        P("〜じん for nationalities", "Add じん to a country name for the person: アメリカじん (an American), にほんじん (a Japanese person). It follows the same pattern for most countries."),
        P("〜さん is for other people", "Add さん after someone's name to be polite. Never use it for yourself.")
      ] },
      { type: "tips", title: "Try it yourself", items: ["Make your own introduction by filling in this pattern: はじめまして。(name)です。(country)から きました。(country)じんです。よろしく おねがいします。", "Say it aloud three times, then say it without looking."] }
    ],
    quiz: [
      ask("introducing-yourself", "What does か at the end of a sentence do?", "It makes a question", ["It means “and”", "It makes the sentence negative"], "か turns a statement into a yes/no question."),
      ask("introducing-yourself", "How do you say “I'm a student too”?", "わたしも がくせいです。", ["わたしは がくせいですか。", "わたしも アメリカじんです。"], "も replaces は to mean “too”."),
      ask("introducing-yourself", "What does アメリカから きました mean?", "I came from America.", ["I like America.", "Are you American?"], "から marks where you came from."),
      ask("introducing-yourself", "Which ending should you NEVER put after your own name?", "〜さん", ["〜です", "〜も"], "さん is used for other people, not yourself."),
      ask("introducing-yourself", "How do you say “Pleased to meet you” after introducing yourself?", "よろしく おねがいします", ["おやすみなさい", "ありがとう ございます"], "よろしく おねがいします is the standard ending to a self-introduction."),
      ask("introducing-yourself", "How do you say “a Japanese person”?", "にほんじん", ["にほんです", "にほんから"], "Add じん to a country name for a nationality: にほんじん.")
    ]
  }),
  lesson({
    id: "numbers-and-counting", number: 3, title: "Numbers and Counting", time: "30 min",
    summary: "Count from zero to a thousand, give your age and read out a phone number.",
    objective: "By the end you can count to 100, ask and say someone's age, and read out a phone number.",
    blocks: [
      { type: "dialogue", title: "Dialogue: Age and phone number", lines: [
        D("Alex", "ミカさんは なんさいですか。", "Mika-san wa nansai desu ka.", "How old are you, Mika?"),
        D("Mika", "はたちです。アレックスさんは？", "Hatachi desu. Arekkusu-san wa?", "I'm twenty. And you, Alex?"),
        D("Alex", "わたしも はたちです。", "Watashi mo hatachi desu.", "I'm twenty too."),
        D("Mika", "おなじですね！", "Onaji desu ne!", "We're the same age!"),
        D("Alex", "でんわばんごうを おしえて ください。", "Denwa bangou o oshiete kudasai.", "Please tell me your phone number."),
        D("Mika", "はい。ゼロ はち ゼロ の いち に さん よん の ご ろく なな はち です。", "Hai. Zero hachi zero no ichi ni san yon no go roku nana hachi desu.", "Sure. It's 080-1234-5678."),
        D("Alex", "ありがとう ございます！", "Arigatou gozaimasu!", "Thank you!")
      ] },
      { type: "words", title: "Numbers 0 to 10", items: [
        V("0", "ゼロ / れい", "zero / rei", "zero"),
        V("1", "いち", "ichi", "one"), V("2", "に", "ni", "two"), V("3", "さん", "san", "three"),
        V("4", "よん / し", "yon / shi", "four"), V("5", "ご", "go", "five"), V("6", "ろく", "roku", "six"),
        V("7", "なな / しち", "nana / shichi", "seven"), V("8", "はち", "hachi", "eight"),
        V("9", "きゅう / く", "kyuu / ku", "nine"), V("10", "じゅう", "juu", "ten")
      ] },
      { type: "points", title: "Making bigger numbers", items: [
        P("11 to 99 are built from 10", "じゅういち (11), じゅうに (12), … じゅうきゅう (19). Then にじゅう (20 = 2 × 10), さんじゅう (30), よんじゅう (40), … きゅうじゅう (90). So 25 is にじゅうご (“twenty-five”) and 99 is きゅうじゅうきゅう."),
        P("Hundreds and thousands", "ひゃく (100), せん (1,000), いちまん (10,000). Watch the exceptions: さんびゃく (300), ろっぴゃく (600), はっぴゃく (800), さんぜん (3,000), はっせん (8,000)."),
        P("よん and なな are the everyday choices", "Both 4 and 7 have two readings. In phone numbers and most counting, よん and なな are clearest. し and しち appear in set phrases such as しがつ (April) and しちじ (seven o'clock).")
      ] },
      { type: "points", title: "Age: 〜さい", items: [
        P("Add さい after the number", "ごさい (5), ろくさい (6), ななさい (7), きゅうさい (9). A few change: いっさい (1), はっさい (8), じゅっさい (10)."),
        P("Twenty is special", "20 years old is はたち, not にじゅっさい. After that, it's regular: にじゅういっさい (21), にじゅうにさい (22)."),
        P("Asking age", "なんさいですか (“How old are you?”) is fine with a friend. With an adult you've just met, some people prefer to avoid it, so use it with friends of a similar age.")
      ] },
      { type: "points", title: "Phone numbers", items: [
        P("Say each digit and use の for the dash", "080-1234-5678 is ゼロ はち ゼロ の いち に さん よん の ご ろく なな はち. Say the digits one by one, and link the groups with の. Zero is often said ゼロ in phone numbers (れい is also common)."),
        P("ね at the end of a sentence", "おなじですね means “it's the same, isn't it?”. ね seeks agreement or shows a shared feeling, like “right?” or “isn't it?” in English.")
      ] }
    ],
    quiz: [
      ask("numbers-and-counting", "What is ごじゅう?", "50", ["15", "5"], "ご = 5 and じゅう = 10, so ごじゅう is 5 × 10 = 50."),
      ask("numbers-and-counting", "How do you say 20 years old?", "はたち", ["にじゅうさい", "にさい"], "Twenty is the special word はたち."),
      ask("numbers-and-counting", "What does なんさいですか mean?", "How old are you?", ["What time is it?", "How much is it?"], "なん = what, さい = years of age."),
      ask("numbers-and-counting", "How do you read 300?", "さんびゃく", ["さんひゃく", "さんせん"], "300 is irregular: さんびゃく. 3,000 is さんぜん."),
      ask("numbers-and-counting", "In a phone number, which word usually links groups of digits (like the dash)?", "の", ["は", "を"], "Say の between groups: 080-1234 is ゼロ はち ゼロ の いち に さん よん."),
      ask("numbers-and-counting", "Which number is ろく?", "6", ["7", "9"], "ろく is six."),
      ask("numbers-and-counting", "What does ね add at the end of おなじですね?", "It seeks agreement (“right?”)", ["It makes a question about time", "It means “not”"], "ね is a soft ending seeking agreement.")
    ]
  }),
  lesson({
    id: "ordering-food", number: 4, title: "Ordering Food and Drinks", time: "30 min",
    summary: "Order a meal, ask for water, praise the food, and ask for the bill.",
    objective: "By the end you can order food and drink politely, count items, and finish a meal with the right phrases.",
    blocks: [
      { type: "dialogue", title: "Dialogue: At a restaurant", lines: [
        D("Clerk", "いらっしゃいませ！", "Irasshaimase!", "Welcome!"),
        D("Alex", "すみません、メニューを おねがいします。", "Sumimasen, menyuu o onegaishimasu.", "Excuse me, could we have the menu, please?"),
        D("Alex", "ラーメンを ひとつ ください。", "Raamen o hitotsu kudasai.", "One ramen, please."),
        D("Mika", "わたしは カレーを ください。", "Watashi wa karee o kudasai.", "I'll have the curry, please."),
        D("Clerk", "おのみものは？", "Onomimono wa?", "And to drink?"),
        D("Alex", "みずを おねがいします。", "Mizu o onegaishimasu.", "Water, please."),
        D("Clerk", "かしこまりました。", "Kashikomarimashita.", "Certainly."),
        D("Alex", "いただきます！", "Itadakimasu!", "Let's eat!"),
        D("Mika", "おいしいですね！", "Oishii desu ne!", "It's delicious!"),
        D("Alex", "ええ、とても おいしいです！", "Ee, totemo oishii desu!", "Yes, it's really delicious!"),
        D("Alex", "すみません、おかんじょう おねがいします。", "Sumimasen, okanjou onegaishimasu.", "Excuse me, the bill please."),
        D("Alex", "ごちそうさまでした！", "Gochisousama deshita!", "Thank you for the meal!")
      ] },
      { type: "words", title: "Vocabulary", items: [
        V("いらっしゃいませ", "", "irasshaimase", "welcome (said by staff)"),
        V("メニュー", "", "menyuu", "menu"),
        V("ラーメン", "", "raamen", "ramen"),
        V("カレー", "", "karee", "curry"),
        V("水", "みず", "mizu", "water"),
        V("お茶", "おちゃ", "ocha", "tea"),
        V("お飲み物", "おのみもの", "onomimono", "drinks"),
        V("〜をください", "", "~ o kudasai", "please give me ~"),
        V("〜をお願いします", "〜をおねがいします", "~ o onegaishimasu", "~, please"),
        V("かしこまりました", "", "kashikomarimashita", "certainly (said by staff)"),
        V("おいしい", "", "oishii", "delicious"),
        V("とても", "", "totemo", "very"),
        V("お勘定", "おかんじょう", "okanjou", "the bill"),
        V("いただきます", "", "itadakimasu", "said before eating"),
        V("ごちそうさまでした", "", "gochisousama deshita", "said after eating, thank you for the meal")
      ] },
      { type: "words", title: "Counting things (1 to 10)", items: [
        V("1つ", "ひとつ", "hitotsu", "one"), V("2つ", "ふたつ", "futatsu", "two"), V("3つ", "みっつ", "mittsu", "three"),
        V("4つ", "よっつ", "yottsu", "four"), V("5つ", "いつつ", "itsutsu", "five"), V("6つ", "むっつ", "muttsu", "six"),
        V("7つ", "ななつ", "nanatsu", "seven"), V("8つ", "やっつ", "yattsu", "eight"), V("9つ", "ここのつ", "kokonotsu", "nine"), V("10", "とお", "too", "ten")
      ] },
      { type: "points", title: "Grammar", items: [
        P("X を ください — “Please give me X”", "を marks the thing you're asking for. ラーメンを ください is direct and polite. You can add a count after: ラーメンを ふたつ ください (“Two ramen, please.”)."),
        P("X を おねがいします — “X, please”", "This is a softer, slightly more formal way to ask. In a restaurant, either one works; おねがいします is a safe all-purpose choice."),
        P("Counting with ひとつ, ふたつ…", "This set of numbers counts general objects up to ten. Say the item first (を), then the number, then ください."),
        P("いただきます and ごちそうさまでした", "Say いただきます before you eat and ごちそうさまでした when you finish. They are small thank-you rituals rather than word-for-word translations, and they are said at nearly every meal."),
        P("おいしいですね", "とても おいしいです means “It's very delicious.” Adding ね (“isn't it?”) invites your friend to agree and makes the meal feel shared.")
      ] }
    ],
    quiz: [
      ask("ordering-food", "How do you say “Two ramen, please”?", "ラーメンを ふたつ ください。", ["ラーメンを ひとつ ください。", "ラーメンは ふたつです。"], "ふたつ means two."),
      ask("ordering-food", "What do you say before you start eating?", "いただきます", ["ごちそうさまでした", "いらっしゃいませ"], "いただきます is said before the meal; ごちそうさまでした after it."),
      ask("ordering-food", "What does おいしい mean?", "delicious", ["expensive", "cheap"], "おいしい means “delicious”."),
      ask("ordering-food", "How do you ask for the bill?", "おかんじょう おねがいします", ["おみず ください", "メニューを おねがいします"], "おかんじょう means “the bill”."),
      ask("ordering-food", "What does いらっしゃいませ mean?", "Welcome!", ["Goodbye!", "Thank you!"], "Shops and restaurants say it when you walk in."),
      ask("ordering-food", "Which word means “three things”?", "みっつ", ["むっつ", "ふたつ"], "みっつ is 3, むっつ is 6."),
      ask("ordering-food", "What does をください do in a sentence?", "It asks for something", ["It asks a question", "It says goodbye"], "X を ください means “please give me X”.")
    ]
  }),
  lesson({
    id: "shopping-and-prices", number: 5, title: "Shopping and Prices", time: "30 min",
    summary: "Ask what something costs, point at things, compare prices and decide.",
    objective: "By the end you can ask how much something is, understand a price, and say you'll take it.",
    blocks: [
      { type: "dialogue", title: "Dialogue: In a shop", lines: [
        D("Alex", "すみません、これは いくらですか。", "Sumimasen, kore wa ikura desu ka.", "Excuse me, how much is this?"),
        D("Clerk", "それは さんぜん ごひゃく えんです。", "Sore wa sanzen gohyaku en desu.", "That one is 3,500 yen."),
        D("Alex", "ちょっと たかいですね。", "Chotto takai desu ne.", "It's a little expensive, isn't it?"),
        D("Alex", "あれは いくらですか。", "Are wa ikura desu ka.", "How much is that one over there?"),
        D("Clerk", "あれは にせん えんです。", "Are wa nisen en desu.", "That one is 2,000 yen."),
        D("Mika", "やすいですね！", "Yasui desu ne!", "It's cheap!"),
        D("Alex", "じゃあ、あれを ください。", "Jaa, are o kudasai.", "Then I'll take that one."),
        D("Alex", "カードは つかえますか。", "Kaado wa tsukaemasu ka.", "Can I use a card?"),
        D("Clerk", "はい、つかえます。ありがとう ございます。", "Hai, tsukaemasu. Arigatou gozaimasu.", "Yes, you can. Thank you.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        V("これ", "", "kore", "this (near me)"),
        V("それ", "", "sore", "that (near you)"),
        V("あれ", "", "are", "that over there (far from both)"),
        V("いくら", "", "ikura", "how much"),
        V("円", "えん", "en", "yen"),
        V("高い", "たかい", "takai", "expensive, tall"),
        V("安い", "やすい", "yasui", "cheap"),
        V("ちょっと", "", "chotto", "a little"),
        V("じゃあ", "", "jaa", "well then"),
        V("カード", "", "kaado", "card"),
        V("使えます", "つかえます", "tsukaemasu", "can be used"),
        V("現金", "げんきん", "genkin", "cash")
      ] },
      { type: "points", title: "Grammar", items: [
        P("これ / それ / あれ", "These three words point at things by distance. これ is near the speaker, それ is near the listener, あれ is far from both. In a shop, you say これ for what you're holding, and the clerk answers with それ."),
        P("X は いくらですか — “How much is X?”", "いくら is “how much”. Put the item first with は, then いくらですか. This is the most useful shopping sentence."),
        P("Prices in yen", "Add えん after the number: せんえん (1,000 yen), にせんえん (2,000), さんぜん ごひゃく えん (3,500). Prices follow the number rules from Lesson 3, including the exceptions for 300, 600, 800, 3,000 and 8,000."),
        P("ちょっと as a softener", "ちょっと literally means “a little”. Japanese speakers use it to soften an opinion so it doesn't sound harsh: ちょっと たかいですね is a polite way of saying “that's a bit pricey.”"),
        P("じゃあ — “well then”", "Use じゃあ when you reach a decision based on what you just heard: じゃあ、これを ください.")
      ] }
    ],
    quiz: [
      ask("shopping-and-prices", "Which word means “this (near me)”?", "これ", ["それ", "あれ"], "これ is near the speaker."),
      ask("shopping-and-prices", "How do you ask “How much is this?”", "これは いくらですか。", ["これは どこですか。", "これは なんじですか。"], "いくら means “how much”."),
      ask("shopping-and-prices", "What is にせんえん?", "2,000 yen", ["200 yen", "20 yen"], "にせん = 2,000, えん = yen."),
      ask("shopping-and-prices", "What does ちょっと たかいですね mean?", "It's a little expensive, isn't it?", ["It's very cheap!", "Where is the station?"], "ちょっと softens the opinion."),
      ask("shopping-and-prices", "How do you say 3,000?", "さんぜん", ["さんひゃく", "さんびゃく"], "3,000 is さんぜん; 300 is さんびゃく."),
      ask("shopping-and-prices", "You want to ask whether you can pay by card. What do you say?", "カードは つかえますか。", ["カードを ください。", "いくらですか。"], "つかえますか means “can (it) be used?”."),
      ask("shopping-and-prices", "What does やすい mean?", "cheap", ["expensive", "small"], "やすい means “cheap”.")
    ]
  }),
  lesson({
    id: "asking-directions", number: 6, title: "Asking for Directions", time: "25 min",
    summary: "Find the station, the restroom or a shop, and understand “straight”, “left” and “right”.",
    objective: "By the end you can ask where something is and follow a simple answer.",
    blocks: [
      { type: "dialogue", title: "Dialogue: Where is it?", lines: [
        D("Alex", "すみません、コンビニは どこですか。", "Sumimasen, konbini wa doko desu ka.", "Excuse me, where is the convenience store?"),
        D("Mika", "コンビニですか。あそこです。", "Konbini desu ka. Asoko desu.", "The convenience store? It's over there."),
        D("Mika", "まっすぐ いって、みぎです。", "Massugu itte, migi desu.", "Go straight, and it's on the right."),
        D("Alex", "まっすぐ、みぎ。わかりました。", "Massugu, migi. Wakarimashita.", "Straight, then right. Got it."),
        D("Alex", "あの、トイレは どこですか。", "Ano, toire wa doko desu ka.", "Um, where is the restroom?"),
        D("Mika", "トイレは えきの ちかくです。ひだりですよ。", "Toire wa eki no chikaku desu. Hidari desu yo.", "The restroom is near the station. It's on the left."),
        D("Alex", "ありがとう ございます！", "Arigatou gozaimasu!", "Thank you!"),
        D("Mika", "いいえ。", "Iie.", "Not at all.")
      ] },
      { type: "words", title: "Vocabulary", items: [
        V("どこ", "", "doko", "where"),
        V("ここ", "", "koko", "here"),
        V("そこ", "", "soko", "there (near you)"),
        V("あそこ", "", "asoko", "over there"),
        V("まっすぐ", "", "massugu", "straight ahead"),
        V("右", "みぎ", "migi", "right"),
        V("左", "ひだり", "hidari", "left"),
        V("近く", "ちかく", "chikaku", "nearby"),
        V("駅", "えき", "eki", "station"),
        V("トイレ", "", "toire", "restroom, toilet"),
        V("コンビニ", "", "konbini", "convenience store"),
        V("あの", "", "ano", "um, excuse me"),
        V("分かりました", "わかりました", "wakarimashita", "I understand, got it")
      ] },
      { type: "points", title: "Grammar", items: [
        P("X は どこですか — “Where is X?”", "Put the place first with は and end with どこですか. The answer repeats the pattern: X は ここです (“It's here”), あそこです (“It's over there”)."),
        P("ここ / そこ / あそこ", "Like これ/それ/あれ, but for places. ここ is where I am, そこ is where you are, あそこ is far from both of us."),
        P("X の ちかく — “near X”", "の links two nouns, as in lesson 5 of our hiragana course: えきの ちかく means “near the station”."),
        P("まっすぐ いって — “go straight”", "いって is a form of “go” meaning “go and then …”. You don't need to learn the grammar yet: just remember the phrase まっすぐ いって, みぎ / ひだり です."),
        P("よ at the end", "よ adds “I'm telling you” or “by the way”. ひだりですよ means “it's on the left, you know.”. Use it to share information the other person may not know.")
      ] },
      { type: "tips", title: "Useful tip", items: ["あの is a gentle way to get someone's attention before a question: あの、すみません。 Either word on its own, or both together, makes a good opening when you ask a stranger for help."] }
    ],
    quiz: [
      ask("asking-directions", "How do you ask “Where is the station?”", "えきは どこですか。", ["えきは いくらですか。", "えきは なんじですか。"], "どこ means “where”."),
      ask("asking-directions", "What does まっすぐ mean?", "straight ahead", ["left", "nearby"], "まっすぐ means “straight”."),
      ask("asking-directions", "Which word means “left”?", "ひだり", ["みぎ", "ちかく"], "ひだり is left; みぎ is right."),
      ask("asking-directions", "Which word means “over there”?", "あそこ", ["ここ", "そこ"], "あそこ is far from both of you."),
      ask("asking-directions", "What does えきの ちかく mean?", "near the station", ["in the station", "far from the station"], "ちかく means “nearby”, and の links it to えき."),
      ask("asking-directions", "What does ひだりですよ add to ひだりです?", "It adds “I'm telling you”", ["It makes it a question", "It makes it negative"], "よ shares information the other person may not know."),
      ask("asking-directions", "What does わかりました mean?", "I understand", ["I'm sorry", "Thank you"], "わかりました is what you say once you've got the directions.")
    ]
  }),
  lesson({
    id: "time-and-days", number: 7, title: "Telling the Time and Days", time: "30 min",
    summary: "Say what time it is, when something starts, and the days of the week.",
    objective: "By the end you can ask and tell the time, say today and tomorrow, and name the days of the week.",
    blocks: [
      { type: "dialogue", title: "Dialogue: Time and days", lines: [
        D("Alex", "いま なんじですか。", "Ima nanji desu ka.", "What time is it now?"),
        D("Mika", "いま さんじ はんです。", "Ima sanji han desu.", "It's half past three."),
        D("Alex", "えいがは なんじからですか。", "Eiga wa nanji kara desu ka.", "What time does the movie start?"),
        D("Mika", "ごじ じゅっぷんからです。", "Goji juppun kara desu.", "It starts at 5:10."),
        D("Alex", "きょうは なんようびですか。", "Kyou wa nan'youbi desu ka.", "What day of the week is it today?"),
        D("Mika", "きょうは すいようびです。", "Kyou wa suiyoubi desu.", "Today is Wednesday."),
        D("Alex", "あしたは？", "Ashita wa?", "And tomorrow?"),
        D("Mika", "あしたは もくようびです。", "Ashita wa mokuyoubi desu.", "Tomorrow is Thursday.")
      ] },
      { type: "words", title: "The hours (〜じ)", items: [
        V("1時", "いちじ", "ichiji", "1 o'clock"), V("2時", "にじ", "niji", "2 o'clock"), V("3時", "さんじ", "sanji", "3 o'clock"),
        V("4時", "よじ", "yoji", "4 o'clock (not よんじ)"), V("5時", "ごじ", "goji", "5 o'clock"), V("6時", "ろくじ", "rokuji", "6 o'clock"),
        V("7時", "しちじ", "shichiji", "7 o'clock (not ななじ)"), V("8時", "はちじ", "hachiji", "8 o'clock"), V("9時", "くじ", "kuji", "9 o'clock (not きゅうじ)"),
        V("10時", "じゅうじ", "juuji", "10 o'clock"), V("11時", "じゅういちじ", "juuichiji", "11 o'clock"), V("12時", "じゅうにじ", "juuniji", "12 o'clock")
      ] },
      { type: "words", title: "Minutes, times of day and days", items: [
        V("半", "はん", "han", "half (past the hour)"),
        V("〜分", "〜ふん / 〜ぷん", "~ fun / ~ pun", "minutes"),
        V("午前", "ごぜん", "gozen", "a.m."),
        V("午後", "ごご", "gogo", "p.m."),
        V("今", "いま", "ima", "now"),
        V("今日", "きょう", "kyou", "today"),
        V("明日", "あした", "ashita", "tomorrow"),
        V("昨日", "きのう", "kinou", "yesterday"),
        V("何時", "なんじ", "nanji", "what time?"),
        V("何曜日", "なんようび", "nan'youbi", "what day of the week?"),
        V("日曜日", "にちようび", "nichiyoubi", "Sunday"), V("月曜日", "げつようび", "getsuyoubi", "Monday"), V("火曜日", "かようび", "kayoubi", "Tuesday"),
        V("水曜日", "すいようび", "suiyoubi", "Wednesday"), V("木曜日", "もくようび", "mokuyoubi", "Thursday"), V("金曜日", "きんようび", "kinyoubi", "Friday"), V("土曜日", "どようび", "doyoubi", "Saturday")
      ] },
      { type: "points", title: "Grammar", items: [
        P("Hours: number + じ", "Most hours are regular: ごじ (5), ろくじ (6). Three are special: よじ (4), しちじ (7), くじ (9)."),
        P("Minutes: ふん or ぷん", "Minutes change with the number. 2, 5, 7, 9 use ふん (にふん, ごふん, ななふん, きゅうふん). 1, 3, 4, 6, 8, 10 use ぷん (いっぷん, さんぷん, よんぷん, ろっぷん, はっぷん, じゅっぷん). Don't worry about memorising all of it at once: start with はん (“half past”) and じゅっぷん (“10 minutes”)."),
        P("Half past: はん", "さんじ はん means 3:30. Japanese often says はん instead of さんじゅっぷん."),
        P("a.m. and p.m. come first", "ごぜん くじ is 9 a.m. and ごご さんじ is 3 p.m. Put the a.m./p.m. word in front of the time."),
        P("から means “starting from”", "ごじからです means “It starts at 5.” In lesson 2 から meant “from a place”; here it means “from a time”."),
        P("Days of the week", "Each day is named after a natural element: にち (sun), げつ (moon), か (fire), すい (water), もく (wood), きん (gold), ど (earth), plus ようび (“day of the week”).")
      ] }
    ],
    quiz: [
      ask("time-and-days", "How do you say 4 o'clock?", "よじ", ["よんじ", "しじ"], "4 o'clock is よじ, an exception."),
      ask("time-and-days", "How do you say 9 o'clock?", "くじ", ["きゅうじ", "ここのじ"], "9 o'clock is くじ."),
      ask("time-and-days", "What does さんじ はん mean?", "3:30", ["3:10", "13:00"], "はん means “half past”."),
      ask("time-and-days", "Which day is すいようび?", "Wednesday", ["Tuesday", "Thursday"], "すい means water, so すいようび is Wednesday."),
      ask("time-and-days", "What does ごご mean?", "p.m.", ["a.m.", "tomorrow"], "ごご is the afternoon/p.m.; ごぜん is a.m."),
      ask("time-and-days", "Which is the correct way to ask “What time is it?”", "いま なんじですか。", ["いま なんようびですか。", "いま いくらですか。"], "なんじ means “what time”."),
      ask("time-and-days", "What does きのう mean?", "yesterday", ["today", "tomorrow"], "きのう is yesterday, きょう is today, あした is tomorrow.")
    ]
  }),
  lesson({
    id: "likes-and-dislikes", number: 8, title: "Likes and Dislikes", time: "25 min",
    summary: "Talk about what you like, love, and don't really like.",
    objective: "By the end you can say what you like, ask others, and politely say you don't like something.",
    blocks: [
      { type: "dialogue", title: "Dialogue: Favourite things", lines: [
        D("Mika", "アレックスさんは なにが すきですか。", "Arekkusu-san wa nani ga suki desu ka.", "What do you like, Alex?"),
        D("Alex", "わたしは ラーメンが すきです。", "Watashi wa raamen ga suki desu.", "I like ramen."),
        D("Mika", "ほんとうですか！わたしも だいすきです。", "Hontou desu ka! Watashi mo daisuki desu.", "Really? I love it too."),
        D("Mika", "アニメは すきですか。", "Anime wa suki desu ka.", "Do you like anime?"),
        D("Alex", "はい、だいすきです！", "Hai, daisuki desu!", "Yes, I love it!"),
        D("Mika", "さかなは？", "Sakana wa?", "What about fish?"),
        D("Alex", "さかなは あまり すきじゃ ないです。", "Sakana wa amari suki ja nai desu.", "I don't really like fish."),
        D("Mika", "そうですか。じゃあ、おにくは？", "Sou desu ka. Jaa, oniku wa?", "I see. Then what about meat?"),
        D("Alex", "おにくは だいすきです！", "Oniku wa daisuki desu!", "I love meat!")
      ] },
      { type: "words", title: "Vocabulary", items: [
        V("好き", "すき", "suki", "like, fond of"),
        V("大好き", "だいすき", "daisuki", "love, really like"),
        V("あまり〜ない", "", "amari ~ nai", "not very ~"),
        V("何", "なに", "nani", "what"),
        V("本当ですか", "ほんとうですか", "hontou desu ka", "really?"),
        V("そうですか", "", "sou desu ka", "I see, is that so"),
        V("魚", "さかな", "sakana", "fish"),
        V("お肉", "おにく", "oniku", "meat"),
        V("ラーメン", "", "raamen", "ramen"),
        V("アニメ", "", "anime", "anime"),
        V("音楽", "おんがく", "ongaku", "music"),
        V("猫", "ねこ", "neko", "cat"),
        V("犬", "いぬ", "inu", "dog")
      ] },
      { type: "points", title: "Grammar", items: [
        P("X が すきです — “I like X”", "Use が (not を) for things you like. ラーメンが すきです means “I like ramen.” To ask: ラーメンが すきですか。 Note that the liked thing takes が in Japanese."),
        P("だいすき — “love”", "だいすきです is stronger than すきです. It's used for people, food and hobbies. It's warm and natural, not a big romantic statement."),
        P("Saying you don't like it", "すきじゃ ないです means “I don't like it.” Add あまり (“not very”) to soften it: あまり すきじゃ ないです. A more formal version is あまり すきじゃ ありません."),
        P("Avoid きらい", "きらい means “dislike”, but it sounds strong in Japanese. It's usually better to say あまり すきじゃ ないです."),
        P("そうですか and ほんとうですか", "そうですか means “I see” and ほんとうですか means “really?”. They are very common reactions that keep a conversation going.")
      ] }
    ],
    quiz: [
      ask("likes-and-dislikes", "Which particle marks the thing you like?", "が", ["を", "へ"], "X が すきです: が marks what you like."),
      ask("likes-and-dislikes", "How do you say “I love anime”?", "アニメが だいすきです。", ["アニメを ください。", "アニメは どこですか。"], "だいすき means “love”."),
      ask("likes-and-dislikes", "What is a polite, soft way to say you don't like something?", "あまり すきじゃ ないです", ["きらいです", "だいすきです"], "あまり softens the sentence."),
      ask("likes-and-dislikes", "What does ほんとうですか mean?", "Really?", ["Where is it?", "How much is it?"], "ほんとうですか is a surprised “really?”."),
      ask("likes-and-dislikes", "Which word means “what”?", "なに", ["どこ", "いくら"], "なに means “what”."),
      ask("likes-and-dislikes", "What does そうですか mean?", "I see", ["No thank you", "Good night"], "そうですか is a polite “I see.”")
    ]
  }),
  lesson({
    id: "making-plans", number: 9, title: "Making Plans Together", time: "30 min",
    summary: "Invite someone, accept, agree on a time and place, and look forward to it.",
    objective: "By the end you can invite a friend, say yes, and arrange a time and place to meet.",
    blocks: [
      { type: "dialogue", title: "Dialogue: Let's go to a movie", lines: [
        D("Mika", "アレックスさん、あした ひまですか。", "Arekkusu-san, ashita hima desu ka.", "Alex, are you free tomorrow?"),
        D("Alex", "はい、ひまです。", "Hai, hima desu.", "Yes, I'm free."),
        D("Mika", "じゃあ、いっしょに えいがを みませんか。", "Jaa, issho ni eiga o mimasen ka.", "Then, would you like to watch a movie together?"),
        D("Alex", "いいですね！なんじに あいますか。", "Ii desu ne! Nanji ni aimasu ka.", "Sounds good! What time shall we meet?"),
        D("Mika", "ごご ろくじに えきで あいましょう。", "Gogo rokuji ni eki de aimashou.", "Let's meet at the station at 6 p.m."),
        D("Alex", "わかりました。たのしみです！", "Wakarimashita. Tanoshimi desu!", "Got it. I'm looking forward to it!"),
        D("Mika", "じゃあ、また あした！", "Jaa, mata ashita!", "See you tomorrow, then!")
      ] },
      { type: "words", title: "Vocabulary", items: [
        V("暇", "ひま", "hima", "free (not busy)"),
        V("一緒に", "いっしょに", "issho ni", "together"),
        V("映画", "えいが", "eiga", "movie"),
        V("見ます", "みます", "mimasu", "see, watch"),
        V("会います", "あいます", "aimasu", "meet"),
        V("行きます", "いきます", "ikimasu", "go"),
        V("食べます", "たべます", "tabemasu", "eat"),
        V("飲みます", "のみます", "nomimasu", "drink"),
        V("買います", "かいます", "kaimasu", "buy"),
        V("いいですね", "", "ii desu ne", "sounds good"),
        V("楽しみです", "たのしみです", "tanoshimi desu", "I'm looking forward to it")
      ] },
      { type: "points", title: "Grammar", items: [
        P("The polite verb ending ます", "Polite verbs end in 〜ます: いきます (go), たべます (eat), のみます (drink), みます (watch), あいます (meet). This is the form you'll hear most often when talking to someone you don't know well."),
        P("〜ませんか — “Would you like to …?”", "Change ます to ませんか to invite someone: えいがを みませんか。 (“Would you like to watch a movie?”). It sounds gentle and gives the other person room to say no."),
        P("〜ましょう — “Let's …”", "Change ます to ましょう to suggest or agree to something: あいましょう (“Let's meet”). It is the natural answer when a plan is already being made."),
        P("に marks a time, で marks where it happens", "ろくじに (“at six”) uses に for the time. えきで (“at the station”) uses で for the place where an action happens."),
        P("いっしょに — “together”", "A small word that makes any invitation friendlier: いっしょに ごはんを たべませんか。")
      ] },
      { type: "tips", title: "How to say no politely", items: ["Japanese speakers often avoid a direct “no”. Instead of いいえ you might hear ちょっと… (“That's a bit…”), which means “I'd rather not” or “I can't”. Now you know what it means if someone says it to your invitation."] }
    ],
    quiz: [
      ask("making-plans", "How do you invite someone politely?", "〜ませんか", ["〜です", "〜でした"], "ませんか invites: みませんか means “would you like to watch?”."),
      ask("making-plans", "What does あいましょう mean?", "Let's meet", ["Did you meet?", "I don't meet"], "〜ましょう means “let's …”."),
      ask("making-plans", "Which particle marks a time (like “at six”)?", "に", ["で", "を"], "ろくじに means “at six o'clock”."),
      ask("making-plans", "Which particle marks the place where something happens?", "で", ["に", "は"], "えきで あいましょう: let's meet at the station."),
      ask("making-plans", "What does いっしょに mean?", "together", ["tomorrow", "quickly"], "いっしょに means “together”."),
      ask("making-plans", "What does たのしみです mean?", "I'm looking forward to it", ["I'm busy", "I'm sorry"], "たのしみです expresses excitement about a coming event."),
      ask("making-plans", "If someone answers an invitation with ちょっと…, they probably mean:", "Probably no", ["Yes, definitely", "I didn't hear you"], "ちょっと… is a soft, indirect “no”.")
    ]
  }),
  lesson({
    id: "asking-for-help", number: 10, title: "Asking for Help", time: "25 min",
    summary: "Say you don't understand, ask people to repeat or slow down, and handle emergencies.",
    objective: "By the end you can say you don't understand, ask for repetition, ask what something is called, and call for help.",
    blocks: [
      { type: "dialogue", title: "Dialogue: I don't understand", lines: [
        D("Alex", "すみません、にほんごが あまり わかりません。", "Sumimasen, nihongo ga amari wakarimasen.", "Sorry, I don't understand Japanese very well."),
        D("Clerk", "だいじょうぶですよ。", "Daijoubu desu yo.", "That's okay."),
        D("Alex", "もう いちど おねがいします。", "Mou ichido onegaishimasu.", "One more time, please."),
        D("Alex", "もう すこし ゆっくり おねがいします。", "Mou sukoshi yukkuri onegaishimasu.", "A little slower, please."),
        D("Alex", "えいごが わかりますか。", "Eigo ga wakarimasu ka.", "Do you understand English?"),
        D("Clerk", "すこしだけ わかります。", "Sukoshi dake wakarimasu.", "Only a little."),
        D("Alex", "これは にほんごで なんと いいますか。", "Kore wa nihongo de nan to iimasu ka.", "What do you call this in Japanese?"),
        D("Clerk", "それは「かさ」です。", "Sore wa “kasa” desu.", "That's “kasa”."),
        D("Alex", "かさ。ありがとう ございます！", "Kasa. Arigatou gozaimasu!", "Kasa. Thank you!")
      ] },
      { type: "words", title: "Vocabulary", items: [
        V("分かります", "わかります", "wakarimasu", "understand"),
        V("分かりません", "わかりません", "wakarimasen", "don't understand"),
        V("もう一度", "もういちど", "mou ichido", "one more time"),
        V("ゆっくり", "", "yukkuri", "slowly"),
        V("少し", "すこし", "sukoshi", "a little"),
        V("大丈夫", "だいじょうぶ", "daijoubu", "okay, fine"),
        V("英語", "えいご", "eigo", "English"),
        V("日本語", "にほんご", "nihongo", "Japanese language"),
        V("〜で何と言いますか", "〜でなんといいますか", "~ de nan to iimasu ka", "what do you call ~ in ~?"),
        V("教えてください", "おしえてください", "oshiete kudasai", "please tell me, please teach me")
      ] },
      { type: "words", title: "Emergencies", items: [
        V("助けて！", "たすけて", "tasukete", "help!"),
        V("病院", "びょういん", "byouin", "hospital"),
        V("警察", "けいさつ", "keisatsu", "police"),
        V("救急車", "きゅうきゅうしゃ", "kyuukyuusha", "ambulance"),
        V("気分が悪いです", "きぶんがわるいです", "kibun ga warui desu", "I feel unwell")
      ] },
      { type: "points", title: "Grammar", items: [
        P("わかります and わかりません", "わかります means “I understand” and わかりません means “I don't understand”. Remember the ません ending: it's the negative form of ます, so you'll see it in many more verbs."),
        P("X が わかります", "Like すき, わかります uses が: にほんごが わかりません means “I don't understand Japanese.”"),
        P("おねがいします makes a request", "もう いちど おねがいします (“once more, please”) and ゆっくり おねがいします (“slowly, please”) are two phrases that can save any conversation."),
        P("〜で なんと いいますか", "Point at something and ask これは にほんごで なんと いいますか。 (“What is this called in Japanese?”). You can swap にほんごで for えいごで."),
        P("Emergency numbers", "In Japan the police number is 110, and the fire and ambulance number is 119. Say たすけて！ (“Help!”) to get people's attention, and びょういん (“hospital”) if you need medical care.")
      ] },
      { type: "tips", title: "Where to go next", items: ["You've finished the course. Revisit the dialogues and cover the romaji and English to test yourself.", "Try creating your own short dialogue using at least one phrase from each lesson, then say it aloud.", "Keep an eye on new Tiny Japanese lessons and courses on this site."] }
    ],
    quiz: [
      ask("asking-for-help", "How do you say “I don't understand”?", "わかりません", ["わかります", "だいじょうぶです"], "ません is the negative: わかりません."),
      ask("asking-for-help", "Which phrase means “One more time, please”?", "もう いちど おねがいします", ["もう すこし ゆっくり", "だいじょうぶですよ"], "もう いちど means “one more time”."),
      ask("asking-for-help", "How do you ask “What is this called in Japanese?”", "これは にほんごで なんと いいますか。", ["これは いくらですか。", "これは どこですか。"], "なんと いいますか asks what something is called."),
      ask("asking-for-help", "What does ゆっくり mean?", "slowly", ["quickly", "together"], "ゆっくり means “slowly”."),
      ask("asking-for-help", "What is the emergency number for the police in Japan?", "110", ["119", "911"], "110 is the police; 119 is fire and ambulance."),
      ask("asking-for-help", "Which word do you shout to get help?", "たすけて！", ["だいじょうぶ！", "いただきます！"], "たすけて means “help!”.")
    ]
  })
];
