import DiceBox from "./components/DiceBox"
import React from "react"

function App() {
  const [numbers, setNumbers] = React.useState([null, null, null, null, null])

  
  function rollDie() {
    function randomRoll() {
      return Math.floor((Math.random() * 6) + 1)
    }

    // let rollOne = randomRoll()
    // let rollTwo = randomRoll()
    // let rollThree = randomRoll()
    // let rollFour = randomRoll()
    // let rollFive = randomRoll()
    
    // console.log([randomRoll(), randomRoll(), randomRoll(), randomRoll(), randomRoll()])
    setNumbers([randomRoll(), randomRoll(), randomRoll(), randomRoll(), randomRoll()])
    // console.log(numbers)
  }

  return (
    <div className="App">
      <DiceBox 
        numbers={numbers}
      />
      <div className="container">
        <button onClick={rollDie} className="button">Click To Roll</button>
      </div>
    </div>
  );
}

export default App;
