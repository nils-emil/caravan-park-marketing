import { useT } from '../hooks/useT';

export default function CaseStudy() {
  const { t } = useT();
  return (
    <section id="case-study" className="section">
      <div className="container cs-grid">
        <div>
          <div className="label" style={{ marginBottom: 16 }}>{t.caseStudy.eyebrow}</div>
          <h2 className="h-section" style={{ maxWidth: '20ch' }}>{t.caseStudy.title}</h2>
          <p className="lead">{t.caseStudy.body}</p>
          <a href="https://willipu.pargihaldur.ee" target="_blank" rel="noopener noreferrer" className="mono" style={link}>
            {t.caseStudy.link}
          </a>
        </div>
        <aside style={statBox}>
          <div className="h-display" style={statValue}>{t.caseStudy.statValue}</div>
          <div className="label">{t.caseStudy.statLabel}</div>
        </aside>
      </div>

      <div className="container">
        <a
          href="https://willipu.pargihaldur.ee"
          target="_blank"
          rel="noopener noreferrer"
          style={frame}
          aria-label="Open willipu.pargihaldur.ee in a new tab"
        >
          <img
            src="/screenshots/landing.png"
            alt="willipu.pargihaldur.ee guest-facing booking site"
            style={img}
          />
        </a>
      </div>
    </section>
  );
}

const link: React.CSSProperties = { display: 'inline-block', marginTop: 24, fontSize: 13, color: 'var(--muted)' };
const statBox: React.CSSProperties = { padding: '32px 24px', border: '1px solid var(--border)', borderRadius: 12 };
const statValue: React.CSSProperties = { fontSize: 'clamp(56px, 8vw, 96px)', marginBottom: 12 };

const frame: React.CSSProperties = {
  display: 'block',
  marginTop: 'clamp(48px, 6vw, 80px)',
  border: '1px solid var(--border)',
  borderRadius: 12,
  overflow: 'hidden',
  background: '#fff',
  width: '100%',
  maxWidth: 1100,
  marginInline: 'auto',
};
const img: React.CSSProperties = {
  display: 'block',
  width: '100%',
  height: 'auto',
};
