'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import DigitalNetwork from '@/components/ui/DigitalNetwork';
import { ArrowUpRight, ArrowRight, Code2, Layers, Cpu } from 'lucide-react';
import gsap from 'gsap';

export default function WorkHero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const copyRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.97, y: 16 },
          { opacity: 1, scale: 1, y: 0, duration: 0.8 },
          '-=0.5'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={heroRef}
      spacing="generous"
      className="border-b border-[var(--color-border)] relative overflow-hidden bg-[var(--color-bg)]"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <Eyebrow variant="accent">SELECTED WORK</Eyebrow>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 leading-[1.08] text-balance"
            >
              Digital experiences built to move businesses forward.
            </h1>

            <p
              ref={copyRef}
              className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal text-balance max-w-2xl"
            >
              Selected work built across websites, ecommerce and web applications.
            </p>

            {/* Action Row */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg" className="group">
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button href="/services" variant="secondary" size="lg" className="group">
                <span>View Services</span>
                <ArrowRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Factual Spec Indicators */}
            <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Production Work Only</span>
              </span>
              <span>•</span>
              <span>No Fabricated Case Studies</span>
              <span>•</span>
              <span>Engineered for Reliability</span>
            </div>
          </div>

          {/* Right Column: Architectural Studio Telemetry Visual */}
          <div ref={visualRef} className="lg:col-span-5 w-full">
            <div className="relative rounded-[var(--radius-default)] bg-white border border-neutral-200/90 p-5 sm:p-6 shadow-xs space-y-4">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
                    Susthir Digital Portfolio
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-[var(--radius-subtle)]">
                  ACTIVE PIPELINE
                </span>
              </div>

              {/* Discipline Breakdown Grid */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-2.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/70 text-xs">
                  <div className="flex items-center gap-2.5 text-neutral-800">
                    <Layers className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                    <div>
                      <span className="font-semibold block leading-tight">WordPress & Editorial CMS</span>
                      <span className="text-[10px] text-neutral-500 font-mono">ACF Pro · Custom Blocks</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-600 font-medium">B2B & Editorial</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/70 text-xs">
                  <div className="flex items-center gap-2.5 text-neutral-800">
                    <Cpu className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                    <div>
                      <span className="font-semibold block leading-tight">Shopify Commerce Architecture</span>
                      <span className="text-[10px] text-neutral-500 font-mono">Liquid · Cart Flow · Checkout</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-600 font-medium">Storefronts</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/70 text-xs">
                  <div className="flex items-center gap-2.5 text-neutral-800">
                    <Code2 className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                    <div>
                      <span className="font-semibold block leading-tight">Next.js & Custom Applications</span>
                      <span className="text-[10px] text-neutral-500 font-mono">App Router · APIs · RBAC Auth</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-600 font-medium">Portals</span>
                </div>
              </div>

              {/* Integrated Studio Network Signature */}
              <div className="pt-2 border-t border-neutral-100 flex justify-center">
                <DigitalNetwork />
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
