const daisyui = require('daisyui');
const tailwindcssType = require('@tailwindcss/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        circuit: "url('./assets/circuit.jpg')",
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark', 'pastel', 'dracula'],
  },
  plugins: [tailwindcssType, daisyui],
};
