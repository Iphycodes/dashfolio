'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface PageLoaderProps {
  /** Use the full viewport height (page-level) vs. fill the parent container. */
  fullScreen?: boolean;
}

const PageLoader = ({ fullScreen = false }: PageLoaderProps) => {
  const { theme } = useTheme();
  const [ready, setReady] = useState(false);

  // Register the ldrs web component on the client only — importing it at module
  // scope crashes server prerendering (it references `HTMLElement`).
  useEffect(() => {
    let active = true;
    import('ldrs').then(({ lineSpinner }) => {
      lineSpinner.register();
      if (active) setReady(true);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={`w-full flex items-center justify-center ${fullScreen ? 'min-h-screen' : 'min-h-[70vh]'}`}
    >
      {ready
        ? React.createElement('l-line-spinner', {
            size: '34',
            stroke: '3',
            speed: '1',
            color: theme === 'light' ? '#111111' : '#ffffff',
          })
        : null}
    </motion.div>
  );
};

export default PageLoader;
