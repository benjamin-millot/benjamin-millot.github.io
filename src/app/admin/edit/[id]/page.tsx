'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PostForm from '@/components/PostForm';
import { BlogPost } from '@/types/blog';
import { blogPosts } from '@/data/posts';

export default function EditPostPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState<BlogPost | undefined>();

  useEffect(() => {
    // TODO: Implement API call to fetch post
    const foundPost = blogPosts.find(p => p.id === params.id);
    setPost(foundPost);
  }, [params.id]);

  const handleSubmit = async (updatedPost: Omit<BlogPost, 'id'>) => {
    setIsSubmitting(true);
    try {
      // TODO: Implement API call to update post
      console.log('Updating post:', updatedPost);
      router.push('/admin');
    } catch (error) {
      console.error('Error updating post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push('/admin');
  };

  if (!post) {
    return (
      <div className="min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-gray-900 dark:text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Edit Post
        </h1>
        <PostForm post={post} onSubmit={handleSubmit} onCancel={handleCancel} />
      </div>
    </div>
  );
} 