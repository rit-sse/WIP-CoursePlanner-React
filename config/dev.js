module.exports = {
  db: {
    address: 'mongodb://localhost/courseplanner',
  },
  env: 'dev',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
  auth: {
    jwt_secret: 'dev_secret',
  },
  googleAuth: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/api/auth/google/callback',
  },
};
