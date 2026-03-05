import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#ffffff",
          100: "#faf9fc",
          200: "#ece9f4",
          300: "#ded9ec",
          700: "#5d5670",
          900: "#272234",
        },
        harbour: {
          100: "#f4edf7",
          300: "#d6bfe3",
          500: "#b68bc8",
          700: "#9669a9",
          900: "#70427f",
        },
        nave: {
          100: "#ede9fb",
          300: "#b8afe3",
          500: "#5e4db2",
          700: "#2c238f",
          900: "#100b74",
        },
      },
      fontFamily: {
        heading: ["Cabin", "Segoe UI", "sans-serif"],
        body: ["Open Sans", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 8px 24px rgba(19, 54, 84, 0.06)",
      },
    },
  },
  plugins: [forms],
};
