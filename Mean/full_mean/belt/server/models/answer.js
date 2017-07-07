var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
var AnswerSchema = new mongoose.Schema({
  content: {type: String, required: true},
  detail: {type: String, required: true},
  user: {type: String, required: true},
  like: {type: Number, default: 0},
  _questions: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true });

AnswerSchema.methods.like = function(callback){
  this.likes += 1;
  this.save(function(err){
    callback(err)
  });
};

//register schema as model
var Answer = mongoose.model('Answer', AnswerSchema);
