'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Link2 } from 'iconsax-react';
import { useState, useEffect } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  link: string;
  github: string;
  featured: boolean;
  year: string;
  color: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
  isMobile?: boolean;
  isTablet?: boolean;
}

const ProjectShowcase = ({ projects, isMobile, isTablet }: ProjectShowcaseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return; // Pause autoplay on hover

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [projects.length, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Navigation */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Featured Projects</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
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
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `${projects[currentIndex].color}20`,
                    color: projects[currentIndex].color,
                  }}
                >
                  {projects[currentIndex].category} • {projects[currentIndex].year}
                </motion.div>
                <motion.h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold mt-4`}>
                  {projects[currentIndex].title}
                </motion.h2>
              </div>

              <motion.p className="text-muted-foreground">
                {projects[currentIndex].description}
              </motion.p>

              <div className="flex flex-wrap gap-2">
                {projects[currentIndex].technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>

              <motion.div className="flex items-center gap-4">
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-blue transition-colors"
                >
                  <Link2 size={16} />
                  <span>Live Preview</span>
                </a>
                {/* <span className="text-muted-foreground">•</span>
                <a
                  href={projects[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-blue transition-colors"
                >
                  <Code size={16} />
                  <span>View Code</span>
                </a> */}
              </motion.div>
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
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-blue'
                : 'w-1.5 bg-neutral-900/20 dark:bg-neutral-800/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
