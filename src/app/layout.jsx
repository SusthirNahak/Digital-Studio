import './globals.css';
import FloatingAssistant from '@/components/chat/FloatingAssistant';

export const metadata = {
  metadataBase: new URL(
    process.env.APP_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://susthirdigital.com')
  ),
  title: {
    default: 'Susthir Digital — Websites, Ecommerce & Web Applications',
    template: '%s | Susthir Digital',
  },
  description:
    'Websites, ecommerce experiences and custom web applications built around how your business actually works. Engineered in Odisha, built for the web worldwide.',
  keywords: [
    'Susthir Digital',
    'Web development Odisha',
    'Shopify ecommerce developer India',
    'Next.js web applications',
    'WordPress development Bhubaneswar',
    'React development agency',
    'Custom web applications',
    'Ecommerce website developer',
  ],
  authors: [{ name: 'Susthir Digital', url: 'https://susthirdigital.com' }],
  creator: 'Susthir Digital',
  publisher: 'Susthir Digital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Susthir Digital',
    title: 'Susthir Digital — Websites, Ecommerce & Web Applications',
    description:
      'Websites, ecommerce experiences and custom web applications built around how your business actually works. Engineered in Odisha · Built for the Web Worldwide.',
    images: [
      {
        url: '/assets/home/susthir_3d_hero.jpg',
        width: 1200,
        height: 900,
        alt: 'Susthir Digital — Web Engineering & Digital Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Susthir Digital — Websites, Ecommerce & Web Applications',
    description:
      'Websites, ecommerce experiences and custom web applications built for growing businesses.',
    images: ['/assets/home/susthir_3d_hero.jpg'],
    creator: '@susthirdigital',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0c',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Susthir Digital',
  alternateName: 'Susthir Digital Studio',
  url: 'https://susthirdigital.com',
  logo: 'https://susthirdigital.com/favicon.svg',
  image: 'https://susthirdigital.com/assets/home/susthir_3d_hero.jpg',
  description:
    'Independent digital studio based in Odisha, India, building high-performance websites, Shopify stores, and custom web applications for businesses worldwide.',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Odisha',
    addressCountry: 'IN',
  },
  priceRange: '₹₹',
  areaServed: ['Odisha', 'India', 'Worldwide'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WordPress Websites',
          description: 'Custom, secure, and editor-friendly WordPress business websites.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Shopify Ecommerce',
          description: 'Custom Shopify storefronts engineered for smooth checkout and conversions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'React & Next.js Web Applications',
          description: 'Full-stack modern web applications with sub-second page loads and server rendering.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Redesign & Speed Optimization',
          description: 'Performance overhaul and modern responsive UI design for existing websites.',
        },
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var _orig = window.fetch;
                  var _fn = function() {
                    return (_orig || fetch).apply(this === window || !this ? window : this, arguments);
                  };
                  Object.defineProperty(window, 'fetch', {
                    get: function() { return _fn; },
                    set: function(val) { _orig = val; _fn = val; },
                    configurable: true,
                    enumerable: true
                  });
                } catch (e) {
                  try {
                    var proto = Object.getPrototypeOf(window);
                    if (proto) {
                      Object.defineProperty(proto, 'fetch', {
                        get: function() { return _fn; },
                        set: function(val) { _orig = val; _fn = val; },
                        configurable: true,
                        enumerable: true
                      });
                    }
                  } catch (_) {}
                }
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
        {children}
        <FloatingAssistant />
      </body>
    </html>
  );
}
