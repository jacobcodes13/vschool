import React, { useContext, useEffect } from "react";
import MovieList from "./MovieList";
import MovieForm from "./MovieForm"
import { MovieContext } from "../context/MovieProvider";

export default function Profile(props) {

  const { movies } = props

  const {
    user: { username },
    addMovie,
    getUserMovies,
    getComments
  } = useContext(MovieContext)

  useEffect(() => {
    getUserMovies()
    getComments()
  }, [])

  return (
    <div className="profile">
      <h1>Welcome { username }</h1>
      <h3>Add Movie</h3>
      <MovieForm addMovie={ addMovie } />
      <h3>Your Movies</h3>
      <MovieList movies={ movies } />
    </div>
  )
}