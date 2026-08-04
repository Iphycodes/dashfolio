import '@/styles/globals.css';
import '@/styles/_override.scss';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ThemeProvider } from '@/_shared/theme-provider';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Ify Dev',
  description: 'Full Stack Software Developer',
  icons: { icon: '/asset/IfyDev-icon.ico' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat', // Optional CSS variable name
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`max-w-[100vw] ${montserrat.variable}`}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/asset/IfyDev-icon.ico" />
      </Head>
      <body className={''} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          // forcedTheme='dark'
          enableSystem={false}
          storageKey="dashfolio-theme-key"
          disableTransitionOnChange
        >
          <AntdRegistry>{children}</AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
