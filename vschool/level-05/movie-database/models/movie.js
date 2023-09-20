const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Movie", movieSchema)