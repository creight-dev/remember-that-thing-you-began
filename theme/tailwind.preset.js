const defaultTheme = require("tailwindcss/defaultTheme")
const {
  formatRadixColorScaleForTailwind
} = require("./formatRadixColorScaleForTailwind")
const { slateDark } = require("@radix-ui/colors")
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        neutral: formatRadixColorScaleForTailwind(slateDark)
      },
      fontFamily: {
        sans: ["Lexend", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
}
