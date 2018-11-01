import path from 'path';
//import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {
        test: /\.scss$/,
        use:  ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}

