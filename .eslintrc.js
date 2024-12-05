module.exports = {
    env: {
      browser: true,
      es2020: true
    },
    extends: ['next'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 11,
      sourceType: 'module'
    },
    plugins: ['next'],
    rules: {
        "react/no-unescaped-entities": "off",
        "@next/next/no-page-custom-font": "off",
        "react/prop-types": "off",

    }
  };