import { blogPosts } from '@/data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';

export async function generateStaticParams() {
  const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  return tags.map((tag) => ({
    tag,
  }));
}

export default function TagPage({ params }: { params: { tag: string } }) {
  const posts = blogPosts.filter(post => post.tags.includes(params.tag));

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Posts tagged with "{params.tag}"
        </h1>
        <div className="grid gap-8">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
} 