/* global module */
module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 12,
  },
  'plugins': [
    'eslint-plugin-html',
    'eslint-plugin-optional-comma-spacing',
    'eslint-plugin-one-variable-per-var',
    'eslint-plugin-require-trailing-comma',
  ],
  'extends': 'eslint:recommended',
  'rules': {
    'no-alert': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-const-assign': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': 0,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 0,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-octal-escape': 2,
    'no-process-exit': 2,
    'no-proto': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-unused-expressions': 2,
    'no-use-before-define': 0,
    'no-var': 2,
    'no-with': 2,
    'prefer-const': 2,
    'consistent-return': 2,
    'curly': [2, 'all'],
    'no-extra-parens': [2, 'functions'],
    'eqeqeq': 2,
    'new-cap': 2,
    'new-parens': 2,
    'semi-spacing': [2, {'before': false, 'after': true}],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'yoda': [2, 'never'],

    'brace-style': [2, '1tbs', { 'allowSingleLine': false }],
    'camelcase': [0],
    'comma-spacing': 0,
    'comma-dangle': 0,
    'comma-style': [2, 'last'],
    'optional-comma-spacing/optional-comma-spacing': [2, {'after': true}],
    'dot-notation': 0,
    'eol-last': [0],
    'global-strict': [0],
    'key-spacing': [0],
    'no-comma-dangle': [0],
    'no-irregular-whitespace': 2,
    'no-multi-spaces': [0],
    'no-loop-func': 0,
    'no-obj-calls': 2,
    'no-redeclare': [0],
    'no-shadow': [0],
    'no-undef': [2],
    'no-unreachable': 2,
    'one-variable-per-var/one-variable-per-var': [2],
    'quotes': [2, 'single'],
    'require-atomic-updates': 0,
    'require-trailing-comma/require-trailing-comma': [2],
    'require-yield': 0,
    'semi': [2, 'always'],
    'strict': [2, 'global'],
    'space-before-function-paren': [2, 'never'],
    'keyword-spacing': [1, {'before': true, 'after': true, 'overrides': {}} ],
  },
};

