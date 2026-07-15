import { useT } from '../hooks/useT';

export default function HowItWorks() {
  const { t } = useT();
  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <h2 className="h-section">{t.howItWorks.sectionTitle}</h2>
        <ol style={list}>
          {t.howItWorks.steps.map((s, i) => (
            <li key={s.title} style={item}>
              <div className="mono" style={num}>0{i + 1}</div>
              <h3 style={title}>{s.title}</h3>
              <p style={desc}>{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const list: React.CSSProperties = {
  margin: 0, padding: 0, listStyle: 'none',
  display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: 'clamp(24px, 3vw, 48px)',
};
const item: React.CSSProperties = { borderTop: '1px solid var(--fg)', paddingTop: 24 };
const num: React.CSSProperties = { fontSize: 12, color: 'var(--muted)', marginBottom: 12 };
const title: React.CSSProperties = { fontSize: 20, fontWeight: 600, letterSpacing: '-0.01em', margin: '0 0 8px' };
const desc: React.CSSProperties = { fontSize: 15, lineHeight: 1.55, color: 'var(--muted)', margin: 0 };
