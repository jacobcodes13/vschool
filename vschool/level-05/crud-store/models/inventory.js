const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  datePosted: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("InventoryModel", inventorySchema)