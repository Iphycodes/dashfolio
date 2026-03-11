'use client';

import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import { Link } from 'iconsax-react';
import Image from 'next/image';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  logo: string;
  techStack: string[];
  highlight: string;
  index: number;
  link: string;
}

const ExperienceCard = ({
  company,
  role,
  period,
  logo,
  techStack,
  highlight,
  index,
  link,
}: ExperienceCardProps) => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  return (
    <motion.div
      className={`group ${isMobile ? 'p-3' : 'p-4'} rounded-xl hover:bg-white dark:hover:bg-neutral-800/40 border border-transparent hover:border-neutral-200/60 dark:hover:border-neutral-700/40 transition-all duration-300`}
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-xl overflow-hidden relative flex-shrink-0 border border-neutral-200/50 dark:border-neutral-700/50 bg-white dark:bg-neutral-800">
          <Image src={logo} alt={company} fill className="object-cover" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-semibold text-sm">{company}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <Link size={14} className="text-neutral-400 hover:text-blue transition-colors" />
                </a>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{role}</p>
            </div>
            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 whitespace-nowrap ml-2">
              {period}
            </span>
          </div>

          <div className="mt-2 flex flex-wrap gap-1.5">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-[11px] text-neutral-600 dark:text-neutral-400 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            {highlight}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
