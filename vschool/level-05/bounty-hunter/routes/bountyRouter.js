const express = require("express")
const Bounty = require("../model/bounty")
const bountyRouter = express.Router()

// GET All //
bountyRouter.get("/", (req, res, next) => {
  Bounty.find((err, bounties) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounties)
  })
})

// GET One //
bountyRouter.get("/:bountyId", (req, res, next) => {
  Bounty.find({ _id: req.params.bountyId }, (err, bounty) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(bounty)
  })
})

// POST One //
bountyRouter.post("/", (req, res, next) => {
  const newBounty = new Bounty(req.body)
  newBounty.save((err, savedBounty) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    res.status(201).send(savedBounty)
  })
})

// DELETE One //
bountyRouter.delete("/:bountyId", (req, res, next) => {
  Bounty.findByIdAndDelete({ _id: req.params.bountyId }, (err, deletedBounty) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${deletedBounty.name} from the MongoDB!`)
  })
})

// UPDATE One //
bountyRouter.put("/:bountyId", (req, res) => {
  Bounty.findOneAndUpdate(
    { _id: req.params.bountyId },
    req.body,
    { new: true },
    (err, updatedBounty) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(updatedBounty)
    }
  )
})



module.exports = bountyRouter