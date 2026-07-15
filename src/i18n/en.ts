import type { Translations } from './types';

const en: Translations = {
  nav: { bookDemo: 'Book a demo' },
  hero: {
    eyebrow: 'PARGIHALDUR · v1.0',
    title: 'Operations software for caravan parks.',
    subtitle: 'Self-service bookings, automatic gate access and AI editors — wired together so your park runs itself.',
    primaryCta: 'Book a demo',
    secondaryCta: 'See how it works',
    liveAt: 'Live at willipu.pargihaldur.ee →',
  },
  features: {
    sectionTitle: 'Everything a modern caravan park needs.',
    sectionLabel: 'FEATURES',
    items: {
      bookings:      { title: 'Self-service bookings', desc: 'Guests book and pay 24/7 from any device.' },
      gates:         { title: 'Automatic gate access', desc: 'Guests get an email link. One click opens the gate.' },
      accounting:    { title: 'Built-in accounting', desc: 'Every booking and payment tracked. Export-ready.' },
      aiEditors:     { title: 'AI editors everywhere', desc: 'Rewrite local guide, terms or pricing rules in plain language.' },
      aiPricing:     { title: 'AI pricing co-pilot', desc: 'Drafts a price quote automatically from every contact-form message.' },
      sitemap:       { title: 'Interactive site map', desc: 'An interactive park map so guests can see what\'s where.' },
      multilang:     { title: 'Multi-language guest site', desc: 'Your park, in 6 languages out of the box.' },
      offers:        { title: 'Custom offers', desc: 'Personalised quotes for groups, long stays, weddings — sent in seconds.' },
      notifications: { title: 'Notifications', desc: 'Real-time alerts for arrivals, payments, gate events.' },
      analytics:     { title: 'Analytics dashboard', desc: 'Occupancy, revenue, ADR — at a glance.' },
      posters:       { title: 'Posters & signage', desc: 'Printable QR signs, info boards and price lists in one click.' },
    },
  },
  bookingsDeepDive: {
    eyebrow: 'BOOKINGS',
    title: 'Mobile-first bookings, paid up front.',
    body: 'Guests reserve and pay in under a minute. Confirmation, gate code and receipt land in their inbox automatically.',
    bullets: [
      'Mobile-first booking flow with no app to install',
      'Card payments handled by the gateway you already use',
      'Automatic confirmation, receipt and gate-code email',
    ],
  },
  gatesDeepDive: {
    eyebrow: 'GATE ACCESS',
    title: 'Open the gate without a front desk.',
    body: 'Each booking gets a unique access link emailed to the guest, valid for the stay. Guests arrive whenever they want. You see every open event in the log.',
    bullets: [
      'Access link emailed with the booking confirmation',
      'Time-bounded — link works only during the stay',
      'Every gate-open logged with timestamp and source',
    ],
  },
  aiEditorsDeepDive: {
    eyebrow: 'AI EDITORS',
    title: 'Edit your park\'s content in plain language.',
    body: 'Ask the AI to tighten your local guide, simplify your terms, or polish your pricing rules. See the diff, accept or reject — your words stay yours.',
    bullets: [
      'Plain-language prompts, not knobs and dials',
      'Diff-preview every change before it goes live',
      'Works on local guide, terms and pricing rules',
    ],
  },
  sitemapDeepDive: {
    eyebrow: 'INTERACTIVE MAP',
    title: 'Show your park.',
    body: 'A visual map of your park lets guests find facilities, paths and pitches at a glance. The same map powers your admin view of services and amenities.',
    bullets: [
      'Your real park layout, drag-and-drop to update',
      'Icons for power, water, showers, fire pits and more',
      'Same map for guests on the booking site and you in the admin',
    ],
  },
  caseStudy: {
    eyebrow: 'CASE STUDY',
    title: 'How Willipu runs a caravan park on pargihaldur.',
    body: 'Willipu uses pargihaldur for self-service bookings, gate access and accounting end-to-end. Guests check themselves in, get their gate code, and the books balance themselves.',
    statValue: '100%',
    statLabel: 'self-service check-in',
    link: 'See it live at willipu.pargihaldur.ee →',
  },
  howItWorks: {
    sectionTitle: 'How it works.',
    steps: [
      { title: 'You prep foundation and power', desc: 'Concrete footing for the gate and electrical hookup are on your side.' },
      { title: 'We install the gate', desc: 'Barrier, controller and wiring — all handled by us.' },
      { title: 'We set up the web', desc: 'Booking site and admin panel branded with your park name.' },
      { title: 'We import pitches and pricing', desc: 'We add your park layout, pitches, prices and terms for you.' },
      { title: 'We train you on the admin', desc: 'Short walk-through of the admin panel and the day-to-day flow.' },
      { title: 'Your park is ready', desc: 'Guests book themselves in, the gate opens automatically, you watch the books.' },
    ],
  },
  faq: {
    sectionTitle: 'Frequently asked.',
    items: [
      { q: 'What does it cost?',
        a: 'Pricing depends on the size of your park. Email us for a quote.' },
      { q: 'How long does it take to set up?',
        a: 'If the concrete footing and electricity are already in place, we just install the gate and you\'re up and running in no time.' },
      { q: 'Will it handle my country\'s VAT rules?',
        a: 'Estonian KMKR is built in. Other EU jurisdictions are configurable per tenant.' },
      { q: 'Can guests book in their own language?',
        a: 'Yes — Estonian, English, Russian, Latvian, German and Finnish out of the box.' },
    ],
  },
  cta: {
    title: 'Book a demo.',
    subtitle: 'Tell us about your park. We reply within one working day.',
    button: 'Email us',
    fallbackPrefix: 'or write to',
    fallbackCallPrefix: 'or call',
    mailSubject: 'Demo request — pargihaldur',
    mailBody: 'Hi,\n\nI\'d like a demo of pargihaldur for our park.\n\nPark name:\nRough size (number of pitches):\nWebsite (if any):\n\nThanks!\n',
  },
  footer: {
    contact: 'contact@pargihaldur.ee',
    copyright: '© 2026 pargihaldur',
  },
};

export default en;
