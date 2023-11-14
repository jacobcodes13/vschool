import React, { useContext, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Auth from "./components/Auth"
import Home from "./components/Home"
import Profile from "./components/Profile"
import Details from "./components/Details"
import ProtectedRoutes from "./components/ProtectedRoutes"
import { MovieContext } from "./context/MovieProvider"

function App() {

  const { token, logout, movies, getMovies, getUserMovies, getComments } = useContext(MovieContext)

  useEffect(() => {
    getMovies()
    getUserMovies()
    getComments()
  }, [])

  return (
    <div className="app">
      { token && <Navbar logout={ logout } /> }
      <Routes>
        <Route path="/" element={ token ? <Home /> : <Auth /> } />
        <Route path="/profile" element={ <ProtectedRoutes token={ token } redirectTo="/">
          <Profile movies={ movies } />
        </ProtectedRoutes> } />
        <Route path="/details/:movieId" element={ <ProtectedRoutes token={ token } redirectTo="/">
          <Details />
        </ProtectedRoutes> } />
      </Routes>
    </div>
  )
}

export default App
