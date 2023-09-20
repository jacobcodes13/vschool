const express = require("express")
const Movie = require("../models/movie")
const movieRouter = express.Router()

// POST One //
movieRouter.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body)
  newMovie.save((err, savedMovie) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).esnd(savedMovie)
  })
})

module.exports = movieRouter