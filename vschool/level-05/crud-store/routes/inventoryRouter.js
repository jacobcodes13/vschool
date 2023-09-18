const express = require("express")
const Inventory = require("../models/inventory")
const inventoryRouter = express.Router()

// GET All //
inventoryRouter.get("/", (req, res, next) => {
  Inventory.find((err, inventoryItems) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(inventoryItems)
  })
})

// POST One //
inventoryRouter.post("/", (req, res, next) => {
  const newInventoryItem = new Inventory(req.body)
  newInventoryItem.save((err, savedInventoryItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    if (!savedInventoryItem) {
      res.status(404)
      return next(new Error("Item not found!"))
    }
    return res.status(201).send(savedInventoryItem)
  })
})

module.exports = inventoryRouter