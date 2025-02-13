import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: '#ff66c4',
          hover: '#ff4db8',
        },
        secondary: '#ffde59',
        accent: '#ff914d',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        celandine: ['Celandine', 'sans-serif'],
        now: ['Now', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        neon: {
          '0%, 100%': {
            textShadow: '0 0 7px #ff66c4, 0 0 10px #ff66c4, 0 0 21px #ff66c4',
          },
          '50%': {
            textShadow: '0 0 14px #ff66c4, 0 0 20px #ff66c4, 0 0 42px #ff66c4',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        neon: 'neon 2.5s infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;