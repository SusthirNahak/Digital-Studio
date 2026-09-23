import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import AnimatedLogo from '@/components/ui/AnimatedLogo';

const FOOTER_NAVIGATION = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const FOOTER_SERVICES = [
  'WordPress Websites',
  'Shopify Stores',
  'React / Next.js Applications',
  'Website Redesign & Speed',
  'Monthly Retainer Maintenance',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[var(--color-border)] bg-neutral-950 text-neutral-400 text-sm">
      <Container size="default">
        {/* Upper Footer: Statement + CTA */}
        <div className="py-14 sm:py-20 border-b border-neutral-800/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-neutral-400">
              New Business & Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight max-w-xl">
              Websites, ecommerce experiences and custom web applications for growing businesses.
            </h2>
            <p className="text-neutral-400 text-sm max-w-md">
              Based in Odisha, India. Working with local business leaders and remote partners worldwide.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3 pt-2">
            <Button href="/contact" variant="primary" size="md" className="bg-white text-neutral-950 hover:bg-neutral-200">
              Start a Project
            </Button>
          </div>
        </div>

        {/* Middle Footer: Links & Services Columns */}
        <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 text-xs">
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xs" aria-label="Susthir Digital Home">
              <AnimatedLogo size="md" theme="dark" />
            </Link>
            <p className="text-neutral-400 max-w-xs leading-relaxed pt-1">
              Websites, ecommerce experiences and custom web applications for growing businesses.
            </p>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px]">Navigation</h3>
            <ul className="space-y-2">
              {FOOTER_NAVIGATION.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px]">Core Capabilities</h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((service) => (
                <li key={service} className="text-neutral-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-semibold text-neutral-200 uppercase tracking-wider text-[11px]">Connect</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-neutral-400">WhatsApp / Telegram</span>
              </li>
              <li>
                <span className="text-neutral-400">Email Inquiries</span>
              </li>
              <li>
                <span className="text-neutral-400">Odisha, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Footer: Copyright & Fine Print */}
        <div className="py-6 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {currentYear} Susthir Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-200 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
