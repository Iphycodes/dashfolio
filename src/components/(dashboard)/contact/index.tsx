// src/components/(dashboard)/contact/index.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';

const EMAIL = 'ifeanyiogbonna@gmail.com';
const PHONE = '+2348109362830';
const WHATSAPP_NUMBER = '2348109362830';

const contactMethods = [
  {
    icon: 'ri-mail-line',
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    description: 'Drop me a message anytime',
  },
  {
    icon: 'ri-phone-line',
    label: 'Call',
    value: PHONE,
    href: `tel:${PHONE}`,
    description: 'Available for a quick chat',
  },
  {
    icon: 'ri-whatsapp-line',
    label: 'WhatsApp',
    value: PHONE,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    description: 'Message me directly',
  },
];

const Contact = () => {
  const isMobile = useMediaQuery(mediaSize.mobile);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New message from ${form.name || 'your portfolio'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className={`max-w-5xl mx-auto pb-12 ${isMobile ? 'px-4' : 'px-6'}`}>
      {/* Hero */}
      <motion.div
        className={`text-center space-y-4 mb-12 ${isMobile ? 'pt-6' : 'pt-10'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={`font-extrabold leading-tight ${isMobile ? 'text-3xl' : 'text-[54px]'}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Let&apos;s Work Together
        </motion.h1>
        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          Have a project in mind, a question, or just want to say hello? Reach out through any of
          the channels below — I&apos;ll get back to you as soon as I can.
        </motion.p>
      </motion.div>

      <div className={`grid gap-6 ${isMobile ? 'grid-cols-1' : 'grid-cols-5'}`}>
        {/* Contact methods */}
        <motion.div
          className={`space-y-4 ${isMobile ? '' : 'col-span-2'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-11 h-11 shrink-0 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                <i className={`${method.icon} text-xl text-neutral-900 dark:text-white`} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {method.label}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate">
                  {method.value}
                </p>
              </div>
              <i className="ri-arrow-right-up-line ml-auto text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          className={`p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 ${
            isMobile ? '' : 'col-span-3'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold mb-6">Send a message</h2>

          <div className="space-y-4">
            <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-500 transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or idea..."
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-500 dark:focus:border-neutral-500 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className="w-full px-6 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-medium text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <i className="ri-send-plane-line" />
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
