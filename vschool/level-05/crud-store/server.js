// uPnBKBk9Jr7r3guM   mongodb+srv://jacobcodes13:<password>@crud-store.ftckcor.mongodb.net/

// Dependencies //
const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// Middleware //
app.use(express.json())
app.use(morgan("dev"))

mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://jacobcodes13:uPnBKBk9Jr7r3guM@crud-store.ftckcor.mongodb.net/crudStore", (err) => {
  console.log("Connected to MongoDB!", err)
})

app.use("/api/inventory", require("./routes/inventoryRouter"))

// Error Handler //
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({ errMsg: err.message })
})

app.listen(7500, () => {
  console.log("Server is running on Port 7500!")
})