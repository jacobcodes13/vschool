import React, { useContext, useEffect } from "react"
import IssueList from "./IssueList"
import { UserContext } from "../context/UserProvider"

export default function Public() {

  const { allIssues, getAllIssues } = useContext(UserContext)

  useEffect(() => {
    getAllIssues()
  }, [])

  // console.log(allIssues)

  return (
    <div className="public-container">
      <IssueList issues={ allIssues } />
    </div>
  )
}