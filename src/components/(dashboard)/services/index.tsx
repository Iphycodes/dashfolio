// src/components/services/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { Code1, Teacher, Messages1, Mobile } from 'iconsax-react';
import ServiceShowcase from './lib/service-showcase';
import ProcessTimeline from './lib/process-timeline';
import TestimonialsSection from './lib/testimonials-section';
import ContactCTA from './lib/contact-cta';

const services = [
  {
    id: 1,
    title: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices.',
    icon: Code1,
    color: '#2196f3',
    features: [
      'Full-stack web applications',
      'Custom API development',
      'Database design & optimization',
      'Performance optimization',
      'Scalable architecture',
    ],
    image: '/asset/imgs/myself-6.jpg',
    deliverables: ['Source code', 'Documentation', 'Technical support'],
    timeline: '4-12 weeks',
    featured: true,
  },
  {
    id: 2,
    title: 'Technical Training & Mentorship',
    description: 'Structured learning programs and personalized mentorship for developers.',
    icon: Teacher,
    color: '#4caf50',
    features: [
      'One-on-one mentoring sessions',
      'Custom learning paths',
      'Code reviews & feedback',
      'Real-world projects',
      'Career guidance',
    ],
    image: '/asset/imgs/myself-seminar-1.jpeg',
    deliverables: ['Learning materials', 'Project feedback', 'Certificates'],
    timeline: 'Ongoing',
    featured: true,
  },
  {
    id: 3,
    title: 'Project Collaboration',
    description: 'Join your team as a technical expert to bring your projects to life.',
    icon: Mobile,
    color: '#ff9800',
    features: [
      'Team integration',
      'Technical leadership',
      'Code contribution',
      'Knowledge sharing',
      'Process improvement',
    ],
    image: '/asset/imgs/myself-training-1.jpg',
    deliverables: ['Regular updates', 'Documentation', 'Handover support'],
    timeline: 'Flexible',
    featured: false,
  },
  {
    id: 4,
    title: 'Technical Consultation',
    description: 'Expert guidance on architecture, technology choices, and best practices.',
    icon: Messages1,
    color: '#9c27b0',
    features: [
      'Architecture review',
      'Tech stack evaluation',
      'Performance audits',
      'Security assessment',
      'Scalability planning',
    ],
    image: '/asset/imgs/myself-consult-1.jpg',
    deliverables: ['Detailed reports', 'Action plans', 'Follow-up support'],
    timeline: '1-4 weeks',
    featured: true,
  },
];

const Services = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-16">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900/20 dark:bg-neutral-800/30"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Code1 variant="Bulk" className="text-blue" size={20} />
          <span className="text-sm">Professional Services</span>
        </motion.div>

        <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold`}>
          Expert Solutions for Your
          <br />
          Technical Needs
        </h1>
        <p
          className={`text-muted-foreground max-w-2xl mx-auto ${isMobile ? 'text-sm' : 'text-base'}`}
        >
          From development to mentorship, I provide comprehensive services to help you achieve your
          technical goals.
        </p>
      </motion.div>

      {/* Service Showcase */}
      <ServiceShowcase
        services={services.filter((service) => service.featured)}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* Process Timeline */}
      <ProcessTimeline isMobile={isMobile} />

      {/* Testimonials */}
      <TestimonialsSection isMobile={isMobile} isTablet={isTablet} />

      {/* Contact CTA */}
      <ContactCTA isMobile={isMobile} />
    </div>
  );
};

export default Services;
