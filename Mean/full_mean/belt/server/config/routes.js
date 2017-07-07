var mongoose = require('mongoose');
var users = require('../controllers/users.js');
var answers = require('../controllers/answers.js');
var questions = require('../controllers/questions.js'); //change var name
// var user = mongoose.model('User'); //model
// var express = require('express')
// var app = express();

module.exports = function(app){

  app.post('/index', (req, res) =>{
    console.log('router for create user')
    console.log(req.body)
    users.create(req, res)
  })
  app.post('/question', (req, res)=>{
    console.log('router for create question')
    console.log(req.body)
    users.login(req, res)
  })

}
