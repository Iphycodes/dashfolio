// components/Layout.tsx
'use client';

import React, { useContext, useEffect, useState } from 'react';
import { Layout as AntdLayout, Button, Col, Row } from 'antd';
import Sidebar from '@/components/layout/side-bar';
import { AppContext } from '@/app-context';
import Footer from '@/components/layout/footer';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';

const { Sider, Content } = AntdLayout;

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { toggleSider, setToggleSider } = useContext(AppContext);

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
        className="transition-all duration-300 !fixed !top-0 !left-0 !z-100"
        style={{
          background: 'transparent',
          zIndex: 100,
        }}
      >
        <Sidebar />
      </Sider>

      {/* Main Content */}
      <AntdLayout
        className={`transition-all duration-300 !bg-background !min-h-screen ${isMobile ? '!m-l-0' : '!m-l-[220px]'}`}
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
          className={`text-black dark:text-white ${isMobile ? 'p-3' : 'p-6'}`}
        >
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
