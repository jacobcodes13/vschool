import React, { useEffect, useState } from "react"
import axios from "axios"

const MovieContext = React.createContext()

function MovieContextProvider(props) {

  const [ movies, setMovies ] = useState([])

  function getMovies() {
    axios.get("/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log("Error with GET request: ", err))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <MovieContext.Provider value={{
      movies: movies
    }}>
      { props.children }
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieContextProvider }