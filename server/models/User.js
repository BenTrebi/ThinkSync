const { Schema, model } = require('mongoose');
const bcrypt = require("bcrypt");
const { isEmail } = require('validator');

const userSchema = new Schema({
  username: { 
    type: String, 
    unique: true,
    required: true,
    trim: true
  },

  email: {
    type: String,
    unique: true,
    required: true,
    validate: [isEmail, 'invalid email']
  },

  password: {
    type: String,
    required: true
  }
});

userSchema.method("verify", async function(pw){
  return await bcrypt.compare(pw, this.password)
})

userSchema.pre("save", async function(next){
  this.password = await bcrypt.hash(this.password, 10)
  next()
})

const User = model('User', userSchema);
module.exports = User;

/*
REFERENCES
username unique trim
https://masteringjs.io/tutorials/mongoose/unique
https://stackoverflow.com/questions/20766360/whats-the-meaning-of-trim-when-use-in-mongoose

validate email
https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax
https://github.com/validatorjs/validator.js
npm installed validator


*/