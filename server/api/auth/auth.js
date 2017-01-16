const express = require('express');
const router = express.Router();
const controller = require('./auth.controller.js');

router.get('/', controller.index);

module.exports = router;
