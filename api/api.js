/**
 * Compile api files and initialize endpoints
 * @namespace api/api
 */
let fs = require('fs');
require('dotenv').config();
let path = require('path');


/**
 * Set connect the given express app up with the api endpoints in this folder
 * @function
 * @memberof api/api
 * @param express Reference to express
 * @param app Reference to the instantiated express app
 * @instance
 */
let init = function(express, app) {

  fs
    .readdirSync(__dirname)
    .filter(function(file) {
      return (file.indexOf(".") !== 0) && (file !== "api.js");
    })
    .forEach(function(file) {
      //For each api module, call init
      let router = express.Router();      //Create a new Router object
      let newEndpoint = require(path.join(__dirname, file));
      newEndpoint.init(router);           //Initialize the endpoints
      app.use('/api/' + path.basename(file, '.js'), router); //Mount sub-api
    });
};

module.exports = {
  init: init
};
