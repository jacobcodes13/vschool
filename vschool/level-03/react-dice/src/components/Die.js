import React from"react"

export default function Die(props) {
  const {number} = props

  return (
    <div>
      <h1 className="dice">{number}</h1>
    </div>
  )
}