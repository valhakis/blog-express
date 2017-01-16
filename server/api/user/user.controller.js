'use strict';

const SequelizeFixtures = require('sequelize-fixtures');
const sequelize = require(__base + '/database/sequelize').sequelize;
const User = require(__base + '/database/sequelize').User;

// get all users
exports.index = (req, res) => {
   User.findAll().then(users => {
      res.send(users);
   });
};

// create user
exports.create = (req, res) => {
   User.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
   }).then(user => {
      res.status(200).send(user);
   }).catch(err => {
      res.status(409).send(err.errors);
   });
};


// sync
exports.sync = (req, res) => {
   User.sync({force: true}).then(() => {
      res.redirect('/');
   });
};

// fixtures
exports.fixtures = (req, res) => {
   var fixtures = require(__base + '/api/user/user.fixtures');

   SequelizeFixtures.loadFixtures(fixtures, sequelize.models).then(() => {
      res.redirect('/');
   });
};
