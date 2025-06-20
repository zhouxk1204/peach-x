module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', []],
    'scope-case': [2, 'always', 'lower-case']
  }
};
