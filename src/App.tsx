import Nav from './components/Nav';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import DeepDive from './components/DeepDive';
import CaseStudy from './components/CaseStudy';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import EmailCta from './components/EmailCta';
import Footer from './components/Footer';
import { useT } from './hooks/useT';

export default function App() {
  const { t } = useT();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeatureGrid />
        <DeepDive
          id="bookings"
          eyebrow={t.bookingsDeepDive.eyebrow}
          title={t.bookingsDeepDive.title}
          body={t.bookingsDeepDive.body}
          bullets={t.bookingsDeepDive.bullets}
          imageSrc="/screenshots/booking.png"
          imageAlt="self-service booking form"
          imageMaxHeight={640}
        />
        <DeepDive
          id="gates"
          eyebrow={t.gatesDeepDive.eyebrow}
          title={t.gatesDeepDive.title}
          body={t.gatesDeepDive.body}
          bullets={t.gatesDeepDive.bullets}
          imageSrc="/screenshots/access.png"
          imageAlt="automatic gate access page"
          imageMaxHeight={640}
          flipped
        />
        <DeepDive
          id="ai-editors"
          eyebrow={t.aiEditorsDeepDive.eyebrow}
          title={t.aiEditorsDeepDive.title}
          body={t.aiEditorsDeepDive.body}
          bullets={t.aiEditorsDeepDive.bullets}
          imageSrc="/screenshots/ai-suggest.png"
          imageAlt="AI-suggested content edits with diff preview"
        />
        <DeepDive
          id="sitemap"
          eyebrow={t.sitemapDeepDive.eyebrow}
          title={t.sitemapDeepDive.title}
          body={t.sitemapDeepDive.body}
          bullets={t.sitemapDeepDive.bullets}
          imageSrc="/screenshots/sitemap.png"
          imageAlt="interactive park site map with drag-and-drop layout"
          flipped
        />
        <CaseStudy />
        <HowItWorks />
        <FAQ />
        <EmailCta />
      </main>
      <Footer />
    </>
  );
}
