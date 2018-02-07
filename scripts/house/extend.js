const path = require('path')

module.exports = runner => {
  runner.webpackBuilder.extend(webpack => {
    webpack.resolve.alias = {
      '@freshes/human': path.resolve('./dist/main.esm.js')
    }
    return webpack
  })
}
