'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { lineSpinner } from 'ldrs';

interface PageLoaderProps {
  /** Use the full viewport height (page-level) vs. fill the parent container. */
  fullScreen?: boolean;
}

const PageLoader = ({ fullScreen = false }: PageLoaderProps) => {
  const { theme } = useTheme();

  useEffect(() => {
    lineSpinner.register();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={`w-full flex items-center justify-center ${fullScreen ? 'min-h-screen' : 'min-h-[70vh]'}`}
    >
      {React.createElement('l-line-spinner', {
        size: '34',
        stroke: '3',
        speed: '1',
        color: theme === 'light' ? '#111111' : '#ffffff',
      })}
    </motion.div>
  );
};

export default PageLoader;
