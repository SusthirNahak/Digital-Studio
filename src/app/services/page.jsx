import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import FinalCTA from '@/components/home/FinalCTA';
import ServiceVisualPreview from '@/components/services/ServiceVisualPreview';
import { SERVICES } from '@/data/services';
import { PROCESS_STEPS } from '@/data/process';
import { ArrowUpRight, ArrowDown, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Services — Websites, Ecommerce & Web Applications',
  description:
    'Explore our digital engineering services: WordPress websites, Shopify ecommerce storefronts, React and Next.js platforms, custom web applications, and focused redesigns.',
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <Header />

      <main className="flex-1">
        {/* ============================================================ */}
        {/* SECTION 1: SERVICES HERO                                     */}
        {/* ============================================================ */}
        <Section spacing="generous" className="border-b border-[var(--color-border-subtle)]">
          <Container size="default">
            <div className="max-w-3xl space-y-6 sm:space-y-8">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <Eyebrow variant="accent">WHAT WE BUILD</Eyebrow>
              </div>

              {/* Single Logical H1 Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 leading-[1.08] text-balance">
                Digital work designed around how your business operates.
              </h1>

              {/* Supporting Copy */}
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed text-balance max-w-2xl font-normal">
                From business websites and ecommerce stores to custom web applications, we build digital products around your goals, audience and workflow.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/contact" variant="primary" size="lg" className="group">
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>

                <Button href="/#work" variant="secondary" size="lg" className="group">
                  <span>View Our Work</span>
                  <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>

              {/* Factual Sub-indicator */}
              <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>Production-Grade Code</span>
                </span>
                <span>•</span>
                <span>Direct Developer Communication</span>
                <span>•</span>
                <span>Tailored Project Scopes</span>
              </div>
            </div>
          </Container>
        </Section>

        {/* ============================================================ */}
        {/* SECTION 2: SERVICE INDEX (ANCHOR NAVIGATION)                  */}
        {/* ============================================================ */}
        <nav
          aria-label="Service Index"
          className="sticky top-16 sm:top-20 z-30 bg-[var(--color-bg)]/95 backdrop-blur-md border-b border-[var(--color-border)] py-3 transition-colors"
        >
          <Container size="default">
            <div className="flex items-center justify-between gap-4 overflow-x-auto no-scrollbar py-1">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 shrink-0 hidden lg:inline">
                Index:
              </span>
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={`#${service.id}`}
                    className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-subtle)] text-xs font-medium text-neutral-700 hover:text-neutral-950 bg-white border border-neutral-200/80 hover:border-neutral-400 transition-all select-none shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  >
                    <span className="font-mono text-[10px] text-neutral-400 group-hover:text-[var(--color-accent)] transition-colors">
                      {service.number}
                    </span>
                    <span className="whitespace-nowrap font-medium">{service.title}</span>
                    <ArrowDown className="h-3 w-3 text-neutral-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </nav>

        {/* ============================================================ */}
        {/* SECTION 3: DETAILED SERVICE SECTIONS (ALTERNATING EDITORIAL)  */}
        {/* ============================================================ */}
        <div className="divide-y divide-[var(--color-border)]">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-28 py-16 sm:py-24 lg:py-28"
              >
                <Container size="default">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    
                    {/* Content Column */}
                    <div
                      className={`space-y-6 sm:space-y-8 ${
                        isEven ? 'lg:col-span-6 lg:order-2' : 'lg:col-span-6 lg:order-1'
                      }`}
                    >
                      {/* Service Counter & Category */}
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-[var(--radius-subtle)] bg-neutral-900 text-white font-mono text-xs font-semibold">
                          {service.number}
                        </span>
                        <span className="text-xs font-mono tracking-widest text-[var(--color-accent)] uppercase font-semibold">
                          Capability Overview
                        </span>
                      </div>

                      {/* Title & Concise Explanation */}
                      <div className="space-y-3">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 leading-[1.15]">
                          {service.title}
                        </h2>
                        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                          {service.description}
                        </p>
                      </div>

                      {/* Who It Is For Box */}
                      <div className="p-4 sm:p-5 rounded-[var(--radius-default)] bg-white border border-neutral-200/90 shadow-2xs space-y-1.5">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                          Who It Is For
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                          {service.whoItIsFor}
                        </p>
                      </div>

                      {/* What We Can Build Capabilities */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold">
                            What We Can Build
                          </span>
                          <span className="text-[11px] text-neutral-400 font-mono">
                            Tailored to scope
                          </span>
                        </div>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 list-none p-0 m-0">
                          {service.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700"
                            >
                              <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                                <Check className="h-2.5 w-2.5" />
                              </span>
                              <span className="leading-snug">{cap}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-[11px] text-neutral-500 italic pt-1">
                          * Note: Project scopes are tailored — not every project includes every capability.
                        </p>
                      </div>

                      {/* Technologies Chips */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                          Technologies Involved
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-[var(--radius-subtle)] bg-neutral-100 text-neutral-700 border border-neutral-200 text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Action */}
                      <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-0.5">
                          <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
                            Scope &amp; Delivery
                          </span>
                          <p className="text-sm font-medium text-neutral-700">
                            Custom scoped per business requirements
                          </p>
                        </div>

                        <Button href="/contact" variant="primary" size="md" className="group shrink-0">
                          <span>Inquire About {service.shortTitle}</span>
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Button>
                      </div>
                    </div>

                    {/* Visual Preview Column */}
                    <div
                      className={`w-full ${
                        isEven ? 'lg:col-span-6 lg:order-1' : 'lg:col-span-6 lg:order-2'
                      }`}
                    >
                      <div className="relative group">
                        {/* Subtle background frame glow */}
                        <div className="absolute -inset-1 rounded-[var(--radius-default)] bg-gradient-to-r from-neutral-200/50 via-neutral-100/30 to-neutral-200/50 opacity-50 blur-xs transition-opacity" />
                        
                        <div className="relative">
                          <ServiceVisualPreview type={service.previewType} />
                        </div>
                      </div>
                    </div>

                  </div>
                </Container>
              </section>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/* SECTION 4: HOW WE WORK PROCESS (COMPACT FLOW)                 */}
        {/* ============================================================ */}
        <Section spacing="default" className="border-b border-[var(--color-border)]">
          <Container size="default">
            <div className="space-y-12">
              <div className="max-w-2xl space-y-3">
                <Eyebrow variant="accent">HOW WE WORK</Eyebrow>
                <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 leading-[1.15]">
                  A predictable, milestone-driven workflow.
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Direct developer contact at every stage from discovery through deployment.
                </p>
              </div>

              {/* 5-Step Process Sequence */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {PROCESS_STEPS.map((step) => (
                  <div
                    key={step.id}
                    className="p-5 rounded-[var(--radius-default)] bg-white border border-neutral-200/90 shadow-2xs space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 font-mono text-xs font-bold text-neutral-900">
                        {step.number}
                      </span>
                      <h3 className="text-sm font-bold tracking-tight text-neutral-950 uppercase">
                        {step.title}
                      </h3>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-neutral-100 flex items-center gap-1.5 text-[10px] font-mono text-neutral-400">
                      <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                      <span>Stage Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* ============================================================ */}
        {/* SECTION 6: FINAL CTA                                         */}
        {/* ============================================================ */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
