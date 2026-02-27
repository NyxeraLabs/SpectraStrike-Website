import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1920px',
        '4xl': '2560px'
      },
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        secondary: 'rgb(var(--secondary-foreground) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surfaceElevated: 'rgb(var(--surface-elevated) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        hover: 'rgb(var(--surface-elevated) / <alpha-value>)',
        primary: 'rgb(var(--primary) / <alpha-value>)',
        primaryHover: 'rgb(var(--primary-hover) / <alpha-value>)',
        electric: 'rgb(var(--electric) / <alpha-value>)'
      },
      boxShadow: {
        soft: '0 18px 38px -28px rgb(var(--electric) / 0.28), 0 12px 26px -24px rgb(0 0 0 / 0.7)',
        layered: 'inset 0 1px 0 rgb(255 255 255 / 0.04), 0 24px 52px -30px rgb(var(--primary) / 0.34), 0 12px 24px -24px rgb(0 0 0 / 0.75)'
      },
      fontFamily: {
        sans: ['"Avenir Next"', '"Segoe UI"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        brand: ['Orbitron', '"Avenir Next"', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
