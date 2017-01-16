'use strict';
const express = require('express');

module.exports = function(app) {
   app.use('/api/auth', require(__base + '/api/auth/auth'));
   app.use('/api/posts', require(__base + '/api/post/post'));
   app.use('/api/users', require(__base + '/api/user/user'));

   // serve dist folder
   app.use(express.static(__root + '/dist'));
   app.get('*', (req, res) => {
      res.sendFile(__root + '/dist/index.html');
   });

   // render 404 view
   app.get('*', (req, res) => {
      res.render('404');
   });
};
