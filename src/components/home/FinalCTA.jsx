'use client';

import { useEffect, useRef } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTA() {
  const ctaCardRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ctaCardRef.current,
        { opacity: 0.85, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaCardRef.current,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.3,
          },
        }
      );
    }, ctaCardRef);

    return () => ctx.revert();
  }, []);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
        "Hello Susthir Digital, I'm interested in discussing a project."
      )}`
    : 'https://wa.me/?text=Hello%20Susthir%20Digital%2C%20I%20am%20interested%20in%20discussing%20a%20project.';

  return (
    <Section
      id="contact"
      spacing="generous"
      className="bg-neutral-950 text-white relative overflow-hidden"
    >
      <Container size="default">
        <div
          ref={ctaCardRef}
          className="max-w-3xl mx-auto text-center space-y-8 sm:space-y-10 will-change-transform"
        >
          {/* Eyebrow */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-subtle)] bg-blue-950/80 border border-blue-800/80 text-blue-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              <Eyebrow variant="default" className="text-blue-300 text-[11px] font-semibold tracking-wider">
                READY TO HIRE FOR YOUR PROJECT?
              </Eyebrow>
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1] text-balance">
            Let&apos;s build a website that wins you real clients and revenue.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl mx-auto text-balance">
            Whether you need a high-converting Shopify store, a custom Next.js web application, or a complete website redesign—we deliver in 2–3 weeks with fixed milestone pricing.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="bg-white text-neutral-950 hover:bg-neutral-100 transition-transform group shadow-md"
            >
              <span>Get Your Free Project Estimate</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-[var(--radius-default)] border border-emerald-800/80 hover:border-emerald-600 bg-emerald-950/40 text-sm font-medium text-emerald-300 hover:text-white transition-all cursor-pointer select-none group"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>Direct WhatsApp Chat</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Reassurance note */}
          <div className="pt-4 border-t border-neutral-900 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>Responses within 2–4 hours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              <span>No agency markup or middleman fees</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              <span>Free 30-day post-launch warranty</span>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
