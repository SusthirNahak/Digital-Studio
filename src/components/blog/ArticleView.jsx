'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Tag } from 'lucide-react';
import gsap from 'gsap';

export default function ArticleView({ article, relatedArticles = [] }) {
  const articleRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !articleRef.current) return;

    gsap.fromTo(
      articleRef.current,
      { opacity: 0.2, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
    );
  }, [article.slug]);

  return (
    <article ref={articleRef} className="bg-[var(--color-bg)] pb-16">
      {/* ============================================================ */}
      {/* 1. ARTICLE HEADER                                            */}
      {/* ============================================================ */}
      <Section spacing="default" className="pt-8 sm:pt-14 pb-8 sm:pb-12 border-b border-neutral-200/80">
        <Container size="default">
          <div className="max-w-3xl mx-auto space-y-6">
            
            {/* Back to Journal Link */}
            <div>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-[var(--color-accent)] transition-colors group"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
                <span>Back to Journal Index</span>
              </Link>
            </div>

            {/* Category & Meta */}
            <div className="flex items-center gap-3 flex-wrap pt-2">
              <span className="px-2.5 py-0.5 rounded-[var(--radius-subtle)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] text-xs font-mono font-semibold uppercase tracking-wider">
                {article.category}
              </span>
              <span className="text-neutral-300 font-mono">/</span>
              <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Calendar className="h-3 w-3" />
                <span>{article.date}</span>
              </span>
              <span className="text-neutral-300 font-mono">/</span>
              <span className="text-xs font-mono text-neutral-400 flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                <span>{article.readTime}</span>
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950 leading-[1.12] text-balance">
              {article.title}
            </h1>

            {/* Sub-headline / Excerpt */}
            <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-normal pt-1 border-t border-neutral-100">
              {article.excerpt}
            </p>

            {/* Tags Strip */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <Tag className="h-3 w-3 text-neutral-400" />
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-[var(--radius-subtle)] bg-neutral-100 border border-neutral-200 text-[11px] font-mono text-neutral-700"
                >
                  #{tag}
                </span>
              ))}
            </div>

          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 2. ARTICLE BODY (Optimized Reading Layout)                   */}
      {/* ============================================================ */}
      <Section spacing="default" className="py-12 sm:py-16">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            {/* Editorial Lead Hero Visual */}
            {article.image && (
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-default)] border border-neutral-200/90 bg-neutral-100 shadow-xs mb-10 sm:mb-12">
                <Image
                  src={article.image}
                  alt={article.imageAlt || article.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            )}

            <div className="space-y-6">
              {article.content.map((block, idx) => {
                if (block.type === 'heading2') {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950 pt-8 pb-2 border-b border-neutral-200/80 leading-snug"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === 'heading3') {
                  return (
                    <h3
                      key={idx}
                      className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-900 pt-4 leading-snug"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === 'list') {
                  return (
                    <ul key={idx} className="my-5 pl-4 border-l-2 border-neutral-300 space-y-3">
                      {block.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (block.type === 'callout') {
                  return (
                    <div
                      key={idx}
                      className="my-8 p-5 sm:p-6 rounded-[var(--radius-subtle)] bg-neutral-50 border-l-4 border-[var(--color-accent)] space-y-2 shadow-2xs"
                    >
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-accent)] font-semibold block">
                        Architectural Note
                      </span>
                      <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                        {block.text}
                      </p>
                    </div>
                  );
                }

                // Default: paragraph
                return (
                  <p
                    key={idx}
                    className="text-base sm:text-lg text-neutral-700 leading-relaxed font-normal"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>

            {/* Editorial Footer Signature */}
            <div className="mt-14 pt-8 border-t border-neutral-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-neutral-500">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neutral-900" />
                <span className="text-neutral-900 font-semibold">Digital Studio Journal</span>
                <span>·</span>
                <span>Systems &amp; Architecture</span>
              </div>
              <div>
                <span>Published {article.date}</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 3. RELATED ARTICLES                                          */}
      {/* ============================================================ */}
      {relatedArticles.length > 0 && (
        <Section spacing="default" className="py-12 border-t border-neutral-200/80 bg-neutral-50/50">
          <Container size="default">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                  CONTINUE READING
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950">
                  Related Architectural Notes
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="group block p-5 rounded-[var(--radius-default)] bg-white border border-neutral-200 hover:border-neutral-400 shadow-2xs hover:shadow-xs transition-all space-y-3"
                  >
                    {rel.image && (
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[var(--radius-subtle)] border border-neutral-200/80 bg-neutral-100">
                        <Image
                          src={rel.image}
                          alt={rel.imageAlt || rel.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 360px"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span className="text-neutral-700 uppercase">{rel.category}</span>
                      <span>{rel.readTime}</span>
                    </div>

                    <h4 className="text-base font-semibold text-neutral-950 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                      {rel.title}
                    </h4>

                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {rel.excerpt}
                    </p>

                    <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-neutral-900 group-hover:text-[var(--color-accent)] transition-colors">
                      <span>Read Note</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ============================================================ */}
      {/* 4. BLOG PROJECT INQUIRY CTA                                  */}
      {/* ============================================================ */}
      <Section spacing="default" className="pt-12">
        <Container size="default">
          <div className="max-w-3xl mx-auto rounded-[var(--radius-default)] bg-neutral-950 text-white p-8 sm:p-12 space-y-6 text-center shadow-md">
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-subtle)] bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                <span>Next Steps</span>
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              Have a project in mind?
            </h3>

            <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Tell us what you&apos;re building and what you need help with. We&apos;ll review the technical requirements and outline the right approach.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button href="/contact" variant="primary" size="md" className="bg-white text-neutral-950 hover:bg-neutral-100">
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>

              <Button href="/work" variant="secondary" size="md" className="border-neutral-800 text-white hover:bg-neutral-900">
                <span>View Our Work</span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
