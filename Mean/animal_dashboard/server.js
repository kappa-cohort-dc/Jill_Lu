var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
var connect = mongoose.connect('mongodb://localhost/animal_dashboard');
var AnimalSchema = new mongoose.Schema({
 name: String,
 cuteness: Number,
 description: String
});
var Animal =mongoose.model('Animal', AnimalSchema); //creating model
// var Animal = mongoose.model('Animals')

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


//root route- displays all
app.get('/', function(req, res) {
  Animal.find({}, function(err, animals){
    if(err){console.log(err);}
    res.render('index', {animals});
  });
});

//form for new animal
app.get('/animals/new', function(req, res){
  res.render('new_animal');
});
//post route from forms
app.post('/animals', function(req, res){
  Animal.create(req.body, function(err){
    if(err){console.log(err)}
    res.redirect('/')
  });
});

//displays one mongoose
app.get('/animals/:id', function(req, res){
  Animal.find({_id: req.params.id}, function(err, animal){
    console.log(animal);
    if(err){console.log(err);}
    res.render('show_profile', {animal: animal[0]});
  });
});

//edit page
app.get('/animals/edit/:id', function(req, res){
  Animal.find({_id: req.params.id}, function(err, animal){
    if(err){console.log(err);}
    res.render('edit', {animal: animal[0]});
  });
});

//edit process
app.post('/animals/:id', function(req, res){
  Animal.update({_id: req.params.id}, req.body, function(err, animal){
    if(err){console.log(err);}
    res.redirect('/')
  });
});
//delete
app.get('/animals/destroy/:id', function(req, res){
  Animal.remove({_id: req.params.id}, function(err, animal){
    if(err){console.log(err);}
    res.redirect('/')
  });
});
app.listen(8000, function() {
    console.log("listening on port 8000");
})
