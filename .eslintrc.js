module.exports = {
  extends: [require.resolve('zw-standard/eslint-config/typescript/index')],
  rules: {
    // 'curly': ['warn', 'multi-or-nest', 'consistent'], // 只有一条语句不要加括号
    // 'curly': ['error', 'all'], // 全部都要加上大括号
    'arrow-parens': 'off',
    'curly': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/quotes': 'off',
  },
}
