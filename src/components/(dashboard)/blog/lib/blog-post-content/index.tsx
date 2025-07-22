// src/components/blog/lib/blog-post-content/index.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Clock, Calendar } from 'iconsax-react';
import { BlogPost } from '../..';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';

interface BlogPostContentProps {
  post: BlogPost;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  return (
    <article className="max-w-4xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <motion.div
        className="space-y-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-2">
          <Badge variant="outline" className="text-blue-500">
            {post.category}
          </Badge>
          <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold`}>
            {post.title}
          </h1>
        </div>

        {/* Author & Meta Info */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-medium">{post.author.name}</div>
              <div className="text-sm text-muted-foreground">{post.author.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">{post.readTime} read</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Cover Image */}
      <motion.div
        className="relative h-[400px] rounded-xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="prose prose-lg dark:prose-invert max-w-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-8">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
};

export default BlogPostContent;
