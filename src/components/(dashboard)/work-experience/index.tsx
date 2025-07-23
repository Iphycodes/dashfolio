// src/components/experience/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { Briefcase } from 'iconsax-react';
import ExperienceCard from './lib/experience-card';
import StatsOverview from './lib/stats-overview';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Ekaruz Technology, Lagos, Nigeria',
    period: '2025 - Present',
    location: 'Remote',
    type: 'Full-time',
    description:
      'Leading development of enterprise-scale applications with focus on modern architecture and best practices.',
    achievements: [
      'Led team of 5 developers in successful delivery of microservices architecture',
      'Reduced system response time by 60% through optimization',
      'Implemented CI/CD pipeline reducing deployment time by 70%',
      'Mentored 3 junior developers to senior roles',
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'AWS', 'Docker'],
    color: '#2196f3',
  },
  {
    title: 'Frontend Developer',
    company: 'GiroStack, Lagos, Nigeria',
    period: '2024',
    location: 'Remote',
    type: 'Full-time',
    description: 'Architected and developed full-stack applications for various business domains.',
    achievements: [
      'Maintained and enhanced several payment platforms—such as Giro—by ensuring system stability, implementing updates, and addressing performance and security issues to support continuous and reliable financial operations.',
      'Optimized database queries improving performance by 45%',
      'Integrated payment systems processing N100M+ monthly',
    ],
    techStack: ['Next.js', 'Tailwind', 'Redux'],
    color: '#4caf50',
  },
  {
    title: 'Frontend Developer',
    company: 'Calcot Technologies, Lagos, Nigeria',
    period: '2023 - 2024',
    location: 'Remote',
    type: 'Full-time',
    description: 'Specialized in building responsive and accessible web applications.',
    achievements: [
      'Built responsive UI components used across 10+ projects',
      'Reduced load time by 40% through code optimization',
      'Implemented automated testing with 90% coverage',
      'Contributed to open-source design system',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Jest'],
    color: '#e91e63',
  },
  {
    title: 'Frontend Developer',
    company: 'Chowille, Lagos, Nigeria',
    period: '2022 - 2023',
    location: 'Remote',
    type: 'Full-time',
    description: 'Specialized in building responsive and accessible web applications.',
    achievements: [
      'Implemented responsive design principles to ensure cross-platform compatibility of webpages.',
      'Collaborated with a cross-functional team to design and develop Giro, a robust and secure payment platform tailored for seamless financial transactions.',
      'Implemented automated testing with 90% coverage',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind', 'Jest'],
    color: '#2196f3',
  },
];

const WorkExperience = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  // const isTablet = useMediaQuery(mediaSize.tablet);

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
          <Briefcase variant="Bulk" className="text-blue-500" size={20} />
          <span className="text-sm">Professional Journey</span>
        </motion.div>

        <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold`}>
          Work Experience
        </h1>
        <p
          className={`text-muted-foreground max-w-2xl mx-auto ${isMobile ? 'text-sm' : 'text-base'}`}
        >
          A journey through my professional career, showcasing roles and achievements in software
          development.
        </p>
      </motion.div>

      {/* Stats Overview */}
      <StatsOverview isMobile={isMobile} />

      {/* Experience Cards */}
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.company}
            {...experience}
            index={index}
            isMobile={isMobile}
          />
        ))}
      </div>

      {/* Contact Section */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-muted-foreground">Interested in working together? Let's connect!</p>
        <motion.button
          className="px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </div>
  );
};

export default WorkExperience;
