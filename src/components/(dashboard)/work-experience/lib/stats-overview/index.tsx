// src/components/experience/lib/stats-overview.tsx
'use client';

import { motion } from 'framer-motion';
import { Timer1, Code1, Briefcase, PenTool } from 'iconsax-react';

interface StatsOverviewProps {
  isMobile?: boolean;
}

const stats = [
  {
    label: 'Years Experience',
    value: '3+',
    icon: Timer1,
    color: '#2196f3',
    description: 'Professional development',
  },
  {
    label: 'Projects Completed',
    value: '20+',
    icon: Code1,
    color: '#4caf50',
    description: 'Across various domains',
  },
  {
    label: 'Companies Worked',
    value: '3+',
    icon: Briefcase,
    color: '#e91e63',
    description: 'Including remote roles',
  },
  {
    label: 'Technologies',
    value: '10+',
    icon: PenTool,
    color: '#ff9800',
    description: 'Modern tech stack',
  },
];

const StatsOverview = ({ isMobile }: StatsOverviewProps) => {
  return (
    <div className={`grid gap-6 ${isMobile ? 'grid-cols-2 sm:grid-cols-2' : 'md:grid-cols-4'}`}>
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="rounded-xl border border-neutral-800/20 bg-neutral-900/5 dark:bg-neutral-800/10 p-6 space-y-4 hover:border-neutral-800/40 transition-colors duration-300">
            {/* Icon */}
            <div className="p-3 rounded-lg w-fit" style={{ backgroundColor: `${stat.color}20` }}>
              <stat.icon size={24} variant="Bulk" color={stat.color} />
            </div>

            {/* Content */}
            <div className="space-y-1">
              <motion.div
                className="text-3xl font-bold"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm font-medium">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          </div>

          {/* Hover Effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(45deg, ${stat.color}10, transparent)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default StatsOverview;
