import React from "react"
import trollFace from "../assets/trollface-logo.png"

export default function Navbar() {
  return (
    <div className="navbar--wrapper">
      <div className="trollface--h1">
        <img alt="Trollface" src={trollFace} className="navbar--logo" onClick={() => window.open("https://www.youtube.com/shorts/iUXAHc-ABoY")}/>
        <h1 className="navbar--title">Meme List Generator</h1>
      </div>
      <p className="navbar--level">Level 3 - Project</p>
    </div>
  )
}

  /* 
    Have the logo in the top left (With a youtube video it goes to)

    "Meme List Generator" as the title

    "Level 3 Project" will be on the right side of the Navbar
  */