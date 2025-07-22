// src/components/certifications/award-card.tsx
'use client';

import { motion } from 'framer-motion';
import { IconProps } from 'iconsax-react';

interface AwardCardProps {
  title: string;
  event: string;
  position: string;
  description: string;
  icon: React.FC<IconProps>;
  index: number;
}

const AwardCard = ({ title, event, position, description, icon: Icon, index }: AwardCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative pl-10 py-4"
  >
    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-yellow-500/50 to-transparent" />
    <div className="absolute left-[-8px] top-6 h-4 w-4 rounded-full bg-yellow-500/20 border border-yellow-500" />

    <motion.div whileHover={{ x: 5 }} className="space-y-2">
      <div className="flex items-center gap-2">
        <Icon variant="Bulk" size={20} className="text-yellow-500" />
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-yellow-500">{position}</span>
        <span className="text-muted-foreground">{event}</span>
      </div>
    </motion.div>
  </motion.div>
);

export default AwardCard;
