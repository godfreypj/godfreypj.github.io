module.exports = {
  // ...
  jest: {
    configure: {
      roots: ['<rootDir>/src'],
      testEnvironment: 'jsdom',
      testMatch: ['**/?(*.)+(a11y|test).{js,jsx,ts,tsx}'],
      collectCoverage: true,
      coverageReporters: ['html', 'lcov', 'text'],
      coverageThreshold: {
        global: {
          statements: 80,
          branches: 80,
          functions: 80,
          lines: 80,
        },
      },
      coveragePathIgnorePatterns: ['/node_modules/', 'index.tsx', 'reportWebVitals.ts'],
    },
  },
};
