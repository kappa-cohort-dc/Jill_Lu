// var express = require('express')
// var app = express();
var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
  this.create = function(req, res){
    console.log('inside controller')
    User.findOne({email: req.body.email})
    .then((user)=>{
      console.log(user)
      if(user){
        res.json({error: true, messages: 'email already exist'})
      }else{
        var user = new User(req.body)
        user.save((err, user)=> {
          console.log('created user!')
          if(err){
            res.json({error: true, messages: err.errors.email.message})
          }else{
            res.json({error: false, user:user})
          }
        })
      }
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  this.login = function(req, res){
    console.log('inside controller')
    console.log(req.body)
    User.findOne({email: req.body.email}, function(err, user){
      if(err){
        console.log(err)
      }else if(user){
        console.log('found a user', user)
        var validPassword = user.comparePassword(req.body.password)
        if(validPassword){
          res.json({login: true, user:user})
        }else{
          res.json({login: false, error: 'invalid password'})
        }
      }
    })
  }
}
module.exports= new UsersController();
