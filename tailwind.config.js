/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0028',
        secondary: '#1A0D45',
        tertiary: '#05A3CC',
        white: '#F9F9F9',
      },
    },
  },
  plugins: [],
}

