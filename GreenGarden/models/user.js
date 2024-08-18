const mongoose = require("../config/batabase");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    unique: true
  }
});


const User = mongoose.model('User', userSchema);

module.exports = User;
