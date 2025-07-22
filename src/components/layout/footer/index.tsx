// src/components/layout/footer/index.tsx
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { getCurrentTime, isAvailable, availabilityTimes } from './utils';
import { Col, Row } from 'antd';

const footerLinks: any = [
  {
    title: 'Index',
    links: [
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
      { name: 'Stack', href: '/stack' },
      { name: 'Courses', href: '/courses' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'ri-linkedin-fill' },
      { name: 'GitHub', href: 'https://github.com', icon: 'ri-github-fill' },
      { name: 'Twitter', href: 'https://twitter.com', icon: 'ri-twitter-fill' },
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
    <footer className="border-t border-neutral-800/50 bg-neutral-900/5 dark:bg-neutral-900/20">
      <Row className="w-full">
        <Col lg={16} className="mx-auto">
          <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Time and Availability */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="space-y-4"
              >
                <h2 className="text-6xl md:text-7xl font-mono dark:text-white">
                  {time}
                  <span className="text-neutral-500 ml-2">{availabilityTimes.timezone}</span>
                </h2>
                <div className="flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      available ? 'bg-green-500' : 'bg-yellow-500'
                    } animate-pulse`}
                  />
                  <p className="text-sm text-neutral-400">
                    {available ? availabilityTimes.availableStatus : availabilityTimes.busyStatus}
                  </p>
                </div>
              </motion.div>

              {/* Links */}
              {/* <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3'} gap-8`}> */}
              <div className={`${isMobile ? ' grid grid-cols-2' : 'flex justify-between'} gap-8`}>
                {footerLinks.map((section: any) => (
                  <div key={section.title} className="space-y-4">
                    <h3 className="text-sm font-medium text-neutral-400">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.links?.map((link: any) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
                          >
                            {link?.icon && <i className={link?.icon} />}
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
            <div className="mt-12 pt-8 border-t border-neutral-800/50">
              <p className="text-sm text-neutral-500 text-center">
                © {new Date().getFullYear()} Ifeanyi Emmanuel. All rights reserved.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
