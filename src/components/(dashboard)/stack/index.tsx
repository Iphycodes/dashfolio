// src/components/stacks/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { Code1, BoxSearch, Command, LoginCurve } from 'iconsax-react';
import StackCategory from './lib/stack-category';
import TechCarousel from './lib/tech-carousel';
import ExperienceIndicator from './lib/experience-indicator';

const stackCategories = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces',
    icon: Code1,
    color: '#2196f3',
    technologies: [
      { name: 'React.js', level: 95, years: 3 },
      { name: 'Next.js', level: 90, years: 3 },
      { name: 'TypeScript', level: 85, years: 3 },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Building scalable server-side applications',
    icon: Command,
    color: '#4caf50',
    technologies: [
      { name: 'Node.js', level: 90, years: 1 },
      { name: 'Nest.js', level: 85, years: 1 },
      { name: 'MongoDB', level: 80, years: 1 },
    ],
  },
  {
    title: 'Webiste Design',
    description: 'Crafting intuitive website designs with web builders',
    icon: LoginCurve,
    color: '#e91e63',
    technologies: [
      { name: 'WordPress', level: 85, years: 2 },
      { name: 'Framer', level: 90, years: 2 },
      { name: 'Webflow', level: 85, years: 2 },
    ],
  },
  //   {
  //     title: 'DevOps & Cloud',
  //     description: 'Managing and deploying cloud infrastructure',
  //     icon: BoxSearch,
  //     color: '#ff9800',
  //     technologies: [
  //       { name: 'AWS', level: 85, years: 3 },
  //       { name: 'Docker', level: 80, years: 2 },
  //       { name: 'CI/CD', level: 85, years: 3 },
  //       { name: 'Kubernetes', level: 75, years: 2 },
  //     ],
  //   },
];

const Stacks = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-16">
      {/* Hero Section */}
      <motion.div
        className={`text-center space-y-6 ${isMobile ? 'px-4' : ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/20 dark:bg-neutral-800/30 ${
            isMobile ? 'text-xs' : 'text-sm'
          }`}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Command variant="Bulk" className="text-blue-500" size={isMobile ? 16 : 20} />
          <span>Technical Expertise</span>
        </motion.div>

        <h1 className={`font-bold ${isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'}`}>
          Technology Stack
        </h1>
        <p
          className={`text-muted-foreground max-w-2xl mx-auto ${isMobile ? 'text-sm' : 'text-base'}`}
        >
          A comprehensive overview of the technologies I specialize in, showcasing years of hands-on
          experience and mastery.
        </p>
      </motion.div>

      {/* Tech Carousel */}
      <TechCarousel isMobile={isMobile} isTablet={isTablet} />

      {/* Stack Categories */}
      <div
        className={`grid gap-8 ${
          isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2 gap-6' : 'md:grid-cols-2 gap-8'
        }`}
      >
        {stackCategories.map((category, index) => (
          <StackCategory key={category.title} {...category} index={index} isMobile={isMobile} />
        ))}
      </div>

      {/* Experience Timeline */}
      <ExperienceIndicator isMobile={isMobile} isTablet={isTablet} />
    </div>
  );
};

export default Stacks;
