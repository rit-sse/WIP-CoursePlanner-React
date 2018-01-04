const logger = require('./logger');
if(!process.env.ENV) {
  logger.error(
    'Seeding is a destructive action.'+
    'You *must* specify the environment using `ENV=dev|test|prod`');
  process.exit(1);
}

const config = require('./config/config');
const mongoose = require('mongoose');
mongoose.connect(config.db.address);

const Plan = require('./model/plan.js');
const SEDefault = require('./seed-data/SE.js');

logger.info('Removing all plans');
Plan.remove({})
  .then(() => {
    return Plan.create(SEDefault);
  })
  .then((plan) => {
    if(!plan) {
      throw 'Plan not created. Something went wrong!';
    }
    process.exit(0);
  })
  .catch((error) => {
    logger.error(error);
    process.exit(1);
  });
