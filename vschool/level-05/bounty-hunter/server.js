const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// sr2NYCIHZ0LPNPor   mongodb+srv://jacobcodes13:<password>@cluster0.gfahjdy.mongodb.net/

app.use(express.json())
app.use(morgan("dev"))

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://jacobcodes13:sr2NYCIHZ0LPNPor@cluster0.gfahjdy.mongodb.net/bountyHunter", (err) => {
  console.log("Connected to MongoDB!", err)
})

app.use("/api/bounty", require("./routes/bountyRouter"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({ errMsg: err.message })
})

app.listen(8000, () => {
  console.log("App is running on PORT 8000")
})