module.exports = {
    env: {
      browser: true,
      es2020: true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 11,
      sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'no-extra-semi': "error",
        "react/jsx-key": [2, { "checkFragmentShorthand": true }],
        "react/prop-types": "off"
    }
  };