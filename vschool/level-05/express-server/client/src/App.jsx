import React, { useState, useEffect } from "react"
import axios from "axios"
import User from "./components/User"
import AddUserForm from "./components/AddUserForm"

function App() {
  const [ users, setUsers ] = useState([])

  function getUsers() {
    axios.get("/api/users")
    .then(res => setUsers(res.data))
    .catch(err => console.log("axios GET request error: ", err))
  }

  function addUser(newUser) {
    axios.post("/api/users", newUser)
      .then(res => {
        setUsers(prevUsers => [...prevUsers, res.data])
      })
      .catch(err => onsole.log("axios POST request error: ", err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className="user--container">
        <AddUserForm 
          addUser={addUser}
        />
        { users.map(user => <User {...user} key={user.name}/>) }
      </div>
    </div>
  )
}

export default App
