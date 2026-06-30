// src/components/services/lib/testimonials/index.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { QuoteUp } from 'iconsax-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  comment: string;
  rating: number;
  project: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechStart Inc.',
    avatar: '/path/to/avatar1.jpg',
    comment:
      "An exceptional developer who delivered beyond our expectations. The attention to detail and technical expertise significantly improved our platform's performance.",
    rating: 5,
    project: 'E-commerce Platform',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateLabs',
    avatar: '/path/to/avatar2.jpg',
    comment:
      'Working with this developer was a game-changer for our team. Their mentorship and technical guidance helped us adopt best practices.',
    rating: 5,
    project: 'Team Training',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Founder',
    company: 'DataFlow Systems',
    avatar: '/path/to/avatar3.jpg',
    comment:
      'The technical consultation provided clear, actionable insights that helped us scale our architecture efficiently. Highly recommended for complex technical challenges.',
    rating: 5,
    project: 'Architecture Review',
  },
];

interface TestimonialsSectionProps {
  isMobile?: boolean;
  isTablet?: boolean;
}

const TestimonialsSection = ({ isMobile }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="space-y-12">
      {/* Section Header */}
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`font-bold ${isMobile ? 'text-2xl' : 'text-3xl'}`}>Client Testimonials</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take my word for it - hear what clients have to say
        </p>
      </motion.div>

      {/* Testimonials Carousel */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl text-neutral-900/5 dark:text-neutral-800/20">
          <QuoteUp variant="Bold" size={48} />
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8"
            >
              {/* Rating */}
              {/* <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star1 key={i} size={20} variant="Bold" className="text-yellow-500" />
                ))}
              </div> */}

              {/* Comment */}
              <blockquote className={`${isMobile ? 'text-lg' : 'text-xl'} font-medium mb-8`}>
                "{testimonials[activeIndex].comment}"
              </blockquote>

              {/* Author */}
              <div className="inline-flex flex-col items-center">
                <div className="h-16 w-16 rounded-full overflow-hidden mb-4">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="font-medium">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                  </div>
                  <div className="text-sm font-medium text-blue">
                    {testimonials[activeIndex].project}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-6 bg-blue'
                  : 'w-1.5 bg-neutral-100 dark:bg-neutral-800/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
          <motion.button
            onClick={() =>
              setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
            }
            className="h-10 w-10 rounded-full bg-white/90 dark:bg-neutral-800/90 shadow-lg flex items-center justify-center pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </motion.button>
          <motion.button
            onClick={() => setActiveIndex((prev) => (prev + 1) % testimonials.length)}
            className="h-10 w-10 rounded-full bg-white/90 dark:bg-neutral-800/90 shadow-lg flex items-center justify-center pointer-events-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
