var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var UserSchema= new mongoose.Schema({
  name: {type: String, required: [true, 'name is required']},
}, {timestamps: true});

//register schema as model
var User= mongoose.model('User', UserSchema);
