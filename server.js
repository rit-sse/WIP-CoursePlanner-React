const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const host = process.env.HOST || 'localhost';
const port = process.env.PORT  || 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
})
  .listen(port, 'localhost', err => {
    if (err)console.log(err);
    console.log('Listening at ' + host + ':' + port);
  });
