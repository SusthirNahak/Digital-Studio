'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import {
  Film,
  Play,
  Pause,
  VolumeX,
  Sparkles,
  Monitor,
  Layers,
  ArrowUpRight,
  TrendingUp,
  CheckCircle2,
  Gauge,
  MessageSquare,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const REEL_CLIENT_CASES = [
  {
    id: 'shopify-speed',
    title: 'High-Converting Shopify Store',
    client: 'Natural Elixirs (DTC Health & Wellness)',
    image: '/assets/home/freelance_reel_showcase.jpg',
    metric: '+142% Sales Conversion',
    speed: '1.2s Fast Mobile Checkout',
    tech: 'Shopify Liquid · WhatsApp Instant Buy · Razorpay',
  },
  {
    id: 'nextjs-saas',
    title: 'Next.js 15 Full-Stack Web Application',
    client: 'Genrise Tech & Analytics Portal',
    image: '/assets/projects/genrise/cover.webp',
    metric: '100 / 100 Core Web Vitals',
    speed: '< 0.4s Server Render Time',
    tech: 'Next.js 15 · React 19 · PostgreSQL · Tailwind',
  },
  {
    id: 'b2b-portal',
    title: 'B2B Medical Practice & Dental Lab',
    client: 'Hillstone Dental Lab',
    image: '/assets/projects/hillstone-dental-lab/cover.webp',
    metric: '3.4x Doctor Prescription Cases',
    speed: '0.6s Instant Page Load',
    tech: 'Custom WordPress Architecture · Local SEO #1',
  },
];

export default function ProjectFilm() {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);

  const activeCase = REEL_CLIENT_CASES[activeCaseIdx];

  // GSAP reveal on scroll
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0.85, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Automatic channel rotation every 5 seconds if playing
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveCaseIdx((prev) => (prev + 1) % REEL_CLIENT_CASES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        `Hello Susthir Digital, I watched your client work reel and I want to discuss a project like ${activeCase.title}.`
      )}`
    : `https://wa.me/?text=${encodeURIComponent(
        `Hello Susthir Digital, I watched your client work reel and I want to discuss a project like ${activeCase.title}.`
      )}`;

  return (
    <Section spacing="default" className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <Container size="default">
        <div ref={containerRef} className="space-y-6 max-w-5xl mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <Eyebrow variant="accent">CLIENT WORK &amp; ENGINEERING REEL</Eyebrow>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                Production Deliverables in Action
              </h2>
            </div>

            {/* Quick Reel Tab Switcher */}
            <div className="flex items-center gap-1.5 bg-neutral-100 p-1 rounded border border-neutral-200 text-xs font-mono">
              {REEL_CLIENT_CASES.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveCaseIdx(idx);
                    setIsPlaying(false);
                  }}
                  className={`px-3 py-1 rounded transition-all ${
                    activeCaseIdx === idx
                      ? 'bg-neutral-950 text-white font-semibold shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {idx === 0 ? 'Shopify' : idx === 1 ? 'Next.js App' : 'B2B Portal'}
                </button>
              ))}
            </div>
          </div>

          {/* 16:9 Cinematic Client Frame */}
          <div className="relative w-full aspect-16/9 rounded-[var(--radius-default)] bg-neutral-950 border border-neutral-800 shadow-xl overflow-hidden select-none group">
            
            {/* Real Project Image Backdrop */}
            <Image
              src={activeCase.image}
              alt={activeCase.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-103"
            />

            {/* Cinematic Dark Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40 pointer-events-none" />

            {/* Top Telemetry Overlay */}
            <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-[11px] font-mono text-neutral-300 z-10">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-semibold tracking-wider uppercase">
                  CASE STUDY #{activeCaseIdx + 1} // 60 FPS
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded bg-blue-900/80 border border-blue-700/80 text-blue-300 font-semibold text-[10px]">
                {activeCase.speed}
              </span>
            </div>

            {/* Bottom Client Case Details & Direct CTA Card */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-[10px] font-mono font-semibold">
                  <TrendingUp className="h-3 w-3" />
                  <span>{activeCase.metric}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeCase.title}
                </h3>
                <p className="text-xs text-neutral-300">
                  Client: <strong className="text-white">{activeCase.client}</strong> · {activeCase.tech}
                </p>
              </div>

              {/* Conversion Buttons */}
              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                  className="bg-white text-neutral-950 hover:bg-neutral-100 text-xs font-medium border-0"
                >
                  <span>Build Similar</span>
                  <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                </Button>
              </div>
            </div>

            {/* Corner Precision Crosshairs */}
            <div className="absolute top-3 left-3 text-neutral-500 font-mono text-[9px] pointer-events-none">+</div>
            <div className="absolute top-3 right-3 text-neutral-500 font-mono text-[9px] pointer-events-none">+</div>
            <div className="absolute bottom-3 left-3 text-neutral-500 font-mono text-[9px] pointer-events-none">+</div>
            <div className="absolute bottom-3 right-3 text-neutral-500 font-mono text-[9px] pointer-events-none">+</div>
          </div>

          {/* Sub-caption */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 font-mono">
            <span>Direct freelance engineering · Sub-second page loads · Milestone-based delivery</span>
            <span className="text-neutral-700">All 11 projects verified live in production</span>
          </div>

        </div>
      </Container>
    </Section>
  );
}
