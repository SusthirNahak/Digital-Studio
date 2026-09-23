'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AnimatedLogo from '@/components/ui/AnimatedLogo';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors duration-150 ${
        mobileMenuOpen
          ? 'bg-white border-neutral-200 shadow-sm'
          : 'bg-white/95 backdrop-blur-md border-neutral-200/80 shadow-xs'
      }`}
    >
      <Container size="default">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xs"
            aria-label="Susthir Digital Home"
          >
            <AnimatedLogo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xs ${
                    isActive
                      ? 'text-neutral-950 font-semibold border-b-2 border-[var(--color-accent)] pb-0.5'
                      : 'hover:text-neutral-950'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 text-neutral-900 bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-neutral-950 stroke-[2.5]" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5 text-neutral-950 stroke-[2.5]" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Solid High-Contrast Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Full-screen backdrop to completely obscure page content */}
          <div
            className="fixed inset-0 top-16 sm:top-20 z-40 bg-neutral-950/60 backdrop-blur-xs md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Fully opaque white drawer container */}
          <div
            id="mobile-nav"
            className="fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 bg-white border-t border-neutral-200 flex flex-col justify-between overflow-y-auto shadow-2xl md:hidden"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="px-6 py-6 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-neutral-400">
                  Navigation
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Studio Active</span>
                </span>
              </div>

              <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1.5">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                      className={`group py-3.5 px-3.5 rounded-lg text-lg font-semibold tracking-tight transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-neutral-100 text-neutral-950 font-bold border-l-4 border-[var(--color-accent)] pl-3.5'
                          : 'text-neutral-800 hover:text-neutral-950 hover:bg-neutral-50 active:bg-neutral-100'
                      }`}
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
                      {isActive ? (
                        <span className="text-[10px] font-mono uppercase tracking-wider bg-[var(--color-accent)] text-white px-2 py-0.5 rounded font-semibold">
                          Current
                        </span>
                      ) : (
                        <span className="text-neutral-400 text-sm font-mono">
                          →
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions & Studio Footer Info */}
            <div className="p-6 bg-neutral-50 border-t border-neutral-200/90 space-y-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full justify-center text-sm font-semibold py-3.5 bg-neutral-950 text-white hover:bg-neutral-800 shadow-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a Project
              </Button>
              <div className="space-y-1 text-center">
                <p className="text-xs font-medium text-neutral-800">
                  Odisha, India · Available Worldwide
                </p>
                <p className="text-[11px] text-neutral-500 font-mono">
                  Direct engineer access · Transparent delivery
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
