const express = require("express")
const Movie = require("../models/Movie")
const movieRouter = express.Router()

// GET All //
movieRouter.get("/", (req, res, next) => {
  Movie.find(async (err, movies) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    const movieListUsers = await Promise.all(
      movies.map(async (movie) => {
        const movieUser = await movie.populate("user", "-password")
        return { ...movieUser.toObject() }
      })
    )
    res.status(200).send(movieListUsers)
  })
})

// POST One //
movieRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newMovie = new Movie(req.body)

  newMovie.save(async (err, savedMovie) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    const savedMovieWithUser = await savedMovie.populate("user", "-password")
    return res.status(200).send(savedMovieWithUser)
  })
})

// DELETE One //
movieRouter.delete("/:movieId", (req, res, next) => {
  Movie.findOneAndDelete(
    { _id: req.params.movieId, user: req.auth._id },
    (err, deletedMovie) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted movie: ${ deletedMovie.title }`)
    }
  )
})

// UPDATE One //
movieRouter.put("/:movieId", (req, res, next) => {
  Movie.findOneAndUpdate(
    { _id:req.params.movieId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedMovie) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(Movie.updatedMovie)
    }
  )
})


module.exports = movieRouter