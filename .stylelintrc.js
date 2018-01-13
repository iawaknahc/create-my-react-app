module.exports = {
  extends: 'stylelint-config-recommended',
  plugins: [
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['mixin', 'include'],
    }],
    'plugin/no-unsupported-browser-features': true,
  },
};
