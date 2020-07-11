'use strict'
var globals = require('../public/javascripts/globals');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: globals.GAME_NAME });
});

module.exports = router;
