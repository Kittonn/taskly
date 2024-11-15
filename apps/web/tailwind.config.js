/** @type {import('tailwindcss').Config} */

import sharedConfig from '@repo/tailwind-config';

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [sharedConfig],
};
