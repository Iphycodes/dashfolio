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
    setTheme(themeValue ?? 'light');
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
            onClick={() => router.push('/')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Light theme logo */}
            <Image
              src="/asset/logos/IfyDev-logo-light.PNG"
              alt="Ify Dev"
              width={120}
              height={80}
              priority
              className="h-8 w-auto object-contain dark:hidden"
            />
            {/* Dark theme logo */}
            <Image
              src="/asset/logos/IfyDev-logo-dark.png"
              alt="Ify Dev"
              width={120}
              height={80}
              priority
              className="hidden h-8 w-auto object-contain dark:block"
            />
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
              className={`bg-accent text-accent-foreground ${isMobile ? 'px-4 py-2 text-xs' : 'px-5 py-2.5 text-sm'} rounded-full font-medium hover:opacity-90 transition-opacity`}
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
        className={`relative min-h-screen flex items-center overflow-hidden bg-neutral-100 dark:bg-transparent ${
          isMobile ? 'pt-24 pb-12 px-5' : 'pt-32 px-8'
        }`}
      >
        {/* Lime glow — sits behind the text and image */}
        <div className="pointer-events-none absolute top-1/2 right-[6%] z-0 h-[70%] w-[45%] -translate-y-1/2 rounded-full bg-accent/25 dark:bg-accent/15 blur-[100px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-4 lg:grid-cols-12 lg:gap-8">
          {/* Left — text */}
          <div className="relative z-20 order-2 text-center pt-8 lg:order-1 lg:col-span-6 lg:pt-24 lg:text-left">
            {/* Eyebrow */}
            <motion.p
              className="text-base sm:text-lg font-semibold text-neutral-500 dark:text-neutral-400 mb-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ letterSpacing: '7px' }}
            >
              <span className='ml-2'>Hi, I&apos;m Ifeanyi the Developer</span>
            </motion.p>

            {/* Big display heading */}
            <motion.h1
              className="font-display uppercase tracking-normal leading-[0.9] text-[#1a1a1a] dark:text-white text-7xl sm:text-8xl lg:text-[8rem] lg:whitespace-nowrap"
              style={{
                WebkitTextStroke: '0.05em currentColor',
                paintOrder: 'stroke fill',
                letterSpacing: '-5px',
              }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
              }}
              initial="hidden"
              animate="visible"
            >
              {['Software', 'Developer'].map((line) => (
                <motion.span
                  key={line}
                  className="block font-display"
                  variants={{
                    hidden: { y: 30, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  {line}
                </motion.span>
              ))}
            </motion.h1>

            {/* CTA Buttons */}
            <motion.div
              className={`mt-10 flex items-center gap-4 ${
                isMobile ? 'flex-col w-full' : 'justify-center lg:justify-start'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.button
                onClick={() => router.push('/projects')}
                className={`bg-accent text-accent-foreground font-semibold rounded-full flex items-center justify-center gap-2 group hover:opacity-90 transition-opacity ${
                  isMobile ? 'w-full px-6 py-3.5 text-sm' : 'px-8 py-4 text-base'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore My Work
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
              <motion.button
                onClick={() => router.push('/contact')}
                className={`bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 font-medium rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors ${
                  isMobile ? 'w-full px-6 py-3.5 text-sm' : 'px-8 py-4 text-base'
                }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Right — portrait (in front of the text; transparent PNG so text shows through) */}
          <motion.div
            className="order-1 relative z-30 h-[52vh] w-full sm:h-[66vh] lg:order-2 lg:col-span-6 lg:h-screen pointer-events-none"
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/asset/imgs/myself-front-image.png"
              alt="Ifeanyi Emmanuel — Software Developer"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="relative z-10 object-contain object-center"
            />
          </motion.div>
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
                  className={`font-bold text-neutral-900 dark:text-white ${isMobile ? 'text-3xl' : 'text-4xl'} mb-2`}
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
                icon: 'ri-stack-line',
                title: 'Full-Stack Development',
                desc: 'End-to-end products spanning frontend and backend — React, Next.js, Node.js, and modern databases.',
              },
              {
                icon: 'ri-global-line',
                title: 'Website Development',
                desc: 'Fast, responsive, and accessible websites and landing pages built with performance and SEO in mind.',
              },
              {
                icon: 'ri-smartphone-line',
                title: 'App / Software Development',
                desc: 'Robust web and mobile applications and custom software tailored to real business needs.',
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className={`p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800`}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-5`}
                >
                  <i className={`${service.icon} text-xl text-neutral-900 dark:text-white`} />
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
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* edge fades */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white dark:from-[#0a0a0a] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white dark:from-[#0a0a0a] to-transparent" />

            {/* seamless marquee — duplicated set, scrolls infinitely, pauses on hover */}
            <div className="flex w-max animate-scroll gap-3">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
                >
                  {tech}
                </span>
              ))}
            </div>
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
            <span className="block text-neutral-800 dark:text-neutral-200">Amazing Together</span>
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
              className={`bg-accent text-accent-foreground font-medium rounded-full flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ${
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
              className={`bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 font-medium rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 ${
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
