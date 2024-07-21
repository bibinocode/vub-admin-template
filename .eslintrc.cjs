/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')
/** unocss eslint config  */
require('@unocss/eslint-config/flat')

module.exports = {
  root: true,
  'extends': [
    "@unocss",
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  plugin: [
    "import-helpers/order-imports": [
      "warn",
      {
        "newlines-between": "always",
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ]
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    "@unocss/order": "warn",
    "@unocss/order-attributify": "warn"
  }
}
