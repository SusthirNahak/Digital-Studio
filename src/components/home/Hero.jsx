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
  Layers,
  Sparkles,
  Activity,
  Cpu,
} from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('3d'); // '3d' | 'canvas'
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const canvasRef = useRef(null);
  const pulseRef = useRef(null);
  const signalRef = useRef(null);

  // 3D Perspective Tilt on Mouse Movement
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg tilt
    const rotateY = ((x - centerX) / centerX) * 9;

    gsap.to(cardRef.current, {
      rotateX,
      rotateY,
      transformPerspective: 900,
      duration: 0.4,
      ease: 'power2.out',
    });

    if (glareRef.current) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 65%)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: 'power2.out',
    });
    if (glareRef.current) {
      glareRef.current.style.background = 'transparent';
    }
  };

  // Ambient GSAP Floating & Pulse animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Gentle floating animation
      if (cardRef.current) {
        gsap.to(cardRef.current, {
          y: -8,
          duration: 4.5,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }

      // Signal sweep
      if (signalRef.current) {
        gsap.to(signalRef.current, {
          x: '200%',
          duration: 3.5,
          repeat: -1,
          repeatDelay: 1.2,
          ease: 'power2.inOut',
        });
      }

      // Status pulse
      if (pulseRef.current) {
        gsap.to(pulseRef.current, {
          scale: 1.3,
          opacity: 0.6,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    });

    return () => ctx.revert();
  }, []);

  // Real-time Canvas Wave Matrix (when canvas tab is active)
  useEffect(() => {
    if (activeTab !== 'canvas') return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let step = 0;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      if (!ctx) return;
      ctx.fillStyle = '#0a0a0c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      step += 0.03;

      // Draw flowing 3D mathematical sine ribbon lattice
      const waves = 5;
      for (let w = 0; w < waves; w++) {
        ctx.beginPath();
        ctx.lineWidth = 1.4;
        const alpha = 0.7 - w * 0.12;
        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;

        for (let x = 0; x < canvas.width; x += 12) {
          const y =
            canvas.height * 0.5 +
            Math.sin(x * 0.01 + step + w * 0.6) * 32 +
            Math.cos(x * 0.005 - step * 0.8) * 22;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Matrix particles
      for (let p = 0; p < 24; p++) {
        const px = ((p * 47 + step * 25) % canvas.width);
        const py =
          canvas.height * 0.5 +
          Math.sin(px * 0.01 + step) * 35;

        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#60a5fa';
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, [activeTab]);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello Susthir Digital, I would like to discuss a new project.'
      )}`
    : 'https://wa.me/?text=Hello%20Susthir%20Digital%2C%20I%20would%20like%20to%20discuss%20a%20new%20project.';

  return (
    <Section spacing="generous" className="border-b border-[var(--color-border-subtle)] overflow-hidden relative">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Confident Business-Focused Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow / Agency Marker */}
            <div className="animate-reveal-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[var(--radius-subtle)] bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)] text-neutral-800">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <Eyebrow variant="default" className="text-[11px]">
                  Susthir Digital
                </Eyebrow>
              </div>
            </div>

            {/* Powerful Editorial Headline */}
            <div className="animate-reveal-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.06] text-balance">
                Build digital products that move business forward.
              </h1>
            </div>

            {/* Supporting Copy */}
            <div className="animate-reveal-3">
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl text-balance">
                Websites, ecommerce experiences and custom web applications built around how your business actually works.
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-medium tracking-wide">
                Engineered in Odisha · Built for the Web Worldwide
              </p>
            </div>

            {/* Action Group */}
            <div className="animate-reveal-4 flex flex-wrap items-center gap-3 pt-1">
              <Button href="/contact" variant="primary" size="lg" className="group">
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              
              <Button href="#work" variant="secondary" size="lg">
                View Our Work
              </Button>

              <a
                href="#motion-reel"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-700 hover:text-blue-600 px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <span className="flex items-center justify-center h-5 w-5 rounded-full bg-blue-50 text-blue-600">
                  <Play className="h-2.5 w-2.5 ml-0.5 fill-current" />
                </span>
                <span>Watch Reel</span>
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-neutral-600 hover:text-neutral-900 px-3 py-2 rounded-md hover:bg-neutral-100 transition-colors cursor-pointer"
                aria-label="Direct inquiry via WhatsApp"
              >
                <MessageSquare className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Reassurance Indicators */}
            <div className="pt-3 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center gap-6 text-xs text-neutral-500">
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-600" />
                <span>Performance-Focused Builds</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Zero Outsourcing · Direct Engineering</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Perspective Showcase */}
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
                
                {/* Browser/Window Header with Mode Selector */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-neutral-900/90 backdrop-blur-md">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
                  </div>

                  {/* Mode Selector Tabs */}
                  <div className="flex items-center gap-1 bg-black/60 p-1 rounded border border-neutral-800 text-[10px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab('3d')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        activeTab === '3d'
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      3D Spatial
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('canvas')}
                      className={`px-2 py-0.5 rounded transition-all ${
                        activeTab === 'canvas'
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Live Wave
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <span ref={pulseRef} className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="hidden sm:inline">60 FPS</span>
                  </div>
                </div>

                {/* Primary Preview Canvas (3D Render or Live Canvas) */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                  
                  {activeTab === '3d' ? (
                    <>
                      {/* Ultra-High-Fidelity 3D Glass Render */}
                      <Image
                        src="/assets/home/susthir_3d_hero.jpg"
                        alt="Susthir Digital 3D Abstract Architecture"
                        fill
                        priority
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Subtle Dark Vignette & Color Grade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-neutral-950/40 pointer-events-none" />

                      {/* Floating Glassmorphic Telemetry Chips */}
                      <div className="absolute inset-x-4 top-4 flex items-center justify-between pointer-events-none z-10">
                        <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-neutral-700/80 text-[10px] font-mono text-white">
                          SUSTHIR // SPATIAL
                        </span>
                        <span className="px-2.5 py-1 rounded bg-blue-950/80 backdrop-blur-md border border-blue-700/80 text-[10px] font-mono text-blue-300 font-semibold">
                          NEXT.JS 15 &amp; REACT 19
                        </span>
                      </div>

                      {/* Bottom Floating Spec Plate */}
                      <div className="absolute inset-x-4 bottom-4 p-3 rounded-[var(--radius-subtle)] bg-neutral-950/80 backdrop-blur-md border border-neutral-800 z-10 space-y-2">
                        <div className="flex items-center justify-between text-[11px] font-mono">
                          <span className="text-neutral-400">Core Web Vitals</span>
                          <span className="text-emerald-400 font-semibold">100 / 100 PASS</span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-neutral-800/80 text-center font-mono text-[10px]">
                          <div className="bg-neutral-900/60 p-1.5 rounded">
                            <span className="text-neutral-500 block">LCP</span>
                            <span className="text-white font-semibold block">&lt; 0.6s</span>
                          </div>
                          <div className="bg-neutral-900/60 p-1.5 rounded">
                            <span className="text-neutral-500 block">STACK</span>
                            <span className="text-blue-400 font-semibold block">Full-Stack</span>
                          </div>
                          <div className="bg-neutral-900/60 p-1.5 rounded">
                            <span className="text-neutral-500 block">MOTION</span>
                            <span className="text-emerald-400 font-semibold block">GSAP 60fps</span>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Live Canvas Wave Mode */
                    <div className="w-full h-full relative">
                      <canvas ref={canvasRef} className="w-full h-full block" />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800 text-[10px] font-mono text-blue-300">
                        Interactive Wave Lattice · 60 FPS
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
                <div className="px-4 py-2.5 bg-neutral-900/90 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>Websites · Ecommerce · Web Apps</span>
                  </div>
                  <span className="text-neutral-300 font-semibold">Interactive 3D Stage</span>
                </div>

              </div>

              {/* Floating Status Pill */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2.5 px-3.5 py-2 rounded-[var(--radius-default)] bg-white border border-neutral-200 shadow-xl text-xs font-medium text-neutral-900 z-30 transition-transform group-hover:scale-105">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold">Now accepting client projects</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
