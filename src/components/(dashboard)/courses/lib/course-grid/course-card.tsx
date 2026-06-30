// src/components/courses/lib/course-grid/course-card.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Book1, Timer1 } from 'iconsax-react';

interface CourseCardProps {
  course: {
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
    progress: number;
    category: string;
    techStack: string[];
    instructor: {
      name: string;
      avatar: string;
      title: string;
    };
  };
  index: number;
  isMobile?: boolean;
}

const CourseCard = ({ course, index, isMobile }: CourseCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="rounded-xl border border-neutral-800/20 bg-neutral-50 dark:bg-neutral-800/10 overflow-hidden"
        whileHover={{ y: -5 }}
      >
        {/* Thumbnail */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={course.thumbnail}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Platform Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 text-black text-xs font-medium">
            {course.platform}
          </div>

          {/* Progress Circle */}
          <div className="absolute bottom-4 right-4 h-10 w-10">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeOpacity="0.2"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeDasharray={`${course.progress}, 100`}
              />
              <text x="18" y="20.35" className="fill-white text-xs" textAnchor="middle">
                {course.progress}%
              </text>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <Badge variant="outline" className="mb-2">
              {course.level}
            </Badge>
            <h3 className={`font-medium ${isMobile ? 'text-lg' : 'text-xl'} line-clamp-2`}>
              {course.title}
            </h3>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Timer1 size={16} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Book1 size={16} />
              <span>{course.lessons} lessons</span>
            </div>
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-3 pt-4 border-t border-neutral-800/20">
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image
                src={course.instructor.avatar}
                alt={course.instructor.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{course.instructor.name}</p>
              <p className="text-xs text-muted-foreground truncate">{course.instructor.title}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CourseCard;