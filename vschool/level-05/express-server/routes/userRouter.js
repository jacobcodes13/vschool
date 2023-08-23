const express = require("express")
const userRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const users = [
  { name: "Jacob", age: 25, hobby: "Gym", _id: uuidv4() },
  { name: "Janice", age: 35, hobby: "Cooking", _id: uuidv4() },
  { name: "Noah", age: 20, hobby: "Gym", _id: uuidv4() }
]

userRouter.get("/", (req, res) => {
  res.send(users)
})

userRouter.post("/", (req, res) => {
  const newUser = req.body
  newUser._id = uuidv4()
  users.push(newUser)
  res.send(`Successfully added ${newUser.name} to the database`)
})




module.exports = userRouter