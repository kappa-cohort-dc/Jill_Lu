var express = require('express')
var app = express();
var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports={
  index: function (req, res){
    User.find({}, function(err, results){
      // console.log('routes here!')
      if(err){console.log(err);}
      res.json(results);
    })
  },

  create: function(req, res){
    console.log(req.body)
    console.log('player created on the backend')
    User.create(req.body, function(err){
      if(err){console.log(err);}
      res.redirect('/rankings');
    })
  },

}
