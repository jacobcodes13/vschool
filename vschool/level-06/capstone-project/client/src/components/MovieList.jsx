import React, { useContext } from "react";
import Movie from "./Movie"

export default function MovieList(props) {

  const { movies } = props

  return (
    <div className="movie-list">
      { movies.map(movie => <Movie { ...movie } key={ movie._id } />) }
    </div>
  )
}