'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { FEATURED_PROJECTS } from '@/data/projects';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ProjectFramePreview({ project, priority = false }) {
  const displayDomain = project.url
    ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${project.slug}.internal`;

  return (
    <div className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-xs hover:border-neutral-400 transition-colors group/frame">
      {/* Browser Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 group-hover/frame:bg-red-400/80 transition-colors" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 group-hover/frame:bg-amber-400/80 transition-colors" />
          <span className="h-2.5 w-2.5 rounded-full bg-neutral-300 group-hover/frame:bg-emerald-400/80 transition-colors" />
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600 hover:text-[var(--color-accent)] transition-colors shadow-2xs truncate max-w-[200px] sm:max-w-[320px]"
          title={project.url}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="truncate">{displayDomain}</span>
        </a>
        <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
          {project.technology} · {project.location}
        </span>
      </div>

      {/* Real Project Image Viewport */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden cursor-pointer"
        aria-label={`Open live website for ${project.title}`}
      >
        <Image
          src={project.coverImage}
          alt={`${project.title} — live website interface`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover/frame:scale-[1.015]"
          priority={priority}
        />
        {/* Subtle hover overlay badge */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[var(--radius-subtle)] bg-neutral-950/85 backdrop-blur-xs text-white text-[10px] font-mono font-medium shadow-sm">
            <span>View Live Site</span>
            <ExternalLink className="h-3 w-3" />
          </span>
        </div>
      </a>
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
              Featured Client Platforms.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              Selected production websites and digital platforms engineered with custom themes, responsive layouts, and clean architecture.
            </p>
          </div>

          <div className="shrink-0">
            <Button href="/work" variant="secondary" size="md">
              <span>View All 11 Projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Alternating Project Showcases (Showing strictly the 4 requested featured projects on homepage) */}
        <div ref={containerRef} className="space-y-16 sm:space-y-24">
          {FEATURED_PROJECTS.map((project, index) => {
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
                    <ProjectFramePreview project={project} priority={index === 0} />
                  </div>

                  {/* Project Details Column */}
                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-medium text-neutral-400">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-neutral-300">/</span>
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 pt-0.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-xs font-mono font-semibold text-neutral-800">
                          <span>{project.technology}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-600">
                          <Globe className="h-3 w-3 text-neutral-400" />
                          <span>{project.location}</span>
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 group-hover:text-[var(--color-accent)] transition-colors pt-1">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
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

                    {/* Action Links: Direct link to live website + Inquiry CTA */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-subtle)] bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-2xs"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>

                      <Link
                        href={`/contact?project=${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-subtle)] border border-neutral-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:text-[var(--color-accent)] hover:border-neutral-400 transition-colors"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
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
            Looking for a tailored architecture or custom digital platform? We scope projects directly based on technical requirements.
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
