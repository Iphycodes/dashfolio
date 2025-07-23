'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { BlogPost } from '../..';
import BlogCard from './blog-card';

interface BlogGridProps {
  posts: BlogPost[];
  isMobile?: boolean;
  isTablet?: boolean;
}

const BlogGrid = ({ posts, isMobile, isTablet }: BlogGridProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const [filter, setFilter] = useState(category || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Update URL when filter changes
  const updateCategoryParam = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }

    // Create the new URL
    const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
    window.history.replaceState({}, '', newUrl);

    // Update the filter state directly
    setFilter(category);
  };

  // Listen for URL changes and update filter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    setFilter(categoryParam || 'all');
  }, [searchParams]);

  // Get unique categories
  const categories = [
    'all',
    ...Array.from(new Set(posts.map((post) => post.category.toLowerCase()))),
  ];

  // Filter and search posts
  const filteredPosts = posts.filter((post) => {
    const matchesFilter = filter === 'all' || post.category.toLowerCase() === filter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="space-y-8">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                updateCategoryParam(category);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter !== category
                  ? ''
                  : 'bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full sm:w-64 px-4 py-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Posts Grid */}
      <motion.div
        className={`grid gap-8 ${isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-2'}`}
        layout
      >
        {currentPosts.map((post, index) => (
          <BlogCard key={post.id} post={post} index={index} isMobile={isMobile} />
        ))}
      </motion.div>
      {/* Empty State */}
      {currentPosts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-xl font-semibold mb-2">No posts found</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      )}
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`h-8 w-8 rounded-full flex items-center justify-center text-sm transition-colors ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {index + 1}
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogGrid;
