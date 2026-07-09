/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts", "**/__tests__/**/*.ts"],
  clearMocks: true,
};