var mongoose= require('mongoose');
var PlayerSchema = new mongoose.Schema({
  name: {type:String},
  position: {type: String},
}, {timestamps: true});

// var Player = mongoose.model('Player', PlayerSchema)
var Player = mongoose.model('Player', PlayerSchema)
