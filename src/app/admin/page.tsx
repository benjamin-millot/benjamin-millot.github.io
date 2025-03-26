'use client';

import { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '@/data/posts';
import { BlogPost } from '@/types/blog';

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      // TODO: Implement API call to delete post
      console.log('Deleting post:', id);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Blog Posts
          </h1>
          <Link
            href="/admin/new"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create New Post
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {posts.map((post) => (
              <li key={post.id}>
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 truncate">
                        {post.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex space-x-2">
                      <Link
                        href={`/admin/edit/${post.id}`}
                        className="px-3 py-1 text-sm font-medium text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="px-3 py-1 text-sm font-medium text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <p>
                        {post.author} • {post.date} • {post.readingTime}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                      <p>
                        Tags: {post.tags.join(', ')}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 