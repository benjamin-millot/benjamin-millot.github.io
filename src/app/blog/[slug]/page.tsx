import { blogPosts } from '@/data/posts';
import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
            <span className="mx-2">•</span>
            <span>By {post.author}</span>
          </div>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MarkdownContent content={post.content} />
        </div>
      </div>
    </article>
  );
} 