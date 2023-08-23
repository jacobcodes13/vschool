const express = require("express")
const app = express()
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

app.get("/bounty", (req, res) => {
  res.send(bounties)
})

app.post("/bounty", (req, res) => {
  const newBounty = req.body
  newBounty._id = uuidv4()
  bounties.push(newBounty)
  res.send(`Added ${newBounty.name} to the database`)
})



app.listen(8000, () => {
  console.log("App is running on PORT 8000")
})