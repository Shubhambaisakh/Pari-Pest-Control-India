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
          50:  '#f7ffd0',
          100: '#eeff99',
          200: '#d9f542',
          500: '#C6E700',   // exact primary
          600: '#A8D800',   // hover gradient
          700: '#7a9900',   // dark
          900: '#3a4a00',   // darkest
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
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
