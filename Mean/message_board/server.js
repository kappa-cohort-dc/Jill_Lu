var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//basic express setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//connects db automatically
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;

// define Schema variable
var Schema = mongoose.Schema;

// define Post Schema
var PostSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 4},
  content: {type: String, required: true },
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });

// define Comment Schema
var CommentSchema = new mongoose.Schema({
  _post: {type: Schema.Types.ObjectId, ref: 'Post'}, 
  name: {type: String, required: true, minlength: 4},
  content: {type: String, required: true}
}, {timestamps: true });

// set our models by passing them their respective Schemas
// mongoose.model('Post', PostSchema);
// mongoose.model('Comment', CommentSchema);

// store our models in variables
var Post = mongoose.model('Post', PostSchema);
var Comment = mongoose.model('Comment', CommentSchema);


//root route
app.get('/', function(req, res){
  Post.find({}).populate('comments').exec(function(err, results){
    if(err){console.log(err);}
    console.log(results);
    res.render('index', {posts: results});
  });
});

//posting messages
app.post('/posts', function(req, res){
  Post.create(req.body, function(err, result){
    if(err) {console.log(err);}
    res.redirect('/')
  })
//   var post = new Post({name: req.body.name, content: req.body.content});
//   post.save(function(err){
//     if(err){
//       console.log(err);
//       post.find({}).populate('comments').exec(function(err, posts){
//         res.render('index', {posts: posts, errors: posts.errors});
//       });
//     }
//     else{
//       console.log('success!');
//       res.redirect('/');
//     }
//   });
});

// route for getting a particular post and comments
app.get('/posts/:id', function (req, res){
 Post.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, post) {
      res.render('post', {post: post});
        });
});

// route for creating one comment with the parent post id
app.post('/posts/:id/comments', function (req, res){
  //find message comment will belong to
  Post.findOne({_id: req.params.id}, function(err, post){
          //create comment
         var comment = new Comment(req.body);
         //establish relationship with comment and message found
         comment._post = post._id;
         //push comment into the comment array of message model
         post.comments.push(comment);
         console.log(comment);
         comment.save(function(err){
             post.save(function(err){
                   if(err) { console.log(err); }
                   else { res.redirect('/'); }
             });
         });
   });
 });

 app.listen(8000, function() {
     console.log("listening on port 8000");
 })
