'use client';

import { motion } from 'framer-motion';
import { TagUser, ArrowRight2 } from 'iconsax-react';
import { useMemo } from 'react';
import { BlogPost } from '../..';
import { generatePastelColor } from '@/_shared/helpers';
import { useSearchParams } from 'next/navigation';

interface CategoriesProps {
  isMobile?: boolean;
  blogPosts: BlogPost[];
}

const tags = [
  'React',
  'TypeScript',
  'Node.js',
  'AWS',
  'Docker',
  'Next.js',
  'Performance',
  'Security',
  'Testing',
  'API',
];

// const popularPosts = [
//   {
//     title: 'Building Scalable Microservices',
//     date: 'Mar 15, 2024',
//     readTime: '8 min',
//     slug: 'building-scalable-microservices',
//   },
//   {
//     title: 'React Performance Optimization',
//     date: 'Mar 10, 2024',
//     readTime: '6 min',
//     slug: 'react-performance-optimization',
//   },
//   {
//     title: 'Modern API Design Patterns',
//     date: 'Mar 5, 2024',
//     readTime: '7 min',
//     slug: 'modern-api-design-patterns',
//   },
// ];

const Categories = ({ blogPosts }: CategoriesProps) => {
  // Generate categories with counts and colors
  const categoryData = useMemo(() => {
    const categoryCounts: { [key: string]: number } = {};

    // Count posts in each category
    blogPosts.forEach((post) => {
      const category = post.category.toLowerCase();
      categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    });

    // Get unique categories including 'all'
    const uniqueCategories = [
      'all',
      ...Array.from(new Set(blogPosts.map((post) => post.category.toLowerCase()))),
    ];

    // Create category objects with name, count, and random color
    return uniqueCategories.map((category) => ({
      name: category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1),
      count: category === 'all' ? blogPosts.length : categoryCounts[category] || 0,
      color: generatePastelColor(category), // Generate color based on category name
    }));
  }, [blogPosts]);

  const searchParams = useSearchParams();

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
    //  setFilter(category);
  };

  return (
    <div className="space-y-8 sticky top-8">
      {/* Categories Section */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="font-semibold">Categories</h3>
        <div className="space-y-2">
          {categoryData.map((category, index) => (
            <motion.div
              key={category.name}
              onClick={() => {
                updateCategoryParam(category?.name?.toLowerCase());
              }}
              className="flex items-center cursor-pointer justify-between p-3 rounded-lg hover:bg-neutral-900/10 dark:hover:bg-neutral-800/30 transition-colors group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: category.color }} />
                <span>{category.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{category.count}</span>
                <ArrowRight2
                  size={16}
                  className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tags Cloud */}
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-2">
          <TagUser size={18} />
          <h3 className="font-semibold">Popular Tags</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              onClick={() => {
                updateCategoryParam(tag?.toLowerCase());
              }}
              className="px-3 py-1 rounded-full bg-neutral-900/10 dark:bg-neutral-800/30 text-sm hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
              //   onHoverStart={() => setHoveredTag(tag)}
              //   onHoverEnd={() => setHoveredTag(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Popular Posts */}
      {/* <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="font-semibold">Popular Posts</h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-4 rounded-lg hover:bg-neutral-900/10 dark:hover:bg-neutral-800/30 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="font-medium mb-2 line-clamp-2">{post.title}</h4>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div> */}
    </div>
  );
};

export default Categories;
