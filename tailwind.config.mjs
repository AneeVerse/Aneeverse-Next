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
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px'
      },
      maxWidth: {
        container: '1536px',
        card: '300px'
      },
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
