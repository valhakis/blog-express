'use strict';

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
