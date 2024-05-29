/** @type {import('tailwindcss').Config} */
const colors = {
  transparent: 'var(--color-transparent)',
  current: 'var(--color-current)',
  primary: 'var(--color-primary)',
  border: 'var(--color-border)',
  white: 'var(--color-white)',
  bg: {
    DEFAULT: 'var(--color-bg)',
    green: 'var(--color-bg-green)',
  },
}

const fontSize = {
  base: [
    'var(--text-base-font-size)',
    {
      lineHeight: 'var(--text-base-line-height)',
    },
  ],
}

const boxShadow = {
  sm: 'var(--shadow-sm)',
}
const screens = {
  xl: { max: '1551px' },
  lg: { max: '1131px' },
  md: { max: '903px' },
}

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    fontSize,
    boxShadow,
    screens,
    extend: {},
  },
  plugins: [],
}

