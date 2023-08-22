import React, { useContext } from "react"
import UglyThing from "./components/UglyThing"
import Navbar from "./components/Navbar"
import { UglyThingContext } from "./uglyThingContext"

function App() {

  const { storedData } = useContext(UglyThingContext)

  const submittedUglyThing = storedData.map((item) => {

    return (
      <UglyThing
        key={item._id}
        item={item}
      />
  )})

  return (
    <div className="App">
      <Navbar />
      <div className="main">
        {submittedUglyThing}
      </div> 
    </div>
  );
}

export default App;