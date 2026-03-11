'use client';

import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import DropCard from './drop-card';

const featuredSections = [
  {
    title: 'Featured Projects',
    description:
      'Explore my showcase of web applications, from e-commerce platforms to enterprise solutions.',
    count: '10+ Projects',
    image: '/asset/imgs/myself-6.jpg',
    href: '/projects',
  },
  {
    title: 'Technical Stack',
    description: 'Discover my expertise in React, Next.js, Node.js, and modern web technologies.',
    count: '15+ Technologies',
    image: '/asset/imgs/myself-3.jpg',
    href: '/stacks',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const NewDrops = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Featured Work</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Highlighting my best projects and technical expertise
        </p>
      </div>

      <motion.div
        className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 gap-6'}`}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {featuredSections.map((section, index) => (
          <DropCard key={section.title} {...section} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default NewDrops;
