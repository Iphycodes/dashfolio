// src/app/(ui)/(dashboard)/blog/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import BlogPostContent from '@/components/(dashboard)/blog/lib/blog-post-content';
import { blogPosts } from '@/components/(dashboard)/blog';

const BlogPost = () => {
  const params = useParams();
  const postId = params.id as string;

  // Find the blog post with the matching ID
  const post = blogPosts.find((post) => post.id === postId);

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
          <p className="text-muted-foreground mt-2">The post you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return <BlogPostContent post={post} />;
};

export default BlogPost;
