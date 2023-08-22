import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

export default function Navbar() {

  const { themeMode } = useContext(ThemeContext)

  return (
    <>
      <ul className={`${themeMode}--theme`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </>
  )
}