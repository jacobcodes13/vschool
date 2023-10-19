const mongoose = require("mongoose")
const Schema = mongoose.Schema

const commentSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  dateSubmitted: {
    type: Date,
    default: Date.now
  },
  issue: {
    type: Schema.Types.ObjectId,
    ref: "Issue",
    required: true
  }
})


module.exports = mongoose.model("Comment", commentSchema)