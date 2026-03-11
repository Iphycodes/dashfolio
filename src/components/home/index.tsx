'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/services' },
];

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '15+', label: 'Technologies' },
  { value: '7+', label: 'Companies' },
];

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Redux',
  'Nest.js',
  'MongoDB',
  'PostgreSQL',
  'Supabase',
  'Ant Design',
  'Framer Motion',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const HomePage = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const isMobile = useMediaQuery(mediaSize.mobile);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const themeValue = localStorage.getItem('dashfolio-theme-key');
    setTheme(themeValue ?? 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-[#0a0a0a]/70 border-b border-neutral-200/50 dark:border-neutral-800/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`max-w-6xl mx-auto flex items-center justify-between ${isMobile ? 'px-5 py-4' : 'px-8 py-5'}`}
        >
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-blue/30">
              <Image
                src="/asset/imgs/myself-10.jpeg"
                alt="Ifeanyi Emmanuel"
                width={36}
                height={36}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="font-semibold text-sm tracking-tight">Ifeanyi Emmanuel</span>
          </motion.div>

          {!isMobile && (
            <div className="flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  onClick={() => router.push(link.href)}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer relative group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-blue group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>
          )}

          <div className="flex items-center gap-3">
            {mounted && (
              <motion.button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line'} text-base`} />
              </motion.button>
            )}
            <motion.button
              onClick={() => router.push('/explore')}
              className={`bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 ${isMobile ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'} rounded-full font-medium hover:opacity-90 transition-opacity`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Dashboard
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className={`min-h-screen flex items-center justify-center relative ${isMobile ? 'pt-24 px-5' : 'pt-20 px-8'}`}
      >
        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue/5 dark:bg-blue/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 dark:bg-purple-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Status badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/50 mb-8"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
              Available for new projects
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className={`font-extrabold tracking-tight leading-[1.1] mb-6 ${
              isMobile ? 'text-4xl' : 'text-7xl'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">Crafting Digital</span>
            <span className="block bg-gradient-to-r from-blue via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className={`text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed ${
              isMobile ? 'text-base px-2' : 'text-lg'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            I&apos;m Ifeanyi Emmanuel, a Software Engineer specializing in building exceptional,
            performant, and accessible web applications with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className={`flex items-center justify-center gap-4 ${isMobile ? 'flex-col w-full' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              onClick={() => router.push('/explore')}
              className={`bg-blue-gradient text-white font-medium rounded-full flex items-center justify-center gap-2 group ${
                isMobile ? 'w-full px-6 py-3.5 text-sm' : 'px-8 py-4 text-base'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore My Work
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            <motion.button
              onClick={() => router.push('/about')}
              className={`bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-medium rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors ${
                isMobile ? 'w-full px-6 py-3.5 text-sm' : 'px-8 py-4 text-base'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More About Me
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          {!isMobile && (
            <motion.div
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="w-6 h-10 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-start justify-center p-1.5"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-1 h-2 rounded-full bg-neutral-400 dark:bg-neutral-500" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className={`py-24 ${isMobile ? 'px-5' : 'px-8'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className={`grid ${isMobile ? 'grid-cols-2 gap-6' : 'grid-cols-4 gap-8'}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800/50"
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div
                  className={`font-bold bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent ${isMobile ? 'text-3xl' : 'text-4xl'} mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <section
        className={`py-24 bg-neutral-50/50 dark:bg-neutral-900/30 ${isMobile ? 'px-5' : 'px-8'}`}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`font-bold mb-4 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>What I Do</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto">
              Turning ideas into elegant, scalable solutions with modern web technologies
            </p>
          </motion.div>

          <motion.div
            className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-6'}`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {[
              {
                icon: 'ri-code-s-slash-line',
                title: 'Frontend Development',
                desc: 'Building responsive, performant interfaces with React, Next.js, and TypeScript.',
                color: 'from-blue/10 to-blue/5 dark:from-blue/20 dark:to-blue/5',
                iconColor: 'text-blue',
              },
              {
                icon: 'ri-server-line',
                title: 'Backend Development',
                desc: 'Creating robust APIs and services with Node.js, Nest.js, and modern databases.',
                color:
                  'from-emerald-500/10 to-emerald-500/5 dark:from-emerald-500/20 dark:to-emerald-500/5',
                iconColor: 'text-emerald-500',
              },
              {
                icon: 'ri-smartphone-line',
                title: 'Full-Stack Solutions',
                desc: 'End-to-end product development from ideation to deployment and maintenance.',
                color:
                  'from-purple-500/10 to-purple-500/5 dark:from-purple-500/20 dark:to-purple-500/5',
                iconColor: 'text-purple-500',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className={`p-8 rounded-2xl bg-gradient-to-br ${service.color} border border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-sm`}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 flex items-center justify-center mb-5 shadow-sm`}
                >
                  <i className={`${service.icon} text-xl ${service.iconColor}`} />
                </div>
                <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={`py-24 ${isMobile ? 'px-5' : 'px-8'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`font-bold mb-4 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>Tech Stack</h2>
            <p className="text-neutral-500 dark:text-neutral-400">Technologies I work with daily</p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                className="px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50 hover:border-blue/30 hover:bg-blue-50 dark:hover:bg-blue/10 transition-colors cursor-default"
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-32 ${isMobile ? 'px-5' : 'px-8'}`}>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className={`font-bold mb-6 ${isMobile ? 'text-3xl' : 'text-5xl'}`}>
            Let&apos;s Build Something
            <span className="block bg-gradient-to-r from-blue to-cyan-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-neutral-500 dark:text-neutral-400 mb-10 max-w-lg mx-auto leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
          <div
            className={`flex items-center justify-center gap-4 ${isMobile ? 'flex-col w-full' : ''}`}
          >
            <motion.button
              onClick={() =>
                window.open(
                  'https://calendly.com/ifeanyiemmanuel585/appointment-meeting',
                  '_blank',
                  'noopener,noreferrer'
                )
              }
              className={`bg-blue-gradient text-white font-medium rounded-full flex items-center justify-center gap-2 ${
                isMobile ? 'w-full px-6 py-3.5 text-sm' : 'px-8 py-4 text-base'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="ri-calendar-line" />
              Schedule a Call
            </motion.button>
            <motion.button
              onClick={() => router.push('/explore')}
              className={`bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 font-medium rounded-full border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center justify-center gap-2 ${
                isMobile ? 'w-full px-6 py-3.5 text-sm' : 'px-8 py-4 text-base'
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="ri-compass-3-line" />
              Explore Dashboard
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 border-t border-neutral-200 dark:border-neutral-800/50 ${isMobile ? 'px-5' : 'px-8'}`}
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Ifeanyi Emmanuel. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[
              {
                icon: 'ri-linkedin-fill',
                url: 'https://www.linkedin.com/in/ifeanyi-ogbonna-ba64b61a5/',
              },
              { icon: 'ri-github-fill', url: 'https://github.com/iphycodes' },
              { icon: 'ri-twitter-x-line', url: 'https://x.com/IfeanyiOdogwu_' },
              { icon: 'ri-instagram-line', url: 'https://www.instagram.com/ifeanyiemmanuel_ng/' },
            ].map((social) => (
              <motion.a
                key={social.icon}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={`${social.icon} text-base`} />
              </motion.a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
