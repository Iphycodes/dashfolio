import { useTheme } from 'next-themes';
import { mediaSize, useMediaQuery } from '../responsiveness';
import { CSSProperties } from 'react';

type ArrowProps = {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};

export function PrevArrow({ onClick }: ArrowProps) {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const { theme } = useTheme();
  return (
    <div
      className={`prev-arrow ${isMobile ? 'h-8 w-8' : 'w-12 h-12'} rounded-[50%] bg-background shadow-lg dark:border dark:border-gray-500 flex items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      <i
        className={`ri-arrow-left-s-line text-black text-[22px] ${theme === 'dark' ? 'text-white' : ''}`}
      ></i>
    </div>
  );
}

export function NextArrow({ onClick }: ArrowProps) {
  const isMobile = useMediaQuery(mediaSize.mobile);
  const { theme } = useTheme();

  return (
    <span
      className={`next-arrow ${isMobile ? 'w-8 h-8' : 'w-12 h-12'} rounded-[50%] bg-background shadow-lg dark:border dark:border-gray-500 flex items-center justify-center cursor-pointer`}
      onClick={onClick}
    >
      <i
        className={`ri-arrow-right-s-line text-black ${theme === 'dark' ? 'text-white' : ''} text-[22px]`}
      ></i>
    </span>
  );
}
