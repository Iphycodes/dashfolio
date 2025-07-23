'use client';

import { Button, Input, message } from 'antd';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Newsletter = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      message.error('Please enter your email address');
      return;
    }

    // Simulate API call
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
      message.success('Thank you for subscribing!');
      setEmail('');
    } catch (error: any) {
      message.error(error?.message || 'Something went wrong. Please try again:::');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className={`space-y-6 py-8 px-6 rounded-xl bg-neutral-900/10 dark:bg-neutral-800/50 ${
        isMobile ? 'mx-4' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-2">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <i className="ri-mail-send-line text-2xl text-blue-500"></i>
          <h2 className="text-2xl font-semibold">Stay Updated</h2>
        </motion.div>
        <motion.p
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Subscribe to receive updates about new projects, tech articles, and professional insights.
        </motion.p>
      </div>

      <motion.div
        className={`flex ${isMobile ? 'flex-col gap-3' : 'gap-4'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Input
          placeholder="Enter your email address"
          size="large"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${isMobile ? 'w-full' : 'max-w-xs'} bg-white/5 border-neutral-700`}
          prefix={<i className="ri-mail-line text-neutral-500" />}
        />
        <Button
          type="primary"
          size="large"
          loading={loading}
          onClick={handleSubscribe}
          className={`!bg-blue-gradient h-[45px] ${isMobile ? 'w-full' : 'min-w-[120px]'}`}
        >
          Subscribe
        </Button>
      </motion.div>

      <motion.div
        className="flex items-center gap-6 text-xs text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center gap-1">
          <i className="ri-shield-check-line"></i>
          <span>No spam</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="ri-time-line"></i>
          <span>Bi-weekly updates</span>
        </div>
        <div className="flex items-center gap-1">
          <i className="ri-lock-line"></i>
          <span>Unsubscribe anytime</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Newsletter;
