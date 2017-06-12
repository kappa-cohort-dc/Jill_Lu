var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
var QuoteSchema = new mongoose.Schema({
 name: String,
 quote: String
})
mongoose.model('Quote', QuoteSchema); //creating model
var Quote = mongoose.model('Quote')

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/quotes', function(req, res) {
  Quote.find({}, function(err, quotes){
    if(err){
      console.log('error!');
    }else{
      console.log('success!');
      res.render('quotes', {quotes});
    }
  })
})

// Add User Request
app.post('/submit_quotes', function(req, res) {
    console.log("POST DATA", req.body);
  // var quote = new Quote({name: req.body.name, quote: req.body.quote});
  // quote.save(function(err)
  Quote.create(req.body, function(err){
    if(err) {console.log(err)}
      res.redirect('quotes');
  });
});

app.listen(8000, function() {
    console.log("listening on port 8000");
})
