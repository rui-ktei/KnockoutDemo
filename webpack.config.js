var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/KnockoutDemo/wwwroot/js/index.js' // Your appʼs entry point
  ],
  output:  {
    path: __dirname,
    filename: './src/KnockoutDemo/wwwroot/dist/bundle.js',
    publicPath: 'http://localhost:8080/static/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src/KnockoutDemo/wwwroot/js'),
        loader: 'babel?presets[]=es2015'
      }
    ]
  },
  resolve: {
    alias: {
      bindings: path.join(__dirname, 'src/KnockoutDemo/wwwroot/js/bindings'),
      components: path.join(__dirname, 'src/KnockoutDemo/wwwroot/js/components'),
      templates: path.join(__dirname, 'src/KnockoutDemo/wwwroot/templates')
    }
  },
  stats: { colors: true }
};
