export default function Movie(props) {

  const { movieInfo } = props

  // console.log(movieInfo)

  return (
    <div className="movie--page">
      <div className="movie--header">
        <h1>Title: { movieInfo.title }</h1>
        <div className="like--feature">
          <h2>Likes: { movieInfo.likes }</h2>
          <button className="like--button">Like</button>
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