/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#e2e8f0',
        secondary: '#e2e8f0',
        light: '#f1f5f9',
        gray: '#DDDDDD',
        dark: '252525',
      },
    },
  },
  plugins: [require("daisyui")],
}
