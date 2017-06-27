var express = require('express')
var app = express();
var mongoose = require('mongoose');
var Player = mongoose.model('Player');
module.exports={
  index: function (req, res){
    Player.find({}, function(err, results){
      // console.log('routes here!')
      if(err){console.log(err);}
      res.json(results);
    })
  },

  create: function(req, res){
    console.log(req.body)
    console.log('player created on the backend')
    Player.create(req.body, function(err){
      if(err){console.log(err);}
      res.redirect('/players');
    })
  },

}
