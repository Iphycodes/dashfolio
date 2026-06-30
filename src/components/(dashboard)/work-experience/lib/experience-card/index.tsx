// src/components/experience/lib/experience-card.tsx
'use client';

import { motion } from 'framer-motion';
import { Building, Location } from 'iconsax-react';
import { Badge } from '@/components/ui/badge';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
  color: string;
  index: number;
  isMobile?: boolean;
}

const ExperienceCard = ({
  title,
  company,
  period,
  location,
  type,
  description,
  achievements,
  techStack,
  color,
  index,
  isMobile,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="rounded-xl border border-neutral-800/20 bg-neutral-50 dark:bg-neutral-800/10 p-8 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-1">
            <h3 className={`font-semibold ${isMobile ? 'text-xl' : 'text-2xl'}`}>{title}</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building size={16} />
              <span>{company}</span>
            </div>
          </div>

          <div className="space-y-2">
            <div
              className="inline-flex items-center px-3 py-1 rounded-full text-sm"
              style={{ backgroundColor: `${color}20`, color }}
            >
              {type}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{period}</span>
              <div className="flex items-center gap-1">
                <Location size={14} />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
          {description}
        </p>

        {/* Achievements */}
        <div className="space-y-3">
          <h4 className="font-medium">Key Achievements</h4>
          <div className="grid gap-2">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + idx * 0.1 }}
              >
                <i className="ri-check-line text-neutral-900 dark:text-white mt-1" />
                <span className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h4 className="font-medium mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-neutral-50 dark:bg-neutral-800/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
