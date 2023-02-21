// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./popup/*.{ts,tsx}", "./components/shared/*.{ts,tsx}"], // your contents-script files
  presets: [require("../theme/tailwind.preset.js")],
  plugins: []
}
