var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
  this.create = function(req, res){
    console.log('inside controller')
    User.create(req.body, function(err, result){
      if(err){console.log(err)}
    }
      res.json(result))

  }

  this.login = function(req, res){
    console.log('inside controller')
    console.log(req.body)
    User.findOne({name: req.body.name}, function(err, user){
      if(err){
        console.log(err)
      }
    })
  }
}
