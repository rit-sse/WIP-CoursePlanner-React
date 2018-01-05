const mongoose = require('mongoose');
const plan = require('./plan');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: {
    type: String,
  },
  name: {
    type: String,
  },
  plans: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Plan'
  },
});

module.exports = mongoose.model('User', userSchema);
