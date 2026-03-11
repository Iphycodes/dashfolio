// src/components/courses/lib/course-grid/index.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import CourseCard from './course-card';

interface Instructor {
  name: string;
  avatar: string;
  title: string;
}

interface Course {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  lessons: number;
  level: string;
  platform: string;
  certificate: boolean;
  price: string;
  featured: boolean;
  progress: number;
  category: string;
  techStack: string[];
  instructor: Instructor;
}

interface CourseGridProps {
  courses: Course[];
  isMobile?: boolean;
  isTablet?: boolean;
}

const CourseGrid = ({ courses, isMobile, isTablet }: CourseGridProps) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('progress'); // progress, date, level

  // Get unique categories
  const categories = [
    'all',
    ...courses
      .map((course) => course.category.toLowerCase())
      .filter((category, index, array) => array.indexOf(category) === index),
  ];

  // const categories = [
  //   'all',
  //   ...Array.from(new Set(courses.map((course) => course.category.toLowerCase()))),
  // ];

  // Filter and sort courses
  const filteredCourses = courses
    .filter((course) => activeFilter === 'all' || course.category.toLowerCase() === activeFilter)
    .sort((a, b) => {
      switch (sortBy) {
        case 'progress':
          return b.progress - a.progress;
        case 'level':
          const levelOrder = { Beginner: 1, Intermediate: 2, Advanced: 3, Expert: 4 };
          return (
            levelOrder[b.level as keyof typeof levelOrder] -
            levelOrder[a.level as keyof typeof levelOrder]
          );
        default:
          return 0;
      }
    });

  return (
    <div className="space-y-8">
      {/* Filters and Sorting */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === category
                  ? 'bg-blue text-white'
                  : 'bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Sort Options */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 text-sm"
        >
          <option value="progress">Sort by Progress</option>
          <option value="level">Sort by Level</option>
        </select>
      </div>

      {/* Courses Grid */}
      <motion.div
        className={`grid gap-6 ${
          isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'grid-cols-3'
        }`}
        layout
      >
        {filteredCourses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} isMobile={isMobile} />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900/10 dark:bg-neutral-800/30 mb-4">
            <i className="ri-search-line text-xl" />
          </div>
          <h3 className="text-lg font-medium mb-2">No courses found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters to find what you're looking for.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default CourseGrid;
