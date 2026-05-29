/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      // Spread all default Tailwind colors first
      ...colors,
      // Override `sky` completely with Dr. Ramiro Mejía's brand blue #355C98
      sky: {
        50:  '#eef2f9',
        100: '#d6dff0',
        200: '#adbfe0',
        300: '#859ed1',
        400: '#5c7ec2',
        500: '#355C98',
        600: '#2b4a7a',
        700: '#20385c',
        800: '#16263d',
        900: '#0b131f',
      },
      // Brand palette alias
      primary: {
        50:  '#eef2f9',
        100: '#d6dff0',
        200: '#adbfe0',
        300: '#859ed1',
        400: '#5c7ec2',
        500: '#355C98',
        600: '#2b4a7a',
        700: '#20385c',
        800: '#16263d',
        900: '#0b131f',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in-left': 'slideInLeft 0.7s ease forwards',
        'slide-in-right': 'slideInRight 0.7s ease forwards',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
