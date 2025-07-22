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
  color,
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
      className="group relative rounded-xl bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-all duration-300 overflow-hidden"
    >
      <div className="p-5 space-y-4">
        {/* Icon and Title */}
        <div className="flex items-start gap-4">
          <motion.div
            className="h-12 w-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${color}20` }}
            animate={{
              scale: isHovered ? 1.1 : 1,
              backgroundColor: isHovered ? `${color}30` : `${color}20`,
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon variant={isHovered ? 'Bulk' : 'Linear'} size={24} color={color} />
          </motion.div>

          <div className="space-y-1 flex-1">
            <motion.h3
              className={`font-medium ${isMobile ? 'text-base' : 'text-lg'}`}
              animate={{
                color: isHovered ? color : 'currentColor',
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
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
          boxShadow: isHovered ? `inset 0 0 0 2px ${color}40` : 'inset 0 0 0 0 transparent',
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default InterestCard;
