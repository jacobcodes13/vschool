import React from "react";

export default function Movie(props) {
  // console.log(props)

  const { title, description, image, _id } = props

  return (
    <div className="movie-page" key={_id}>

      <div className="movie-header">
        <h1>Title: { title }</h1>
      </div>

      <div className="movie-image-description">
        <img className="movie-image" src={ image } alt="Cover Image" />
        <h2>Movie Description: { description }</h2>
      </div>
      
      <hr></hr>
    </div>
  )
}