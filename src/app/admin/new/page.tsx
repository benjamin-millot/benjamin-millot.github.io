'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import PostForm from '@/components/PostForm';
import { BlogPost } from '@/types/blog';

export default function NewPostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (post: Omit<BlogPost, 'id'>) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement API call to create post
      console.log('Creating post:', post);
      router.push('/admin');
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push('/admin');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Create New Post
        </h1>
        <PostForm onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
} 