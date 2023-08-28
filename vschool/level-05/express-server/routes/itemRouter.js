const express = require("express")
const itemRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const items = [
  { description: "backpack", _id: uuidv4() },
  { description: "pen", _id: uuidv4() },
  { description: "pencil", _id: uuidv4() }
]

// itemRouter.get("/", (req, res) => {
//   res.send(items)
// })

// itemRouter.post("/", (req, res) => {
//   const newItem = req.body
//   newItem._id = uuidv4()
//   items.push(newItem)
//   res.send(`Successfully added ${newItem.name} to the database`)
// })

itemRouter.route("/")
  .get((req, res) => {
    res.send(items)
  })
  .post((req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    items.push(newItem)
    res.send(`Successfully added ${newItem.name} to the database`)
  })


module.exports = itemRouter