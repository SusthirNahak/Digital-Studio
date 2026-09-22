import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import DigitalNetwork from '@/components/ui/DigitalNetwork';

const CAPABILITIES = [
  {
    code: '01',
    title: 'WordPress Websites',
    detail: 'Professional business websites that are easy to manage and built to turn visitors into enquiries.',
  },
  {
    code: '02',
    title: 'Shopify Ecommerce',
    detail: 'Fast, polished storefronts designed to make buying simple and reliable.',
  },
  {
    code: '03',
    title: 'React & Next.js',
    detail: 'High-performance web experiences for businesses that need more than a standard website.',
  },
  {
    code: '04',
    title: 'Web Applications',
    detail: 'Custom dashboards, portals and business tools built around your team’s real workflow.',
  },
];

export default function CapabilityIntro() {
  return (
    <Section spacing="compact" className="bg-[var(--color-surface)] border-b border-[var(--color-border-subtle)]">
      <Container size="default">
        <div className="space-y-8 sm:space-y-10">
          
          {/* Section Header with Digital Network Signature */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[var(--color-border)] pb-6">
            <div className="space-y-2 max-w-xl">
              <Eyebrow variant="accent">Capability Spectrum</Eyebrow>
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 uppercase">
                From Idea to Digital Product
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500">
                Core technologies deployed across independent businesses, direct-to-consumer brands, and growing enterprises.
              </p>
            </div>

            {/* Subtle Studio Signature Network Visual */}
            <div className="shrink-0">
              <DigitalNetwork />
            </div>
          </div>

          {/* 4-Column Horizontal Capability Grid with Refined Interaction */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.code}
                tabIndex={0}
                className="group space-y-2.5 pt-2 border-t sm:border-t-0 lg:border-l lg:border-[var(--color-border-subtle)] lg:pl-6 first:lg:border-l-0 first:lg:pl-0 focus-visible:outline-none cursor-default"
              >
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>{cap.code}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-300 group-hover:bg-[var(--color-accent)] group-focus-visible:bg-[var(--color-accent)] group-hover:scale-125 transition-all duration-200" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900 tracking-tight transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 group-hover:text-[var(--color-accent)]">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed transition-colors duration-200 group-hover:text-neutral-900">
                  {cap.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
