const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          // without additional setting, this will reference .babelrc
          loader: "babel-loader",
        }
      }
    ]
  },

  devtool: 'source-map',

  devServer: {
    contentBase: './public',
  }
}
