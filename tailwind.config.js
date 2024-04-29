import { colors } from "./src/styles/color"
import { fontFamily } from "./src/styles/font-family"


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      colors,
      fontFamily

    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
