import React, { useEffect, useState } from "react";
import axios from "axios"

const MovieContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${ token }`
  return config
})

function MovieProvider(props) {

  const storedUser = JSON.parse(localStorage.getItem("user"))
  const storedToken = localStorage.getItem("token")

  const initialState = {
    user: storedUser || {},
    token: storedToken || "",
    movies: [],
    errMsg: ""
  }

  const [ allMovies, setAllMovies ] = useState([])
  const [ comments, setComments ] = useState([])
  const [ userState, setUserState ] = useState(initialState)

  // USER AUTH //

  function signup(credentials) {
    userAxios.post("/api/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        setUserState(prevState => ({
          ...prevState,
          user,
          token
        }))
      })
    .catch(err => handleAuthError(err.response.data.errMsg))
  }

  function login(credentials) {
    userAxios.post("/api/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        setUserState(prevState => ({
          ...prevState,
          user,
          token
        }))
      })
    .catch(err => handleAuthError(err.response.data.errMsg))
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      movies: []
    })
  }

  function handleAuthError(errMsg) {
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthError() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  // MOVIES //

  function getMovies() {
    userAxios.get("/api/movies")
      .then(res => {
        setAllMovies(res.data)
      })
      .catch(err => console.log(err))
  }

  function getUserMovies() {
    userAxios.get("/api/movies/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          movies: res.data
        }))
      })
      .catch(err=> console.log(err))
  }

  function addMovie(newMovie) {
    userAxios.post("/api/movies", newMovie)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          movies: [ ...prevState.movies, res.data ]
        }))
      })
      .catch(err => console.log(err))
  }

  // COMMENTS //

  function getComments() {
    userAxios.get("/api/comments")
      .then(res => {
        setComments(res.data)
      })
      .catch(err => console.log(err))
  }

  function addComment(newComment, movieId) {
    userAxios.post(`/api/comments/${ movieId }`, newComment)
      .then(res => {
        setComments(prev => [ ...prev, res.data ])
      })
      .catch(err => console.log(err))
  }

  // LIKING //

  function likeMovie(movieId) {
    userAxios.put(`/api/movies/like/${ movieId }`)
      .then(res => {
        setAllMovies(prevMovies => prevMovies.map(movie => movieId !== movie._id ? movie : res.data))
        setUserState(prevState => ({ ...prevState, movies: prevState.movies.map(movie => movieId !== movie._id ? movie : res.data) }))
      })
      .catch(err => console.log(err))
  }

  function removeLikedMovie(movieId) {
    userAxios.put(`/api/movies/removelike/${ movieId }`)
      .then(res => {
        // console.log("removeLikedMovie - MovieProvider", movieId)
        setAllMovies(prevMovies => prevMovies.map(movie => movieId !== movie._id ? movie : res.data))
        setUserState(prevState => ({ ...prevState, movies: prevState.movies.map(movie => movieId !== movie._id ? movie : res.data) }))
      })
      .catch(err => console.log(err))
  }

  return (
    <MovieContext.Provider value={{
      ...userState,
      allMovies,
      comments,
      signup,
      login,
      logout,
      resetAuthError,
      getMovies,
      addMovie,
      getUserMovies,
      getComments,
      addComment,
      likeMovie,
      removeLikedMovie
    }}>
      { props.children }
    </MovieContext.Provider>
  )
}


export { MovieProvider , MovieContext }