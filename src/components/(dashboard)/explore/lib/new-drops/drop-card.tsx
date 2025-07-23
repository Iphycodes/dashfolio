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
      className="group cursor-pointer relative overflow-hidden rounded-lg bg-neutral-900/10 dark:bg-neutral-800/50 hover:bg-neutral-900/20 dark:hover:bg-neutral-800/80 transition-all duration-300"
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
            transform: 'scale(1.1)', // Slightly larger to avoid blur edges
          }}
        />

        {/* Main image centered */}
        <div className="relative z-10 h-full w-full flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={250}
            height={250}
            className="object-contain h-full max-w-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className={`${isMobile ? 'p-3' : 'p-6'} space-y-2`}>
        <div className="flex justify-between items-start">
          <h3 className={`${isMobile ? 'text-base' : 'text-xl'} font-semibold`}>{title}</h3>
          <motion.span
            className="text-sm text-muted-foreground bg-neutral-900/20 dark:bg-neutral-900/50 px-3 py-1 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {count}
          </motion.span>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default DropCard;