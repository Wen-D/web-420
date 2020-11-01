/*============================================
; Title: API Gateway Part II
; Author: Wendy Leon
; Date:  10/23/20
; Description: API Gateway Part II
;===========================================
*/

var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
})

module.exports = mongoose.model('User', userSchema);
/**
Database queries
*/
