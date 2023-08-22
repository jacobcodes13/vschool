// import React, { useState } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import {ThemeContextProvider} from "./components/themeContext"
// Importing ThemeContextProvider so we can access useContext in each component

function App() {

  // Step 1: Create 3 display components (Navbar, Main and Footer)
  // Step 2: Add functionality to the toggle theme button and set state
  // Step 3: Pass state through props to verify that its working
  // Step 4: Create useContext component to hold all state
  // Step 5: Pass state through useContext and createContext in themeContext component
  
  return (
    <div className="App">
      {/* ThemeContextProvider is surrounding all the components to pass state through with useContext */}
      <ThemeContextProvider>
        <Navbar/>
        <Main/>
        <Footer/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
