import React, { useState } from "react"
import axios from "axios"

const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

function UserProvider(props) {

  const storedUser = localStorage.getItem("user")
  const storedToken = localStorage.getItem("token")
  
  const initialState = {
    user: storedUser || {},
    token: storedToken || "",
    issues: [],
    errMsg: ""
  }
  
  const [ allIssues, setAllIssues ] = useState([])
  const [ comments, setComments ] = useState([])
  const [ userState, setUserState ] = useState(initialState)

  // USER AUTH //

  function signup(credentials) {
    axios.post("/api/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthError(err.response.data.errMsg))
  }

  function login(credentials) {
    axios.post("/api/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getUserIssues()

        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => handleAuthError(err.response.data.errMsg))
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState({
      user: {},
      token: "",
      issues: []
    })
  }

  function handleAuthError(errMsg) {
    setUserState(prevState => ({
      ...prevState,
      errMsg
    }))
  }

  function resetAuthError() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
  }

  // ISSUES //

  function getAllIssues() {
    userAxios.get("/api/issues")
      .then(res => {
        // console.log("getAllIssues", res.data);
        setAllIssues(res.data); // Update allIssues state with fetched data
      })
      .catch(err => console.log(err));
  }

  function getUserIssues() {
    userAxios.get("/api/issues/user")
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: res.data
        }))
      })
      .catch(err => console.log(err))
  }

  function addIssue(newIssue) {
    userAxios.post("/api/issues", newIssue)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: [ ...prevState.issues, res.data ]
        }))
      })
      .catch(err => console.log(err))
  }

  // COMMENTS //

  function getAllComments() {
    userAxios.get("/api/comments")
      .then(res => {
        setComments(res.data)
      })
      .catch(err => console.log(err))
  }

  function addComment(newComment, issueId) {
    // console.log("addComment in UserProvider: ", issueId)
    console.log(newComment)
    userAxios.post(`/api/comments/${ issueId }`, newComment)
      .then(res => {
        // console.log(res.data)
        setComments(prev => [ ...prev, res.data ])
      })
      .catch(err => console.log(err))
  }

  // VOTING //

  function upVoteIssue(issueId) {
    userAxios.put(`/api/issues/upvotes/${ issueId }`)
      .then(res => {
        setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
        setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
      })
      .catch(err => console.log(err))
  }

  function downVoteIssue(issueId) {
    userAxios.put(`/api/issues/downvotes/${ issueId }`)
      .then(res => {
        setAllIssues(prevIssues => prevIssues.map(issue => issueId !== issue._id ? issue : res.data))
        setUserState(prevUserState => ({ ...prevUserState, issues: prevUserState.issues.map(issue => issueId !== issue._id ? issue : res.data) }))
      })
      .catch(err => console.log(err))
  }

  // console.log(userState)
  // console.log(allIssues)

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
        resetAuthError,
        getUserIssues,
        getAllIssues,
        allIssues,
        getAllComments,
        addComment,
        comments,
        upVoteIssue,
        downVoteIssue
      }}>
      { props.children }
    </UserContext.Provider>
  )
}

export { UserProvider, UserContext }