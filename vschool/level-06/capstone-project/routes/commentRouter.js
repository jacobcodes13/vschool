const express = require("express")
const Comment = require("../models/Comment")
const commentRouter = express.Router()

// GET All //
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

// POST One //
commentRouter.post("/:movieId", (req, res, next) => {
  req.body.user = req.auth._id
  req.body.movie = req.params.movieId
  const newComment = new Comment(req.body)

  newComment.save((err, savedComment) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedComment)
  })
})

module.exports = commentRouter