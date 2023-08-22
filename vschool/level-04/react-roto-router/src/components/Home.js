import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: 20 }}>
      <h2>Home Page</h2>
      { <p style={{ margin: 5 }}>This is our Home page <br/><br/> If you feel like checking out alittle about us click this!</p> }
      <button onClick={() => navigate("/about")}>Go to the About page</button>
      { <p style={{ margin: 5 }}>If you'd like to check out our services then click this!</p>}
      <button onClick={() => navigate("/services")}>Go to the Services page</button>
    </div>
  )
}