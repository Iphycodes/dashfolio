'use client';

import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import ServiceCard from './service-card';

// src/components/explore/lib/service-cards/index.tsx
const services = [
  {
    title: 'Web Development',
    description: 'Full-stack development services with modern technologies and best practices.',
    iconType: 'development',
    items: [
      'Custom Web Applications',
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'Performance Optimization',
    ],
    action: 'View Development Projects',
    href: 'projects'
  },
  {
    title: 'Technical Consultation',
    description: 'Professional guidance on architecture, tech stack, and best practices.',
    iconType: 'teaching',
    items: [
      'Architecture Planning',
      'Code Reviews',
      'Tech Stack Selection',
      'Performance Audits',
      'Security Assessment',
    ],
    action: 'Explore Consultation Services',
    href: 'services'
  },
];

const ServiceCards = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  return (
    <motion.div
      className={`space-y-8 ${isMobile ? '' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-2">
        <motion.h2
          className="text-2xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services & Expertise
        </motion.h2>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Professional development services and technical consultation
        </motion.p>
      </div>

      <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'md:grid-cols-2 gap-8'}`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title + index} {...service} />
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceCards;
