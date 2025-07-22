// src/components/about/lib/tech-passion/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { Code1, Command, Data, HuobiToken, CodeCircle } from 'iconsax-react';
import TechStack from './tech-stack';
import Contribution from './contribution';

const techAreas = [
  {
    title: 'Frontend Development',
    description:
      'Building responsive, accessible web applications with modern frameworks and tools.',
    icon: Code1,
    color: '#2196f3',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'Backend Development',
    description: 'Designing scalable APIs and server-side applications.',
    icon: Command,
    color: '#4caf50',
    stack: ['Node.js', 'Nest Js', 'Supabase', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Web Design',
    description: 'Deploying and managing websites for clients.',
    icon: Data,
    color: '#ff9800',
    stack: ['WordPress', 'Framer', 'Webflow', 'Shopify'],
  },
];

const TechPassion = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-xl border border-neutral-800/50 bg-neutral-900/5 dark:bg-neutral-900/20 overflow-hidden"
    >
      <div className="grid md:grid-cols-5 gap-8 p-6">
        <div className="md:col-span-3 space-y-8">
          <div className="space-y-4">
            <motion.h2
              className={`font-semibold ${isMobile ? 'text-xl' : 'text-2xl'}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Technical Passion
            </motion.h2>
            <p className="text-muted-foreground">
              Crafting exceptional digital experiences through code and innovation.
            </p>
          </div>

          <div className="space-y-6">
            {techAreas.map((area, index) => (
              <TechStack key={area.title} {...area} index={index} />
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Contribution />

          <motion.div
            className="flex items-center justify-center gap-4 p-6 rounded-xl bg-neutral-900/20 dark:bg-neutral-800/30"
            whileHover={{ scale: 1.02 }}
          >
            <HuobiToken variant="Bulk" size={24} className="text-green-500" />
            <div className="text-center">
              <h3 className="text-xl font-semibold">7+</h3>
              <p className="text-sm text-muted-foreground">Projects this year</p>
            </div>
          </motion.div>

          <div className="relative h-[200px] rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10 h-full flex items-center justify-center p-6 text-center">
              <div>
                <CodeCircle size={32} className="mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">
                  "Code is poetry written for both machines and humans to understand."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TechPassion;
