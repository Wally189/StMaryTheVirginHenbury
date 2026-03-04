import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#f8f5ef",
          100: "#f0e9dc",
          200: "#dfd1b8",
          300: "#cab796",
          700: "#5d5547",
          900: "#2f2a21",
        },
        harbour: {
          100: "#dfe9e8",
          300: "#9bb8b5",
          500: "#5c807f",
          700: "#2f4f54",
          900: "#1f3437",
        },
        nave: {
          100: "#e5ecf3",
          300: "#adc0d9",
          500: "#6c8fb4",
          700: "#345876",
          900: "#1f364a",
        },
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Source Sans 3", "Verdana", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 16px rgba(31, 54, 74, 0.08)",
      },
    },
  },
  plugins: [forms],
};
