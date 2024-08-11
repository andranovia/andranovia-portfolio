import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '425px',
        'md': '576px',
        'lg': '768px',
        'xl': '1024px',
        '1xl': '1279.98px',
        '2xl': '1440px',
      },
      backgroundColor: {
        primary: "#021526",
        secondary: "#F0ECE5",
        base: "#FFFFFF",
        invertPrimary: "#e6e8e8",
      },
      backgroundSize: {
        "100%": "100%",
      },
      textColor: {
        primary: "#201D30",
        secondary: "#F0ECE5",
      },
      fontFamily: {
        metroPhotograph: ["MetroPhotograph", "sans-serif"],
        arcane: ["Arcane Nine", "sans-serif"],
        bebasNeue: ["Bebas Neue", "sans-serif"],
      },
      maxWidth: {

        'base-content':'300px', 
        'xs-content': '320px',
        'sm-content': '352px',
        'md-content': '512px',
        'lg-content': '648px',
        'xl-content': '992px',
        'max-container': '1512px',
      }
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
export default config;
