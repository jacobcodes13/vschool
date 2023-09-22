import React, { useContext } from "react"
import { MovieContext } from "../movieContext"
import Movie from "./Movie"

function MovieList() {

  const { movies } = useContext(MovieContext)

  // console.log(movies)

  const mappingMovies = movies.map(movie => {
    // console.log(movie)
    return (
      <div>
        <ul>
          <Movie
            key={ movie._id }
            movieInfo={ movie }
          />
        </ul>
      </div>
    )
  })

  return (
    <div>
      { mappingMovies }
    </div>
  )
}

export default MovieList