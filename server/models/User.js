const mongoose = require("mongoose");

const { Schema } = mongoose;
const Reservation = require("./Reservation");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
