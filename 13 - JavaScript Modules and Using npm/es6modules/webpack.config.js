const webpack = require('webpack');
// No se utiliza "import" porque en esta version de node se soporta esa version

// Variable para el ambiente
const nodeEnv = process.env.NODE_ENV || 'production';

// webpack supports all browsers that are ES5-compliant (IE8 and below are not supported). webpack needs Promise for import() and require.ensure(). If you want to support older browsers, you will need to load a polyfill before using these expressions.

// Objeto
module.exports = { // Donde se iniciará la aplicacion
  // you can enable webpack's built-in optimizations that correspond to each environment: 'production' (default), 'developement' o 'none'
  mode: 'production',
  devtool: 'source-map',
  // An entry point indicates which module webpack should use to begin building out its internal dependency graph, webpack will figure out which other modules and libraries that entry point depends on (directly and indirectly)
  entry: {
    filename: './app.js' // Donde se quiere iniciar la aplicacion
  },
  // The output property tells webpack where to emit the bundles it creates and how to name these files
  output: {
    filename: '_build/bundle.js' // Donde se volcara el resultado
  },
  // webpack only understands JavaScript files
  // Loaders allow webpack to process other types of files and converting them into valid modules
  module: {
    loaders: [{ // Como se manejan ciertos tipos de archivos
      test: /\.js$/, // The test property identifies which file or files should be transformed.
      exclude: /node_modules/,
      loader: 'babel-loader', // indicates which loader should be used to do the transforming before add it to the bundle
      query: {
        presets: ['es2015-native-modules']
      }
    }]
  },
  // plugins can be leveraged to perform a wider range of tasks, from bundle optimization, assets management or inject environment variables
  plugins: [
    // In order to use a plugin, you need to require() it and add it to the plugins array
    // You need to create an instance of it by calling it with the new operator.
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
  ]
};
