/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        fontFamily: {
          'tiny5': ['Tiny5', 'sans-serif'],
        },
      },
    },
  plugins: [],
}