// src/components/explore/lib/experience/index.tsx
'use client';

import { Button } from 'antd';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ExperienceCard from './experience-card';

const experiences = [
  {
    company: 'ByteGum',
    role: 'Intern Frontend Engineer',
    period: '2022 (Internship)',
    logo: '/asset/svgs/brand-logo-1.svg',
    techStack: ['React', 'Next.js', 'Typescript', 'Ant Design', 'Redux', 'Styled Component'],
    highlight: 'Get hands on a significant number of software development tools.',
  },
  {
    company: 'Kassh Nig Ltd.',
    role: 'Frontend Developer',
    period: '2023 (Contract)',
    logo: '/asset/svgs/brand-logo-1.svg',
    techStack: ['React', 'Next.js', 'Typescript', 'Bootstrap', 'Redux', 'Rtk', 'SCSS'],
    highlight: 'First collaboration with development teams.',
  },
  {
    company: 'Calcot Technologies',
    role: 'Frontend Developer',
    period: '2023 - 2024 (Full Time)',
    logo: '/asset/svgs/brand-logo-4.svg',
    techStack: ['Next.js', 'Nest.js', 'Typescript', 'Ant Design', 'Redux', 'Tailwind'],
    highlight: '300% performance improvement',
  },
  {
    company: 'Ekaruz Technology',
    role: 'Full Stack Developer',
    period: '2024 - Present (Full Time)',
    logo: '/asset/svgs/brand-logo-5.svg',
    techStack: ['Next.js', 'TypeScript', 'Shadcn', 'Node Js', 'Nest js', 'Mongo db', 'Superbase'],
    highlight: 'Build multiple minimum viable products (MVP) in agile environment',
  },
];

const ExperienceSection = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const router = useRouter();

  return (
    <motion.div
      className={`space-y-8 ${isMobile ? 'px-4' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="rounded-xl border border-neutral-800/50 bg-neutral-900/5 dark:bg-neutral-900/20 p-6">
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <p className="text-sm text-muted-foreground">
              Professional journey through tech companies
            </p>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.company} {...exp} index={index} />
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button
                type="text"
                onClick={() => router.push('/experience')}
                className="group flex items-center gap-2 hover:gap-3 text-base transition-all duration-300"
              >
                <span>View All Experience</span>
                <i className="ri-arrow-right-line group-hover:transform group-hover:translate-x-1 transition-transform duration-300"></i>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
