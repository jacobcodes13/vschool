import React from "react"
import { useNavigate } from "react-router-dom"

export default function About() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ margin: 5 }}>About Page</h2>
      { <p style={{ margin: 5 }}>Alittle about us....</p> }
      { <p style={{ margin: 5 }}>Go to Services Page</p> }
      <button onClick={() => navigate("/services")}>Services</button>
      { <p style={{ margin: 5 }}>Go to Home Page</p> }
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}