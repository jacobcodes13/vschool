// Dependencies //
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// 153dE9GX2UdiRMqw   mongodb+srv://jacobcodes13:<password>@cluster0.rt2skov.mongodb.net/movieDatabase //

// Middleware //
app.use(express.json())
app.use(morgan("dev"))

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://jacobcodes13:153dE9GX2UdiRMqw@cluster0.rt2skov.mongodb.net/movieDatabase", (err) => {
  console.log("Connected to MongoDB!", err)
})

app.use("/api/movie", require("./routes/movieRouter"))

// Error Handler //
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({ errMsg: err.message })
})

app.listen(7750, () => {
  console.log("Server is running on Port 7750!")
})