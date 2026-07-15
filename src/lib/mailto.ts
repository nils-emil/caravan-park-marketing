import type { Translations } from '../i18n/types';

export const CONTACT_EMAIL = 'contact@pargihaldur.ee';
export const CONTACT_PHONE_DISPLAY = '+372 5613 8150';
export const CONTACT_PHONE_TEL = '+37256138150';

export function buildDemoMailto(t: Translations['cta']): string {
  const subject = encodeURIComponent(t.mailSubject);
  const body = encodeURIComponent(t.mailBody);
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}
