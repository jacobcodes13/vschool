const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

// xgKCwzNDSmJtKWVF   mongodb+srv://jacobcodes13:<password>@cluster0.s4tfwqf.mongodb.net/

// Middleware //
app.use(express.json()) // Looks for a request body (turns into "req.body")
app.use(morgan("dev"))  // Logs requests to console

// Routes //
app.use("/api/users", require("./routes/userRouter"))
app.use("/api/items", require("./routes/itemRouter"))

// Connect to DB //
mongoose.connect('mongodb+srv://jacobcodes13:xgKCwzNDSmJtKWVF@cluster0.s4tfwqf.mongodb.net/expressServer', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error(err));


// Error Handling //
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({ errMsg: err.message })
})


// Server Listen //
app.listen(9000, () => {
  console.log("Your app is running on PORT 9000")
})