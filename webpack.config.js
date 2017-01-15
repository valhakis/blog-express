/* jshint ignore:start */
const historyApiFallback = require('connect-history-api-fallback');
/* jshint ignore:end */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const modRewrite = require('connect-modrewrite');

global.__root = path.join(__dirname, '..') + '/';
console.log('__root', __root);

const config = {
   host: '192.168.0.2',
   port: 3000,
   template: __dirname + '/client/index.html',
   app: __dirname + '/client/app.js',
   client: __dirname + '/client',
   dist: __dirname + '/dist',
   vendor: [
      'jquery',
      'angular',
      'moment',
      'angular-ui-router',
      'angular-resource',
      'bootstrap',
   ]
};

module.exports = {
   watch: true,
   devtool: 'eval',
   resolveLoader: {
      root: __root + 'node_modules'
   },
   entry: {
      app: config.app,
      'vendor.js': config.vendor
   },
   output: {
      filename: 'app.bundle.js',
      path: config.dist
   },
   module: {
      preLoaders: [
         {test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}
      ],
      loaders: [
         { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/, /bower_components/] },
         { test: /\.html$/, loader: 'raw-loader' },
         { test: /\.css$/, loader: "style-loader!css-loader" },
         { test: /\.scss/, loader: "style-loader!css-loader!sass-loader" },
         { test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)([\?]?.*)$/, loader: 'file' },
      ],
   },
   plugins: [
      new BrowserSyncPlugin({
         host: config.host,
         //port: config.port,
         server: {
            baseDir: [config.dist],
            middleware: [
               //historyApiFallback,
               modRewrite([ '!\\.\\w+$ /index.html [L]' ])
            ]
         }
      }),
      new webpack.optimize.CommonsChunkPlugin('vendor.js'),
      new HtmlWebpackPlugin({
         template: config.template,
         inject: 'body',
         //hash: true,
         chunks: ['vendor.js', 'app']
      }),
      new webpack.ProvidePlugin({
         $: 'jquery',
         jQuery: 'jquery',
         jquery: 'jquery'
      })
   ]
};
