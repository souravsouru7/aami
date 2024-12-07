/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#3b82f6',
        },
        secondary: {
          600: '#9333ea',
        },
      },
    },
  },
  plugins: [],
}