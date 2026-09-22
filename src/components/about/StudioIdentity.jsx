'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ArrowUpRight, Code, ShieldCheck, Terminal, User } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StudioIdentity() {
  const [imageError, setImageError] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.identity-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
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
      className="border-b border-[var(--color-border)] bg-[var(--color-surface)]"
    >
      <Container size="default">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Section Eyebrow & Title */}
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              <Eyebrow variant="accent">THE STUDIO</Eyebrow>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
              Digital work led from the ground up.
            </h2>
          </div>

          {/* Identity Plate Card */}
          <div className="identity-card p-6 sm:p-10 rounded-[var(--radius-default)] bg-white border border-neutral-200/90 shadow-2xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 items-center">
              
              {/* Visual Presentation / Portrait Slot (4 cols) */}
              <div className="md:col-span-4 flex justify-center">
                <div className="w-full max-w-[240px] aspect-square rounded-[var(--radius-subtle)] bg-neutral-950 border border-neutral-800 flex flex-col justify-between p-5 text-white relative overflow-hidden shadow-inner">
                  
                  {/* Portrait element (if dropped in /public/assets/founder/portrait.jpg) */}
                  {!imageError && (
                    <img
                      src="/assets/founder/portrait.jpg"
                      alt="Studio Founder"
                      onError={() => setImageError(true)}
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
                    />
                  )}

                  {/* Elegant Typography Monogram Placeholder (when image does not exist) */}
                  {imageError && (
                    <>
                      <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                        <span>DS // ARCHIVE</span>
                        <span className="text-[var(--color-accent)]">20.95° N</span>
                      </div>

                      <div className="my-auto text-center space-y-1">
                        <span className="text-4xl font-mono font-bold tracking-tight text-white block">
                          DS
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                          DIGITAL STUDIO
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-[9px] font-mono text-neutral-500 border-t border-neutral-800/80 pt-2">
                        <span>ODISHA, IN</span>
                        <span>DEV // FOUNDER</span>
                      </div>
                    </>
                  )}

                  {/* Precision Crosshairs */}
                  <div className="absolute top-2 left-2 text-[8px] text-neutral-600 font-mono pointer-events-none">+</div>
                  <div className="absolute top-2 right-2 text-[8px] text-neutral-600 font-mono pointer-events-none">+</div>
                  <div className="absolute bottom-2 left-2 text-[8px] text-neutral-600 font-mono pointer-events-none">+</div>
                  <div className="absolute bottom-2 right-2 text-[8px] text-neutral-600 font-mono pointer-events-none">+</div>
                </div>
              </div>

              {/* Information Column (8 cols) */}
              <div className="md:col-span-8 space-y-5">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-mono font-semibold tracking-wider uppercase">
                      Direct Leadership
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">Independent Practice</span>
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">
                    Digital Developer / Studio Founder
                  </h3>

                  <p className="text-sm font-mono text-neutral-600">
                    Odisha, India · Serving businesses pan-India and worldwide
                  </p>
                </div>

                <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                  <p>
                    Every engagement is handled directly from initial discovery to final code deployment. We avoid bureaucratic overhead so clients work with the person who actually designs and builds their digital product.
                  </p>
                </div>

                {/* Verified Technical Focus */}
                <div className="pt-2 border-t border-neutral-100 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    Core Technical Focus
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['WordPress', 'Shopify', 'React', 'Next.js', 'Custom Web Applications'].map((f) => (
                      <span
                        key={f}
                        className="px-2.5 py-1 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button href="/contact" variant="secondary" size="sm" className="group">
                    <span>Inquire with the Studio</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
