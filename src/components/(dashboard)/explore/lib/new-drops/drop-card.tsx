'use client';

import Image from 'next/image';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface DropCardProps {
  title: string;
  description: string;
  count: string;
  image: string;
  index: number;
  href: string;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const DropCard = ({ title, description, count, image, href }: DropCardProps) => {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const { push } = useRouter();

  return (
    <motion.div
      variants={item}
      onClick={() => push(href)}
      className="group cursor-pointer relative overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/60 dark:border-neutral-800/60 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <div className={`relative ${isMobile ? 'h-[160px]' : 'h-[200px]'} overflow-hidden`}>
        {/* Blurred background image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(20px) brightness(0.7)',
            transform: 'scale(1.1)',
          }}
        />

        {/* Main image centered */}
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={250}
            height={250}
            className="object-contain h-full max-w-full transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>
      </div>

      <div className={`${isMobile ? 'p-4' : 'p-6'} space-y-2`}>
        <div className="flex justify-between items-start">
          <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold`}>{title}</h3>
          <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
            {count}
          </span>
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-1 text-sm font-medium text-blue pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>View</span>
          <i className="ri-arrow-right-line text-xs group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default DropCard;
