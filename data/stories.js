// Add a new story by copying one object. videoUrl accepts: .mp4/.webm, a YouTube link, or an Instagram Reel link. Leave "" until the video exists.
export const stories = [
 {
  id: "whats-your-name", title: "What's Your Name?", phrase: "お名前は何ですか？", romaji: "Onamae wa nan desu ka?", translation: "What's your name?",
  description: "Meet Mika and Alex for the first time.", difficulty: "Beginner", category: "Conversation", videoUrl: "",
  dialogue: [
   { who: "Mika", ja: "はじめまして！", romaji: "Hajimemashite!", en: "Nice to meet you!" },
   { who: "Mika", ja: "お名前は何ですか？", romaji: "Onamae wa nan desu ka?", en: "What's your name?" },
   { who: "Alex", ja: "アレックスです。", romaji: "Arekkusu desu.", en: "I'm Alex." },
   { who: "Mika", ja: "ミカです。よろしくね。", romaji: "Mika desu. Yoroshiku ne.", en: "I'm Mika. Nice to meet you." }
  ],
  breakdown: ["お名前 = name", "何 = what", "ですか = question marker"]
 },
 {
  id: "at-the-cafe", title: "At the Café", phrase: "コーヒーをください。", romaji: "Koohii o kudasai.", translation: "Coffee, please.",
  description: "Learn how to order a coffee in Japanese.", difficulty: "Beginner", category: "Everyday Japanese", videoUrl: "",
  dialogue: [
   { who: "Alex", ja: "すみません。", romaji: "Sumimasen.", en: "Excuse me." },
   { who: "Alex", ja: "コーヒーをください。", romaji: "Koohii o kudasai.", en: "Coffee, please." },
   { who: "Mika", ja: "はい、どうぞ。", romaji: "Hai, douzo.", en: "Sure, here you go." },
   { who: "Alex", ja: "ありがとう！", romaji: "Arigatou!", en: "Thank you!" }
  ],
  breakdown: ["コーヒー = coffee", "を = marks what you want", "ください = please give me"]
 },
 {
  id: "wheres-the-station", title: "Where's the Station?", phrase: "駅はどこですか？", romaji: "Eki wa doko desu ka?", translation: "Where's the station?",
  description: "Learn a useful phrase for asking for directions.", difficulty: "Beginner", category: "Travel Japanese", videoUrl: "",
  dialogue: [
   { who: "Alex", ja: "すみません、駅はどこですか？", romaji: "Sumimasen, eki wa doko desu ka?", en: "Excuse me, where's the station?" },
   { who: "Mika", ja: "まっすぐ行って、右です。", romaji: "Massugu itte, migi desu.", en: "Go straight, then it's on the right." },
   { who: "Alex", ja: "ありがとうございます！", romaji: "Arigatou gozaimasu!", en: "Thank you very much!" }
  ],
  breakdown: ["駅 = station", "どこ = where", "ですか = question marker"]
 }
];

export const characters = [
 { id: "mika", name: "Mika", blurb: "Meet Mika — friendly, energetic, and always ready to help.", hair: "#3b2a2a", top: "#e8a0b0", bun: true },
 { id: "alex", name: "Alex", blurb: "Meet Alex — a beginner Japanese learner figuring things out one conversation at a time.", hair: "#7a5a3a", top: "#8fae8b", bun: false }
];
