module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'prettier',
    "react-hooks",
    "@typescript-eslint",
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        "import/no-unresolved": "error",
        'no-shadow': 'off',
        'no-undef': 'off',
      },
      "settings": {
        "import/resolver": {
          "typescript": {}
        }
      }
    },
  ],
};
