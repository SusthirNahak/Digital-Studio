import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import CapabilityIntro from '@/components/home/CapabilityIntro';
import ServicesSection from '@/components/home/ServicesSection';
import SelectedWork from '@/components/home/SelectedWork';
import MotionReel from '@/components/home/MotionReel';
import PricingProcess from '@/components/home/PricingProcess';
import FinalCTA from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <Header />

      <main className="flex-1">
        {/* Real Hero Section with 3D Spatial Glass & Live Wave Canvas */}
        <Hero />

        {/* Transition Bridge: Capability Intro */}
        <CapabilityIntro />

        {/* Main Services Section */}
        <ServicesSection />

        {/* Selected Work Showcase */}
        <SelectedWork />

        {/* Cinematic 3D Motion Reel & Interactive Engineering Showcase */}
        <div id="motion-reel">
          <MotionReel />
        </div>

        {/* Pricing Starting Points & How We Work Process */}
        <PricingProcess />

        {/* Final Conversion Section */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
