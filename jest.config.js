/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: ['**/?(*.)+(test).{js,jsx,ts,tsx}'],
  collectCoverage: true,
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['./src/**'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/imageTransform.js',
    '^.+\\.jpg$': '<rootDir>/imageTransform.js',
    '^.+\\.png$': '<rootDir>/imageTransform.js',
  },
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/styleMock.js',
    '^components/(.*)': '<rootDir>/src/components/$1',
    '^assets/(.*)': '<rootDir>/src/assets/$1',
  },
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'index.tsx',
    'reportWebVitals.ts',
    'setupTests.ts',
    'a11yTestHelper.ts',
    'App.tsx',
  ],
};
