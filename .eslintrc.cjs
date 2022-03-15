/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  'rules': {
    'quotes': [2, 'single'],
    'ban-ts-comment': "false"
  },
  'root': true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended'
  ],
  'env': {
    'vue/setup-compiler-macros': true
  }
}
