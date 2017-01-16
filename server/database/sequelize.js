'use strict';

const config = require(__base + '/config');

var fixtures = require('sequelize-fixtures');
var Sequelize = require('sequelize');

var db = {
   Sequelize: Sequelize,
   sequelize: new Sequelize(config.sequelize.url, {
      logging: false
   }),
   fixtures: []
};

db.User = db.sequelize.import(__base + '/api/user/user.model');

db.fixtures = db.fixtures.concat(require(__base + '/api/user/user.fixtures'));

fixtures.loadFixtures(db.fixtures, db.sequelize.models).then(() => {
   db.sequelize.options.logging = console.log;
});

console.log('MODELS:', db.sequelize.models);

module.exports = db;
