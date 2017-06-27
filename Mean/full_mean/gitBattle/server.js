var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public/dist')));
          //points front end file to angularfolder/dist

//database
require('./server/config/mongoose.js');


//routes
var routes_setter= require('./server/config/routes.js');
routes_setter(app);

app.get('*', function(req, res){
  res.redirect('/')
  // res.sendFile(path.resolve("public/dist/index.html"))
})  //send to index.html in angular

app.listen(8000, function() {
    console.log("listening on port 8000");
})
