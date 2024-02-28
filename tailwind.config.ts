import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'rgb(3 7 18)'
      },
      textColor: {
        primary: 'rgb(3 7 18)'
      }
      


    },
  },
  plugins: [],
};
export default config;
