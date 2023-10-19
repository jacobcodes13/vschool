import React, { useContext } from "react"
// import IssueForm from "./IssueForm"
// import IssueList from "./IssueList"
// import Issue from "./Issue"
import { UserContext } from "../context/UserProvider"

export default function Profile() {

  const { user: { username } } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Welcome { username }!</h1>
      <h3>Add A Issue</h3>
      {/* <IssueForm /> */}
      <h3>Your Issues</h3>
      {/* <IssueList /> */}
    </div>
  )
}