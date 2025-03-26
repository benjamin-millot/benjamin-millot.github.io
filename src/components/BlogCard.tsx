import Link from 'next/link';
import { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
        <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {post.title}
        </h2>
        <div className="mt-2 text-sm text-gray-500">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="mt-4 text-gray-600 line-clamp-3">{post.excerpt}</p>
        <div className="mt-4 flex items-center">
          <span className="text-sm text-gray-500">By {post.author}</span>
        </div>
      </article>
    </Link>
  );
} 