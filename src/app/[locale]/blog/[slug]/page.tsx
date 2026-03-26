import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/mock';
import BlogPostClient from './BlogPostClient';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage(
  props: {
    params: Promise<{ slug: string; locale: string }>;
  }
) {
  const params = await props.params;
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
