module.exports = {
  // Airbnb JavaScript Base Style
  extends: ["airbnb-base"],
  rules: {
    // strings must use single quote.
    quotes: [
      "error",
      "single",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
  },
};
