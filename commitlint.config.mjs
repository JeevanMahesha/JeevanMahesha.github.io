/* eslint-disable import/no-anonymous-default-export */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 150],
    "body-max-line-length": [2, "always", 150],
  },
};
