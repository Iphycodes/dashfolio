'use client';

import { motion } from 'framer-motion';
import { Code1, Chart, Star1 } from 'iconsax-react';

interface Activity {
  type: 'commit' | 'project' | 'article' | 'contribution';
  title: string;
  description: string;
  timestamp: string;
  icon: typeof Code1;
  color: string;
  link?: string;
}

const recentActivities: Activity[] = [
  {
    type: 'project',
    title: 'Supabase Project',
    description: 'Completed Integration for Babymomsi supabase APIs',
    timestamp: 'October 2025',
    icon: Chart,
    color: '#4caf50',
  },
  {
    type: 'project',
    title: 'Completed Solo Fullstack project',
    description: 'Created an optimized fully functional MyPrizePort (Fullstack project)',
    timestamp: 'May 2025',
    icon: Code1,
    color: '#2196f3',
    link: 'https://github.com/yourusername/project',
  },
  {
    type: 'article',
    title: 'Published Technical Article',
    description: 'Writing Clean and Maintainable React Components',
    timestamp: 'Jan 2025',
    icon: Star1,
    color: '#ff9800',
    link: 'https://yourblog.com/article',
  },
];

const RecentActivity = ({ isMobile }: { isMobile?: boolean; isTablet?: boolean }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h2 className={`font-semibold ${isMobile ? 'text-xl' : 'text-2xl'}`}>Recent Activity</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Latest milestones and contributions
          </p>
        </div>
        <a
          href="https://github.com/iphycodes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-blue transition-colors flex items-center gap-1.5"
        >
          <i className="ri-github-fill" />
          <span className={isMobile ? 'hidden' : ''}>Github Profile</span>
        </a>
      </div>

      <div className="space-y-3">
        {recentActivities.map((activity, index) => (
          <motion.div
            key={activity.title + index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="flex gap-4 p-4 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-neutral-50 dark:bg-neutral-800/30 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
              whileHover={{ x: 6, transition: { duration: 0.2 } }}
            >
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${activity.color}15` }}
              >
                <activity.icon variant="Bulk" size={20} color={activity.color} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h3 className="font-medium text-sm">
                      {activity.link ? (
                        <a
                          href={activity.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue transition-colors"
                        >
                          {activity.title}
                        </a>
                      ) : (
                        activity.title
                      )}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-[11px] text-neutral-400 dark:text-neutral-500 whitespace-nowrap">
                    {activity.timestamp}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
