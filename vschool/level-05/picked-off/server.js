const express = require("express")
const changes = require("./middleware/changes")
const app = express()

app.use(express.json())

app.use("/object", (req, res, next) => {
  changes(req, res, next)
})

app.use("/object", (req, res) => {
  res.send(req.body)
})



app.listen(6000, () => {
  console.log("App is running on PORT 6000")
})