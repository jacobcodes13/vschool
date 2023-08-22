import React, { useState, createContext, useEffect } from "react"
import axios from "axios"

const ValorantContext = createContext()

function ValorantContextProvider(props) {

  const [ characters, setCharacters ] = useState([])
  const [ weapons, setWeapons ] = useState([])

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents")
      .then(res => setCharacters(res.data.data))
      .catch(err => console.log("error with agents GET request: ", err))
  }, [])

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/weapons")
      .then(res => setWeapons(res.data.data))
      .catch(err=> console.log("error with weapons GET request: ", err))
  }, [])

  return (
    <ValorantContext.Provider value={{
      characters,
      weapons
    }}>
      {props.children}
    </ValorantContext.Provider>
  )
}

export { ValorantContext, ValorantContextProvider }