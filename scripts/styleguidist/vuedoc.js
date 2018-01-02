const path = require('path')

module.exports = {
  components: path.resolve(__dirname, '../../packages/**/*.vue'),
  ignore: [
    '**/node_modules/**'
  ],
  styleguideDir: path.resolve(__dirname, '../../docs/vue'),
  webpackConfig: {
    resolve: {
      alias: {
        '@humans': path.resolve(__dirname, '../../packages')
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
