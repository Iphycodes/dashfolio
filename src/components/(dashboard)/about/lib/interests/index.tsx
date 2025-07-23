// src/components/about/lib/interests/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import InterestCard from './interest-card';
import { Chart, Code1, Game, Brush } from 'iconsax-react';
import Image from 'next/image';

const interestsData = [
  {
    title: 'Historical Events',
    description:
      'Deep interest in pivotal moments that shaped human history, from ancient civilizations to modern transformative events.',
    icon: Chart,
    color: '#2196f3',
  },
  {
    title: 'Programming',
    description: 'Love exploring new technologies and contributing to open-source projects.',
    icon: Code1,
    color: '#4caf50',
  },
  {
    title: 'Arts & Painting',
    description:
      'Appreciation for visual arts, from classical Renaissance masterpieces to modern digital art and contemporary exhibitions.',
    icon: Brush, // You might need to import Brush from iconsax-react
    color: '#9c27b0',
  },
  {
    title: 'Gaming',
    description: 'Enjoy strategic games and occasionally streaming on Twitch.',
    icon: Game,
    color: '#ff9800',
  },
];

const Interests = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-neutral-800/50 bg-neutral-900/5 dark:bg-neutral-900/20 overflow-hidden !mt-[100px]"
    >
      <div className={`grid ${isTablet ? 'grid-cols-1' : 'grid-cols-5'}`}>
        {/* Image Section - Left Side */}
        <motion.div
          className={`relative ${isTablet ? 'h-[300px]' : 'col-span-2 h-full'}`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Image
            src="/asset/imgs/ai14.jpg"
            alt="Historical interests"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 z-10">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">Diverse Interests</h3>
              <p className="text-sm text-gray-200 max-w-xs">
                Exploring various passions that shape my perspective and fuel continuous personal
                growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Content Section - Right Side */}
        <div className={`${isTablet ? 'order-2' : 'col-span-3'} h-full`}>
          <div className="flex flex-col h-full p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <h2 className={`font-semibold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                Beyond The Code
              </h2>
              <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
                How I explore my life's diverse interests and maintain a healthy work-life
                balance.
              </p>
            </motion.div>

            <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar">
              <div
                className={`grid ${
                  isMobile
                    ? 'grid-cols-1 gap-4'
                    : isTablet
                      ? 'grid-cols-2 gap-4'
                      : 'grid-cols-2 gap-6'
                }`}
              >
                {interestsData.map((interest, index) => (
                  <InterestCard
                    key={interest.title}
                    {...interest}
                    index={index}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Interests;
