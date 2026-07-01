// src/components/about/lib/personal-info/info-card.tsx
'use client';

import { motion } from 'framer-motion';

interface InfoCardProps {
  icon: string;
  title: string;
  detail: string;
  color: string;
  delay?: number;
  isMobile?: boolean;
}

const InfoCard = ({ icon, title, detail, delay = 0, isMobile }: InfoCardProps) => {
  return (
    <motion.div
      className={`flex items-center gap-4 ${
        isMobile ? 'p-3' : 'p-4'
      } rounded-lg bg-white dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-all duration-300`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div
        className={`flex-shrink-0 rounded-lg flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 ${
          isMobile ? 'h-8 w-8' : 'h-10 w-10'
        }`}
      >
        <i
          className={`${icon} text-neutral-900 dark:text-white ${isMobile ? 'text-lg' : 'text-xl'}`}
        ></i>
      </div>
      <div>
        <h3 className={`font-medium ${isMobile ? 'text-xs' : 'text-sm'}`}>{title}</h3>
        <p className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-xs'}`}>{detail}</p>
      </div>
    </motion.div>
  );
};

export default InfoCard;
