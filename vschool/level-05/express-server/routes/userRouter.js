const express = require("express")
const userRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const users = [
  { name: "Jacob", age: 25, hobby: "Gym", _id: uuidv4() },
  { name: "Janice", age: 35, hobby: "Cooking", _id: uuidv4() },
  { name: "Noah", age: 20, hobby: "Gym", _id: uuidv4() }
]

// GET All
userRouter.get("/", (req, res) => {
  res.send(users)
})

// GET One
userRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId
  const foundUser = users.find(user => user._id === userId)
  res.send(foundUser)
})

// POST One
userRouter.post("/", (req, res) => {
  const newUser = req.body
  newUser._id = uuidv4()
  users.push(newUser)
  res.send(newUser)
})

// DELETE One
userRouter.delete("/:userId", (req, res) => {
  const userId = req.params.userId
  const userIndex = users.findIndex(user => user._id === userId)
  users.splice(userIndex, 1)
  res.send("Successfully deleted User!")
})

// UPDATE One
userRouter.put("/:userId", (req, res) => {
  const userId = req.params.userId
  const updatedObject = req.body
  const userIndex = users.findIndex(user => user._id === userId)
  const updatedUser = Object.assign(users[userIndex], updatedObject)
  res.send(updatedUser)
})




module.exports = userRouter