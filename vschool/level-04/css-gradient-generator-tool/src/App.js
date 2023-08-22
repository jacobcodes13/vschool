import React, { useState } from "react"

function App() {

  const [colors, setColors] = useState({
    color1: "#ff5733",
    color2: "#337dff"
  });

  const [gradientAngle, setGradientAngle] = useState(50);

  function colorChange(e) {
    // console.log(`event: `, e)
    
    const { name, value } = e.target;
    
    setColors(prevColors => ({
      ...prevColors,
      [ name ]: value
  }))
    
  }

  // console.log(`colors: `, colors.color1)
  // console.log(`colors: `, colors.color2)
  

  function angleChange(e) {

    const { value } = e.target;

    setGradientAngle(value)
    
  }

  return (
    <div className="App">
      <h1>CSS Gradient Code Generator</h1>

      <div className="box">

        {/* This is where LeftBlock is going */}
        <div className="box--one">
          <div className="color--display" style={{background: `linear-gradient(${gradientAngle}deg, ${colors.color1}, ${colors.color2})`}}></div>
          <textarea readOnly value={`linear-gradient(${gradientAngle}deg, ${colors.color1}, ${colors.color2})`}/>
        </div>

        {/* This is where RightBlock is going */}
        <div className="box--two">
          <h2>Options</h2>
          <form className="form">
            <div>
              Color 1: <p>{colors.color1}</p> <input 
                type="color"
                name="color1"
                className="color1"
                value={colors.color1}
                onChange={colorChange}
              />
            </div>
            <div>
              Color 2: <p>{colors.color2}</p> <input
                type="color"
                name="color2"
                className="color2"
                value={colors.color2}
                onChange={colorChange}
              />
            </div>
            <div>
              Angle: <input
                type="number"
                value={gradientAngle}
                onChange={angleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;