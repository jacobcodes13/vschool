import React, { useState, useEffect } from "react"
import axios from "axios"
import User from "./components/User"
import AddUserForm from "./components/AddUserForm"

function App() {
  const [ users, setUsers ] = useState([])

  function getUsers() {
    axios.get("/api/users")
    .then(res => setUsers(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }

  function addUser(newUser) {
    axios.post("/api/users", newUser)
      .then(res => {
        setUsers(prevUsers => [...prevUsers, res.data])
      })
      .catch(err => console.log("axios POST request error: ", err))
  }

  function deleteUser(userId) {
    axios.delete(`/api/users/${userId}`)
      .then(res => {
        setUsers(prevUsers => prevUsers.filter(user => user._id !== userId))
      })
      .catch(err => console.log("axios DELETE request error: ", err))
  }

  function editUser(updatesObj, userId) {
    axios.put(`/api/users/${userId}`, updatesObj)
      .then(res => {
        setUsers(prevUsers => prevUsers.map(user => user._id !== userId ? user : res.data)) 
      })
      .catch(err => console.log("axios PUT request error: ", err))
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <div className="user--container">
        <AddUserForm 
          submit={addUser}
          btnText="Add User"
        />
        { users.map(user => 
          <User
            {...user}
            key={user.name}
            deleteUser={deleteUser}
            editUser={editUser}
          />) }
      </div>
    </div>
  )
}

export default App
