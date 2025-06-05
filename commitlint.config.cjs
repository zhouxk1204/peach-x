module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', ['docs', 'playground', 'components', 'theme', 'resolver', 'constants', 'scripts', '*']]
  }
}