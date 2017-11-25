const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : './src/script/main.js',
  output: {
    path : './dist',
    filename : 'js/[name]-bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}
