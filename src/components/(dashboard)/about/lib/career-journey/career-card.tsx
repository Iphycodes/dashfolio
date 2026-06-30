// src/components/about/lib/career-journey/career-card.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface CareerCardProps {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  color: string;
  icon: string;
  index: number;
  isMobile?: boolean;
}

const CareerCard = ({
  role,
  company,
  period,
  location,
  description,
  achievements,
  technologies,
  icon,
  index,
  isMobile,
}: CareerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-xl bg-white dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700/50 overflow-hidden hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-all duration-300`}
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          <motion.div
            className="h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-neutral-100 dark:bg-neutral-800"
            whileHover={{ scale: 1.05 }}
          >
            <i className={`${icon} text-xl text-neutral-900 dark:text-white`} />
          </motion.div>

          <div className="space-y-1 flex-1">
            <div className="flex justify-between items-start gap-2">
              <h3 className={`font-semibold ${isMobile ? 'text-base' : 'text-lg'}`}>{role}</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{company}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
          {description}
        </p>

        {/* Achievements */}
        <div className="space-y-2">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              className="flex items-start gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + idx * 0.1 }}
            >
              <i className="ri-check-line text-neutral-900 dark:text-white mt-1" />
              <span className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
                {achievement}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Hover Effect Border */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          boxShadow: isHovered
            ? 'inset 0 0 0 1px rgba(120,120,120,0.4)'
            : 'inset 0 0 0 0 transparent',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CareerCard;
