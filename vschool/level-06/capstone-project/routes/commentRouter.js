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

// DELETE One //
commentRouter.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentId, user: req.auth._id },
    (err, deletedComment) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted movie: ${ deletedComment.description }`)
    }
  )
})

// UPDATE One //
commentRouter.put("/:commentId", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id:req.params.commentId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedComment) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedComment)
    }
  )
})

module.exports = commentRouter