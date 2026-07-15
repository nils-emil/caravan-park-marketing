import { useT } from '../hooks/useT';
import type { Lang } from '../i18n/types';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '../lib/mailto';

export default function Footer() {
  const { t, lang, setLang } = useT();
  const toggle = (l: Lang) => () => setLang(l);

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '40px 0' }}>
      <div className="container" style={inner}>
        <div className="mono" style={{ fontSize: 14, fontWeight: 500 }}>pargihaldur</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 14 }}>
          <a href={`mailto:${t.footer.contact}`} style={{ color: 'var(--muted)' }}>{t.footer.contact}</a>
          <a href={`tel:${CONTACT_PHONE_TEL}`} style={{ color: 'var(--muted)' }}>{CONTACT_PHONE_DISPLAY}</a>
        </div>
        <div className="mono" style={{ fontSize: 12, letterSpacing: '0.08em' }}>
          <button type="button" onClick={toggle('et')} style={{ ...langBtn, color: lang === 'et' ? 'var(--fg)' : 'var(--muted)' }}>ET</button>
          <span aria-hidden style={{ color: 'var(--border)', margin: '0 8px' }}>·</span>
          <button type="button" onClick={toggle('en')} style={{ ...langBtn, color: lang === 'en' ? 'var(--fg)' : 'var(--muted)' }}>EN</button>
        </div>
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>{t.footer.copyright}</div>
      </div>
    </footer>
  );
}

const inner: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  flexWrap: 'wrap', gap: 16,
};
const langBtn: React.CSSProperties = {
  background: 'none', border: 'none', padding: 0, cursor: 'pointer',
  fontFamily: 'inherit', fontSize: 12, letterSpacing: '0.08em',
};
