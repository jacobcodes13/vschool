const express = require("express")
const app = express() 
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const {expressjwt} = require("express-jwt")

//  OFvV1MQmtq9zeDAX  mongodb+srv://jacobcodes13:<password>@rtv.f9ckq7d.mongodb.net/

app.use(express.json())
app.use(morgan("dev"))

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://jacobcodes13:OFvV1MQmtq9zeDAX@rtv.f9ckq7d.mongodb.net/rtvServer", (err) => {
  console.log("Connected to MongoDB!", err)
})

app.use("/api/auth", require("./routes/userRouter"))
app.use("/api", expressjwt({ secret: process.env.SECRET, algorithms: ["HS256"] }))
app.use("/api/issues", require("./routes/issueRouter"))
app.use("/api/comments", require("./routes/commentRouter"))

app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "UnauthorizedError") {
    res.status(err.status)
  }
  return res.send({ errMsg: err.message })
})

app.listen(6850, () => {
  console.log("App is running on Port 6850!")
})