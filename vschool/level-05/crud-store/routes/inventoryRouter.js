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

// GET One //
inventoryRouter.get("/:itemId", (req, res, next) => {
  Inventory.find({ _id: req.params.itemId }, (err, foundItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(foundItem)
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

// DELETE One //
inventoryRouter.delete("/:itemId", (req, res, next) => {
  Inventory.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${deletedItem.title}from the MongoDB!`)
  })
})

// UPDATE One //
inventoryRouter.put("/:itemId", (req, res, next) => {
  Inventory.findByIdAndUpdate(
    { _id: req.params.itemId },
    req.body,
    { new: true },
    (err, updatedItem) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedItem)
    }
  )
})

module.exports = inventoryRouter