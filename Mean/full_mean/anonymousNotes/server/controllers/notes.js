var express = require('express')
var app = express();
var mongoose = require('mongoose');
var Note = mongoose.model('Note');
module.exports={
  index: function (req, res){
    Note.find({}, function(err, results){
      console.log('routes here!')
      if(err){console.log(err);}
      res.json(results);
    })
  },

  create: function(req, res){
    console.log(req.body)
    Note.create(req.body, function(err){
      if(err){console.log(err);}
      res.redirect('/notes');
    })
  },

}
