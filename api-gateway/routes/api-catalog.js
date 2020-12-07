/** 
========================================
; Title:  API Gateway Part II
; Author: Wendy Leon
; Date:   12/6/20
; Description: API Gateway Part II
;=======================================
**/

/**
* API Routes
*/
var express = require('express');
var router = express.Router();
var checkToken = require('../check-token');

var auth_controller = require('../controllers/authController');

// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);

// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);


//POST request - sign in
router.post('/auth/login', auth_controller.user_login);

//GET request - log out
router.get('/auth/logout', auth_controller.user_logout);

module.exports = router;

