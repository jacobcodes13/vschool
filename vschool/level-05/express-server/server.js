const express = require("express")
const app = express()
const morgan = require("morgan")

// Middleware //
app.use(express.json()) // Looks for a request body (turns into "req.body")
app.use(morgan("dev"))  // Logs requests to console

// Routes //
app.use("/api/users", require("./routes/userRouter"))
app.use("/api/items", require("./routes/itemRouter"))


// Error Handling //
app.use((err, req, res, next) => {
  console.log(err)
})


// Server Listen //
app.listen(9000, () => {
  console.log("Your app is running on PORT 9000")
})