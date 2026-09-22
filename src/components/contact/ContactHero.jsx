'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { Terminal, ShieldCheck, CheckCircle2, ArrowDown } from 'lucide-react';
import gsap from 'gsap';

export default function ContactHero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const copyRef = useRef(null);
  const telemetryRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          copyRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          telemetryRef.current,
          { opacity: 0, y: 20, scale: 0.99 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          '-=0.3'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section
      ref={heroRef}
      spacing="generous"
      className="border-b border-[var(--color-border)] bg-[var(--color-bg)] relative overflow-hidden"
    >
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <Eyebrow variant="accent">START A PROJECT</Eyebrow>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 leading-[1.08] text-balance"
            >
              Have a project in mind?
            </h1>

            <p
              ref={copyRef}
              className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal text-balance max-w-2xl"
            >
              Tell us what you&apos;re building, what you need, and where you want to take it. We&apos;ll use the details to understand the project before discussing scope.
            </p>

            {/* Factual intake stance */}
            <div className="pt-4 border-t border-neutral-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 font-mono">
              <span className="flex items-center gap-1.5 text-neutral-700">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                <span>Founder-level review</span>
              </span>
              <span>•</span>
              <span>Fixed or milestone scope</span>
              <span>•</span>
              <span>Pan-India &amp; Global Remote</span>
            </div>
          </div>

          {/* Right Column: Architectural Project-Intake Telemetry Panel */}
          <div ref={telemetryRef} className="lg:col-span-5 w-full">
            <div className="rounded-[var(--radius-default)] bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-xs space-y-5">
              
              {/* Header Telemetry Strip */}
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[var(--color-accent)]" />
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
                    PROJECT INTAKE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-[var(--radius-subtle)]">
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Architectural Parameters Grid */}
              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/70 space-y-1">
                  <span className="text-[10px] uppercase text-neutral-400 font-semibold block">
                    PROJECT INTAKE // PRIMARY TRACKS
                  </span>
                  <span className="font-semibold text-neutral-900 block text-xs">
                    WEBSITE / ECOMMERCE / APPLICATION
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-[var(--radius-subtle)] bg-neutral-50/70 border border-neutral-200/60 space-y-0.5">
                    <span className="text-[10px] text-neutral-400 block uppercase">SCOPE</span>
                    <span className="text-xs font-medium text-neutral-800 block">Defined upfront</span>
                  </div>
                  <div className="p-2.5 rounded-[var(--radius-subtle)] bg-neutral-50/70 border border-neutral-200/60 space-y-0.5">
                    <span className="text-[10px] text-neutral-400 block uppercase">TIMELINE</span>
                    <span className="text-xs font-medium text-neutral-800 block">Milestone dates</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-[var(--radius-subtle)] bg-neutral-50/70 border border-neutral-200/60 space-y-0.5">
                    <span className="text-[10px] text-neutral-400 block uppercase">BUDGET</span>
                    <span className="text-xs font-medium text-neutral-800 block">Clear estimate</span>
                  </div>
                  <div className="p-2.5 rounded-[var(--radius-subtle)] bg-neutral-50/70 border border-neutral-200/60 space-y-0.5">
                    <span className="text-[10px] text-neutral-400 block uppercase">NEXT STEP</span>
                    <span className="text-xs font-medium text-neutral-800 block">Direct discussion</span>
                  </div>
                </div>
              </div>

              {/* Sub-note */}
              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>INDEX // INTAKE-01</span>
                <span className="text-neutral-700">Direct studio dispatch</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
