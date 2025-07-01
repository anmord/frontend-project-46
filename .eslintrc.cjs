module.exports = {
  env: {
    browser: true,
    jest: true,
    es2021: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 2021, 
    sourceType: 'module',
  },
  rules: {
    'semi': ['error', 'never'], 
    'comma-dangle': ['error', 'always-multiline'], 
  },
}
