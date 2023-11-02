const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  like: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  removeLike: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Movie", movieSchema)