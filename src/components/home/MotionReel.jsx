'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import {
  Play,
  Pause,
  Maximize2,
  Volume2,
  VolumeX,
  Sparkles,
  Zap,
  Activity,
  Layers,
  ArrowUpRight,
  RotateCcw,
  Sliders,
  CheckCircle2,
  ShoppingBag,
  Cpu,
  Building2,
  Gauge,
  MessageSquare,
  Smartphone,
  Laptop,
  Flame,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// 4 High-Converting Freelance Project Channels
const SHOWREEL_CHANNELS = [
  {
    id: 'shopify',
    label: 'Shopify E-Commerce',
    badge: '🛍️ DTC STORE',
    title: 'Natural Elixirs · Ayurvedic Storefront',
    subtitle: 'High-conversion Shopify store with 1-click instant WhatsApp checkout and 1.2s cart speed.',
    image: '/assets/home/freelance_reel_showcase.jpg',
    metric: '+142%',
    metricLabel: 'Sales Conversion',
    speedScore: '99 / 100',
    timeline: 'Delivered in 2.5 Weeks',
    features: [
      'Instant slide-out ajax cart',
      'Direct WhatsApp checkout button',
      'Razorpay & Cash on Delivery',
      'Optimized for 90%+ mobile traffic',
    ],
    clientQuote: '“Sales jumped within the first 10 days of launching the new Shopify store.”',
  },
  {
    id: 'nextjs',
    label: 'Next.js 15 Web App',
    badge: '⚡ FULL-STACK SAAS',
    title: 'Genrise Tech · Analytics & Workflow Platform',
    subtitle: 'Modern web app with sub-400ms server rendering, dynamic dashboards, and real-time database sync.',
    image: '/assets/projects/genrise/cover.webp',
    metric: '< 0.4s',
    metricLabel: 'Page Load Time',
    speedScore: '100 / 100',
    timeline: 'Delivered in 4 Weeks',
    features: [
      'Next.js 15 App Router & React 19',
      'Zero layout shift (CLS = 0.00)',
      'Sub-second API response times',
      'Clean TypeScript codebase',
    ],
    clientQuote: '“Susthir delivered a web app that loads faster than our competitors’ native apps.”',
  },
  {
    id: 'b2b',
    label: 'B2B / Healthcare Site',
    badge: '🏥 MEDICAL & CORPORATE',
    title: 'Hillstone Dental Lab · Practice Portal',
    subtitle: 'Professional B2B clinical website with online doctor case submission, digital prescription upload, and local SEO.',
    image: '/assets/projects/hillstone-dental-lab/cover.webp',
    metric: '3.4x',
    metricLabel: 'Client Inquiries',
    speedScore: '98 / 100',
    timeline: 'Delivered in 2 Weeks',
    features: [
      'Doctor inquiry & case upload form',
      'Ranked #1 for local clinic search',
      'Mobile-first responsive UX',
      'Custom WordPress ACF integration',
    ],
    clientQuote: '“We receive consistent daily lab case inquiries directly through the website now.”',
  },
  {
    id: 'redesign',
    label: 'Speed & Redesign Overhaul',
    badge: '🚀 PERFORMANCE RECOVERY',
    title: 'Neoplan Foods · Modern Replatforming',
    subtitle: 'Replaced a slow 5.2-second WordPress site with a fast, modern responsive design that loads in 520ms.',
    image: '/assets/projects/neoplan-foods/cover.webp',
    metric: '-78%',
    metricLabel: 'Bounce Rate Drop',
    speedScore: '100 / 100',
    timeline: 'Delivered in 10 Days',
    features: [
      'Google Lighthouse: 34 → 100',
      'Image asset compression & WebP',
      'Streamlined lead generation forms',
      'Sub-600ms Time to First Byte',
    ],
    clientQuote: '“Our bounce rate dropped immediately, and customers frequently compliment the speed.”',
  },
];

export default function MotionReel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentChannelIndex, setCurrentChannelIndex] = useState(0);
  const [activeDevice, setActiveDevice] = useState('desktop'); // 'desktop' | 'mobile'
  const [progress, setProgress] = useState(25);

  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const waveformRef = useRef(null);

  const currentChannel = SHOWREEL_CHANNELS[currentChannelIndex];

  // GSAP ScrollTrigger for entering stage
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !stageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, scale: 0.97, y: 25 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animated Simulated Video Scrubbing & Waveform Bars
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Auto advance to next channel for an exciting reel experience!
          setCurrentChannelIndex((c) => (c + 1) % SHOWREEL_CHANNELS.length);
          return 0;
        }
        return Number((prev + 0.5).toFixed(1));
      });
    }, 120);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Audio / Waveform Visualizer Animation
  useEffect(() => {
    if (!waveformRef.current || !isPlaying) return;

    const bars = waveformRef.current.querySelectorAll('.wave-bar');
    const ctx = gsap.context(() => {
      bars.forEach((bar, idx) => {
        gsap.to(bar, {
          scaleY: () => 0.2 + Math.random() * 0.9,
          duration: 0.25 + (idx % 4) * 0.1,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, waveformRef);

    return () => ctx.revert();
  }, [isPlaying]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        `Hello Susthir Digital, I watched your reel and I want to discuss a project like ${currentChannel.title}.`
      )}`
    : `https://wa.me/?text=${encodeURIComponent(
        `Hello Susthir Digital, I watched your reel and I want to discuss a project like ${currentChannel.title}.`
      )}`;

  return (
    <Section
      ref={containerRef}
      spacing="generous"
      className="bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-900"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-900/25 via-indigo-900/20 to-emerald-900/15 blur-3xl pointer-events-none rounded-full"
      />

      <Container size="default">
        <div className="space-y-10 sm:space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-800/80">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <Eyebrow variant="accent" className="text-emerald-400 font-semibold tracking-wider">
                  FREELANCE CLIENT REEL &amp; DELIVERABLES
                </Eyebrow>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08] text-balance">
                Real websites that turn visitors into paying clients.
              </h2>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl text-balance">
                Watch how we engineer Shopify stores, Next.js web apps, and business websites for maximum speed, commercial conversion, and search ranking.
              </p>
            </div>

            {/* Quick Channel Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-[var(--radius-subtle)] bg-neutral-900/90 border border-neutral-800">
              {SHOWREEL_CHANNELS.map((ch, idx) => {
                const isActive = currentChannelIndex === idx;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      setCurrentChannelIndex(idx);
                      setProgress(0);
                    }}
                    className={`px-3 py-1.5 text-xs font-mono transition-all rounded-[var(--radius-subtle)] ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    <span>{ch.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cinematic Interactive Freelance Stage */}
          <div
            ref={stageRef}
            className="group relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[16/8] rounded-[var(--radius-default)] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl"
          >
            {/* Project Image as Living Visual Backdrop */}
            <div className="absolute inset-0">
              <Image
                src={currentChannel.image}
                alt={`${currentChannel.title} — client web deliverable`}
                fill
                className={`object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-102' : 'scale-100'
                }`}
                priority={false}
              />
              {/* Cinematic Dark Gradient for High-Contrast Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40" />
            </div>

            {/* Top Telemetry & Status Bar */}
            <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 text-xs font-mono">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-neutral-700/80 text-white">
                  <span className={`h-2 w-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">
                    {isPlaying ? 'ACTIVE SHOWREEL' : 'PAUSED'}
                  </span>
                </span>

                <span className="px-2.5 py-1 rounded bg-blue-950/90 backdrop-blur-md border border-blue-700/80 text-blue-300 font-semibold text-[10px]">
                  {currentChannel.badge}
                </span>

                <span className="hidden md:inline-block px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-neutral-800 text-neutral-300 text-[10px]">
                  {currentChannel.timeline}
                </span>
              </div>

              {/* Device Viewport Toggle (Desktop vs Mobile Preview) */}
              <div className="flex items-center gap-1 bg-black/70 p-1 rounded border border-neutral-800 text-[10px]">
                <button
                  type="button"
                  onClick={() => setActiveDevice('desktop')}
                  className={`p-1.5 rounded transition-all ${
                    activeDevice === 'desktop' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Desktop View"
                >
                  <Laptop className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveDevice('mobile')}
                  className={`p-1.5 rounded transition-all ${
                    activeDevice === 'mobile' ? 'bg-blue-600 text-white' : 'text-neutral-400 hover:text-white'
                  }`}
                  title="Mobile View"
                >
                  <Smartphone className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* Central Client Overlay Card */}
            <div className="absolute inset-x-4 sm:inset-x-8 top-16 sm:top-20 bottom-24 z-20 flex flex-col justify-center pointer-events-none">
              <div className="max-w-xl p-4 sm:p-6 rounded-[var(--radius-default)] bg-black/80 backdrop-blur-md border border-neutral-700/80 shadow-2xl pointer-events-auto space-y-4">
                
                {/* Title & Speed Score */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                      {currentChannel.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                      {currentChannel.subtitle}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/60 text-emerald-400 font-mono font-bold text-xs">
                      ⚡ {currentChannel.speedScore}
                    </span>
                    <span className="text-[10px] text-neutral-400 block font-mono mt-0.5">Google Score</span>
                  </div>
                </div>

                {/* Key Deliverable Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300 pt-1">
                  {currentChannel.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Client Quote & Results Pill */}
                <div className="pt-2 border-t border-neutral-800 flex items-center justify-between gap-3 text-xs">
                  <p className="text-[11px] text-neutral-400 italic truncate max-w-xs">
                    {currentChannel.clientQuote}
                  </p>
                  <div className="shrink-0 flex items-center gap-1.5 font-mono text-emerald-400 font-bold bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span>{currentChannel.metric} {currentChannel.metricLabel}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Playback & Freelance Action Controls */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-20 space-y-3">
              
              {/* Scrubbing Progress Bar */}
              <div
                role="progressbar"
                aria-valuenow={progress}
                aria-valuemin={0}
                aria-valuemax={100}
                className="relative h-1.5 w-full bg-neutral-800 rounded-full cursor-pointer overflow-hidden group/bar"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickedPercent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
                  setProgress(Number(clickedPercent.toFixed(1)));
                }}
              >
                <div
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400 transition-all duration-100 will-change-transform"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Lower Controls Row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 transition-colors shadow-md"
                    aria-label={isPlaying ? 'Pause showreel' : 'Play showreel'}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                  </button>

                  <div className="text-xs font-mono text-neutral-300">
                    <span>Channel {currentChannelIndex + 1} of {SHOWREEL_CHANNELS.length}</span>
                    <span className="text-neutral-500"> · </span>
                    <span className="text-neutral-400">{currentChannel.label}</span>
                  </div>

                  {/* Audio / Waveform Visualizer Bars */}
                  <div
                    ref={waveformRef}
                    className="hidden sm:flex items-center gap-0.5 h-4 px-2 py-0.5 rounded bg-neutral-900/80 border border-neutral-800"
                    title="Live Audio Spectrum"
                  >
                    {[...Array(10)].map((_, i) => (
                      <span
                        key={i}
                        className="wave-bar w-0.5 h-full bg-blue-400 rounded-full origin-bottom"
                        style={{ transform: 'scaleY(0.4)' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Conversion Actions */}
                <div className="flex items-center gap-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    <span>WhatsApp Me</span>
                  </a>

                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium border-0"
                  >
                    <span>Hire For Similar Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Why Freelance With Susthir Digital Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-[var(--radius-default)] bg-neutral-900/70 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Zero Agency Markup</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Save 60% vs Agency Rates</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                You pay solely for senior engineering craft. No fancy office rents, no non-coding account managers, and no inflated retainers.
              </p>
            </div>

            <div className="p-5 rounded-[var(--radius-default)] bg-neutral-900/70 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Zap className="h-3.5 w-3.5" />
                <span>100/100 Core Web Vitals</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Sub-Second Speed That Ranks</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Google rewards speed. Every website we build passes Core Web Vitals with flying colors, cutting bounce rates and lifting conversions.
              </p>
            </div>

            <div className="p-5 rounded-[var(--radius-default)] bg-neutral-900/70 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Zero-Risk Guarantee</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Milestones &amp; 30-Day Warranty</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Pay in clear stages as you inspect real working preview links. Includes 30 days of free bug-fixing and post-launch technical support.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
