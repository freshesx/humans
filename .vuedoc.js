const path = require('path')

module.exports = {
  components: 'packages/**/*.vue',
  styleguideDir: 'docs/vue',
  webpackConfig: {
    resolve: {
      alias: {
        '@humans': path.resolve('./packages')
      }
    },
    module: {
      rules: [
        // Vue loader
        {
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: 'vue-loader'
        },
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
  }
}
