const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  localAuth: {
    email: { type: mongoose.Schema.Types.Email, unique: true },
    password: { type: String, select: false },
  },
  googleId: {
    type: String,
  },
  name: {
    type: String,
  },
  plans: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Plan',
  },
});

userSchema.pre('save', (next) => {
  const user = this;
  if(this.isModified('localAuth.password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.localAuth.password, salt, null, (err, hash) => {
        if (err) {
          return next(err);
        }
        user.localAuth.password = hash;
        next();
      });
    });
  }   else {
    return next();
  }
});

userSchema.methods.comparePassword = (passw, cb) => {
  bcrypt.compare(passw, this.localAuth.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
