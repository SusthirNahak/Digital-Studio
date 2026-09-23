'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import {
  ArrowUpRight,
  MessageSquare,
  ShieldCheck,
  Zap,
  Play,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Clock,
  Laptop,
  Smartphone,
  Gauge,
  SlidersHorizontal,
} from 'lucide-react';
import gsap from 'gsap';

// Real Client Freelance Projects for the Hero Interactive Stage
const CLIENT_PORTFOLIO_PREVIEWS = [
  {
    id: 'shopify',
    name: 'Natural Elixirs',
    category: 'E-Commerce (Shopify)',
    url: 'https://naturalelixirs.shop',
    image: '/assets/home/freelance_hero_showcase.jpg',
    metric: '+142% Conversion Rate',
    metricLabel: 'Sales Increase',
    speed: '1.2s Fast Checkout',
    tech: 'Shopify · Liquid · Razorpay',
    highlight: 'DTC Wellness Store',
  },
  {
    id: 'nextjs',
    name: 'Genrise Tech Portal',
    category: 'Full-Stack Web App',
    url: 'https://genrise.internal',
    image: '/assets/projects/genrise/cover.webp',
    metric: '100 / 100 Pass',
    metricLabel: 'Core Web Vitals',
    speed: '< 0.4s Server Render',
    tech: 'Next.js 15 · React 19 · Tailwind',
    highlight: 'SaaS Business Platform',
  },
  {
    id: 'clinic',
    name: 'Hillstone Dental Lab',
    category: 'B2B Healthcare Website',
    url: 'https://hillstonedental.com',
    image: '/assets/projects/hillstone-dental-lab/cover.webp',
    metric: '3.4x Inquiries',
    metricLabel: 'Client Lead Boost',
    speed: '0.6s Instant Load',
    tech: 'Custom UI · Local SEO · Fast Forms',
    highlight: 'Medical Lab & Practice',
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('portfolio'); // 'portfolio' | 'audit' | 'guarantee'
  const [selectedProject, setSelectedProject] = useState(CLIENT_PORTFOLIO_PREVIEWS[0]);
  const [auditCompareMode, setAuditCompareMode] = useState('after'); // 'before' | 'after'

  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const pulseRef = useRef(null);

  // 3D Perspective Tilt on Mouse Movement
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 950,
      duration: 0.35,
      ease: 'power2.out',
    });

    if (glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 60%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
    if (glareRef.current) {
      glareRef.current.style.background = 'transparent';
    }
  };

  // Ambient GSAP Floating
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          y: -6,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    }, cardRef);

    return () => ctx.revert();
  }, []);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello Susthir Digital, I would like to discuss hiring you for a website development project.'
      )}`
    : 'https://wa.me/?text=Hello%20Susthir%20Digital%2C%20I%20would%20like%20to%20discuss%20hiring%20you%20for%20a%20website%20development%20project.';

  return (
    <Section spacing="generous" className="border-b border-[var(--color-border-subtle)] overflow-hidden relative">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Direct Client-Attracting Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow / Agency Marker */}
            <div className="animate-reveal-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-subtle)] bg-blue-50 border border-blue-200/80 text-blue-900">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <Eyebrow variant="default" className="text-[11px] font-semibold tracking-wider text-blue-700">
                  FREELANCE WEB DEVELOPER &amp; STUDIO
                </Eyebrow>
              </div>
            </div>

            {/* Powerful Freelance Client Headline */}
            <div className="animate-reveal-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.06] text-balance">
                High-converting websites engineered to bring you clients.
              </h1>
            </div>

            {/* Supporting Freelance Copy */}
            <div className="animate-reveal-3">
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl text-balance">
                Custom Shopify stores, sub-second Next.js web applications, and fast WordPress websites built around how your business actually makes money.
              </p>
              <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs sm:text-sm text-neutral-500 mt-3 font-medium">
                <span className="inline-flex items-center gap-1.5 text-neutral-800">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Work Directly with Senior Developer
                </span>
                <span className="text-neutral-300">·</span>
                <span>Zero Agency Overhead</span>
                <span className="text-neutral-300">·</span>
                <span className="text-neutral-700">Fast 2–3 Week Delivery</span>
              </div>
            </div>

            {/* Action Group */}
            <div className="animate-reveal-4 flex flex-wrap items-center gap-3 pt-1">
              <Button href="/contact" variant="primary" size="lg" className="group shadow-sm">
                <span>Start Your Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              
              <Button href="#work" variant="secondary" size="lg">
                View 11 Client Projects
              </Button>

              <a
                href="#motion-reel"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-50 text-blue-600">
                  <Play className="h-2.5 w-2.5 ml-0.5 fill-current" />
                </span>
                <span>Client Showreel</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-700 hover:text-emerald-700 px-3 py-2 rounded-md hover:bg-emerald-50 transition-colors cursor-pointer"
                aria-label="Direct inquiry via WhatsApp"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>Instant WhatsApp</span>
              </a>
            </div>

            {/* Trust & Guarantee Indicators */}
            <div className="pt-3 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-6 text-xs text-neutral-600">
              <div className="flex items-center gap-1.5">
                <Gauge className="h-3.5 w-3.5 text-blue-600" />
                <span className="font-medium text-neutral-900">100/100 Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Fixed Milestone Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-amber-600" />
                <span>Free 30-Day Post-Launch Support</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Perspective Client Showcase Stage */}
          <div className="lg:col-span-5 w-full">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative mx-auto max-w-lg lg:max-w-none will-change-transform select-none cursor-pointer group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Dynamic Glare Overlay */}
              <div
                ref={glareRef}
                className="absolute inset-0 z-30 rounded-[var(--radius-default)] pointer-events-none transition-opacity duration-300"
              />

              {/* Main Ambient Hardware Frame */}
              <div className="rounded-[var(--radius-default)] border border-neutral-800 bg-neutral-950 text-white shadow-2xl overflow-hidden relative">
                
                {/* Browser Window Header with Mode Tabs */}
                <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Mode Selector Tabs (Portfolio vs Speed Audit vs Direct Guarantee) */}
                  <div className="flex items-center gap-1 bg-black/60 p-1 rounded border border-neutral-800 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab('portfolio')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        activeTab === 'portfolio'
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Live Client Work
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('audit')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        activeTab === 'audit'
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Before / After
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('guarantee')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        activeTab === 'guarantee'
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Freelance vs Agency
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                    <span ref={pulseRef} className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="hidden sm:inline">60 FPS</span>
                  </div>
                </div>

                {/* Primary Content Viewport */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  
                  {/* TAB 1: LIVE CLIENT WORK PREVIEW */}
                  {activeTab === 'portfolio' && (
                    <div className="relative w-full h-full flex flex-col justify-between">
                      {/* Project Image */}
                      <Image
                        src={selectedProject.image}
                        alt={`${selectedProject.name} — freelance website deliverable`}
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-103"
                      />

                      {/* Top Floating Browser Address & Category Bar */}
                      <div className="absolute inset-x-3 top-3 flex items-center justify-between pointer-events-none z-10">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-neutral-700/80 text-[10px] font-mono text-neutral-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>{selectedProject.url.replace(/^https?:\/\//, '')}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-blue-600/90 text-white text-[9px] font-mono font-semibold uppercase tracking-wider">
                          {selectedProject.category}
                        </span>
                      </div>

                      {/* Interactive Client Projects Quick Switcher */}
                      <div className="absolute inset-x-3 bottom-3 p-3 rounded-[var(--radius-subtle)] bg-neutral-950/90 backdrop-blur-md border border-neutral-800 z-10 space-y-2.5">
                        <div className="flex items-center justify-between text-xs">
                          <div>
                            <span className="font-semibold text-white block">{selectedProject.name}</span>
                            <span className="text-[10px] text-neutral-400 font-mono">{selectedProject.tech}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-emerald-400 font-bold font-mono text-xs block">
                              {selectedProject.metric}
                            </span>
                            <span className="text-[9px] text-neutral-400 font-mono block">
                              {selectedProject.metricLabel}
                            </span>
                          </div>
                        </div>

                        {/* Project Switch Pills */}
                        <div className="grid grid-cols-3 gap-1.5 pt-1.5 border-t border-neutral-800/80 text-[10px] font-mono">
                          {CLIENT_PORTFOLIO_PREVIEWS.map((proj) => {
                            const isSelected = selectedProject.id === proj.id;
                            return (
                              <button
                                key={proj.id}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedProject(proj);
                                }}
                                className={`px-2 py-1 rounded text-center transition-all truncate ${
                                  isSelected
                                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                                    : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'
                                }`}
                              >
                                {proj.id === 'shopify' ? 'Shopify' : proj.id === 'nextjs' ? 'Next.js App' : 'Clinic / B2B'}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: BEFORE VS AFTER SPEED & CONVERSION AUDIT */}
                  {activeTab === 'audit' && (
                    <div className="relative w-full h-full p-4 sm:p-5 flex flex-col justify-between bg-neutral-950/95 text-white">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                            Real Client Performance Overhaul
                          </span>
                          {/* Toggle Mode */}
                          <div className="flex items-center gap-1 bg-neutral-900 p-0.5 rounded border border-neutral-800 text-[10px] font-mono">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setAuditCompareMode('before');
                              }}
                              className={`px-2 py-0.5 rounded ${
                                auditCompareMode === 'before' ? 'bg-red-500/80 text-white' : 'text-neutral-400'
                              }`}
                            >
                              Old Site
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setAuditCompareMode('after');
                              }}
                              className={`px-2 py-0.5 rounded ${
                                auditCompareMode === 'after' ? 'bg-emerald-600 text-white' : 'text-neutral-400'
                              }`}
                            >
                              Susthir Redesign
                            </button>
                          </div>
                        </div>

                        {auditCompareMode === 'after' ? (
                          <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-500/40 space-y-3 animate-fadeIn">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                                <Sparkles className="h-3.5 w-3.5" />
                                <span>Engineered by Susthir Digital</span>
                              </span>
                              <span className="text-[11px] font-mono font-bold text-emerald-300">
                                99/100 SPEED
                              </span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                              <div className="bg-neutral-900/80 p-2 rounded">
                                <span className="text-neutral-400 block">PAGE LOAD</span>
                                <span className="text-emerald-400 font-bold text-sm block">0.48s</span>
                                <span className="text-[9px] text-neutral-500">Sub-second</span>
                              </div>
                              <div className="bg-neutral-900/80 p-2 rounded">
                                <span className="text-neutral-400 block">CONVERSION</span>
                                <span className="text-emerald-400 font-bold text-sm block">+142%</span>
                                <span className="text-[9px] text-neutral-500">More orders</span>
                              </div>
                              <div className="bg-neutral-900/80 p-2 rounded">
                                <span className="text-neutral-400 block">SEO RANK</span>
                                <span className="text-emerald-400 font-bold text-sm block">#1 Spot</span>
                                <span className="text-[9px] text-neutral-500">Google Verified</span>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-3.5 rounded-lg bg-red-950/20 border border-red-500/30 space-y-3 animate-fadeIn">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-semibold text-red-400">
                                Typical Client Site Before Redesign
                              </span>
                              <span className="text-[11px] font-mono font-bold text-red-400">
                                38/100 POOR
                              </span>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                              <div className="bg-neutral-900/80 p-2 rounded">
                                <span className="text-neutral-400 block">PAGE LOAD</span>
                                <span className="text-red-400 font-bold text-sm block">4.8s</span>
                                <span className="text-[9px] text-neutral-500">62% bounce</span>
                              </div>
                              <div className="bg-neutral-900/80 p-2 rounded">
                                <span className="text-neutral-400 block">MOBILE UI</span>
                                <span className="text-red-400 font-bold text-sm block">Broken</span>
                                <span className="text-[9px] text-neutral-500">Lost buyers</span>
                              </div>
                              <div className="bg-neutral-900/80 p-2 rounded">
                                <span className="text-neutral-400 block">LEADS</span>
                                <span className="text-red-400 font-bold text-sm block">Low</span>
                                <span className="text-[9px] text-neutral-500">Lost revenue</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-2 text-center">
                        <Button
                          href="/contact"
                          variant="primary"
                          size="sm"
                          className="w-full text-xs font-medium py-2 bg-blue-600 hover:bg-blue-500 border-0"
                        >
                          <span>Get Free Website Speed Audit For Your Site</span>
                          <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: FREELANCE VS BIG AGENCY */}
                  {activeTab === 'guarantee' && (
                    <div className="relative w-full h-full p-4 flex flex-col justify-between bg-neutral-950/95 text-white">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                          <span className="text-xs font-semibold text-white">
                            Why Clients Choose Susthir Digital
                          </span>
                          <span className="text-[10px] font-mono text-blue-400">
                            DIRECT FREELANCE
                          </span>
                        </div>

                        <div className="space-y-2 text-[11px]">
                          <div className="flex items-start gap-2 p-2 rounded bg-neutral-900/80 border border-neutral-800">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-white block">Direct Senior Developer</span>
                              <span className="text-neutral-400 text-[10px]">
                                No junior interns, no middlemen. You talk directly with the engineer writing your code.
                              </span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2 p-2 rounded bg-neutral-900/80 border border-neutral-800">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-white block">Fixed Transparent Milestones</span>
                              <span className="text-neutral-400 text-[10px]">
                                No surprise hourly billing. Pay 50% upon milestone preview approval.
                              </span>
                            </div>
                          </div>

                          <div className="flex items-start gap-2 p-2 rounded bg-neutral-900/80 border border-neutral-800">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold text-white block">Turnaround in 2–3 Weeks</span>
                              <span className="text-neutral-400 text-[10px]">
                                Agencies take 3–5 months. We deliver production-ready sites in weeks.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          href="/contact"
                          variant="primary"
                          size="sm"
                          className="w-full text-xs font-medium py-2 bg-emerald-600 hover:bg-emerald-500 border-0"
                        >
                          <span>Hire Susthir Digital For Your Project</span>
                          <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Corner Crosshair Marks */}
                  <div className="absolute top-2 left-2 text-neutral-600 font-mono text-[8px] pointer-events-none">+</div>
                  <div className="absolute top-2 right-2 text-neutral-600 font-mono text-[8px] pointer-events-none">+</div>
                  <div className="absolute bottom-2 left-2 text-neutral-600 font-mono text-[8px] pointer-events-none">+</div>
                  <div className="absolute bottom-2 right-2 text-neutral-600 font-mono text-[8px] pointer-events-none">+</div>
                </div>

                {/* Bottom Strip of Preview */}
                <div className="px-4 py-2 bg-neutral-900/90 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>Websites · Shopify Stores · Web Apps</span>
                  </div>
                  <span className="text-neutral-300 font-semibold">100% Freelance Client Satisfaction</span>
                </div>

              </div>

              {/* Floating Status Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2.5 px-3.5 py-2 rounded-[var(--radius-default)] bg-white border border-neutral-200 shadow-xl text-xs font-medium text-neutral-900 z-30 transition-transform group-hover:scale-105">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold">Available for Client Projects · Kickoff in 48h</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
