'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { Send, FileSearch, MessageSquare, CheckSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
  {
    number: '01',
    title: 'You send the brief',
    description:
      'Submit the project overview, functional requirements, and background through the intake form or via direct channel.',
    icon: Send,
  },
  {
    number: '02',
    title: 'We review the scope',
    description:
      'We examine technical feasibility, evaluate appropriate platforms (WordPress, Shopify, React/Next.js), and review architectural constraints.',
    icon: FileSearch,
  },
  {
    number: '03',
    title: 'We discuss the project',
    description:
      'A direct technical discussion with the builder to clarify goals, address edge cases, and align on timeline priorities.',
    icon: MessageSquare,
  },
  {
    number: '04',
    title: 'We define the next step',
    description:
      'We deliver a transparent project scope with itemized milestones, verified requirements, and transparent budget expectations.',
    icon: CheckSquare,
  },
];

export default function ContactProcess() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.process-step-card',
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
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <Container size="default">
        <div className="space-y-12">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-200/80">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <Eyebrow variant="accent">THE ENGAGEMENT SEQUENCE</Eyebrow>
              </div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
                What happens next.
              </h2>
            </div>

            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Systematic Onboarding • Direct Practitioner Review
            </p>
          </div>

          {/* 4-Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step) => {
              const IconComponent = step.icon;

              return (
                <div
                  key={step.number}
                  className="process-step-card p-6 rounded-[var(--radius-default)] bg-white border border-neutral-200 shadow-2xs hover:border-neutral-400 transition-colors flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                      <span className="text-xs font-mono font-bold text-[var(--color-accent)]">
                        {step.number}
                      </span>
                      <IconComponent className="h-4 w-4 text-neutral-400" />
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-neutral-950">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>STAGE {step.number}</span>
                    <span className="text-neutral-600 font-medium">DISCIPLINED</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Factual assurance note */}
          <div className="p-4 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-neutral-600">
            <span>Every enquiry receives direct founder-level engineering assessment without intermediaries.</span>
            <span className="text-neutral-900 font-semibold shrink-0">Clear deliverables</span>
          </div>

        </div>
      </Container>
    </Section>
  );
}
