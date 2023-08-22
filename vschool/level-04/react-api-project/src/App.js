import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import CharactersList from "./components/characters/CharactersList"
import WeaponsList from "./components/weapons/WeaponsList"

function App() {
  return (
    <Router>
      {/* Maybe make this navbar fixed so it doesnt disappear when scrolling? */}
      <nav className="navbar"> 
        <Link to="/" className="navbar--link" style={{ margin: 10, padding: 5 }}>
          Home
        </Link>
        <Link to="/characters" className="navbar--link" style={{ margin: 10, padding: 5 }}>
          Characters
        </Link>
        <Link to="/weapons" className="navbar--link" style={{ margin: 10, padding: 5 }}>
          Weapons
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/weapons" element={<WeaponsList />} />
      </Routes>
    </Router>
  );
}

export default App;
