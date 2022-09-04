/**
 * Based on Airbnb JavaScript Base Style to extend
 */
module.exports = {
  extends: ['airbnb-base'],
  rules: {
    // strings must use single quote
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    // not use semi
    semi: ['error', 'never'],
    // use console to display warning
    'no-console': 'warn',
    // allow constant expressions in conditions
    'no-constant-condition': 'off',
    // http://eslint.cn/docs/rules/no-control-regex
    'no-control-regex': 'off',
    // allow debugger
    'no-debugger': 'off',
    // can also use named export when only one module is exported
    'import/prefer-default-export': 'off',
    // no unused vars show warning
    'no-unused-vars': 'warn',
    // don't need comma dangle
    'comma-dangle': 'off'
  }
}
