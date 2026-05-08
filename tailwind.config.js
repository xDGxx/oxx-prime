/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          oxx: '#e81c1c',
          dark: '#a81010',
          glow: '#ff2222',
        },
        black: {
          mid: '#0d0d0d',
          card: '#111111',
        }
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        barlow: ['"Barlow Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}