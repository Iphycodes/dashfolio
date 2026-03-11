// src/components/courses/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { Book1, Teacher } from 'iconsax-react';
import FeaturedCourses from './lib/featured-courses';
import CourseGrid from './lib/course-grid';
import LearningStats from './lib/learning-stats';

const courses = [
  {
    id: 1,
    title: 'Advanced React Patterns',
    description:
      'Master advanced React patterns and best practices for building scalable applications.',
    thumbnail: '/path/to/react-course.jpg',
    duration: '8 weeks',
    lessons: 24,
    level: 'Advanced',
    platform: 'Udemy',
    certificate: true,
    price: '$99',
    featured: true,
    progress: 85,
    category: 'Frontend',
    techStack: ['React', 'TypeScript', 'Redux'],
    instructor: {
      name: 'John Doe',
      avatar: '/path/to/avatar.jpg',
      title: 'Senior Frontend Developer',
    },
  },
  {
    id: 2,
    title: 'System Design for Senior Engineers',
    description:
      'Learn how to design large-scale distributed systems and microservices architecture.',
    thumbnail: '/path/to/system-design.jpg',
    duration: '10 weeks',
    lessons: 30,
    level: 'Expert',
    platform: 'Coursera',
    certificate: true,
    price: '$149',
    featured: true,
    progress: 60,
    category: 'Architecture',
    techStack: ['AWS', 'Docker', 'Kubernetes'],
    instructor: {
      name: 'Jane Smith',
      avatar: '/path/to/avatar.jpg',
      title: 'Software Architect',
    },
  },
  // Add more courses...
];

const Courses = () => {
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/20 dark:bg-neutral-800/30"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Book1 variant="Bulk" className="text-blue" size={20} />
          <span className="text-sm">Educational Journey</span>
        </motion.div>

        <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold`}>
          Learning & Development
        </h1>
        <p
          className={`text-muted-foreground max-w-2xl mx-auto ${isMobile ? 'text-sm' : 'text-base'}`}
        >
          A collection of courses and learning resources I've used to enhance my skills and stay
          current with modern technologies.
        </p>
      </motion.div>

      {/* Learning Stats */}
      <LearningStats isMobile={isMobile} />

      {/* Featured Courses */}
      <div className="space-y-8">
        <motion.h2
          className={`font-semibold ${isMobile ? 'text-xl' : 'text-2xl'}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Courses
        </motion.h2>
        <FeaturedCourses
          courses={courses.filter((course) => course.featured)}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      </div>

      {/* All Courses Grid */}
      <CourseGrid courses={courses} isMobile={isMobile} isTablet={isTablet} />

      {/* CTA Section */}
      <motion.div
        className="text-center space-y-6 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-neutral-900/10 dark:bg-neutral-800/30 mb-4">
          <Teacher variant="Bulk" className="text-green-500" size={24} />
        </div>
        <h2 className={`font-semibold ${isMobile ? 'text-xl' : 'text-2xl'}`}>
          Want to Learn Together?
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          I'm always open to collaborating and sharing knowledge. Let's connect and learn together!
        </p>
        <motion.button
          className="px-6 py-3 rounded-full bg-blue text-white hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Courses;
