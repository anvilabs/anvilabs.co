module.exports = {
  extends: ['anvilabs', 'anvilabs/jest', 'anvilabs/lodash', 'anvilabs/react'],
  rules: {
    'no-magic-numbers': 0,
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,
    'react/require-default-props': 0,
  },
};
