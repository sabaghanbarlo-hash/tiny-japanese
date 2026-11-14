// Genki I Grammar, chapter 9 (part 1): explanations, guesses, reasons. DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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

export const nDesu = lesson({
  id: "n-desu", number: 63, title: "～んです: Explaining and Asking Why",
  summary: "Give reasons and ask for explanations with んです.",
  objective: "By the end you can explain a situation with んです and ask “why?” politely.",
  teach: [
    T("The idea", "Plain form + んです",
      ["{んです|n desu} is an ending that explains or asks for an explanation. It does not change the facts, but it adds a feeling: “you see”, “the thing is”. {あたまが いたい んです|atama ga itai n desu} means “my head hurts, you see”, as an explanation for why you are leaving.",
       "It is attached to the plain form of the sentence."],
      [E("あたまが いたい んです。", "Atama ga itai n desu.", "My head hurts, you see.", "んです"),
       E("きょうは いそがしい んです。", "Kyou wa isogashii n desu.", "I'm busy today, you see.", "んです")]),
    T("Verbs", "Plain form + んです",
      ["With verbs, use the plain form before {んです|n desu}. {いきません|ikimasen} becomes {いかない んです|ikanai n desu}. {たべました|tabemashita} becomes {たべた んです|tabeta n desu}.",
       "This is how you explain an action."],
      [E("いかない んです。", "Ikanai n desu.", "(The thing is,) I'm not going.", "んです"),
       E("もう たべた んです。", "Mou tabeta n desu.", "I've already eaten, you see.", "んです"),
       E("きょう べんきょうする んです。", "Kyou benkyou suru n desu.", "I'm studying today, you see.", "んです")]),
    T("Nouns and な-adjectives", "な before んです",
      ["With a noun or a {な|na}-adjective, add {な|na} before {んです|n desu}. {がくせいな んです|gakusei na n desu}. {ひまな んです|hima na n desu}. This {な|na} replaces the plain {だ|da}.",
       "Remember: {な|na} appears only in the present affirmative."],
      [E("がくせいな んです。", "Gakusei na n desu.", "I'm a student, you see.", "な"),
       E("ひまな んです。", "Hima na n desu.", "I'm free, you see.", "な"),
       E("きょうは にちようびな んです。", "Kyou wa nichiyoubi na n desu.", "Today is Sunday, you see.", "な")]),
    T("Asking why", "どうして ～んですか",
      ["Ask {どうして いかない んですか|doushite ikanai n desu ka} for “why aren't you going?”. The question {どうして|doushite} with {んですか|n desu ka} sounds natural and interested, not blunt.",
       "Answer with {から|kara}: {いそがしい から です|isogashii kara desu}."],
      [E("どうして いかない んですか。", "Doushite ikanai n desu ka.", "Why aren't you going?", "んですか"),
       E("いそがしい から です。", "Isogashii kara desu.", "Because I'm busy.", "から"),
       E("どう したんですか。", "Dou shita n desu ka.", "What happened?", "んですか")]),
    T("Casual: んだ and の", "Between friends",
      ["In casual speech, {んです|n desu} becomes {んだ|n da}. Questions use {の|no}: {どうして いかない の？|doushite ikanai no} means “why aren't you going?”. {の|no} with rising tone is very common among friends, especially for women.",
       "Do not use {の|no} questions with someone you should be polite to."],
      [E("どうして いかない の？", "Doushite ikanai no?", "Why aren't you going?", "の"),
       E("いたい んだ。", "Itai n da.", "It hurts, you see.", "んだ"),
       E("なに してる の？", "Nani shiteru no?", "What are you doing?", "の")]),
    T("Common mistakes", "Do not overuse it",
      ["Do not use {んです|n desu} for plain facts, such as introductions: {わたしは ミカな んです|watashi wa Mika na n desu} sounds odd as a first greeting. And do not use the {ます|masu} form before it: {いきます んです|ikimasu n desu} is wrong.",
       "It is for explaining, asking about a reason, or reacting to something you noticed."],
      [E("いきます んです。", "(wrong)", "Wrong: use the plain form.", "いきます", true),
       E("がくせい んです。", "(wrong)", "Wrong: add な before んです.", "がくせい んです", true),
       E("いかない んです。", "Ikanai n desu.", "Right: I'm not going, you see.", "んです")],
      T0("Ask: “Why aren't you going?”", "どうして いかない んですか。", "Doushite ikanai n desu ka.", "Why aren't you going?", "んですか"))
  ],
  storyTitle: "What's wrong?",
  story: [
    L("Mika", "アレックスさん、どう したんですか。", "Arekkusu-san, dou shita n desu ka.", "Alex, what's wrong?"),
    L("Alex", "あたまが いたい んです。", "Atama ga itai n desu.", "My head hurts."),
    L("Mika", "ねつは あるんですか。", "Netsu wa aru n desu ka.", "Do you have a fever?"),
    L("Alex", "いいえ、ねつは ない んです。きのう ねなかった んです。", "Iie, netsu wa nai n desu. Kinou nenakatta n desu.", "No, no fever. I didn't sleep yesterday."),
    L("Mika", "それは たいへんですね。きょうは はやく かえって ください。", "Sore wa taihen desu ne. Kyou wa hayaku kaette kudasai.", "That's rough. Please go home early today."),
    L("Alex", "そうします。", "Sou shimasu.", "I will.")
  ],
  words: [
    W("んです", "n desu", "explanation ending"),
    W("どうして", "doushite", "why"),
    W("から", "kara", "because"),
    W("あたま", "atama", "head"),
    W("いたい", "itai", "painful"),
    W("ねつ", "netsu", "fever"),
    W("たいへん", "taihen", "tough, serious"),
    W("どう したんですか", "dou shita n desu ka", "what's the matter")
  ],
  tips: [
    "Plain form plus n desu explains or asks for an explanation.",
    "Nouns and na-adjectives need na before n desu.",
    "Ask doushite ...n desu ka; answer with kara."
  ],
  quiz: [
    ask("n-desu", "What does んです add?", "explanation", ["negation", "past tense"], "んです explains."),
    ask("n-desu", "How do you say “I'm busy, you see”?", "いそがしい んです。", ["いそがしいます んです。", "いそがしいな んです。"], "い-adjective + んです."),
    ask("n-desu", "What goes before んです after a noun?", "な", ["の", "が"], "Noun + な + んです."),
    ask("n-desu", "How do you ask “Why aren't you going?”", "どうして いかない んですか。", ["どうして いきます んですか。", "どうして いかない ですか んです。"], "plain + んですか."),
    ask("n-desu", "What is the casual question ending?", "の", ["か", "を"], "の with rising tone.")
  ]
});

export const deshou = lesson({
  id: "deshou", number: 64, title: "～でしょう: Probably, Right?",
  summary: "Say what is probably true and ask for agreement with でしょう.",
  objective: "By the end you can say “it will probably rain” and ask “right?” in a polite way.",
  teach: [
    T("The idea", "Two uses",
      ["{でしょう|deshou} has two uses. First, it expresses a guess: “it will probably...”. Second, with a rising tone, it asks for agreement: “...right?”.",
       "Both uses attach to the plain form."],
      [E("あした あめが ふる でしょう。", "Ashita ame ga furu deshou.", "It will probably rain tomorrow.", "でしょう"),
       E("おいしい でしょう？", "Oishii deshou?", "It's delicious, right?", "でしょう")]),
    T("A guess", "Plain form + でしょう",
      ["For a guess, put {でしょう|deshou} after the plain form. {ミカさんは くる でしょう|Mika-san wa kuru deshou} means “Mika will probably come”. The word {たぶん|tabun}, probably, goes well with it.",
       "Use a falling tone for a guess."],
      [E("たぶん あした あめが ふる でしょう。", "Tabun ashita ame ga furu deshou.", "It will probably rain tomorrow.", "でしょう"),
       E("たぶん ミカさんは こない でしょう。", "Tabun Mika-san wa konai deshou.", "Mika probably won't come.", "でしょう"),
       E("きのうは ひまだった でしょう。", "Kinou wa hima datta deshou.", "You were probably free yesterday.", "でしょう")]),
    T("Nouns and な-adjectives", "Drop だ",
      ["With nouns and {な|na}-adjectives, use no {だ|da}. {がくせい でしょう|gakusei deshou}, “probably a student”. {しずか でしょう|shizuka deshou}, “probably quiet”.",
       "{い|i}-adjectives stay as they are: {たかい でしょう|takai deshou}."],
      [E("がくせい でしょう。", "Gakusei deshou.", "(He) is probably a student.", "でしょう"),
       E("ここは しずか でしょう。", "Koko wa shizuka deshou.", "It is probably quiet here.", "でしょう"),
       E("たかい でしょう。", "Takai deshou.", "It is probably expensive.", "でしょう")]),
    T("Asking for agreement", "Rising tone",
      ["With a rising tone, {でしょう|deshou} becomes “…right?”. {きれい でしょう？|kirei deshou} means “pretty, isn't it?”. It expects the listener to say yes.",
       "A common answer is {そうですね|sou desu ne}, “that's right”."],
      [E("きれい でしょう？", "Kirei deshou?", "Pretty, isn't it?", "でしょう"),
       E("そう でしょう？", "Sou deshou?", "Right?", "でしょう"),
       E("そうですね。", "Sou desu ne.", "Yes, indeed.", "そうですね")]),
    T("Casual form", "だろう and でしょ",
      ["In casual speech, {でしょう|deshou} becomes {でしょ|desho} with rising tone: {きれい でしょ？|kirei desho}. Men also use {だろう|darou} for a guess. For now, learn {でしょう|deshou} well.",
       "{でしょ|desho} is very common among friends."],
      [E("きれい でしょ？", "Kirei desho?", "Pretty, right?", "でしょ"),
       E("あした くる でしょ？", "Ashita kuru desho?", "You're coming tomorrow, right?", "でしょ")]),
    T("Common mistakes", "Do not use だ before でしょう",
      ["Do not say {がくせい だ でしょう|gakusei da deshou}. And do not use {ます|masu} before: {いきます でしょう|ikimasu deshou} is not natural. Also do not use {でしょう|deshou} for things you know for sure: use {です|desu}.",
       "It is for guesses and confirmation only."],
      [E("がくせい だ でしょう。", "(wrong)", "Wrong: drop だ.", "だ でしょう", true),
       E("いきます でしょう。", "(wrong)", "Wrong: use the plain form.", "いきます", true),
       E("いく でしょう。", "Iku deshou.", "Right: (He) will probably go.", "でしょう")],
      T0("Say: “It will probably rain tomorrow.”", "あした あめが ふる でしょう。", "Ashita ame ga furu deshou.", "It will probably rain tomorrow.", "でしょう"))
  ],
  storyTitle: "Weather forecast",
  story: [
    L("Alex", "あしたの てんきは どうでしょう。", "Ashita no tenki wa dou deshou.", "What will tomorrow's weather be like?"),
    L("Mika", "たぶん あめが ふる でしょう。", "Tabun ame ga furu deshou.", "It will probably rain."),
    L("Alex", "さむい でしょうか。", "Samui deshou ka.", "Will it be cold?"),
    L("Mika", "ええ、さむい でしょう。", "Ee, samui deshou.", "Yes, probably."),
    L("Alex", "かさを もって いきます。", "Kasa o motte ikimasu.", "I'll take an umbrella."),
    L("Mika", "そうですね。それが いい でしょう。", "Sou desu ne. Sore ga ii deshou.", "Yes. That would probably be good.")
  ],
  words: [
    W("でしょう", "deshou", "probably; right?"),
    W("たぶん", "tabun", "probably"),
    W("そうですね", "sou desu ne", "that's right"),
    W("かさ", "kasa", "umbrella"),
    W("もって いきます", "motte ikimasu", "take (with you)"),
    W("てんき", "tenki", "weather"),
    W("あした", "ashita", "tomorrow"),
    W("ふる", "furu", "fall (rain)")
  ],
  tips: [
    "Plain form plus deshou means probably.",
    "Rising tone makes it right? and asks for agreement.",
    "Drop da before deshou after nouns and na-adjectives."
  ],
  quiz: [
    ask("deshou", "How do you say “It will probably rain”?", "あめが ふる でしょう。", ["あめが ふります でしょう。", "あめが ふる だ でしょう。"], "plain + でしょう."),
    ask("deshou", "What does a rising tone on でしょう mean?", "right?", ["never", "because"], "It seeks agreement."),
    ask("deshou", "What does たぶん mean?", "probably", ["always", "never"], "たぶん is probably."),
    ask("deshou", "Which is wrong?", "がくせい だ でしょう。", ["がくせい でしょう。", "しずか でしょう。"], "Drop だ."),
    ask("deshou", "What is the casual form?", "でしょ", ["ます", "ない"], "でしょ.")
  ]
});

export const shi = lesson({
  id: "shi-reasons", number: 65, title: "～し: Listing Reasons",
  summary: "List reasons or qualities with し to build a case.",
  objective: "By the end you can say “it's cheap, and it's tasty, so I like it” using し.",
  teach: [
    T("The idea", "Reasons and qualities",
      ["{し|shi} joins reasons or qualities, like “and what's more”. {やすい し、おいしい|yasui shi, oishii} means “it's cheap, and it's delicious too”. It suggests there are even more reasons.",
       "It attaches to the plain form, just like {でしょう|deshou}."],
      [E("やすい し、おいしい です。", "Yasui shi, oishii desu.", "It's cheap, and it's delicious.", "し"),
       E("しずか だし、きれい です。", "Shizuka da shi, kirei desu.", "It's quiet, and it's pretty.", "し")]),
    T("With verbs and adjectives", "Plain form + し",
      ["With verbs and {い|i}-adjectives, attach {し|shi} to the plain form: {いく し|iku shi}, {たかい し|takai shi}, {おいしかった し|oishikatta shi}. With a negative, {いかない し|ikanai shi}.",
       "Add {も|mo} to emphasise: {えいがも みたし|eiga mo mita shi}."],
      [E("やすい し、おおきい し、いい です。", "Yasui shi, ookii shi, ii desu.", "It's cheap, it's big, and it's good.", "し"),
       E("さむい し、いかない。", "Samui shi, ikanai.", "It's cold, so I'm not going.", "し"),
       E("ひまだった し、いった。", "Hima datta shi, itta.", "I was free, so I went.", "し")]),
    T("Nouns and な-adjectives", "だ + し",
      ["With nouns and {な|na}-adjectives, you keep the plain {だ|da}: {しずか だし|shizuka da shi}, {がくせい だし|gakusei da shi}. This is one of the few patterns where {だ|da} stays.",
       "The past is {だった し|datta shi}."],
      [E("しずか だし、べんり です。", "Shizuka da shi, benri desu.", "It's quiet and it's convenient.", "だし"),
       E("がくせい だし、おかねが ない。", "Gakusei da shi, okane ga nai.", "I'm a student, and I have no money.", "だし"),
       E("きのうは あめ だった し、さむかった。", "Kinou wa ame datta shi, samukatta.", "Yesterday it rained, and it was cold.", "だった し")]),
    T("Giving a reason", "し ... から",
      ["To give reasons for a decision, list them with {し|shi} and finish with {から|kara}: {やすい し、おいしい から、ここが すき です|yasui shi, oishii kara, koko ga suki desu} means “it's cheap and it's delicious, so I like this place”.",
       "{から|kara} at the end of the list says “so”."],
      [E("やすい し、おいしい から、ここが すき です。", "Yasui shi, oishii kara, koko ga suki desu.", "It's cheap and delicious, so I like this place.", "から"),
       E("じかんが ない し、いきません。", "Jikan ga nai shi, ikimasen.", "I have no time, so I'm not going.", "し"),
       E("さむい し、あめも ふって いる から、うちに います。", "Samui shi, ame mo futte iru kara, uchi ni imasu.", "It's cold and raining, so I'll stay home.", "から")]),
    T("Giving an answer with one reason", "Soft hints",
      ["Even one {し|shi} can hint at more reasons. {ちょっと たかい し...|chotto takai shi} means “it's a bit expensive, and so on”, which can politely refuse something without saying so directly.",
       "This is an indirect, polite way of saying no."],
      [E("ちょっと たかい し...", "Chotto takai shi...", "It's a bit expensive, and so...", "し"),
       E("きょうは いそがしい し...", "Kyou wa isogashii shi...", "I'm busy today, and so...", "し")]),
    T("Common mistakes", "Do not use ます before し",
      ["In this course, always use the plain form before {し|shi}: {いきます し|ikimasu shi} is not the pattern we use. And do not drop {だ|da} with a noun: {がくせい し|gakusei shi} is wrong.",
       "A {し|shi} list needs at least two reasons for the best effect."],
      [E("いきます し、おいしい。", "(wrong)", "Wrong: use the plain form.", "いきます し", true),
       E("がくせい し、おかねが ない。", "(wrong)", "Wrong: keep だ.", "がくせい し", true),
       E("やすい し、おいしい です。", "Yasui shi, oishii desu.", "Right: It's cheap and delicious.", "し")],
      T0("Say: “It's cheap, and it's delicious.”", "やすい し、おいしい です。", "Yasui shi, oishii desu.", "It's cheap, and it's delicious.", "し"))
  ],
  storyTitle: "Why I like this town",
  story: [
    L("Alex", "どうして この まちが すきなんですか。", "Doushite kono machi ga suki na n desu ka.", "Why do you like this town?"),
    L("Mika", "しずか だし、きれい だし、ひとも しんせつ ですから。", "Shizuka da shi, kirei da shi, hito mo shinsetsu desu kara.", "It's quiet, it's pretty, and the people are kind too."),
    L("Alex", "べんりですか。", "Benri desu ka.", "Is it convenient?"),
    L("Mika", "えきも ちかい し、かいものも べんり です。", "Eki mo chikai shi, kaimono mo benri desu.", "The station is near, and shopping is convenient too."),
    L("Alex", "いいですね。わたしも すみたいです。", "Ii desu ne. Watashi mo sumitai desu.", "Nice. I'd like to live here too."),
    L("Mika", "ぜひ きて ください。", "Zehi kite kudasai.", "Please do come.")
  ],
  words: [
    W("し", "shi", "and what's more (reasons)"),
    W("から", "kara", "so, because"),
    W("しんせつ", "shinsetsu", "kind"),
    W("ちかい", "chikai", "near"),
    W("ひと", "hito", "person"),
    W("ぜひ", "zehi", "by all means"),
    W("すみます", "sumimasu", "live"),
    W("おかね", "okane", "money")
  ],
  tips: [
    "Plain form plus shi lists reasons: yasui shi, oishii.",
    "Nouns and na-adjectives keep da: shizuka da shi.",
    "Finish with kara to say so."
  ],
  quiz: [
    ask("shi-reasons", "What does し do?", "lists reasons", ["asks questions", "makes negatives"], "し lists reasons."),
    ask("shi-reasons", "How do you say “It's quiet, and pretty” with し?", "しずか だし、きれい です。", ["しずか し、きれい です。", "しずか です し、きれい。"], "だし."),
    ask("shi-reasons", "What follows a list of reasons to say “so”?", "から", ["でも", "が"], "から."),
    ask("shi-reasons", "Which form comes before し?", "plain form", ["ます form", "て-form"], "Plain form."),
    ask("shi-reasons", "What does ちょっと たかい し... suggest?", "a polite refusal", ["a promise", "a question"], "An indirect no.")
  ]
});
