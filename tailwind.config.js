const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#183993',
          2: '#E9EFFE',
          3: '#101828',
        },
        gray: {
          1: '#667085',
          2: '#344054',
        },
        red: {
          1: '#F04438',
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
