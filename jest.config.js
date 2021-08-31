module.exports = {
  // Your normal jest config settings
  testPathIgnorePatterns: ["<rootDir>/cypress/"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
