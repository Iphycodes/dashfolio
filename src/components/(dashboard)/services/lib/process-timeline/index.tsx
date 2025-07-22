// src/components/services/lib/process-timeline/index.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  Messages2,
  NoteFavorite,
  PresentionChart,
  Setting2,
  Mobile,
  TickCircle,
} from 'iconsax-react';

interface ProcessStep {
  title: string;
  description: string;
  icon: typeof Messages2;
  color: string;
  duration: string;
  details: string[];
}

const processSteps: ProcessStep[] = [
  {
    title: 'Initial Consultation',
    description: 'Understanding your needs and project requirements',
    icon: Messages2,
    color: '#2196f3',
    duration: '1-2 days',
    details: [
      'Project scope discussion',
      'Goals and objectives definition',
      'Technical requirements gathering',
      'Timeline and budget planning',
    ],
  },
  {
    title: 'Planning & Strategy',
    description: 'Developing a comprehensive project roadmap',
    icon: NoteFavorite,
    color: '#4caf50',
    duration: '3-5 days',
    details: [
      'Technical architecture design',
      'Resource allocation',
      'Risk assessment',
      'Milestone definition',
    ],
  },
  {
    title: 'Development Phase',
    description: 'Building and implementing solutions',
    icon: Setting2,
    color: '#9c27b0',
    duration: '2-8 weeks',
    details: [
      'Iterative development',
      'Regular progress updates',
      'Quality assurance',
      'Code documentation',
    ],
  },
  {
    title: 'Testing & Review',
    description: 'Ensuring quality and performance',
    icon: PresentionChart,
    color: '#ff9800',
    duration: '1-2 weeks',
    details: [
      'Comprehensive testing',
      'Performance optimization',
      'Security validation',
      'Client review sessions',
    ],
  },
  {
    title: 'Deployment',
    description: 'Launching your solution',
    icon: Mobile,
    color: '#e91e63',
    duration: '2-3 days',
    details: [
      'Production deployment',
      'Final checks',
      'Monitoring setup',
      'Handover documentation',
    ],
  },
  {
    title: 'Support & Maintenance',
    description: 'Ensuring long-term success',
    icon: TickCircle,
    color: '#00bcd4',
    duration: 'Ongoing',
    details: [
      'Technical support',
      'Performance monitoring',
      'Updates and maintenance',
      'Continuous improvement',
    ],
  },
];

interface ProcessTimelineProps {
  isMobile?: boolean;
}

const ProcessTimeline = ({ isMobile }: ProcessTimelineProps) => {
  const [activeStep, setActiveStep] = useState<number>(0);

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
        <h2 className={`font-bold ${isMobile ? 'text-2xl' : 'text-3xl'}`}>How We Work Together</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A structured approach to delivering high-quality solutions
        </p>
      </motion.div>

      {/* Timeline */}
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'md:grid-cols-2 gap-12'}`}>
        {/* Steps List */}
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                  activeStep === index
                    ? 'bg-neutral-900/10 dark:bg-neutral-800/30'
                    : 'hover:bg-neutral-900/5 dark:hover:bg-neutral-800/20'
                }`}
                onClick={() => setActiveStep(index)}
                whileHover={{ x: 10 }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${step.color}20` }}
                  >
                    <step.icon
                      size={20}
                      variant={activeStep === index ? 'Bulk' : 'Linear'}
                      color={step.color}
                    />
                  </div>
                  <div>
                    <div className="font-medium">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.duration}</div>
                  </div>
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Step Details */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div
                  className="w-fit px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor: `${processSteps[activeStep].color}20`,
                    color: processSteps[activeStep].color,
                  }}
                >
                  Step {activeStep + 1}
                </div>
                <h3 className="text-xl font-semibold">{processSteps[activeStep].title}</h3>
                <p className="text-muted-foreground">{processSteps[activeStep].description}</p>
              </div>

              <div className="space-y-4">
                {processSteps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={detail}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div
                      className="h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${processSteps[activeStep].color}20` }}
                    >
                      <i
                        className="ri-check-line"
                        style={{ color: processSteps[activeStep].color }}
                      />
                    </div>
                    <span>{detail}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;