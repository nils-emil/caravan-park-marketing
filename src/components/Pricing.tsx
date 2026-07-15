import { useT } from '../hooks/useT';

export default function Pricing() {
  const { t } = useT();
  const p = t.pricing;
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div className="label" style={{ marginBottom: 16 }}>{p.sectionLabel}</div>
        <h2 className="h-section" style={{ marginBottom: 16 }}>{p.sectionTitle}</h2>
        <p className="lead" style={{ marginTop: 0, marginBottom: 48 }}>{p.intro}</p>
        <div style={grid}>
          {p.plans.map(plan => (
            <div key={plan.name} style={{ ...card, ...(plan.featured ? cardFeatured : null) }}>
              <h3 className="mono" style={planName}>{plan.name}</h3>
              <div style={{ margin: '20px 0 4px' }}>
                <span style={price}>{plan.price}</span>
                <span style={priceUnit}> {plan.priceUnit}</span>
              </div>
              <div className="mono" style={yearTotal}>{plan.yearTotal}</div>
              <p style={tagline}>{plan.tagline}</p>
              <ul style={bullets}>
                {plan.bullets.map(b => (
                  <li key={b} style={bullet}>
                    <span aria-hidden style={tick}>—</span>{b}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p style={vatNote}>{p.vatNote}</p>
      </div>
    </section>
  );
}

const grid: React.CSSProperties = {
  display: 'grid', gap: 'clamp(20px, 2.5vw, 32px)',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  alignItems: 'stretch',
};

const card: React.CSSProperties = {
  border: '1px solid var(--border)', borderRadius: 10, background: '#fff',
  padding: 'clamp(24px, 3vw, 36px)', display: 'flex', flexDirection: 'column',
};

const cardFeatured: React.CSSProperties = {
  borderColor: 'var(--fg)',
};

const planName: React.CSSProperties = {
  fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
  color: 'var(--muted)', fontWeight: 500, margin: 0,
};

const price: React.CSSProperties = {
  fontSize: 'clamp(34px, 4vw, 44px)', fontWeight: 600, letterSpacing: '-0.03em',
};

const priceUnit: React.CSSProperties = { fontSize: 15, color: 'var(--muted)' };

const yearTotal: React.CSSProperties = {
  fontSize: 12, color: 'var(--muted)', letterSpacing: '0.04em', marginBottom: 16,
};

const tagline: React.CSSProperties = {
  fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', margin: '0 0 20px',
};

const bullets: React.CSSProperties = {
  margin: '0 0 28px', padding: 0, listStyle: 'none', flexGrow: 1,
  display: 'flex', flexDirection: 'column', gap: 10,
};

const bullet: React.CSSProperties = { fontSize: 14, lineHeight: 1.5 };

const tick: React.CSSProperties = { color: 'var(--muted)', marginRight: 10 };

const vatNote: React.CSSProperties = {
  marginTop: 24, fontSize: 13, color: 'var(--muted)',
  fontFamily: 'var(--font-mono)', letterSpacing: '0.02em',
};
