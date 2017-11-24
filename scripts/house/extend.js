const path = require('path')

module.exports = runner => {
  runner.webpackBuilder.extend(webpack => {
    webpack.resolve.alias = {
      '@freshes': path.resolve('./packages')
    }
    return webpack
  })

  runner.webpackBuilder.addRule({
    test: /\.(js|vue)$/,
    use: [
      {
        loader: '@freshes/style-import-loader',
        options: {
          scoped: '@freshes/[\\w-]+'
        }
      }
    ]
  })
}
