'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { PRICING_ITEMS } from '@/data/pricing';
import { PROCESS_STEPS } from '@/data/process';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Refs for pinned process timeline
  const processPinTriggerRef = useRef(null);
  const processTrackRef = useRef(null);
  const processLineFillRef = useRef(null);
  const processSignalDotRef = useRef(null);
  const stepsContainerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Scope GSAP context to the component's root or pin ref
    const ctx = gsap.context(() => {
      // Apply pinning & traveling signal only on desktop (min-width: 1024px)
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
      if (!isDesktop) return;

      const pinTrigger = processPinTriggerRef.current;
      const track = processTrackRef.current;
      const lineFill = processLineFillRef.current;
      const signalDot = processSignalDotRef.current;

      if (!pinTrigger || !track) return;

      // Master scroll timeline with pinned process interaction
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinTrigger,
          start: 'top 18%',
          end: '+=1200',
          pin: true,
          pinSpacing: true,
          scrub: 0.3,
          anticipatePin: 1,
          onUpdate: (self) => {
            // Map progress [0, 1] into active step index [0, 4]
            // Steps at 0 (0%), 1 (25%), 2 (50%), 3 (75%), 4 (100%)
            const p = self.progress;
            let currentIdx = 0;
            if (p >= 0.85) currentIdx = 4;
            else if (p >= 0.62) currentIdx = 3;
            else if (p >= 0.38) currentIdx = 2;
            else if (p >= 0.15) currentIdx = 1;
            else currentIdx = 0;

            setActiveStepIndex((prev) => (prev !== currentIdx ? currentIdx : prev));
          },
        },
      });

      // 1. Blue progress line scrub across the horizontal track (0% to 100%)
      if (lineFill) {
        tl.fromTo(
          lineFill,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, ease: 'none' },
          0
        );
      }

      // 2. Moving traveling blue signal dot along track (0% to 100% position)
      if (signalDot) {
        tl.fromTo(
          signalDot,
          { left: '0%', opacity: 0.7 },
          { left: '100%', opacity: 1, ease: 'none' },
          0
        );
      }
    }, processPinTriggerRef);

    // Guaranteed revert of all animations, ScrollTrigger instances, and DOM pinned states on unmount
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <Section id="pricing" spacing="generous" className="bg-[var(--color-bg)] border-b border-[var(--color-border-subtle)]">
      <Container size="default">
        
        {/* ============================================================ */}
        {/* PART 1: EDITORIAL PRICING (STARTING POINTS)                   */}
        {/* ============================================================ */}
        <div className="space-y-10 sm:space-y-12">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-4">
            <Eyebrow variant="accent">Starting Points</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] text-balance">
              Clear starting points. Custom scope.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              Starting prices help set realistic expectations. Final pricing is scoped transparently based on your design requirements, integrations, and functional depth.
            </p>
          </div>

          {/* Editorial Pricing List with refined hover interaction */}
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {PRICING_ITEMS.map((item) => (
              <div
                key={item.id}
                tabIndex={0}
                className="group relative py-6 sm:py-8 transition-all duration-200 hover:bg-[var(--color-surface-subtle)]/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-[var(--radius-default)] focus-visible:outline-none cursor-default"
              >
                {/* Active blue indicator marker */}
                <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 hidden sm:block" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
                  
                  {/* Service Title & Scope */}
                  <div className="md:w-5/12 space-y-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 tracking-tight group-hover:text-[var(--color-accent)] group-focus-visible:text-[var(--color-accent)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Starting Price Figure with subtle hover shift */}
                  <div className="md:w-3/12 flex items-baseline">
                    <span className="text-2xl sm:text-3xl font-semibold text-neutral-900 font-mono tracking-tight transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1">
                      {item.startingPrice}
                    </span>
                  </div>

                  {/* Contextual CTA */}
                  <div className="md:w-4/12 flex md:justify-end">
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-800 group-hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xs transition-colors"
                    >
                      <span>Inquire About {item.title}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Pricing Disclaimer & Inquiry Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <p className="text-xs text-neutral-500 max-w-xl">
              * Starting prices reflect base builds. Every project is scoped individually with no hidden fees or surprise scope creep.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-neutral-900 hover:text-[var(--color-accent)] transition-colors select-none group"
            >
              <span>Not sure which option fits? Tell us about your project</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>

        {/* ============================================================ */}
        {/* PART 2: 5-STEP HOW WE WORK PROCESS TIMELINE (PINNED PIPELINE) */}
        {/* ============================================================ */}
        <div
          ref={processPinTriggerRef}
          className="mt-24 sm:mt-32 pt-16 sm:pt-20 border-t border-[var(--color-border)] space-y-10 sm:space-y-14"
        >
          
          {/* Process Header with Dynamic Process Step Indicator */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-4">
              <Eyebrow variant="accent">How We Work</Eyebrow>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] text-balance">
                Simple process. Clear communication.
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                Direct developer contact at every stage from initial architecture through final deployment.
              </p>
            </div>

            {/* Monospace Active Step Progress Counter */}
            <div className="shrink-0 flex items-center gap-2.5 px-3 py-1.5 rounded-[var(--radius-subtle)] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <span className="text-xs font-mono font-semibold tracking-wider text-neutral-800 uppercase">
                Process {String(activeStepIndex + 1).padStart(2, '0')} / 05
              </span>
            </div>
          </div>

          {/* Process Timeline Pipeline */}
          <div ref={stepsContainerRef} className="relative pt-4 pb-2">
            
            {/* Desktop Horizontal Line Architecture */}
            <div
              ref={processTrackRef}
              aria-hidden="true"
              className="hidden lg:block relative h-12 mb-6"
            >
              {/* Neutral Base Track (Centered vertically across step numbers) */}
              <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[1px] bg-neutral-200" />
              
              {/* Blue Progress Line scrubbed directly with scroll */}
              <div
                ref={processLineFillRef}
                className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[2px] bg-[var(--color-accent)] will-change-transform"
                style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }}
              />

              {/* Traveling Blue Signal Dot moving across track 01 -> 05 */}
              <div
                ref={processSignalDotRef}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none will-change-transform"
                style={{ left: '0%' }}
              >
                <div className="relative flex items-center justify-center">
                  <span className="h-3 w-3 rounded-full bg-[var(--color-accent)] shadow-xs" />
                  <span className="absolute h-5 w-5 rounded-full border border-[var(--color-accent)] opacity-40 animate-ping" />
                </div>
              </div>
            </div>

            {/* 5-Step List */}
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 list-none p-0 m-0">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = activeStepIndex === index;
                const isPast = activeStepIndex > index;

                return (
                  <li
                    key={step.id}
                    className={`group relative space-y-3 pt-2 lg:pt-0 transition-all duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-65 hover:opacity-90'
                    }`}
                  >
                    {/* Step Marker (Interactive Number Box) */}
                    <div className="flex items-center gap-3 lg:block">
                      <div
                        className={`relative z-10 inline-flex items-center justify-center h-11 w-11 sm:h-12 sm:w-12 rounded-[var(--radius-subtle)] font-mono text-sm font-semibold transition-all duration-300 shadow-2xs ${
                          isActive
                            ? 'bg-neutral-950 text-white border-2 border-[var(--color-accent)] scale-105 shadow-sm'
                            : isPast
                            ? 'bg-[var(--color-surface)] text-[var(--color-accent)] border border-[var(--color-accent)]/50'
                            : 'bg-[var(--color-surface)] text-neutral-900 border border-neutral-300'
                        }`}
                      >
                        {step.number}
                        
                        {/* Tiny blue halo/marker when active */}
                        {isActive && (
                          <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                        )}
                      </div>

                      {/* Mobile-only title next to number */}
                      <div className="lg:hidden flex items-center gap-2">
                        <span
                          className={`text-base font-semibold tracking-tight uppercase transition-colors ${
                            isActive ? 'text-neutral-950 font-bold' : 'text-neutral-700'
                          }`}
                        >
                          {step.title}
                        </span>
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        )}
                      </div>
                    </div>

                    {/* Step Content: Smooth Editorial Shift on Active */}
                    <div
                      className={`space-y-1.5 lg:pt-2 transition-all duration-300 ${
                        isActive ? 'lg:-translate-y-1' : ''
                      }`}
                    >
                      {/* Desktop Title */}
                      <div className="hidden lg:flex items-center gap-2">
                        <h3
                          className={`text-base font-semibold tracking-tight uppercase transition-colors duration-200 ${
                            isActive
                              ? 'text-neutral-950 font-bold text-base'
                              : 'text-neutral-600 group-hover:text-neutral-900'
                          }`}
                        >
                          {step.title}
                        </h3>
                        <span
                          className={`h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] transition-opacity duration-200 ${
                            isActive ? 'opacity-100' : 'opacity-0'
                          }`}
                        />
                      </div>

                      {/* Description */}
                      <p
                        className={`text-xs sm:text-sm leading-relaxed transition-colors duration-200 ${
                          isActive
                            ? 'text-neutral-800 font-medium'
                            : 'text-neutral-500'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

        </div>

      </Container>
    </Section>
  );
}

