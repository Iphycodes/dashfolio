'use client';

import { motion } from 'framer-motion';
import { Code1, CloudConnection } from 'iconsax-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ExperienceIndicatorProps {
  isMobile?: boolean;
  isTablet?: boolean;
}

const images = [
  { src: '/asset/imgs/myself-mem-2.jpeg', year: '2020' },
  { src: '/asset/imgs/myself-mem-4.jpeg', year: '2022' },

  { src: '/asset/imgs/myself-6.jpg', year: '2024' },
];

const milestones = [
  {
    year: '2020',
    title: 'Started Development Journey',
    description: 'Began with frontend development, mastering HTML, CSS, and JavaScript',
    icon: Code1,
    color: '#2196f3',
  },
  {
    year: '2022',
    title: 'Frontend Development',
    description: 'Expanded into frontend technologies and javascript libraries',
    icon: CloudConnection,
    color: '#e91e63',
  },
  {
    year: '2024',
    title: 'Full Stack Development',
    description: 'Expanded into backend technologies and database management',
    icon: CloudConnection,
    color: '#4caf50',
  },
];

const ExperienceIndicator = ({ isMobile }: ExperienceIndicatorProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className={`font-bold ${isMobile ? 'text-2xl' : 'text-3xl'}`}>My Journey Through Tech</h2>
        <p
          className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'} max-w-2xl mx-auto`}
        >
          A timeline of my professional growth and key milestones in software development.
        </p>
      </div>

      <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-12'}`}>
        {/* Image Section */}
        <div className="relative h-[600px] w-full rounded-xl overflow-hidden">
          {/* Current Image */}
          <motion.div
            key={`current-${currentImageIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={images[currentImageIndex].src}
              alt="Tech Journey"
              fill
              className="object-cover"
              priority // This ensures the current image loads immediately
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </motion.div>

          {/* Next Image (Preloaded) */}
          <motion.div
            key={`next-${currentImageIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Image
              src={images[currentImageIndex % images.length].src}
              alt="Next Journey"
              fill
              className="object-cover"
              priority // This ensures next image is preloaded
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </motion.div>

          {/* Year Tag */}
          <div className="absolute top-4 right-4 z-10">
            <motion.div
              key={images[currentImageIndex].year}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4 py-2 rounded-full bg-neutral-900/80 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-white">
                {images[currentImageIndex].year}
              </span>
            </motion.div>
          </div>
        </div>
        {/* Milestones Section */}
        <div className="space-y-6">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="bg-neutral-50 dark:bg-neutral-800/30 p-6 rounded-xl space-y-3 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {/* Year and Icon */}
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="h-8 w-8 rounded-full bg-neutral-100 dark:bg-neutral-800/50 
                             flex items-center justify-center border-2 border-neutral-800/50"
                    whileHover={{ scale: 1.1 }}
                  >
                    <milestone.icon size={16} variant="Bulk" color={milestone.color} />
                  </motion.div>
                  <span
                    className="text-sm px-3 py-1 rounded-full"
                    style={{ backgroundColor: `${milestone.color}20`, color: milestone.color }}
                  >
                    {milestone.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className={`font-semibold ${isMobile ? 'text-lg' : 'text-xl'} mb-2`}>
                    {milestone.title}
                  </h3>
                  <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceIndicator;
