module.exports = {
    env: {
      browser: true,
      es2021: true
    },
    extends: [
      'plugin:react/recommended',
      'standard',
      "prettier"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 12,
      sourceType: 'module'
    },
    plugins: [
      'react',
      '@typescript-eslint'
    ],
    rules: {
      // 1: Turn off rules that are no longer necessary in React 17 and in Next.js
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      // 2: We do not need to use prop types with TypeScript
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
    },
    settings: {
      react: {
        version: "latest"
      }
    }
  }