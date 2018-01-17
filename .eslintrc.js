module.exports = {
  root: true,
  parser: 'babel-eslint',
  'extends': 'eslint-config-react-app',
  plugins: [
    'flowtype',
  ],
  rules: {
    'no-console': 2,
    'no-debugger': 2,
    'flowtype/boolean-style': 2,
    'flowtype/no-dupe-keys': 2,
    'flowtype/no-mutable-array': 2,
    'flowtype/no-primitive-constructor-types': 2,
    'flowtype/no-types-missing-file-annotation': 2,
    'flowtype/no-weak-types': 2,
    'flowtype/object-type-delimiter': 2,
    'flowtype/require-valid-file-annotation': [
      2,
      'always',
      {
        'annotationStyle': 'line',
      },
    ],
    'flowtype/semi': 2,
  },
};
