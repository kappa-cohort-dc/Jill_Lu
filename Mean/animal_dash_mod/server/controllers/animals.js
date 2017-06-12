var express = require('express')
var app = express();
var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');
module.exports={
  index: function (req, res){
    Animal.find({}, function(err, animals){
      if(err){console.log(err);}
      res.render('index', {animals});
    })
  },
  new: function(req, res){
    Animal.find({}, function(err, animals){
      if(err){console.log(err);}
      res.render('new_animal', {animals})
    })
  },
  show: function(req, res){
    Animal.find({_id: req.params.id}, function(err, animal){
      // console.log(animal);
      if(err){console.log(err);}
      res.render('show_profile', {animal: animal[0]});
    })
  },
  create: function(req, res){
    Animal.create(req.body, function(err){
      if(err){console.log(err);}
      res.redirect('/');
    })
  },
  edit: function(req, res){
    Animal.find({_id: req.params.id}, function(err, animal){
      console.log(animal);
      if(err){console.log(err);}
      res.render('edit', {animal: animal[0]});
    })
  },
  edit_process: function(req, res){
    Animal.update({_id: req.params.id}, req.body, function(err, animal){
      if(err){console.log(err);}
      res.redirect('/');
    })
  },
  delete: function(req, res){
    Animal.remove({_id: req.params.id}, function(err, animal){
      if(err){console.log(err);}
      res.redirect('/');
    })
  }
}
