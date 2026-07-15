import { useT } from '../hooks/useT';
import { buildDemoMailto, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '../lib/mailto';

export default function EmailCta() {
  const { t } = useT();
  const href = buildDemoMailto(t.cta);

  return (
    <section id="cta" className="section">
      <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
        <h2 className="h-section">{t.cta.title}</h2>
        <p className="lead" style={{ marginInline: 'auto', marginBottom: 32 }}>{t.cta.subtitle}</p>

        <a href={href} className="btn btn-primary" style={{ height: 52, padding: '0 32px', fontSize: 15 }}>
          {t.cta.button}
        </a>

        <p style={fallback}>
          {t.cta.fallbackPrefix}{' '}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
        <p style={fallback}>
          {t.cta.fallbackCallPrefix}{' '}
          <a href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a>
        </p>
      </div>
    </section>
  );
}

const fallback: React.CSSProperties = {
  marginTop: 24,
  fontSize: 14,
  color: 'var(--muted)',
};
