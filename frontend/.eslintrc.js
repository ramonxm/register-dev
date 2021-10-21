module.exports = {
  env: {
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'import/named': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
