'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { ArrowRight, Check, Compass, GitCommit, Layers, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECT_TRACKS = [
  {
    type: 'Business Website',
    scope: 'Focused build and fast launch',
    description:
      'Structured pages, clear messaging hierarchy, bespoke blocks, and rapid production deployment.',
  },
  {
    type: 'Ecommerce Storefront',
    scope: 'Storefront customization & catalog integrations',
    description:
      'Product model design, cart flow optimization, third-party payment gateways, and checkout reliability.',
  },
  {
    type: 'Custom Application',
    scope: 'Requirements, architecture, UI, dev & testing',
    description:
      'Detailed data schemas, role-based authentication, reactive user interfaces, and automated workflows.',
  },
];

export default function StudioApproach() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.approach-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
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
      className="border-b border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <Container size="default">
        <div className="space-y-16 sm:space-y-20">
          
          {/* ============================================================ */}
          {/* SECTION 7: INDEPENDENT STUDIO POSITIONING STATEMENT         */}
          {/* ============================================================ */}
          <div className="p-8 sm:p-12 lg:p-16 rounded-[var(--radius-default)] bg-neutral-950 text-white relative overflow-hidden border border-neutral-800 shadow-xl">
            <div className="max-w-3xl space-y-6 relative z-10">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <Eyebrow variant="accent">SUSTHIR DIGITAL MODEL</Eyebrow>
              </div>

              <blockquote className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.12] text-balance">
                  &ldquo;Small enough to stay close to the work.
                  <br />
                  <span className="text-neutral-400 font-normal">
                    Experienced enough to understand the details.&rdquo;
                  </span>
                </h2>
              </blockquote>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal pt-2">
                Working directly with Susthir Digital brings clear advantages: direct communication with the person writing your code, fewer bureaucratic handoffs, practical technical decisions, and total accountability from start to finish.
              </p>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-neutral-800 text-xs font-mono text-neutral-300">
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">COMMUNICATION</span>
                  <span className="font-semibold text-white">Direct &amp; Personal</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">DECISION MAKING</span>
                  <span className="font-semibold text-white">Fewer Layers</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">INVOLVEMENT</span>
                  <span className="font-semibold text-white">Hands-on Code</span>
                </div>
                <div>
                  <span className="text-[10px] text-neutral-500 uppercase block">ENGAGEMENT</span>
                  <span className="font-semibold text-white">Flexible Scope</span>
                </div>
              </div>
            </div>

            {/* Subtle background graphic */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />
          </div>

          {/* ============================================================ */}
          {/* SECTION 6: HOW WE WORK WITH CLIENTS                         */}
          {/* ============================================================ */}
          <div className="space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-200/80">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                  <Eyebrow variant="accent">BUILT AROUND THE PROJECT</Eyebrow>
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                  We adapt the process to the project.
                </h3>
              </div>
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                Tailored Engagements • Project-Specific Scopes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECT_TRACKS.map((track, i) => (
                <div
                  key={track.type}
                  className="approach-card p-6 sm:p-7 rounded-[var(--radius-default)] bg-white border border-neutral-200/90 shadow-2xs hover:border-neutral-400 transition-colors space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-2 border-b border-neutral-100 text-xs font-mono">
                      <span className="text-neutral-400">TRACK 0{i + 1}</span>
                      <span className="text-[var(--color-accent)] font-semibold uppercase">
                        ADAPTIVE
                      </span>
                    </div>

                    <h4 className="text-lg font-semibold tracking-tight text-neutral-950">
                      {track.type}
                    </h4>

                    <div className="p-2 rounded bg-neutral-50 border border-neutral-200/60 text-xs font-medium text-neutral-800">
                      {track.scope}
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {track.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>Scope &amp; cost defined upfront</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-600 font-mono">
              <span>Because every business has distinct operational requirements, pricing and scope are calculated per project.</span>
              <span className="text-neutral-900 font-semibold shrink-0">Transparent deliverables</span>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
