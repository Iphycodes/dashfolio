// src/components/about/lib/tech-passion/tech-stack.tsx
'use client';

import { motion } from 'framer-motion';
import { IconProps } from 'iconsax-react';

interface TechStackProps {
  title: string;
  description: string;
  icon: React.FC<IconProps>;
  color: string;
  stack: string[];
  index: number;
}

const TechStack = ({ title, description, icon: Icon, stack, index }: TechStackProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group space-y-4 p-4 rounded-xl bg-white dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <motion.div
          className="h-12 w-12 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-800"
          whileHover={{ scale: 1.05 }}
        >
          <Icon variant="Bulk" size={24} color="#737373" />
        </motion.div>

        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {stack.map((tech, idx) => (
          <motion.span
            key={tech}
            className="px-3 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + idx * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
