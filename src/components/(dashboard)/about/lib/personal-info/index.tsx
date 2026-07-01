// src/components/about/lib/personal-info/index.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import InfoCard from './info-card';

const personalDetails = [
  {
    icon: 'ri-map-pin-line',
    title: 'Location',
    detail: 'Kaduna, Nigeria',
    color: '#2196f3',
  },
  {
    icon: 'ri-global-line',
    title: 'Languages',
    detail: 'English, Igbo',
    color: '#4caf50',
  },
  // {
  //   icon: 'ri-home-heart-line',
  //   title: 'Family',
  //   detail: 'Second of 4 siblings',
  //   color: '#ff9800',
  // },
];

const PersonalInfo = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden"
    >
      <div className={`grid ${isTablet ? 'grid-cols-1' : 'md:grid-cols-2'} gap-8`}>
        {/* Content Section */}
        <div className={`space-y-6 ${isMobile ? 'p-4' : 'p-6'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className={`font-semibold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
              Cultural Roots
            </h2>
            <div
              className={`space-y-4 text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}
            >
              <p>
                Born and raised in the vibrant city of Zaria, Nigeria, my story begins in a family
                that valued both tradition and innovation. As the fith of six siblings, I grew up in
                an environment where education and cultural values were equally emphasized.
              </p>
              <p>
                This unique blend of traditional values and modern aspirations has shaped my
                approach to both life and technology, fostering a deep appreciation for innovation
                while maintaining strong cultural connections.
              </p>
            </div>
          </motion.div>

          <motion.div
            className={`grid gap-4 ${
              isMobile ? 'grid-cols-1' : isTablet ? 'grid-cols-2' : 'md:grid-cols-1 lg:grid-cols-2'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {personalDetails.map((detail, index) => (
              <InfoCard key={detail.title} {...detail} delay={index * 0.1} isMobile={isMobile} />
            ))}
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className={`relative h-full min-h-[500px]`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/asset/imgs/myself-6.jpg"
            alt="Cultural background"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PersonalInfo;
