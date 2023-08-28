import React, { useState } from "react"

export default function AddUserForm(props) {
  const initialInputs = { name: props.name || "", age: props.age || 0, hobby: props.hobby || "" }
  const [ inputs, setInputs ] = useState(initialInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({...prevInputs, [ name ]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault()

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
        name="age" 
        value={inputs.age} 
        onChange={handleChange} 
        placeholder="Age"
      />
      <input 
        type="text" 
        name="hobby" 
        value={inputs.hobby} 
        onChange={handleChange} 
        placeholder="Hobby"
      />
     <button>{ props.btnText }</button>
    </form>
  )
}