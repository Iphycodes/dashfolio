// src/components/blog/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { Book1 } from 'iconsax-react';
import FeaturedPosts from './lib/featured-posts';
import BlogGrid from './lib/blog-grid';
import Categories from './lib/categories';

// Blog data interface
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  featured: boolean;
}

// Sample blog data
export const blogPosts: BlogPost[] = [
  {
    id: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications with Modern Architecture',
    excerpt:
      'Learn how to structure large-scale React applications for maintainability and performance.',
    content: '...', // Full content will be in a separate file
    coverImage: '/asset/imgs/tech-boy-1.jpeg',
    author: {
      name: 'John Doe',
      avatar: '/asset/imgs/tech-boy-5.jpeg',
      role: 'Senior Frontend Developer',
    },
    category: 'Development',
    tags: ['React', 'Architecture', 'Performance'],
    readTime: '8 min',
    publishedAt: '2024-03-15',
    featured: true,
  },
  {
    id: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications with Modern Architecture',
    excerpt:
      'Learn how to structure large-scale React applications for maintainability and performance.',
    content: '...', // Full content will be in a separate file
    coverImage: '/asset/imgs/tech-boy-2.jpeg',
    author: {
      name: 'John Doe',
      avatar: '/asset/imgs/tech-boy-5.jpeg',
      role: 'Senior Frontend Developer',
    },
    category: 'Business',
    tags: ['React', 'Architecture', 'Performance'],
    readTime: '8 min',
    publishedAt: '2024-03-15',
    featured: true,
  },
  {
    id: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications with Modern Architecture',
    excerpt:
      'Learn how to structure large-scale React applications for maintainability and performance.',
    content: '...', // Full content will be in a separate file
    coverImage: '/asset/imgs/tech-boy-3.jpeg',
    author: {
      name: 'John Doe',
      avatar: '/asset/imgs/tech-boy-8.jpeg',
      role: 'Senior Frontend Developer',
    },
    category: 'Business',
    tags: ['React', 'Architecture', 'Performance'],
    readTime: '8 min',
    publishedAt: '2024-03-15',
    featured: true,
  },
  {
    id: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications with Modern Architecture',
    excerpt:
      'Learn how to structure large-scale React applications for maintainability and performance.',
    content: '...', // Full content will be in a separate file
    coverImage: '/asset/imgs/tech-boy-5.jpeg',
    author: {
      name: 'John Doe',
      avatar: '/asset/imgs/tech-boy-7.jpeg',
      role: 'Senior Frontend Developer',
    },
    category: 'Technology',
    tags: ['React', 'Architecture', 'Performance'],
    readTime: '8 min',
    publishedAt: '2024-03-15',
    featured: true,
  },
  // Add more blog posts...
];

const Blog = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-16">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800/30"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Book1 variant="Bulk" className="text-blue" size={20} />
          <span className="text-sm">Technical Insights</span>
        </motion.div>

        <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold`}>
          Blog & Articles
        </h1>
        <p
          className={`text-muted-foreground max-w-2xl mx-auto ${isMobile ? 'text-sm' : 'text-base'}`}
        >
          Sharing knowledge and experiences about software development, architecture, and best
          practices.
        </p>
      </motion.div>

      {/* Featured Posts */}
      <FeaturedPosts
        posts={blogPosts.filter((post) => post.featured)}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      <div className={`grid ${isTablet ? 'grid-cols-1 gap-8' : 'grid-cols-12 gap-12'}`}>
        {/* Main Content */}
        <div className={`${isTablet ? 'w-full' : 'col-span-8'}`}>
          <BlogGrid posts={blogPosts} isMobile={isMobile} isTablet={isTablet} />
        </div>

        {/* Sidebar */}
        <div className={`${isTablet ? 'w-full' : 'col-span-4'}`}>
          <Categories isMobile={isMobile} blogPosts={blogPosts} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
