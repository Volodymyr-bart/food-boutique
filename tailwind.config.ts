import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./widgets/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryWhite: "#E8E8E2",
        secondaryWhite: "#FAFAFA",
        primaryBlack: "#010101",
        primaryGreen: "#6D8434",
        secondaryGreen: "#586F1F",
      },
      borderRadius: {
        "30": "30px",
      },
    },
  },
  plugins: [],
};
export default config;
