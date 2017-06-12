var express = require('express')
var app = express();
var mongoose = require('mongoose');
var People = mongoose.model('People');

module.exports ={
  index: function(req, res){
    People.find({}, function(err, results){
      if(err){
        res.json(err);
      }
      else{
        res.json(results)
      }
    })
  },
  show: function(req, res){
    People.find({name:req.params.name}, function(err, results){
    if(err){
      res.json(err);
    }
    else{
      res.json(results[0])
    }
  })
},
  create: function(req, res){
    People.create({name:req.params.name}, function(err, result){
      if(err){
        res.json(err)
      }
      else{
        res.json(result)
      }
    })
  },
  destroy: function(req, res){
    People.remove({name:req.params.name}, function(err, result){
    if(err){
      res.json(err);
    }
    })
  }
}
