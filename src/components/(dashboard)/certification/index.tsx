// src/components/certifications/index.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Medal, Gift } from 'iconsax-react';
import CertificationCard from './lib/certification-card';
import AwardCard from './lib/award-card';
import Showcase from './lib/showcase';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';

const certifications = [
  {
    title: 'ALX Africa',
    issuer: 'Software Engineering',
    date: '2023',
    credential: 'AWS-SAA-C03',
    badges: ['HTML', 'CSS', 'Javascript', 'Github'],
    logo: '/asset/svgs/alx-logo.jpeg',
    color: '#FF9900',
  },
  {
    title: 'Bachelors of Computer Science',
    issuer: 'Ahmadu Bellop University',
    date: '2023',
    credential: 'AZ-204',
    badges: ['HTML', 'CSS', 'Javacript', 'Java'],
    logo: '/asset/svgs/ABU-logo.png',
    color: '#008AD7',
  },
  {
    title: 'Software Development',
    issuer: 'Google Developers',
    date: '2022',
    credential: 'AZ-204',
    badges: ['HTML', 'CSS', 'Javacript', 'Typescript'],
    logo: '/asset/svgs/google-dev-logo.png',
    color: '#008AD7',
  },
  {
    title: 'Diploma ICT and Web Design',
    issuer: 'Multiple Bytes',
    date: '2016',
    credential: 'GCP-PCA-2023',
    badges: ['HTML', 'CSS', 'Javascript', 'Visual Basic'],
    logo: '/asset/svgs/brand-logo-2.svg',
    color: '#4285F4',
  },
];

const awards = [
  {
    title: 'Best Student (South East Region) 2019',
    event: 'SouthEast student conference 2019',
    position: '1st Place',
    description: 'Recognized for outstanding academic performance',
    icon: Gift,
  },
  {
    title: 'Outstanding Student Developer',
    event: 'Hult Prize Excellence Awards',
    position: 'Gold Medal',
    description: 'Awarded for building exceptional student driven solutions',
    icon: Gift,
  },
  // Add more awards
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState({});
  const isMobile = useMediaQuery(mediaSize.mobile);

  console.log(selectedCert);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-12">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/20 dark:bg-neutral-800/30 mb-4"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Medal variant="Bulk" className="text-yellow-500" size={20} />
          <span className="text-sm">Professional Achievements</span>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold">Certifications & Awards</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A collection of my professional certifications and recognition earned through dedication
          and excellence.
        </p>
      </motion.div>

      {/* Certifications Grid */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold flex items-center gap-2`}>
            <Medal variant="Bulk" className="text-yellow-500" size={24} />
            My Professional Certifications
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollPrev()}
              className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <i className="ri-arrow-left-s-line text-xl" />
            </button>
            <button
              onClick={() => scrollNext()}
              className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
            >
              <i className="ri-arrow-right-s-line text-xl" />
            </button>
          </div>
        </div>

        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="show"
        >
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar pb-4"
          >
            {certifications.map((cert) => (
              <div key={cert.credential} className="flex-shrink-0 w-[350px]">
                <CertificationCard {...cert} onClick={() => setSelectedCert(cert)} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Awards Section */}
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold flex items-center gap-2`}>
            <Award variant="Bulk" className="text-yellow-500" size={24} />
            My Notable Awards
          </h2>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <AwardCard key={award.title} {...award} index={index} />
            ))}
          </div>
        </motion.div>

        <Showcase />
      </div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <StatCard number="7+" label="Certifications" />
        <StatCard number="2+" label="Industry Awards" />
        <StatCard number="3+" label="Years Experience" />
        <StatCard number="12+" label="Projects Delivered" />
      </motion.div>
    </div>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <motion.div
    className="p-6 rounded-xl bg-neutral-900/10 dark:bg-neutral-800/30 text-center space-y-2"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="text-2xl font-bold">{number}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </motion.div>
);

export default Certifications;
