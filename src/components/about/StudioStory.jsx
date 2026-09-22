'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { Layers, Terminal, Sparkles, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StudioStory() {
  const sectionRef = useRef(null);
  const textColRef = useRef(null);
  const noteColRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textColRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textColRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        noteColRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: noteColRef.current,
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Narrative */}
          <div ref={textColRef} className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <Eyebrow variant="accent">STUDIO PHILOSOPHY</Eyebrow>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950 leading-tight">
                A small studio.
                <br />
                Serious digital work.
              </h2>
            </div>

            <div className="space-y-5 text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              <p className="text-neutral-900 font-medium text-lg sm:text-xl leading-relaxed">
                We believe good digital work should be clear, useful and built to last.
              </p>

              <p>
                Instead of forcing every business into the same template, we start by understanding the business, its customers and what the website or application actually needs to accomplish.
              </p>

              <p>
                We combine design, development and practical business thinking to build websites and digital products that are easy to understand and built around real requirements.
              </p>
            </div>

            {/* Editorial Highlights */}
            <div className="pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold block">
                  PRACTICAL FOCUS
                </span>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  We don&apos;t build complexity for its own sake. Features must earn their place through measurable business utility.
                </p>
              </div>

              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold block">
                  ENGINEERED STABILITY
                </span>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Code written to be inspected, understood, and maintained by anyone years after launch.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Note / Manifesto Plate */}
          <div ref={noteColRef} className="lg:col-span-5">
            <div className="p-7 sm:p-9 rounded-[var(--radius-default)] bg-white border border-neutral-200 shadow-xs space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
                  WORKING PRINCIPLES
                </span>
                <span className="text-[10px] font-mono text-neutral-400">NOTE 01</span>
              </div>

              <blockquote className="space-y-4">
                <p className="text-base sm:text-lg font-serif italic text-neutral-900 leading-relaxed">
                  &ldquo;A website should make your business simpler to understand, not more complicated to run.&rdquo;
                </p>
                <div className="text-xs font-mono text-neutral-500">
                  — Digital Studio Thesis
                </div>
              </blockquote>

              <div className="space-y-3 pt-4 border-t border-neutral-100 text-xs sm:text-sm text-neutral-700">
                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Every project receives direct founder-level engineering focus.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Direct communication throughout the build with no account management buffer.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Deliverables are tested across real mobile viewports and production environments.</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
