require('babel-polyfill')

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const env = process.env.NODE_ENV || 'prod';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

if (env === 'dev') {
  module.exports = {
    devtool: 'source-maps',
    entry: [
        'react-hot-loader/patch',
        'babel-polyfill',
        'webpack-dev-server/client?http://' + host + ':' + port,
        'webpack/hot/only-dev-server',
        './src/index',
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      publicPath: 'http://' + host + ':' + port + '/dist/',
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
        },
      }),
    ],
    resolve: {
      alias: {
        'react': path.join(__dirname, 'node_modules', 'react'),
      },
      extensions: ['*', '.js', '.jsx'],
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader', 'eslint-loader'], include: path.join(__dirname, 'src')},
        { test: /\.(scss|css)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      ],
    },
  }
} else {
  module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      loaders: [
        { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
        { test: /\.(scss|css)$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      ],
    },
    resolve: {
      modules: [
        'src',
        'node_modules',
      ],
      extensions: ['*', '.json', '.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin(path.join(__dirname, 'dist')),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production'),
        },
      }),
      new ExtractTextPlugin('[name].css'),
      new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
    ],
  }
}
