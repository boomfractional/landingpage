/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7FDFD0',
          dark: '#6BC9BB',
          light: '#93EFE0'
        },
        secondary: '#FFB156',
        dark: '#1A1A1A',
        light: '#F5F5F5'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif']
      },
      backgroundColor: {
        dark: {
          DEFAULT: '#121212',
          paper: '#1E1E1E'
        }
      }
    },
  },
  plugins: [],
};