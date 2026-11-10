/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: '#7c3aed',
          indigo: '#4f46e5',
          blue: '#2563eb',
        },
      },
    },
  },
  plugins: [],
};