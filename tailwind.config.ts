import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0068B6',
        secondary: '#D9EAF5',
        success: '#00376E',
        placeholder: '#989898',
        'color-border': '#C2C2C2',
        'color-2rd-border': '#E1E1E1',
        'color-label': '#5D5E61',
        'color-base': '#333333',
        'color-selected': '#00376E',
        'color-error': '#DB0F1F',
        'color-gray': '#EFEFEF',
        'color-checked': '#FFFCDE',
        error: '#FAEDEF',
        complete: '#08781F',
        'child-item': '#0068B699',
      },
      screens: {
        pc: '1441px',
        tablet: '750px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'no-auth': 'url("/images/bg-no-auth.png")',
      },
      animation: {
        'text-appearance': 'text-focus-in 0.5s both',
      },
      keyframes: {
        'text-focus-in': {
          '0%': {
            filter: 'blur(12px)',
            opacity: '0',
          },
          '100%': {
            filter: ' blur(0px)',
            opacity: '1',
          },
        },
      },
      boxShadow: {
        btn: '0px 5px 6px 0px #00000026',
        popover: '0px 8px 10px 0px #00000026',
        option: '0px 5px 6px 0px #00000029',
      },
      lineHeight: {
        btn: '22px',
      },
      minHeight: {
        tablet: 'calc(100vh - 64px - 40px)',
        header: '64px',
      },
      height: {
        'content-screen': 'calc(100vh - 64px)',
      },
      maxWidth: {
        'content-screen': 'calc(100vw - 175px)',
        'content-screen-full': 'calc(100vw - 50px)',
        'content-screen-table-slide':
          'calc(100vw - 160px - 224px - 80px - 36px)',
        'content-screen-table':
          'calc(100vw - 160px - 224px - 80px - 36px - 50px)',
      },
    },
  },
  plugins: [
    nextui(),
    'prettier-plugin-tailwindcss',
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.hidden-scroll::-webkit-scrollbar': {
          display: 'none',
        },
      });
    }),
  ],
  safelist: ['rotate-0'],
};
export default config;
