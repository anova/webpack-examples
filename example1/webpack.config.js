const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  'entry': path.resolve(__dirname, 'src/index.js'),
  'output': {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name]-[hash:5].js"
  },
  'plugins': [
    new HtmlWebpackPlugin({
      title: "Webpack html output",
      filename: "index.html",
      output: path.resolve(__dirname, 'dist'),
    }),
    new CleanWebpackPlugin(
      path.resolve(__dirname, 'dist')
    )
  ]
}