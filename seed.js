if(!process.env.ENV) {
  throw 'Seeding is a destructive action.'+
        'You *must* specify the environment using `ENV=dev|test|prod`';
}

const config = require('./config/config');
const mongoose = require('mongoose');
mongoose.connect(config.db.address);

const Plan = require('./model/plan.js');
const SEDefault = require('./seed-data/SE.js');

console.log('Removing all plans');
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
    console.log(error);
    process.exit(1);
  });
