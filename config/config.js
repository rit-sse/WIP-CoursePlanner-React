require('dotenv').config();
module.exports = require('./' + (process.env.ENV || 'dev'));
