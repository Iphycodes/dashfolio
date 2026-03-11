// src/components/blog/lib/blog-grid/blog-card.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'iconsax-react';
import { BlogPost } from '../..';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  isMobile?: boolean;
}

const BlogCard = ({ post, index, isMobile }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.id}`} className="text-black dark:text-white">
        <motion.div
          className="group rounded-xl overflow-hidden border border-neutral-800/20 bg-neutral-900/5 dark:bg-neutral-800/10 hover:border-neutral-800/40 transition-colors"
          whileHover={{ y: -5 }}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Category */}
            <div className="absolute top-4 left-4">
              <Badge
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-none text-white"
              >
                {post.category}
              </Badge>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h3
              className={`font-semibold ${isMobile ? 'text-lg' : 'text-xl'} line-clamp-2 group-hover:text-blue transition-colors`}
            >
              {post.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>

            {/* Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-neutral-800/20">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm">{post.author.name}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock size={16} />
                <span>{post.readTime} read</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
