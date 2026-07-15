import { useT } from '../hooks/useT';

export default function Hero() {
  const { t } = useT();

  return (
    <section id="top" style={{ padding: 'clamp(96px, 14vw, 160px) 0 0' }}>
      <div className="container">
        <div className="label" style={{ marginBottom: 24 }}>{t.hero.eyebrow}</div>
        <h1 className="h-display" style={{ maxWidth: '14ch' }}>{t.hero.title}</h1>
        <p className="lead" style={{ marginTop: 28 }}>{t.hero.subtitle}</p>

        <div style={ctaRow}>
          <a href="#cta" className="btn btn-primary">{t.hero.primaryCta}</a>
          <a href="#how-it-works" className="btn btn-secondary">{t.hero.secondaryCta}</a>
        </div>

        <a href="https://willipu.pargihaldur.ee" target="_blank" rel="noopener noreferrer" className="mono" style={liveAt}>
          {t.hero.liveAt}
        </a>

        <div style={frame}>
          <img src="/screenshots/admin.png" alt="pargihaldur admin dashboard" style={img} />
        </div>
      </div>
    </section>
  );
}

const ctaRow: React.CSSProperties = { display: 'flex', gap: 12, marginTop: 36, flexWrap: 'wrap' };
const liveAt: React.CSSProperties = { display: 'inline-block', marginTop: 24, fontSize: 13, color: 'var(--muted)' };
const frame: React.CSSProperties = {
  marginTop: 'clamp(64px, 10vw, 120px)',
  border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden',
  background: '#fff',
  width: 'fit-content',
  maxWidth: '100%',
  marginInline: 'auto',
};
const img: React.CSSProperties = {
  display: 'block',
  maxWidth: '100%',
  height: 'auto',
};
