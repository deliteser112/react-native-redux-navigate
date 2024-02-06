module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/react-hooks/dont-cleanup-after-each.js',
  ],
};
