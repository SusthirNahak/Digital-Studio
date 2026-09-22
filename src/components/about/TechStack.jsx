'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { Code2, Database, Layout, ShoppingCart, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STACK_CATEGORIES = [
  {
    id: 'WEBSITE',
    title: 'WEBSITE & CMS',
    icon: Layout,
    description: 'Corporate and content-driven web publishing architectures.',
    technologies: [
      { name: 'WordPress', type: 'Core CMS / Custom Themes' },
      { name: 'WooCommerce', type: 'Commerce Extension' },
      { name: 'ACF', type: 'Advanced Custom Fields Pro' },
      { name: 'Elementor', type: 'Visual Builder Architecture' },
    ],
  },
  {
    id: 'ECOMMERCE',
    title: 'ECOMMERCE',
    icon: ShoppingCart,
    description: 'Direct-to-consumer storefronts and frictionless cart flows.',
    technologies: [
      { name: 'Shopify', type: 'Storefront Platform' },
      { name: 'Liquid', type: 'Theme Template Engine' },
    ],
  },
  {
    id: 'APPLICATIONS',
    title: 'APPLICATIONS',
    icon: Code2,
    description: 'Modern reactive web applications and interactive client portals.',
    technologies: [
      { name: 'React', type: 'Component UI Architecture' },
      { name: 'Next.js', type: 'App Router / SSR & SSG' },
      { name: 'JavaScript', type: 'Modern ES6+ Runtime' },
    ],
  },
  {
    id: 'DATA & BACKEND',
    title: 'DATA & BACKEND',
    icon: Database,
    description: 'Structured data persistence, REST endpoints, and external service sync.',
    technologies: [
      { name: 'MySQL', type: 'Relational Database Engine' },
      { name: 'MongoDB', type: 'Document Store' },
      { name: 'APIs', type: 'RESTful Integration Protocols' },
    ],
  },
];

export default function TechStack() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.stack-category-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={sectionRef}
      spacing="generous"
      className="border-b border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <Container size="default">
        <div className="space-y-12">
          
          {/* Header row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-neutral-200/80">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <Eyebrow variant="accent">THE STACK</Eyebrow>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
                What we work with.
              </h2>
            </div>

            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Proven tools only • Zero framework clutter
            </p>
          </div>

          {/* Typographic Stack Grid (2x2 on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {STACK_CATEGORIES.map((cat) => {
              const IconComponent = cat.icon;

              return (
                <div
                  key={cat.id}
                  className="stack-category-card p-6 sm:p-8 rounded-[var(--radius-default)] bg-white border border-neutral-200 shadow-2xs hover:border-neutral-400 transition-all duration-200 flex flex-col justify-between space-y-6"
                >
                  {/* Category Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <div className="flex items-center gap-2.5 text-neutral-900">
                        <IconComponent className="h-4 w-4 text-[var(--color-accent)]" />
                        <span className="text-xs font-mono font-bold tracking-wider uppercase">
                          {cat.id}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400">
                        VERIFIED DISCIPLINE
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {cat.description}
                    </p>
                  </div>

                  {/* Typographic Technology List */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100">
                    {cat.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-2.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-neutral-300 transition-colors flex items-center justify-between group/tech"
                      >
                        <span className="text-sm font-semibold tracking-tight text-neutral-900 group-hover/tech:text-[var(--color-accent)] transition-colors">
                          {tech.name}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-500">
                          {tech.type}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Subtext Statement */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-500">
            <span>We select platforms that fit the client&apos;s operational capabilities, not our own preferences.</span>
            <span className="text-neutral-700 font-medium">Standards-compliant code</span>
          </div>

        </div>
      </Container>
    </Section>
  );
}
