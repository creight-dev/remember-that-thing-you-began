const defaultTheme = require("tailwindcss/defaultTheme")
const {
  formatRadixColorScaleForTailwind
} = require("./formatRadixColorScaleForTailwind")
const {
  slateDark,
  mauveDark,
  cyanDark,
  crimsonDark,
  mintDark,
  redDark
} = require("@radix-ui/colors")
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        neutral: formatRadixColorScaleForTailwind(mauveDark),
        primary: {
          50: "#f5ffdb",
          100: "#e5ffae",
          200: "#d5ff7d",
          300: "#c6ff4b",
          400: "#b5ff1a",
          500: "#9ce600",
          600: "#78b300",
          700: "#558000",
          800: "#324d00",
          900: "#0e1b00"
        },
        accent: formatRadixColorScaleForTailwind(cyanDark),
        crimson: formatRadixColorScaleForTailwind(crimsonDark),
        mint: formatRadixColorScaleForTailwind(mintDark),
        red: formatRadixColorScaleForTailwind(redDark)
      },
      fontFamily: {
        sans: ["SoraVariable", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
}
