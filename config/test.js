module.exports = {
  db: {
    address: 'mongodb://localhost/courseplanner-test',
  },
  env: 'test',
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
};
