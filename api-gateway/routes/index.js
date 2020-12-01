/** 
========================================
; Title:  config.js
; Author: Wendy Leon
; Date:   10/16/20
; modified: 10/23/20
; Description:config.js
;=======================================
**/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
