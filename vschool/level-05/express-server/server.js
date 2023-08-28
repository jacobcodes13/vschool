const express = require("express")
const app = express()
const morgan = require("morgan")


app.use(express.json())
app.use(morgan("dev"))

app.use("/users", require("./routes/userRouter"))

app.use("/items", require("./routes/itemRouter"))


app.listen(9000, () => {
  console.log("Your app is running on PORT 9000")
})