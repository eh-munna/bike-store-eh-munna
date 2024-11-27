import pluginJs from '@eslint/js'; // ESLint core configuration
import tseslint from '@typescript-eslint/eslint-plugin'; // TypeScript ESLint plugin
import tsParser from '@typescript-eslint/parser'; // TypeScript parser
import globals from 'globals'; // Globals for browser environments

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'], // Lint JavaScript and TypeScript files
    ignores: ['node_modules/**', 'dist/**'], // Ignore node_modules and dist directories
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      parserOptions: {
        ecmaVersion: 2021, // ECMAScript version to use
        sourceType: 'module', // Enable ES modules
      },
      globals: globals.browser, // Define browser globals
    },
    ...pluginJs.configs.recommended, // Use ESLint's recommended settings
    plugins: {
      '@typescript-eslint': tseslint, // Enable TypeScript linting
      prettier: 'eslint-plugin-prettier', // Integrate Prettier with ESLint
    },
    rules: {
      'no-unused-vars': 'error', // Disallow unused variables
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }], // Prefer const over let
      'no-unused-expressions': 'error', // Disallow unused expressions
      'no-var': 'error', // Disallow var declarations
      'no-console': 'warn', // Warn about console usage
      'prettier/prettier': 'error', // Enforce Prettier formatting
      'no-undef': 'error' // ensures that all variables must be defined, rather than remain undefined
    },
  },
];
