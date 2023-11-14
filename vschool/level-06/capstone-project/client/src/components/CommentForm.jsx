import React, { useState } from "react";

const initialInputs = {
  description: ""
}

export default function CommentForm(props) {

  // console.log(props)

  const { addComment, movieId } = props

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
    addComment(inputs, movieId)
    setInputs(initialInputs)
  }

  const { description } = inputs

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        name="description"
        value={ description }
        onChange={ handleChange }
        placeholder="Description"
      />
      <button>Submit</button>
    </form>
  )
}