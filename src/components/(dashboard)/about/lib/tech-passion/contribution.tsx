// src/components/about/lib/tech-passion/contribution.tsx
'use client';

import { motion } from 'framer-motion';
import { Chart } from 'iconsax-react';

const contributionData = [
  { day: 'Mon', commits: 8 },
  { day: 'Tue', commits: 12 },
  { day: 'Wed', commits: 5 },
  { day: 'Thu', commits: 15 },
  { day: 'Fri', commits: 10 },
  { day: 'Sat', commits: 3 },
  { day: 'Sun', commits: 6 },
];

const Contribution = () => {
  const maxCommits = Math.max(...contributionData.map((d) => d.commits));

  return (
    <motion.div
      className="p-6 rounded-xl bg-neutral-900/20 dark:bg-neutral-800/30 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Weekly Activity</h3>
        <Chart variant="Bulk" size={20} className="text-blue" />
      </div>

      <div className="flex items-end justify-between gap-2 h-32">
        {contributionData.map((data, index) => (
          <div key={data.day} className="flex flex-col items-center gap-2">
            <motion.div
              className="w-2 bg-blue/20 rounded-full"
              style={{
                height: `${(data.commits / maxCommits) * 100}%`,
              }}
              initial={{ height: 0 }}
              whileInView={{ height: `${(data.commits / maxCommits) * 100}%` }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="w-full bg-blue rounded-full h-full origin-bottom"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              />
            </motion.div>
            <span className="text-xs text-muted-foreground">{data.day}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Contribution;
