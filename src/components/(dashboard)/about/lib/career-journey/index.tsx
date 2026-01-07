// src/components/about/lib/career-journey/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import CareerCard from './career-card';
import Image from 'next/image';

const careerData = [
  {
    role: 'Full-Stack Software Engineer',
    company: 'Ekaruz Technology',
    period: '2024 - Present',
    location: 'Lagos, Nigeria',
    description:
      'Collaborating with a team of developers in building enterprise-scale applications using cutting-edge technologies.',
    achievements: [
      'Led development of microservices architecture serving 1M+ users',
      'Mentored few junior developers',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Docker', 'Supabase'],
    color: '#2196f3',
    icon: 'ri-code-s-slash-line',
  },
  {
    role: 'Frontend Developer',
    company: 'Calcot Technologies',
    period: '2023 - 2024',
    location: 'Remote',
    description:
      'Spearheaded the development of modern web applications with focus on performance and user experience.',
    achievements: [
      'Developed component library used across 12 projects',
      'Achieved 98% test coverage across applications',
    ],
    technologies: ['Next.js', 'TypeScript', 'Jest'],
    color: '#4caf50',
    icon: 'ri-layout-2-line',
  },
  {
    role: 'Frontend Developer',
    company: 'Kassh Nig Ltd',
    period: '2022',
    location: 'Lagos, Nigeria',
    description: 'Built and maintained web applications for various business domains.',
    achievements: [
      'Integrated payment systems',
      'Reduced loading time by 40% through code optimization',
    ],
    technologies: ['React Js', 'Next Js', 'SCSS', 'Redux'],
    color: '#ff9800',
    icon: 'ri-stack-line',
  },
];

const CareerJourney = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl dark:border border-neutral-800/50 bg-neutral-900/5 dark:bg-neutral-900/20 overflow-hidden h-[800px] !mt-[100px]"
    >
      <div className={`grid ${isTablet ? 'grid-cols-1' : 'grid-cols-5'} h-full`}>
        {/* Content Section */}
        <div className={`${isTablet ? 'order-2' : 'col-span-3'} h-[800px]`}>
          <div className="flex flex-col h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 pb-4"
            >
              <h2 className={`font-semibold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                Professional Journey
              </h2>
              <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
                A trail of my impactful contributions and continuous growth in software development.
              </p>
            </motion.div>

            {/* Scrollable Career List */}
            <div className="flex-1 !overflow-y-auto px-6 pb-6 custom-scrollbar-inner bar-left !text-left">
              <div className="space-y-8 pr-4" style={{direction: 'ltr'}}>
                {careerData.map((career, index) => (
                  <CareerCard key={career.company} {...career} index={index} isMobile={isMobile} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Images and Stats Section */}
        <div
          className={`${isTablet ? 'order-1 h-[400px]' : 'col-span-2 h-full'} bg-neutral-900/40`}
        >
          <div className="grid grid-rows-2 h-[800px]">
            {/* Tech Stack Visual */}
            <motion.div
              className="relative h-[400px] p-6 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative z-10 text-center space-y-4">
                <h3 className="text-xl font-semibold">Tech Expertise</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {['React', 'Node.js', 'AWS', 'TypeScript', 'Docker'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-neutral-800/50 text-sm"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <Image
                src="/asset/imgs/myself-selfie-1.jpeg"
                alt="Tech Stack"
                fill
                className="object-cover opacity-20"
              />
            </motion.div>

            {/* Career Stats */}
            <motion.div
              className="relative h-[400px] p-6 flex items-center justify-center bg-neutral-900/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative z-10 grid grid-cols-2 gap-6 w-full max-w-md">
                <StatsCard number="5+" label="Years Experience" icon="ri-time-line" />
                <StatsCard number="20+" label="Projects Delivered" icon="ri-rocket-line" />
                <StatsCard number="10+" label="Technologies" icon="ri-code-line" />
                <StatsCard number="1M+" label="Users Impacted" icon="ri-user-line" />
              </div>
              <Image
                src="/asset/imgs/myself-12.jpeg"
                alt="Career Stats"
                fill
                className="object-cover opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Stats Card Component
const StatsCard = ({ number, label, icon }: { number: string; label: string; icon: string }) => (
  <motion.div
    className="text-center space-y-2 p-4 rounded-lg bg-neutral-800/30 backdrop-blur-sm"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <i className={`${icon} text-2xl`}></i>
    <div>
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  </motion.div>
);

export default CareerJourney;
