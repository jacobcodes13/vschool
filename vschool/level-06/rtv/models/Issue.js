const mongoose = require("mongoose")
const Schema = mongoose.Schema

const issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  upVotes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  downVotes: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
})


module.exports = mongoose.model("Issue", issueSchema)