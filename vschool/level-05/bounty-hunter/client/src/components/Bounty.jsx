import React, { useState } from "react"
import AddBountyForm from "./addBountyForm"

export default function Bounty(props) {
  console.log(props)

  const { name, bounty, type, _id } = props
  const [ toggleEdit, setToggleEdit ] = useState(false)

  return (
    <div className="bounty">
      { !toggleEdit ?
        <>
          <h1>Name: { name }</h1>
          <h2>Bounty Amount: { `$${bounty}` }</h2>
          <p>Type: { type }</p>
          <button className="delete--btn" onClick={() => props.deleteBounty(_id)}>Delete</button>
          <button className="edit--btn" onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Edit</button>
        </>
      :
        <>
          <AddBountyForm
            name={ name }
            bountyAmount={ bounty }
            type={ type }
            _id={ _id }
            btnText="Submit Edit"
            submit={ props.editBounty }
          />
          <button onClick={() => setToggleEdit(prevToggle => !prevToggle)}>Close</button>
        </>
      }
    </div>
  )
}