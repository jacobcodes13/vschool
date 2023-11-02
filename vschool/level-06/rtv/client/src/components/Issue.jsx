import React, { useContext } from "react"
import CommentForm from "./CommentForm"
import { UserContext } from "../context/UserProvider"

export default function Issue(props) {
  // console.log(props)

  const { comments, upVoteIssue, downVoteIssue, addComment } = useContext(UserContext)
  
  const { title, description, _id, upVotes, downVotes, user } = props

  const filteredComments = comments.filter(comment => comment.issue === _id)

  const totalVotes = upVotes.length - downVotes.length

  return (
    <div className="issue">
      <div className="issue-container">
        <h1>{ user.username }</h1>
        <div className="issue-info">
          <h1>Title: { title }</h1>
          <h3>Description: { description }</h3>
        </div>
        <div>
          { totalVotes }
          <button onClick={() => upVoteIssue(_id)}>UpVote</button>
          <button onClick={() => downVoteIssue(_id)}>DownVote</button>
        </div>
      </div>
      <div className="comment">
        <CommentForm addComment={ addComment } _id={ _id } />
        { filteredComments.map(comment => {
          return (<div key={ comment._id }>Comment: { comment.description }</div>)
        }) }
      </div>
    </div>
  )
}