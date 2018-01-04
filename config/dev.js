module.exports = {
  db: {
    address: 'mongodb://localhost/courseplanner',
  },
  env: 'dev',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};
