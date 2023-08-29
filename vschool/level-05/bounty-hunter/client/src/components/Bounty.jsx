import React, { useState } from "react"

export default function Bounty(props) {
  // console.log(props)

  const { name, bountyAmount, type, _id } = props
  const [ toggleEdit, setToggleEdit ] = useState(false)

  return (
    <div className="bounty">
      <h1>Name: { name }</h1>
      <h2>Bounty Amount: { `$${bountyAmount}` }</h2>
      <p>Type: { type }</p>
      <button className="delete--btn" onClick={() => props.deleteBounty(_id)}>Delete</button>
    </div>
  )
}