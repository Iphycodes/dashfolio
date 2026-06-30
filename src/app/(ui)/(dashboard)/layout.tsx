'use client';

import React, { useContext, useEffect } from 'react';
import { Layout as AntdLayout, Col, Row } from 'antd';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import Sidebar from '@/components/layout/side-bar';
import { AppContext } from '@/app-context';
import Footer from '@/components/layout/footer';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';
import CustomThemeToggler from '@/_shared/components/custom-theme-toggler';

const { Sider, Content } = AntdLayout;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { toggleSider, setToggleSider } = useContext(AppContext);
  const { push } = useRouter();
  const { theme, setTheme } = useTheme();

  const isMobile = useMediaQuery(mediaSize.mobile);

  const toggleCollapse = () => {
    setToggleSider((prev) => !prev);
  };

  useEffect(() => {
    if (isMobile) {
      setToggleSider(true);
    }
  }, [isMobile]);

  return (
    <AntdLayout className="min-h-screen !bg-background">
      {/* Collapsible Sidebar */}
      <Sider
        width={220}
        collapsedWidth={isMobile ? 0 : 80}
        collapsed={toggleSider}
        onCollapse={toggleCollapse}
        className="transition-all duration-500 ease-in-out !fixed !top-0 !left-0 !z-100"
        style={{
          background: 'transparent',
          zIndex: 100,
        }}
      >
        <Sidebar />
      </Sider>

      {/* Main Content */}
      <AntdLayout
        className="transition-all duration-500 ease-in-out !bg-background !min-h-screen"
        style={{ marginLeft: isMobile ? 10 : toggleSider ? 80 : 220 }}
        onClick={() => {
          if (isMobile) {
            setToggleSider(true);
          }
        }}
      >
        <Content
          onClick={() => {
            if (isMobile) {
              setToggleSider(true);
            }
          }}
          className={`text-neutral-900 dark:text-white ${isMobile ? 'p-3' : 'p-6 pt-8'}`}
        >
          {/* Top bar: back to home (left) + theme toggle (right) */}
          <div
            className={`sticky top-0 z-40 flex items-center justify-between mb-6 py-2 ${isMobile ? '-mx-3 px-3' : '-mx-6 px-6'} bg-background/80 backdrop-blur-md`}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                push('/');
              }}
              className="ml-3 flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
            >
              <i className="ri-arrow-left-line text-base" />
              Back to Home
            </button>
            <div onClick={(e) => e.stopPropagation()}>
              <CustomThemeToggler theme={theme} setTheme={setTheme} />
            </div>
          </div>

          <Row className="w-full">
            <Col sm={24} className="mx-auto">
              {children}
            </Col>
          </Row>
        </Content>
        <Footer />
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
