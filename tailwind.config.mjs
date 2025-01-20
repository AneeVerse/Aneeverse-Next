/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#f3e8ff",
          500: "#9b5de5",
          900: "#540d6e",
        },
        pink: {
          100: "#ffe3ed",
          900: "#ff0f57",
        },
        yellow: {
          100: "#fff9c4",
          900: "#ffd600",
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
