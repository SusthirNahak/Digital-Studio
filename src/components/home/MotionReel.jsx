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
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HOTSPOTS = [
  {
    id: 'physics',
    x: '24%',
    y: '38%',
    label: 'Physics-Based Motion',
    tech: 'GSAP + Web Animations API',
    desc: 'Fluid springs and inertial scrolling calculated per frame without stutter.',
  },
  {
    id: 'spatial',
    x: '68%',
    y: '28%',
    label: '3D Spatial Geometry',
    tech: 'WebGL & CSS 3D Transforms',
    desc: 'Hardware-accelerated perspective rendering with realistic light diffusion.',
  },
  {
    id: 'performance',
    x: '52%',
    y: '72%',
    label: 'Sub-50ms Response',
    tech: 'Next.js App Router & React 19',
    desc: 'Zero-delay route transitions with server-driven streaming architecture.',
  },
];

const PRESET_MODES = [
  { id: 'cinematic', label: 'Cinematic Reel', icon: Play },
  { id: 'interactive', label: 'Interactive Nodes', icon: Sliders },
  { id: 'metrics', label: 'Performance Telemetry', icon: Activity },
];

export default function MotionReel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeHotspot, setActiveHotspot] = useState(HOTSPOTS[0]);
  const [currentMode, setCurrentMode] = useState('cinematic');
  const [progress, setProgress] = useState(38);

  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const progressBarRef = useRef(null);
  const waveformRef = useRef(null);
  const canvasRef = useRef(null);

  // GSAP ScrollTrigger for entering stage
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !stageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        stageRef.current,
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
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
      setProgress((prev) => (prev >= 100 ? 0 : Number((prev + 0.4).toFixed(1))));
    }, 100);

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

  // Ambient Dynamic Motion Canvas (Sine Lattice Streams)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

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
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isPlaying) {
        time += 0.02;
      }

      // Draw subtle luminous wave ribbons
      const lines = 4;
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 - i * 0.03})`;

        for (let x = 0; x < canvas.width; x += 15) {
          const y =
            canvas.height * 0.6 +
            Math.sin(x * 0.008 + time + i * 0.8) * 35 +
            Math.cos(x * 0.004 - time * 0.5) * 20;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Floating interactive nodes
      if (currentMode === 'interactive') {
        HOTSPOTS.forEach((spot, idx) => {
          const posX = (parseFloat(spot.x) / 100) * canvas.width;
          const posY = (parseFloat(spot.y) / 100) * canvas.height;

          // Pulse ring
          const pulseSize = 14 + Math.sin(time * 3 + idx) * 4;
          ctx.beginPath();
          ctx.arc(posX, posY, pulseSize, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.4)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Center dot
          ctx.beginPath();
          ctx.arc(posX, posY, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#3b82f6';
          ctx.fill();
        });
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying, currentMode]);

  return (
    <Section
      ref={containerRef}
      spacing="generous"
      className="bg-neutral-950 text-white relative overflow-hidden border-b border-neutral-900"
    >
      {/* Background Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-900/20 via-indigo-900/15 to-violet-900/20 blur-3xl pointer-events-none rounded-full"
      />

      <Container size="default">
        <div className="space-y-10 sm:space-y-14 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-neutral-800/80">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <Eyebrow variant="accent" className="text-blue-400">
                  MOTION &amp; MODERN ENGINEERING
                </Eyebrow>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.08] text-balance">
                Digital experiences with depth, motion, and speed.
              </h2>

              <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl text-balance">
                Websites shouldn&apos;t feel like frozen brochures. We craft fluid 60fps micro-interactions, 3D spatial depth, and responsive layouts that invite real engagement.
              </p>
            </div>

            {/* Mode Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-[var(--radius-subtle)] bg-neutral-900/90 border border-neutral-800">
              {PRESET_MODES.map((mode) => {
                const Icon = mode.icon;
                const isActive = currentMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setCurrentMode(mode.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono transition-all rounded-[var(--radius-subtle)] ${
                      isActive
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{mode.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cinematic Motion Stage (16:9 Aspect Ratio) */}
          <div
            ref={stageRef}
            className="group relative w-full aspect-video sm:aspect-[21/9] lg:aspect-[16/8] rounded-[var(--radius-default)] bg-neutral-900 border border-neutral-800 overflow-hidden shadow-2xl"
          >
            {/* 3D Motion Render Image as Living Backdrop */}
            <div className="absolute inset-0">
              <Image
                src="/assets/home/susthir_motion_showcase.jpg"
                alt="Susthir Digital 3D Interface and Motion Architecture"
                fill
                className={`object-cover transition-transform duration-700 ${
                  isPlaying ? 'scale-102 group-hover:scale-105' : 'scale-100'
                }`}
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60" />
            </div>

            {/* Dynamic WebGL Canvas Overlay for Real-Time Vector Wave */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 pointer-events-none z-10 w-full h-full"
            />

            {/* Scanline CRT Texture */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40 z-10"
            />

            {/* Top Telemetry Bar */}
            <div className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 text-xs font-mono">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-neutral-700/80 text-white">
                  <span className={`h-2 w-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                  <span className="font-semibold uppercase tracking-wider">
                    {isPlaying ? 'ACTIVE REEL' : 'PAUSED'}
                  </span>
                </span>

                <span className="hidden sm:inline-block px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-neutral-800 text-neutral-300">
                  FRAME: 3840 × 2160 // 60 FPS
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-blue-950/80 border border-blue-800/80 text-blue-300 text-[11px] font-semibold">
                  ENGINEERED IN ODISHA
                </span>
              </div>
            </div>

            {/* Interactive Hotspot Callouts (Mode: Interactive) */}
            {currentMode === 'interactive' && (
              <div className="absolute inset-0 z-20 pointer-events-none">
                {HOTSPOTS.map((spot) => {
                  const isSelected = activeHotspot.id === spot.id;
                  return (
                    <div
                      key={spot.id}
                      style={{ left: spot.x, top: spot.y }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveHotspot(spot)}
                        className={`group/hotspot relative flex items-center justify-center h-8 w-8 rounded-full border transition-all ${
                          isSelected
                            ? 'bg-blue-600 border-white scale-125 shadow-lg shadow-blue-500/50'
                            : 'bg-black/80 border-neutral-600 hover:border-blue-400 hover:scale-110'
                        }`}
                        aria-label={`Inspect ${spot.label}`}
                      >
                        <span className="h-2 w-2 rounded-full bg-white" />
                      </button>

                      {isSelected && (
                        <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-64 p-3.5 rounded-[var(--radius-default)] bg-black/90 backdrop-blur-xl border border-blue-500/60 shadow-xl space-y-1 text-left animate-fadeIn">
                          <div className="flex items-center justify-between text-[10px] font-mono text-blue-400">
                            <span>FEATURE NODE</span>
                            <span>{spot.tech}</span>
                          </div>
                          <h4 className="text-xs font-semibold text-white">{spot.label}</h4>
                          <p className="text-[11px] text-neutral-300 leading-normal">{spot.desc}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Performance Telemetry Overlay (Mode: Metrics) */}
            {currentMode === 'metrics' && (
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-center items-center bg-black/60 backdrop-blur-xs">
                <div className="w-full max-w-xl p-5 sm:p-6 rounded-[var(--radius-default)] bg-neutral-900/90 border border-neutral-700/80 shadow-2xl space-y-5">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                        Live System Benchmark
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                      OPTIMIZED 100/100
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded bg-neutral-950/80 border border-neutral-800 space-y-1">
                      <span className="text-[10px] font-mono text-neutral-400 block uppercase">Framerate</span>
                      <span className="text-2xl font-bold font-mono text-white block">60.0</span>
                      <span className="text-[10px] font-mono text-emerald-400 block">Steady V-Sync</span>
                    </div>
                    <div className="p-3 rounded bg-neutral-950/80 border border-neutral-800 space-y-1">
                      <span className="text-[10px] font-mono text-neutral-400 block uppercase">Input Latency</span>
                      <span className="text-2xl font-bold font-mono text-blue-400 block">&lt; 38ms</span>
                      <span className="text-[10px] font-mono text-neutral-400 block">Instant UI</span>
                    </div>
                    <div className="p-3 rounded bg-neutral-950/80 border border-neutral-800 space-y-1">
                      <span className="text-[10px] font-mono text-neutral-400 block uppercase">Layout Shift</span>
                      <span className="text-2xl font-bold font-mono text-emerald-400 block">0.00</span>
                      <span className="text-[10px] font-mono text-neutral-400 block">CLS Zero</span>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed text-center font-mono">
                    All client projects deployed with clean markup, modular bundles, and optimized asset pipelines.
                  </p>
                </div>
              </div>
            )}

            {/* Bottom Playback & Control Strip */}
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20 space-y-3">
              
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
                  className="h-full bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 transition-all duration-100 will-change-transform"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Lower Controls Row */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 transition-colors shadow-md"
                    aria-label={isPlaying ? 'Pause motion preview' : 'Play motion preview'}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                  </button>

                  <div className="text-xs font-mono text-neutral-300">
                    <span>{String(Math.floor((progress / 100) * 16)).padStart(2, '0')}:</span>
                    <span>{String(Math.floor(((progress / 100) * 60) % 60)).padStart(2, '0')}</span>
                    <span className="text-neutral-500"> / 02:40</span>
                  </div>

                  {/* Audio / Waveform Visualizer Bars */}
                  <div
                    ref={waveformRef}
                    className="hidden sm:flex items-center gap-0.5 h-4 px-2 py-0.5 rounded bg-neutral-900/80 border border-neutral-800"
                    title="Audio Spectrum Simulation"
                  >
                    {[...Array(12)].map((_, i) => (
                      <span
                        key={i}
                        className="wave-bar w-0.5 h-full bg-blue-400 rounded-full origin-bottom"
                        style={{ transform: 'scaleY(0.4)' }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Action & Inquire Direct */}
                <div className="flex items-center gap-3">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium border-0"
                  >
                    <span>Build Your Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </div>
              </div>

            </div>

          </div>

          {/* 3 Value Pillars under the Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-[var(--radius-default)] bg-neutral-900/60 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Modern Spatial Craft</span>
              </div>
              <h3 className="text-lg font-semibold text-white">3D Interfaces &amp; Depth</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Elevate your brand beyond standard boilerplate templates with clean 3D perspective layers, glassmorphism, and responsive physics.
              </p>
            </div>

            <div className="p-5 rounded-[var(--radius-default)] bg-neutral-900/60 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <Zap className="h-3.5 w-3.5" />
                <span>Zero Lag Architecture</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Butter-Smooth GSAP Timelines</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Animations synced with the browser paint cycle using GSAP ScrollTrigger and RequestAnimationFrame for flawless 60fps scrolling.
              </p>
            </div>

            <div className="p-5 rounded-[var(--radius-default)] bg-neutral-900/60 border border-neutral-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Direct Commercial Focus</span>
              </div>
              <h3 className="text-lg font-semibold text-white">Engineered for Conversion</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Aesthetics that drive real commercial inquiries. Clear user hierarchy, intuitive navigation paths, and frictionless mobile checkouts.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}
