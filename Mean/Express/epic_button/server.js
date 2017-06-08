var express = require("express");
var path = require("path"); //traverse the path of the files
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs'); //doesn't always have to be ejs

app.get('/', function(req, res) {
 res.render("index");
})

// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("Listening on port 8000");
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  var counter = 0;
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  socket.on("click_epic", function(data){
    counter += 1;
    socket.emit("push_count", {response:counter})
  });
  socket.on('reset_count', function(data){
    counter = 0;
    socket.emit('reset_me', {response:counter})
  })
});
