const express = require('express');
const router = express.Router();
const controller = require('./post.controller.js');

router.get('/', controller.index);

module.exports = router;
