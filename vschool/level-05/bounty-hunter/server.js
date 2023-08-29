const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/bounty", require("./routes/bountyRouter"))


app.listen(8000, () => {
  console.log("App is running on PORT 8000")
})