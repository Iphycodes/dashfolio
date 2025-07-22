// src/components/services/lib/contact-cta/index.tsx
'use client';

import { motion } from 'framer-motion';
import { Messages2, Call, Calendar2 } from 'iconsax-react';

interface ContactCTAProps {
  isMobile?: boolean;
}

const contactOptions = [
  {
    title: 'Schedule a Call',
    description: 'Book a free consultation to discuss your project needs',
    icon: Calendar2,
    color: '#2196f3',
    action: 'Schedule Now',
    link: '/calendar',
  },
  {
    title: 'Send a Message',
    description: 'Get in touch via email with your project details',
    icon: Messages2,
    color: '#4caf50',
    action: 'Email Me',
    link: 'mailto:your@email.com',
  },
  {
    title: 'Quick Chat',
    description: "Have a quick question? Let's talk",
    icon: Call,
    color: '#9c27b0',
    action: 'Chat Now',
    link: '/contact',
  },
];

const ContactCTA = ({ isMobile }: ContactCTAProps) => {
  return (
    <div className="relative rounded-2xl border border-neutral-800/20 bg-neutral-900/5 dark:bg-neutral-800/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M0 32V0h32" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative p-8 md:p-12 space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`font-bold ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
            Let's Build Something Amazing Together
          </h2>
          <p className="text-muted-foreground">
            Ready to start your next project? Choose how you'd like to connect
          </p>
        </motion.div>

        {/* Contact Options */}
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-3'} gap-6`}>
          {contactOptions.map((option, index) => (
            <motion.a
              key={option.title}
              href={option.link}
              className="group block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className="h-full p-6 rounded-xl bg-white/5 dark:bg-neutral-800/20 border border-neutral-800/10 hover:border-neutral-800/30 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className="h-12 w-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${option.color}20` }}
                  >
                    <option.icon size={24} variant="Bulk" color={option.color} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-medium mb-1">{option.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    className="flex items-center gap-2 text-sm font-medium group"
                    style={{ color: option.color }}
                  >
                    <span>{option.action}</span>
                    <i className="ri-arrow-right-line transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div
          className="text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Typically respond within 24 hours • Available for projects worldwide
        </motion.div>
      </div>
    </div>
  );
};

export default ContactCTA;
