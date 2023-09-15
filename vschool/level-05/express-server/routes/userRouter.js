const express = require("express")
const userRouter = express.Router()
const User = require("../models/user")


// Version 7 Mongoose for GET All //
userRouter.get("/", async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// // Version 6 Mongoose for GET All //
// userRouter.get("/", (req, res, next) => {
//   User.find((err, users) => {
//     if (err) {
//       res.status(500);
//       return next(err);
//     }
//     return res.status(200).send(users)
//   })
// });

// Version 7 Mongoose for POST One //
userRouter.post("/", async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// // Version 6 Mongoose for POST One //
// userRouter.post("/", (req, res, next) => {
//   const newUser = new User(req.body);
//   newUser.save((err, savedUser) => {
//     if (err) {
//       res.status(500);
//       return next(err);
//     }
//     return res.status(201).send(savedUser)
//   })
// });

// // GET One //
// userRouter.get("/:userId", (req, res, next) => {
//   const userId = req.params.userId
//   const foundUser = users.find(user => user._id === userId)
//   if (!foundUser) {
//     const error = new Error(`The User with id ${userId} was not found.`)
//     res.status(500)
//     return next(error)
//   }
//   res.status(200).send(foundUser)
// })

// // GET by Hobby //
// userRouter.get("/search/hobby", (req, res) => {
//   const hobby = req.query.hobby
//   const filteredUsers = users.filter(user => user.hobby === hobby)
//   res.status(200).send(filteredUsers)
// })

// Version 7 Mongoose for DELETE One //
userRouter.delete("/:userId", async (req, res, next) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });
    if (!deletedUser) {
      res.status(404).send("User not found");
    } else {
      res.status(200).send(`Successfully deleted item ${deletedUser.name} from the database!`);
    }
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// // Version 6 Mongoose for DELETE One //
// userRouter.delete("/:userId", (req, res) => {
//   User.findOneAndDelete({ _id: req.params.userId}, (err, deletedUser) => {
//     if (err) {
//       res.status(500);
//       return next(err)
//     }
//     return res.status(200).send(`Successfully deleted item ${deletedUser.name} from the database!`)
//   })
// })

// UPDATE One //
userRouter.put("/:userId", (req, res) => {
  const userId = req.params.userId
  const updatedObject = req.body
  const userIndex = users.findIndex(user => user._id === userId)
  const updatedUser = Object.assign(users[userIndex], updatedObject)
  res.status(201).send(updatedUser)
})


module.exports = userRouter