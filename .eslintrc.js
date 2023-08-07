module.exports = {
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:jsx-a11y/recommended',
    'airbnb',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    'comma-style': ['error', 'last'],
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/jsx-props-no-spreading': 0,
    'no-param-reassign': 0,
    'no-console': 'off',
    'react/react-in-jsx-scope': 0,
    semi: 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'jsx-a11y/no-redundant-roles': 0,
  },
  settings: {
    'import/resolver': {
      typescript: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
