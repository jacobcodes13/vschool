const express = require("express")
const issueRouter = express.Router()
const Issue = require("../models/Issue")

// GET All
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// GET Issue by User Id
issueRouter.get("/:userId", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, issues) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// POST One
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)

  newIssue.save((err, savedIssue) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(savedIssue)
  })
})

// DELETE One
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue: ${ deletedIssue.title }`)
    }
  )
})

// UPDATE One
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

// UpVotes

issueRouter.put("/upvotes/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: { upVotes: req.auth._id },
      $pull: { downVotes: req.auth._id }
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

// DownVotes

issueRouter.put("/downvotes/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: { downVotes: req.auth._id },
      $pull: { upVotes: req.auth._id }
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})


module.exports = issueRouter