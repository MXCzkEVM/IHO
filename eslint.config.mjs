import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
  rules: {
    'react/no-unstable-context-value': 'off',
    'react-refresh/only-export-components': 'off',
    'react-dom/no-missing-button-type': 'off',
    'react/prefer-destructuring-assignment': 'off',
  },
})
