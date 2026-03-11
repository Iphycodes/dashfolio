// src/components/services/lib/service-showcase/index.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { IconProps } from 'iconsax-react';
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.FC<IconProps>;
  color: string;
  features: string[];
  image: string;
  deliverables: string[];
  timeline: string;
  featured: boolean;
}

interface ServiceShowcaseProps {
  services: Service[];
  isMobile?: boolean;
  isTablet?: boolean;
}

const ServiceShowcase = ({ services, isMobile, isTablet }: ServiceShowcaseProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length, isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <div
      className="space-y-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with Navigation */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Featured Services</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <i className="ri-arrow-left-s-line text-xl" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-neutral-900/10 dark:bg-neutral-800/30 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/50 transition-colors"
          >
            <i className="ri-arrow-right-s-line text-xl" />
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className={`grid ${isTablet ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-12'}`}>
        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className={`flex flex-col justify-center ${isTablet ? 'text-center' : 'text-left'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `${services[currentIndex].color}20`,
                    color: services[currentIndex].color,
                  }}
                >
                  {services[currentIndex].timeline}
                </motion.div>
                <motion.h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-bold mt-4`}>
                  {services[currentIndex].title}
                </motion.h2>
              </div>

              <motion.p className="text-muted-foreground">
                {services[currentIndex].description}
              </motion.p>

              {/* Features */}
              <div className="space-y-4">
                {services[currentIndex].features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div
                      className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${services[currentIndex].color}20` }}
                    >
                      <i
                        className="ri-check-line"
                        style={{ color: services[currentIndex].color }}
                      />
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="flex flex-wrap gap-2">
                {services[currentIndex].deliverables.map((deliverable) => (
                  <Badge key={deliverable} variant="outline">
                    {deliverable}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="relative h-[400px] rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={services[currentIndex].image}
              alt={services[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="flex justify-center gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'w-6 bg-blue'
                : 'w-1.5 bg-neutral-900/20 dark:bg-neutral-800/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceShowcase;
