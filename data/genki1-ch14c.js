// Genki I Grammar, chapter 14 (part 3): DRAFT: Japanese written by Claude, not yet checked by a native speaker.
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



export const tagatte = lesson({
  id: "tagatte", number: 99, title: "～たがって います: Someone Else Wants",
  summary: "Say what another person wants, with たがって います and ほしがって います.",
  objective: "By the end you can say “Mika wants to go to Japan” and “My brother wants a new game”.",
  teach: [
    T("The idea", "たい is for me",
      ["You know {たい|tai} for your own wants: {いきたい です|ikitai desu}. When you talk about what another person wants, Japanese usually uses a different form.",
       "It sounds like you are reading their mind if you use {たい|tai} for someone else, so we use a form that says “seems to want”."],
      [E("わたしは にほんへ いきたい です。", "Watashi wa Nihon e ikitai desu.", "I want to go to Japan.", "いきたい"),
       E("ミカさんは にほんへ いきたがって います。", "Mika-san wa Nihon e ikitagatte imasu.", "Mika wants to go to Japan.", "いきたがって")]),
    T("How to make it", "たい → たがって います",
      ["Take the {たい|tai} form and change {たい|tai} to {たがって います|tagatte imasu}. {いきたい|ikitai} becomes {いきたがって います|ikitagatte imasu}.",
       "{たべたい|tabetai} becomes {たべたがって います|tabetagatte imasu}."],
      [E("アレックスさんは ケーキを たべたがって います。", "Arekkusu-san wa keeki o tabetagatte imasu.", "Alex wants to eat cake.", "たべたがって"),
       E("こどもは ねたがって います。", "Kodomo wa netagatte imasu.", "The child wants to sleep.", "ねたがって")]),
    T("Wanting things", "ほしい → ほしがって います",
      ["For wanting a thing, {ほしい|hoshii} becomes {ほしがって います|hoshigatte imasu}. {おとうとは ゲームを ほしがって います|otouto wa geemu o hoshigatte imasu} means “My brother wants a game”.",
       "The thing wanted is marked with {を|o}."],
      [E("おとうとは ゲームを ほしがって います。", "Otouto wa geemu o hoshigatte imasu.", "My brother wants a game.", "ほしがって"),
       E("ミカさんは あたらしい かばんを ほしがって います。", "Mika-san wa atarashii kaban o hoshigatte imasu.", "Mika wants a new bag.", "ほしがって")]),
    T("Particles", "を, not が",
      ["With {たがって います|tagatte imasu} and {ほしがって います|hoshigatte imasu}, the thing wanted takes {を|o}. With {ほしい|hoshii}, it took {が|ga}.",
       "So {かばんが ほしい|kaban ga hoshii} but {かばんを ほしがって います|kaban o hoshigatte imasu}."],
      [E("かばんが ほしい です。", "Kaban ga hoshii desu.", "I want a bag.", "かばんが"),
       E("かばんを ほしがって います。", "Kaban o hoshigatte imasu.", "She wants a bag.", "かばんを")]),
    T("Asking and your own feelings", "Questions to you",
      ["When you ask someone directly, use {たい|tai} again: {どこへ いきたい ですか|doko e ikitai desu ka}. You are asking what they feel, so it is fine.",
       "Use {たがって います|tagatte imasu} when you are talking about someone who is not in the conversation."],
      [E("どこへ いきたい ですか。", "Doko e ikitai desu ka.", "Where do you want to go?", "いきたい"),
       E("ははは ヨーロッパへ いきたがって います。", "Haha wa Yooroppa e ikitagatte imasu.", "My mother wants to go to Europe.", "いきたがって")]),
    T("Common mistakes", "Do not use たい for others",
      ["For a third person, do not say {ミカさんは いきたい です|Mika-san wa ikitai desu}. Say {いきたがって います|ikitagatte imasu}.",
       "Do not use {が|ga} with {ほしがって います|hoshigatte imasu}. Use {を|o}."],
      [E("ミカさんは にほんへ いきたい です。", "(wrong)", "Wrong for a third person: use いきたがって います.", "いきたい", true),
       E("ミカさんは にほんへ いきたがって います。", "Mika-san wa Nihon e ikitagatte imasu.", "Right.", "いきたがって")],
      T0("Say: “Mika wants to go to Japan.”", "ミカさんは にほんへ いきたがって います。", "Mika-san wa Nihon e ikitagatte imasu.", "Mika wants to go to Japan.", "いきたがって"))
  ],
  storyTitle: "Who wants what",
  story: [
    L("Mika", "おとうとは あたらしい ゲームを ほしがって います。", "Otouto wa atarashii geemu o hoshigatte imasu.", "My little brother wants a new game."),
    L("Alex", "たんじょうびに あげますか。", "Tanjoubi ni agemasu ka.", "Will you give it for his birthday?"),
    L("Mika", "ええ。ははは ヨーロッパへ いきたがって います。", "Ee. Haha wa Yooroppa e ikitagatte imasu.", "Yes. My mother wants to go to Europe."),
    L("Alex", "いいですね。ミカさんは どこへ いきたい ですか。", "Ii desu ne. Mika-san wa doko e ikitai desu ka.", "Nice. Where do you want to go, Mika?"),
    L("Mika", "わたしは きょうとへ いきたい です。", "Watashi wa Kyouto e ikitai desu.", "I want to go to Kyoto."),
    L("Alex", "じゃ、いっしょに いきましょう。", "Ja, issho ni ikimashou.", "Then let\'s go together.")
  ],
  words: [
    W("ほしがる", "hoshigaru", "want (someone else)"),
    W("いきたがる", "ikitagaru", "want to go (someone else)"),
    W("おとうと", "otouto", "younger brother"),
    W("はは", "haha", "mother (my own)"),
    W("ゲーム", "geemu", "game"),
    W("ヨーロッパ", "Yooroppa", "Europe"),
    W("たんじょうび", "tanjoubi", "birthday"),
    W("きょうと", "Kyouto", "Kyoto")
  ],
  tips: [
    "Use tai or hoshii for yourself, and tagatte imasu for another person.",
    "Change tai to tagatte imasu, and hoshii to hoshigatte imasu.",
    "The thing wanted takes o with tagatte imasu."
  ],
  quiz: [
    ask("tagatte", "How do you say “Mika wants to go to Japan”?", "ミカさんは にほんへ いきたがって います。", ["ミカさんは にほんへ いきたい です。", "ミカさんは にほんへ いきがって います。"], "Third person: たがって います."),
    ask("tagatte", "What does ほしがって います mean?", "(someone else) wants", ["I want", "I do not want"], "ほしい for me, ほしがる for others."),
    ask("tagatte", "Which particle goes with ほしがって います?", "を", ["が", "は"], "The thing wanted takes を."),
    ask("tagatte", "How do you ask “Where do you want to go?”", "どこへ いきたい ですか。", ["どこへ いきたがって います か。", "どこへ いきがる ですか。"], "Use たい when asking someone directly."),
    ask("tagatte", "What does たがって います replace?", "たい", ["ない", "ます"], "たい → たがって います.")
  ]
});

export const timeTelling = lesson({
  id: "time-telling", number: 100, title: "Telling the Time",
  summary: "Say the hour and the minutes, and ask “What time is it?”.",
  objective: "By the end you can say “It is 4:05 p.m.” and “The movie starts at half past five”.",
  teach: [
    T("Hours", "Number + じ",
      ["Say the hour with the number plus {じ|ji}: {いちじ|ichiji}, {にじ|niji}, {さんじ|sanji}. Three hours are special: {よじ|yoji} (4), {しちじ|shichiji} (7) and {くじ|kuji} (9).",
       "Do not say {よんじ|yonji} or {きゅうじ|kyuuji}."],
      [E("いま さんじ です。", "Ima sanji desu.", "It is three o\'clock now.", "さんじ"),
       E("よじ、しちじ、くじ", "yoji, shichiji, kuji", "4:00, 7:00, 9:00", "よじ")]),
    T("Minutes", "ふん and ぷん",
      ["Minutes use {ふん|fun} or {ぷん|pun}. The common ones are {いっぷん|ippun} (1), {にふん|nifun} (2), {さんぷん|sanpun} (3), {よんぷん|yonpun} (4), {ごふん|gofun} (5).",
       "{ろっぷん|roppun} (6), {ななふん|nanafun} (7), {はっぷん|happun} (8), {きゅうふん|kyuufun} (9) and {じゅっぷん|juppun} (10) finish the list."],
      [E("いま ごじ ごふん です。", "Ima goji gofun desu.", "It is 5:05 now.", "ごふん"),
       E("ろくじ じゅっぷん です。", "Rokuji juppun desu.", "It is 6:10.", "じゅっぷん")]),
    T("Half past", "はん",
      ["For “half past”, say {はん|han} after the hour. {しちじ はん|shichiji han} means “7:30”.",
       "You do not need to say thirty minutes."],
      [E("しちじ はん です。", "Shichiji han desu.", "It is 7:30.", "はん"),
       E("じゅういちじ はんに ねます。", "Juuichiji han ni nemasu.", "I go to bed at 11:30.", "はん")]),
    T("Morning and afternoon", "ごぜん and ごご",
      ["Put {ごぜん|gozen} before the time for morning (a.m.) and {ごご|gogo} for afternoon or evening (p.m.). {ごぜん くじ|gozen kuji} is “9 a.m.”.",
       "They go before the number, the opposite of English."],
      [E("ごぜん くじに おきます。", "Gozen kuji ni okimasu.", "I get up at 9 a.m.", "ごぜん"),
       E("ごご よじ ごふん です。", "Gogo yoji gofun desu.", "It is 4:05 p.m.", "ごご")]),
    T("Asking", "なんじ and なんぷん",
      ["Ask the hour with {なんじ|nanji} and the minutes with {なんぷん|nanpun}. {いま なんじ ですか|ima nanji desu ka} means “What time is it now?”.",
       "Use {に|ni} when something happens at that time: {ごじに かえります|goji ni kaerimasu}."],
      [E("いま なんじ ですか。", "Ima nanji desu ka.", "What time is it now?", "なんじ"),
       E("えいがは なんじから ですか。", "Eiga wa nanji kara desu ka.", "What time does the movie start?", "なんじ")]),
    T("Common mistakes", "Special hours and minutes",
      ["Do not say {よんじ|yonji}. Say {よじ|yoji}. Do not say {ろくふん|rokufun}. Say {ろっぷん|roppun}.",
       "Check the three special hours: 4, 7 and 9."],
      [E("よんじ です。", "(wrong)", "Wrong: say よじ.", "よんじ", true),
       E("よじ です。", "Yoji desu.", "Right.", "よじ")],
      T0("Say: “It is 4:30 p.m.”", "ごご よじ はん です。", "Gogo yoji han desu.", "It is 4:30 p.m.", "よじ"))
  ],
  storyTitle: "What time is the movie?",
  story: [
    L("Mika", "いま なんじ ですか。", "Ima nanji desu ka.", "What time is it now?"),
    L("Alex", "ごご よじ ごふん です。", "Gogo yoji gofun desu.", "It is 4:05 p.m."),
    L("Mika", "えいがは なんじから ですか。", "Eiga wa nanji kara desu ka.", "What time does the movie start?"),
    L("Alex", "ごご ごじ はん から です。", "Gogo goji han kara desu.", "From 5:30 p.m."),
    L("Mika", "まだ じかんが ありますね。", "Mada jikan ga arimasu ne.", "We still have time."),
    L("Alex", "ええ。コーヒーでも のみましょう。", "Ee. Koohii demo nomimashou.", "Yes. Let\'s have coffee or something.")
  ],
  words: [
    W("じ", "ji", "o\'clock"),
    W("ふん / ぷん", "fun / pun", "minutes"),
    W("はん", "han", "half past"),
    W("ごぜん", "gozen", "a.m."),
    W("ごご", "gogo", "p.m."),
    W("なんじ", "nanji", "what time"),
    W("いま", "ima", "now"),
    W("じかん", "jikan", "time")
  ],
  tips: [
    "Four, seven and nine o\'clock are yoji, shichiji and kuji.",
    "Minutes change: ippun, sanpun, roppun, happun and juppun use pun.",
    "Gozen and gogo go before the time."
  ],
  quiz: [
    ask("time-telling", "How do you say “4 o\'clock”?", "よじ", ["よんじ", "しじ"], "4 o\'clock is よじ."),
    ask("time-telling", "How do you say “9 o\'clock”?", "くじ", ["きゅうじ", "ここのじ"], "9 o\'clock is くじ."),
    ask("time-telling", "How do you say “6 minutes”?", "ろっぷん", ["ろくふん", "ろくぷん"], "6 minutes is ろっぷん."),
    ask("time-telling", "What does はん mean?", "half past", ["quarter past", "exactly"], "しちじ はん = 7:30."),
    ask("time-telling", "What does ごご mean?", "p.m.", ["a.m.", "noon only"], "ごぜん is a.m.; ごご is p.m.")
  ]
});

export const dates = lesson({
  id: "dates", number: 101, title: "Dates and Days of the Week",
  summary: "Say months, days and the days of the week, and ask “When is your birthday?”.",
  objective: "By the end you can say “My birthday is April 20th” and “It is Saturday”.",
  teach: [
    T("Months", "Number + がつ",
      ["Months are the number plus {がつ|gatsu}: {いちがつ|ichigatsu} (January), {にがつ|nigatsu}, {さんがつ|sangatsu} and so on up to {じゅうにがつ|juunigatsu}.",
       "Three are special: {しがつ|shigatsu} (April), {しちがつ|shichigatsu} (July) and {くがつ|kugatsu} (September)."],
      [E("たんじょうびは しがつ です。", "Tanjoubi wa shigatsu desu.", "My birthday is in April.", "しがつ"),
       E("しちがつ、くがつ", "shichigatsu, kugatsu", "July, September", "しちがつ")]),
    T("Days 1 to 10", "Special words",
      ["The first ten days have their own words: {ついたち|tsuitachi} (1st), {ふつか|futsuka} (2nd), {みっか|mikka} (3rd), {よっか|yokka} (4th), {いつか|itsuka} (5th).",
       "Then {むいか|muika} (6th), {なのか|nanoka} (7th), {ようか|youka} (8th), {ここのか|kokonoka} (9th) and {とおか|tooka} (10th)."],
      [E("くがつ ついたち です。", "Kugatsu tsuitachi desu.", "It is September 1st.", "ついたち"),
       E("じゅうがつ とおか です。", "Juugatsu tooka desu.", "It is October 10th.", "とおか")]),
    T("Days after 10", "Number + にち",
      ["After the 10th, most days are the number plus {にち|nichi}: {じゅういちにち|juuichinichi} (11th), {にじゅうさんにち|nijuusannichi} (23rd).",
       "Special ones: {じゅうよっか|juuyokka} (14th), {はつか|hatsuka} (20th) and {にじゅうよっか|nijuuyokka} (24th)."],
      [E("はつか です。", "Hatsuka desu.", "It is the 20th.", "はつか"),
       E("じゅうよっか です。", "Juuyokka desu.", "It is the 14th.", "じゅうよっか")]),
    T("Days of the week", "Day + ようび",
      ["Days of the week end in {ようび|youbi}: {にちようび|nichiyoubi} (Sunday), {げつようび|getsuyoubi}, {かようび|kayoubi}, {すいようび|suiyoubi}, {もくようび|mokuyoubi}, {きんようび|kinyoubi}, {どようび|doyoubi} (Saturday).",
       "To ask, say {なんようび|nanyoubi}."],
      [E("きょうは もくようび です。", "Kyou wa mokuyoubi desu.", "Today is Thursday.", "もくようび"),
       E("あしたは なんようび ですか。", "Ashita wa nanyoubi desu ka.", "What day is tomorrow?", "なんようび")]),
    T("Asking and answering", "いつ and なんにち",
      ["Ask the date with {いつ|itsu}, {なんがつ|nangatsu} and {なんにち|nannichi}. {たんじょうびは いつ ですか|tanjoubi wa itsu desu ka} means “When is your birthday?”.",
       "Say month first, then day, then the day of the week: {しがつ はつか、どようび|shigatsu hatsuka, doyoubi}."],
      [E("たんじょうびは いつ ですか。", "Tanjoubi wa itsu desu ka.", "When is your birthday?", "いつ"),
       E("しがつ はつか です。", "Shigatsu hatsuka desu.", "It is April 20th.", "しがつ")]),
    T("Common mistakes", "Irregular months and days",
      ["Do not say {よんがつ|yongatsu}. April is {しがつ|shigatsu}. Do not say {やっか|yakka}. The eighth is {ようか|youka}.",
       "Learn the special days one by one."],
      [E("よんがつ です。", "(wrong)", "Wrong: April is しがつ.", "よんがつ", true),
       E("しがつ です。", "Shigatsu desu.", "Right.", "しがつ")],
      T0("Say: “My birthday is March 2nd.”", "たんじょうびは さんがつ ふつか です。", "Tanjoubi wa sangatsu futsuka desu.", "My birthday is March 2nd.", "ふつか"))
  ],
  storyTitle: "Birthdays",
  story: [
    L("Mika", "アレックスさんの たんじょうびは いつ ですか。", "Arekkusu-san no tanjoubi wa itsu desu ka.", "Alex, when is your birthday?"),
    L("Alex", "くがつ とおか です。ミカさんは?", "Kugatsu tooka desu. Mika-san wa?", "September 10th. And yours, Mika?"),
    L("Mika", "わたしは しがつ はつか です。", "Watashi wa shigatsu hatsuka desu.", "Mine is April 20th."),
    L("Alex", "なんようび ですか。", "Nanyoubi desu ka.", "What day of the week is it?"),
    L("Mika", "どようび です。", "Doyoubi desu.", "It is a Saturday."),
    L("Alex", "じゃ、どようびに パーティーを しましょう。", "Ja, doyoubi ni paatii o shimashou.", "Then let\'s have a party on Saturday.")
  ],
  words: [
    W("がつ", "gatsu", "month"),
    W("ついたち", "tsuitachi", "1st"),
    W("ふつか", "futsuka", "2nd"),
    W("とおか", "tooka", "10th"),
    W("はつか", "hatsuka", "20th"),
    W("どようび", "doyoubi", "Saturday"),
    W("いつ", "itsu", "when"),
    W("パーティー", "paatii", "party")
  ],
  tips: [
    "April, July and September are shigatsu, shichigatsu and kugatsu.",
    "The first ten days and the 14th, 20th and 24th are special words.",
    "Say month, then day, then day of the week."
  ],
  quiz: [
    ask("dates", "How do you say “April”?", "しがつ", ["よんがつ", "しちがつ"], "April is しがつ."),
    ask("dates", "How do you say “the 2nd”?", "ふつか", ["にひ", "にち"], "2nd is ふつか."),
    ask("dates", "How do you say “the 20th”?", "はつか", ["にじゅうにち", "ふたそか"], "20th is はつか."),
    ask("dates", "Which means Saturday?", "どようび", ["にちようび", "かようび"], "どようび is Saturday."),
    ask("dates", "How do you ask “When is your birthday?”", "たんじょうびは いつ ですか。", ["たんじょうびは なにを ですか。", "たんじょうびは どこ ですか。"], "いつ = when.")
  ]
});

export const numbersPrices = lesson({
  id: "numbers-prices", number: 102, title: "Big Numbers, Prices and Ages",
  summary: "Count hundreds, thousands and ten-thousands, say prices in yen, and give ages.",
  objective: "By the end you can say “It is 350 yen”, “10,000 yen” and “I am twenty years old”.",
  teach: [
    T("Hundreds", "ひゃく",
      ["100 is {ひゃく|hyaku}. Add a number before it: {にひゃく|nihyaku} (200), {よんひゃく|yonhyaku} (400), {ごひゃく|gohyaku} (500).",
       "Three change their sound: {さんびゃく|sanbyaku} (300), {ろっぴゃく|roppyaku} (600) and {はっぴゃく|happyaku} (800)."],
      [E("さんびゃく えん です。", "Sanbyaku en desu.", "It is 300 yen.", "さんびゃく"),
       E("ろっぴゃく えん です。", "Roppyaku en desu.", "It is 600 yen.", "ろっぴゃく")]),
    T("Thousands", "せん",
      ["1,000 is {せん|sen}. {にせん|nisen} is 2,000. Two change: {さんぜん|sanzen} (3,000) and {はっせん|hassen} (8,000).",
       "Join the parts in order. {せんごひゃく えん|sengohyaku en} is 1,500 yen."],
      [E("さんぜん えん です。", "Sanzen en desu.", "It is 3,000 yen.", "さんぜん"),
       E("せんごひゃく えん です。", "Sengohyaku en desu.", "It is 1,500 yen.", "せんごひゃく")]),
    T("Ten-thousands", "まん",
      ["Japanese counts in units of ten thousand, {まん|man}. 10,000 is {いちまん|ichiman}. You must say {いち|ichi} here.",
       "{にまん|niman} is 20,000, and {じゅうまん|juuman} is 100,000."],
      [E("いちまん えん です。", "Ichiman en desu.", "It is 10,000 yen.", "いちまん"),
       E("にまん ごせん えん です。", "Niman gosen en desu.", "It is 25,000 yen.", "にまん")]),
    T("Prices", "えん and いくら",
      ["Yen is {えん|en}. Ask the price with {いくら|ikura}. {これは いくら ですか|kore wa ikura desu ka} means “How much is this?”.",
       "Answer with the number plus {えん|en}."],
      [E("これは いくら ですか。", "Kore wa ikura desu ka.", "How much is this?", "いくら"),
       E("ごひゃく えん です。", "Gohyaku en desu.", "It is 500 yen.", "ごひゃく")]),
    T("Ages", "Number + さい",
      ["Ages use {さい|sai}. Some change: {いっさい|issai} (1), {はっさい|hassai} (8) and {じゅっさい|jussai} (10). Twenty is special: {はたち|hatachi}.",
       "Ask with {なんさい|nansai}."],
      [E("わたしは はたちです。", "Watashi wa hatachi desu.", "I am twenty.", "はたち"),
       E("なんさい ですか。", "Nansai desu ka.", "How old are you?", "なんさい")]),
    T("Common mistakes", "Sound changes",
      ["Do not say {さんひゃく|sanhyaku}. Say {さんびゃく|sanbyaku}. Do not say {ひゃく|hyaku} alone for 10,000. Say {いちまん|ichiman}.",
       "Listen for the sound changes, because they show up often."],
      [E("さんひゃく えん です。", "(wrong)", "Wrong: say さんびゃく.", "さんひゃく", true),
       E("さんびゃく えん です。", "Sanbyaku en desu.", "Right.", "さんびゃく")],
      T0("Say: “It is 300 yen.”", "さんびゃく えん です。", "Sanbyaku en desu.", "It is 300 yen.", "さんびゃく"))
  ],
  storyTitle: "At the shop",
  story: [
    L("Mika", "すみません、この かさは いくら ですか。", "Sumimasen, kono kasa wa ikura desu ka.", "Excuse me, how much is this umbrella?"),
    L("Staff", "はっぴゃく えん です。", "Happyaku en desu.", "It is 800 yen."),
    L("Mika", "あの かばんは?", "Ano kaban wa?", "And that bag?"),
    L("Staff", "さんぜん ごひゃく えん です。", "Sanzen gohyaku en desu.", "It is 3,500 yen."),
    L("Mika", "じゃ、かさを ください。", "Ja, kasa o kudasai.", "Then I will take the umbrella."),
    L("Staff", "ありがとう ございます。", "Arigatou gozaimasu.", "Thank you very much.")
  ],
  words: [
    W("ひゃく", "hyaku", "hundred"),
    W("せん", "sen", "thousand"),
    W("まん", "man", "ten thousand"),
    W("えん", "en", "yen"),
    W("いくら", "ikura", "how much"),
    W("さい", "sai", "years old"),
    W("はたち", "hatachi", "twenty years old"),
    W("なんさい", "nansai", "how old")
  ],
  tips: [
    "Sanbyaku, roppyaku and happyaku change the sound of hyaku.",
    "Sanzen and hassen change sen. Ten thousand needs ichi: ichiman.",
    "Twenty years old is the special word hatachi."
  ],
  quiz: [
    ask("numbers-prices", "How do you say “300”?", "さんびゃく", ["さんひゃく", "みっひゃく"], "300 is さんびゃく."),
    ask("numbers-prices", "How do you say “3,000”?", "さんぜん", ["さんせん", "みっせん"], "3,000 is さんぜん."),
    ask("numbers-prices", "How do you say “10,000”?", "いちまん", ["まん", "じゅうせん"], "10,000 needs いち."),
    ask("numbers-prices", "How do you ask “How much is this?”", "これは いくら ですか。", ["これは なんさい ですか。", "これは いつ ですか。"], "いくら = how much."),
    ask("numbers-prices", "How do you say “twenty years old”?", "はたち", ["にじゅっさい", "にさい"], "はたち is special.")
  ]
});
