import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

export default function Main() {
  // console.log("main-props: ", props)

  // Passing down themeMode and toggleTheme so we can change the theme and add functionality to the button
  const { themeMode, toggleTheme } = useContext(ThemeContext)

  // Make the "Light" a ternerary so we can switch th wording from light to dark and vice versa
  return (
    <div className="main"> 
      <h1 className={`${themeMode}--theme`}>Click the button to toggle the Light theme!</h1>
      <button onClick={toggleTheme} className={`${themeMode}--theme`}>Toggle Theme</button>
    </div>
  )
}