module.exports = {
  env: {
    commonjs: true,
    browser: true,
    es6: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  globals: {
    chrome: 'readonly'
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'comma-dangle': ['error', 'never']
  }
}
