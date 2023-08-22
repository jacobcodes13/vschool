import React from "react"
import boxes from "./boxes"
import Box from "./Box"

export default function App() {
  const [squares, setSquares] = React.useState(boxes)
  
  function toggle(id) {
      setSquares(prevSquares => {
          return prevSquares.map(square => {
            // if the squares id matches the id then we want to change the squares "on" to "off" and put it back in with all the other squares
              return square.id === id ? {...square, on: !square.on} : square
          })
      })
  }

  /*
    function toggle(id) {
      setSquares(prevSquares => {
          const newSquares = []
          for(let i = 0; i < prevSquares.length; i++) {
              const currentSquare = prevSquares[i]
              if(currentSquare.id === id) {
                  const updatedSquare = {
                      ...currentSquare,
                      on: !currentSquare.on
                  }
                  newSquares.push(updatedSquare)
              } else {
                  newSquares.push(currentSquare)
              }
          }
          return newSquares
      })
    }
  */
  
  const squareElements = squares.map(square => (
      <Box 
          key={square.id} 
          id={square.id}
          on={square.on} 
          toggle={toggle}
          // toggle={() => toggle(quare.id)} every time we click on a box it'll remember its id through this
      />
  ))
  
  return (
      <main>
          {squareElements}
      </main>
  )
}
