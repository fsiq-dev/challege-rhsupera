module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:react-hooks/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'prettier', 'unused-imports'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'error',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'comma-dangle': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    quotes: ['error', 'single']
  }
}
