import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty"
import AddBountyForm from "./components/addBountyForm"

function App() {
  const [ bounties, setBounties ] = useState([])

  function getBounty() {
    axios.get("/api/bounty")
      .then(res => setBounties(res.data))
      .catch(err => console.log("axios GET request error: ", err))
  }

  function addBounty(newBounty) {
    axios.post("/api/bounty", newBounty)
      .then(res => {
          setBounties(prevBounties => [...prevBounties, res.data])
        })
      .catch(err => console.log("axios POST request error: ", err))
  }

  useEffect(() => {
    getBounty()
  }, [])


  return (
    <div>
      <div className="bounty--container">
        <AddBountyForm
          addBounty={addBounty}
        />
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
