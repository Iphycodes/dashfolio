'use client';

import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import ServiceCard from './service-card';

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
    href: 'projects',
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
    href: 'services',
  },
];

const ServiceCards = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Services & Expertise</h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
          Professional development services and technical consultation
        </p>
      </div>

      <div className={`grid ${isMobile ? 'grid-cols-1 gap-5' : 'md:grid-cols-2 gap-6'}`}>
        {services.map((service, index) => (
          <ServiceCard key={service.title + index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
