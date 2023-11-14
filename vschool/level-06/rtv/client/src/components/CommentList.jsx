import React, { useContext } from "react";
import Comment from "./Comment";
import { UserContext } from "../context/UserProvider";

export default function CommentList(props) {

  const { comments } = useContext(UserContext)

  const { _id } = props

  const filteredComments = comments.filter(comment => comment.issue === _id)

  return (
    <div>
      { filteredComments.map(comment => 
        <Comment comment={ comment } key={ comment._id } />
      ) }
    </div>
  )
}