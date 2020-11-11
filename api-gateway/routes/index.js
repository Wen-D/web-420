/** 
========================================
; Title:  API Gateway Part II
; Author: Wendy Leon
; Date:   10/23/20
; Description: API Gateway Part II
;=======================================
**/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
