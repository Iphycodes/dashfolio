'use client';

import { Button } from 'antd';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
// import { Code1, Mobile, Hierarchy, CloudConnection, Status } from 'iconsax-react';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const HeroSection = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);
  const { theme } = useTheme();
  const { push } = useRouter();

  return (
    <div className={`space-y-8`}>
      <div className="space-y-4">
        <motion.h1
          className={`font-extrabold leading-tight inline uppercase ${
            isMobile ? 'text-3xl' : 'text-[54px]'
          } ${theme === 'dark' ? 'dark' : 'light'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            letterSpacing: '',
          }}
        >
          {isMobile ? (
            "Hello, I'm Ifeanyi Emmanuel "
          ) : (
            <>
              Hello, <br /> I'm Ifeanyi Emmanuel
              <br />
              {/* Development Portfolio Hub. */}
            </>
          )}
        </motion.h1>
        <motion.h4
          className={`font-semibold ${isMobile ? 'text-base' : 'text-lg'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          I am a Professional Full-Stack Software Developer
        </motion.h4>
        <motion.p
          className={`text-muted-foreground ${isMobile ? 'text-base' : 'text-lg'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          {isMobile ? (
            'Explore my journey through web development, projects, certifications, and technical expertise. Discover how I turn ideas into elegant solutions.'
          ) : (
            <>
              Explore my journey through web development, projects, certifications,
              <br />
              and technical expertise. Discover how I turn ideas into elegant solutions.
            </>
          )}
        </motion.p>
      </div>

      <motion.div
        className={`${isMobile ? 'flex flex-col space-y-3' : 'flex gap-1'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
      >
        <Button
          type="primary"
          size="large"
          className={`!bg-blue-gradient !h-12 hover:!opacity-80 ${isMobile ? 'w-full' : 'min-w-[100px]'}`}
          onClick={() => push('/about')}
        >
          About Me
        </Button>
        <Button
          type="primary"
          size="large"
          icon={<i className="ri-mail-line" />}
          className={`!h-12 ${isMobile ? 'w-full' : 'min-w-[100px]'} !text-neutral-700 dark:!text-white !border-neutral-400 dark:!border-neutral-800 !bg-[#fafafa] dark:!bg-neutral-900 right-[-20px] top-[35%] cursor-pointer hover:!bg-[#e0e0e0] hover:dark:!bg-neutral-800`}
          onClick={() =>
            window.open(
              'https://calendly.com/ifeanyiemmanuel585/appointment-meeting',
              '_blank',
              'noopener,noreferrer'
            )
          }
        >
          Schedule a Meeting
        </Button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
