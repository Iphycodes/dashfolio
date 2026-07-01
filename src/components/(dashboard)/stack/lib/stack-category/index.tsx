// src/components/stacks/lib/stack-category.tsx
'use client';

import { motion } from 'framer-motion';
import { IconProps } from 'iconsax-react';
import { useState } from 'react';

interface Technology {
  name: string;
  level: number;
  years: number;
}

interface StackCategoryProps {
  title: string;
  description: string;
  icon: React.FC<IconProps>;
  color: string;
  technologies: Technology[];
  index: number;
  isMobile?: boolean;
}

const StackCategory = ({
  title,
  description,
  icon: Icon,
  color,
  technologies,
  index,
  isMobile,
}: StackCategoryProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="rounded-xl border border-neutral-800/20 bg-neutral-50 dark:bg-neutral-800/10 p-8 space-y-8 hover:border-neutral-800/40 transition-all duration-300"
    >
      {/* Header */}
      <div className="space-y-4">
        <div
          className="inline-flex items-center justify-center h-12 w-12 rounded-lg transition-all duration-300"
          style={{
            backgroundColor: isHovered ? `${color}20` : `${color}10`,
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <Icon variant={isHovered ? 'Bulk' : 'Linear'} size={24} color={color} />
        </div>

        <div className="space-y-2">
          <h3
            className={`${isMobile ? 'text-xl' : 'text-2xl'} font-semibold transition-colors duration-300`}
            style={{ color: isHovered ? color : 'inherit' }}
          >
            {title}
          </h3>
          <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
            {description}
          </p>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-6">
        {technologies.map((tech, idx) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 + idx * 0.1 }}
          >
            <div className="flex justify-between items-center mb-2">
              <div className="space-y-1">
                <h4 className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>{tech.name}</h4>
                <span className="text-xs text-muted-foreground">
                  {tech.years} {tech.years === 1 ? 'year' : 'years'} experience
                </span>
              </div>
              <span
                className={`${isMobile ? 'text-sm' : 'text-base'} font-medium transition-all duration-300`}
                style={{
                  color,
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  opacity: isHovered ? 1 : 0.8,
                }}
              >
                {tech.level}%
              </span>
            </div>

            <div className="h-1.5 bg-neutral-50 dark:bg-neutral-800/30 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${tech.level}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index * 0.2 + idx * 0.1,
                  ease: 'easeOut',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StackCategory;
