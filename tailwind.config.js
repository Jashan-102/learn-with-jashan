/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing: {
      '0': '0',
      '1': '.125rem',
      '2': '.25rem',
      '3': '.5rem',
      '4': '.75rem',
      '5': '1rem',
      '6': '1.25rem',
      '7': '1.5rem',
      '8': '2rem',
      '9': '2.5rem',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
