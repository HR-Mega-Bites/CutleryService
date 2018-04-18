const path = require('path');

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  module : {
    rules : [
      {
        test : /\.jsx?/,
        exclude : /node_modules/,
        loader : 'babel-loader',      
      }
    ]
  }
};
