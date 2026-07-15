import { useT } from '../hooks/useT';
import type { Lang } from '../i18n/types';

export default function Nav() {
  const { t, lang, setLang } = useT();
  const toggle = (l: Lang) => () => setLang(l);

  return (
    <header style={navWrap}>
      <div className="container" style={navInner}>
        <a href="#top" style={brand}>pargihaldur</a>
        <nav style={right}>
          <div style={langSwitch}>
            <button type="button" onClick={toggle('et')}
                    style={{ ...langBtn, ...(lang === 'et' ? langBtnOn : null) }}
                    aria-pressed={lang === 'et'}>ET</button>
            <span aria-hidden style={{ color: 'var(--border)' }}>·</span>
            <button type="button" onClick={toggle('en')}
                    style={{ ...langBtn, ...(lang === 'en' ? langBtnOn : null) }}
                    aria-pressed={lang === 'en'}>EN</button>
          </div>
          <a href="#cta" className="btn btn-primary">{t.nav.bookDemo}</a>
        </nav>
      </div>
    </header>
  );
}

const navWrap: React.CSSProperties = {
  position: 'sticky', top: 0, zIndex: 10,
  backgroundColor: 'rgba(250,250,250,0.85)',
  backdropFilter: 'saturate(180%) blur(10px)',
  WebkitBackdropFilter: 'saturate(180%) blur(10px)',
  borderBottom: '1px solid var(--border)',
};

const navInner: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64,
};

const brand: React.CSSProperties = {
  fontFamily: 'var(--font-mono)', fontWeight: 500, letterSpacing: '0.02em', fontSize: 15,
};

const right: React.CSSProperties = {
  display: 'flex', alignItems: 'center', gap: 20,
};

const langSwitch: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em',
};

const langBtn: React.CSSProperties = {
  background: 'none', border: 'none', padding: 0, cursor: 'pointer',
  color: 'var(--muted)', fontSize: 12, fontFamily: 'inherit', letterSpacing: 'inherit',
};

const langBtnOn: React.CSSProperties = { color: 'var(--fg)', fontWeight: 600 };
