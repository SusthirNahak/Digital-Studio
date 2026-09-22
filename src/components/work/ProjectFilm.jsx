'use client';

import { useState, useRef, useEffect } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { Film, Play, VolumeX, Sparkles, Monitor, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectFilm({ videoSrc = '/assets/work/digital-studio-reel.mp4' }) {
  const [videoError, setVideoError] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // IntersectionObserver to pause video when outside viewport
  useEffect(() => {
    if (!videoRef.current || videoError || reducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {
            // Autoplay may be restricted in some browsers
          });
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [videoError, reducedMotion]);

  // GSAP reveal on scroll
  useEffect(() => {
    if (reducedMotion || !containerRef.current) return;

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
  }, [reducedMotion]);

  return (
    <Section spacing="default" className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
      <Container size="default">
        <div ref={containerRef} className="space-y-6 max-w-5xl mx-auto">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <Eyebrow variant="accent">SELECTED DIGITAL WORK</Eyebrow>
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                Design &amp; Engineering Reel
              </h2>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
              <span className="flex items-center gap-1.5">
                <VolumeX className="h-3.5 w-3.5 text-neutral-400" />
                <span>Muted Studio Audio</span>
              </span>
              <span>•</span>
              <span>16:9 Cinematic</span>
            </div>
          </div>

          {/* 16:9 Cinematic Frame */}
          <div className="relative w-full aspect-16/9 rounded-[var(--radius-default)] bg-neutral-950 border border-neutral-800 shadow-lg overflow-hidden select-none">
            
            {/* If local video source is valid and reduced motion is off, attempt to render video */}
            {!videoError && !reducedMotion && videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover"
                aria-label="Digital Studio product presentation reel"
              />
            ) : null}

            {/* Architectural Studio Poster Fallback (Displayed when video not present or on error / reduced motion) */}
            {(videoError || reducedMotion || !videoSrc) && (
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 text-white bg-radial from-neutral-900 to-neutral-950">
                
                {/* Top Telemetry Overlay */}
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 border-b border-neutral-800/80 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-neutral-200 font-semibold tracking-wider uppercase">
                      STUDIO ARCHIVE // 4K MASTER
                    </span>
                  </div>
                  <div className="hidden sm:flex items-center gap-4 text-neutral-500">
                    <span>TIMECODE 00:24:18</span>
                    <span>60 FPS</span>
                    <span className="text-[var(--color-accent)] font-semibold">PRORES 422 HQ</span>
                  </div>
                </div>

                {/* Center Presentation Visual */}
                <div className="text-center space-y-4 max-w-lg mx-auto my-auto py-4">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-neutral-900 border border-neutral-800 text-[var(--color-accent)] shadow-inner">
                    <Film className="h-5 w-5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                      Digital Experiences in Motion
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md mx-auto">
                      Prepared showcase slot for forthcoming product reels and interface walkthroughs across web and mobile platforms.
                    </p>
                  </div>

                  <div className="pt-2">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                      <span>Ready for media drop: /public/assets/work/</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Frame Markers */}
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 border-t border-neutral-800/80 pt-3">
                  <div className="flex items-center gap-3">
                    <span>FRAME 1920 × 1080</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="hidden sm:inline">COLOR GRADE: CINEMATIC MONO</span>
                  </div>
                  <span>DIGITAL STUDIO PORTFOLIO</span>
                </div>

              </div>
            )}

            {/* Corner Precision Crosshairs */}
            <div className="absolute top-3 left-3 text-neutral-600 font-mono text-[9px] pointer-events-none">+</div>
            <div className="absolute top-3 right-3 text-neutral-600 font-mono text-[9px] pointer-events-none">+</div>
            <div className="absolute bottom-3 left-3 text-neutral-600 font-mono text-[9px] pointer-events-none">+</div>
            <div className="absolute bottom-3 right-3 text-neutral-600 font-mono text-[9px] pointer-events-none">+</div>

          </div>

          {/* Sub-caption */}
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500 font-mono">
            <span>Engineering fidelity, interaction design, and fluid transitions.</span>
            <span className="text-neutral-700">Studio reel slot 16:9</span>
          </div>

        </div>
      </Container>
    </Section>
  );
}
