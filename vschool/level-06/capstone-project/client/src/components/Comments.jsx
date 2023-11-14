import React from "react";

export default function Comments(props) {
  // console.log(props)

  const { comment, user } = props

  return (
    <div className="comment">
      <div>
        POSTED by: { user.username }
      </div>
      { comment.description }
    </div>
  )
}