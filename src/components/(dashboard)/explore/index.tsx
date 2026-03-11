'use client';

import HeroSection from './lib/hero-section';
import NewDrops from './lib/new-drops';
import ThoughtsSection from './lib/thoughts';
import ServiceCards from './lib/service-cards';
import ExperienceSection from './lib/experience';
import { motion } from 'framer-motion';
import RecentActivity from './lib/recent-activity';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const Explore = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.isTablet);

  return (
    <div className={`max-w-[1100px] mx-auto ${isMobile ? 'px-2 py-6' : 'px-4 py-10'} space-y-20`}>
      <HeroSection />

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <NewDrops />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <ThoughtsSection />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <ServiceCards />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <ExperienceSection />
      </motion.div>

      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}>
        <RecentActivity isMobile={isMobile} isTablet={isTablet} />
      </motion.div>
    </div>
  );
};

export default Explore;
