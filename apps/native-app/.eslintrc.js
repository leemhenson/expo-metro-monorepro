/** @type {import('eslint').Linter.Config} */
module.exports = {
  settings: {
    // See https://github.com/facebook/react-native/issues/28549#issuecomment-657249702
    "import/ignore": ["node_modules/react-native/index\\.js$"],
  },
};
