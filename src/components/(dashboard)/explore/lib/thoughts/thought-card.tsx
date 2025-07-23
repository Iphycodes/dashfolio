'use client';

import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import { Code1, Hierarchy, Mobile, Computing, Chart } from 'iconsax-react';
import { useState } from 'react';

interface ThoughtCardProps {
  id: string;
  title: string;
  category: string;
  iconType: string;
  readTime?: string;
  href?: string;
}

const IconComponent = ({ type, variant }: { type: string; variant: 'Linear' | 'Bulk' }) => {
  const props = {
    size: '24',
    variant: variant,
    className: 'transition-all duration-300',
  };

  switch (type) {
    case 'webdev':
      return <Code1 {...props} color={variant === 'Bulk' ? '#2196f3' : undefined} />;
    case 'architecture':
      return <Hierarchy {...props} color={variant === 'Bulk' ? '#4caf50' : undefined} />;
    case 'performance':
      return <Chart {...props} color={variant === 'Bulk' ? '#ff9800' : undefined} />;
    case 'technology':
      return <Computing {...props} color={variant === 'Bulk' ? '#9c27b0' : undefined} />;
    case 'mobile':
      return <Mobile {...props} color={variant === 'Bulk' ? '#e91e63' : undefined} />;
    default:
      return <Code1 {...props} />;
  }
};

const ThoughtCard = ({
  title,
  category,
  iconType,
  readTime = '5 min',
  id,
}: ThoughtCardProps) => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-900/10 dark:hover:bg-neutral-800/50 transition-all duration-300 cursor-pointer"
      whileHover={{ x: 10 }}
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() =>
        // window.open(window.location.origin + `/blog/${id}`, '_blank', 'noopener,noreferrer')
        window.open(window.location.origin + `/blog/${id}`, 'noopener,noreferrer')
      }
    >
      <motion.div
        className="h-10 w-10 rounded-lg bg-neutral-900/10 dark:bg-neutral-800 flex items-center justify-center overflow-hidden flex-shrink-0"
        whileHover={{ scale: 1.05 }}
      >
        <div className="relative">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovered ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <IconComponent type={iconType} variant="Linear" />
          </motion.div>
          <motion.div
            className="absolute top-0 left-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <IconComponent type={iconType} variant="Bulk" />
          </motion.div>
        </div>
      </motion.div>

      <div className={`flex-1 min-w-0 ${isMobile ? 'pr-2' : ''}`}>
        <h3 className="font-medium text-sm mb-0.5 truncate">{title}</h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{category}</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground"></span>
          <span>{readTime}</span>
        </div>
      </div>

      <motion.div
        className={`${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 flex-shrink-0`}
        whileHover={{ x: 5 }}
        onClick={() => window.open(window.location.origin + `/blog/${id}`, 'noopener,noreferrer')}
      >
        <i className="ri-arrow-right-line text-sm"></i>
      </motion.div>
    </motion.div>
  );
};

export default ThoughtCard;
