const config = require('../config/config');
const passport = require('passport');
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.auth.jwt_secret,
};

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  User.findOne({ _id: jwt_payload._id})
    .then((user) => {
      next(null, user);
    })
    .catch((err) => {
      console.log(err); //TODO replace with real logger
      next(null, false);
    });
}));

const endpoints = {
  localLogin: (req, res) => {
    User.findOne({
      'localAuth.email': req.body.email,
    }, '+localAuth.password')
      .then((user) => {
        if(!user) {
          throw 'User not found';
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
          if (!isMatch) {
            throw 'Invalid email or password';
          }

          let cleanedUser = JSON.parse(JSON.stringify(user));
          delete cleanedUser.localAuth.password;

          const payload = { _id: user._id };
          const token = jwt.sign(payload, jwtOptions.secretOrKey);
          res.json({ message: 'ok', token: token, user: cleanedUser });
        });
      })
      .catch((err) => {
        console.log(err); //TODO use real logger
        res.status(401).send({ message: 'Unable to login', error: err });
      });
  },

  localRegister: (req, res) => {
    User.create({
      localAuth: {
        email: req.body.email,
        password: req.body.password,
      },
    })
      .then((user) => {
        console.log('User created', user);//TODO use logger
        return endpoints.localLogin(req, res);
      })
      .catch((err) => {
        console.log(err); //TODO use logger
        res.status(400).send({ message: 'Unable to register', error: err });
      });
  },
};

const init = router => {
  // Mounted on /api/auth
  router.post('/localLogin', endpoints.localLogin);
  router.post('/localRegister', endpoints.localRegister);
};

module.exports = {
  init: init,
};
