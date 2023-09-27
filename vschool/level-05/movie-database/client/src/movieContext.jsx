import React, { useEffect, useState } from "react"
import axios from "axios"

const MovieContext = React.createContext()

function MovieContextProvider(props) {

  const [ movies, setMovies ] = useState([])

  // console.log(movies)

  const [ userInput, setUserInput ] = useState({
    title: "Title",
    image: "https://i.etsystatic.com/11580108/r/il/e93464/4274686270/il_340x270.4274686270_t0zi.jpg",
    description: "Description"
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

  function updateLikes(movieId, updatedLikes) {
    const likeData = {
      movieId: movieId,
      likes: updatedLikes
    }

    axios.put(`/api/movies/likes/${movieId}`, likeData)
      .then(res => {
        const updatedLikesCount = res.data.likes
        
        setMovies(prevMovies => {
          return prevMovies.map(movie => {
            if (movie._id === movieId) {
              return { ...movie, likes: updatedLikesCount }
            }
            return movie
          })
        })
      })
      .catch(err => console.log("Error with PUT request for likes: ", err))
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
      setUserInput: setUserInput,
      updateLikes: updateLikes
    }}>
      { props.children }
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieContextProvider }