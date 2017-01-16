'use strict';

const path = require('path');
global.__root = path.join(__dirname, '..');
global.__base = __dirname;

const http = require('http');
const express = require('express');

const config = require(__base + '/config');

var app = express();
var server = http.createServer(app);

require(__base + '/config/express')(app);

require(__base + '/routes')(app);

const sequelize = require(__base + '/database/sequelize').sequelize;

sequelize.sync().then(() => {
   server.listen(config.port, config.host, function() {
      console.log(`HOST: ${config.host}, PORT: ${config.port}`);
   });
});


