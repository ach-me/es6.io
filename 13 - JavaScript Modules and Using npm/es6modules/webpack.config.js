const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {  // Donde se iniciará la aplicacion
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: '_build/bundle.js' // Donde se volcara el resultado
  },
  module: {
    loaders: [{ // Como se manejan los archivos
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015-native-modules']
      }
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ // Comprime el JS
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: true
    }),
    new webpack.DefinePlugin({ // El ambiente del plugin
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv)
      },
    }),
  ],
};
