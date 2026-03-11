'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { getCurrentTime, isAvailable, availabilityTimes } from './utils';
import { Col, Row } from 'antd';

const footerLinks = [
  {
    title: 'Index',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Explore', href: '/explore' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Services', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Stacks', href: '/stacks' },
      { name: 'Experience', href: '/experience' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ifeanyi-ogbonna-ba64b61a5/', icon: 'ri-linkedin-fill' },
      { name: 'GitHub', href: 'https://github.com/iphycodes', icon: 'ri-github-fill' },
      { name: 'Twitter', href: 'https://x.com/IfeanyiOdogwu_', icon: 'ri-twitter-x-fill' },
    ],
  },
];

const Footer = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const [time, setTime] = useState(getCurrentTime());
  const [available, setAvailable] = useState(isAvailable());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
      setAvailable(isAvailable());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-50 dark:bg-[#0a0a0a]">
      <Row className="w-full">
        <Col lg={16} className="mx-auto">
          <div className={`${isMobile ? 'py-12 px-4' : 'py-16'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Time and Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <h2 className={`${isMobile ? 'text-4xl' : 'text-6xl'} font-mono text-neutral-800 dark:text-white`}>
                  {time}
                  <span className="text-neutral-400 dark:text-neutral-600 ml-2 text-[0.5em]">
                    {availabilityTimes.timezone}
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      available ? 'bg-green-500' : 'bg-yellow-500'
                    } animate-pulse`}
                  />
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {available ? availabilityTimes.availableStatus : availabilityTimes.busyStatus}
                  </p>
                </div>
              </motion.div>

              {/* Links */}
              <div className={`${isMobile ? 'grid grid-cols-2' : 'flex justify-between'} gap-8`}>
                {footerLinks.map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h3 className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.links?.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-2"
                          >
                            {'icon' in link && link.icon && <i className={link.icon} />}
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <p className="text-xs text-neutral-400 dark:text-neutral-600 text-center">
                &copy; {new Date().getFullYear()} Ifeanyi Emmanuel. All rights reserved.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
