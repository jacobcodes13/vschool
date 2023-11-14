import React, { useState } from "react";

const initialInputs = {
  description: ""
}

export default function CommentForm(props) {
  // console.log(props)

  const { addComment, _id } = props

  const [ inputs, setInputs ] = useState(initialInputs)
  const [ toggle, setToggle ] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [ name ]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addComment(inputs, _id)
    setToggle(false)
  }

  function handleToggle() {
    setToggle(prev => !prev)
  }

  const { description } = inputs

  return (
    <form onSubmit={ handleSubmit }>
      { !toggle ? <button className="comment-button" onClick={handleToggle}>Add Comment</button>
       : 
        <div>
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Description"
          />
          <button>Submit</button>
        </div>
      }
    </form>
  )
}