import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "center-lg": "0px 0px 20px 10px rgba(0,0,0,0.3)",
        "center-sm": "0px 0px 15px 3px rgba(0,0,0,0.3)",
      }
    },
  },
  plugins: [
    flowbite.content(),
  ],
};
export default config;
