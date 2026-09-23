'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import DigitalNetwork from '@/components/ui/DigitalNetwork';
import { ArrowUpRight, ArrowRight, Compass, Terminal, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';

export default function AboutHero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const copyRef = useRef(null);
  const actionsRef = useRef(null);
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
          actionsRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          visualRef.current,
          { opacity: 0, scale: 0.98, y: 16 },
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
          
          {/* Left Column: Editorial Headline & Stance */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
              <Eyebrow variant="accent">ABOUT SUSTHIR DIGITAL</Eyebrow>
            </div>

            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 leading-[1.08] text-balance"
            >
              Built steady.
              <br />
              <span className="text-neutral-500 font-normal">Designed to move.</span>
            </h1>

            <p
              ref={copyRef}
              className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal text-balance max-w-2xl"
            >
              We build websites, ecommerce experiences and custom web applications for businesses that want a digital presence built around how they actually work.
            </p>

            {/* Action Group */}
            <div ref={actionsRef} className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="lg" className="group">
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button href="/work" variant="secondary" size="lg" className="group">
                <span>View Our Work</span>
                <ArrowRight className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Studio Identity Baseline */}
            <div className="pt-6 border-t border-neutral-200/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-500 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>Independent Studio</span>
              </span>
              <span>•</span>
              <span>Direct Engineering</span>
              <span>•</span>
              <span>Odisha, India · Remote Worldwide</span>
            </div>
          </div>

          {/* Right Column: Architectural Blueprint Card */}
          <div ref={visualRef} className="lg:col-span-5 w-full">
            <div className="relative rounded-[var(--radius-default)] bg-white border border-neutral-200/90 p-6 sm:p-7 shadow-xs space-y-6">
              
              {/* Studio Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <Compass className="h-4 w-4 text-[var(--color-accent)]" />
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-900">
                      SUSTHIR DIGITAL CHARTER
                    </span>
                  </div>
                  <p className="text-[11px] font-mono text-neutral-400">INDEX // 00-ST</p>
                </div>
                <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-[var(--radius-subtle)] font-medium">
                  ACTIVE PRACTICE
                </span>
              </div>

              {/* Architectural Grid Statement */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/80 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    FOUNDATIONAL APPROACH
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Direct collaboration without layers. Every project is planned, designed, and coded by hands-on practitioners who understand both user interface craft and underlying system architecture.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
                  <div className="p-3 rounded-[var(--radius-subtle)] bg-white border border-neutral-200/80 space-y-1">
                    <span className="text-[10px] text-neutral-400 block uppercase">ENGAGEMENT MODEL</span>
                    <span className="font-semibold text-neutral-900 block">Project-Specific</span>
                    <span className="text-[10px] text-neutral-500 block">Transparent scope</span>
                  </div>
                  <div className="p-3 rounded-[var(--radius-subtle)] bg-white border border-neutral-200/80 space-y-1">
                    <span className="text-[10px] text-neutral-400 block uppercase">CORE CODEBASE</span>
                    <span className="font-semibold text-neutral-900 block">Clean &amp; Owned</span>
                    <span className="text-[10px] text-neutral-500 block">Zero vendor lock</span>
                  </div>
                </div>
              </div>

              {/* Integrated Digital Network Signature */}
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
