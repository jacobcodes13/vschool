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

  function deleteBounty(bountyId) {
    axios.delete(`/api/bounty/${bountyId}`)
      .then(res => {
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log("axios DELETE request error: ", err))
  }

  function editBounty(updatedObj, bountyId) {
    axios.put(`/api/bounty/${bountyId}`, updatedObj)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log("axios PUT request error: ", err))
  }

  useEffect(() => {
    getBounty()
  }, [])


  return (
    <div>
      <div className="bounty--container">
        <AddBountyForm
          submit={addBounty}
          btnText="Add Bounty"
          />
        { bounties.map(bounty => 
          <Bounty
            {...bounty}
            key={bounty.name}
            deleteBounty={deleteBounty}
            editBounty={editBounty}
          />) }
      </div>
    </div>
  )
}

export default App
