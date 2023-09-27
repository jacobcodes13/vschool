import React, { useContext, useState } from "react"
import { MovieContext } from "../../movieContext"

export default function Movie(props) {

  const { movieInfo } = props

  const { updateLikes } = useContext(MovieContext)

  // console.log(movieInfo)

  const [ likes, setLikes ] = useState(movieInfo.likes)

  function handleLike(likeId) {
    setLikes(likes + 1)

    updateLikes(likeId, likes + 1)
  } 

  return (
    <div className="movie--page" key={movieInfo._id}>
      <div className="movie--header">
        <h1>Title: { movieInfo.title }</h1>
        <div className="like--feature">
          <h2>Likes: { likes }</h2>
          <button onClick={() => handleLike(movieInfo._id)} className="like--button">Like</button>
        </div>
      </div>
      <div className="movie--image--description">
        <img className="movie--image" src={ movieInfo.image } alt="Cover Image" />
        <h2>Movie Description: { movieInfo.description }</h2>
      </div>
      <hr></hr>
    </div>
  )
}