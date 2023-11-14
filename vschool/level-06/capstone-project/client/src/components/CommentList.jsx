import React from "react"
import CommentForm from "./CommentForm"
import Comments from "./Comments"

export default function CommentList(props) {
  // console.log(props)

  const { filteredComments, addComment, movieInfo } = props

  // console.log(movieInfo)

  return (
    <div className="comment-list">
      <CommentForm movieId={ movieInfo._id } addComment={ addComment } />
      { filteredComments.map(comment => (
        <Comments { ...movieInfo } comment={ comment } key={ comment._id } />
      )) }
    </div>
  )
}