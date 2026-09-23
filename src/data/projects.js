/**
 * Real Portfolio Projects Dataset for Susthir Digital
 * 
 * Strict Data Integrity Guidelines:
 * - Factual client and project data verified from supplied public URLs.
 * - No invented metrics, conversion claims, revenue, traffic, awards, or testimonials.
 * - Real local screenshots stored in /assets/projects/<slug>/cover.webp
 * - Conservative role and service definitions based on live sites.
 */

export const PROJECTS = [
  {
    id: 'natural-elixirs-supplements',
    slug: 'natural-elixirs-supplements',
    title: 'Natural Elixirs — Supplements',
    location: 'Malaysia',
    category: 'Ecommerce & Health Products',
    technology: 'Next.js',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Ecommerce Storefront'],
    url: 'https://natural-elixirs-supplements.vercel.app/',
    href: 'https://natural-elixirs-supplements.vercel.app/',
    shortDescription:
      'Modern health supplements ecommerce catalog interface built with Next.js.',
    description:
      'Web development and implementation for Natural Elixirs — Supplements, an herbal wellness and dietary supplements storefront based in Malaysia, built with Next.js.',
    role: 'Web development and implementation',
    services: ['Next.js Development', 'Storefront Architecture', 'Product Presentation'],
    featured: true,
    coverImage: '/assets/projects/natural-elixirs-supplements/cover.webp',
    gallery: [
      '/assets/projects/natural-elixirs-supplements/cover.webp',
      '/assets/projects/natural-elixirs-supplements/01.webp',
    ],
    confidential: false,
    previewType: 'ecommerce-store',
  },
  {
    id: 'neoplan-foods',
    slug: 'neoplan-foods',
    title: 'Neoplan Foods',
    location: 'UAE',
    category: 'Food & FMCG Distribution',
    technology: 'WordPress',
    technologies: ['WordPress', 'Product Catalog', 'Custom Theme', 'PHP'],
    url: 'https://neoplanfoods.com/',
    href: 'https://neoplanfoods.com/',
    shortDescription:
      'Corporate distribution and FMCG brand showcase for a food products enterprise in the UAE.',
    description:
      'Website design and development for Neoplan Foods, a food distribution and FMCG enterprise based in the United Arab Emirates, built on WordPress.',
    role: 'Website design and development',
    services: ['Website Development', 'Product Catalog', 'Corporate Architecture'],
    featured: true,
    coverImage: '/assets/projects/neoplan-foods/cover.webp',
    gallery: [
      '/assets/projects/neoplan-foods/cover.webp',
      '/assets/projects/neoplan-foods/01.webp',
    ],
    confidential: false,
    previewType: 'ecommerce-store',
  },
  {
    id: 'pflege-bergstrasse',
    slug: 'pflege-bergstrasse',
    title: 'Pflege Bergstraße',
    location: 'Germany',
    category: 'Healthcare & Nursing Services',
    technology: 'WordPress',
    technologies: ['WordPress', 'Custom Theme', 'PHP', 'Multilingual Architecture'],
    url: 'https://pflege-bergstrasse.de/',
    href: 'https://pflege-bergstrasse.de/',
    shortDescription:
      'Digital platform for an ambulatory outpatient care and nursing service provider in Germany.',
    description:
      'Website design and development for Pflege Bergstraße, an outpatient nursing and healthcare service provider located in the Bergstraße region of Germany, built on WordPress.',
    role: 'Website design and development',
    services: ['Website Development', 'WordPress Architecture', 'Localized Content Structure'],
    featured: true,
    coverImage: '/assets/projects/pflege-bergstrasse/cover.webp',
    gallery: [
      '/assets/projects/pflege-bergstrasse/cover.webp',
      '/assets/projects/pflege-bergstrasse/01.webp',
    ],
    confidential: false,
    previewType: 'editorial-site',
  },
  {
    id: 'the-smart-vision',
    slug: 'the-smart-vision',
    title: 'The Smart Vision',
    location: 'India',
    category: 'Web Application & Digital Platform',
    technology: 'Next.js',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vercel Deployment'],
    url: 'https://the-smart-vision.vercel.app/',
    href: 'https://the-smart-vision.vercel.app/',
    shortDescription:
      'Educational learning platform and interactive curriculum interface for Abacus, Vedic Math, and Olympiad training.',
    description:
      'Web development and implementation for The Smart Vision, an educational learning platform for Abacus, Vedic Math, and Olympiad competition training, built with Next.js and deployed on Vercel.',
    role: 'Web development and implementation',
    services: ['Next.js Development', 'Component Architecture', 'Interactive Learning UI'],
    featured: true,
    coverImage: '/assets/projects/the-smart-vision/cover.webp',
    gallery: [
      '/assets/projects/the-smart-vision/cover.webp',
      '/assets/projects/the-smart-vision/01.webp',
    ],
    confidential: false,
    previewType: 'portal-app',
  },
  {
    id: 'viva-kraft',
    slug: 'viva-kraft',
    title: 'Viva Kraft',
    location: 'Odisha, India',
    category: 'Industrial Manufacturing & Packaging',
    technology: 'WordPress',
    technologies: ['WordPress', 'Custom Theme', 'PHP', 'Responsive UI'],
    url: 'https://vivakraft.in/',
    href: 'https://vivakraft.in/',
    shortDescription:
      'Corporate website for an industrial packaging and kraft paper manufacturing company based in Odisha.',
    description:
      'Website design and development for Viva Kraft, an industrial packaging solutions and kraft paper manufacturer located in Odisha, India, built on WordPress.',
    role: 'Website design and development',
    services: ['Website Development', 'WordPress Architecture', 'Responsive Layout'],
    featured: false,
    coverImage: '/assets/projects/viva-kraft/cover.webp',
    gallery: [
      '/assets/projects/viva-kraft/cover.webp',
      '/assets/projects/viva-kraft/01.webp',
    ],
    confidential: false,
    previewType: 'editorial-site',
  },
  {
    id: 'hillstone-dental-lab',
    slug: 'hillstone-dental-lab',
    title: 'Hillstone Dental Lab',
    location: 'Odisha, India',
    category: 'Healthcare & Dental Laboratory',
    technology: 'WordPress',
    technologies: ['WordPress', 'Custom Theme', 'PHP', 'Service Catalog'],
    url: 'https://hillstonedentallab.in/',
    href: 'https://hillstonedentallab.in/',
    shortDescription:
      'Digital presence for a specialized dental laboratory providing prosthetic and restorative dental solutions.',
    description:
      'Website design and development for Hillstone Dental Lab, a specialized dental laboratory in Eastern India delivering prosthetic and digital dentistry solutions, built on WordPress.',
    role: 'Website design and development',
    services: ['Website Development', 'WordPress Architecture', 'Service Catalog'],
    featured: false,
    coverImage: '/assets/projects/hillstone-dental-lab/cover.webp',
    gallery: [
      '/assets/projects/hillstone-dental-lab/cover.webp',
      '/assets/projects/hillstone-dental-lab/01.webp',
    ],
    confidential: false,
    previewType: 'editorial-site',
  },
  {
    id: 'pratham-dental-care',
    slug: 'pratham-dental-care',
    title: 'Pratham Dental Care',
    location: 'Odisha, India',
    category: 'Healthcare & Clinical Practice',
    technology: 'WordPress',
    technologies: ['WordPress', 'Custom Theme', 'PHP', 'Inquiry Workflows'],
    url: 'https://prathamdentalcare.com/',
    href: 'https://prathamdentalcare.com/',
    shortDescription:
      'Clinical website and patient inquiry interface for a dental healthcare clinic in Odisha.',
    description:
      'Website design and development for Pratham Dental Care, a multi-speciality dental healthcare clinic situated in Odisha, India, built on WordPress.',
    role: 'Website design and development',
    services: ['Website Development', 'WordPress Architecture', 'Service Pages'],
    featured: false,
    coverImage: '/assets/projects/pratham-dental-care/cover.webp',
    gallery: [
      '/assets/projects/pratham-dental-care/cover.webp',
      '/assets/projects/pratham-dental-care/01.webp',
    ],
    confidential: false,
    previewType: 'editorial-site',
  },
  {
    id: 'genrise',
    slug: 'genrise',
    title: 'Genrise',
    location: 'Delhi, India',
    category: 'Corporate & Talent Solutions',
    technology: 'Webflow',
    technologies: ['Webflow', 'CMS Collections', 'Interactive UI', 'Responsive Design'],
    url: 'https://genrise.in/',
    href: 'https://genrise.in/',
    shortDescription:
      'Corporate website and business solutions showcase for a talent and enterprise advisory firm.',
    description:
      'Website design and development for Genrise, a global staffing, overseas recruitment, and enterprise talent advisory firm based in Delhi, India, built on Webflow.',
    role: 'Website design and development',
    services: ['Webflow Development', 'Responsive Design', 'Interactive UI'],
    featured: false,
    coverImage: '/assets/projects/genrise/cover.webp',
    gallery: [
      '/assets/projects/genrise/cover.webp',
      '/assets/projects/genrise/01.webp',
    ],
    confidential: false,
    previewType: 'editorial-site',
  },
  {
    id: 'mad-moose',
    slug: 'mad-moose',
    title: 'Mad Moose',
    location: 'Odisha, India',
    category: 'Retail & Lifestyle',
    technology: 'WordPress',
    technologies: ['WordPress', 'Elementor', 'WooCommerce', 'Brand Storefront'],
    url: 'https://madmoose.in/',
    href: 'https://madmoose.in/',
    shortDescription:
      'Digital storefront and brand platform for a lifestyle brand based in Odisha.',
    description:
      'Website design and development for Mad Moose, a retail and lifestyle apparel brand operating from Odisha, India, built on WordPress.',
    role: 'Website design and development',
    services: ['Digital Storefront', 'Brand Showcase', 'WordPress Architecture'],
    featured: false,
    coverImage: '/assets/projects/mad-moose/cover.webp',
    gallery: [
      '/assets/projects/mad-moose/cover.webp',
      '/assets/projects/mad-moose/01.webp',
    ],
    confidential: false,
    previewType: 'ecommerce-store',
  },
  {
    id: 'natural-elixirs-medical-portal',
    slug: 'natural-elixirs-medical-portal',
    title: 'Natural Elixirs — Medical Portal',
    location: 'Malaysia',
    category: 'Web Application & Medical Portal',
    technology: 'Next.js',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Portal Workflows'],
    url: 'https://natural-elixirs-medical-portal.vercel.app/',
    href: 'https://natural-elixirs-medical-portal.vercel.app/',
    shortDescription:
      'Healthcare portal interface for patient consultations and formulation management.',
    description:
      'Web development and implementation for Natural Elixirs — Medical Portal, an online consultation and patient health portal based in Malaysia, built with Next.js.',
    role: 'Web development and implementation',
    services: ['Next.js Development', 'Portal Workflows', 'Responsive UI'],
    featured: false,
    coverImage: '/assets/projects/natural-elixirs-medical-portal/cover.webp',
    gallery: [
      '/assets/projects/natural-elixirs-medical-portal/cover.webp',
      '/assets/projects/natural-elixirs-medical-portal/01.webp',
    ],
    confidential: false,
    previewType: 'portal-app',
  },
  {
    id: 'wilyfox',
    slug: 'wilyfox',
    title: 'Wilyfox',
    location: 'Odisha, India',
    category: 'Creative Agency & Digital Services',
    technology: 'React',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Agency Portfolio'],
    url: 'https://wilyfox.co/',
    href: 'https://wilyfox.co/',
    shortDescription:
      'Agency portfolio and digital growth showcase for a marketing and technology agency based in Odisha.',
    description:
      'Web development and implementation for Wilyfox Media Co., a full-stack digital growth and media partner operating from Odisha, India, built with React.',
    role: 'Web development and implementation',
    services: ['Website Development', 'Agency Portfolio', 'Interactive Experience'],
    featured: false,
    coverImage: '/assets/projects/wilyfox/cover.webp',
    gallery: [
      '/assets/projects/wilyfox/cover.webp',
      '/assets/projects/wilyfox/01.webp',
    ],
    confidential: false,
    previewType: 'editorial-site',
  },
];

export const FEATURED_SLUG_ORDER = [
  'natural-elixirs-supplements',
  'neoplan-foods',
  'pflege-bergstrasse',
  'the-smart-vision',
];

export const FEATURED_PROJECTS = FEATURED_SLUG_ORDER.map((slug) =>
  PROJECTS.find((project) => project.slug === slug && project.featured)
).filter(Boolean);
