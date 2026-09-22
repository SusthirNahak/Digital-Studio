'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { PROJECTS } from '@/data/projects';
import {
  ArrowUpRight,
  ShoppingBag,
  Check,
  Zap,
  ShieldCheck,
  Layers,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const FILTERS = [
  { id: 'ALL', label: 'ALL' },
  { id: 'WORDPRESS', label: 'WORDPRESS' },
  { id: 'SHOPIFY', label: 'SHOPIFY' },
  { id: 'REACT', label: 'REACT / NEXT.JS' },
  { id: 'WEBAPP', label: 'WEB APPLICATIONS' },
];

const DISCIPLINE_ITEMS = [
  'WORDPRESS',
  'SHOPIFY',
  'REACT',
  'NEXT.JS',
  'API INTEGRATION',
  'CUSTOM WEB APPLICATIONS',
];

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const gridContainerRef = useRef(null);
  const marqueeRef = useRef(null);

  // Filter projects based on selection
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'WORDPRESS') return project.id === 'business-website';
    if (activeFilter === 'SHOPIFY') return project.id === 'commerce-experience';
    if (activeFilter === 'REACT') return project.id === 'custom-web-application';
    if (activeFilter === 'WEBAPP') return project.id === 'custom-web-application';
    return true;
  });

  // GSAP animation when active filter changes
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !gridContainerRef.current) return;

    gsap.fromTo(
      '.project-grid-item',
      { opacity: 0.3, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
    );
  }, [activeFilter]);

  // Slow continuous marquee animation for discipline strip
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
        {/* Section Header & Interactive Filter Bar */}
        <div className="space-y-8 pb-12 border-b border-neutral-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <Eyebrow variant="accent">PORTFOLIO INDEX</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
                Architectural Work by Discipline
              </h2>
            </div>
            <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Showing {filteredProjects.length} of {PROJECTS.length} Systems
            </p>
          </div>

          {/* Filter Chips Navigation (Horizontally scrollable on mobile) */}
          <div
            role="tablist"
            aria-label="Project filter by discipline"
            className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-[var(--radius-subtle)] text-xs font-mono tracking-wider uppercase transition-all duration-200 select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] min-h-[44px] flex items-center ${
                    isActive
                      ? 'bg-neutral-950 text-white font-semibold shadow-xs'
                      : 'bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Project Grid Container */}
        <div ref={gridContainerRef} className="pt-12 space-y-20 sm:space-y-28">
          
          {/* ============================================================ */}
          {/* COMPOSITION 1: PROJECT 01 (Shown when filtered to WORDPRESS) */}
          {/* ============================================================ */}
          {filteredProjects.some((p) => p.id === 'business-website') && (
            <div className="project-grid-item group">
              <div className="p-6 sm:p-10 rounded-[var(--radius-default)] bg-white border border-neutral-200/90 shadow-2xs hover:border-neutral-400 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Visual Preview Left */}
                  <div className="lg:col-span-7 transition-transform duration-300 group-hover:scale-[1.015] group-hover:-translate-y-1">
                    <div className="rounded-[var(--radius-subtle)] border border-neutral-200 bg-neutral-50 overflow-hidden shadow-xs">
                      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-neutral-300" />
                          <span className="h-2 w-2 rounded-full bg-neutral-300" />
                          <span className="h-2 w-2 rounded-full bg-neutral-300" />
                        </div>
                        <span className="text-[10px] font-mono text-neutral-600 bg-white px-2 py-0.5 rounded border border-neutral-200">
                          corporate-site.internal/articles
                        </span>
                        <span className="text-[10px] font-mono text-neutral-400">WP / ACF</span>
                      </div>
                      <div className="p-6 bg-white space-y-4">
                        <div className="h-4 w-32 bg-neutral-900 rounded-xs" />
                        <div className="space-y-2">
                          <div className="h-3 w-3/4 bg-neutral-800 rounded-xs" />
                          <div className="h-2 w-full bg-neutral-200 rounded-xs" />
                          <div className="h-2 w-2/3 bg-neutral-200 rounded-xs" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          <div className="h-14 bg-neutral-50 border border-neutral-200/80 rounded-xs p-2 space-y-1">
                            <div className="h-1.5 w-8 bg-neutral-400 rounded-xs" />
                            <div className="h-2 w-full bg-neutral-300 rounded-xs" />
                          </div>
                          <div className="h-14 bg-neutral-50 border border-neutral-200/80 rounded-xs p-2 space-y-1">
                            <div className="h-1.5 w-8 bg-neutral-400 rounded-xs" />
                            <div className="h-2 w-full bg-neutral-300 rounded-xs" />
                          </div>
                          <div className="h-14 bg-neutral-50 border border-neutral-200/80 rounded-xs p-2 space-y-1">
                            <div className="h-1.5 w-8 bg-neutral-400 rounded-xs" />
                            <div className="h-2 w-full bg-neutral-300 rounded-xs" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Information Right */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[var(--color-accent)] transition-colors">
                        01
                      </span>
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                        Corporate &amp; Editorial Website
                      </span>
                    </div>

                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-800 transition-colors">
                      Business Website Platform
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      Custom theme architecture with bespoke Gutenberg blocks, tailored ACF Pro field groups, and fast server-side asset caching for content editors.
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['WordPress', 'ACF Pro', 'Tailwind CSS', 'PHP', 'Gutenberg'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-[11px] font-mono text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-950 hover:text-[var(--color-accent)] transition-colors group/link"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* COMPOSITION 2: PROJECT 02 (Wide Commerce Visual Showcase)    */}
          {/* ============================================================ */}
          {filteredProjects.some((p) => p.id === 'commerce-experience') && (
            <div className="project-grid-item group">
              <div className="rounded-[var(--radius-default)] bg-white border border-neutral-200/90 p-6 sm:p-10 shadow-2xs hover:border-neutral-400 transition-all duration-300 space-y-8">
                
                {/* Large Wide Ecommerce Visual Preview */}
                <div className="w-full transition-transform duration-300 group-hover:scale-[1.012] group-hover:-translate-y-1">
                  <div className="rounded-[var(--radius-subtle)] border border-neutral-200 bg-neutral-50 overflow-hidden shadow-xs">
                    
                    {/* Browser Chrome Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-neutral-100 border-b border-neutral-200">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                      </div>
                      <div className="px-3 py-0.5 rounded-[var(--radius-subtle)] bg-white border border-neutral-200 text-xs font-mono text-neutral-600">
                        storefront-merchant.internal/shop
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-700">
                        <ShoppingBag className="h-3.5 w-3.5 text-neutral-800" />
                        <span className="font-semibold">3 Items (₹4,890)</span>
                      </div>
                    </div>

                    {/* Wide Storefront Canvas */}
                    <div className="p-6 sm:p-8 bg-white space-y-6">
                      
                      {/* Storefront Navigation & Announcement */}
                      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                        <div className="flex items-center gap-3">
                          <span className="h-3.5 w-3.5 rounded-xs bg-neutral-900" />
                          <span className="text-xs font-bold tracking-tight text-neutral-950 font-mono">
                            MODERN GOODS CO.
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                          <span className="hidden sm:inline">New Arrivals</span>
                          <span className="hidden sm:inline">Collections</span>
                          <span className="px-2 py-0.5 rounded-xs bg-emerald-50 text-emerald-700 font-medium">
                            Free Shipping &gt; ₹1,999
                          </span>
                        </div>
                      </div>

                      {/* Wide 4-Column Product Catalog Presentation */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        
                        {/* Item 1 */}
                        <div className="p-3.5 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-3">
                          <div className="aspect-square bg-neutral-100 border border-neutral-200/60 rounded-xs flex items-center justify-center relative">
                            <span className="text-[11px] font-mono text-neutral-400">Canvas Tote</span>
                            <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-xs bg-neutral-900 text-white text-[9px] font-mono">
                              BESTSELLER
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between items-baseline text-xs">
                              <span className="font-semibold text-neutral-900">Atelier Bag</span>
                              <span className="font-mono font-bold text-neutral-900">₹2,499</span>
                            </div>
                            <span className="text-[10px] text-emerald-600 block">In Stock • 3 colors</span>
                          </div>
                        </div>

                        {/* Item 2 */}
                        <div className="p-3.5 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-3">
                          <div className="aspect-square bg-neutral-100 border border-neutral-200/60 rounded-xs flex items-center justify-center relative">
                            <span className="text-[11px] font-mono text-neutral-400">Desk Pad</span>
                            <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-xs bg-neutral-200 text-neutral-700 text-[9px] font-mono">
                              RESTOCKED
                            </span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between items-baseline text-xs">
                              <span className="font-semibold text-neutral-900">Minimal Mat</span>
                              <span className="font-mono font-bold text-neutral-900">₹1,199</span>
                            </div>
                            <span className="text-[10px] text-emerald-600 block">Vegan Leather</span>
                          </div>
                        </div>

                        {/* Item 3 */}
                        <div className="p-3.5 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-3">
                          <div className="aspect-square bg-neutral-100 border border-neutral-200/60 rounded-xs flex items-center justify-center relative">
                            <span className="text-[11px] font-mono text-neutral-400">Brass Pen</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between items-baseline text-xs">
                              <span className="font-semibold text-neutral-900">Heavy Weight</span>
                              <span className="font-mono font-bold text-neutral-900">₹890</span>
                            </div>
                            <span className="text-[10px] text-emerald-600 block">Refillable 0.5mm</span>
                          </div>
                        </div>

                        {/* Item 4: Mini Cart Drawer Dock */}
                        <div className="p-3.5 bg-neutral-950 text-white rounded-[var(--radius-subtle)] border border-neutral-800 flex flex-col justify-between space-y-3">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between pb-1.5 border-b border-neutral-800 text-[11px] font-mono">
                              <span className="text-neutral-400">Instant Cart</span>
                              <span className="text-emerald-400">Qualified</span>
                            </div>
                            <p className="text-xs text-neutral-300 font-medium leading-snug">
                              Slide-out drawer with zero checkout friction.
                            </p>
                            <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                              <div className="h-full bg-[var(--color-accent)] w-full" />
                            </div>
                          </div>

                          <div className="space-y-1.5 pt-2">
                            <div className="flex justify-between text-[11px] font-mono">
                              <span className="text-neutral-400">Order Total</span>
                              <span className="font-bold text-white">₹4,890</span>
                            </div>
                            <div className="w-full py-1.5 rounded-[var(--radius-subtle)] bg-white text-neutral-950 text-xs font-semibold text-center">
                              1-Click Checkout
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Technical Architecture Footer */}
                      <div className="pt-3 border-t border-neutral-100 flex flex-wrap items-center justify-between text-xs font-mono text-neutral-500">
                        <span>Shopify Liquid Theme • Section Everywhere Architecture</span>
                        <span className="text-emerald-600 font-semibold">100% Mobile Usability Score</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Project Information Below Visual */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                  <div className="lg:col-span-8 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                      <span className="group-hover:text-[var(--color-accent)] transition-colors">02</span>
                      <span>/</span>
                      <span>Ecommerce Experience</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-800 transition-colors">
                      Direct-to-Consumer Commerce Storefront
                    </h3>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      A polished direct-to-consumer ecommerce storefront focused on rapid product discovery, frictionless mobile purchasing flows, and streamlined catalog browsing.
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {['Shopify Liquid', 'Custom Theme', 'Cart Optimization', 'App Integrations', 'Checkout UX'].map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex lg:justify-end items-center pt-2">
                    <Button href="/contact" variant="primary" size="md" className="group/btn w-full sm:w-auto">
                      <span>Inquire About Storefront</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ============================================================ */}
          {/* VISUAL STRIP: "WHAT WE BUILD" (Rendered between projects)    */}
          {/* ============================================================ */}
          <div
            ref={marqueeRef}
            className="py-10 border-y border-neutral-200/80 bg-neutral-50/50 rounded-[var(--radius-default)] overflow-hidden space-y-4"
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

          {/* ============================================================ */}
          {/* COMPOSITION 3: PROJECT 03 (Two-Column Operations Portal)     */}
          {/* ============================================================ */}
          {filteredProjects.some((p) => p.id === 'custom-web-application') && (
            <div className="project-grid-item group">
              <div className="rounded-[var(--radius-default)] bg-white border border-neutral-200/90 p-6 sm:p-10 shadow-2xs hover:border-neutral-400 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  
                  {/* Left Column: Project Information */}
                  <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-accent)] uppercase tracking-wider font-semibold">
                        <span className="group-hover:text-[var(--color-accent)] transition-colors">03</span>
                        <span>/</span>
                        <span>Web Application</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 group-hover:text-neutral-800 transition-colors">
                        Custom Operations &amp; Client Portal
                      </h3>

                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                        A responsive web application featuring role-based access, interactive data tables, authenticated workflows, and automated pipeline status updates for day-to-day operations.
                      </p>
                    </div>

                    {/* Operational Highlights */}
                    <div className="space-y-2.5 pt-2 border-t border-neutral-200">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-900 font-semibold block">
                        Core Systems Engineered
                      </span>
                      <ul className="space-y-2 list-none p-0 m-0 text-xs sm:text-sm text-neutral-700">
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span>Granular Role-Based Access Control (RBAC)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span>Multi-step request ingestion and approval pipeline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-0.5 shrink-0 inline-flex items-center justify-center h-4 w-4 rounded-full bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span>Relational database queries with Postgres &amp; Prisma</span>
                        </li>
                      </ul>
                    </div>

                    {/* Tech Chips */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {['React', 'Next.js', 'PostgreSQL / Prisma', 'Tailwind CSS', 'Secure Auth'].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-neutral-200">
                      <Button href="/contact" variant="primary" size="md" className="group/btn">
                        <span>Discuss Custom Application</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Dashboard Visual Preview */}
                  <div className="lg:col-span-7 order-1 lg:order-2 transition-transform duration-300 group-hover:scale-[1.015] group-hover:-translate-y-1">
                    <div className="rounded-[var(--radius-subtle)] border border-neutral-200 bg-neutral-50 overflow-hidden shadow-xs">
                      
                      {/* Chrome Header */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-950 text-white border-b border-neutral-800">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-xs font-mono font-semibold tracking-wider">
                            PORTAL.SYSTEMS // PROD
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400">
                          <span className="px-2 py-0.5 rounded-xs bg-neutral-800 text-neutral-200">Role: Operations Lead</span>
                          <span className="text-emerald-400">200 OK</span>
                        </div>
                      </div>

                      {/* Portal Body Canvas */}
                      <div className="p-6 sm:p-8 bg-white space-y-5">
                        
                        {/* KPI Metric Cards */}
                        <div className="grid grid-cols-3 gap-3">
                          <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1">
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">Requests Queued</span>
                            <p className="text-lg font-bold font-mono text-neutral-950">28</p>
                            <span className="text-[10px] text-emerald-600 font-medium">All systems normal</span>
                          </div>
                          <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1">
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">Active Nodes</span>
                            <p className="text-lg font-bold font-mono text-[var(--color-accent)]">14</p>
                            <span className="text-[10px] text-neutral-500 font-mono">Edge Network</span>
                          </div>
                          <div className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-[var(--radius-subtle)] space-y-1">
                            <span className="text-[10px] font-mono text-neutral-400 uppercase">Avg Latency</span>
                            <p className="text-lg font-bold font-mono text-neutral-950">24ms</p>
                            <span className="text-[10px] text-emerald-600 font-medium">Prisma pool</span>
                          </div>
                        </div>

                        {/* Interactive Data Table Preview */}
                        <div className="border border-neutral-200 rounded-[var(--radius-subtle)] overflow-hidden text-xs">
                          <div className="px-3.5 py-2 bg-neutral-50 border-b border-neutral-200 flex justify-between items-center text-[11px] font-mono text-neutral-600">
                            <span>Pipeline Audit Feed</span>
                            <span className="text-[10px] text-neutral-400">Auto-refresh 5s</span>
                          </div>

                          <div className="divide-y divide-neutral-100">
                            <div className="px-3.5 py-2.5 flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="font-medium text-neutral-900">Billing Sync #8821</p>
                                <p className="text-[10px] font-mono text-neutral-400">Webhook: Stripe Events</p>
                              </div>
                              <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-emerald-50 text-emerald-700 text-[10px] font-mono font-medium">
                                Processed
                              </span>
                            </div>

                            <div className="px-3.5 py-2.5 flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="font-medium text-neutral-900">Partner Access Token</p>
                                <p className="text-[10px] font-mono text-neutral-400">OAuth Scope: read:workspace</p>
                              </div>
                              <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-[10px] font-mono font-medium">
                                Active
                              </span>
                            </div>

                            <div className="px-3.5 py-2.5 flex items-center justify-between">
                              <div className="space-y-0.5">
                                <p className="font-medium text-neutral-900">Nightly DB Snapshot</p>
                                <p className="text-[10px] font-mono text-neutral-400">Postgres Replica</p>
                              </div>
                              <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100 text-neutral-700 text-[10px] font-mono font-medium">
                                Queued (02:00)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Architecture specs */}
                        <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="h-3.5 w-3.5 text-neutral-800" />
                            <span>Role-Based Permissions (RBAC)</span>
                          </span>
                          <span className="text-emerald-600 font-medium">Zero-Shift Hydration</span>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

        </div>
      </Container>
    </Section>
  );
}
