import React, { useEffect, useState } from "react"
import axios from "axios"

function MovieContextProvider(props) {

  function getMovies() {
    axios.get("/api/movies")
      .then(res => console.log(res.data))
      .catch(err => console.log("Error with GET request: ", err))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <MovieContext.Provider value={{

    }}>
      { props.children }
    </MovieContext.Provider>
  )
}

export { MovieContext, MovieContextProvider }