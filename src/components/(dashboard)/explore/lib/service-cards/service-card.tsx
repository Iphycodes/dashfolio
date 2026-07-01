'use client';

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

const IconComponent = ({ type, variant }: { type: string; variant: 'Linear' | 'Bulk' }) => {
  const props = {
    size: '28',
    variant: variant,
    className: 'transition-all duration-300',
  };

  switch (type) {
    case 'development':
      return <Code {...props} color={variant === 'Bulk' ? '#737373' : undefined} />;
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
      className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60 space-y-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="space-y-5">
        <div className="h-12 w-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 flex items-center justify-center overflow-hidden shadow-sm">
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
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-2.5">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <i className="ri-check-line text-neutral-900 dark:text-white text-base" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className={`group flex items-center gap-2 text-sm font-medium text-blue cursor-pointer hover:gap-3 transition-all duration-300 ${
          isMobile ? 'w-full justify-center' : ''
        }`}
        onClick={() => push(`/${href}`)}
      >
        <span>{action}</span>
        <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
