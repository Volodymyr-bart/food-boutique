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
      mobile: "375px",
      tablet: "768px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Neue Montreal", "sans-serif"],
      },
      fontSize: {
        "3": "12px",
        "3.5": "14px",
        "4": "14px",
        "4.5": "18px",
        "6": "24px",
        "8": "32px",
        "10": "40px",
        "11": "44px",
      },
      lineHeight: {
        "3.5": "14px",
        "4.5": "18px",
        "11": "44px",
        "12": "48px",
      },
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
        primaryGrey: "#A3A3A3",
        secondaryBg: "#E2E3D9",
      },
      borderRadius: {
        "30": "30px",
      },
    },
  },
  plugins: [],
};
export default config;
