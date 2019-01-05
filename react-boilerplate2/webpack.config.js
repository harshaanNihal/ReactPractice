const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode:"development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,webpack
        use: ['babel-loader']
      },
      { test: /\.(css|scss)$/, use: ['style-loader','css-loader'] },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: "/dist",
    hot: true
  },
  plugins: [new HtmlWebPackPlugin(
    { 
      template: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]

};