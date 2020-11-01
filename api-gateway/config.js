/** 
========================================
; Title:  config.js
; Author: Wendy Leon
; Date:   10/16/20
; modified: 10/23/20
; Description:config.js
;=======================================
**/

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;

config.web.secret = 'topsecret';

module.exports = config;