'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ArrowUpRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const visualRef = useRef(null);
  const pulseRef = useRef(null);
  const signalRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Subtle floating parallax on the entire engineering preview container
      gsap.to(visualRef.current, {
        y: -6,
        duration: 4.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // 2. Slow subtle shift in inner showcase panel
      if (panelRef.current) {
        gsap.to(panelRef.current, {
          y: -3,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.5,
        });
      }

      // 3. Subtle blue signal sweep across preview
      if (signalRef.current) {
        gsap.to(signalRef.current, {
          x: '180%',
          duration: 4,
          repeat: -1,
          repeatDelay: 1.5,
          ease: 'power2.inOut',
        });
      }

      // 4. Subtle status indicator scale
      if (pulseRef.current) {
        gsap.to(pulseRef.current, {
          scale: 1.25,
          opacity: 0.7,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
        });
      }
    }, visualRef);

    return () => ctx.revert();
  }, []);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        'Hello Digital Studio, I would like to discuss a new project.'
      )}`
    : 'https://wa.me/?text=Hello%20Digital%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20new%20project.';

  return (
    <Section spacing="generous" className="border-b border-[var(--color-border-subtle)] overflow-hidden">
      <Container size="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Confident Business-Focused Value Proposition */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow / Agency Marker */}
            <div className="animate-reveal-1">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[var(--radius-subtle)] bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)] text-neutral-800">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <Eyebrow variant="default" className="text-[11px]">
                  Digital Studio
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
                Websites, Shopify ecommerce, and custom web applications built for clarity, performance, and long-term business reliability.
              </p>
              <p className="text-xs sm:text-sm text-neutral-500 mt-2 font-medium tracking-wide">
                Engineered in Odisha, India · Collaborating with businesses nationwide and remote clients worldwide.
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
                <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
                <span>Clean Architecture · SEO-Ready</span>
              </div>
            </div>

          </div>

          {/* Right Column: Living Engineering Visual */}
          <div className="lg:col-span-5 w-full">
            <div ref={visualRef} className="relative mx-auto max-w-lg lg:max-w-none will-change-transform">
              
              {/* Subtle Ambient Studio Frame */}
              <div className="rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs overflow-hidden">
                
                {/* Browser/Window Header with Living Status Indicator */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-subtle)]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
                  </div>
                  <div className="relative overflow-hidden text-[11px] font-mono text-neutral-600 bg-[var(--color-surface)] px-3 py-0.5 rounded border border-[var(--color-border-subtle)] flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span>studio.build · active</span>
                    
                    {/* Subtle Signal Stream */}
                    <span
                      ref={signalRef}
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-transparent via-[var(--color-accent)]/20 to-transparent -translate-x-full pointer-events-none"
                    />
                  </div>
                  <span ref={pulseRef} className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>

                {/* Primary Preview Canvas */}
                <div className="p-5 sm:p-6 space-y-4 bg-[var(--color-surface)]">
                  
                  {/* Top Bar of Preview */}
                  <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border-subtle)]">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Live Engineering</span>
                      <p className="text-sm font-semibold text-neutral-900">Modern Commerce &amp; Web Platform</p>
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-neutral-900 text-white">
                      PROD · READY
                    </span>
                  </div>

                  {/* Wireframe / Modular Visual Composition */}
                  <div className="grid grid-cols-12 gap-3 pt-1">
                    
                    {/* Main Showcase Panel with living micro-motion */}
                    <div
                      ref={panelRef}
                      className="col-span-8 p-3.5 rounded bg-[var(--color-surface-subtle)] border border-[var(--color-border-subtle)] space-y-2.5 will-change-transform"
                    >
                      <div className="flex items-center justify-between">
                        <div className="h-3 w-16 bg-neutral-300 rounded-xs" />
                        <span className="text-[9px] font-mono text-neutral-400">99.8ms</span>
                      </div>
                      <div className="h-6 w-full bg-neutral-900/10 rounded-xs" />
                      <div className="h-2.5 w-3/4 bg-neutral-200 rounded-xs" />
                      
                      <div className="pt-3 grid grid-cols-2 gap-2">
                        <div className="p-2 rounded bg-white border border-neutral-200 space-y-1">
                          <span className="text-[9px] font-mono text-neutral-500">EXPERIENCE</span>
                          <p className="text-xs font-bold text-neutral-900">Fast &amp; Fluid</p>
                        </div>
                        <div className="p-2 rounded bg-white border border-neutral-200 space-y-1">
                          <span className="text-[9px] font-mono text-neutral-500">FOUNDATION</span>
                          <p className="text-xs font-bold text-[var(--color-accent)]">Clean Code</p>
                        </div>
                      </div>
                    </div>

                    {/* Secondary Stack Detail */}
                    <div className="col-span-4 flex flex-col justify-between p-3 rounded bg-neutral-950 text-neutral-300">
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Stack</span>
                        <div className="text-xs font-medium text-white leading-tight">WordPress, Shopify, Next.js</div>
                      </div>
                      <div className="space-y-1 pt-4 border-t border-neutral-800">
                        <div className="text-[10px] text-neutral-400 font-mono">Mobile-First</div>
                        <div className="text-[10px] text-emerald-400 font-mono font-semibold">SEO-Ready</div>
                      </div>
                    </div>

                  </div>

                  {/* Bottom Strip of Preview */}
                  <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-500 border-t border-[var(--color-border-subtle)]">
                    <span className="font-mono">Websites · Stores · Applications</span>
                    <span className="text-neutral-600 font-medium">Bespoke Engineering</span>
                  </div>

                </div>

              </div>

              {/* Architectural Availability Tag */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 items-center gap-2.5 px-3.5 py-2 rounded-[var(--radius-default)] bg-white border border-[var(--color-border)] shadow-xs text-xs font-medium text-neutral-800">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Now accepting new projects</span>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
