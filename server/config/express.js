'use strict';

/* jshint ignore:start */
const epxress = require('express');
/* jshint ignore:end */
const bodyParser = require('body-parser');

module.exports = function(app) {

   // req.body | BODY PARSER
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(bodyParser.json());
};
