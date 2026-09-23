import { notFound } from 'next/navigation';
import { getAllArticles, getArticleBySlug, getRelatedArticles } from '@/data/blog';
import ArticleView from '@/components/blog/ArticleView';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found — Digital Studio',
    };
  }

  return {
    title: `${article.title} — Journal | Digital Studio`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} — Digital Studio`,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} — Digital Studio`,
      description: article.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 2);

  return (
    <main>
      <ArticleView article={article} relatedArticles={relatedArticles} />
    </main>
  );
}
