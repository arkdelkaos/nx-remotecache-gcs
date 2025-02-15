module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['google', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'warn',
      { printWidth: 100, semi: false, singleQuote: true, trailingComma: 'all' },
    ],
    'require-jsdoc': 'off',
  },
}
