'use client';
import React, { ReactElement, useEffect } from 'react';
import { App, ConfigProvider } from 'antd';
import { useTheme } from 'next-themes';
import { theme as AntDTheme } from 'antd';
import { AppProvider } from '@/app-context';

export interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const BaseLayout = ({ children }: LayoutProps) => {
  const { defaultAlgorithm, darkAlgorithm } = AntDTheme;
  const { theme, setTheme } = useTheme();
  // const isMobile = useMediaQuery(mediaSize.mobile);

  useEffect(() => {
    const themeValue = localStorage.getItem('dashfolio-theme-key');
    console.log('themeValueeee', themeValue);
    setTheme(themeValue ?? 'dark');
  }, []);

  console.log('themeeee', theme);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        components: {
          Input: {
            colorBgContainerDisabled: 'transparent',
            algorithm: true,
          },
        },
      }}
    >
      <AppProvider>
        <App>{children}</App>
      </AppProvider>
    </ConfigProvider>
  );
};

export default BaseLayout;
