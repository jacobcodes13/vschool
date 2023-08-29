const express = require("express")
const bountyRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bounties = [
  { 
    name: "Yoda",
    living: true,
    bountyAmount: 500000,
    type: "Jedi",
    _id: uuidv4() 
  },
  { 
    name: "Darth Vader",
    living: true,
    bountyAmount: 1000000,
    type: "Sith",
    _id: uuidv4() 
  },
  { 
    name: "Obi-Wan Kenobi",
    living: true,
    bountyAmount: 400000,
    type: "Jedi",
    _id: uuidv4() 
  }
]

app.get("/", (req, res) => {
  res.send(bounties)
})

app.post("/", (req, res) => {
  const newBounty = req.body
  newBounty._id = uuidv4()
  bounties.push(newBounty)
  res.send(`Added ${newBounty.name} to the database`)
})

app.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  bounties.splice(bountyIndex, 1)
  res.send("Succedssfully deleted Bounty!")
})

app.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId
  const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
  const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
  res.send(updatedBounty)
})



module.exports = bountyRouter