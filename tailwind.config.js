const flowbite = require('flowbite-react/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    flowbite.content(),
    './src/**/*.{js,jsx,ts,tsx}', // Ensure your paths are included here
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      card: {
        root: {
          base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
          children: 'flex h-full flex-col justify-center gap-4 p-6',
          horizontal: {
            off: 'flex-col',
            on: 'flex-col md:max-w-xl md:flex-row'
          },
          href: 'hover:bg-gray-100 dark:hover:bg-gray-700'
        },
        img: {
          base: '',
          horizontal: {
            off: 'rounded-t-lg',
            on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
          }
        }
      }
    }
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
