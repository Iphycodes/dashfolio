import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_shared/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/antd/dist/antd.css',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        minimal: '0 0px 12px 2px rgba(0, 0, 0, 0.05)',
        light: '0 2px 4px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-gradient':
          'linear-gradient(32deg, rgba(30,136,229,1) 33%, rgba(1,171,255,1) 74%, rgba(0,212,255,1) 94%)',
      },
      colors: {
        neutral: {
          800: '#1e1e1e',
          900: '#121212',
        },
        sider: {
          dark: '#1C1C1C',
        },
        transparent: 'transparent',
        blue: '#1e88e5',
        sky: 'rgba(30, 136, 229, 0.3)',
        background: 'hsl(var(--background))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
          faint: {
            dark: '#696969',
          },
        },
        border: 'hsl(var(--border))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
    },
  },
  plugins: [],
  // corePlugins:{
  //   preflight: false
  // }
};
export default config;
