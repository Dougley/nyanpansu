var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 3000,
    db: {db: 'test_development'}
  },

  test: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 3000,
    db: {db: 'test_test'}
  },

  production: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 3000,
    db: {db: 'test_production'}
  }
};

module.exports = config[env];
