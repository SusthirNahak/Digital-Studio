'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { PROJECTS, FEATURED_PROJECTS } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ProjectFramePreview({ previewType }) {
  if (previewType === 'editorial-site') {
    return (
      <div className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-xs">
        {/* Browser bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
          </div>
          <span className="text-[10px] font-mono text-neutral-500 bg-white px-2 py-0.5 rounded border border-neutral-200">
            project preview · editorial platform
          </span>
          <span className="text-[10px] font-mono text-neutral-400">Desktop 1440px</span>
        </div>

        {/* Website Content Preview */}
        <div className="p-6 sm:p-8 space-y-5 bg-white">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="h-3 w-24 bg-neutral-900 rounded-xs" />
            <div className="flex gap-3">
              <div className="h-2 w-10 bg-neutral-200 rounded-xs" />
              <div className="h-2 w-10 bg-neutral-200 rounded-xs" />
              <div className="h-2 w-12 bg-neutral-900 rounded-xs" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 items-center pt-2">
            <div className="col-span-7 space-y-3">
              <div className="h-2.5 w-16 bg-[var(--color-accent)] rounded-xs" />
              <div className="h-7 w-full bg-neutral-900 rounded-xs" />
              <div className="h-3 w-5/6 bg-neutral-300 rounded-xs" />
              <div className="h-3 w-2/3 bg-neutral-200 rounded-xs" />
              <div className="pt-2 flex gap-2">
                <div className="h-7 w-20 bg-neutral-900 rounded-xs" />
                <div className="h-7 w-16 border border-neutral-300 rounded-xs" />
              </div>
            </div>
            <div className="col-span-5 h-36 bg-neutral-100 border border-neutral-200 rounded-xs p-3 flex flex-col justify-between">
              <div className="h-2 w-12 bg-neutral-300 rounded-xs" />
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-neutral-200 rounded-xs" />
                <div className="h-2 w-4/5 bg-neutral-200 rounded-xs" />
              </div>
              <div className="h-2 w-8 bg-[var(--color-accent)] rounded-xs" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-neutral-100">
            <div className="p-3 bg-neutral-50 rounded-xs space-y-2 border border-neutral-100">
              <div className="h-2 w-10 bg-neutral-400 rounded-xs" />
              <div className="h-2 w-full bg-neutral-200 rounded-xs" />
            </div>
            <div className="p-3 bg-neutral-50 rounded-xs space-y-2 border border-neutral-100">
              <div className="h-2 w-10 bg-neutral-400 rounded-xs" />
              <div className="h-2 w-full bg-neutral-200 rounded-xs" />
            </div>
            <div className="p-3 bg-neutral-50 rounded-xs space-y-2 border border-neutral-100">
              <div className="h-2 w-10 bg-neutral-400 rounded-xs" />
              <div className="h-2 w-full bg-neutral-200 rounded-xs" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (previewType === 'ecommerce-store') {
    return (
      <div className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-xs">
        {/* Browser bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
          </div>
          <span className="text-[10px] font-mono text-neutral-500 bg-white px-2 py-0.5 rounded border border-neutral-200">
            project preview · shopify storefront
          </span>
          <span className="text-[10px] font-mono text-neutral-400">Cart &amp; Catalog</span>
        </div>

        {/* Storefront Content Preview */}
        <div className="p-6 sm:p-8 space-y-5 bg-white">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="h-3 w-20 bg-neutral-900 rounded-xs" />
            <div className="h-5 w-16 bg-neutral-100 border border-neutral-200 rounded-xs" />
          </div>

          <div className="grid grid-cols-12 gap-3 pt-1">
            <div className="col-span-6 sm:col-span-4 p-3 bg-neutral-50 border border-neutral-200 rounded-xs space-y-2">
              <div className="h-24 bg-neutral-200 rounded-xs" />
              <div className="h-2.5 w-3/4 bg-neutral-800 rounded-xs" />
              <div className="flex justify-between items-center pt-1">
                <div className="h-2 w-8 bg-neutral-500 rounded-xs" />
                <div className="h-4 w-12 bg-neutral-900 rounded-xs" />
              </div>
            </div>

            <div className="col-span-6 sm:col-span-4 p-3 bg-neutral-50 border border-neutral-200 rounded-xs space-y-2">
              <div className="h-24 bg-neutral-200 rounded-xs" />
              <div className="h-2.5 w-3/4 bg-neutral-800 rounded-xs" />
              <div className="flex justify-between items-center pt-1">
                <div className="h-2 w-8 bg-neutral-500 rounded-xs" />
                <div className="h-4 w-12 bg-neutral-900 rounded-xs" />
              </div>
            </div>

            <div className="hidden sm:block sm:col-span-4 p-3 bg-neutral-50 border border-neutral-200 rounded-xs space-y-2">
              <div className="h-24 bg-neutral-200 rounded-xs" />
              <div className="h-2.5 w-3/4 bg-neutral-800 rounded-xs" />
              <div className="flex justify-between items-center pt-1">
                <div className="h-2 w-8 bg-neutral-500 rounded-xs" />
                <div className="h-4 w-12 bg-neutral-900 rounded-xs" />
              </div>
            </div>
          </div>

          <div className="p-3 bg-neutral-900 text-white rounded-xs flex items-center justify-between text-xs">
            <div className="space-y-0.5">
              <div className="h-2 w-20 bg-neutral-400 rounded-xs" />
              <div className="h-2 w-32 bg-neutral-600 rounded-xs" />
            </div>
            <div className="h-5 w-20 bg-white rounded-xs" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-xs">
      {/* Browser bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
        </div>
        <span className="text-[10px] font-mono text-neutral-500 bg-white px-2 py-0.5 rounded border border-neutral-200">
          project preview · operations portal
        </span>
        <span className="text-[10px] font-mono text-emerald-600">Auth / Verified</span>
      </div>

      {/* App Workspace Preview */}
      <div className="p-6 sm:p-8 space-y-5 bg-white">
        <div className="grid grid-cols-12 gap-3 pb-3 border-b border-neutral-100">
          <div className="col-span-4 h-3 bg-neutral-900 rounded-xs" />
          <div className="col-span-8 flex justify-end gap-2">
            <div className="h-5 w-14 bg-neutral-100 border border-neutral-200 rounded-xs" />
            <div className="h-5 w-14 bg-neutral-900 rounded-xs" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3 p-3 bg-neutral-50 border border-neutral-200 rounded-xs space-y-2">
            <div className="h-2 w-10 bg-neutral-400 rounded-xs" />
            <div className="h-2 w-full bg-neutral-300 rounded-xs" />
            <div className="h-2 w-4/5 bg-neutral-300 rounded-xs" />
            <div className="h-2 w-3/5 bg-neutral-300 rounded-xs" />
          </div>

          <div className="col-span-9 p-3 border border-neutral-200 rounded-xs space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-2.5 w-24 bg-neutral-800 rounded-xs" />
              <div className="h-2 w-12 bg-emerald-500 rounded-xs" />
            </div>
            <div className="space-y-1.5 pt-1">
              <div className="h-5 w-full bg-neutral-50 border border-neutral-100 rounded-xs" />
              <div className="h-5 w-full bg-neutral-50 border border-neutral-100 rounded-xs" />
              <div className="h-5 w-full bg-neutral-50 border border-neutral-100 rounded-xs" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-1 border-t border-neutral-100">
          <span>ROLE-BASED PERMISSIONS</span>
          <span>REAL-TIME PIPELINE</span>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const articles = gsap.utils.toArray('.project-article');
      articles.forEach((art) => {
        gsap.fromTo(
          art,
          { opacity: 0.6, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: art,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.4,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="work" spacing="generous" className="bg-[var(--color-bg)] border-b border-[var(--color-border-subtle)]">
      <Container size="default">
        {/* Section Heading Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-2xl space-y-4">
            <Eyebrow variant="accent">Selected Work</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] text-balance">
              A selection of digital work we&apos;ve built.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Websites, ecommerce experiences and custom web applications built across different business needs.
            </p>
          </div>

          <div className="shrink-0">
            <Button href="/work" variant="secondary" size="md">
              <span>View All Work</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Alternating Project Showcases (Showing only 4 featured projects on homepage) */}
        <div ref={containerRef} className="space-y-16 sm:space-y-24">
          {(FEATURED_PROJECTS || PROJECTS.filter((p) => p.featured)).map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="project-article group border-b border-[var(--color-border-subtle)] pb-16 sm:pb-24 last:border-b-0 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Frame: Alternates Left vs Right on Desktop */}
                  <div
                    className={`lg:col-span-7 transition-all duration-300 group-hover:translate-y-[-3px] ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <ProjectFramePreview
                      previewType={project.previewType}
                    />
                  </div>

                  {/* Project Details Column */}
                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-medium text-neutral-400">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-neutral-300">/</span>
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)]">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 group-hover:text-[var(--color-accent)] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technology Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-neutral-600 bg-white border border-neutral-200 px-2.5 py-0.5 rounded-[var(--radius-subtle)] transition-colors group-hover:border-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Factual Action Link */}
                    <div className="pt-3">
                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-900 hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xs transition-colors"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </Link>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom Action */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            Looking for a tailored architecture or custom migration? We scope projects directly based on business requirements.
          </p>
          <Button href="/contact" variant="primary" size="md">
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

      </Container>
    </Section>
  );
}
