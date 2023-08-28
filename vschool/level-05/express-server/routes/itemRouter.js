const express = require("express")
const itemRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const items = [
  { description: "backpack", _id: uuidv4() },
  { description: "pen", _id: uuidv4() },
  { description: "pencil", _id: uuidv4() }
]

itemRouter.get("/", (req, res) => {
  res.send(items)
})

itemRouter.get("/:itemId", (req, res) => {
  const itemId = req.params.itemId
  const foundItem = items.find(item => item._id === itemId)
  res.send(foundItem)
})

itemRouter.post("/", (req, res) => {
  const newItem = req.body
  newItem._id = uuidv4()
  items.push(newItem)
  res.send(`Successfully added ${newItem.name} to the database`)
})

itemRouter.delete("/:itemId", (req, res) => {
  const itemId = req.params.itemId
  const itemIndex = items.findIndex(item => item._id === itemId)
  items.splice(itemIndex, 1)
  res.send("Successfully deleted Item!")
})

itemRouter.put("/:itemId", (req, res) => {
  const itemId = req.params.itemId
  const itemIndex = items.findIndex(item => item._id === itemId)
  const updatedItem = Object.assign(items[itemIndex], req.body)
  res.send(updatedItem)
})

// itemRouter.route("/")
//   .get((req, res) => {
//     res.send(items)
//   })
//   .post((req, res) => {
//     const newItem = req.body
//     newItem._id = uuidv4()
//     items.push(newItem)
//     res.send(`Successfully added ${newItem.name} to the database`)
//   })


module.exports = itemRouter