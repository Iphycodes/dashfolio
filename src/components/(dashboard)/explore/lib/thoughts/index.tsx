// src/components/explore/lib/thoughts/index.tsx
'use client';

import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import ThoughtCard from './thought-card';

const thoughtItems = [
  {
    id: 'building-scalable-react-apps',
    title: 'Web3 Development Fundamentals',
    category: 'Technology',
    iconType: 'webdev',
    readTime: '7 min',
    href: 'https://www.geeksforgeeks.org/web3-developer-roadmap/',
  },
  {
    id: 'building-scalable-react-apps',
    title: 'DeFi: The Future of Finance',
    category: 'Finance',
    iconType: 'technology',
    readTime: '5 min',
    href: '',
  },
  {
    id: 'building-scalable-react-apps',
    title: 'Cloud Architecture Patterns',
    category: 'Technology',
    iconType: 'architecture',
    readTime: '8 min',
    href: '',
  },
  {
    id: 'building-scalable-react-apps',
    title: 'Finance Management',
    category: 'Finance',
    iconType: 'chart',
    readTime: '6 min',
    href: '',
  },
  {
    id: 'building-scalable-react-apps',
    title: 'AI in Financial Services',
    category: 'Technology',
    iconType: 'brain',
    readTime: '5 min',
    href: '',
  },
  {
    id: 'building-scalable-react-apps',
    title: 'Smart Contract Development',
    category: 'Technology',
    iconType: 'mobile',
    readTime: '6 min',
    href: '',
  },
];

const ThoughtsSection = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  return (
    <motion.div
      className={`space-y-8 ${isMobile ? 'px-4' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      {/* Main container with border */}
      <motion.div className="rounded-xl border border-neutral-800/50 bg-neutral-900/5 dark:bg-neutral-900/20 p-6">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-1">
            <motion.h2
              className="text-2xl font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Technical Insights
            </motion.h2>
            <motion.p
              className="text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Sharing experiences, knowledge and videos on design, tech and finance.
            </motion.p>
          </div>

          {/* Grid of cards */}
          <motion.div
            className={`grid ${isMobile ? 'grid-cols-1 gap-2' : 'grid-cols-2 gap-4'}`}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {thoughtItems.map((thought, index) => (
              <ThoughtCard key={thought.title + index} {...thought} />
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ThoughtsSection;
