var npmPackage = require('../../package.json')

module.exports = {
  NODE_ENV: '"production"',
  VERSION: JSON.stringify(npmPackage.version)
}
