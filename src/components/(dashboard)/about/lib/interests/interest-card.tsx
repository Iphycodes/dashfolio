// src/components/about/lib/interests/interest-card.tsx
'use client';

import { motion } from 'framer-motion';
import { IconProps } from 'iconsax-react';
import { useState } from 'react';

interface InterestCardProps {
  title: string;
  description: string;
  icon: React.FC<IconProps>;
  color: string;
  index: number;
  isMobile?: boolean;
}

const InterestCard = ({
  title,
  description,
  icon: Icon,
  index,
  isMobile,
}: InterestCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative rounded-xl bg-white dark:bg-neutral-800/40 border border-neutral-200 dark:border-neutral-700/50 hover:bg-neutral-100 dark:hover:bg-neutral-800/70 transition-all duration-300 overflow-hidden"
    >
      <div className="p-5 space-y-4">
        {/* Icon and Title */}
        <div className="flex items-start gap-4">
          <motion.div
            className="h-12 w-12 rounded-xl flex items-center justify-center bg-neutral-100 dark:bg-neutral-800"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <Icon variant={isHovered ? 'Bulk' : 'Linear'} size={24} color="#737373" />
          </motion.div>

          <div className="space-y-1 flex-1">
            <h3 className={`font-medium ${isMobile ? 'text-base' : 'text-lg'}`}>{title}</h3>
          </div>
        </div>

        {/* Description */}
        <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
          {description}
        </p>

        
      </div>

      {/* Border Effect */}
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

export default InterestCard;
