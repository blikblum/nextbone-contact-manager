var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [{
      test: /\.js$/,
      include: [path.resolve('src')],
      loader: 'babel-loader'
    }    
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: __dirname + '/build/index.html',
      template: __dirname + '/index.html'
    }),

    new CopyWebpackPlugin([
      { from: 'node_modules/bootstrap/dist/css/bootstrap.min.css' },
      { from: 'src/styles.css' }
    ])
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src/common'), 'node_modules']
  }
};