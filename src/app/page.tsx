import { blogPosts } from '@/data/posts';
import BlogCard from '@/components/BlogCard';

export default function HomePage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Latest Posts</h1>
        <div className="grid gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
