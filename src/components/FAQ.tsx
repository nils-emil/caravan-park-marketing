import { useT } from '../hooks/useT';

export default function FAQ() {
  const { t } = useT();
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="h-section">{t.faq.sectionTitle}</h2>
        <div style={list}>
          {t.faq.items.map(item => (
            <details key={item.q} style={detail}>
              <summary style={summary}>
                <span style={q}>{item.q}</span>
                <span aria-hidden style={chev}>+</span>
              </summary>
              <p style={a}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

const list: React.CSSProperties = { borderTop: '1px solid var(--border)', maxWidth: 800 };
const detail: React.CSSProperties = { borderBottom: '1px solid var(--border)' };
const summary: React.CSSProperties = {
  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  padding: '20px 0', cursor: 'pointer', listStyle: 'none',
};
const q: React.CSSProperties = { fontSize: 17, fontWeight: 500 };
const chev: React.CSSProperties = { fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--muted)' };
const a: React.CSSProperties = { margin: '0 0 20px', fontSize: 15, lineHeight: 1.6, color: 'var(--muted)', maxWidth: '60ch' };
