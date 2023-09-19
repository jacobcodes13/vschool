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

// POST One //
bountyRouter.post("/", (req, res) => {
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
    return res.status(201).send(`Successfully deleted ${deletedBounty.title} from the MongoDB!`)
  })
})

bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
  res.send(updatedBounty)
})



module.exports = bountyRouter