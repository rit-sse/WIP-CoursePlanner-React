if (!process.env.ENV) {
  throw 'Seeding is a destructive action.'+
        'You *must* specify the environment using `ENV=dev|test|prod`';
}

const config = require('./config/config');
const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect(config.db.address);

const Plan = require('./model/plan');
const SEDefault = require('./seed-data/SE');

const User = require('./model/user');

console.log('Removing all users and plans');
User.remove({}).exec();
Plan.remove({})
  .then(() => {
    return Plan.create(SEDefault);
  })
  .then(plan => {
    if(!plan) {
      throw 'Plan not created. Something went wrong!';
    }
    return plan
  })
  .then(plan => {
    console.log(`made plan: ${plan._id}`);
    return User.create({
      googleId: 'abc',
      name: 'Robert Mclaughlin',
      plans: [plan._id],
    });
  })
  .then(user => {
    if(!user) {
      throw 'User not created. Something went wrong!';
    }
    process.exit(0);
  })
  .catch(error => {
    console.log(error);
  });

