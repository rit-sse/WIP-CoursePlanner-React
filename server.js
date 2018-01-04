const path = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/config');
mongoose.connect(config.db.address);

const express = require('express');
let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(path.join(__dirname, 'dist')));

// Logger
app.use(morgan('dev'));

// Webpack hot reload middleware
if(config.env === 'dev') {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const config = require('./webpack.config');
  const compiler = webpack(config);

  app.use(webpackMiddleware(compiler, {
    // webpack-dev-middleware options
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true,
    },
  }));
}

//Set up the api endpoints
require(__dirname + '/api/api').init(express, app);

//Serve the React application
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(config.port, () => console.log("Listening on port", config.port));
