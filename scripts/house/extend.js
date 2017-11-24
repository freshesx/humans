const path = require('path')

module.exports = runner => {
  runner.webpackBuilder.extend(webpack => {
    webpack.resolve.alias = {
      '@humans': path.resolve('./packages')
    }
    return webpack
  })

  runner.webpackBuilder.addRule({
    test: /\.(js|vue)$/,
    use: [
      {
        loader: '@freshes/style-import-loader',
      }
    ]
  })
}
