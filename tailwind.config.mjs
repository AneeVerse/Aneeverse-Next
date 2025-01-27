import { Rock_Salt } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       Rock_Salt: ['Rock Salt', 'cursive'],
      },
      colors: {
        primary:{
          100: "#E0F7FA",
          500: "#EBFAFE",
          900: "#073742",
        },
        secondary: {
          100: "#073742",
          500: "#073742",
          900: "#FF6F00",
        },

      
        orange: {
          100: "#ffe3d3",
          900: "#ff6f00",
        },
      },
    },
  },
  plugins: [],
};
