module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
  },
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended", "google", "plugin:sonarjs/recommended"],
  rules: {
    quotes: ["error", "double"],
  },
  plugins: ["sonarjs"],
};
