const mongoose = require("mongoose")
const Schema = mongoose.Schema

// User Blueprint //
const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
  hobby: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("User", userSchema)