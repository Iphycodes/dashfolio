// src/components/courses/lib/featured-courses/index.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Book1, Clock, Medal, Profile2User } from 'iconsax-react';
import { useState, useEffect } from 'react';

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

interface FeaturedCoursesProps {
  courses: Course[];
  isMobile?: boolean;
  isTablet?: boolean;
}

const FeaturedCourses = ({ courses, isMobile, isTablet }: FeaturedCoursesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [courses.length, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Navigation */}
      <div className="flex justify-end gap-2 mb-6">
        <motion.button
          onClick={handlePrev}
          className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="ri-arrow-left-s-line text-xl" />
        </motion.button>
        <motion.button
          onClick={handleNext}
          className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="ri-arrow-right-s-line text-xl" />
        </motion.button>
      </div>

      {/* Course Content */}
      <div className={`grid ${isTablet ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-12'}`}>
        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="outline" className="mb-4">
                {courses[currentIndex].category}
              </Badge>
              <h3 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold`}>
                {courses[currentIndex].title}
              </h3>
              <p className="text-muted-foreground mt-2">{courses[currentIndex].description}</p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-blue-500" />
                <span>{courses[currentIndex].duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Book1 size={20} className="text-green-500" />
                <span>{courses[currentIndex].lessons} lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Medal size={20} className="text-yellow-500" />
                <span>{courses[currentIndex].level}</span>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Technologies Covered</h4>
              <div className="flex flex-wrap gap-2">
                {courses[currentIndex].techStack.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="flex items-center gap-4 p-4 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={courses[currentIndex].instructor.avatar}
                  alt={courses[currentIndex].instructor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{courses[currentIndex].instructor.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {courses[currentIndex].instructor.title}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Course Progress</span>
                <span>{courses[currentIndex].progress}%</span>
              </div>
              <div className="h-2 bg-neutral-900/10 dark:bg-neutral-800/30 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${courses[currentIndex].progress}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${currentIndex}`}
            className="relative h-[400px] rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={courses[currentIndex].thumbnail}
              alt={courses[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Platform Badge */}
            <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/90 text-black text-sm font-medium">
              {courses[currentIndex].platform}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {courses.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-blue-500'
                : 'w-1.5 bg-neutral-900/20 dark:bg-neutral-800/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCourses;