import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {
              // if messages.length is greater than 0 then display this
              messages.length > 0 && 
              <h1>You have {messages.length} unread messages!</h1>
            }
        </div>
    )
}

/*
  <div>
    {
      if messages.length equals 0 then display "you're all caught up" if its not then display "you have ... unread message(s)"
      messages.length === 0 ?
      <h1>You're all caught up!</h1> :
      <h1>You have {messages.length} unread 
      {messages.length > 1 ? "messages" : "message"}</h1>
    }
  </div>
*/


/*
  conditional rendering: ternary

  Whenever a punchline is shown then it will display "hide punchline" and whenever it isnt itll display "show punchline"

  <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
*/

/*
  1. What is "conditional rendering"?
  When we want to only sometimes display something on the page
  based on a condition of some sort


  2. When would you use &&?
  When you want to either display something or NOT display it


  3. When would you use a ternary?
  When you need to decide which thing among 2 options to display


  4. What if you need to decide between > 2 options on
    what to display?
  Use an `if...else if... else` conditional or a `switch` statement

  how to write an if...else if statement (has to be outside the return)

  function App() {
    let someVar
    if () {
        someVar = <SomeJSX />
    } else if() {
        
    } else {
        
    }
    return (
        <div>{someVar}</div>
    )
  }
*/