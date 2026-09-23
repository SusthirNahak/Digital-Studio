'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { FEATURED_PROJECTS } from '@/data/projects';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function ProjectFramePreview({ project }) {
  const displayDomain = project.url
    ? project.url.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : 'studio-platform.com';

  // Render bespoke simulated browser interfaces tailored to each client's specific sector
  if (project.slug === 'viva-kraft') {
    return (
      <div className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-xs hover:border-neutral-400 transition-colors">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{displayDomain}</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
            WordPress · Odisha, India
          </span>
        </div>

        {/* Industrial Kraft & Packaging Mockup */}
        <div className="p-6 sm:p-8 space-y-5 bg-white">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-xs bg-amber-700" />
              <span className="text-xs font-bold tracking-wider text-neutral-900 uppercase">VIVA KRAFT</span>
            </div>
            <div className="flex gap-3 text-[10px] font-mono text-neutral-500">
              <span className="hidden sm:inline">Kraft Paper</span>
              <span className="hidden sm:inline">Industrial Packaging</span>
              <span className="text-amber-800 font-semibold">Specs</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 items-center pt-1">
            <div className="col-span-12 sm:col-span-7 space-y-3">
              <span className="inline-block px-2 py-0.5 rounded-[var(--radius-subtle)] bg-amber-50 text-amber-900 border border-amber-200 text-[10px] font-mono uppercase tracking-wider font-semibold">
                Industrial Packaging &amp; Kraft Paper
              </span>
              <div className="h-6 w-11/12 bg-neutral-900 rounded-xs" />
              <div className="h-2.5 w-full bg-neutral-200 rounded-xs" />
              <div className="h-2.5 w-4/5 bg-neutral-200 rounded-xs" />
              <div className="pt-2 flex gap-2">
                <div className="h-6 w-24 bg-amber-800 rounded-xs flex items-center justify-center text-[9px] font-mono text-white font-semibold">
                  REQUEST RFQ
                </div>
                <div className="h-6 w-20 border border-neutral-300 rounded-xs flex items-center justify-center text-[9px] font-mono text-neutral-600">
                  CATALOG
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-5 h-32 bg-amber-50/60 border border-amber-200/80 rounded-xs p-3.5 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] font-mono text-amber-950 font-bold">
                <span>GSM SPECIFICATION</span>
                <span>120 - 240 GSM</span>
              </div>
              <div className="space-y-1 text-[10px] font-mono text-amber-900/80">
                <div className="flex justify-between">
                  <span>Burst Factor:</span>
                  <span className="font-semibold text-neutral-900">22+ BF</span>
                </div>
                <div className="flex justify-between">
                  <span>Fiber Origin:</span>
                  <span className="font-semibold text-neutral-900">100% Recycled</span>
                </div>
              </div>
              <div className="text-[9px] font-mono text-neutral-500 pt-1 border-t border-amber-200/60">
                Odisha Manufacturing Facility
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-600">
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">PRODUCT 01</span>
              <span className="font-semibold text-neutral-900">Fluting Medium</span>
            </div>
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">PRODUCT 02</span>
              <span className="font-semibold text-neutral-900">Test Liner</span>
            </div>
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">COMPLIANCE</span>
              <span className="font-semibold text-neutral-900">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === 'hillstone-dental-lab') {
    return (
      <div className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-xs hover:border-neutral-400 transition-colors">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{displayDomain}</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
            WordPress · Odisha, India
          </span>
        </div>

        {/* Dental Laboratory & Prosthetics Mockup */}
        <div className="p-6 sm:p-8 space-y-5 bg-white">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-xs bg-cyan-700" />
              <span className="text-xs font-bold tracking-wider text-neutral-900 uppercase">HILLSTONE DENTAL LAB</span>
            </div>
            <div className="flex gap-3 text-[10px] font-mono text-neutral-500">
              <span className="hidden sm:inline">Prosthetics</span>
              <span className="hidden sm:inline">CAD/CAM</span>
              <span className="text-cyan-800 font-semibold">Doctor Portal</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 items-center pt-1">
            <div className="col-span-12 sm:col-span-7 space-y-3">
              <span className="inline-block px-2 py-0.5 rounded-[var(--radius-subtle)] bg-cyan-50 text-cyan-900 border border-cyan-200 text-[10px] font-mono uppercase tracking-wider font-semibold">
                Specialized Prosthetics &amp; Digital Dentistry
              </span>
              <div className="h-6 w-11/12 bg-neutral-900 rounded-xs" />
              <div className="h-2.5 w-full bg-neutral-200 rounded-xs" />
              <div className="h-2.5 w-4/5 bg-neutral-200 rounded-xs" />
              <div className="pt-2 flex gap-2">
                <div className="h-6 w-24 bg-cyan-900 rounded-xs flex items-center justify-center text-[9px] font-mono text-white font-semibold">
                  SUBMIT DIGITAL RX
                </div>
                <div className="h-6 w-20 border border-neutral-300 rounded-xs flex items-center justify-center text-[9px] font-mono text-neutral-600">
                  SHADE GUIDE
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-5 h-32 bg-cyan-50/60 border border-cyan-200/80 rounded-xs p-3.5 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] font-mono text-cyan-950 font-bold">
                <span>LABORATORY ACCREDITATION</span>
                <span>ISO 13485</span>
              </div>
              <div className="space-y-1 text-[10px] font-mono text-cyan-900/80">
                <div className="flex justify-between">
                  <span>Crown Precision:</span>
                  <span className="font-semibold text-neutral-900">5-Axis CAD/CAM</span>
                </div>
                <div className="flex justify-between">
                  <span>Turnaround Time:</span>
                  <span className="font-semibold text-neutral-900">48-72 Hours</span>
                </div>
              </div>
              <div className="text-[9px] font-mono text-neutral-500 pt-1 border-t border-cyan-200/60">
                Dental Clinic Partner Network, Odisha
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-600">
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">RESTORATION</span>
              <span className="font-semibold text-neutral-900">Zirconia Crowns</span>
            </div>
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">AESTHETICS</span>
              <span className="font-semibold text-neutral-900">E.Max Veneers</span>
            </div>
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">IMPLANTS</span>
              <span className="font-semibold text-neutral-900">Custom Abutments</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === 'pratham-dental-care') {
    return (
      <div className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-xs hover:border-neutral-400 transition-colors">
        {/* Browser Top Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
            <span className="h-2 w-2 rounded-full bg-neutral-300" />
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{displayDomain}</span>
          </div>
          <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
            WordPress · Odisha, India
          </span>
        </div>

        {/* Dental Clinic Patient Practice Mockup */}
        <div className="p-6 sm:p-8 space-y-5 bg-white">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-xs bg-emerald-700" />
              <span className="text-xs font-bold tracking-wider text-neutral-900 uppercase">PRATHAM DENTAL CARE</span>
            </div>
            <div className="flex gap-3 text-[10px] font-mono text-neutral-500">
              <span className="hidden sm:inline">Treatments</span>
              <span className="hidden sm:inline">Doctors</span>
              <span className="text-emerald-800 font-semibold">Book Visit</span>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-5 items-center pt-1">
            <div className="col-span-12 sm:col-span-7 space-y-3">
              <span className="inline-block px-2 py-0.5 rounded-[var(--radius-subtle)] bg-emerald-50 text-emerald-900 border border-emerald-200 text-[10px] font-mono uppercase tracking-wider font-semibold">
                Multispeciality Dental Healthcare Clinic
              </span>
              <div className="h-6 w-11/12 bg-neutral-900 rounded-xs" />
              <div className="h-2.5 w-full bg-neutral-200 rounded-xs" />
              <div className="h-2.5 w-4/5 bg-neutral-200 rounded-xs" />
              <div className="pt-2 flex gap-2">
                <div className="h-6 w-28 bg-emerald-800 rounded-xs flex items-center justify-center text-[9px] font-mono text-white font-semibold">
                  BOOK APPOINTMENT
                </div>
                <div className="h-6 w-20 border border-neutral-300 rounded-xs flex items-center justify-center text-[9px] font-mono text-neutral-600">
                  DOCTORS
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-5 h-32 bg-emerald-50/60 border border-emerald-200/80 rounded-xs p-3.5 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] font-mono text-emerald-950 font-bold">
                <span>CLINICAL CONSULTATIONS</span>
                <span>Open Mon - Sat</span>
              </div>
              <div className="space-y-1 text-[10px] font-mono text-emerald-900/80">
                <div className="flex justify-between">
                  <span>Specialities:</span>
                  <span className="font-semibold text-neutral-900">Orthodontics, Implants</span>
                </div>
                <div className="flex justify-between">
                  <span>Inquiry Workflows:</span>
                  <span className="font-semibold text-neutral-900">Direct Patient Routing</span>
                </div>
              </div>
              <div className="text-[9px] font-mono text-neutral-500 pt-1 border-t border-emerald-200/60">
                Dental Clinic Center, Odisha, India
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-600">
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">SERVICE 01</span>
              <span className="font-semibold text-neutral-900">Root Canal (RCT)</span>
            </div>
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">SERVICE 02</span>
              <span className="font-semibold text-neutral-900">Clear Aligners</span>
            </div>
            <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
              <span className="text-neutral-400 block text-[9px]">SERVICE 03</span>
              <span className="font-semibold text-neutral-900">Dental Implants</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: pflege-bergstrasse (Germany - WordPress)
  return (
    <div className="w-full rounded-[var(--radius-default)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden shadow-xs hover:border-neutral-400 transition-colors">
      {/* Browser Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-100 border-b border-neutral-200">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
          <span className="h-2 w-2 rounded-full bg-neutral-300" />
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white border border-neutral-200 text-[11px] font-mono text-neutral-600">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span>{displayDomain}</span>
        </div>
        <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline">
          WordPress · Germany
        </span>
      </div>

      {/* German Ambulatory Nursing & Healthcare Platform Mockup */}
      <div className="p-6 sm:p-8 space-y-5 bg-white">
        <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <span className="h-3.5 w-3.5 rounded-xs bg-blue-700" />
            <span className="text-xs font-bold tracking-wider text-neutral-900 uppercase">PFLEGE BERGSTRASSE</span>
          </div>
          <div className="flex gap-3 text-[10px] font-mono text-neutral-500">
            <span className="hidden sm:inline">Leistungen</span>
            <span className="hidden sm:inline">Über Uns</span>
            <span className="text-blue-800 font-semibold">24h Kontakt</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 items-center pt-1">
          <div className="col-span-12 sm:col-span-7 space-y-3">
            <span className="inline-block px-2 py-0.5 rounded-[var(--radius-subtle)] bg-blue-50 text-blue-900 border border-blue-200 text-[10px] font-mono uppercase tracking-wider font-semibold">
              Ambulante Pflege &amp; Betreuungsdienst
            </span>
            <div className="h-6 w-11/12 bg-neutral-900 rounded-xs" />
            <div className="h-2.5 w-full bg-neutral-200 rounded-xs" />
            <div className="h-2.5 w-4/5 bg-neutral-200 rounded-xs" />
            <div className="pt-2 flex gap-2">
              <div className="h-6 w-28 bg-blue-900 rounded-xs flex items-center justify-center text-[9px] font-mono text-white font-semibold">
                BERATUNG VEREINBAREN
              </div>
              <div className="h-6 w-20 border border-neutral-300 rounded-xs flex items-center justify-center text-[9px] font-mono text-neutral-600">
                KARRIERE
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-5 h-32 bg-blue-50/60 border border-blue-200/80 rounded-xs p-3.5 flex flex-col justify-between">
            <div className="flex justify-between items-center text-[10px] font-mono text-blue-950 font-bold">
              <span>PFLEGEGRAD BERATUNG</span>
              <span>SGB V &amp; XI</span>
            </div>
            <div className="space-y-1 text-[10px] font-mono text-blue-900/80">
              <div className="flex justify-between">
                <span>Einsatzgebiet:</span>
                <span className="font-semibold text-neutral-900">Region Bergstraße</span>
              </div>
              <div className="flex justify-between">
                <span>Bereitschaft:</span>
                <span className="font-semibold text-neutral-900">24/7 Notrufservice</span>
              </div>
            </div>
            <div className="text-[9px] font-mono text-neutral-500 pt-1 border-t border-blue-200/60">
              Ambulanter Pflegedienst in Deutschland
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5 pt-2 border-t border-neutral-100 text-[10px] font-mono text-neutral-600">
          <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
            <span className="text-neutral-400 block text-[9px]">BEREICH 01</span>
            <span className="font-semibold text-neutral-900">Grundpflege</span>
          </div>
          <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
            <span className="text-neutral-400 block text-[9px]">BEREICH 02</span>
            <span className="font-semibold text-neutral-900">Behandlungspflege</span>
          </div>
          <div className="p-2.5 bg-neutral-50 rounded-xs border border-neutral-100">
            <span className="text-neutral-400 block text-[9px]">BEREICH 03</span>
            <span className="font-semibold text-neutral-900">Hauswirtschaft</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const articles = gsap.utils.toArray('.project-article');
      articles.forEach((art) => {
        gsap.fromTo(
          art,
          { opacity: 0.6, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: art,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.4,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="work" spacing="generous" className="bg-[var(--color-bg)] border-b border-[var(--color-border-subtle)]">
      <Container size="default">
        {/* Section Heading Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-2xl space-y-4">
            <Eyebrow variant="accent">Selected Work</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.1] text-balance">
              Featured WordPress &amp; Digital Platforms.
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Selected production websites built on WordPress with custom themes, responsive layouts, and structured business inquiry workflows.
            </p>
          </div>

          <div className="shrink-0">
            <Button href="/work" variant="secondary" size="md">
              <span>View All 11 Projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Alternating Project Showcases (Showing strictly the 4 requested featured projects on homepage) */}
        <div ref={containerRef} className="space-y-16 sm:space-y-24">
          {FEATURED_PROJECTS.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                className="project-article group border-b border-[var(--color-border-subtle)] pb-16 sm:pb-24 last:border-b-0 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Visual Frame: Alternates Left vs Right on Desktop */}
                  <div
                    className={`lg:col-span-7 transition-all duration-300 group-hover:translate-y-[-3px] ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <ProjectFramePreview project={project} />
                  </div>

                  {/* Project Details Column */}
                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-medium text-neutral-400">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-neutral-300">/</span>
                        <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 pt-0.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-xs font-mono font-semibold text-neutral-800">
                          <span>{project.technology}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-600">
                          <Globe className="h-3 w-3 text-neutral-400" />
                          <span>{project.location}</span>
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 group-hover:text-[var(--color-accent)] transition-colors pt-1">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Technology Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono text-neutral-600 bg-white border border-neutral-200 px-2.5 py-0.5 rounded-[var(--radius-subtle)] transition-colors group-hover:border-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links: Direct link to live website + Inquiry CTA */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-subtle)] bg-neutral-950 text-white text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-2xs"
                      >
                        <span>Visit Live Site</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>

                      <Link
                        href={`/contact?project=${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[var(--radius-subtle)] border border-neutral-200 text-xs font-semibold uppercase tracking-wider text-neutral-800 hover:text-[var(--color-accent)] hover:border-neutral-400 transition-colors"
                      >
                        <span>Discuss Similar Project</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Section Bottom Action */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-neutral-500 font-medium">
            Looking for a tailored architecture or custom WordPress migration? We scope projects directly based on business requirements.
          </p>
          <Button href="/contact" variant="primary" size="md">
            <span>Start a Project</span>
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

      </Container>
    </Section>
  );
}

