interface DeepDiveProps {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  bullets: readonly [string, string, string];
  imageSrc: string;
  imageAlt: string;
  flipped?: boolean;
  imageMaxHeight?: number;
}

export default function DeepDive({
  id, eyebrow, title, body, bullets,
  imageSrc, imageAlt, flipped = false,
  imageMaxHeight = 560,
}: DeepDiveProps) {
  const gridClass = flipped ? 'dd-grid dd-grid--flipped' : 'dd-grid';

  return (
    <section id={id} className="section">
      <div className={`container ${gridClass}`}>
        <div style={{ direction: 'ltr' }}>
          <div className="label" style={{ marginBottom: 16 }}>{eyebrow}</div>
          <h2 className="h-section" style={{ maxWidth: '16ch' }}>{title}</h2>
          <p className="lead">{body}</p>
          <ul style={list}>
            {bullets.map(b => <li key={b} style={item}>{b}</li>)}
          </ul>
        </div>
        <div style={{ direction: 'ltr' }}>
          <div style={frame}>
            <img
              src={imageSrc}
              alt={imageAlt}
              style={{ ...img, maxHeight: imageMaxHeight }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const list: React.CSSProperties = { margin: '32px 0 0', padding: 0, listStyle: 'none', borderTop: '1px solid var(--border)' };
const item: React.CSSProperties = { padding: '14px 0', borderBottom: '1px solid var(--border)', fontSize: 15, color: 'var(--fg)' };
const frame: React.CSSProperties = {
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
