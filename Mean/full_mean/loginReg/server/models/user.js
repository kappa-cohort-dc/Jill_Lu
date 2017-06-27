var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true},
  first_name: { type: String, required: true},
  last_name: { type: String, required: true},
  password: { type: String, required: true, minlength: 8},
  dob: { type: Date, required: true}
}, { timestamps: true});


UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}
///check password method
UserSchema.methods.comparePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

UserSchema.methods.lowerCaseAll = function(){
  this.first_name = this.first_name.lowerCaseAll()
  this.last_name = this.last_name.lowerCaseAll()
}

UserSchema.pre('save', function(done){
  this.password = this.generateHash(this.password);
  done();
})


var User= mongoose.model('User', UserSchema);
