// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');

var server = http.createServer(function (request, response){

    console.log('client request URL: ', request.url);

    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
         fs.readFile('views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === '/stylesheets/style.css') {
      fs.readFile('stylesheets/style.css', 'utf8', function (errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
      });
    }
    else if(request.url === '/images/cat1.jpg'){
      fs.readFile('./images/cat1.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/cat2.jpg'){
      fs.readFile('./images/cat2.jpg', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/jpg'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/car1.png'){
      fs.readFile('./images/car1.png', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/png'});
          response.write(contents);
          response.end();
      })
    }
    else if(request.url === '/images/car2.png'){
      fs.readFile('./images/car2.png', function(errors, contents){
          response.writeHead(200, {'Content-type': 'image/png'});
          response.write(contents);
          response.end();
      })
    }

    else {
        response.end('File not found!!!');
    }
});

server.listen(7077);

console.log("Running in localhost at port 7077");
