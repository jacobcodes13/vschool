const express = require("express")
const userRouter = express.Router()
const User = require("../models/user")


// GET All
userRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// GET One
userRouter.get("/:userId", (req, res, next) => {
  const userId = req.params.userId
  const foundUser = users.find(user => user._id === userId)
  if (!foundUser) {
    const error = new Error(`The User with id ${userId} was not found.`)
    res.status(500)
    return next(error)
  }
  res.status(200).send(foundUser)
})

// GET by Hobby
userRouter.get("/search/hobby", (req, res) => {
  const hobby = req.query.hobby
  const filteredUsers = users.filter(user => user.hobby === hobby)
  res.status(200).send(filteredUsers)
})

// POST One
userRouter.post("/", (req, res) => {
  const newUser = req.body
  newUser._id = uuidv4()
  users.push(newUser)
  res.status(201).send(newUser)
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
  res.status(201).send(updatedUser)
})


module.exports = userRouter