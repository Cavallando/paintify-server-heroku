'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
 email: String,
 name: String,
 user_create: Date
});

module.exports = mongoose.model('User', UserSchema);
