import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FinalCTA from '@/components/home/FinalCTA';
import AboutHero from '@/components/about/AboutHero';
import StudioStory from '@/components/about/StudioStory';
import GlobalNetwork from '@/components/about/GlobalNetwork';
import Principles from '@/components/about/Principles';
import TechStack from '@/components/about/TechStack';
import StudioApproach from '@/components/about/StudioApproach';
import StudioIdentity from '@/components/about/StudioIdentity';

export const metadata = {
  title: 'About — Susthir Digital',
  description:
    'Learn about Susthir Digital, our approach to digital work, and how we build websites, ecommerce experiences and custom web applications from Odisha for businesses everywhere.',
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <Header />

      <main className="flex-1">
        {/* Section 1: About Hero */}
        <AboutHero />

        {/* Section 2: Studio Story & Thesis */}
        <StudioStory />

        {/* Section 3: Engineered in Odisha (Immersive Global Network) */}
        <GlobalNetwork />

        {/* Section 4: How We Think (Interactive Principles) */}
        <Principles />

        {/* Section 5: The Stack (Typographic Technology Showcase) */}
        <TechStack />

        {/* Section 6 & 7: How We Work With Clients & Independent Studio Positioning */}
        <StudioApproach />

        {/* Section 8: Founder / Studio Identity Plate */}
        <StudioIdentity />

        {/* Section 9: Final Conversion Section */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
