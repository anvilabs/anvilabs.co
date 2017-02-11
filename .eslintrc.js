module.exports = {
  extends: [
    'anvilabs',
    'anvilabs/jest',
    'anvilabs/lodash',
    'anvilabs/react',
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/no-webpack-loader-syntax': 0,

    'jsx-a11y/no-static-element-interactions': 0,

    'promise/no-return-wrap': 0,
    'promise/prefer-await-to-then': 0,
    'promise/prefer-await-to-callbacks': 0,
  },
};
