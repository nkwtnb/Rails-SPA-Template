module.exports = {
  roots: [
    "<rootDir>"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  // tsへの変換設定
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest", {
        jsc: {
          parser: {
            syntax: "typescript", // ソースコードをtypescriptとしてパースする
            tsx: true, // jsx記法を許可する
          },
          transform: {
            react: {
              // 必須。省略すると "ReferenceError: React is not defined" が発生します
              runtime: "automatic",
            },
          }
        }
      }
    ]
  },
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "<rootDir>/__tests_config__/setupTests.ts"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules",
  ],
  transformIgnorePatterns: ["/node_modules"],
}