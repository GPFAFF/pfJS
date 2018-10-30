import path from 'path';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  devtool: 'inline-source-map',
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: 'index.css',
    // }),
  ],
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

