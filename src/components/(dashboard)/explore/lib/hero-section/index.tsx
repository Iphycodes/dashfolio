'use client';

import { Button } from 'antd';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const { push } = useRouter();

  return (
    <div className="space-y-8">
      {/* Status badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/80 dark:border-neutral-700/40"
        initial={{ opacity: 0, y: 15, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
          Open to opportunities
        </span>
      </motion.div>

      <div className="space-y-5">
        <motion.h1
          className={`font-extrabold leading-[1.1] tracking-tight ${
            isMobile ? 'text-3xl' : 'text-[52px]'
          }`}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {isMobile ? (
            <>
              Hello, I&apos;m{' '}
              <span className="text-neutral-900 dark:text-white">Ifeanyi Emmanuel</span>
            </>
          ) : (
            <>
              Hello, <br />
              I&apos;m{' '}
              <span className="text-neutral-900 dark:text-white">Ifeanyi Emmanuel</span>
            </>
          )}
        </motion.h1>
        <motion.h4
          className={`font-semibold text-neutral-700 dark:text-neutral-300 ${isMobile ? 'text-base' : 'text-lg'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          A Professional Software Engineer (Frontend Heavy)
        </motion.h4>
        <motion.p
          className={`text-neutral-500 dark:text-neutral-400 leading-relaxed ${isMobile ? 'text-base' : 'text-lg'} max-w-2xl`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          Explore my journey through web development, projects, certifications, and technical
          expertise. Discover how I turn ideas into elegant solutions.
        </motion.p>
      </div>

      <motion.div
        className={`${isMobile ? 'flex flex-col space-y-3' : 'flex gap-3'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <Button
          type="primary"
          size="large"
          className={`!bg-accent !text-accent-foreground !h-12 !rounded-full !font-medium hover:!opacity-90 !transition-opacity !border-0 ${isMobile ? 'w-full' : 'min-w-[140px]'}`}
          onClick={() => push('/about')}
        >
          About Me
        </Button>
        <Button
          type="default"
          size="large"
          icon={<i className="ri-calendar-line" />}
          className={`!h-12 !rounded-full !font-medium ${isMobile ? 'w-full' : 'min-w-[140px]'} !text-neutral-700 dark:!text-neutral-200 !border-neutral-200 dark:!border-neutral-700 !bg-neutral-50 dark:!bg-neutral-800/80 hover:!bg-neutral-100 hover:dark:!bg-neutral-700 !transition-colors`}
          onClick={() =>
            window.open(
              'https://calendly.com/ifeanyiemmanuel585/appointment-meeting',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          Schedule an Appointment
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
