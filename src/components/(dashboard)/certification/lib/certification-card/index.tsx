// src/components/certifications/certification-card.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  badges: string[];
  logo: string;
  color: string;
  onClick: () => void;
}

const CertificationCard = ({
  title,
  issuer,
  date,
  // credential,
  badges,
  logo,
  color,
  onClick,
}: CertificationCardProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative rounded-xl overflow-hidden bg-neutral-900/10 dark:bg-neutral-800/30 p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div className="relative h-12 w-12 rounded-xl overflow-hidden">
            <Image src={logo} alt={issuer} fill className="object-cover" />
          </div>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>

        <div>
          <h3 className="text-lg font-semibold group-hover:text-blue-500 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">{issuer}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="px-2 py-1 rounded-full text-xs bg-neutral-900/20 dark:bg-neutral-800/50"
              style={{ color }}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* <div className="pt-4 border-t border-neutral-800/50">
          <div className="flex justify-between items-center">
            <span className="text-xs text-muted-foreground">Credential ID:</span>
            <span className="text-xs font-mono">{credential}</span>
          </div>
        </div> */}

        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/20 rounded-xl transition-colors" />
      </div>
    </motion.div>
  );
};

export default CertificationCard;