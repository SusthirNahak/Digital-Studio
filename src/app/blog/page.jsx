import BlogIndex from '@/components/blog/BlogIndex';
import FinalCTA from '@/components/home/FinalCTA';

export const metadata = {
  title: 'Journal — Digital Studio',
  description: 'Practical notes on websites, ecommerce, WordPress, Shopify, React and Next.js.',
  openGraph: {
    title: 'Journal — Digital Studio',
    description: 'Practical notes on websites, ecommerce, WordPress, Shopify, React and Next.js.',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogIndex />
      <FinalCTA />
    </main>
  );
}
