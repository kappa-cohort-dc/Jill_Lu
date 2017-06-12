// var mongoose = require('mongoose');
// var Animal = mongoose.model('Animal');
var express = require('express')
var app = express();
var animals = require('../controllers/animals.js')

module.exports = function(app){
  app.get('/', function(req, res) {
    animals.index(req, res)
  })

  //form for new animal
  app.get('/animals/new', function(req, res){
    animals.new(req, res)
  })

  //create - post route from forms
  app.post('/animals', function(req, res){
    animals.create(req, res)
  })
  //edit page
  app.get('/animals/edit/:id', function(req, res){
    animals.edit(req, res)
  })


  //displays one mongoose
  app.get('/animals/:id', function(req, res){
    animals.show(req, res)
  })

  //edit process
  app.post('/animals/:id', function(req, res){
    animals.edit_process(req, res)
  })

  //delete
  app.get('/animals/destroy/:id', function(req, res){
    animals.delete(req, res)
  })
}
