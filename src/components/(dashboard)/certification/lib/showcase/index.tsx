// src/components/certifications/showcase.tsx
'use client';

import { motion } from 'framer-motion';
import { Award } from 'iconsax-react';

const Showcase = () => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="relative h-full min-h-[300px] rounded-xl overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
    <div className="relative h-full p-6 flex items-center justify-center">
      <div className="text-center space-y-4">
        <Award size={48} variant="Bulk" className="text-yellow-500 mx-auto" />
        <motion.div
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <h3 className="text-xl font-bold">Excellence in Tech</h3>
          <p className="text-sm text-muted-foreground">
            Recognized for outstanding contributions to software development
          </p>
        </motion.div>
      </div>
    </div>
    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
  </motion.div>
);

export default Showcase
