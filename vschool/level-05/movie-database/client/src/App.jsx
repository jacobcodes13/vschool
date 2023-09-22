import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import MovieList from "./components/movies/MoviesList"
import AddMovieForm from "./components/addMovieForm"
import './App.css'

function App() {

  return (
    <div className="App">
      <Router>

        <nav className="navbar">
          <Link to="/" className="navbar--link" style={{ margin: 10, padding: 5 }}>
            Home
          </Link>
          <Link to="/addMovie" className="navbar--link" style={{ margin: 10, padding: 5 }}>
            Add Movie
          </Link>
          <Link to="/movies" className="navbar--link" style={{ margin: 10, padding: 5 }}>
            Movies
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movies" element={ <MovieList /> } />
          <Route path="/addMovie" element={ <AddMovieForm /> } />
        </Routes>
      </Router>
    </div>
  )
}

export default App
