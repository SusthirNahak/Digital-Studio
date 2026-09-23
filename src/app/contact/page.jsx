import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import FinalCTA from '@/components/home/FinalCTA';
import ContactHero from '@/components/contact/ContactHero';
import ProjectInquiryForm from '@/components/contact/ProjectInquiryForm';
import ContactDetails, { DirectChannelsCard } from '@/components/contact/ContactDetails';
import ContactProcess from '@/components/contact/ContactProcess';

export const metadata = {
  title: 'Start a Project — Susthir Digital',
  description:
    'Tell Susthir Digital about your website, ecommerce, or web application project.',
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <Header />

      <main className="flex-1">
        {/* 1. Contact Hero with Editorial Telemetry Panel */}
        <ContactHero />

        {/* 2. Main Contact Layout (Asymmetric 12-Column Layout on Desktop, Mobile-Optimized Flow) */}
        <Section
          spacing="generous"
          className="bg-[var(--color-bg)]"
        >
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              
              {/* Mobile-only Direct Channels (WhatsApp) rendered before the form */}
              <div className="lg:hidden w-full">
                <DirectChannelsCard />
              </div>

              {/* Main Column: Project Inquiry Form (Left / Larger column) */}
              <div className="lg:col-span-7 w-full">
                <ProjectInquiryForm />
              </div>

              {/* Desktop Sticky Sidebar (Right / Dedicated column) */}
              <div className="hidden lg:block lg:col-span-5 w-full">
                <ContactDetails />
              </div>

            </div>
          </Container>
        </Section>

        {/* 3. "What Happens Next" Editorial Process */}
        <ContactProcess />

        {/* 4. Reused Final Conversion CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
