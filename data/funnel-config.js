// Funnel settings: checkout, email sign-up and refund wording. Edit the [PLACEHOLDER] values below; nothing else needs to change.
// Never put secrets or API keys here: this file is public.
import { PREMIUM } from "./premium-config.js";

export const FUNNEL = {
  site: "tiny-japanese",
  // Name of the payment provider (for your own notes), e.g. Gumroad, Lemon Squeezy, Stripe Payment Links.
  provider: "[CHECKOUT_PROVIDER]",
  // Checkout link for the hero product (Starter Bundle). While this is still a [PLACEHOLDER], the Buy button uses the existing pay link below.
  heroCheckoutUrl: "[JP_HERO_CHECKOUT_URL]",
  fallbackCheckoutUrl: PREMIUM.payUrl,
  // Where the e-mail sign-up forms post to (field name "email"). While this is a [PLACEHOLDER], the forms say sign-up isn't switched on yet.
  emailFormAction: "[EMAIL_FORM_ACTION_URL]",
  emailField: "email",
  // Free download offered for signing up (an existing file in downloads/).
  leadMagnet: { title: "free Genki I Grammar workbook (PDF)", file: "/downloads/genki-1-grammar-workbook.pdf" },
  // [CONFIRM_REFUND_POLICY] Check this wording before publishing. It is shown next to Buy buttons and on /about.html.
  refundPolicy: "30-day refund: if a course isn't right for you, email us within 30 days of buying and we'll refund you in full."
};

export const isPlaceholder = (u) => !u || /^\s*\[[A-Za-z0-9_ ]+\]\s*$/.test(String(u));
// A real URL is used as given; a missing or [PLACEHOLDER] URL falls back to the existing pay link so Buy buttons never break.
export const checkoutUrl = (url) => (isPlaceholder(url) ? FUNNEL.fallbackCheckoutUrl : url);
