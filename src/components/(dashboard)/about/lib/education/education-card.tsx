// src/components/about/lib/education/education-card.tsx
'use client';

import { motion } from 'framer-motion';

interface EducationCardProps {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  achievements: string[];
  icon: string;
  index: number;
  isMobile?: boolean;
}

const EducationCard = ({
  period,
  degree,
  institution,
  location,
  description,
  achievements,
  icon,
  index,
  isMobile,
}: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative ${index !== 0 ? 'pt-8' : ''}`}
    >
      {/* Timeline line */}
      {/* {index !== 0 && <div className="absolute bg-green-500 left-[15px] top-0 h-8 w-px bg-neutral-800/50" />} */}

      {/* Timeline dot */}

      <div className="flex gap-5 items-start w-full">
        <div className=" h-[40px] w-[40px] rounded-[50%] border-2 border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
          <i className={`${icon} text-sm`} />
        </div>

        <div className="flex-1">
          <div className={`space-y-3 ${isMobile ? 'text-sm' : 'text-base'}`}>
            <div className="space-y-1">
              <span className="text-sm text-muted-foreground">{period}</span>
              <h3 className="font-medium">{degree}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{institution}</span>
                <span>•</span>
                <span>{location}</span>
              </div>
            </div>

            <div className="text-muted-foreground">{description}</div>

            <motion.div
              className="space-y-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
            >
              {achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <i className="ri-checkbox-circle-line text-neutral-900 dark:text-white" />
                  <span className="text-muted-foreground">{achievement}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationCard;
