var mongoose = require('mongoose');
var users = require('../controllers/users.js') //change var name
// var user = mongoose.model('User'); //model
// var express = require('express')
// var app = express();

module.exports = function(app){

  app.post('/users', (req, res) =>{
    console.log('router for create')
    console.log(req.body)
    users.create(req, res)
  })
  app.post('/login', (req, res)=>{
    console.log('router for login')
    console.log(req.body)
    users.login(req, res)
  })

}
