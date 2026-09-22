'use client';

import { useState, useRef, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { ArrowRight, Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PRINCIPLES = [
  {
    id: '01',
    title: 'CLARITY',
    summary: 'Good digital work starts with understanding the problem.',
    detail:
      'We strip away ambiguity early. Before writing code or configuring components, we define what success looks like for your specific operational model and audience.',
  },
  {
    id: '02',
    title: 'PURPOSE',
    summary: 'Every page, interaction and feature should have a reason to exist.',
    detail:
      'Decorative clutter distracts customers and slows websites down. Every element on the screen should clarify your message, speed up a task, or convert an inquiry.',
  },
  {
    id: '03',
    title: 'CRAFT',
    summary: 'Design and engineering should work together, not compete.',
    detail:
      'Great aesthetics fail if the system is brittle or sluggish. We design with code in mind and engineer with high visual standards so the final product feels effortless to use.',
  },
  {
    id: '04',
    title: 'LONG-TERM THINKING',
    summary: 'We build with maintainability, scalability and real business needs in mind.',
    detail:
      'We build clean, well-documented foundations. Whether you maintain the site internally or expand functionality later, your software is built to adapt without costly rewrites.',
  },
];

export default function Principles() {
  const [activeItem, setActiveItem] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.principle-row',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              <Eyebrow variant="accent">HOW WE THINK</Eyebrow>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 leading-tight">
              Four principles guiding every build.
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              Digital products succeed through discipline, not guesswork. These are the core standards we hold ourselves to on every project.
            </p>

            <div className="pt-4 border-t border-neutral-200/80 font-mono text-xs text-neutral-400">
              <span>INDEX // CORE THESIS</span>
            </div>
          </div>

          {/* Right Column: Editorial Interactive List */}
          <div className="lg:col-span-8">
            <div className="border-t border-neutral-300 divide-y divide-neutral-200">
              {PRINCIPLES.map((principle, index) => {
                const isHovered = activeItem === index;

                return (
                  <div
                    key={principle.id}
                    className="principle-row group transition-all duration-300 py-6 sm:py-8 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xs"
                    tabIndex={0}
                    onMouseEnter={() => setActiveItem(index)}
                    onMouseLeave={() => setActiveItem(null)}
                    onFocus={() => setActiveItem(index)}
                    onBlur={() => setActiveItem(null)}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 sm:gap-8">
                      
                      {/* Left: Number & Principle Title */}
                      <div className="flex items-baseline gap-4 sm:gap-6 shrink-0 sm:w-1/3">
                        <span className="text-xs sm:text-sm font-mono font-bold text-neutral-400 group-hover:text-[var(--color-accent)] group-focus:text-[var(--color-accent)] transition-colors duration-200">
                          {principle.id}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 group-hover:translate-x-1.5 transition-transform duration-200">
                          {principle.title}
                        </h3>
                      </div>

                      {/* Right: Summary Statement and Expanded Detail */}
                      <div className="sm:w-2/3 space-y-2">
                        <p className="text-base sm:text-lg font-medium text-neutral-900 leading-snug group-hover:text-neutral-950 transition-colors">
                          {principle.summary}
                        </p>

                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal transition-opacity duration-200 pt-1">
                          {principle.detail}
                        </p>

                        {/* Subtle Active Indicator Bar */}
                        <div className="pt-2">
                          <div
                            className={`h-0.5 bg-[var(--color-accent)] transition-all duration-300 ${
                              isHovered ? 'w-16 opacity-100' : 'w-0 opacity-0'
                            }`}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
