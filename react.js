module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  plugins: ['react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
      },
    ],
  }
}
