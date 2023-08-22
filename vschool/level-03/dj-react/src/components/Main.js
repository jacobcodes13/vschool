import React from "react"
import Boxes from "./Boxes"
// import Buttons from "./Buttons"

export default function Main() {
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])

  const colorElements = colors.map((color, index) => {
    return (
      <Boxes 
        key={index} 
        color={color}  
      />
    )
  })

  //if("white"){
  //   return "black"
  // } else {
  //   return "white"
  // }

  // ["white"] ? ["black"] : ["white"]

  function smallTimeDJ() {
    setColors(prevColor => prevColor.map(each => each === "white" ? "black" : "white"))
    // Need to setup a ternary to have it change from white to black or black to white on click
  }

  function partyDJ() {
    setColors(prevColor => prevColor = ["purple", "purple", prevColor, prevColor])
  }

  function leftBlue() {
    setColors(prevColor => prevColor = [prevColor, prevColor, "blue", prevColor])
  }

  function rightBlue() {
    setColors(prevColor => prevColor = [prevColor, prevColor, prevColor, "blue"])
  }

  function buttonOne() {
    setColors(prevColor => prevColor = ["orange", prevColor, prevColor, prevColor])
  }

  function buttonTwo() {
    setColors(prevColor => prevColor = [prevColor, "yellow", prevColor, prevColor])
  }

  function buttonThree() {
    setColors(prevColor => prevColor = [prevColor, prevColor, "green", prevColor])
  }
  
  function buttonFour() {
    setColors(prevColor => prevColor = [prevColor, prevColor, prevColor, "red"])
  }

  // Make some noise option (Dont know how to do this)

  return (
    <div>
      <div className="container">
        {colorElements}
      </div>
      <div className="button--container">
        <button onClick={smallTimeDJ}>Small time DJ</button>
        <button onClick={partyDJ}>Party DJ</button>
        <button onClick={leftBlue}>Left Blue</button>
        <button onClick={rightBlue}>Right Blue</button>
        <button onClick={buttonOne}>Button 1</button>
        <button onClick={buttonTwo}>Button 2</button>
        <button onClick={buttonThree}>Button 3</button>
        <button onClick={buttonFour}>Button 4</button>
        <button>Make Some Noise</button>
      </div> 
    </div>
  )
}