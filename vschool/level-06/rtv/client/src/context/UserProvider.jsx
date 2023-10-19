import React, { useState } from "react"
import axios from "axios"

export const UserContext = React.createContext()

export default function UserProvider(props) {

  const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    issues: []
  }

  const [ userState, setUserState ] = useState(initialState)

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
      .catch(err => console.dir(err.response.data.errMsg))
  }

  function login(credentials) {
    axios.post("/api/auth/login", credentials)
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
      .catch(err => console.dir(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login
      }}>
      { props.children }
    </UserContext.Provider>
  )
}