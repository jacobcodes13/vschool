const express = require("express");
const issueRouter = express.Router();
const Issue = require("../models/Issue");
// const Comment = require('../models/Comment')

// GET All //
issueRouter.get("/", (req, res, next) => {
  Issue.find(async (err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    const issueListUsers = await Promise.all(
      issues.map(async (issue) => {
        const issueUser = await issue.populate("user", "-password");
        return { ...issueUser.toObject() };
      })
    );
    return res.status(200).send(issueListUsers);
  });
});

// Version 7 Mongoose //
// issueRouter.get("/", async (req, res, next) => {
//   try {
//     const issues = await Issue.find();

//     const issueListUsers = await Promise.all(
//       issues.map(async (issue) => {
//         const issueUser = await issue.populate("user", "-password");
//         const issueComments = await Comment.find({issue: issue._id}).populate('user', '-password')
//         return { ...issueUser.toObject(), issueComments };
//       })
//     );
//     return res.status(200).send(issueListUsers);
//   } catch (err) {
//     res.status(500);
//     return next(err);
//   }
// });

// GET Issue by User Id //
issueRouter.get("/:userId", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issues);
  });
});

// POST One //
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id;
  const newIssue = new Issue(req.body);

  newIssue.save(async(err, savedIssue) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    const savedIssueWithUser = await savedIssue.populate("user", "-password")
    return res.status(200).send(savedIssueWithUser);
  });
});

// DELETE One //
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`Successfully deleted issue: ${deletedIssue.title}`);
    }
  );
});

// UPDATE One //
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedIssue);
    }
  );
});

// UpVotes //
issueRouter.put("/upvotes/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: { upVotes: req.auth._id },
      $pull: { downVotes: req.auth._id },
    },
    { new: true },
    async(err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      const updatedIssueWithUser = await updatedIssue.populate('user', '-password')
      return res.status(201).send(updatedIssueWithUser);
    }
  );
});

// DownVotes //
issueRouter.put("/downvotes/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: { downVotes: req.auth._id },
      $pull: { upVotes: req.auth._id },
    },
    { new: true },
    async(err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      const updatedIssueWithUser = await updatedIssue.populate('user', '-password')
      return res.status(201).send(updatedIssueWithUser);
    }
  );
});

module.exports = issueRouter;
