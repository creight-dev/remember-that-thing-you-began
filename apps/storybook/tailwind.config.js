module.exports = {
  // prefix ui lib classes to avoid conflicting with the app
  prefix: "ui-",
  presets: [require("@rttyb/tailwind-preset")],
  content: ["./stories/**/*.{ts,tsx}", "./.storybook/decorators.tsx"],
};
