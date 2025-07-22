// src/components/explore/lib/service-cards/service-card.tsx
'use client';

import { Button } from 'antd';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import { Code, Teacher, JavaScript, Cloud } from 'iconsax-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ServiceCardProps {
  title: string;
  description: string;
  iconType: string;
  items: string[];
  action: string;
  href: string;
}

// Icon mapping component
const IconComponent = ({ type, variant }: { type: string; variant: 'Linear' | 'Bulk' }) => {
  const props = {
    size: '32',
    variant: variant,
    className: 'transition-all duration-300',
  };

  switch (type) {
    case 'development':
      return <Code {...props} color={variant === 'Bulk' ? '#1e88e5' : undefined} />;
    case 'teaching':
      return <Teacher {...props} color={variant === 'Bulk' ? '#4caf50' : undefined} />;
    case 'javascript':
      return <JavaScript {...props} color={variant === 'Bulk' ? '#ff9800' : undefined} />;
    case 'cloud':
      return <Cloud {...props} color={variant === 'Bulk' ? '#9c27b0' : undefined} />;
    default:
      return <Code {...props} />;
  }
};

const ServiceCard = ({ title, description, iconType, items, action, href }: ServiceCardProps) => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const [isHovered, setIsHovered] = useState(false);
  const { push } = useRouter();

  return (
    <motion.div
      className="p-6 rounded-xl bg-neutral-900/10 dark:bg-neutral-800/50 space-y-6 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/80 transition-all duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="space-y-6">
        <motion.div
          className="h-14 w-14 rounded-lg bg-neutral-900/10 dark:bg-neutral-800 flex items-center justify-center overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 5 }}
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

        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2 text-sm text-muted-foreground"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <i className="ri-check-line text-green-500"></i>
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        // type="text"
        className={`group flex items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer ${
          isMobile ? 'w-full justify-center' : ''
        }`}
        onClick={() => push(`/${href}`)}
      >
        <span>{action}</span>
        <i className="ri-arrow-right-line group-hover:transform group-hover:translate-x-1 transition-transform duration-300"></i>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
