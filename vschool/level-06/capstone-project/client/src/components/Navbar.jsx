import React from "react";
import { Link } from "react-router-dom"

export default function Navbar(props) {

  const { logout } = props

  return (
    <div className="navbar">
      <div>
        <Link to="/"  className="navbar-link"  style={{ margin: 10, padding: 5 }}>Home</Link>
        <Link to="/profile" className="navbar-link" style={{ margin: 10, padding: 5 }}>Profile</Link>
      </div>
      <button className="logout-btn" onClick={ logout }>Logout</button>
    </div>
  )
}