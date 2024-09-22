/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'bg-amber-100',
    'bg-emerald-400',
    'text-emerald-400',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
}

