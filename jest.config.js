module.exports = {
  roots: ["<rootDir>/src"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|ts|tsx)$": "ts-jest",
  },
};
