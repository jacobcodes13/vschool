const express = require("express")
const app = express()
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const {expressjwt} = require("express-jwt")

// RuLecxxBafpUmWCo mongodb+srv://jacobnevitt13:<password>@level-6-capstone.oc8cy5d.mongodb.net/

app.use(express.json())
app.use(morgan("dev"))

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://jacobnevitt13:RuLecxxBafpUmWCo@level-6-capstone.oc8cy5d.mongodb.net/level6Capstone", (err) => {
  console.log("Connected to Lvl 6 Capstone DB", err)
})

app.use("/api/auth", require("./routes/userRouter"))
app.use("/api", expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }))
app.use("/api/movies", require("./routes/movieRouter"))
app.use("/api/comments", require("./routes/commentRouter"))

app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({ errMsg: err.message })
})

app.listen(7000, () => {
  console.log("App is running on port 7000!")
})