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
        primary: '#191717',
        secondary: '#F0ECE5',
        base: '#FFFFFF',
        invertPrimary: '#e6e8e8'
      },
      backgroundSize: {
        '100%': '100%'
      },
      textColor: {
        primary: '#191717',
        secondary: '#F0ECE5'
      }
      


    },
  },
  plugins: [],
};
export default config;
