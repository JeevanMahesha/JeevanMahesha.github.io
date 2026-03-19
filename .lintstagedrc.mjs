/**
 * @see https://github.com/lint-staged/lint-staged#configuration
 * @type {import("lint-staged").Configuration}
 */
const config = {
  "*.{js,jsx,mjs,cjs,ts,tsx}": ["prettier --write", "eslint --fix"],
  "*.{json,css,md}": "prettier --write",
};

export default config;
