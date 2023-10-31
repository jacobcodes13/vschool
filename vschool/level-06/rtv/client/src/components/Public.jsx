import React, { useContext, useEffect } from "react"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"
import { UserContext } from "../context/UserProvider"

export default function Public() {

  const { allIssues, getAllIssues, addComment } = useContext(UserContext)

  useEffect(() => {
    getAllIssues()
  }, [])

  // console.log(allIssues)

  return (
    <div className="public-container">
      { allIssues.map(issue => (
        <div key={ issue._id } className="public">
          <div className="public-info">
            <div className="public-issue-title">Post Info:</div>
            <h1>{ issue.title }</h1>
            <h3>{ issue.description }</h3>
            <CommentForm addComment={addComment} { ...issue } />
            <CommentList { ...issue } />
          </div>
        </div>
      )) }
    </div>
  )
}