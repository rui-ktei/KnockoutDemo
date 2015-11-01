var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var embedFileSize = 65536;
var assetsLoaders = [
  {test: /\.json$/, loader: 'json'},
  {test: /\.mp4$/, loader: 'url?limit=' + embedFileSize + '&mimetype=video/mp4'},
  {test: /\.svg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml'},
  {test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png'},
  {test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg'},
  {test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif'},
  {
    test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=' + embedFileSize
  }
];

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
        exclude: /(node_modules|bower_components|lib|dist)/,
        include: path.join(__dirname, 'src/KnockoutDemo/wwwroot/js'),
        loader: 'babel?presets[]=es2015'
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract(
          'css?sourceMap!' +
          'sass?sourceMap'
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./src/KnockoutDemo/wwwroot/dist/app.css')
  ],
  resolve: {
    alias: {
      bindings: path.join(__dirname, 'src/KnockoutDemo/wwwroot/js/bindings'),
      components: path.join(__dirname, 'src/KnockoutDemo/wwwroot/js/components'),
      templates: path.join(__dirname, 'src/KnockoutDemo/wwwroot/templates')
    }
  },
  stats: { colors: true }
};
