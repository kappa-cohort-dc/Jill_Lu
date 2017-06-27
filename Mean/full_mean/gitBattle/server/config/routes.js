var mongoose = require('mongoose');
// var note = mongoose.model('Note'); //model
var express = require('express')
var app = express();
var rankings = require('../controllers/users.js')

module.exports = function(app){
  // app.get('/rankings', function(req, res) {
  //   rankings.index(req, res)
  // })
  app.get('/rankings', rankings.index);
  app.post('/rankings', rankings.create);
  //create - post route from forms
  // app.post('/rankings', function(req, res){
  //   console.log('user created!')
  //   rankings.create(req, res)
  // })

}
