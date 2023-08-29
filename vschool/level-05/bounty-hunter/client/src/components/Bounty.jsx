import React from "react"

export default function Bounty(props) {
  console.log(props)

  const { name, bountyAmount, type, _id } = props
  return (
    <div className="bounty">
      <h1>{ name }</h1>
      <h2>{ `$${bountyAmount}` }</h2>
      <p>{ type }</p>
    </div>
  )
}