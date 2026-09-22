'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { Globe, Radio, Wifi, MapPin, Zap, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalNetwork() {
  const sectionRef = useRef(null);
  const networkSvgRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Gentle entrance for the telemetry container
      gsap.fromTo(
        '.network-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      // Subtle slow pulse along global connection paths
      gsap.to('.pulse-node', {
        scale: 1.25,
        opacity: 0.7,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <Section
      ref={sectionRef}
      spacing="generous"
      className="border-b border-neutral-800 bg-neutral-950 text-white relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" />

      <Container size="default">
        <div className="space-y-12 sm:space-y-16">
          
          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-neutral-800">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <Eyebrow variant="accent">GEOGRAPHIC ORIGIN &amp; GLOBAL REACH</Eyebrow>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
                Engineered in Odisha.
                <br />
                <span className="text-neutral-400 font-normal">Built for the web worldwide.</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-normal pt-2">
                We are based in Odisha, India and work with businesses across India and remotely.
              </p>
            </div>

            {/* Factual origin coordinates badge */}
            <div className="p-4 rounded-[var(--radius-subtle)] bg-neutral-900 border border-neutral-800 space-y-1 font-mono text-xs text-neutral-400 shrink-0">
              <div className="flex items-center gap-2 text-white">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-semibold uppercase tracking-wider">ODISHA HUB ACTIVE</span>
              </div>
              <p className="text-[11px] text-neutral-500">20.9517° N, 85.0985° E</p>
              <p className="text-[11px] text-[var(--color-accent)] pt-1">Remote-first collaboration</p>
            </div>
          </div>

          {/* Large Immersive SVG Network Visual */}
          <div className="network-card relative rounded-[var(--radius-default)] bg-neutral-900/90 border border-neutral-800 shadow-2xl overflow-hidden p-6 sm:p-10">
            
            {/* Top Frame Telemetry Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-800 text-xs font-mono text-neutral-400">
              <div className="flex items-center gap-2.5">
                <Radio className="h-4 w-4 text-[var(--color-accent)]" />
                <span className="font-medium tracking-wide text-neutral-200">
                  DIGITAL TOPOLOGY // DISTRIBUTED WORK
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[11px]">
                <span>ENCRYPTED REPOSITORIES</span>
                <span>•</span>
                <span className="text-emerald-400">STATUS: 100% OPERATIONAL</span>
              </div>
            </div>

            {/* Immersive Central Network Grid */}
            <div className="relative py-8 sm:py-12 flex items-center justify-center min-h-[380px] sm:min-h-[480px]">
              
              {/* Scalable Vector Network */}
              <svg
                ref={networkSvgRef}
                viewBox="0 0 800 500"
                className="w-full h-full max-h-[500px] overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  {/* Glowing linear gradient for primary Odisha connection line */}
                  <linearGradient id="odishaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.2" />
                  </linearGradient>

                  <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#2563EB" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#818CF8" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {/* Outer Celestial Frame Circles */}
                <g className={reducedMotion ? '' : 'motion-safe:animate-[spin_120s_linear_infinite]'} style={{ transformOrigin: '400px 250px' }}>
                  <circle cx="400" cy="250" r="220" stroke="#262626" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="400" cy="250" r="170" stroke="#1f1f1f" strokeWidth="1" />
                  <circle cx="400" cy="250" r="110" stroke="#262626" strokeWidth="0.8" strokeDasharray="2 6" />

                  {/* Meridian Ellipses */}
                  <ellipse cx="400" cy="250" rx="220" ry="70" stroke="#262626" strokeWidth="0.8" />
                  <ellipse cx="400" cy="250" rx="220" ry="140" stroke="#1f1f1f" strokeWidth="0.8" />
                  <ellipse cx="400" cy="250" rx="70" ry="220" stroke="#1f1f1f" strokeWidth="0.8" />
                  <ellipse cx="400" cy="250" rx="140" ry="220" stroke="#262626" strokeWidth="0.8" />

                  {/* Crosshair Cardinal Axes */}
                  <line x1="180" y1="250" x2="620" y2="250" stroke="#262626" strokeWidth="0.8" />
                  <line x1="400" y1="30" x2="400" y2="470" stroke="#262626" strokeWidth="0.8" />
                </g>

                {/* Global Network Connection Arcs */}
                <g>
                  {/* Arc 1: Odisha to West / Mumbai / International West */}
                  <path
                    d="M 430 235 Q 320 180 210 210"
                    stroke="url(#odishaGlow)"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    className="opacity-75"
                  />
                  {/* Arc 2: Odisha to South / Bengaluru */}
                  <path
                    d="M 430 235 Q 390 280 370 320"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    className="opacity-80"
                  />
                  {/* Arc 3: Odisha to North / Delhi */}
                  <path
                    d="M 430 235 Q 390 180 360 160"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                    className="opacity-80"
                  />
                  {/* Arc 4: Transcontinental East Corridor */}
                  <path
                    d="M 430 235 Q 530 210 630 220"
                    stroke="url(#arcGlow)"
                    strokeWidth="1.8"
                    strokeDasharray="4 4"
                    className="opacity-70"
                  />
                  {/* Arc 5: Northern Transcontinental Arc */}
                  <path
                    d="M 430 235 Q 510 130 580 150"
                    stroke="#38BDF8"
                    strokeWidth="1.2"
                    strokeDasharray="2 4"
                    className="opacity-60"
                  />
                  {/* Arc 6: South Pacific Arch */}
                  <path
                    d="M 430 235 Q 520 310 590 340"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                    strokeDasharray="3 5"
                    className="opacity-60"
                  />
                </g>

                {/* Moving Signal along Primary Connection Arc (SVG native animation) */}
                {!reducedMotion && (
                  <>
                    <circle r="3" fill="#60A5FA">
                      <animateMotion
                        path="M 430 235 Q 320 180 210 210"
                        dur="4s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle r="3" fill="#38BDF8">
                      <animateMotion
                        path="M 430 235 Q 530 210 630 220"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </>
                )}

                {/* Remote Target Nodes */}
                {/* Node: West Corridor (Americas / EMEA gateway) */}
                <g transform="translate(210, 210)">
                  <circle cx="0" cy="0" r="3" fill="#737373" />
                  <circle cx="0" cy="0" r="7" stroke="#525252" strokeWidth="0.8" />
                  <text x="-12" y="-12" fill="#A3A3A3" fontSize="10" fontFamily="monospace">
                    REMOTE WEST
                  </text>
                </g>

                {/* Node: North (Delhi region) */}
                <g transform="translate(360, 160)">
                  <circle cx="0" cy="0" r="2.5" fill="#A3A3A3" />
                  <text x="-40" y="-8" fill="#737373" fontSize="9" fontFamily="monospace">
                    NORTH HUB
                  </text>
                </g>

                {/* Node: South (Bengaluru region) */}
                <g transform="translate(370, 320)">
                  <circle cx="0" cy="0" r="2.5" fill="#A3A3A3" />
                  <text x="-45" y="15" fill="#737373" fontSize="9" fontFamily="monospace">
                    SOUTH HUB
                  </text>
                </g>

                {/* Node: East Transcontinental (APAC / Global) */}
                <g transform="translate(630, 220)">
                  <circle cx="0" cy="0" r="3" fill="#737373" />
                  <circle cx="0" cy="0" r="7" stroke="#525252" strokeWidth="0.8" />
                  <text x="10" y="4" fill="#A3A3A3" fontSize="10" fontFamily="monospace">
                    REMOTE APAC / GLOBAL
                  </text>
                </g>

                {/* Node: North East Transcontinental */}
                <g transform="translate(580, 150)">
                  <circle cx="0" cy="0" r="2" fill="#525252" />
                </g>

                {/* Node: South East Transcontinental */}
                <g transform="translate(590, 340)">
                  <circle cx="0" cy="0" r="2" fill="#525252" />
                </g>

                {/* ==================================================== */}
                {/* PRIMARY ORIGIN POINT: ODISHA NODE                   */}
                {/* ==================================================== */}
                <g transform="translate(430, 235)">
                  {/* Concentric Radar Ping Rings */}
                  <circle cx="0" cy="0" r="22" stroke="#2563EB" strokeWidth="0.8" className="pulse-node opacity-40" />
                  <circle cx="0" cy="0" r="14" stroke="#2563EB" strokeWidth="1" className="pulse-node opacity-60" />
                  <circle cx="0" cy="0" r="6" fill="#2563EB" />
                  <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />

                  {/* Visual Origin Callout Bracket */}
                  <line x1="8" y1="-8" x2="28" y2="-28" stroke="#38BDF8" strokeWidth="1" />
                  <line x1="28" y1="-28" x2="90" y2="-28" stroke="#38BDF8" strokeWidth="1" />

                  {/* Marker label */}
                  <rect x="32" y="-46" width="105" height="16" rx="2" fill="#1E293B" stroke="#334155" strokeWidth="0.8" />
                  <text x="36" y="-34" fill="#38BDF8" fontSize="9" fontWeight="bold" fontFamily="monospace">
                    ODISHA, IN [ORIGIN]
                  </text>
                </g>
              </svg>

            </div>

            {/* Bottom Capability Specs Strip */}
            <div className="pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Headquartered in Odisha</span>
                  <span className="text-neutral-500 text-[11px]">Direct engineering from Eastern India</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Pan-India &amp; Remote</span>
                  <span className="text-neutral-500 text-[11px]">Collaborating across all timezones</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Zap className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Modern Stack Delivery</span>
                  <span className="text-neutral-500 text-[11px]">Version-controlled deployments</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}
