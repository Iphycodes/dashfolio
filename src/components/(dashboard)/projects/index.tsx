// src/components/projects/index.tsx
'use client';

import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import ProjectShowcase from './lib/project-showcase';
import ProjectGrid from './lib/projects-grid';
import { Code1 } from 'iconsax-react';
import { useState } from 'react';

// Sample projects data
const projects = [
  {
    id: 2,
    title: 'BabyMomsi',
    description:
      "The world's first AI-powered Digital Doula Mum app that helps you feel seen, heard and supported from bump to birth.",
    category: 'Web Application',
    technologies: ['React', 'Next.js', 'Typescript'],
    image: '/asset/imgs/babymomsi-sample-u.jpeg',
    link: 'https://babymomsi.com/',
    github: 'https://github.com/Babymomsi/Babymomsi-Web',
    featured: true,
    year: '2025',
    color: '#9c27b0',
  },
  {
    id: 3,
    title: 'DeduktPro',
    description:
      'A Software that streamline and automate HR processes for employee scheduling, time off tracking, and file management',
    category: 'Web Application',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io'],
    image: '/asset/imgs/my-work-task-manager-1.jpeg',
    link: 'https://app.deduktpro.co',
    github: 'https://github.com/ekaruztech/DeduktPRO-Web',
    featured: true,
    year: '2025',
    color: '#4caf50',
  },
  {
    id: 1,
    title: 'Giro',
    description:
      'Giro is a comprehensive B2B solution designed to simplify financial operations for businesses. It offers robust wallet management features.',
    category: 'Web Application',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '/asset/imgs/giro-sample.png',
    link: 'https://girostack.com',
    github: 'https://github.com/GiroStack/Giro-Web',
    featured: true,
    year: '2024',
    color: '#ff9800',
  },
  {
    id: 4,
    title: 'My-PrizePort',
    description: 'Modern digital reward system platform featuring token generation and redemption.',
    category: 'Web Application',
    technologies: ['Next Js', 'Node.js', 'Nest.js'],
    image: '/asset/imgs/myprizeport-sample.png',
    link: 'https://myprizeport.com',
    github: 'https://github.com/ekaruztech/redymit-web',
    featured: true,
    year: '2024',
    color: '#9c27b0',
  },
  {
    id: 5,
    title: 'Voomsway',
    description:
      'Voomsway is an all-inclusive cloud-based transport management system built to enhance efficient and seamless online transport management solutions that saves your company time, maximize output and revenue',
    category: 'Web Application',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    image: '/asset/imgs/vomsway-sample-u.jpeg',
    link: 'https://voomsway.com/',
    github: 'https://github.com/ekaruztech/voomsway-official-website',
    featured: true,
    year: '2024',
    color: '#2196f3',
  },
  {
    id: 6,
    title: 'Chowville',
    description:
      'Chowville is a platform that houses a community of food vendors, restaurants, chefs, food consumers and food enthusiasts',
    category: 'Web Application',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    image: '/asset/imgs/my-work-food-delivery-2.jpeg',
    link: 'https://chowville.app',
    github: 'https://github.com/Chowville/Chowville-web',
    featured: true,
    year: '2023',
    color: '#2196f3',
  },
  // {
  //   id: 5,
  //   title: 'Web3 Gaming App',
  //   description:
  //     'Decentralized cryptocurrency exchange with smart contract integration, liquidity pools, and real-time market data.',
  //   category: 'Web3',
  //   technologies: ['Solidity', 'Ethers.js', 'React', 'Web3.js'],
  //   image: '/asset/imgs/my-work-web3-1.jpeg',
  //   link: 'https://flipperfun.com',
  //   github: 'https://github.com/example/defi',
  //   featured: true,
  //   year: '2024',
  //   color: '#9c27b0',
  // },
  // Add more projects...
];

const Projects = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const isTablet = useMediaQuery(mediaSize.tablet);
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-16">
      {/* Hero Section */}
      <motion.div
        className="text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800/30"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Code1 variant="Bulk" className="text-blue" size={20} />
          <span className="text-sm">Featured Work</span>
        </motion.div>

        <h1 className={`${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'} font-bold`}>
          My Creative Projects Showcase
        </h1>
        <p
          className={`text-muted-foreground max-w-2xl mx-auto ${isMobile ? 'text-sm' : 'text-base'}`}
        >
          Exploring the intersection of design and technology through some of my innovative web
          solutions.
        </p>
      </motion.div>

      {/* Featured Projects Showcase */}
      <ProjectShowcase
        projects={projects.filter((p) => p.featured)}
        isMobile={isMobile}
        isTablet={isTablet}
      />

      {/* Project Filters */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 p-1 bg-neutral-50 dark:bg-neutral-800/30 rounded-full">
          {['all', 'web', 'mobile', 'design'].map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-white text-black'
                  : 'hover:bg-neutral-100 dark:hover:bg-neutral-800/70 dark:hover:bg-neutral-800/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <ProjectGrid
        projects={projects}
        activeFilter={activeFilter}
        isMobile={isMobile}
        isTablet={isTablet}
      />
    </div>
  );
};

export default Projects;
