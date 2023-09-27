import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MovieContext } from "../movieContext"

function Home() {
  const navigate = useNavigate()

  const { movies } = useContext(MovieContext)

  const homePageMovies = movies.map(movie => {
    return (
      <div className="home--movie" key={movie._id}>
        <div className="home--movie--header">
          <h1>Title: { movie.title }</h1>
        </div>
        <div className="home--movie--image">
          <img onClick={() => navigate("/movies")} className="movie--image" src={ movie.image } alt="Cover Image" />
        </div>
      </div>
    )
  })

  // console.log(homePageMovies)

  return (
    <div className="home--page">
      { homePageMovies }
    </div>
  )
}

export default Home