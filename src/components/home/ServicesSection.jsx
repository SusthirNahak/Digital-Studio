'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { SERVICES } from '@/data/services';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Conceptual Architectural Visual States (CSS/SVG)
function ServicePreview({ type }) {
  switch (type) {
    case 'website':
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <div className="h-3 w-20 bg-neutral-900 rounded-xs" />
            <div className="flex gap-2">
              <div className="h-2 w-8 bg-neutral-300 rounded-xs" />
              <div className="h-2 w-8 bg-neutral-300 rounded-xs" />
              <div className="h-2 w-10 bg-neutral-900 rounded-xs" />
            </div>
          </div>
          <div className="space-y-2.5">
            <div className="h-2.5 w-16 bg-[var(--color-accent)] rounded-xs" />
            <div className="h-6 w-5/6 bg-neutral-900 rounded-xs" />
            <div className="h-2.5 w-full bg-neutral-300 rounded-xs" />
            <div className="h-2.5 w-4/5 bg-neutral-200 rounded-xs" />
          </div>
          <div className="grid grid-cols-3 gap-2.5 pt-2">
            <div className="p-2.5 bg-white border border-neutral-200 rounded-xs space-y-1.5">
              <div className="h-2 w-8 bg-neutral-400 rounded-xs" />
              <div className="h-2 w-full bg-neutral-200 rounded-xs" />
            </div>
            <div className="p-2.5 bg-white border border-neutral-200 rounded-xs space-y-1.5">
              <div className="h-2 w-8 bg-neutral-400 rounded-xs" />
              <div className="h-2 w-full bg-neutral-200 rounded-xs" />
            </div>
            <div className="p-2.5 bg-white border border-neutral-200 rounded-xs space-y-1.5">
              <div className="h-2 w-8 bg-neutral-400 rounded-xs" />
              <div className="h-2 w-full bg-neutral-200 rounded-xs" />
            </div>
          </div>
        </div>
      );

    case 'ecommerce':
      return (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
            <div className="h-3 w-16 bg-neutral-900 rounded-xs" />
            <div className="h-4 w-12 bg-neutral-200 rounded-xs" />
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            <div className="p-2 bg-white border border-neutral-200 rounded-xs space-y-1.5">
              <div className="h-16 bg-neutral-100 rounded-xs" />
              <div className="h-2 w-12 bg-neutral-800 rounded-xs" />
              <div className="h-2 w-6 bg-neutral-400 rounded-xs" />
            </div>
            <div className="p-2 bg-white border border-neutral-200 rounded-xs space-y-1.5">
              <div className="h-16 bg-neutral-100 rounded-xs" />
              <div className="h-2 w-12 bg-neutral-800 rounded-xs" />
              <div className="h-2 w-6 bg-neutral-400 rounded-xs" />
            </div>
            <div className="p-2 bg-white border border-neutral-200 rounded-xs space-y-1.5">
              <div className="h-16 bg-neutral-100 rounded-xs" />
              <div className="h-2 w-12 bg-neutral-800 rounded-xs" />
              <div className="h-2 w-6 bg-neutral-400 rounded-xs" />
            </div>
          </div>
          <div className="p-2.5 bg-neutral-900 text-white rounded-xs flex items-center justify-between text-xs">
            <div className="h-2 w-20 bg-neutral-500 rounded-xs" />
            <div className="h-4 w-16 bg-white rounded-xs" />
          </div>
        </div>
      );

    case 'app':
      return (
        <div className="space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-neutral-400" />
              <span className="h-2 w-2 rounded-full bg-neutral-400" />
            </div>
            <div className="h-3 w-20 bg-neutral-200 rounded-xs" />
          </div>
          <div className="grid grid-cols-12 gap-2.5">
            <div className="col-span-4 p-2 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1.5">
              <div className="h-2 w-8 bg-neutral-400 rounded-xs" />
              <div className="h-2 w-full bg-neutral-200 rounded-xs" />
              <div className="h-2 w-3/4 bg-neutral-200 rounded-xs" />
            </div>
            <div className="col-span-8 p-2 bg-white border border-neutral-200 rounded-xs space-y-2">
              <div className="flex justify-between items-center">
                <div className="h-2 w-14 bg-neutral-800 rounded-xs" />
                <div className="h-2 w-6 bg-emerald-500 rounded-xs" />
              </div>
              <div className="h-12 bg-neutral-50 border border-neutral-100 rounded-xs" />
            </div>
          </div>
          <div className="p-2 bg-white border border-neutral-200 rounded-xs flex justify-between items-center">
            <div className="h-2 w-24 bg-neutral-300 rounded-xs" />
            <div className="h-2 w-10 bg-[var(--color-accent)] rounded-xs" />
          </div>
        </div>
      );

    case 'dashboard':
      return (
        <div className="space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
            <div className="h-3 w-24 bg-neutral-900 rounded-xs" />
            <div className="h-3 w-8 bg-neutral-300 rounded-xs" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 bg-white border border-neutral-200 rounded-xs space-y-1">
              <div className="h-2 w-12 bg-neutral-400 rounded-xs" />
              <div className="h-4 w-16 bg-neutral-900 rounded-xs" />
            </div>
            <div className="p-2.5 bg-white border border-neutral-200 rounded-xs space-y-1">
              <div className="h-2 w-12 bg-neutral-400 rounded-xs" />
              <div className="h-4 w-16 bg-[var(--color-accent)] rounded-xs" />
            </div>
          </div>
          <div className="p-2.5 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1.5">
            <div className="h-2 w-20 bg-neutral-400 rounded-xs" />
            <div className="h-2 w-full bg-neutral-200 rounded-xs" />
            <div className="h-2 w-4/5 bg-neutral-200 rounded-xs" />
          </div>
        </div>
      );

    case 'landing':
      return (
        <div className="space-y-3.5 text-center">
          <div className="flex items-center justify-between pb-2 border-b border-neutral-200 text-left">
            <div className="h-3 w-16 bg-neutral-900 rounded-xs" />
            <div className="h-4 w-14 bg-neutral-900 rounded-xs" />
          </div>
          <div className="py-3 px-4 bg-white border border-neutral-200 rounded-xs space-y-2">
            <div className="mx-auto h-2 w-12 bg-[var(--color-accent)] rounded-xs" />
            <div className="mx-auto h-5 w-4/5 bg-neutral-900 rounded-xs" />
            <div className="mx-auto h-2 w-3/5 bg-neutral-300 rounded-xs" />
            <div className="mx-auto pt-1 h-5 w-20 bg-neutral-900 rounded-xs" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1">
              <div className="h-2 w-full bg-neutral-300 rounded-xs" />
            </div>
            <div className="p-2 bg-neutral-50 border border-neutral-200 rounded-xs space-y-1">
              <div className="h-2 w-full bg-neutral-300 rounded-xs" />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const activeService = SERVICES[activeIndex] || SERVICES[0];

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Only apply scroll triggers for desktop (screens >= 1024px)
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      itemsRef.current.forEach((itemEl, idx) => {
        if (!itemEl) return;

        ScrollTrigger.create({
          trigger: itemEl,
          start: 'top center+=100',
          end: 'bottom center',
          onEnter: () => setActiveIndex(idx),
          onEnterBack: () => setActiveIndex(idx),
        });

        // Subtle editorial fold / slide interaction for each item
        gsap.fromTo(
          itemEl,
          { opacity: 0.45, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: itemEl,
              start: 'top 85%',
              end: 'top 50%',
              scrub: 0.5,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="services" spacing="generous" className="bg-[var(--color-bg)] border-b border-[var(--color-border-subtle)]">
      <Container size="default">
        {/* Section Intro Block */}
        <div className="max-w-3xl space-y-4 mb-14 sm:mb-20">
          <Eyebrow variant="accent">What We Build</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] text-balance">
            Digital experiences built around your business.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
            From business websites and ecommerce stores to custom web applications, we build digital experiences around the way your business actually works.
          </p>
        </div>

        {/* Scroll-Driven Editorial Layout: Left Content (45%) / Right Sticky Preview (55%) */}
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
          
          {/* Services Content Column */}
          <div className="lg:col-span-6 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {SERVICES.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <article
                  key={service.id}
                  ref={(el) => (itemsRef.current[index] = el)}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  tabIndex={0}
                  className={`group relative py-8 sm:py-10 transition-all duration-300 focus-visible:outline-none ${
                    isActive
                      ? 'bg-[var(--color-surface-subtle)]/60 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-[var(--radius-default)] shadow-2xs'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Subtle active blue accent indicator */}
                  <div
                    className={`absolute left-0 top-8 bottom-8 w-[2px] bg-[var(--color-accent)] transition-opacity duration-300 hidden sm:block ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
                    {/* Index Number */}
                    <span
                      className={`font-mono text-sm sm:text-base font-semibold transition-colors duration-200 select-none ${
                        isActive ? 'text-[var(--color-accent)] font-bold' : 'text-neutral-400'
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Content Column */}
                    <div className="flex-1 space-y-3">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3
                          className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-200 ${
                            isActive ? 'text-neutral-950 font-bold' : 'text-neutral-900 group-hover:text-[var(--color-accent)]'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-xl">
                        {service.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono text-neutral-600 bg-white border border-neutral-200 px-2.5 py-0.5 rounded-[var(--radius-subtle)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Mobile In-Line Visual Preview (Ensures mobile does not depend on desktop sticky frame) */}
                      <div className="block lg:hidden pt-4">
                        <div className="p-4 rounded-[var(--radius-subtle)] bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)]">
                          <ServicePreview type={service.previewType} />
                        </div>
                      </div>

                      {/* Service Action Link */}
                      <div className="pt-2">
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 group-hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xs transition-colors"
                        >
                          <span>Inquire for {service.shortTitle}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Sticky Desktop Architectural Preview Dock (55% / 6 columns) */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <div className="rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs p-7 space-y-6 transition-all duration-300">
              
              {/* Preview Dock Header with Progress Bar */}
              <div className="space-y-3 pb-3 border-b border-[var(--color-border-subtle)]">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                      Service Preview · {activeService.number} / 05
                    </span>
                    <p className="text-base font-semibold text-neutral-900">{activeService.title}</p>
                  </div>
                  <span className="text-[11px] font-mono font-medium text-neutral-600 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded">
                    TAILORED SCOPE
                  </span>
                </div>

                {/* Progress bar across 5 service steps */}
                <div className="grid grid-cols-5 gap-1.5 h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                  {SERVICES.map((_, i) => (
                    <div
                      key={i}
                      className={`h-full transition-colors duration-300 ${
                        i <= activeIndex ? 'bg-[var(--color-accent)]' : 'bg-neutral-200'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Dynamic CSS Architectural Wireframe Transition Frame */}
              <div className="p-5 rounded-[var(--radius-subtle)] bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)] min-h-[220px] flex items-center justify-center transition-all duration-200">
                <div className="w-full">
                  <ServicePreview type={activeService.previewType} />
                </div>
              </div>

              {/* Stack & Delivery Note */}
              <div className="space-y-2 text-xs text-neutral-600">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>DEPLOYMENT ARCHITECTURE</span>
                  <span className="text-emerald-600 font-semibold">PRODUCTION READY</span>
                </div>
                <p className="leading-relaxed">
                  Bespoke code structure, clean modular components, and direct engineering guidance from discovery to deployment.
                </p>
              </div>

              {/* Direct CTA */}
              <div className="pt-2 border-t border-[var(--color-border-subtle)]">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-neutral-900 bg-neutral-100 hover:bg-neutral-900 hover:text-white rounded-[var(--radius-default)] transition-colors"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
