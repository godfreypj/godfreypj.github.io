const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      'light',
      'dark',
      'pastel',
      'dracula',
    ],
  },
  plugins: [daisyui],
};
