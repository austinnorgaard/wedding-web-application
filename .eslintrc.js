module.exports = {
    env: {
      browser: true,
      es2020: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: false
      },
      ecmaVersion: 11,
      sourceType: 'module'
    },
  };