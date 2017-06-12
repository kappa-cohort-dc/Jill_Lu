var express = require("express");
var path = require("path"); //traverse the path of the files
var app = express();
var users =[];
// var bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
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
  console.log("Socket is running");
  console.log(socket.id);
  socket.on('send_user_name', function(data){
    users.push({id:socket.id, name:data.name})
    var names_arr= users.map(function(x){
      return x.name   //only want object's name key
    })
    socket.emit('send_user_name', {current_user:users[users.length-1], all_users:names_arr
    }
    )
  })
  socket.on('send_message', function(data){
    var sender = users.find(function(x){
      return x.id == data.sender
    })
    data.sender = sender.name
    console.log(data)
    io.emit('send_message', data)
  })
  socket.on('disconnect', function(){
    // var id = socket.id;
    var index = users.findIndex(function(x){
      return x.id == socket.id
    })
    console.log(index)
    console.log("here")
    if(index >= 0){
      users.splice(index, 1);
      var names_arr = users.map(function(x){
        return x.name
    })
    io.emit('user_left', {users: names_arr})

    }
  })
});
