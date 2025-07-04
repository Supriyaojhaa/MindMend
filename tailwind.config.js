/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["sans-serif"],
        'secondary': ["Syne", "sans-serif"]
      },
      colors: {
        'herobg': '#0e1122',
        'para': 'rgb(0 0 0 /80%)',
        'primary': 'text-rose-400"'
      }
    },
  },
  plugins: [],
}

