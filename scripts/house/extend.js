const path = require('path')

module.exports = runner => {
  runner.webpackBuilder.extend(webpack => {
    webpack.resolve.alias = {
      '@utils': path.resolve(process.cwd(), './utils'),
      '@packages': path.resolve(process.cwd(), './packages')
    }
    return webpack
  })
}
