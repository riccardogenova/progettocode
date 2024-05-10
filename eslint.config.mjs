/** @format */

import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
    ignores: ['node_modules', '**/*.config.js', '!**/eslint.config.js'],
  },
  pluginJs.configs.recommended,
];
