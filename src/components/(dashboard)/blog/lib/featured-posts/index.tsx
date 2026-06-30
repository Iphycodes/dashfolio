// src/components/blog/lib/featured-posts/index.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'iconsax-react';
import { useState, useEffect } from 'react';
import { BlogPost } from '../..';

interface FeaturedPostsProps {
  posts: BlogPost[];
  isMobile?: boolean;
  isTablet?: boolean;
}

const FeaturedPosts = ({ posts, isMobile, isTablet }: FeaturedPostsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [posts.length, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Navigation */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Featured Articles</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/30 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-neutral-50 dark:bg-neutral-800/30 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className={`grid ${isTablet ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-12'}`}>
        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={`flex flex-col justify-center ${isTablet ? 'text-center' : 'text-left'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {/* Category & Date */}
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="outline" className="text-blue">
                  {posts[currentIndex].category}
                </Badge>
                <span className="text-muted-foreground">
                  {new Date(posts[currentIndex].publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Title & Excerpt */}
              <div>
                <Link href={`/blog/${posts[currentIndex].id}`}>
                  <h2
                    className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold text-black dark:text-white hover:text-blue transition-colors`}
                  >
                    {posts[currentIndex].title}
                  </h2>
                </Link>
                <p className="text-muted-foreground mt-4">{posts[currentIndex].excerpt}</p>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="relative h-8 w-8 rounded-full overflow-hidden">
                    <Image
                      src={posts[currentIndex].author.avatar}
                      alt={posts[currentIndex].author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{posts[currentIndex].author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-muted-foreground" />
                  <span className="text-muted-foreground">{posts[currentIndex].readTime} read</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {posts[currentIndex].tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <Link href={`/blog/${posts[currentIndex].id}`}>
                <motion.button
                  className="inline-flex items-center gap-2 mt-5 text-blue font-medium"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <i className="ri-arrow-right-line" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative h-[400px] rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={posts[currentIndex].coverImage}
              alt={posts[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      {/* <div className="flex justify-center gap-2">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-blue'
                : 'w-1.5 bg-neutral-100 dark:bg-neutral-800/50'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default FeaturedPosts;
