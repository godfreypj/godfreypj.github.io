const daisyui = require('daisyui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        greenYellow: {
          primary: '#E76B47',
          secondary: '#40A078',
          accent: '#72ab49',
          neutral: '#F2DD6A',
          'base-100': '#2E3E3C',
        },
        grey: {
          primary: '#222831',
          secondary: '#B55400',
          accent: '#72ab49',
          neutral: '#DDDDDD',
          'base-100': '#222831',
        },
      },
      'light',
      'dark',
      'pastel',
      'dracula',
    ],
  },
  plugins: [daisyui],
};
