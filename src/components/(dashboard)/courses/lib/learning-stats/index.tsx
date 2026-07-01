// src/components/courses/lib/learning-stats/index.tsx
'use client';

import { motion } from 'framer-motion';
import { Book1, Timer1, Medal, Graph } from 'iconsax-react';
import { useState } from 'react';

interface LearningStatsProps {
  isMobile?: boolean;
}

const stats = [
  {
    label: 'Courses Completed',
    value: '15+',
    icon: Book1,
    color: '#2196f3',
    description: 'Professional certificates',
  },
  {
    label: 'Learning Hours',
    value: '200+',
    icon: Timer1,
    color: '#4caf50',
    description: 'Hours of content',
  },
  {
    label: 'Certifications',
    value: '8',
    icon: Medal,
    color: '#ff9800',
    description: 'Industry recognized',
  },
  {
    label: 'Avg. Score',
    value: '92%',
    icon: Graph,
    color: '#e91e63',
    description: 'Course completion',
  },
];

const LearningStats = ({ isMobile }: LearningStatsProps) => {
  return (
    <motion.div
      className="rounded-xl border border-neutral-800/20 bg-neutral-50 dark:bg-neutral-800/10 p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`grid gap-6 ${isMobile ? 'grid-cols-1 sm:grid-cols-2' : 'md:grid-cols-4'}`}>
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} isMobile={isMobile} />
        ))}
      </div>

      {/* Timeline */}
      <motion.div
        className="mt-8 pt-8 border-t border-neutral-800/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <LearningTimeline isMobile={isMobile} />
      </motion.div>
    </motion.div>
  );
};

// Stat Card Component
const StatCard = ({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
  isMobile?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative p-6 rounded-lg bg-neutral-50 dark:bg-neutral-800/30"
        whileHover={{ y: -5 }}
      >
        <div
          className="h-12 w-12 rounded-lg mb-4 flex items-center justify-center"
          style={{ backgroundColor: `${stat.color}20` }}
        >
          <stat.icon size={24} variant={isHovered ? 'Bulk' : 'Linear'} color={stat.color} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.2,
            type: 'spring',
            stiffness: 100,
          }}
        >
          <div className="text-3xl font-bold mb-1">{stat.value}</div>
          <div className="text-sm font-medium">{stat.label}</div>
          <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
        </motion.div>

        {/* Decorative Background Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(${stat.color} 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Learning Timeline Component
const timelineData = [
  { year: '2021', milestone: 'Started Web Development Journey' },
  { year: '2022', milestone: 'Completed Full Stack Bootcamp' },
  { year: '2023', milestone: 'Advanced Cloud Certifications' },
  { year: '2024', milestone: 'Specialized in System Architecture' },
];

const LearningTimeline = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <div className="space-y-6">
      <h3 className={`font-semibold ${isMobile ? 'text-lg' : 'text-xl'}`}>Learning Journey</h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-50 dark:bg-neutral-800/40" />

        <div className="space-y-8 pl-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] top-[6px] w-[15px] h-[15px] rounded-full border-2 border-neutral-800/20 bg-neutral-50 dark:bg-neutral-800/30" />

              <div>
                <div className="text-sm font-medium text-blue">{item.year}</div>
                <div className="mt-1">{item.milestone}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningStats;
