export type Lang = 'et' | 'en';

export interface Translations {
  nav: {
    bookDemo: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    liveAt: string;
  };
  features: {
    sectionTitle: string;
    sectionLabel: string;
    items: {
      bookings: { title: string; desc: string };
      gates: { title: string; desc: string };
      accounting: { title: string; desc: string };
      aiEditors: { title: string; desc: string };
      aiPricing: { title: string; desc: string };
      sitemap: { title: string; desc: string };
      multilang: { title: string; desc: string };
      offers: { title: string; desc: string };
      notifications: { title: string; desc: string };
      analytics: { title: string; desc: string };
      posters: { title: string; desc: string };
    };
  };
  bookingsDeepDive: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: [string, string, string];
  };
  gatesDeepDive: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: [string, string, string];
  };
  aiEditorsDeepDive: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: [string, string, string];
  };
  sitemapDeepDive: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: [string, string, string];
  };
  caseStudy: {
    eyebrow: string;
    title: string;
    body: string;
    statValue: string;
    statLabel: string;
    link: string;
  };
  howItWorks: {
    sectionTitle: string;
    steps: { title: string; desc: string }[];
  };
  faq: {
    sectionTitle: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    fallbackPrefix: string;     // e.g. "or write to"
    fallbackCallPrefix: string; // e.g. "or call"
    mailSubject: string;        // pre-filled subject line
    mailBody: string;           // pre-filled body draft
  };
  footer: {
    contact: string;            // shown email address
    copyright: string;
  };
}
