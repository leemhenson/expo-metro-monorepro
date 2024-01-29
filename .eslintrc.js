/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["**/build/**/*", "**/dist/**/*", "**/node_modules/**/*"],
  plugins: ["@typescript-eslint", "import", "simple-import-sort", "json-files"],
  rules: {
    "no-console": ["warn", { allow: ["error"] }],
    quotes: ["error", "double", { avoidEscape: true }],
    "import/no-unresolved": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
  },
  overrides: [
    {
      files: ["**/package.json"],
      parser: "espree",
      rules: {
        "json-files/eol-last": "error",
        "json-files/sort-package-json": "error",
      },
    },
  ],
};
