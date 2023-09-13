const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Item Blueprint //
const itemSchema = new Schema({
  description: {
    type: String,
    require: true
  }
})

module.exports = mongoose.module("Item", itemSchema)