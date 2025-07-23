// src/components/about/lib/education/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import EducationCard from './education-card';
import Image from 'next/image';

// src/components/about/lib/education/index.tsx
// ... other imports remain same

const educationData = [
  {
    period: '2023',
    degree: 'Advanced Software Engineering',
    institution: 'ALX Africa',
    location: 'Remote',
    description:
      'Professional certification focusing on advanced software architectures and modern development practices.',
    achievements: [
      'Full Stack Development Certification',
      'Cloud Architecture Specialization',
      'Agile Development Leadership',
    ],
    icon: 'ri-code-box-line',
  },
  {
    period: '2018 - 2023',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Ahmadu Bello University',
    location: 'Zaria, Nigeria',
    description:
      'Specialized in Software Engineering with focus on web technologies and distributed systems.',
    achievements: [
      'Graduated with First Class Honours',
      'Leader of Tech Club',
      'Deployed a student CBT training software',
    ],
    icon: 'ri-building-4-line',
  },
  {
    period: '2016',
    degree: 'Diploma in ICT and Software Development',
    institution: 'Multiple Bytes Computer Institute',
    location: 'Zaria, Nigeria',
    description:
      'Foundation program in software development principles and practices, with emphasis on practical applications.',
    achievements: [
      'Graduated with Distinction',
      'Led student coding workshops',
      'Developed 3 full-stack applications',
    ],
    icon: 'ri-terminal-box-line',
  },
];

const Education = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);

  return (
    <div className="!mt-[100px]">
      {isMobile && (
        <div className={`h-full`}>
          <div className="flex flex-col custom-scrollbar-inner">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pb-4"
            >
              <h2 className={`font-semibold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                Academic Journey
              </h2>
              <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
                A journey through formal education and continuous learning, building a strong
                foundation in computer science and modern software development.
              </p>
            </motion.div>

            {/* Scrollable Education List */}
            <div className="flex-1 mt-4 !overflow-y-auto px-6 pb-6 custom-scrollbar-inner">
              <div className="space-y-6 pr-4">
                {educationData.map((education, index) => (
                  <EducationCard
                    key={education.period}
                    {...education}
                    index={index}
                    isMobile={isMobile}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-xl border border-neutral-800/50 bg-neutral-900/5 dark:bg-neutral-900/20 overflow-hidden h-[800px]"
      >
        <div className={`grid ${isTablet ? 'grid-cols-1' : 'grid-cols-5'} h-full`}>
          {/* Content Section */}

          {/* Images Section */}
          <div className={`${isTablet ? 'order-1 h-[400px]' : 'col-span-1 h-full'}`}>
            {/* Top Image */}
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src="/asset/imgs/graduation1.jpg"
                alt="Educational background"
                fill
                className="object-cover rounded-tr-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Image
                src="/asset/imgs/myself-grad.jpeg"
                alt="Learning environment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
          {!isMobile && (
            <div className={`${isMobile ? 'order-2' : 'col-span-4'} h-full`}>
              <div className="flex flex-col h-[800px] max-h-[800px] custom-scrollbar-inner">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="p-6 pb-4"
                >
                  <h2 className={`font-semibold mb-4 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                    Academic Journey
                  </h2>
                  <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
                    A journey through formal education and continuous learning, building a strong
                    foundation in computer science and modern software development.
                  </p>
                </motion.div>

                {/* Scrollable Education List */}
                <div className="flex-1 mt-4 !overflow-y-auto px-6 pb-6 custom-scrollbar-inner">
                  <div className="space-y-6 pr-4">
                    {educationData.map((education, index) => (
                      <EducationCard
                        key={education.period}
                        {...education}
                        index={index}
                        isMobile={isMobile}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
