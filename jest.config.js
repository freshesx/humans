module.exports = {
  mapCoverage: true,
  collectCoverage: true,
  coverageDirectory: './test/coverage',
  moduleFileExtensions: [
    'js',
    'vue'
  ],
  transform: {
    "^.+\\.js$": "./node_modules/babel-jest",
    '.*\\.(vue)$': './node_modules/vue-jest'
  }
}
