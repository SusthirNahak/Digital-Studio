'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { PROJECTS } from '@/data/projects';
import {
  ArrowUpRight,
  ExternalLink,
  MapPin,
  ArrowUpDown,
  Sparkles,
  Layers,
  ShieldCheck,
  Check,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FILTERS = [
  { id: 'ALL', label: 'All Projects' },
  { id: 'WORDPRESS', label: 'WordPress' },
  { id: 'NEXTJS', label: 'Next.js' },
  { id: 'WEBFLOW', label: 'Webflow' },
  { id: 'OTHER', label: 'Other / Verified' },
];

const SORT_OPTIONS = [
  { id: 'DEFAULT', label: 'Default Order' },
  { id: 'TECH', label: 'By Technology (WordPress, Next.js, Webflow)' },
  { id: 'TITLE_ASC', label: 'Name (A–Z)' },
  { id: 'FEATURED', label: 'Featured First' },
];

const DISCIPLINE_ITEMS = [
  'WORDPRESS',
  'NEXT.JS',
  'WEBFLOW',
  'CUSTOM WEB APPS',
  'ECOMMERCE STOREFRONTS',
  'API INTEGRATIONS',
  'EDITORIAL CMS',
];

/**
 * Visual architectural wireframe preview for each project
 */
function ProjectCardPreview({ project }) {
  const isCommerce =
    project.category?.toLowerCase().includes('commerce') ||
    project.category?.toLowerCase().includes('food') ||
    project.category?.toLowerCase().includes('retail') ||
    project.slug?.includes('supplements');
  const isApp = project.technology === 'Next.js' && !isCommerce;
  const isWebflow = project.technology === 'Webflow';

  const domain = project.url
    ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : `${project.slug}.internal`;

  return (
    <div className="rounded-[var(--radius-subtle)] border border-neutral-200 bg-neutral-50 overflow-hidden shadow-2xs group-hover:border-neutral-300 transition-colors select-none">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-neutral-100 border-b border-neutral-200 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-red-400/80 transition-colors" />
          <span className="h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-amber-400/80 transition-colors" />
          <span className="h-2 w-2 rounded-full bg-neutral-300 group-hover:bg-emerald-400/80 transition-colors" />
        </div>
        <div className="px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-white border border-neutral-200 text-[10px] font-mono text-neutral-600 truncate max-w-[170px] sm:max-w-[220px]">
          {domain}
        </div>
        <span className="text-[10px] font-mono text-neutral-400">
          {project.technology}
        </span>
      </div>

      {/* Mini Architectural Layout Representation */}
      <div className="p-4 sm:p-5 bg-white space-y-3 min-h-[135px] flex flex-col justify-between">
        {isApp ? (
          <>
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 text-[10px] font-mono">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-neutral-900">APP SYSTEM</span>
              </div>
              <span className="text-emerald-600 font-medium">Vercel Edge</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-neutral-50 border border-neutral-100 rounded-xs space-y-1">
                <div className="h-1.5 w-8 bg-neutral-300 rounded-xs" />
                <div className="h-2 w-10 bg-neutral-900 rounded-xs font-mono font-bold" />
              </div>
              <div className="p-2 bg-neutral-50 border border-neutral-100 rounded-xs space-y-1">
                <div className="h-1.5 w-8 bg-neutral-300 rounded-xs" />
                <div className="h-2 w-8 bg-[var(--color-accent)] rounded-xs" />
              </div>
              <div className="p-2 bg-neutral-950 text-white border border-neutral-800 rounded-xs p-1.5 space-y-0.5">
                <span className="text-[8px] font-mono text-neutral-400 block">Status</span>
                <span className="text-[9px] font-mono text-emerald-400 font-semibold block">200 OK</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-1 border-t border-neutral-100">
              <span>Authenticated Logic</span>
              <span className="text-neutral-700 font-medium">Tailwind + Next</span>
            </div>
          </>
        ) : isCommerce ? (
          <>
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 text-[10px] font-mono">
              <span className="font-semibold text-neutral-900 uppercase">Product Showcase</span>
              <span className="text-emerald-600">Active Catalog</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-1.5 bg-neutral-50 border border-neutral-100 rounded-xs space-y-1">
                <div className="h-9 bg-neutral-100 rounded-xs flex items-center justify-center">
                  <span className="text-[8px] font-mono text-neutral-400">SKU</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-300 rounded-xs" />
              </div>
              <div className="p-1.5 bg-neutral-50 border border-neutral-100 rounded-xs space-y-1">
                <div className="h-9 bg-neutral-100 rounded-xs flex items-center justify-center">
                  <span className="text-[8px] font-mono text-neutral-400">SKU</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-300 rounded-xs" />
              </div>
              <div className="p-2 bg-neutral-950 text-white rounded-xs flex flex-col justify-between">
                <span className="text-[8px] font-mono text-neutral-400">Cart Flow</span>
                <span className="text-[9px] font-mono font-bold text-white">Instant Buy</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-1 border-t border-neutral-100">
              <span>Fast Ingest</span>
              <span className="text-neutral-700 font-medium">Responsive Store</span>
            </div>
          </>
        ) : isWebflow ? (
          <>
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 text-[10px] font-mono">
              <span className="font-semibold text-neutral-900 uppercase">Interactive Layout</span>
              <span className="text-[var(--color-accent)] font-semibold">Webflow CMS</span>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-3/4 bg-neutral-900 rounded-xs" />
              <div className="h-2 w-full bg-neutral-200 rounded-xs" />
              <div className="h-2 w-2/3 bg-neutral-200 rounded-xs" />
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-1 border-t border-neutral-100">
              <span>CMS Collections</span>
              <span className="text-neutral-700 font-medium">Micro-Interactions</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between pb-2 border-b border-neutral-100 text-[10px] font-mono">
              <span className="font-semibold text-neutral-900 uppercase">Editorial Architecture</span>
              <span className="text-neutral-500">Theme Built</span>
            </div>
            <div className="space-y-2">
              <div className="h-3 w-4/5 bg-neutral-900 rounded-xs" />
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="h-8 bg-neutral-50 border border-neutral-100 rounded-xs p-1.5 space-y-1">
                  <div className="h-1.5 w-10 bg-neutral-400 rounded-xs" />
                  <div className="h-1.5 w-full bg-neutral-200 rounded-xs" />
                </div>
                <div className="h-8 bg-neutral-50 border border-neutral-100 rounded-xs p-1.5 space-y-1">
                  <div className="h-1.5 w-10 bg-neutral-400 rounded-xs" />
                  <div className="h-1.5 w-full bg-neutral-200 rounded-xs" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 pt-1 border-t border-neutral-100">
              <span>ACF Pro Fields</span>
              <span className="text-neutral-700 font-medium">Fast TTFB</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('DEFAULT');
  const gridContainerRef = useRef(null);
  const marqueeRef = useRef(null);

  // Compute counts dynamically
  const filterCounts = useMemo(() => {
    const counts = { ALL: PROJECTS.length, WORDPRESS: 0, NEXTJS: 0, WEBFLOW: 0, OTHER: 0 };
    PROJECTS.forEach((p) => {
      const tech = (p.technology || '').toLowerCase();
      if (tech.includes('wordpress')) counts.WORDPRESS += 1;
      else if (tech.includes('next')) counts.NEXTJS += 1;
      else if (tech.includes('webflow')) counts.WEBFLOW += 1;
      else counts.OTHER += 1;
    });
    return counts;
  }, []);

  // Filter and Sort projects
  const filteredAndSortedProjects = useMemo(() => {
    // 1. Filter
    let result = PROJECTS.filter((project) => {
      if (activeFilter === 'ALL') return true;
      const tech = (project.technology || '').toLowerCase();
      if (activeFilter === 'WORDPRESS') return tech.includes('wordpress');
      if (activeFilter === 'NEXTJS') return tech.includes('next');
      if (activeFilter === 'WEBFLOW') return tech.includes('webflow');
      if (activeFilter === 'OTHER') {
        return (
          !tech.includes('wordpress') &&
          !tech.includes('next') &&
          !tech.includes('webflow')
        );
      }
      return true;
    });

    // 2. Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'TECH') {
        // Group by technology: WordPress -> Next.js -> Webflow -> Other
        const order = { 'wordpress': 1, 'next.js': 2, 'webflow': 3 };
        const aTech = a.technology?.toLowerCase() || '';
        const bTech = b.technology?.toLowerCase() || '';
        const aVal = order[aTech] || 99;
        const bVal = order[bTech] || 99;
        if (aVal !== bVal) return aVal - bVal;
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'TITLE_ASC') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'FEATURED') {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
      }
      // Default: preserve original data array order
      return 0;
    });

    return result;
  }, [activeFilter, sortBy]);

  // GSAP animation when activeFilter or sortBy changes
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !gridContainerRef.current) return;

    gsap.fromTo(
      '.project-card-item',
      { opacity: 0.2, y: 15 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.05, ease: 'power2.out' }
    );
  }, [activeFilter, sortBy]);

  // Continuous marquee animation for discipline strip
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.marquee-track', {
        xPercent: -50,
        repeat: -1,
        duration: 35,
        ease: 'none',
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section spacing="generous" className="bg-[var(--color-bg)] relative">
      <Container size="default">
        {/* Section Header & Filter / Sort Controls */}
        <div className="space-y-8 pb-10 border-b border-neutral-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <Eyebrow variant="accent">PORTFOLIO INDEX</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
                Architectural Work by Discipline
              </h2>
            </div>

            {/* Sort Dropdown Selector */}
            <div className="flex items-center gap-2 self-start sm:self-end">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-1.5">
                <ArrowUpDown className="h-3.5 w-3.5 text-neutral-500" />
                <span>Sort by:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-neutral-200 rounded-[var(--radius-subtle)] text-xs font-mono px-3 py-1.5 text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer hover:border-neutral-400 transition-colors shadow-2xs min-h-[38px]"
                aria-label="Sort projects by technology, name, or status"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Technology Filter Chips Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <div
              role="tablist"
              aria-label="Filter projects by technology"
              className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1"
            >
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id;
                const count = filterCounts[filter.id] || 0;
                return (
                  <button
                    key={filter.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3.5 py-2 rounded-[var(--radius-subtle)] text-xs font-mono tracking-wider uppercase transition-all duration-200 select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] min-h-[40px] flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-neutral-950 text-white font-semibold shadow-xs'
                        : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400'
                    }`}
                  >
                    <span>{filter.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-neutral-800 text-neutral-300'
                          : 'bg-neutral-100 text-neutral-500'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider shrink-0">
              Showing {filteredAndSortedProjects.length} of {PROJECTS.length} Systems
            </p>
          </div>
        </div>

        {/* Dynamic Project Grid Container */}
        <div ref={gridContainerRef} className="pt-10 sm:pt-14">
          {filteredAndSortedProjects.length === 0 ? (
            <div className="py-16 text-center space-y-3 bg-white border border-neutral-200 rounded-[var(--radius-default)] p-8">
              <p className="text-base font-semibold text-neutral-900">
                No projects found for the selected category.
              </p>
              <p className="text-xs font-mono text-neutral-500">
                Try selecting &ldquo;All Projects&rdquo; to view the complete catalog.
              </p>
              <button
                onClick={() => setActiveFilter('ALL')}
                className="mt-2 text-xs font-mono font-semibold text-[var(--color-accent)] hover:underline"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredAndSortedProjects.map((project, idx) => (
                <article
                  key={project.slug}
                  className="project-card-item group rounded-[var(--radius-default)] bg-white border border-neutral-200/90 p-6 sm:p-8 shadow-2xs hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  {/* Card Header: Meta Tags */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[var(--color-accent)] transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-neutral-300 font-mono">/</span>
                        <span className="px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-800 font-medium">
                          {project.technology}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.location && (
                          <span className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500">
                            <MapPin className="h-3 w-3 text-neutral-400 shrink-0" />
                            <span>{project.location}</span>
                          </span>
                        )}
                        {project.featured && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] font-semibold uppercase tracking-wider">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title and Category */}
                    <div className="space-y-1.5">
                      <span className="text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider font-semibold block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-800 transition-colors">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 hover:text-[var(--color-accent)] transition-colors"
                        >
                          <span>{project.title}</span>
                          <ExternalLink className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </h3>
                    </div>

                    {/* Visual Preview */}
                    <div className="pt-1">
                      <ProjectCardPreview project={project} />
                    </div>

                    {/* Factual Description */}
                    <p className="text-sm text-neutral-600 leading-relaxed font-normal pt-1">
                      {project.shortDescription || project.description}
                    </p>

                    {/* Services / Tags */}
                    {project.services && project.services.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                          Scope &amp; Architecture
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.services.map((service) => (
                            <span
                              key={service}
                              className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100/90 border border-neutral-200 text-[11px] font-mono text-neutral-700"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom Actions */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 hover:text-[var(--color-accent)] transition-colors group/link"
                    >
                      <span>Visit Live Website</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    <Link
                      href="/contact"
                      className="text-xs font-mono text-neutral-500 hover:text-neutral-950 transition-colors"
                    >
                      Inquire Similar →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {/* Visual Strip: "PLATFORM CAPABILITIES" Marquee */}
        <div
          ref={marqueeRef}
          className="mt-20 py-10 border-y border-neutral-200/80 bg-neutral-50/50 rounded-[var(--radius-default)] overflow-hidden space-y-4"
        >
          <div className="text-center space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold">
              PLATFORM CAPABILITIES
            </span>
            <p className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-950">
              From business websites to custom digital products.
            </p>
          </div>

          {/* Seamless Infinite Marquee Track */}
          <div className="relative overflow-hidden w-full py-2">
            <div className="marquee-track flex items-center gap-8 w-max whitespace-nowrap will-change-transform">
              {[...DISCIPLINE_ITEMS, ...DISCIPLINE_ITEMS, ...DISCIPLINE_ITEMS].map((item, idx) => (
                <div key={idx} className="inline-flex items-center gap-8">
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-neutral-800 font-semibold uppercase">
                    {item}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] opacity-70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
