import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';
import FinalCTA from '@/components/home/FinalCTA';
import WorkHero from '@/components/work/WorkHero';
import FeaturedProject from '@/components/work/FeaturedProject';
import ProjectGrid from '@/components/work/ProjectGrid';
import ProjectFilm from '@/components/work/ProjectFilm';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Work — Susthir Digital',
  description:
    'Selected work built across websites, ecommerce and web applications.',
};

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <Header />

      <main className="flex-1">
        {/* Editorial Work Hero */}
        <WorkHero />

        {/* Featured Project Showcase (Large Visual 62% / Info 38%) */}
        <FeaturedProject />

        {/* Dynamic Project Grid with Restrained Filter & "What We Build" Visual Strip */}
        <ProjectGrid />

        {/* 16:9 Cinematic Video Slot / Architectural Poster Showcase */}
        <ProjectFilm />

        {/* Final Statement Section */}
        <Section
          spacing="default"
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)]"
        >
          <Container size="default">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
                <Eyebrow variant="accent">DISCUSS AN ENGAGEMENT</Eyebrow>
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
                Have a project worth building?
              </h2>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl mx-auto font-normal">
                Tell us what you&apos;re planning and we&apos;ll help shape the right digital approach.
              </p>

              <div className="pt-2 flex justify-center">
                <Button href="/contact" variant="primary" size="lg" className="group">
                  <span>Start a Project</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* Reusable Concluding CTA */}
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
