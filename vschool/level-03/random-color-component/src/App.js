import React from "react"

function App() {
  const [colorData, setColorData] = React.useState("")
  const [changer, setChanger] = React.useState(true)

  React.useEffect(() => {
    fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
      .then(res => res.json())
      .then(data => setColorData(data.colors[0].hex))
  }, [changer])

  return (
    <div className="app">
      <div className="header">
        <h1>Random Color Generator</h1>
        <p>Generate random colors</p>
        <button onClick={() => setChanger(prev => !prev)}>Generate</button>
      </div>
      <div className="box--wrapper">
        <div className="box" style={{backgroundColor: `#${colorData}`}}></div>
        <div className="color">{`#${colorData}`}</div>
      </div>
    </div>
  );
}

export default App;
