import { blogPosts } from '@/data/posts';
import Link from 'next/link';

export default function TagsPage() {
  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Browse by Tag</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allTags.map(tag => {
            const postsWithTag = blogPosts.filter(post => post.tags.includes(tag));
            
            return (
              <div key={tag} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-4">
                  <Link href={`/tags/${tag}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    {tag}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  {postsWithTag.length} {postsWithTag.length === 1 ? 'post' : 'posts'}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
} 