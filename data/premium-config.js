// Premium course settings. Lessons after the free preview are stored on the server and unlocked with an access code.
// Prices are set per course in data/courses.js. If your payment link has a fixed amount, give each course its own link with `payUrl` there.
export const PREMIUM = {
  site: "tiny-japanese",
  api: "https://pwenjqeclxxpfryxygzb.supabase.co/functions/v1/premium",
  payUrl: "https://pay.ypaylink.com/personal-link/1537/82655c22bb05b838c3eaf6e9fbf762f92862ad5a",
  freeLessons: 3
};
