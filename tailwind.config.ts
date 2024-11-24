import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ensure it scans the app folder
    "./components/**/*.{js,ts,jsx,tsx}", // Include components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5", // Indigo
        secondary: "#f97316", // Orange
        accent: "#34d399", // Green
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
