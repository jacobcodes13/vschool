const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
  name: {
    type: String,
    require: true
  },
  bounty: {
    type: Number,
    require: true
  },
  type: {
    type: String,
    require: true
  },
  Date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("Bounty Schema", bountySchema)