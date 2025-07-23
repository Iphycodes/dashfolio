'use client';

import HeroSection from './lib/hero-section';
import NewDrops from './lib/new-drops';
import ThoughtsSection from './lib/thoughts';
import ServiceCards from './lib/service-cards';
import ExperienceSection from './lib/experience';
import { motion } from 'framer-motion';
import RecentActivity from './lib/recent-activity';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';

const Explore = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.isTablet);

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8 space-y-16">
      <HeroSection />
      <NewDrops />
      <ThoughtsSection />
      {/* <Newsletter /> */}
      <ServiceCards />
      <ExperienceSection />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <RecentActivity isMobile={isMobile} isTablet={isTablet} />
      </motion.div>
    </div>
  );
};

export default Explore;
