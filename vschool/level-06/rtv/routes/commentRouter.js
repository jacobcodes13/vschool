const express = require("express")
const commentRouter = express.Router()
const Comment = require("../models/Comment")

// GET All
commentRouter.get("/", (req, res, next) => {
  Comment.find((err, comments) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comments)
  })
})

// GET Comment by Issue Id
commentRouter.get("/:issueId", (req, res, next) => {
  Comment.find({ issueId: req.params.issueId }, (err, comment) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(comment)
  })
})

// POST One
commentRouter.post("/:issueId", (req, res, next) => {
  req.body.user = req.auth._id
  req.body.issue = req.params.issueId
  const newComment = new Comment(req.body)
  
  newComment.save((err, savedComment) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedComment)
  })
})

// DELETE One
commentRouter.delete("/:commentId", (req, res, next) => {
  Comment.findOneAndDelete(
    { _id: req.params.commentId, user: req.auth._id },
    (err, deletedComment) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue: ${ deletedComment.description }`)
    }
  )
})

// UPDATE One
commentRouter.put("/:commentId", (req, res, next) => {
  Comment.findOneAndUpdate(
    { _id: req.params.commentId, user: req.auth._id },
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