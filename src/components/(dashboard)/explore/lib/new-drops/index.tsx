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
    // image: '/asset/imgs/tech-boy-5.jpeg',
    image: '/asset/imgs/myself-6.jpg',
    href: '/projects',
  },
  {
    title: 'Technical Stack',
    description: 'Discover my expertise in React, Next.js, Node.js, and modern web technologies.',
    count: '15+ Technologies',
    // image: '/asset/imgs/tech-boy-2.jpeg',
    image: '/asset/imgs/myself-3.jpg',
    href: '/stacks',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const NewDrops = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  return (
    <motion.div
      className={`space-y-6 ${isMobile ? '' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-2">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Work
        </motion.h2>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Highlighting my best projects and technical expertise
        </motion.p>
      </div>

      <motion.div
        className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'md:grid-cols-2 gap-6'}`}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
      >
        {featuredSections.map((section, index) => (
          <DropCard key={section.title} {...section} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NewDrops;
