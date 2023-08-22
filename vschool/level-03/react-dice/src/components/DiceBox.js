import React from "react"
import Die from "./Die"

export default function DicBox(props) {
  const {numbers} = props

  return (
    <div className="roll">
      <Die 
        number={numbers[0]}
      />
      <Die 
        number={numbers[1]}
      />
      <Die 
        number={numbers[2]}
      />
      <Die 
        number={numbers[3]}
      />
      <Die 
        number={numbers[4]}
      />
    </div>
  )
}