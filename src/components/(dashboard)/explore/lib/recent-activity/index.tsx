// src/components/explore/lib/recent-activity/index.tsx
'use client';

import { motion } from 'framer-motion';
import { Code1, Chart, Setting2, Star1 } from 'iconsax-react';

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
    title: 'First Supabase Project',
    description: 'Implemented real world admin side project with supabase',
    timestamp: 'April 2025',
    icon: Chart,
    color: '#4caf50',
  },
  {
    type: 'project',
    title: 'Completed my first solo fullstack project',
    description: 'Created an optimized fully functional fullstack project',
    timestamp: 'March 2025',
    icon: Code1,
    color: '#2196f3',
    link: 'https://github.com/yourusername/project',
  },
  {
    type: 'contribution',
    title: 'Open Source Contribution',
    description: 'Added new component to popular UI library',
    timestamp: 'Feb 2025',
    icon: Setting2,
    color: '#e91e63',
    link: 'https://github.com/popular-library/pr/123',
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

const RecentActivity = ({ isMobile, isTablet }: { isMobile?: boolean; isTablet?: boolean }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className={`font-semibold ${isMobile ? 'text-xl' : 'text-2xl'}`}>Recent Activity</h2>
        <a
          href="https://github.com/iphycodes"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-blue-500 transition-colors"
        >
          View Github Profile
        </a>
      </div>

      <div className="space-y-4">
        {recentActivities.map((activity, index) => (
          <motion.div
            key={activity.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative">
              {/* Activity Card */}
              <motion.div
                className="flex gap-4 p-4 rounded-lg border border-neutral-800/20 bg-neutral-900/5 dark:bg-neutral-800/10 hover:border-neutral-800/40 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                {/* Icon */}
                <div
                  className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${activity.color}20` }}
                >
                  <activity.icon variant="Bulk" size={20} color={activity.color} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h3 className="font-medium text-sm">
                        {activity.link ? (
                          <a
                            href={activity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"
                          >
                            {activity.title}
                          </a>
                        ) : (
                          activity.title
                        )}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {activity.timestamp}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;