var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 5000,
    db: 'postgres://sascha:TA50wtlyl@localhost/nyandev'
  },

  test: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 5000,
    db: 'postgres://sascha:TA50wtlyl@localhost/test-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'test'
    },
    port: process.env.PORT || 5000,
    db: 'postgres://sascha:TA50wtlyl@localhost/test-production'
  }
};

module.exports = config[env];
