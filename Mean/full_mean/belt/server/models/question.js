
var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  content: {type: String, required: true},
  description: {type: String, required: true},
  _answers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true });


//register schema as model
var Question = mongoose.model('Question', QuestionSchema);
