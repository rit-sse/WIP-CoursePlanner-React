module.exports = {
  db: {
    address: 'mongodb://localhost/courseplanner',
  },
  env: 'prod',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};
