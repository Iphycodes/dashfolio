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
    <div className="rounded-2xl border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-900/30 p-6">
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">Technical Insights</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Sharing experiences, knowledge and videos on design, tech and finance.
          </p>
        </div>

        {/* Grid of cards */}
        <motion.div
          className={`grid ${isMobile ? 'grid-cols-1 gap-1' : 'grid-cols-2 gap-2'}`}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.06 },
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
    </div>
  );
};

export default ThoughtsSection;
