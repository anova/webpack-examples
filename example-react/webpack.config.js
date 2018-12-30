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
      title: "React Example",
      template: path.resolve(__dirname, 'src/templates/react-app.html'),
      filename: "index.html",
      output: path.resolve(__dirname, 'dist'),
    }),
    new CleanWebpackPlugin(
      path.resolve(__dirname, 'dist')
    )
  ],
  module: {
    "rules": [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'src'),
        loader: [
          "style-loader",
          // https://github.com/css-modules/webpack-demo/blob/master/webpack.config.js
          "css-loader?modules&importLoaders=true&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader",
          "sass-loader"
        ],
      }
    ]
  } 
}