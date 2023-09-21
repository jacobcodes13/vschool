import { MovieContextProvider } from './components/movieContext'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import './App.css'

function App() {


  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <Home />
      </MovieContextProvider>
    </div>
  )
}

export default App
