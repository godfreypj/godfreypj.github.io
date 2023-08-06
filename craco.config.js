const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src',
        /* tsConfigPath should point to the file where "baseUrl" and "paths"
             are specified */
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  jest: {
    configure: {
      roots: ['<rootDir>/src'],
      testEnvironment: 'jsdom',
      testMatch: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
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
