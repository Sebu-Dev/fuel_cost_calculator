import jsPlugin from '@eslint/js';
import tsEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': tsEslint
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...tsEslint.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];
