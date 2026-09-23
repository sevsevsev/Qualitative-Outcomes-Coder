import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.vercel/**'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // The app deliberately passes through arbitrary/unknown CSV columns
      // (see types.ts BatchItemResult/AtomicBatchItem) -- `any` there is a
      // conscious choice, not an oversight.
      '@typescript-eslint/no-explicit-any': 'off',
      // ignoreRestSiblings: the codebase's common pattern for "discard these
      // known fields, keep the rest" is `const { a, b, ...rest } = obj`,
      // which necessarily leaves a/b unused -- that's the point, not a bug.
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }],
    },
  },
];
