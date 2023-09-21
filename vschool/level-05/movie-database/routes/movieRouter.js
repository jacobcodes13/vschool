const express = require("express")
const Movie = require("../models/movie")
const movieRouter = express.Router()

// GET All //
movieRouter.get("/", (req, res, next) => {
  Movie.find((err, movies) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(movies)
  })
})

// GET One //
movieRouter.get("/:movieId", (req, res, next) => {
  Movie.find({ _id: req.params.movieId }, (err, foundMovie) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    res.status(200).send(foundMovie)
  })
})

// GET by Genre //
movieRouter.get("/search", (req, res, next) => {
  
})

// POST One //
movieRouter.post("/", (req, res, next) => {
  const newMovie = new Movie(req.body)
  newMovie.save((err, savedMovie) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedMovie)
  })
})

// DELETE One //
movieRouter.delete("/:movieId", (req, res, next) => {
  Movie.findOneAndDelete({ _id: req.params.movieId }, (err, removedMovie) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Removed the movie ${removedMovie.title} from the database!`)
  })
})

// UPDATE One //
movieRouter.put("/:movieId", (req, res, next) => {
  Movie.findOneAndUpdate(
    { _id: req.params.movieId },
    req.body,
    { new: true },
    (err, updatedMovie) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedMovie)
    }
  )
})

module.exports = movieRouter