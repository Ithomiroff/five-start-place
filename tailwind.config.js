const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', flowbite.content()],
  theme: {
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      'blue-1': 'var(--blue-1)',
      'blue-2': 'var(--blue-2)',
      'blue-3': 'var(--blue-3)',
      'blue-4': 'var(--blue-4)',
      'gray-1': 'var(--gray-1)',
      'gray-2': 'var(--gray-2)',
      'gray-3': 'var(--gray-3)',
      'gray-4': 'var(--gray-4)',
      'gray-5': 'var(--gray-5)',
      'gray-6': 'var(--gray-6)',
      'red-1': 'var(--red-1)',
      'red-2': 'var(--red-2)',
      'red-3': 'var(--red-3)',
      'green-1': 'var(--green-1)',
      'green-2': 'var(--green-2)',
      'green-3': 'var(--green-3)',
    },
  },
  plugins: [flowbite.plugin()],
};
