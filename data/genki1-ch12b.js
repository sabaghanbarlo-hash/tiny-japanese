// Genki I Grammar, chapter 10 (part 2: receiving, listing, only): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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


export const kureru = lesson({
  id: "kureru", number: 84, title: "くれます: Someone Gives Me",
  summary: "Say that someone gave something to you with くれます.",
  objective: "By the end you can say “My friend gave me a flower” and tell あげます, くれます and もらいます apart.",
  teach: [
    T("The idea", "くれます = gives to me",
      ["{くれます|kuremasu} means “give”, but only when the thing comes to you, or to your family. The giver is the subject, marked with {が|ga} or {は|wa}.",
       "{ミカさんが わたしに ほんを くれました|Mika-san ga watashi ni hon o kuremashita} means “Mika gave me a book”."],
      [E("ミカさんが わたしに ほんを くれました。", "Mika-san ga watashi ni hon o kuremashita.", "Mika gave me a book.", "くれました"),
       E("ともだちが プレゼントを くれました。", "Tomodachi ga purezento o kuremashita.", "A friend gave me a present.", "くれました")]),
    T("Dropping わたしに", "It is understood",
      ["Because {くれます|kuremasu} always points to you, {わたしに|watashi ni} is usually left out. The listener understands it.",
       "{ははが ケーキを くれました|haha ga keeki o kuremashita} means “My mother gave me a cake”."],
      [E("ははが ケーキを くれました。", "Haha ga keeki o kuremashita.", "My mother gave me a cake.", "くれました"),
       E("せんせいが ほんを くれました。", "Sensei ga hon o kuremashita.", "My teacher gave me a book.", "くれました")]),
    T("くれます and もらいます", "Same event, two views",
      ["You can describe the same event with {くれます|kuremasu} or with {もらいます|moraimasu}. {ミカさんが ほんを くれました|Mika-san ga hon o kuremashita} starts from the giver. {わたしは ミカさんに ほんを もらいました|watashi wa Mika-san ni hon o moraimashita} starts from you.",
       "Both mean the same thing."],
      [E("ミカさんが ほんを くれました。", "Mika-san ga hon o kuremashita.", "Mika gave me a book.", "くれました"),
       E("わたしは ミカさんに ほんを もらいました。", "Watashi wa Mika-san ni hon o moraimashita.", "I received a book from Mika.", "もらいました")]),
    T("The three verbs together", "あげます, くれます, もらいます",
      ["{あげます|agemasu}: I give to someone else. {くれます|kuremasu}: someone gives to me. {もらいます|moraimasu}: I receive.",
       "Ask yourself: who is receiving? If it is me, use {くれます|kuremasu} or {もらいます|moraimasu}."],
      [E("わたしは ミカさんに ほんを あげました。", "Watashi wa Mika-san ni hon o agemashita.", "I gave Mika a book.", "あげました"),
       E("ミカさんが わたしに ほんを くれました。", "Mika-san ga watashi ni hon o kuremashita.", "Mika gave me a book.", "くれました")]),
    T("My family too", "Inside my circle",
      ["{くれます|kuremasu} is also used when the thing goes to your own family. {ミカさんが いもうとに ほんを くれました|Mika-san ga imouto ni hon o kuremashita} means “Mika gave my little sister a book”.",
       "Family is on your side, so it counts like “me”."],
      [E("ミカさんが いもうとに ほんを くれました。", "Mika-san ga imouto ni hon o kuremashita.", "Mika gave my little sister a book.", "くれました"),
       E("ともだちが ははに はなを くれました。", "Tomodachi ga haha ni hana o kuremashita.", "A friend gave my mother flowers.", "くれました")]),
    T("Common mistakes", "Do not use it when I give",
      ["Do not use {くれます|kuremasu} when you are the giver. {わたしは ミカさんに ほんを くれました|watashi wa Mika-san ni hon o kuremashita} is wrong. Use {あげました|agemashita}.",
       "{くれます|kuremasu} never describes you giving to someone else."],
      [E("わたしは ミカさんに ほんを くれました。", "(wrong)", "Wrong: use あげました.", "ミカさんに ほんを くれました", true),
       E("わたしは ミカさんに ほんを あげました。", "Watashi wa Mika-san ni hon o agemashita.", "Right: I gave Mika a book.", "あげました")],
      T0("Say: “My friend gave me a flower.”", "ともだちが はなを くれました。", "Tomodachi ga hana o kuremashita.", "My friend gave me a flower.", "くれました"))
  ],
  storyTitle: "A present",
  story: [
    L("Alex", "きれいな はな ですね。", "Kirei na hana desu ne.", "What a pretty flower."),
    L("Mika", "ともだちが くれました。", "Tomodachi ga kuremashita.", "A friend gave it to me."),
    L("Alex", "いい ともだち ですね。", "Ii tomodachi desu ne.", "A good friend."),
    L("Mika", "はい。ははも ケーキを くれました。", "Hai. Haha mo keeki o kuremashita.", "Yes. My mother also gave me a cake."),
    L("Alex", "わたしは なにも もらいませんでした。", "Watashi wa nani mo moraimasen deshita.", "I didn't receive anything."),
    L("Mika", "じゃあ、ケーキを あげます。", "Jaa, keeki o agemasu.", "Then I'll give you some cake.")
  ],
  words: [
    W("くれます", "kuremasu", "give (to me)"),
    W("はな", "hana", "flower"),
    W("ケーキ", "keeki", "cake"),
    W("ともだち", "tomodachi", "friend"),
    W("はは", "haha", "my mother"),
    W("いもうと", "imouto", "younger sister"),
    W("せんせい", "sensei", "teacher"),
    W("プレゼント", "purezento", "present")
  ],
  tips: [
    "Kuremasu means someone gives to me or my family.",
    "Watashi ni is usually dropped with kuremasu.",
    "Agemasu is for me giving; kuremasu is never for me giving."
  ],
  quiz: [
    ask("kureru", "How do you say “My friend gave me a flower”?", "ともだちが はなを くれました。", ["ともだちが はなを あげました。", "わたしが はなを くれました。"], "くれます points to me."),
    ask("kureru", "Which verb is for me giving to someone?", "あげます", ["くれます", "もらいます"], "I give: あげます."),
    ask("kureru", "Which is the same event as ミカさんが ほんを くれました?", "わたしは ミカさんに ほんを もらいました。", ["わたしは ミカさんに ほんを あげました。", "ミカさんは わたしに ほんを もらいました。"], "もらいます from my view."),
    ask("kureru", "What is usually dropped with くれます?", "わたしに", ["ほんを", "ミカさんが"], "わたしに is understood."),
    ask("kureru", "Can くれます be used when the thing goes to my mother?", "Yes", ["No", "Only to friends"], "My family counts as my side.")
  ]
});

export const yaList = lesson({
  id: "ya-list", number: 85, title: "や: And, Among Others",
  summary: "List a few examples with や, and tell it apart from と.",
  objective: "By the end you can say “I bought apples, bananas and so on”.",
  teach: [
    T("The idea", "Noun や noun",
      ["{や|ya} joins nouns when you mention some examples, and there are more. {りんごや バナナ|ringo ya banana} means “apples, bananas, and so on”.",
       "You are giving a sample, not the full list."],
      [E("りんごや バナナを かいました。", "Ringo ya banana o kaimashita.", "I bought apples, bananas and so on.", "りんごや バナナ"),
       E("ミカさんや アレックスさんが きました。", "Mika-san ya Arekkusu-san ga kimashita.", "Mika, Alex and others came.", "さんや")]),
    T("と or や", "Complete list or sample",
      ["{と|to} gives the complete list. {や|ya} gives some examples. {ほんと ペンを かいました|hon to pen o kaimashita} means I bought a book and a pen, only those two. {ほんや ペンを かいました|hon ya pen o kaimashita} means a book, a pen, and probably other things.",
       "This small difference matters."],
      [E("ほんと ペンを かいました。", "Hon to pen o kaimashita.", "I bought a book and a pen. (just these)", "と"),
       E("ほんや ペンを かいました。", "Hon ya pen o kaimashita.", "I bought a book, a pen and more.", "ほんや")]),
    T("Adding など", "And so on",
      ["You can add {など|nado} after the last noun to make “and so on” very clear. {りんごや バナナなど|ringo ya banana nado} means “apples, bananas and so on”.",
       "It is optional, but common."],
      [E("りんごや バナナなどを かいました。", "Ringo ya banana nado o kaimashita.", "I bought apples, bananas and so on.", "などを"),
       E("ほんや ノートなどが あります。", "Hon ya nooto nado ga arimasu.", "There are books, notebooks and so on.", "など")]),
    T("Particles", "Only after the last noun",
      ["Put the particle after the last noun only. {ともだちや かぞくに あいました|tomodachi ya kazoku ni aimashita} means “I met friends and family and others”. {デパートや スーパーへ いきました|depaato ya suupaa e ikimashita} means “I went to department stores, supermarkets and so on”.",
       "Do not repeat the particle after each noun."],
      [E("ともだちや かぞくに あいました。", "Tomodachi ya kazoku ni aimashita.", "I met friends, family and others.", "かぞくに"),
       E("デパートや スーパーへ いきました。", "Depaato ya suupaa e ikimashita.", "I went to department stores, supermarkets and so on.", "スーパーへ")]),
    T("Nouns only", "Use たり for verbs",
      ["{や|ya} joins nouns only. To list actions, use {たり|tari} from the earlier lesson. {しゅくだいを したり、テレビを みたり しました|shukudai o shitari, terebi o mitari shimashita} means “I did things like homework and watching TV”.",
       "Nouns: {や|ya}. Verbs: {たり|tari}."],
      [E("しゅくだいを したり、テレビを みたり しました。", "Shukudai o shitari, terebi o mitari shimashita.", "I did things like homework and watching TV.", "たり"),
       E("ほんや ペンを かいました。", "Hon ya pen o kaimashita.", "I bought a book, a pen and more.", "ほんや")]),
    T("Common mistakes", "Do not join verbs with や",
      ["Do not use {や|ya} between verbs: {たべや のみました|tabe ya nomimashita} is wrong. Do not use {や|ya} when you really mean the full list, such as “my mother and my father” if you mean only those two.",
       "For a full list, use {と|to}."],
      [E("たべや のみました。", "(wrong)", "Wrong: use たり for verbs.", "たべや", true),
       E("ほんや ペンを かいました。", "Hon ya pen o kaimashita.", "Right: a book, a pen and more.", "ほんや")],
      T0("Say: “I bought a book, a pen and so on.”", "ほんや ペンなどを かいました。", "Hon ya pen nado o kaimashita.", "I bought a book, a pen and so on.", "ほんや"))
  ],
  storyTitle: "Shopping",
  story: [
    L("Alex", "なにを かいましたか。", "Nani o kaimashita ka.", "What did you buy?"),
    L("Mika", "スーパーで りんごや バナナを かいました。", "Suupaa de ringo ya banana o kaimashita.", "I bought apples, bananas and so on at the supermarket."),
    L("Alex", "ほかに なにを かいましたか。", "Hoka ni nani o kaimashita ka.", "What else did you buy?"),
    L("Mika", "ぎゅうにゅうと パンを かいました。", "Gyuunyuu to pan o kaimashita.", "I bought milk and bread."),
    L("Alex", "ぜんぶ ですか。", "Zenbu desu ka.", "Is that everything?"),
    L("Mika", "はい、ぎゅうにゅうと パンです。", "Hai, gyuunyuu to pan desu.", "Yes, milk and bread.")
  ],
  words: [
    W("や", "ya", "and (examples)"),
    W("など", "nado", "and so on"),
    W("りんご", "ringo", "apple"),
    W("バナナ", "banana", "banana"),
    W("ぎゅうにゅう", "gyuunyuu", "milk"),
    W("パン", "pan", "bread"),
    W("スーパー", "suupaa", "supermarket"),
    W("ほかに", "hoka ni", "besides, else")
  ],
  tips: [
    "The particle to gives a complete list; ya gives examples.",
    "Add nado after the last noun to say and so on.",
    "Ya joins nouns only. Use tari for actions."
  ],
  quiz: [
    ask("ya-list", "Which gives a complete list?", "と", ["や", "など"], "と is the complete list."),
    ask("ya-list", "What does ほんや ペンを かいました suggest?", "a book, a pen and more", ["only a book and a pen", "nothing"], "や gives examples."),
    ask("ya-list", "Where does the particle go?", "after the last noun", ["after every noun", "before the first noun"], "Only after the last noun."),
    ask("ya-list", "What does など mean?", "and so on", ["only", "because"], "など = and so on."),
    ask("ya-list", "How do you list actions?", "たり", ["や", "など"], "Verbs use たり.")
  ]
});

export const dake = lesson({
  id: "dake", number: 86, title: "だけ: Only",
  summary: "Say “only” with だけ.",
  objective: "By the end you can say “I only drink water” and “Only Mika came”.",
  teach: [
    T("The idea", "Noun + だけ",
      ["{だけ|dake} means “only” or “just”. Put it right after the word it limits. {パンだけ たべます|pan dake tabemasu} means “I eat only bread”.",
       "It marks the one thing, and nothing else."],
      [E("パンだけ たべます。", "Pan dake tabemasu.", "I eat only bread.", "だけ"),
       E("ミカさんだけ きました。", "Mika-san dake kimashita.", "Only Mika came.", "だけ")]),
    T("With particles", "Drop を and が, keep others",
      ["{だけ|dake} replaces {を|o} and {が|ga}. But with other particles such as {に|ni}, {で|de} and {と|to}, put {だけ|dake} first and the particle after it. {ともだちにだけ はなします|tomodachi ni dake hanashimasu} means “I only tell friends”.",
       "In writing it can look like {にだけ|ni dake}."],
      [E("ともだちにだけ はなします。", "Tomodachi ni dake hanashimasu.", "I only tell friends.", "にだけ"),
       E("ここでだけ たべます。", "Koko de dake tabemasu.", "I eat only here.", "でだけ")]),
    T("Amounts", "A little, just one",
      ["{だけ|dake} often follows amounts. {すこしだけ|sukoshi dake} means “just a little”. {ひとつだけ|hitotsu dake} means “just one”.",
       "It is soft and friendly."],
      [E("すこしだけ のみました。", "Sukoshi dake nomimashita.", "I drank just a little.", "すこしだけ"),
       E("ひとつだけ かいます。", "Hitotsu dake kaimasu.", "I'll buy just one.", "ひとつだけ")]),
    T("With です", "That's all",
      ["You can finish a sentence with {だけ です|dake desu}. {これだけ です|kore dake desu} means “That's all”.",
       "{ひとりだけ です|hitori dake desu} means “Only one person”."],
      [E("これだけ です。", "Kore dake desu.", "That's all.", "だけ"),
       E("ひとりだけ です。", "Hitori dake desu.", "It's just one person.", "だけ")]),
    T("Compare with も", "Also or only",
      ["{も|mo} means “also”, {だけ|dake} means “only”. {ミカさんも きました|Mika-san mo kimashita} means “Mika came too”. {ミカさんだけ きました|Mika-san dake kimashita} means “Only Mika came”.",
       "Be careful, since they point in opposite directions."],
      [E("ミカさんも きました。", "Mika-san mo kimashita.", "Mika came too.", "も"),
       E("ミカさんだけ きました。", "Mika-san dake kimashita.", "Only Mika came.", "だけ")]),
    T("Common mistakes", "After the word, not before",
      ["Do not put {だけ|dake} before the noun. {だけ みずを のみます|dake mizu o nomimasu} is wrong. Say {みずだけ のみます|mizu dake nomimasu}.",
       "Do not add {を|o} after {だけ|dake} when you are starting out. {みずだけ のみます|mizu dake nomimasu} is the natural form."],
      [E("だけ みずを のみます。", "(wrong)", "Wrong: put だけ after みず.", "だけ みず", true),
       E("みずだけ のみます。", "Mizu dake nomimasu.", "Right: I only drink water.", "みずだけ")],
      T0("Say: “I only drink water.”", "みずだけ のみます。", "Mizu dake nomimasu.", "I only drink water.", "みずだけ"))
  ],
  storyTitle: "At the cafe",
  story: [
    L("Alex", "なにを のみますか。", "Nani o nomimasu ka.", "What will you drink?"),
    L("Mika", "コーヒーだけ のみます。", "Koohii dake nomimasu.", "I'll only drink coffee."),
    L("Alex", "ケーキも たべませんか。", "Keeki mo tabemasen ka.", "Won't you eat cake too?"),
    L("Mika", "ひとつだけ たべます。", "Hitotsu dake tabemasu.", "I'll eat just one."),
    L("Alex", "じゃあ、いっしょに ひとつだけ たべましょう。", "Jaa, issho ni hitotsu dake tabemashou.", "Then let's share just one together."),
    L("Mika", "いい ですね。", "Ii desu ne.", "Good idea.")
  ],
  words: [
    W("だけ", "dake", "only"),
    W("すこしだけ", "sukoshi dake", "just a little"),
    W("ひとつ", "hitotsu", "one (thing)"),
    W("ひとり", "hitori", "one person"),
    W("これ", "kore", "this"),
    W("みず", "mizu", "water"),
    W("コーヒー", "koohii", "coffee"),
    W("ケーキ", "keeki", "cake")
  ],
  tips: [
    "Dake comes right after the word it limits.",
    "Dake replaces o and ga, but other particles come after it.",
    "Mo means also; dake means only."
  ],
  quiz: [
    ask("dake", "How do you say “I only drink water”?", "みずだけ のみます。", ["だけ みずを のみます。", "みずを だけも のみます。"], "Noun + だけ."),
    ask("dake", "What does ミカさんだけ きました mean?", "Only Mika came", ["Mika came too", "Mika didn't come"], "だけ = only."),
    ask("dake", "What does も mean?", "also", ["only", "because"], "も = also."),
    ask("dake", "How do you say “just a little”?", "すこしだけ", ["だけすこし", "すこしも"], "Amount + だけ."),
    ask("dake", "How do you say “I eat only here”?", "ここでだけ たべます。", ["だけここで たべます。", "ここだけで を たべます。"], "でだけ.")
  ]
});
