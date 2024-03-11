/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#139DF2",
        gray: "#ABB2BF",
        background: "#282C33",
      },
    },
  },
  plugins: [],
};
