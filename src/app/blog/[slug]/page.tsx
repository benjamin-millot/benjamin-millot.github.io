import { blogPosts } from '@/data/posts';
import { notFound } from 'next/navigation';
import MarkdownContent from '@/components/MarkdownContent';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>
          <MarkdownContent content={post.content} />
        </article>
      </div>
    </div>
  );
} 