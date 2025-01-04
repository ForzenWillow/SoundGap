/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable dark mode with a class
  theme: {
    extend: {
      colors: {
        primary: '#570cac',
        secondary: '#A294F9',
        darkBg: '#111827',
        darkText: '#ffffff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
