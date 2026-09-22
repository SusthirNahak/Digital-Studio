'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ArrowUpRight, Check, MousePointer, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FeaturedProject() {
  const sectionRef = useRef(null);
  const frameRef = useRef(null);
  const infoRef = useRef(null);
  const cursorRef = useRef(null);

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

      // Subtle cursor movement simulation inside browser frame
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: 18,
          y: -12,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
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
              Corporate &amp; Editorial Architecture
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
            CASE STUDY 01 // BESPOKE THEME
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

                <div className="flex items-center gap-2 px-3 py-1 rounded-[var(--radius-subtle)] bg-white border border-neutral-200 text-xs font-mono text-neutral-600 shadow-2xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  <span>studio-platform.internal/corporate-journal</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                  <span>1440 × 900</span>
                  <span className="px-1.5 py-0.5 rounded-xs bg-neutral-200/60 text-neutral-600">WP 6.x</span>
                </div>
              </div>

              {/* Substantial Architectural Content Preview */}
              <div className="p-6 sm:p-8 lg:p-10 bg-white space-y-6 sm:space-y-8 relative">
                
                {/* Floating Editor Signal Cursor */}
                <div
                  ref={cursorRef}
                  className="hidden md:flex absolute top-20 right-12 z-20 items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-950 text-white text-[10px] font-mono shadow-md border border-neutral-800 pointer-events-none"
                >
                  <MousePointer className="h-3 w-3 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                  <span>ACF Block: Active</span>
                </div>

                {/* Editorial Masthead */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200/70">
                  <div className="flex items-center gap-3">
                    <span className="h-4 w-4 rounded-xs bg-neutral-950" />
                    <span className="text-sm font-bold tracking-tight text-neutral-950">
                      VENTURE PERSPECTIVES
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono">
                    <span className="hidden sm:inline hover:text-neutral-950 cursor-pointer">Research</span>
                    <span className="hidden sm:inline hover:text-neutral-950 cursor-pointer">Archive</span>
                    <span className="px-2.5 py-1 rounded-[var(--radius-subtle)] bg-neutral-900 text-white text-[11px] font-medium">
                      Executive Briefing
                    </span>
                  </div>
                </div>

                {/* Lead Headline & Category */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-[11px] font-semibold tracking-wider uppercase">
                      Enterprise Publishing
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">Published • Q3 Review</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-neutral-950 leading-tight">
                    Structured Editorial Architecture for High-Volume Business Content
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
                    Designed for marketing and research teams who need total autonomy over article structuring, data callouts, and lead captures without relying on developers for daily updates.
                  </p>
                </div>

                {/* Split Content Panels */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 pt-2">
                  
                  {/* Left: Article Excerpt & Callout */}
                  <div className="sm:col-span-7 p-4 sm:p-5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/80 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                      <span>Article Module</span>
                      <span className="text-[var(--color-accent)] font-semibold">Gutenberg Block</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-neutral-200 rounded-xs" />
                      <div className="h-2 w-5/6 bg-neutral-200 rounded-xs" />
                      <div className="h-2 w-4/5 bg-neutral-200 rounded-xs" />
                    </div>
                    {/* Pull Quote Box */}
                    <div className="p-3 bg-white border-l-2 border-[var(--color-accent)] rounded-r-xs space-y-1">
                      <p className="text-xs italic text-neutral-800 font-serif leading-snug">
                        &ldquo;Custom post types and field structures reduced publishing friction across all four regional divisions.&rdquo;
                      </p>
                      <span className="text-[10px] font-mono text-neutral-400 block">— Editorial Lead</span>
                    </div>
                  </div>

                  {/* Right: Dynamic Taxonomies & Downloads */}
                  <div className="sm:col-span-5 p-4 sm:p-5 rounded-[var(--radius-subtle)] bg-neutral-950 text-white space-y-3 border border-neutral-800">
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 pb-1 border-b border-neutral-800">
                      <span>ACF Custom Taxonomies</span>
                      <span className="text-emerald-400">Indexed</span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center py-1 border-b border-neutral-800/80">
                        <span className="text-neutral-300">Whitepaper PDF</span>
                        <span className="font-mono text-[10px] text-neutral-500">2.4 MB</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-neutral-800/80">
                        <span className="text-neutral-300">Quarterly Data Sheet</span>
                        <span className="font-mono text-[10px] text-neutral-500">CSV Stream</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-neutral-300">CRM Webhook Sync</span>
                        <span className="font-mono text-[10px] text-emerald-400">Connected</span>
                      </div>
                    </div>

                    <div className="pt-1">
                      <div className="w-full py-1.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent)] text-white text-[11px] font-medium text-center">
                        Instant Lead Capture Form
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom Technical Architecture Ribbon */}
                <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-neutral-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-neutral-800" />
                    <span>ACF Pro Fields · Clean Semantic HTML5</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-neutral-900 font-semibold">Sub-Second TTFB: 180ms</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Project Information (38% width on lg) */}
          <div ref={infoRef} className="lg:col-span-5 xl:col-span-4 space-y-6 order-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                <span>01</span>
                <span>/</span>
                <span>Corporate &amp; Editorial Website</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 leading-snug">
                Business Website Platform
              </h3>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                A structured, content-driven corporate website built with bespoke layout architecture, responsive performance, and an intuitive editorial editing experience for non-technical teams.
              </p>
            </div>

            {/* Spec Checklist */}
            <div className="space-y-2 pt-2 border-t border-neutral-200">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold block">
                Platform Specifications
              </span>
              <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Bespoke Gutenberg block system tailored to content models</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>ACF Pro integration for reliable structured data entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>Zero bloat — strict asset bundling and fast server caching</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                    <Check className="h-2.5 w-2.5" />
                  </span>
                  <span>SEO-first markup, semantic hierarchy &amp; Core Web Vitals targets</span>
                </li>
              </ul>
            </div>

            {/* Technology Chips */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                Technologies
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['WordPress', 'ACF Pro', 'Tailwind CSS', 'PHP', 'SEO Architecture'].map((tech) => (
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
            <div className="pt-4 border-t border-neutral-200">
              <Button href="/contact" variant="primary" size="md" className="group">
                <span>Discuss a Similar Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
