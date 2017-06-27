var mongoose = require('mongoose');
// var note = mongoose.model('Note'); //model
var express = require('express')
var app = express();
var rankings = require('../controllers/players.js')

module.exports = function(app){
  app.get('/player', rankings.index);
  app.post('/player', rankings.create);
}
