/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        gray: "#ABB2BF",
        background: "#282C33",
      },
    },
  },
  plugins: [],
};
