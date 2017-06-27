var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  username: String,
  score: Number,
  image: String,
}, {timestamps: true});

var User = mongoose.model('User', UserSchema)
