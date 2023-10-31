import React from "react";

export default function Comment(props) {
  // console.log(props)

  const { comment } = props

  return (
    <div>
      { comment.description }
    </div>
  )
}