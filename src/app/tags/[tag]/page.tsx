import { blogPosts } from '@/data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogCard from '@/components/BlogCard';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const postsWithTag = blogPosts.filter(post => post.tags.includes(tag));

  if (postsWithTag.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Posts tagged with "{tag}"</h1>
        
        <div className="grid gap-8">
          {postsWithTag.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
} 