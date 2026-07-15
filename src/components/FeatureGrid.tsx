import { useT } from '../hooks/useT';
import { FEATURE_KEYS } from '../data/features';

export default function FeatureGrid() {
  const { t } = useT();
  const items = FEATURE_KEYS.map(k => ({ key: k, ...t.features.items[k] }));

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="label" style={{ marginBottom: 16 }}>{t.features.sectionLabel}</div>
        <h2 className="h-section" style={{ maxWidth: '20ch' }}>{t.features.sectionTitle}</h2>

        <div style={grid}>
          {items.map((it, i) => (
            <div key={it.key} style={cell}>
              <div className="mono" style={num}>{String(i + 1).padStart(2, '0')}</div>
              <h3 style={title}>{it.title}</h3>
              <p style={desc}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const grid: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  borderTop: '1px solid var(--border)',
  borderLeft: '1px solid var(--border)',
};
const cell: React.CSSProperties = {
  padding: '32px 24px',
  borderBottom: '1px solid var(--border)',
  borderRight: '1px solid var(--border)',
  minHeight: 220,
};
const num: React.CSSProperties = { fontSize: 11, color: 'var(--muted)', marginBottom: 16 };
const title: React.CSSProperties = { fontSize: 17, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 8px' };
const desc: React.CSSProperties = { fontSize: 14, lineHeight: 1.55, color: 'var(--muted)', margin: 0 };
