'use client';
import React, { ReactElement, Suspense, useEffect } from 'react';
import { App, ConfigProvider } from 'antd';
import { useTheme } from 'next-themes';
import { theme as AntDTheme } from 'antd';
import { AppProvider } from '@/app-context';
import PageLoader from '@/_shared/components/page-loader';

export interface LayoutProps {
  children: ReactElement | ReactElement[];
}

const BaseLayout = ({ children }: LayoutProps) => {
  const { defaultAlgorithm, darkAlgorithm } = AntDTheme;
  const { theme, setTheme } = useTheme();
  // const isMobile = useMediaQuery(mediaSize.mobile);

  useEffect(() => {
    const themeValue = localStorage.getItem('dashfolio-theme-key');
    setTheme(themeValue ?? 'light');
  }, []);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
        token: {
          // Lime accent (#c5fa70) — dark text sits on the lime fills
          colorPrimary: '#c5fa70',
          colorInfo: '#c5fa70',
          colorTextLightSolid: '#111111',
        },
        components: {
          Input: {
            colorBgContainerDisabled: 'transparent',
            algorithm: true,
          },
        },
      }}
    >
      <AppProvider>
        <Suspense fallback={<PageLoader fullScreen />}>
          <App>{children}</App>
        </Suspense>
      </AppProvider>
    </ConfigProvider>
  );
};

export default BaseLayout;
