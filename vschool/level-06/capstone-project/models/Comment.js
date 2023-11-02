const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  movie: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Comment", commentSchema)