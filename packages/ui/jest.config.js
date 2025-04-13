module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
