const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")


app.use(express.json())

const arrOfObjects = [
  {
    name: "2003-04 Ford Cobra Mustang (aka Terminator)",
    description: "This is my favorite car!",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavyvwKcFjYqOOGPJ9BuWR8AX8-avV10FunQ&usqp=CAU",
    completed: false,
    _id: uuidv4()
  },
  {
    name: "2004-2006 Chevy Duramax (LLY)",
    description: "This is my favorite diesel truck!",
    imageUrl: "https://media.nextechclassifieds.com/img/listings/di/dirtrider22/listing_pic_1561868_1532486333.jpeg",
    completed: false,
    _id: uuidv4()
  }
]

app.get("/", (req, res) => {
  res.send(arrOfObjects)
})

app.get("/:favoriteId", (req, res) => {
  const favoriteId = req.params.favoriteId
  const foundFavorite = arrOfObjects.find(favorite => favorite._id === favoriteId)
  res.send(foundFavorite)
})

app.post("/", (req, res) => {
  const newFavorite = req.body
  newFavorite._id = uuidv4()
  arrOfObjects.push(newFavorite)
  res.send(`Successfully added ${newFavorite.name} to the database`)
})

app.put("/:favoriteId", (req, res) => {
  // console.log(req)
  const favoriteId = req.params.favoriteId
  const favoriteIndex = arrOfObjects.findIndex(favorite => favorite._id === favoriteId)
  const updatedFavorite = Object.assign(arrOfObjects[favoriteIndex], req.body)
  res.send(updatedFavorite)
})

app.delete("/:favoriteId", (req, res) => {
  const favoriteId = req.params.favoriteId
  const favoriteIndex = arrOfObjects.findIndex(favorite => favorite._id === favoriteId)
  arrOfObjects.splice(favoriteIndex, 1)
  res.send("Successfully removed favorite!")
})



app.listen(5000, () => {
  console.log("App is running on PORT 5000")
})