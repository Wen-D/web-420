/*============================================
; Title: API Gateway Part II
; Author: Wendy Leon
; Date:  10/23/20
; Modified: 11/8/20
; Description: API Gateway Part II
;===========================================
*/

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
})

var User = module.exports = mongoose.model('User', userSchema);

//user .save is used to add a new user in the database
module.exports.add = (user, callback) => {
    user.save(callback);
}

//getById
module.exports.getById = (id, callback) => {
    var query = {_id: id};
    User.findById(query,callback);
};

module.exports.getOne = (e, callback) => {
    var query = {email: e};
    User.findOne(query, callback);
};