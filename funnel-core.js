// Funnel blocks (hero product, e-mail sign-up). Pure functions: they run in Node at build time and produce plain HTML.
// The browser side (click tracking, form sending) is in funnel.js.
import { FUNNEL, checkoutUrl } from "./data/funnel-config.js";

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const money = (p) => parseFloat(String(p).replace(/[^0-9.]/g, "")) || 0;

export const refundHTML = () => `<p class="fn-refund">${esc(FUNNEL.refundPolicy)} <a href="/about.html#refunds">Details</a></p>`;

// E-mail sign-up with a lead magnet. `where` is only used to make element ids unique.
export function signupHTML({ where, course = "site" }) {
  const id = `fn-e-${esc(where)}`;
  return `<form class="fn-signup" data-signup data-course="${esc(course)}" data-lead="${esc(FUNNEL.leadMagnet.file)}" data-lead-title="${esc(FUNNEL.leadMagnet.title)}" action="${esc(FUNNEL.emailFormAction)}" method="post">
 <p class="fn-signup-h"><strong>Get the ${esc(FUNNEL.leadMagnet.title)} and new lessons by email</strong></p>
 <p class="fn-note">No spam. Unsubscribe any time.</p>
 <div class="fn-row"><label class="fn-sr" for="${id}">Your email</label><input id="${id}" name="${esc(FUNNEL.emailField)}" type="email" required autocomplete="email" placeholder="you@example.com"><button class="btn" type="submit">Send it to me</button></div>
 <p class="pm-msg" data-msg role="status" aria-live="polite"></p>
</form>`;
}

// The hero product: one big Buy button. `hero` is heroBundle from data/courses.js, `courses` is the course list.
export function heroBoxHTML(hero, courses, { where }) {
  const parts = hero.includes.map((id) => courses.find((c) => c.id === id)).filter(Boolean);
  const separate = parts.reduce((n, c) => n + money(c.price), 0);
  const save = separate - money(hero.price);
  const first = parts[0] ? parts[0].id : "";
  return `<section class="fn-hero" aria-labelledby="fn-h-${esc(where)}">
 <p class="fn-kicker">Start here</p>
 <h2 id="fn-h-${esc(where)}">${esc(hero.title)}</h2>
 <p>${esc(hero.tagline)}</p>
 <ul class="fn-includes">${parts.map((c) => `<li><strong>${esc(c.title)}</strong>: ${esc(c.tagline)}</li>`).join("")}</ul>
 <p class="fn-price"><strong>${esc(hero.price)}</strong> one-time, no subscription${save > 0 ? ` <span class="fn-save">(${esc(hero.price)} instead of $${separate} separately)</span>` : ""}</p>
 <p class="fn-actions"><a class="btn fn-big fn-buy" data-buy data-course="${esc(hero.id)}" href="${esc(checkoutUrl(FUNNEL.heroCheckoutUrl))}" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer">Get the ${esc(hero.title)} (${esc(hero.price)})</a></p>
 ${first ? `<p class="fn-code"><a href="/courses/${esc(first)}/index.html#pm-code-${esc(first)}">Already bought? Enter your code</a></p>` : ""}
 ${refundHTML()}
</section>`;
}

// Shown at the end of every free lesson: the hero product, then the e-mail sign-up.
export const funnelEndHTML = (hero, courses, where = "end") => `<div class="fn-end">${heroBoxHTML(hero, courses, { where })}${signupHTML({ where })}</div>`;
