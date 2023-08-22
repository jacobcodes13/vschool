import React, { useState } from "react"

// Creating context and giving it a variable to pass down into each component
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {

  const [ themeMode, setThemeMode ] = useState("dark")

  function toggleTheme() {
    setThemeMode(prevTheme => prevTheme === "dark" ? "light" : "dark")
  }

  return (
    // Giving ThemeContext.Provider values so we can target state in each component
    <ThemeContext.Provider value={{
      themeMode: themeMode,
      toggleTheme: toggleTheme
    }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

// Exporting ThemeContext and ThemeContextProvider so we can use it in each component and the main App file
export { ThemeContext, ThemeContextProvider }