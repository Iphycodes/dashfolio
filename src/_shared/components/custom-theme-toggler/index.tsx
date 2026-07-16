'use client';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface CustomThemeTogglerProps {
  theme: string | undefined;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

const CustomThemeToggler = ({}: CustomThemeTogglerProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pre-render theme state
  const currentTheme = mounted ? theme : 'light'; // Default theme is light

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: currentTheme === 'dark' ? '#1e1e1e' : '#ffffff' }}
      className="flex items-center gap-1 p-1 rounded-full shadow-sm border border-neutral-200 dark:border-neutral-700"
    >
      <motion.button
        initial={false}
        animate={{
          backgroundColor: currentTheme === 'light' ? '#171717' : 'transparent',
        }}
        onClick={() => setTheme('light')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentTheme === 'light' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'
        }`}
      >
        <motion.i
          initial={false}
          animate={{
            scale: currentTheme === 'light' ? 1 : 0.8,
          }}
          className="ri-sun-fill text-lg"
        />
      </motion.button>

      <motion.button
        initial={false}
        animate={{
          backgroundColor: currentTheme === 'dark' ? '#ffffff' : 'transparent',
        }}
        onClick={() => setTheme('dark')}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          currentTheme === 'dark' ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'
        }`}
      >
        <motion.i
          initial={false}
          animate={{
            scale: currentTheme === 'dark' ? 1 : 0.8,
          }}
          className="ri-moon-fill text-lg"
        />
      </motion.button>
    </motion.div>
  );
};

export default CustomThemeToggler;
