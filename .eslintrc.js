const {merge} = require('lodash');

module.exports = {
  extends: [
    '@anvilabs/eslint-config',
    '@anvilabs/eslint-config/babel',
    '@anvilabs/eslint-config/flowtype',
    '@anvilabs/eslint-config-react',
  ],
  rules: {
    // https://github.com/gajus/eslint-plugin-flowtype
    'flowtype/no-weak-types': 'off',
    'flowtype/require-types-at-top': 'off',
    // https://github.com/yannickcr/eslint-plugin-react
    'react/default-props-match-prop-types': 'off',
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/no-deprecated': 'off',
    'react/require-default-props': 'off',
  },
  overrides: [
    merge(
      {
        files: ['**/__tests__/*-test.js', '**/__mocks__/*.js'],
      },
      require('@anvilabs/eslint-config/jest')
    ),
    merge(
      {
        files: ['*.js', '.*.js'],
        excludedFiles: ['src/**/*.js'],
      },
      require('@anvilabs/eslint-config/script')
    ),
  ],
};
