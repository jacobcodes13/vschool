import React, { useState } from "react"

export default function AddBountyForm(props) {
  const initialInputs = { name: "", bountyAmount: 0, type: "" }

  const [ inputs, setInputs ] = useState(initialInputs)

  function handleChange(e) {
    const { name, value } = e.target

    setInputs(prevInputs => ({
      ...prevInputs,
      [ name ]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputs)

    props.addBounty(inputs)

    setInputs(initialInputs)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="Name"    
      />
      <input
        type="number"
        name="bountyAmount"
        value={inputs.bountyAmount}
        onChange={handleChange}
        placeholder="Bounty Amount"
      />
      <input
        type="text"
        name="type"
        value={inputs.type}
        onChange={handleChange}
        placeholder="Type (Sith or Jedi)"    
      />
      <button>Add Bounty</button>
    </form>
  )
}