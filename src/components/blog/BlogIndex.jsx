'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import { getAllArticles, getFeaturedArticle } from '@/data/blog';
import { ArrowUpRight, BookOpen, Clock, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BlogIndex() {
  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const listRef = useRef(null);

  const articles = getAllArticles();
  const featuredArticle = getFeaturedArticle();
  const nonFeaturedArticles = articles.filter(
    (article) => article.slug !== featuredArticle?.slug
  );

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Hero subtle reveal
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll('.journal-hero-el'),
          { opacity: 0.1, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
        );
      }

      // Featured article reveal
      if (featuredRef.current) {
        gsap.fromTo(
          featuredRef.current,
          { opacity: 0.2, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: featuredRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Article list stagger reveal
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.querySelectorAll('.article-row-item'),
          { opacity: 0.15, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 85%',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[var(--color-bg)]">
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <Section spacing="generous" className="pt-12 sm:pt-20 pb-12 border-b border-neutral-200/80">
        <Container size="default">
          <div ref={heroRef} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            
            {/* Left Column: Editorial Headline & Copy */}
            <div className="lg:col-span-8 space-y-6">
              <div className="journal-hero-el">
                <Eyebrow variant="accent">THE JOURNAL</Eyebrow>
              </div>

              <h1 className="journal-hero-el text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 leading-[1.08] text-balance">
                Notes from building for the web.
              </h1>

              <p className="journal-hero-el text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl text-balance">
                Practical notes on websites, ecommerce, React, Next.js, WordPress and the systems behind digital products.
              </p>
            </div>

            {/* Right Column: Architectural Discipline Meta Panel */}
            <div className="journal-hero-el lg:col-span-4 bg-white border border-neutral-200 rounded-[var(--radius-subtle)] p-5 shadow-2xs space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-100 text-xs font-mono">
                <span className="text-neutral-400 uppercase tracking-wider">Publication</span>
                <span className="text-[var(--color-accent)] font-semibold">Editorial Journal</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono text-neutral-600">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Total Notes:</span>
                  <span className="text-neutral-900 font-semibold">{articles.length} Articles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Core Focus:</span>
                  <span className="text-neutral-900">Engineering &amp; Systems</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Editorial Standard:</span>
                  <span className="text-neutral-900">Honest Technical Guidance</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 2. FEATURED ARTICLE PRESENTATION                             */}
      {/* ============================================================ */}
      {featuredArticle && (
        <Section spacing="generous" className="py-14 sm:py-20 border-b border-neutral-200/80">
          <Container size="default">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest font-semibold">
                  FEATURED NOTE
                </span>
              </div>

              <div
                ref={featuredRef}
                className="group relative rounded-[var(--radius-default)] bg-white border border-neutral-200/90 hover:border-neutral-400 shadow-2xs hover:shadow-xs transition-all duration-300 p-6 sm:p-10 lg:p-12 overflow-hidden"
              >
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                  aria-label={`Read featured article: ${featuredArticle.title}`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Editorial Information */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-mono font-semibold uppercase tracking-wider">
                        {featuredArticle.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                        <Calendar className="h-3 w-3" />
                        <span>{featuredArticle.date}</span>
                      </span>
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                        <Clock className="h-3 w-3" />
                        <span>{featuredArticle.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 group-hover:text-[var(--color-accent)] transition-colors leading-[1.15]">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredArticle.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-[11px] font-mono text-neutral-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 group-hover:text-[var(--color-accent)] transition-colors">
                        <span>Read Full Architectural Note</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-[var(--color-accent)]" />
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Featured Editorial Image */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-subtle)] border border-neutral-200/90 bg-neutral-100 shadow-xs">
                      {featuredArticle.image && (
                        <Image
                          src={featuredArticle.image}
                          alt={featuredArticle.imageAlt || featuredArticle.title}
                          fill
                          priority
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90 bg-neutral-950/75 backdrop-blur-md px-3 py-1.5 rounded-[var(--radius-subtle)] border border-white/10 pointer-events-none">
                        <span className="font-medium truncate">Stack Decision Architecture</span>
                        <span className="text-white/60 ml-2 shrink-0">Spec v2.4</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ============================================================ */}
      {/* 3. ARTICLE INDEX: EDITORIAL ROW LIST                         */}
      {/* ============================================================ */}
      <Section spacing="generous" className="py-14 sm:py-20">
        <Container size="default">
          <div className="space-y-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-neutral-200/80">
              <div className="space-y-2">
                <Eyebrow variant="accent">ALL ENTRIES</Eyebrow>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
                  Architectural &amp; Practical Notes
                </h2>
              </div>
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                Showing {nonFeaturedArticles.length} Notes
              </span>
            </div>

            {/* Editorial List Container */}
            <div ref={listRef} className="divide-y divide-neutral-200/90 border-y border-neutral-200/90">
              {nonFeaturedArticles.map((article, idx) => (
                <article
                  key={article.slug}
                  className="article-row-item group relative py-8 sm:py-10 transition-colors hover:bg-neutral-50/70 -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-[var(--radius-subtle)]"
                >
                  <Link
                    href={`/blog/${article.slug}`}
                    className="absolute inset-0 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
                    aria-label={`Read article: ${article.title}`}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
                    
                    {/* Index & Category */}
                    <div className="md:col-span-3 lg:col-span-2 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-[var(--color-accent)] transition-colors">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="text-neutral-300 font-mono">/</span>
                        <span className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-700 font-medium tracking-wide uppercase">
                          {article.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 md:pt-2">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Editorial Preview Thumbnail */}
                    <div className="md:col-span-3 lg:col-span-3">
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-subtle)] border border-neutral-200/90 bg-neutral-100 shadow-2xs">
                        {article.image && (
                          <Image
                            src={article.image}
                            alt={article.imageAlt || article.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 25vw, 240px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                      </div>
                    </div>

                    {/* Title & Short Excerpt */}
                    <div className="md:col-span-5 lg:col-span-6 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-200 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-neutral-600 leading-relaxed font-normal max-w-2xl">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1.5 pt-1.5">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono text-neutral-400 group-hover:text-neutral-600 transition-colors"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Arrow Icon */}
                    <div className="md:col-span-1 hidden md:flex justify-end pt-1">
                      <span className="h-8 w-8 rounded-full border border-neutral-200 group-hover:border-[var(--color-accent)] group-hover:bg-[var(--color-accent)] group-hover:text-white text-neutral-500 flex items-center justify-center transition-all duration-200">
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>

                  </div>
                </article>
              ))}
            </div>

          </div>
        </Container>
      </Section>
    </div>
  );
}
