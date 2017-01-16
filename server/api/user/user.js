const express = require('express');
const router = express.Router();
const controller = require('./user.controller.js');

router.get('/', controller.index);
router.post('/', controller.create);

module.exports = router;
