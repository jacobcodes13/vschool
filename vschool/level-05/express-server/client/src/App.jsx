import React, { useState, useEffect } from "react"
import axios from "axios"
import User from "./components/User"

function App() {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    axios.get("/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log("axios get request error: ", err))
  }, [])

  return (
    <div>
      { users.map(user => <User {...user} key={user.name}/>) }
    </div>
  )
}

export default App
