import React, { useState, useEffect, useRef } from "react"

function App() {
  const TIMER = 5

  const [text, setText] = useState("");
  const [timer, setTimer] = useState(TIMER);
  const [isRunning, setIsRunning] = useState(false);
  const [wordCounter, setWordCounter] = useState(0);
  const textBoxRef = useRef(null);

  // Step 1: Track every keystroke the user inputs into the textarea
  function handleChange(e) {
    const { value } = e.target;

    setText(value);
  }

  // Step 2: Calculate how many words are typed into the textarea
  function calculateWordCount(text) { // Using a parameter so we dont modify the state text
    const wordsArr = text.trim().split(" "); // Using trim() to remove those empty strings from wordsArr
    const filteredWords = wordsArr.filter(word => word !== "") // Using filter() to also remove empty strings from wordsArr
    return filteredWords.length;
  }
  
  // Step 5: Make it so the user can play the game again
  function startGame() {
    setIsRunning(true);
    setTimer(TIMER);
    setWordCounter(0);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus(); // Allows the user to focus on the textbox when the button is clicked
  }
  
  function endGame() {
    setIsRunning(false);
    setWordCounter(calculateWordCount(text))
  }
 
  // Step 3: Create the count down timer using useEffect & Step 4: Get the counter to start when the user clicks the start button
  useEffect(() => {
    if (isRunning && timer > 0) { // this runs if isRunning is true and the timer is above 0
      setTimeout(() => {
        setTimer(time => time - 1) // Aloowing the timer to count down by 1
      }, 1000);
    } else if (timer === 0) { // If the timer is 0 then setIsRunning to false
      endGame()
    }
  }, [timer, isRunning]);

  // console.log(text)

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        onChange={handleChange}
        value={text}
        disabled={!isRunning}
      />
      <h4>Time Remaining: {timer}</h4>
      <button disabled={isRunning} onClick={startGame}>Start</button>
      <h1>Word Count: {wordCounter}</h1>
    </div>
  )
}

export default App;