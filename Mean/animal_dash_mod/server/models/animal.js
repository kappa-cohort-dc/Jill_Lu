var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
 name: String,
 cuteness: Number,
 description: String
});

var Animal =mongoose.model('Animal', AnimalSchema);
