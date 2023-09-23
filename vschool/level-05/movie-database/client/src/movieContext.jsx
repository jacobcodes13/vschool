import React, { useEffect, useState } from "react"
import axios from "axios"

const MovieContext = React.createContext()

function MovieContextProvider(props) {

  const [ movies, setMovies ] = useState([])

  const [ userInput, setUserInput ] = useState({
    title: "",
    image: "",
    description: ""
  })

  function getMovies() {
    axios.get("/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log("Error with GET request: ", err))
  }

  function addMovie(movieData) {
    axios.post("/api/movies", movieData)
      .then(res => {
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log("Error with POST request: ", err))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <MovieContext.Provider value={{
      movies: movies,
      setMovies: setMovies,
      addMovie: addMovie,
      userInput: userInput,
      setUserInput: setUserInput
    }}>
      { props.children }
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieContextProvider }