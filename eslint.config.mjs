import {defineConfig} from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.mjs'],
    ignores: ['**/*.config.js', '**/*.test.mjs'],
    languageOptions: {
      globals: {
        ...globals.jest,
        process: "readonly",
        console: "readonly"
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
]);