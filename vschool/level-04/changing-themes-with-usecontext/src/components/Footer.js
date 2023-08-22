import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

export default function Footer() {

  // Destructuring themeMode from an object so we can use it to change the themeMode
  const { themeMode } = useContext(ThemeContext)

  return (
    <>
      <h4 className={`${themeMode}--theme`}>Amazing Footer</h4>
    </>
  )
}