import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BlogIndex from '@/components/blog/BlogIndex';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'Journal — Susthir Digital',
  description: 'Practical notes on websites, ecommerce, WordPress, Shopify, React and Next.js.',
  openGraph: {
    title: 'Journal — Susthir Digital',
    description: 'Practical notes on websites, ecommerce, WordPress, Shopify, React and Next.js.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)]">
      <Header />

      <main className="flex-1">
        <BlogIndex />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
