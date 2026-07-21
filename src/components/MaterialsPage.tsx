import { useState } from 'react';
import { useT } from '../hooks/useT';
import type { Lang, Translations } from '../i18n/types';
import Footer from './Footer';

const SCREENSHOTS: { file: string; captionKey: keyof Translations['materials']['imageCaptions'] }[] = [
  { file: 'landing.png', captionKey: 'landing' },
  { file: 'booking.png', captionKey: 'booking' },
  { file: 'admin.png', captionKey: 'admin' },
  { file: 'access.png', captionKey: 'access' },
  { file: 'access-email.png', captionKey: 'accessEmail' },
  { file: 'ai-suggest.png', captionKey: 'aiSuggest' },
  { file: 'sitemap.png', captionKey: 'sitemap' },
  { file: 'poster.png', captionKey: 'poster' },
];

const FLYERS: { lang: keyof Translations['materials']['flyerLangs']; file: string; thumb: string }[] = [
  { lang: 'et', file: 'willipu-flaier-a4-et.pdf', thumb: 'willipu-flaier-et-thumb.jpg' },
  { lang: 'en', file: 'willipu-flaier-a4-en.pdf', thumb: 'willipu-flaier-en-thumb.jpg' },
  { lang: 'fi', file: 'willipu-flaier-a4-fi.pdf', thumb: 'willipu-flaier-fi-thumb.jpg' },
];

const BRAND_COLORS = [
  { hex: '#0a0a0a', labelKey: 'brandColorDark' as const },
  { hex: '#fafafa', labelKey: 'brandColorLight' as const },
];

export default function MaterialsPage() {
  const { t, lang, setLang } = useT();
  const m = t.materials;
  const toggle = (l: Lang) => () => setLang(l);

  return (
    <>
      <header style={navWrap}>
        <div className="container" style={navInner}>
          <a href="/" style={brand}>{m.backToSite}</a>
          <div style={langSwitch}>
            <button type="button" onClick={toggle('et')}
                    style={{ ...langBtn, ...(lang === 'et' ? langBtnOn : null) }}
                    aria-pressed={lang === 'et'}>ET</button>
            <span aria-hidden style={{ color: 'var(--border)' }}>·</span>
            <button type="button" onClick={toggle('en')}
                    style={{ ...langBtn, ...(lang === 'en' ? langBtnOn : null) }}
                    aria-pressed={lang === 'en'}>EN</button>
          </div>
        </div>
      </header>

      <main>
        <section className="section" style={{ borderTop: 0 }}>
          <div className="container">
            <div className="label" style={{ marginBottom: 16 }}>{m.eyebrow}</div>
            <h1 className="h-section" style={{ marginBottom: 20 }}>{m.title}</h1>
            <p className="lead" style={{ margin: 0 }}>{m.intro}</p>
            <p style={unlistedStyle}>{m.unlistedNote}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="h-section">{m.brandSection}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start' }}>
              <div style={logoCard}>
                <span className="mono" style={{ fontSize: 28, fontWeight: 500 }}>pargihaldur</span>
              </div>
              <div style={{ maxWidth: '48ch' }}>
                <p className="lead" style={{ marginTop: 0 }}>{m.brandNameNote}</p>
                <div className="label" style={{ margin: '24px 0 12px' }}>{m.brandColorsLabel}</div>
                <div style={{ display: 'flex', gap: 16 }}>
                  {BRAND_COLORS.map(c => (
                    <div key={c.hex} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ ...swatch, background: c.hex }} />
                      <div>
                        <div style={{ fontSize: 13 }}>{m[c.labelKey]}</div>
                        <div className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>{c.hex}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="h-section" style={{ marginBottom: 12 }}>{m.textsSection}</h2>
            <p className="lead" style={{ marginTop: 0, marginBottom: 40 }}>{m.textsHint}</p>
            <CopyBlock label={m.shortPitchLabel} text={m.shortPitch} copy={m.copy} copied={m.copied} />
            <CopyBlock label={m.longPitchLabel} text={m.longPitch} copy={m.copy} copied={m.copied} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <h2 className="h-section" style={{ marginBottom: 12 }}>{m.imagesSection}</h2>
            <p className="lead" style={{ marginTop: 0, marginBottom: 40 }}>{m.imagesHint}</p>
            <div style={imageGrid}>
              {SCREENSHOTS.map(s => (
                <figure key={s.file} style={imageCard}>
                  <a href={`/screenshots/${s.file}`} download>
                    <img src={`/screenshots/${s.file}`} alt={m.imageCaptions[s.captionKey]} style={imageStyle} loading="lazy" />
                  </a>
                  <figcaption style={captionRow}>
                    <span style={{ fontSize: 13 }}>{m.imageCaptions[s.captionKey]}</span>
                    <a href={`/screenshots/${s.file}`} download className="mono" style={downloadLink}>
                      {m.download} ↓
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="h-section" style={{ marginBottom: 12 }}>{m.flyersSection}</h2>
            <p className="lead" style={{ marginTop: 0, marginBottom: 40 }}>{m.flyersHint}</p>
            <div style={flyerGrid}>
              {FLYERS.map(f => (
                <figure key={f.lang} style={imageCard}>
                  <a href={`/flyers/${f.file}`} download>
                    <img src={`/flyers/${f.thumb}`} alt={`${m.flyerLangs[f.lang]} — A4 PDF`} style={flyerThumb} loading="lazy" />
                  </a>
                  <figcaption style={captionRow}>
                    <span style={{ fontSize: 13 }}>{m.flyerLangs[f.lang]} · A4 PDF</span>
                    <a href={`/flyers/${f.file}`} download className="mono" style={downloadLink}>
                      {m.download} ↓
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function CopyBlock({ label, text, copy, copied }: { label: string; text: string; copy: string; copied: string }) {
  const [done, setDone] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. non-secure context) — user can select the text manually.
    }
  };
  return (
    <div style={copyBlock}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <span className="label">{label}</span>
        <button type="button" className="btn btn-secondary" style={{ height: 32, padding: '0 14px', fontSize: 12 }} onClick={onCopy}>
          {done ? copied : copy}
        </button>
      </div>
      <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{text}</p>
    </div>
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

const langSwitch: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 8,
  fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em',
};

const langBtn: React.CSSProperties = {
  background: 'none', border: 'none', padding: 0, cursor: 'pointer',
  color: 'var(--muted)', fontSize: 12, fontFamily: 'inherit', letterSpacing: 'inherit',
};

const langBtnOn: React.CSSProperties = { color: 'var(--fg)', fontWeight: 600 };

const unlistedStyle: React.CSSProperties = {
  marginTop: 24, fontSize: 13, color: 'var(--muted)',
  fontFamily: 'var(--font-mono)', letterSpacing: '0.02em',
  border: '1px solid var(--border)', borderRadius: 6,
  padding: '10px 14px', display: 'inline-block', maxWidth: '70ch',
};

const logoCard: React.CSSProperties = {
  border: '1px solid var(--border)', borderRadius: 8, background: '#fff',
  padding: '48px 56px', display: 'flex', alignItems: 'center', justifyContent: 'center',
};

const swatch: React.CSSProperties = {
  width: 36, height: 36, borderRadius: 6, border: '1px solid var(--border)', display: 'inline-block',
};

const copyBlock: React.CSSProperties = {
  border: '1px solid var(--border)', borderRadius: 8, background: '#fff',
  padding: '20px 24px', marginBottom: 24, maxWidth: 760,
};

const imageGrid: React.CSSProperties = {
  display: 'grid', gap: 32,
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
};

const imageCard: React.CSSProperties = { margin: 0 };

const flyerGrid: React.CSSProperties = {
  display: 'grid', gap: 32,
  gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
  maxWidth: 900,
};

const flyerThumb: React.CSSProperties = {
  width: '100%', display: 'block', borderRadius: 8,
  border: '1px solid var(--border)', background: '#fff',
};

const imageStyle: React.CSSProperties = {
  width: '100%', display: 'block', borderRadius: 8,
  border: '1px solid var(--border)', background: '#fff',
};

const captionRow: React.CSSProperties = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
  gap: 12, marginTop: 10, color: 'var(--muted)',
};

const downloadLink: React.CSSProperties = {
  fontSize: 12, letterSpacing: '0.06em', whiteSpace: 'nowrap',
};
