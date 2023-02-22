const defaultTheme = require("tailwindcss/defaultTheme");
const { formatRadixColorScaleForTailwind } = require("../utils/colors");
const {
  mauveDark,
  cyanDark,
  mintDark,
  redDark,
  amberDark,
  purpleDark,
  pinkDark,
  blueDark,
  whiteA,
  orangeDark,
  limeDark,
} = require("@radix-ui/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    colors: {
      white: "#fff",
      primary: formatRadixColorScaleForTailwind(limeDark),
      neutral: formatRadixColorScaleForTailwind(mauveDark),
      accent: formatRadixColorScaleForTailwind(cyanDark),
      pink: formatRadixColorScaleForTailwind(pinkDark),
      purple: formatRadixColorScaleForTailwind(purpleDark),
      orange: formatRadixColorScaleForTailwind(orangeDark),
      blue: formatRadixColorScaleForTailwind(blueDark),
      positive: formatRadixColorScaleForTailwind(mintDark),
      warning: formatRadixColorScaleForTailwind(amberDark),
      destructive: formatRadixColorScaleForTailwind(redDark),
      overlay: formatRadixColorScaleForTailwind(whiteA),
    },
    extend: {
      fontFamily: {
        sans: ["SoraVariable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
