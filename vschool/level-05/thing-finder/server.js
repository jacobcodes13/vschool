const express = require("express")
const app = express()


app.use(express.json())

const inventoryItems = [
  {
      name: "banana",
      type: "food",
      price: 200,
  },{
      name: "pants",
      type: "clothing",
      price: 2500,
  },{
      name: "basket ball",
      type: "toy",
      price: 1000,
  },{
      name: "rockem sockem robots",
      type: "toy",
      price: 1500,
  },{
      name: "shirt",
      type: "clothing",
      price: 800,
  },{
      name: "soup",
      type: "food",
      price: 300,
  },{
      name: "flour",
      type: "food",
      price: 100,
  }
]

app.get("/", (req, res) => {
  res.send(inventoryItems)
})

app.get("/fruit", (req, res) => {
  // console.log(req)
  const type = req.query.name
  const filteredItems = inventoryItems.filter(item => item.name === type)
  res.send(filteredItems)
})




app.listen(7000, () => {
  console.log("App is running on PORT 7000")
})