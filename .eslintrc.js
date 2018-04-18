module.exports = {
  root: true,
  extends: ['plugin:vue/recommended'],
  rules: {
    indent: ['error', 2, { MemberExpression: 'off' }]
  }
}