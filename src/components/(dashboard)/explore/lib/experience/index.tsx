// src/components/explore/lib/experience/index.tsx
'use client';

import { Button } from 'antd';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ExperienceCard from './experience-card';

const experiences = [
  {
    company: 'Ekaruz Technology',
    role: 'Full Stack Engineer',
    period: '2025 - Present (Full Time)',
    logo: '/asset/svgs/ekaruz-logo.png',
    techStack: ['Next.js', 'TypeScript', 'Shadcn', 'Node Js', 'Nest js', 'Mongo db', 'Superbase'],
    highlight: 'Build multiple minimum viable products (MVP) in agile environment',
    link: 'https://ekaruz.com/',
  },
  {
    company: 'EDNL',
    role: 'Frontend Engineer',
    period: '2025 (Contract)',
    logo: '/asset/svgs/aaa-ednl-logo.png',
    techStack: ['Next.js', 'Typescript', 'Shadcn', 'Ant Design', 'Redux', 'Tailwind'],
    highlight: 'Build and manage DeduktPro Web application ',
    link: 'https://ednl.co/',
  },
  {
    company: 'BabyMomsi',
    role: 'Frontend Engineer',
    period: '2025 (Contract)',
    logo: '/asset/svgs/aaa-babymomsi-logo.jpeg',
    techStack: ['Next.js', 'Typescript', 'Ant Design', 'Redux', 'Tailwind'],
    highlight: 'Build and manage Web application for Babymomsi projects',
    link: 'https://babymomsi.com/',
  },
  {
    company: 'GiroStack',
    role: 'Frontend Engineer',
    period: '2024 - 2025 (Full Time)',
    logo: '/asset/svgs/aaa-giro-logo.jpeg',
    techStack: ['Next.js', 'Typescript', 'Ant Design', 'Redux', 'Tailwind'],
    highlight: 'build and manage Giro application ',
    link: 'https://girostack.com/',
  },
  {
    company: 'Voomsway',
    role: 'Frontend Engineer',
    period: '2024 (Contract)',
    logo: '/asset/svgs/aaa-voomsway-logo.png',
    techStack: ['Next.js', 'Typescript', 'Ant Design', 'Redux', 'Tailwind'],
    highlight: 'build and manage Giro application ',
    link: 'https://voomsway.com/',
  },
  {
    company: 'Calcot Technologies',
    role: 'Frontend Engineer',
    period: '2023 - 2024 (Full Time)',
    logo: '/asset/svgs/brand-logo-6.svg',
    techStack: ['Next.js', 'Nest.js', 'Typescript', 'Ant Design', 'Redux', 'Tailwind'],
    highlight: 'Build, managed and tested several viable products including Giro, Digisign',
    link: 'https://github.com/Calcot',
  },
  {
    company: 'ByteGum Ltd',
    role: 'Junior Frontend Engineer',
    period: '2021 - 2022 (Internship)',
    logo: '/asset/svgs/brand-logo-7.svg',
    techStack: ['React', 'Next.js', 'Typescript', 'Ant Design', 'Redux', 'Styled Component'],
    highlight: 'Get hands on a significant number of software development tools.',
    link: 'https://github.com/ByteGum',
  },
];

const ExperienceSection = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const router = useRouter();



  return (
    <motion.div
      className={`space-y-8 ${isMobile ? '' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="rounded-xl dark:border border-neutral-800/50 bg-neutral-900/5 dark:bg-neutral-900/20 p-6">
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
                <span className="text-blue">View All Experience</span>
                <i className="ri-arrow-right-line group-hover:transform group-hover:translate-x-1 transition-transform duration-300 text-blue"></i>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceSection;
