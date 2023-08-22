import React from "react"
import { useNavigate } from "react-router-dom"

export default function Services() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: 20 }}>
      <h2 style={{ margin: 5 }}>Services Page</h2>
      { <p style={{ margin: 5 }}>We do alittle bit of everything</p> }
      { <p style={{ margin: 5 }}>Go to About page</p> }
      <button onClick={() => navigate("/about")}>About</button>
      { <p style={{ margin: 5 }}>Go to Home page</p> }
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}