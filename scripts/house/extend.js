const path = require('path')

module.exports = runner => {
  runner.webpackBuilder.extend(webpack => {
    webpack.resolve.alias = {
      '@freshes': path.resolve('./packages')
    }
    return webpack
  })
}
