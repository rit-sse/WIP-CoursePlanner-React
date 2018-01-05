const passport = require('passport');
const User = require('../model/user');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  console.log('does this work?')
  User.find({
    googleId: profile.id,
  }).then((err, person) => {
    if (err) {
      User.create({
        plans: [],
        googleId: profile.id,
        name: profile.displayName,
      });
    }
    console.log(person);
    return done(err, profile.id);
  })
  //console.log(user);
}));

const endpoints = {
  googleAuth: (req, res) => {
    passport.authenticate('google', {scope:['https://www.googleapis.com/auth/plus.login']})(req, res);
  },

  googleAuthCallback: (req, res) => {
    passport.authenticate('google', {failureRedirect: '/'})
  },

  googleAuthRedirect: (req, res) => {
    res.redirect('/'); 
  },
};

const init = router => {
  // Mounted on /api/auth
  router.use(passport.initialize());
  router.get('/google', endpoints.googleAuth);
  router.get('/google/callback', endpoints.googleAuthCallback, endpoints.googleAuthRedirect);
};

module.exports = {
  init: init
};
