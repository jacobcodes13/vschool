import React, { useState } from "react"

export default function AddBountyForm(props) {
  // console.log(props)
  
  const initialInputs = { name: props.name || "", bounty: props.bounty || 0, type: props.type || "" }

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
    // console.log(inputs)

    props.submit(inputs, props._id)

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
        name="bounty"
        value={inputs.bounty}
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
      <button>{ props.btnText }</button>
    </form>
  )
}