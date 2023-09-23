import React, { useContext } from "react"
import { MovieContext } from "../movieContext"

export default function AddMovieForm() {

  const { addMovie, userInput, setUserInput } = useContext(MovieContext)

  function handleChange(e) {
    const{ name, value } = e.target

    setUserInput(prevInput => ({
      ...prevInput,
      [ name ]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    addMovie(userInput)

    setUserInput({
      title: "",
      image: "",
      description: ""
    })
  }

  // console.log(addMovie)

  return (
    <div>
      <form onSubmit={handleSubmit} className="add--movie--form">
        <input 
          type="text"
          placeholder="Title"
          name="title"
          value={userInput.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Cover Image"
          name="image"
          value={userInput.image}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={userInput.description}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <div className="form--display">
        <h1 className="form--title">{ userInput.title }</h1>
        <img src={ userInput.image } className="form--image" />
        <h2 className="form--description">{ userInput.description }</h2>
      </div>
    </div>
  )
}