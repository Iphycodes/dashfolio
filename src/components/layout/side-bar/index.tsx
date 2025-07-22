'use client';

import CustomThemeToggler from '@/_shared/components/custom-theme-toggler';
import { appNav } from '@/app/nav';
import { AppContext } from '@/app-context';
import { Menu } from 'antd';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useContext } from 'react';
import { mediaSize, useMediaQuery } from '@/_shared/components/responsiveness';

const Sidebar = () => {
  const pathname = usePathname();
  const urlPath = pathname?.split('/');
  const { push } = useRouter();
  const { theme, setTheme } = useTheme();
  const { toggleSider, setToggleSider } = useContext(AppContext);
  const isMobile = useMediaQuery(mediaSize.mobile);

  const handleMenuClick = ({ key }: { key: string }) => {
    push(`/${key}`);

    if (isMobile) {
      setToggleSider(true);
    }
  };

  const handleConnectMenuClick = ({ key }: { key: string }) => {
    appNav?.connectNavItem.map((item) => {
      if (item.key === key) {
        if (item.url && item.url !== '') {
          window.open(item.url, '_blank');
        }
      }
    });

    if (isMobile) {
      setToggleSider(true);
    }
  };

  console.log('sider-theme', theme);

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-[#FAFAFA] dark:bg-neutral-900 text-muted-foreground dark:text-white px-2 border-r dark:border-r-neutral-800 transition-all duration-500 ease-in-out ${
        toggleSider ? (isMobile ? 'w-0' : 'w-[80px]') : 'w-[240px]'
      }`}
    >
      {/* Profile Section - Fixed */}
      <div className={`sticky top-0 bg-[#FAFAFA] dark:bg-neutral-900 z-10 pb-5`}>
        <div
          className={`flex ${toggleSider ? 'justify-center' : 'justify-start'} items-center gap-2 px-1 py-5 relative transition-all duration-500 ease-in-out`}
        >
          <button
            onClick={() => setToggleSider(!toggleSider)}
            className="absolute h-8 w-8 rounded-[50%] shadow-md flex items-center justify-center border border-neutral-400 dark:border-neutral-800 bg-[#fafafa] dark:bg-neutral-900 text-muted-foreground right-[-20px] top-[35%] cursor-pointer hover:bg-[#e0e0e0] hover:dark:bg-neutral-800 transition-all duration-300 z-10"
          >
            <i
              className={`ri-arrow-${toggleSider ? 'right' : 'left'}-s-line text-neutral-900 dark:text-neutral-400 ml-[2px] transition-transform duration-500 ease-in-out ${toggleSider ? 'rotate-0' : 'rotate-180'} text-[20px]`}
            ></i>
          </button>
          <div
            className={`relative ${toggleSider ? 'w-10 h-10' : 'w-10 h-10'} transition-all duration-1000 ease-in-out`}
          >
            <Image
              src={'/asset/imgs/myself-10.jpeg'}
              alt="avatar"
              // fill
              width={100}
              height={100}
              className="rounded-full object-cover"
              style={{ width: '40px', height: '40px' }}
            />
          </div>
          <div
            className={`flex flex-1 flex-col overflow-hidden transition-all duration-500 ease-in-out ${
              toggleSider
                ? 'w-0 opacity-0 transform -translate-x-8'
                : 'w-full opacity-100 transform translate-x-0'
            }`}
          >
            <span
              className="text-[14px] font-semibold whitespace-nowrap transform transition-all duration-1000 ease-in-out text-black dark:text-white"
              style={{
                transform: toggleSider ? 'translateX(-100%)' : 'translateX(0)',
                opacity: toggleSider ? 0 : 1,
              }}
            >
              Ifeanyi Emmanuel
            </span>
            <span
              className="font-light text-[12px] text-muted-foreground whitespace-nowrap transform transition-all duration-1000 ease-in-out"
              style={{
                transform: toggleSider ? 'translateX(-100%)' : 'translateX(0)',
                opacity: toggleSider ? 0 : 1,
                transitionDelay: '50ms',
              }}
            >
              Software Developer
            </span>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="h-[calc(100vh-100px)] overflow-y-auto custom-scrollbar">
        <Menu
          // theme={theme === 'dark' ? 'dark' : 'light'}
          mode="inline"
          // inlineCollapsed={toggleSider}
          items={appNav.menuNavitem}
          className="!bg-transparent border-r-0 !mb-5 !text-[12px] transition-all duration-500 ease-in-out"
          defaultSelectedKeys={[]}
          selectedKeys={urlPath?.[1] === '' ? [] : [urlPath?.[1] ?? '']}
          onClick={handleMenuClick}
        />

        <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out`}>
          {!toggleSider && (
            <span
              className={`text-muted-faint-dark ml-2 text-[12px] transition-all duration-500 ease-in-out transform ${
                toggleSider ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              RESOURCES
            </span>
          )}

          <Menu
            theme={theme === 'dark' ? 'dark' : 'light'}
            mode="inline"
            // inlineCollapsed={toggleSider}
            items={appNav.resourcesNavItem}
            defaultSelectedKeys={[]}
            selectedKeys={urlPath?.[1] === '' ? [] : [urlPath?.[1] ?? '']}
            className="bg-transparent border-r-0 !mb-10 !text-[12px] transition-all duration-500 ease-in-out"
            onClick={handleMenuClick}
          />
        </div>

        <div className={`flex flex-col gap-2 transition-all duration-500 ease-in-out`}>
          {!toggleSider && (
            <span
              className={`text-muted-faint-dark ml-2 text-[12px] transition-all duration-500 ease-in-out transform ${
                toggleSider ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
            >
              CONNECT
            </span>
          )}

          <Menu
            theme={theme === 'dark' ? 'dark' : 'light'}
            mode="inline"
            // collapse={toggleSider}
            items={appNav.connectNavItem}
            onClick={handleConnectMenuClick}
            defaultSelectedKeys={[]}
            selectedKeys={urlPath?.[1] === '' ? [] : [urlPath?.[1] ?? '']}
            className="bg-transparent border-r-0 !mb-10 !text-[12px] transition-all duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Replace the existing theme toggle span with this */}
      <div className="fixed bottom-8 right-0 transform -rotate-90">
        <CustomThemeToggler theme={theme} setTheme={setTheme} />
      </div>
    </div>
  );
};

export default Sidebar;
