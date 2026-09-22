'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
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
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border-subtle)] bg-[var(--color-bg)]/90 backdrop-blur-md transition-colors">
      <Container size="default">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 text-base sm:text-lg font-semibold tracking-tight text-neutral-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] rounded-xs"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-neutral-900 transition-transform group-hover:scale-125" />
            <span className="font-bold">Digital Studio</span>
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
              className="inline-flex items-center justify-center p-2 text-neutral-800 hover:text-neutral-950 hover:bg-neutral-100 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Accessible Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-x-0 top-[65px] bottom-0 z-40 bg-[var(--color-bg)] px-6 py-8 border-t border-[var(--color-border)] flex flex-col justify-between md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-2xl font-medium tracking-tight py-1 transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-[var(--color-accent)] font-semibold'
                      : 'text-neutral-900 hover:text-[var(--color-accent)]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-neutral-200">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </Button>
            <p className="mt-4 text-xs text-neutral-500 text-center">
              Available for projects in Odisha & remote worldwide
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
