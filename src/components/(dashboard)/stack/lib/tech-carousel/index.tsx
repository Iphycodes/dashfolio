// src/components/stacks/lib/tech-carousel.tsx
'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface TechCarouselProps {
  isMobile?: boolean;
  isTablet?: boolean;
}

const technologies = [
  // Row 1
  [
    { name: 'React', icon: 'ri-reactjs-line', color: '#61DAFB' },
    { name: 'TypeScript', icon: 'ri-typescript-line', color: '#3178C6' },
    { name: 'Node.js', icon: 'ri-nodejs-line', color: '#339933' },
    { name: 'Next.js', icon: 'ri-reactjs-line', color: '#000000' },
    { name: 'Javascript', icon: 'ri-javascript-line', color: '#3776AB' },
    { name: 'Tailwind', icon: 'ri-tailwind-line', color: '#FF9900' },
  ],
  // Row 2
  [
    { name: 'Docker', icon: 'ri-docker-line', color: '#2496ED' },
    { name: 'MongoDB', icon: 'ri-database-2-line', color: '#47A248' },
    { name: 'PostgreSQL', icon: 'ri-database-line', color: '#336791' },
    { name: 'Redis', icon: 'ri-redis-line', color: '#DC382D' },
    { name: 'Git', icon: 'ri-git-branch-line', color: '#F05032' },
    { name: 'Supabase', icon: 'ri-supabase-line', color: '#E10098' },
  ],
];

const TechCarousel = ({ isMobile }: TechCarouselProps) => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupAnimation = (ref: React.RefObject<HTMLDivElement>, reverse: boolean = false) => {
      if (!ref.current) return;

      const scrollWidth = ref.current.scrollWidth;
      const animate = () => {
        if (!ref.current) return;
        const currentScroll = ref.current.scrollLeft;

        if (currentScroll >= scrollWidth / 2) {
          ref.current.scrollLeft = 0;
        } else {
          ref.current.scrollLeft += reverse ? -1 : 1;
        }
        requestAnimationFrame(animate);
      };

      const animation = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animation);
    };

    const row1Cleanup = setupAnimation(row1Ref);
    const row2Cleanup = setupAnimation(row2Ref, true);

    return () => {
      row1Cleanup?.();
      row2Cleanup?.();
    };
  }, []);

  const renderRow = (techs: (typeof technologies)[0], ref: React.RefObject<HTMLDivElement>) => (
    <div
      ref={ref}
      className="flex overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className="flex gap-8 animate-scroll py-4">
        {[...techs, ...techs].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 
              ${isMobile ? 'min-w-[120px]' : 'min-w-[150px]'}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <i className={`${tech.icon} text-xl`} style={{ color: tech.color }} />
            <span className={`${isMobile ? 'text-sm' : 'text-base'}`}>{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {technologies.map((rowTechs, index) => (
        <div key={index} ref={index === 0 ? row1Ref : row2Ref}>
          {renderRow(rowTechs, index === 0 ? row1Ref : row2Ref)}
        </div>
      ))}
    </div>
  );
};

export default TechCarousel;
