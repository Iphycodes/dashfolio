// src/components/about/lib/career-journey/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import CareerCard from './career-card';

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
      className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden !mt-12"
    >
      <div className={`grid ${isTablet ? 'grid-cols-1' : 'grid-cols-5'}`}>
        {/* Content Section */}
        <div className={`${isTablet ? 'order-2' : 'col-span-3'}`}>
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 pb-4"
            >
              <h2 className={`font-semibold mb-3 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                Professional Journey
              </h2>
              <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
                A trail of my impactful contributions and continuous growth in software development.
              </p>
            </motion.div>

            {/* Career List */}
            <div className="px-6 pb-6">
              <div className="space-y-8">
                {careerData.map((career, index) => (
                  <CareerCard key={career.company} {...career} index={index} isMobile={isMobile} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`${isTablet ? 'order-1' : 'col-span-2'} border-neutral-200 dark:border-neutral-800 ${isTablet ? 'border-b' : 'border-l'} bg-neutral-50 dark:bg-neutral-900/60`}
        >
          <div className="flex flex-col">
            {/* Tech Expertise */}
            <motion.div
              className="p-6 border-b border-neutral-200 dark:border-neutral-800"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-base font-semibold mb-4 text-center">Tech Expertise</h3>
              <div className="flex flex-wrap justify-center gap-2.5">
                {['React', 'Node.js', 'AWS', 'TypeScript', 'Docker'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Career Stats */}
            <motion.div
              className="p-6"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <StatsCard number="5+" label="Years Experience" icon="ri-time-line" />
                <StatsCard number="20+" label="Projects Delivered" icon="ri-rocket-line" />
                <StatsCard number="10+" label="Technologies" icon="ri-code-line" />
                <StatsCard number="1M+" label="Users Impacted" icon="ri-user-line" />
              </div>
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
    className="text-center space-y-2 p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
  >
    <i className={`${icon} text-2xl text-neutral-900 dark:text-white`}></i>
    <div>
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  </motion.div>
);

export default CareerJourney;
