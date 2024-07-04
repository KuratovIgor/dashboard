// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'no-duplicate-imports': ['error', { 'includeExports': true }],
      'sort-imports': ['error'],
      'vue/no-async-in-computed-properties': ['error'],
      'vue/comma-spacing': ['error'],
      'vue/array-bracket-spacing': ['error'],
      '@typescript-eslint/no-extraneous-class': ['off'],
    },
  }
)
