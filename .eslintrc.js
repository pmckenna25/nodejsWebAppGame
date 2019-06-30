module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  plugins: [
    'prettier',
  ],
  rules: {
    'no-console': 2,
    'no-process-env': 2,
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'trailingComma': 'all',
      },
    ],
  },
  globals: {
    provider: "readonly"
  }
};

