var mongoose = require('mongoose');
var note = mongoose.model('Note'); //model
var express = require('express')
var app = express();
var notes = require('../controllers/notes.js')

module.exports = function(app){
  app.get('/notes', function(req, res) {
    notes.index(req, res)
  })

  //create - post route from forms
  app.post('/notes', function(req, res){
    console.log('note created!')
    notes.create(req, res)
  })

}
