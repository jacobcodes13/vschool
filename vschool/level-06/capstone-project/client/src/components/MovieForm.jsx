import React, { useState } from "react";

const initialInputs = {
  title: "",
  description: "",
  image: ""
}

export default function MovieForm(props) {

  const { addMovie } = props

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
    addMovie(inputs)
    setInputs(initialInputs)
  }

  const { title, description, image } = inputs

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        name="title"
        value={title}
        onChange={ handleChange }
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={ handleChange }
        placeholder="Descirption"
      />
      <input
        type="text"
        name="image"
        value={image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <button>Add Movie</button>
    </form>
  )
}