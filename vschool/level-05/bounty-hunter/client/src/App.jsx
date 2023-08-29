import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty"

function App() {
  const [ bounties, setBounties ] = useState([])

  function getBounty() {
    axios.get("/api/bounty")
      .then(res => setBounties(res.data))
      .catch(err => console.log("axios GET request error: ", err))
  }

  useEffect(() => {
    getBounty()
  }, [])


  return (
    <div>
      <div className="bounty--container">
        { bounties.map(bounty => 
          <Bounty
            {...bounty}
            key={bounty.name}
          />)
        }
      </div>
    </div>
  )
}

export default App
