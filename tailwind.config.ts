import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f2fce8',
          100: '#dff5c0',
          200: '#c2eb8a',
          500: '#84CC4A',   // primary — medium lighter green
          600: '#6ab535',   // hover
          700: '#2d8a4e',   // dark green
          900: '#1A6B35',   // deep forest green
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      keyframes: {
        fadeSlide: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        countUp: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeSlide: 'fadeSlide 0.6s ease forwards',
      },
    },
  },
  plugins: [],
};

export default config;
