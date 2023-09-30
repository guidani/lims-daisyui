import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./UI/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "emerald",
      "dark",
      {
        mytheme: {
          primary: "#03375e",

          secondary: "#fff3ba",

          accent: "#dfb9f7",

          neutral: "#191721",

          "base-100": "#333538",

          info: "#4787e6",

          success: "#1dd7ac",

          warning: "#e0b50b",

          error: "#f33f63",
        },
      },
    ],
  },
};
export default config;
