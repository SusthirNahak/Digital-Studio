'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ArrowUpRight, Check, ExternalLink, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedProject() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Browser Frame scroll entrance
      gsap.fromTo(
        frameRef.current,
        { opacity: 0.85, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: frameRef.current,
            start: 'top 85%',
            end: 'top 50%',
            scrub: 0.4,
          },
        }
      );

      // Info column reveal
      gsap.fromTo(
        infoRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
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
      className="border-b border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-10 sm:pb-14 border-b border-neutral-200/80">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              <Eyebrow variant="accent">FEATURED PROJECT</Eyebrow>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
              Pflege Bergstraße
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            CASE STUDY 01 // HEALTHCARE PLATFORM
          </span>
        </div>

        {/* Asymmetric 62% / 38% Featured Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-10 sm:pt-14">
          
          {/* Large Visual Preview (62% width on lg) */}
          <div className="lg:col-span-7 xl:col-span-8 order-1">
            <div
              ref={frameRef}
              className="group relative rounded-[var(--radius-default)] bg-white border border-[var(--color-border)] shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-neutral-400 select-none"
            >
              {/* Premium Browser Chrome */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/90 border-b border-neutral-200">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 group-hover:bg-red-400 transition-colors" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 group-hover:bg-amber-400 transition-colors" />
                  <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 group-hover:bg-emerald-400 transition-colors" />
                </div>

                <a
                  href="https://pflege-bergstrasse.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 rounded-[var(--radius-subtle)] bg-white border border-neutral-200 text-xs font-mono text-neutral-600 hover:text-[var(--color-accent)] transition-colors shadow-2xs"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>pflege-bergstrasse.de</span>
                </a>

                <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                  <Globe className="h-3 w-3" />
                  <span>Germany</span>
                  <span className="px-1.5 py-0.5 rounded-xs bg-neutral-200/60 text-neutral-600">WordPress</span>
                </div>
              </div>

              {/* Real Project Interface Screenshot Viewport */}
              <a
                href="https://pflege-bergstrasse.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden cursor-pointer"
                aria-label="Open Pflege Bergstraße live website"
              >
                <Image
                  src="/assets/projects/pflege-bergstrasse/cover.webp"
                  alt="Pflege Bergstraße live website interface"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 900px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
                  priority
                />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-subtle)] bg-neutral-950/85 backdrop-blur-xs text-white text-xs font-mono font-medium shadow-sm">
                    <span>Visit Live Website</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Project Information (38% width on lg) */}
          <div ref={infoRef} className="lg:col-span-5 xl:col-span-4 space-y-6 order-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                <span>01</span>
                <span>/</span>
                <span>Healthcare &amp; Nursing Services</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 leading-snug">
                Pflege Bergstraße
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                Digital platform for an ambulatory outpatient care and nursing service provider located in the Bergstraße region of Germany, built on WordPress with structured inquiry and consultation pathways.
              </p>
            </div>

            {/* Spec Checklist */}
            <div className="space-y-2 pt-2 border-t border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold block">
                Platform Architecture
              </span>
              <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Custom WordPress theme architecture tailored to German healthcare services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Structured care levels (Grundpflege, Behandlungspflege, Hauswirtschaft)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Responsive consultations and career application entry points</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Semantic markup and localized content layout</span>
                </li>
              </ul>
            </div>

            {/* Technology Chips */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                Technologies &amp; Scope
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['WordPress', 'Custom Theme', 'PHP', 'Healthcare Architecture', 'Germany'].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center gap-3">
              <a
                href="https://pflege-bergstrasse.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-subtle)] bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-2xs"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <Button href="/contact" variant="secondary" size="sm" className="group">
                <span>Discuss a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
