var mongoose = require('mongoose');
var Question = mongoose.model('Question');

function QuestionsController(){
  this.index = function(req, res){
  Question.find({})
  .populate("Answer")
  .exec(function (err, questions){
    if(err){
      console.log(err)
    }else{
      res.json(questions)
    }
  })
}
module.exports= new QuestionsController();
