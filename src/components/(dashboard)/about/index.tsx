// src/app/(ui)/(dashboard)/about/page.tsx
'use client';

import { motion } from 'framer-motion';
// import PersonalInfo from '@/components/about/lib/';
// import Education from '@/components/about/lib/education';
// import CareerJourney from '@/components/about/lib/career-journey';
// import Interests from '@/components/about/lib/interests';
// import TechPassion from '@/components/about/lib/tech-passion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import PersonalInfo from './lib/personal-info';
import Education from './lib/education';
import CareerJourney from './lib/career-journey';
import Interests from './lib/interests';
import TechPassion from './lib/tech-passion';

const About = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <div className={`max-w-7xl mx-auto space-y-8 pb-8 ${isMobile ? 'px-4' : 'px-6'}`}>
      {/* Hero Section */}
      <motion.div
        className={`text-center space-y-4 mb-12 ${isTablet ? 'pt-6' : 'pt-10'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={`font-extrabold leading-tight ${isMobile ? 'text-3xl' : 'text-[54px]'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The Story Behind The Code
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          From cultural roots to tech aspirations, discover the journey that shaped my path in
          software development and beyond.
        </motion.p>
      </motion.div>

      {/* Story Sections */}
      <div className="space-y-6 md:space-y-8">
        <PersonalInfo />
        <Education />
        <CareerJourney />
        <Interests />
        <TechPassion />
      </div>
    </div>
  );
};

export default About;
