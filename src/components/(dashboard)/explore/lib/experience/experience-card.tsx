// src/cemnnoopst / explore / lib / experience / experience - card.tsx
'use client';

import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  logo: string;
  techStack: string[];
  highlight: string;
  index: number;
}

const ExperienceCard = ({
  company,
  role,
  period,
  logo,
  techStack,
  highlight,
  index,
}: ExperienceCardProps) => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  return (
    <motion.div
      className={`group ${isMobile ? 'p-2' : 'p-4'} rounded-lg hover:bg-neutral-900/10 dark:hover:bg-neutral-800/50 transition-all duration-300`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 overflow-hidden relative flex-shrink-0">
          <Image src={logo} alt={company} fill className="object-cover" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-base">{company}</h3>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
            <span className="text-xs text-muted-foreground italic">{period}</span>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded-full bg-neutral-900/10 dark:bg-neutral-800/50 text-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-2 text-sm text-muted-foreground">{highlight}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
